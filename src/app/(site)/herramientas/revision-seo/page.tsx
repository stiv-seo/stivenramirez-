import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SubpageFAQ } from "@/components/sections/subpage/SubpageFAQ";
import { RevisionSeoTool } from "@/components/sections/herramientas/RevisionSeoTool";
import { CALENDLY_URL, SITE_URL } from "@/lib/constants";

const URL_PAGINA = `${SITE_URL}/herramientas/revision-seo/`;

export const metadata: Metadata = {
  title: "Revisión SEO gratis de tu página web | Herramienta",
  description:
    "Escribe la dirección de tu sitio y revisa gratis 17 puntos de SEO: título, descripción, indexación, sitemap, datos estructurados y velocidad. Sin registro.",
  keywords: ["revisión seo gratis", "analizar seo de mi página", "auditoria seo gratis colombia", "test seo página web"],
  alternates: { canonical: URL_PAGINA, languages: { "es-CO": URL_PAGINA, "x-default": URL_PAGINA } },
  openGraph: {
    title: "Revisión SEO gratis de tu página web",
    description: "17 puntos de SEO revisados en segundos: qué está bien, qué falta y por dónde empezar.",
    url: URL_PAGINA,
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const esquemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Revisión SEO express",
    url: URL_PAGINA,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cualquiera (navegador web)",
    inLanguage: "es-CO",
    description: "Herramienta gratuita que revisa 17 puntos de SEO de una página web y explica por dónde empezar a mejorarla.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "COP" },
    author: { "@type": "Person", name: "Stiven Ramírez", url: SITE_URL },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Revisión SEO gratis", item: URL_PAGINA },
    ],
  },
];

const REVISA = [
  { grupo: "Lo que lee Google", items: ["Título de la página y su longitud", "Descripción para el resultado de búsqueda", "Encabezado principal (H1)", "Idioma declarado", "Cantidad de texto"] },
  { grupo: "Rastreo e indexación", items: ["Permiso para aparecer en Google (noindex)", "Dirección oficial (canonical)", "Conexión segura (HTTPS)", "Respuesta del servidor y redirecciones", "Archivo robots.txt", "Mapa del sitio (sitemap)"] },
  { grupo: "Cómo se muestra", items: ["Datos estructurados (schema)", "Vista previa al compartir en WhatsApp y redes"] },
  { grupo: "Experiencia", items: ["Preparada para celular", "Texto alternativo en imágenes", "Tiempo de respuesta del servidor", "Peso del código de la página"] },
];

export default function RevisionSeoPage() {
  return (
    <>
      {esquemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <RevisionSeoTool />

      {/* ── Qué revisa ────────────────────────────────────────────────────── */}
      <section className="bg-off-white" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
        <Container>
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
            <div>
              <h2 className="font-jakarta font-extrabold leading-[1.1] tracking-[-1px] text-text-dark" style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}>
                Qué revisa, punto por punto
              </h2>
              <p className="mt-5 max-w-[42ch] font-sans text-base leading-[1.75] text-text-mid">
                Son las mismas comprobaciones básicas que hago a mano al empezar con un cliente. La herramienta abre tu página como lo haría un buscador y lee su código, su robots.txt y su sitemap.
              </p>
            </div>
            <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {REVISA.map((g) => (
                <div key={g.grupo}>
                  <h3 className="border-b border-black/10 pb-3 font-jakarta text-lg font-bold tracking-[-0.3px] text-text-dark">{g.grupo}</h3>
                  <ul className="mt-3 grid gap-2 font-sans text-[15px] leading-relaxed text-text-mid">
                    {g.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Qué no revisa ─────────────────────────────────────────────────── */}
      <section className="bg-warm-white" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
        <Container>
          <div className="max-w-[720px]">
            <h2 className="font-jakarta font-extrabold leading-[1.1] tracking-[-1px] text-text-dark" style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}>
              Lo que una revisión automática no ve
            </h2>
            <p className="mt-5 font-sans text-base leading-[1.75] text-text-mid">
              Esta herramienta mira una sola página y solo lo que se puede comprobar con reglas. No sabe qué busca tu cliente, contra quién compites ni si tus textos convencen. Tampoco recorre el resto del sitio, donde suelen estar los enlaces rotos y las páginas duplicadas.
            </p>
            <p className="mt-4 font-sans text-base leading-[1.75] text-text-mid">
              Para eso está la{" "}
              <Link href="/servicios/seo/auditoria/" className="font-semibold text-text-dark underline decoration-teal decoration-2 underline-offset-4 hover:text-teal">auditoría SEO</Link>
              : palabras clave, competencia, todo el sitio y un plan de acción a 90 días.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/servicios/seo/auditoria/" variant="dark">Ver la auditoría SEO</Button>
              <Button href={CALENDLY_URL} external variant="outline">Agendar 30 minutos sin costo</Button>
            </div>
          </div>
        </Container>
      </section>

      <SubpageFAQ
        bg="off-white"
        items={[
          { q: "¿La revisión SEO es gratis de verdad?", a: "Sí. Puedes revisar las páginas que quieras sin registrarte. Solo te pido el correo si quieres recibir el informe completo con el paso a paso para arreglar cada punto." },
          { q: "¿Qué hace con la dirección que escribo?", a: "La herramienta abre esa página una vez, lee su código y te muestra el resultado. No guardo la dirección ni el resultado. Si pides el informe por correo, recibo tu nombre, tu correo y el resultado para poder enviártelo." },
          { q: "¿Sirve para cualquier sitio: WordPress, Shopify, Wix?", a: "Sí, funciona con cualquier página pública. Si el sitio arma su contenido con JavaScript o tiene un cortafuegos que bloquea revisiones automáticas, la herramienta te avisa porque el resultado puede quedarse corto." },
          { q: "¿Un puntaje alto significa que voy a aparecer en Google?", a: "No. Un puntaje alto dice que la base técnica de esa página está en orden. Aparecer depende además de qué tan buscado es lo que ofreces, de tu competencia, de tus contenidos y de cuántos sitios te enlazan." },
          { q: "¿En qué se diferencia de una auditoría SEO?", a: "La revisión es automática y mira 17 puntos de una página. La auditoría la hago yo: revisa el sitio completo, las palabras clave, la competencia y termina en un plan de acción priorizado." },
        ]}
      />
    </>
  );
}
