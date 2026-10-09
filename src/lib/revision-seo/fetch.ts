import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

// ─── Descarga segura de una URL pública ──────────────────────────────────────
// La dirección la escribe un visitante: solo http(s), puertos estándar y nunca
// hacia redes privadas (se valida cada salto de redirección).

const UA =
  "Mozilla/5.0 (compatible; RevisionSEO/1.0; +https://stivenramirez.com/herramientas/revision-seo/)";
const MAX_BYTES = 1_500_000;
const MAX_REDIRECTS = 4;

export class RevisionError extends Error {
  constructor(public code: "url" | "privada" | "sin-respuesta" | "tiempo" | "no-html" | "bloqueo", message: string) {
    super(message);
  }
}

export function normalizarUrl(entrada: string): URL {
  const texto = entrada.trim();
  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(texto) ? texto : `https://${texto}`);
  } catch {
    throw new RevisionError("url", "Esa dirección no parece válida. Prueba con algo como tunegocio.com.");
  }
  if (!["http:", "https:"].includes(url.protocol) || !url.hostname.includes(".")) {
    throw new RevisionError("url", "Esa dirección no parece válida. Prueba con algo como tunegocio.com.");
  }
  if (url.port && !["80", "443"].includes(url.port)) {
    throw new RevisionError("url", "Solo puedo revisar sitios en los puertos habituales (80 o 443).");
  }
  url.hash = "";
  return url;
}

function esPrivada(ip: string): boolean {
  if (ip.includes(":")) {
    const v = ip.toLowerCase();
    if (v.startsWith("::ffff:")) return esPrivada(v.slice(7));
    return v === "::1" || v === "::" || v.startsWith("fc") || v.startsWith("fd") || v.startsWith("fe80");
  }
  const [a, b] = ip.split(".").map(Number);
  return (
    a === 10 || a === 127 || a === 0 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) ||
    (a === 169 && b === 254) || (a === 100 && b >= 64 && b <= 127) || a >= 224
  );
}

async function validarDestino(url: URL): Promise<void> {
  const host = url.hostname.replace(/^\[|\]$/g, "");
  if (host === "localhost" || host.endsWith(".local") || host.endsWith(".internal")) {
    throw new RevisionError("privada", "Solo puedo revisar sitios públicos.");
  }
  const ips = isIP(host) ? [host] : (await lookup(host, { all: true }).catch(() => [])).map((r) => r.address);
  if (ips.length === 0) throw new RevisionError("sin-respuesta", "No encontré ese dominio. Revisa que esté bien escrito.");
  if (ips.some(esPrivada)) throw new RevisionError("privada", "Solo puedo revisar sitios públicos.");
}

export interface Descarga {
  urlFinal: URL;
  estado: number;
  cabeceras: Headers;
  cuerpo: string;
  bytes: number;
  ms: number;
  saltos: number;
}

export async function descargar(inicial: URL, timeoutMs = 8000): Promise<Descarga> {
  let url = inicial;
  const inicio = Date.now();
  for (let salto = 0; salto <= MAX_REDIRECTS; salto++) {
    await validarDestino(url);
    const control = new AbortController();
    const reloj = setTimeout(() => control.abort(), timeoutMs);
    let res: Response;
    try {
      res = await fetch(url, {
        redirect: "manual",
        signal: control.signal,
        headers: { "user-agent": UA, accept: "text/html,application/xhtml+xml,text/plain,application/xml;q=0.9,*/*;q=0.5", "accept-language": "es-CO,es;q=0.9,en;q=0.5" },
      });
    } catch (e) {
      clearTimeout(reloj);
      if ((e as Error).name === "AbortError") throw new RevisionError("tiempo", "El sitio tardó demasiado en responder (más de 8 segundos).");
      throw new RevisionError("sin-respuesta", "No pude conectarme con ese sitio. Puede estar caído o bloqueando revisiones automáticas.");
    }
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) {
      clearTimeout(reloj);
      url = new URL(res.headers.get("location")!, url);
      if (!["http:", "https:"].includes(url.protocol)) throw new RevisionError("url", "El sitio redirige a una dirección que no puedo revisar.");
      continue;
    }
    const ms = Date.now() - inicio;
    // Lectura con tope de tamaño
    const lector = res.body?.getReader();
    const trozos: Uint8Array[] = [];
    let bytes = 0;
    if (lector) {
      try {
        while (bytes < MAX_BYTES) {
          const { done, value } = await lector.read();
          if (done) break;
          trozos.push(value);
          bytes += value.byteLength;
        }
        if (bytes >= MAX_BYTES) await lector.cancel().catch(() => {});
      } catch {
        // respuesta cortada: se analiza lo que alcanzó a llegar
      }
    }
    clearTimeout(reloj);
    const cuerpo = new TextDecoder("utf-8", { fatal: false }).decode(Buffer.concat(trozos));
    return { urlFinal: url, estado: res.status, cabeceras: res.headers, cuerpo, bytes, ms, saltos: salto };
  }
  throw new RevisionError("sin-respuesta", "El sitio tiene demasiadas redirecciones seguidas.");
}

/** Descarga auxiliar (robots, sitemap): nunca lanza, devuelve null si falla. */
export async function descargarOpcional(url: URL, timeoutMs = 5000): Promise<Descarga | null> {
  try {
    return await descargar(url, timeoutMs);
  } catch {
    return null;
  }
}
