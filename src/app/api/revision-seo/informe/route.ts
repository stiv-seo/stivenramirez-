import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { revisar, RevisionError } from "@/lib/revision-seo/analizar";
import { htmlAviso, htmlInforme, textoInforme } from "@/lib/revision-seo/correo";
import { crearLimite, ipDe } from "@/lib/revision-seo/limite";

export const runtime = "nodejs";
export const maxDuration = 30;

const esquema = z.object({
  nombre: z.string().min(2, "Escribe tu nombre.").max(100),
  email: z.string().email("Ese correo no parece válido."),
  telefono: z.string().max(30).optional(),
  url: z.string().min(4).max(300),
});
const limitado = crearLimite(3, 10 * 60 * 1000); // 3 informes cada 10 minutos por IP

export async function POST(req: NextRequest) {
  let cuerpo: unknown;
  try {
    cuerpo = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }
  const datos = esquema.safeParse(cuerpo);
  if (!datos.success) {
    return NextResponse.json({ error: "Revisa los datos.", issues: datos.error.flatten().fieldErrors }, { status: 422 });
  }
  const { nombre, email, telefono, url } = datos.data;

  if (limitado(ipDe(req.headers))) {
    return NextResponse.json({ error: "Demasiados intentos. Espera unos minutos antes de pedir otro informe." }, { status: 429 });
  }

  // El informe se arma en el servidor con una revisión fresca: no se confía en lo que envíe el navegador.
  let revision;
  try {
    revision = await revisar(url);
  } catch (e) {
    const mensaje = e instanceof RevisionError ? e.message : "No pude volver a revisar el sitio. Intenta de nuevo en un momento.";
    return NextResponse.json({ error: mensaje }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[revision-seo/informe] RESEND_API_KEY no configurado. Datos recibidos:", { nombre, email, url, puntaje: revision.puntaje });
    return NextResponse.json({ ok: true, dev: true });
  }

  const resend = new Resend(apiKey);
  const yo = process.env.CONTACT_EMAIL ?? "stiv.seo03@gmail.com";
  const { error } = await resend.emails.send({
    from: "Stiven Ramírez <hola@stivenramirez.com>",
    to: email,
    replyTo: yo,
    subject: `Tu revisión SEO de ${new URL(revision.urlFinal).hostname}`,
    html: htmlInforme(nombre, revision),
    text: textoInforme(nombre, revision),
  });
  if (error) {
    console.error("[revision-seo/informe] Resend:", error);
    return NextResponse.json({ error: "No pude enviar el informe. Revisa el correo e intenta de nuevo." }, { status: 500 });
  }

  // Aviso interno: si falla no se le muestra error al visitante, su informe ya salió.
  await resend.emails
    .send({
      from: "Revisión SEO <hola@stivenramirez.com>",
      to: yo,
      replyTo: email,
      subject: `Revisión SEO: ${nombre} · ${new URL(revision.urlFinal).hostname} (${revision.puntaje}/100)`,
      html: htmlAviso({ nombre, email, telefono }, revision),
    })
    .catch((e) => console.error("[revision-seo/informe] aviso interno:", e));

  return NextResponse.json({ ok: true });
}
