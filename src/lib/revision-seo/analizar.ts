import { descargar, descargarOpcional, normalizarUrl, RevisionError, type Descarga } from "./fetch";

// ─── Revisión SEO express ────────────────────────────────────────────────────
// Reglas fijas sobre el HTML de UNA página, su robots.txt y su sitemap.
// No usa servicios externos ni inteligencia artificial.

export type Estado = "bien" | "mejorar" | "critico";
export type Grupo = "Lo que lee Google" | "Rastreo e indexación" | "Cómo se muestra" | "Experiencia";

export interface Punto {
  id: string;
  grupo: Grupo;
  estado: Estado;
  titulo: string;
  hallazgo: string;
  arreglo: string;
  peso: number;
}

export interface Revision {
  url: string;
  urlFinal: string;
  fecha: string;
  puntaje: number;
  resumen: { bien: number; mejorar: number; critico: number };
  puntos: Punto[];
  prioridades: string[]; // ids de los puntos a arreglar primero
  aviso?: string;
}

const limpiar = (s: string) =>
  s.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();

function meta(html: string, clave: string, atributo: "name" | "property" = "name"): string | null {
  const re = new RegExp(`<meta[^>]*${atributo}=["']${clave}["'][^>]*>`, "i");
  const etiqueta = html.match(re)?.[0];
  if (!etiqueta) return null;
  const contenido = etiqueta.match(/content=["']([^"']*)["']/i)?.[1] ?? etiqueta.match(/content=([^\s>]+)/i)?.[1];
  return contenido != null ? limpiar(contenido) : null;
}

function tiposJsonLd(html: string): string[] {
  const tipos = new Set<string>();
  for (const bloque of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    for (const t of bloque[1].matchAll(/"@type"\s*:\s*(?:"([^"]+)"|\[([^\]]+)\])/g)) {
      if (t[1]) tipos.add(t[1]);
      else t[2]?.match(/"([^"]+)"/g)?.forEach((x) => tipos.add(x.replace(/"/g, "")));
    }
  }
  return [...tipos];
}

function analizarHtml(pagina: Descarga, robots: Descarga | null, sitemap: { url: string; ok: boolean } | null): { puntos: Punto[]; aviso?: string } {
  const html = pagina.cuerpo;
  const cabeza = html.match(/<head[\s\S]*?<\/head>/i)?.[0] ?? html;
  const cuerpoSinCodigo = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<noscript[\s\S]*?<\/noscript>|<!--[\s\S]*?-->/gi, " ");
  const texto = limpiar(cuerpoSinCodigo.match(/<body[\s\S]*<\/body>/i)?.[0] ?? cuerpoSinCodigo);
  const palabras = texto ? texto.split(" ").length : 0;
  const puntos: Punto[] = [];
  const add = (p: Punto) => puntos.push(p);
  const host = pagina.urlFinal.hostname;

  // ── Lo que lee Google ──────────────────────────────────────────────────────
  const titulo = limpiar(cabeza.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  add({
    id: "titulo", grupo: "Lo que lee Google", peso: 3,
    estado: !titulo ? "critico" : titulo.length < 30 || titulo.length > 60 ? "mejorar" : "bien",
    titulo: "Título de la página",
    hallazgo: !titulo ? "La página no tiene título." : `«${titulo}» (${titulo.length} caracteres).`,
    arreglo: !titulo
      ? "Agrega una etiqueta <title> que diga qué ofreces y dónde, en 50 a 60 caracteres. Es lo primero que se lee en Google."
      : titulo.length > 60
        ? "Recórtalo a unos 60 caracteres: Google corta lo que sobra y se pierde el final. Deja lo más importante al principio."
        : titulo.length < 30
          ? "Es corto: aprovecha hasta 60 caracteres para decir qué ofreces y en qué ciudad o para quién."
          : "Tiene buena longitud. Revisa que mencione lo que buscaría tu cliente.",
  });

  const descripcion = meta(cabeza, "description") ?? "";
  add({
    id: "descripcion", grupo: "Lo que lee Google", peso: 2,
    estado: !descripcion ? "critico" : descripcion.length < 70 || descripcion.length > 160 ? "mejorar" : "bien",
    titulo: "Descripción para Google",
    hallazgo: !descripcion ? "No tiene descripción (meta description)." : `${descripcion.length} caracteres: «${descripcion.slice(0, 110)}${descripcion.length > 110 ? "…" : ""}»`,
    arreglo: !descripcion
      ? "Escribe una descripción de 140 a 155 caracteres con qué ofreces y una razón para entrar. Sin ella, Google arma el texto por su cuenta."
      : descripcion.length > 160
        ? "Recórtala a unos 155 caracteres para que no salga cortada en el resultado."
        : descripcion.length < 70
          ? "Es muy corta. Úsala como un mini anuncio: qué ofreces, para quién y por qué entrar (140 a 155 caracteres)."
          : "Buena longitud. Verifica que invite a hacer clic.",
  });

  const h1s = [...cuerpoSinCodigo.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => limpiar(m[1])).filter(Boolean);
  add({
    id: "h1", grupo: "Lo que lee Google", peso: 2,
    estado: h1s.length === 1 ? "bien" : h1s.length === 0 ? "critico" : "mejorar",
    titulo: "Encabezado principal (H1)",
    hallazgo: h1s.length === 0 ? "No encontré ningún H1." : h1s.length === 1 ? `«${h1s[0].slice(0, 100)}»` : `Hay ${h1s.length} encabezados H1; debería haber uno solo.`,
    arreglo: h1s.length === 0
      ? "Marca el titular principal de la página como H1. Le dice a Google de qué trata la página."
      : h1s.length > 1
        ? "Deja un solo H1 con el tema de la página y pasa los demás a H2."
        : "Hay un solo H1, como debe ser.",
  });

  const robotsMeta = (meta(cabeza, "robots") ?? "").toLowerCase();
  const robotsCabecera = (pagina.cabeceras.get("x-robots-tag") ?? "").toLowerCase();
  const noindex = robotsMeta.includes("noindex") || robotsCabecera.includes("noindex");
  add({
    id: "indexable", grupo: "Rastreo e indexación", peso: 4,
    estado: noindex ? "critico" : "bien",
    titulo: "Permiso para aparecer en Google",
    hallazgo: noindex ? "La página le pide a Google que NO la muestre (noindex)." : "La página permite que Google la muestre.",
    arreglo: noindex
      ? "Quita la instrucción noindex si quieres que esta página aparezca en Google. Suele quedar activada desde que el sitio estaba en construcción."
      : "Nada que hacer aquí.",
  });

  const canonico = cabeza.match(/<link[^>]*rel=["']canonical["'][^>]*>/i)?.[0].match(/href=["']([^"']+)["']/i)?.[1] ?? "";
  let canonicoOtroSitio = false;
  try {
    canonicoOtroSitio = !!canonico && new URL(canonico, pagina.urlFinal).hostname.replace(/^www\./, "") !== host.replace(/^www\./, "");
  } catch { /* canónico ilegible: se trata como ausente */ }
  add({
    id: "canonico", grupo: "Rastreo e indexación", peso: 1,
    estado: !canonico || canonicoOtroSitio ? "mejorar" : "bien",
    titulo: "Dirección oficial de la página (canonical)",
    hallazgo: !canonico ? "No indica cuál es su dirección oficial." : canonicoOtroSitio ? `Apunta a otro dominio: ${canonico}` : `Declarada: ${canonico}`,
    arreglo: !canonico
      ? "Agrega la etiqueta canonical con la dirección definitiva de la página. Evita que Google la cuente como duplicada cuando se abre con parámetros."
      : canonicoOtroSitio
        ? "Revisa la etiqueta canonical: hoy le dice a Google que la versión oficial vive en otro dominio."
        : "Correcto.",
  });

  const idioma = html.match(/<html[^>]*\slang=["']([^"']+)["']/i)?.[1] ?? "";
  add({
    id: "idioma", grupo: "Lo que lee Google", peso: 1,
    estado: idioma ? "bien" : "mejorar",
    titulo: "Idioma declarado",
    hallazgo: idioma ? `La página declara el idioma «${idioma}».` : "La página no declara en qué idioma está.",
    arreglo: idioma ? "Correcto." : 'Agrega el atributo lang a la etiqueta <html> (por ejemplo lang="es-CO"). Ayuda a Google y a los lectores de pantalla.',
  });

  // ── Rastreo ────────────────────────────────────────────────────────────────
  add({
    id: "https", grupo: "Rastreo e indexación", peso: 3,
    estado: pagina.urlFinal.protocol === "https:" ? "bien" : "critico",
    titulo: "Conexión segura (HTTPS)",
    hallazgo: pagina.urlFinal.protocol === "https:" ? "El sitio carga con HTTPS." : "El sitio carga sin HTTPS: el navegador lo marca como no seguro.",
    arreglo: pagina.urlFinal.protocol === "https:" ? "Correcto." : "Activa el certificado SSL en tu hosting (casi siempre es gratis) y redirige todo a https://.",
  });

  add({
    id: "respuesta", grupo: "Rastreo e indexación", peso: 1,
    estado: pagina.estado !== 200 ? "critico" : pagina.saltos > 1 ? "mejorar" : "bien",
    titulo: "Respuesta del servidor",
    hallazgo: pagina.estado !== 200 ? `La página respondió con código ${pagina.estado}.` : pagina.saltos > 1 ? `Carga bien, pero pasa por ${pagina.saltos} redirecciones antes de llegar.` : "Carga directo, sin rodeos.",
    arreglo: pagina.estado !== 200
      ? "La página debería responder con código 200. Revisa con tu desarrollador o tu hosting por qué responde distinto."
      : pagina.saltos > 1
        ? "Deja una sola redirección hacia la dirección final. Cada salto extra hace más lenta la entrada y le cuesta a Google."
        : "Correcto.",
  });

  const txtRobots = robots && robots.estado === 200 && !/<html/i.test(robots.cuerpo) ? robots.cuerpo : "";
  const bloqueaTodo = /user-agent:\s*\*[^]*?disallow:\s*\/\s*(\n|$)/i.test(txtRobots.split(/\n\s*\n/).find((b) => /user-agent:\s*\*/i.test(b)) ?? "");
  add({
    id: "robots", grupo: "Rastreo e indexación", peso: 2,
    estado: bloqueaTodo ? "critico" : txtRobots ? "bien" : "mejorar",
    titulo: "Archivo robots.txt",
    hallazgo: bloqueaTodo ? "El robots.txt le bloquea TODO el sitio a los buscadores." : txtRobots ? "Existe y no bloquea el sitio." : "No encontré robots.txt.",
    arreglo: bloqueaTodo
      ? 'Quita la línea "Disallow: /" del robots.txt. Mientras esté, Google no puede leer el sitio.'
      : txtRobots
        ? "Correcto."
        : "Crea un robots.txt en la raíz del dominio que permita el rastreo e indique dónde está el sitemap.",
  });

  add({
    id: "sitemap", grupo: "Rastreo e indexación", peso: 2,
    estado: sitemap?.ok ? "bien" : "mejorar",
    titulo: "Mapa del sitio (sitemap)",
    hallazgo: sitemap?.ok ? `Encontrado en ${sitemap.url}` : "No encontré un sitemap en el robots.txt ni en /sitemap.xml.",
    arreglo: sitemap?.ok ? "Correcto. Verifica que esté enviado en Search Console." : "Genera un sitemap.xml con todas tus páginas y envíalo en Google Search Console. Es la lista que Google usa para descubrirlas.",
  });

  // ── Cómo se muestra ────────────────────────────────────────────────────────
  const tipos = tiposJsonLd(html);
  add({
    id: "datos", grupo: "Cómo se muestra", peso: 2,
    estado: tipos.length ? "bien" : "mejorar",
    titulo: "Datos estructurados",
    hallazgo: tipos.length ? `Tiene datos estructurados: ${tipos.slice(0, 6).join(", ")}.` : "No tiene datos estructurados (schema).",
    arreglo: tipos.length
      ? "Correcto. Valídalos en la prueba de resultados enriquecidos de Google."
      : "Agrega datos estructurados según tu negocio (por ejemplo LocalBusiness, Product o FAQPage). Le explican a Google y a los asistentes de IA quién eres y qué ofreces.",
  });

  const og = { t: meta(cabeza, "og:title", "property"), i: meta(cabeza, "og:image", "property") };
  add({
    id: "compartir", grupo: "Cómo se muestra", peso: 1,
    estado: og.t && og.i ? "bien" : "mejorar",
    titulo: "Vista previa al compartir",
    hallazgo: og.t && og.i ? "Tiene título e imagen para WhatsApp y redes." : !og.t && !og.i ? "No define título ni imagen para cuando se comparte el enlace." : !og.i ? "Le falta la imagen para cuando se comparte el enlace." : "Le falta el título para cuando se comparte el enlace.",
    arreglo: og.t && og.i ? "Correcto." : "Agrega las etiquetas og:title, og:description y og:image (1200 × 630 px). Así el enlace se ve con imagen en WhatsApp y redes.",
  });

  // ── Experiencia ────────────────────────────────────────────────────────────
  const viewport = meta(cabeza, "viewport");
  add({
    id: "movil", grupo: "Experiencia", peso: 3,
    estado: viewport ? "bien" : "critico",
    titulo: "Preparada para celular",
    hallazgo: viewport ? "Declara la configuración para pantallas de celular." : "No declara la etiqueta viewport: en celular se verá como una página de computador encogida.",
    arreglo: viewport ? "Correcto. Pruébala igual en un celular real." : 'Agrega <meta name="viewport" content="width=device-width, initial-scale=1"> y revisa que el diseño se adapte.',
  });

  const imgs = cuerpoSinCodigo.match(/<img\b[^>]*>/gi) ?? [];
  const sinAlt = imgs.filter((i) => !/\balt=/i.test(i)).length;
  add({
    id: "imagenes", grupo: "Experiencia", peso: 1,
    estado: imgs.length === 0 || sinAlt === 0 ? "bien" : sinAlt / imgs.length > 0.3 ? "critico" : "mejorar",
    titulo: "Texto alternativo en imágenes",
    hallazgo: imgs.length === 0 ? "No encontré imágenes en el HTML." : sinAlt === 0 ? `Las ${imgs.length} imágenes tienen el atributo alt.` : `${sinAlt} de ${imgs.length} imágenes no tienen texto alternativo.`,
    arreglo: sinAlt === 0 ? "Correcto." : "Describe cada imagen en su atributo alt. Sirve para la búsqueda de imágenes y para quienes usan lector de pantalla.",
  });

  add({
    id: "velocidad", grupo: "Experiencia", peso: 2,
    estado: pagina.ms < 1200 ? "bien" : pagina.ms < 2500 ? "mejorar" : "critico",
    titulo: "Tiempo de respuesta del servidor",
    hallazgo: `El servidor tardó ${(pagina.ms / 1000).toFixed(1).replace(".", ",")} s en entregar la página (medición única, orientativa).`,
    arreglo: pagina.ms < 1200 ? "Buen tiempo de respuesta." : "Activa caché en el servidor o en tu plataforma y revisa el plan de hosting. Lo ideal es que responda en menos de un segundo.",
  });

  const kb = Math.round(pagina.bytes / 1024);
  add({
    id: "peso", grupo: "Experiencia", peso: 1,
    estado: kb < 250 ? "bien" : "mejorar",
    titulo: "Peso del código de la página",
    hallazgo: `El HTML pesa ${kb} KB${pagina.bytes >= 1_500_000 ? " o más" : ""}.`,
    arreglo: kb < 250 ? "Peso razonable." : "El HTML es pesado. Suele deberse a constructores visuales o código incrustado: conviene limpiar plantillas y cargar scripts solo donde se usan.",
  });

  add({
    id: "contenido", grupo: "Lo que lee Google", peso: 2,
    estado: palabras >= 300 ? "bien" : "mejorar",
    titulo: "Cantidad de texto",
    hallazgo: `Encontré unas ${palabras} palabras de texto visible.`,
    arreglo: palabras >= 300
      ? "Hay texto suficiente para que Google entienda la página."
      : "Hay poco texto para que Google entienda de qué trata. Explica qué ofreces, para quién y en qué zona, y responde las preguntas frecuentes de tus clientes.",
  });

  const aviso = palabras < 60 && (html.match(/<script/gi)?.length ?? 0) > 8
    ? "Esta página arma su contenido con JavaScript, así que la revisión automática puede quedarse corta en textos y encabezados."
    : undefined;
  return { puntos, aviso };
}

export async function revisar(entrada: string): Promise<Revision> {
  const url = normalizarUrl(entrada);
  const pagina = await descargar(url);
  const tipo = pagina.cabeceras.get("content-type") ?? "";
  if (!/html/i.test(tipo) && !/<html/i.test(pagina.cuerpo.slice(0, 2000))) {
    throw new RevisionError("no-html", "Esa dirección no devuelve una página web (puede ser un archivo o una imagen).");
  }
  if ([401, 403, 429, 503].includes(pagina.estado) && pagina.cuerpo.length < 20_000) {
    throw new RevisionError("bloqueo", "El sitio bloqueó la revisión automática (suele ser un cortafuegos). Escríbeme y lo reviso a mano.");
  }
  if (pagina.estado >= 400) {
    throw new RevisionError("sin-respuesta", `El sitio respondió con un error (código ${pagina.estado}), así que no hay página que revisar. Si es tu sitio, eso es lo primero que hay que arreglar.`);
  }

  const raiz = new URL("/", pagina.urlFinal);
  const robots = await descargarOpcional(new URL("/robots.txt", raiz));
  const declarado = robots?.estado === 200 ? robots.cuerpo.match(/^\s*sitemap:\s*(\S+)/im)?.[1] : undefined;
  let sitemap: { url: string; ok: boolean } | null = null;
  for (const candidato of [declarado, new URL("/sitemap.xml", raiz).href, new URL("/sitemap_index.xml", raiz).href]) {
    if (!candidato) continue;
    let destino: URL;
    try { destino = new URL(candidato, raiz); } catch { continue; }
    const res = await descargarOpcional(destino);
    if (res?.estado === 200 && /<(urlset|sitemapindex)/i.test(res.cuerpo.slice(0, 5000))) {
      sitemap = { url: destino.href, ok: true };
      break;
    }
  }

  const { puntos, aviso } = analizarHtml(pagina, robots, sitemap);
  const valor = { bien: 1, mejorar: 0.5, critico: 0 } as const;
  const total = puntos.reduce((s, p) => s + p.peso, 0);
  const puntaje = Math.round((puntos.reduce((s, p) => s + p.peso * valor[p.estado], 0) / total) * 100);
  const orden = { critico: 0, mejorar: 1, bien: 2 } as const;
  const prioridades = puntos
    .filter((p) => p.estado !== "bien")
    .sort((a, b) => orden[a.estado] - orden[b.estado] || b.peso - a.peso)
    .slice(0, 3)
    .map((p) => p.id);

  return {
    url: url.href,
    urlFinal: pagina.urlFinal.href,
    fecha: new Date().toISOString(),
    puntaje,
    resumen: {
      bien: puntos.filter((p) => p.estado === "bien").length,
      mejorar: puntos.filter((p) => p.estado === "mejorar").length,
      critico: puntos.filter((p) => p.estado === "critico").length,
    },
    puntos,
    prioridades,
    aviso,
  };
}

export { RevisionError };
