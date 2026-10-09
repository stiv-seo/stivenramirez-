import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { revisar, RevisionError } from "@/lib/revision-seo/analizar";
import { crearLimite, ipDe } from "@/lib/revision-seo/limite";

export const runtime = "nodejs";
export const maxDuration = 30;

const esquema = z.object({ url: z.string().min(4).max(300) });
const limitado = crearLimite(8, 10 * 60 * 1000); // 8 revisiones cada 10 minutos por IP

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

  try {
    return NextResponse.json({ ok: true, revision: await revisar(datos.data.url) });
  } catch (e) {
    if (e instanceof RevisionError) {
      return NextResponse.json({ error: e.message, code: e.code }, { status: 422 });
    }
    console.error("[revision-seo]", e);
    return NextResponse.json({ error: "Algo falló al revisar el sitio. Intenta de nuevo en un momento." }, { status: 500 });
  }
}
