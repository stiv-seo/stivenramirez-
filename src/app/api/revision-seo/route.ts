import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { revisar, RevisionError, type Revision } from "@/lib/revision-seo/analizar";
import { normalizarUrl } from "@/lib/revision-seo/fetch";
import { crearLimite, ipDe } from "@/lib/revision-seo/limite";

export const runtime = "nodejs";
export const maxDuration = 30;

const esquema = z.object({ url: z.string().min(4).max(300) });
const limitado = crearLimite(8, 10 * 60 * 1000); // 8 revisiones cada 10 minutos por IP

// Mismo sitio, mismo resultado: se recuerda cada revisión 10 minutos (en memoria, por instancia).
const RECIENTES = new Map<string, { hasta: number; revision: Revision }>();
const VIGENCIA_MS = 10 * 60 * 1000;

function clave(entrada: string): string | null {
  try {
    return normalizarUrl(entrada).href;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  let cuerpo: unknown;
  try {
    cuerpo = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }
  const datos = esquema.safeParse(cuerpo);
  if (!datos.success) {
    return NextResponse.json({ error: "Escribe la dirección de tu sitio, por ejemplo tunegocio.com." }, { status: 422 });
  }

  if (limitado(ipDe(req.headers))) {
    return NextResponse.json({ error: "Hiciste varias revisiones seguidas. Espera unos minutos y vuelve a intentarlo." }, { status: 429 });
  }

  const k = clave(datos.data.url);
  const guardada = k ? RECIENTES.get(k) : undefined;
  if (guardada && guardada.hasta > Date.now()) {
    return NextResponse.json({ ok: true, revision: guardada.revision });
  }

  try {
    const revision = await revisar(datos.data.url);
    if (k) {
      if (RECIENTES.size > 200) RECIENTES.clear();
      RECIENTES.set(k, { hasta: Date.now() + VIGENCIA_MS, revision });
    }
    return NextResponse.json({ ok: true, revision });
  } catch (e) {
    if (e instanceof RevisionError) {
      return NextResponse.json({ error: e.message, code: e.code }, { status: 422 });
    }
    console.error("[revision-seo]", e);
    return NextResponse.json({ error: "Algo falló al revisar el sitio. Intenta de nuevo en un momento." }, { status: 500 });
  }
}
