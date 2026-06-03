import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// ─── Schema ───────────────────────────────────────────────────────────────────

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres.").max(100),
  email: z.string().email("El email no es válido."),
  empresa: z.string().max(200).optional(),
  presupuesto: z.string().max(50).optional(),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres.").max(2000),
});

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const budgetLabel: Record<string, string> = {
  "menos-1m": "Menos de $1.000.000 COP",
  "1m-2m": "$1.000.000 – $2.000.000 COP",
  "2m-4m": "$2.000.000 – $4.000.000 COP",
  "mas-4m": "Más de $4.000.000 COP",
  "no-se": "No lo sé todavía",
};

function buildHtml(data: z.infer<typeof contactSchema>): string {
  const budget = data.presupuesto ? (budgetLabel[data.presupuesto] ?? escHtml(data.presupuesto)) : "No indicado";
  const nombre  = escHtml(data.nombre);
  const email   = escHtml(data.email);
  const empresa = data.empresa ? escHtml(data.empresa) : "—";
  const mensaje = escHtml(data.mensaje).replace(/\n/g, "<br/>");
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1A2B3C;">
      <div style="background:#0B1829;padding:24px 32px;border-radius:12px 12px 0 0;">
        <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:4px;text-transform:uppercase;color:#00C4B4;">
          Nuevo contacto — stivenramirez.com
        </p>
      </div>
      <div style="background:#FDFCFA;padding:32px;border:1px solid rgba(0,0,0,0.08);border-top:none;border-radius:0 0 12px 12px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:13px;font-weight:600;width:130px;color:#64748B;">Nombre</td>
            <td style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:14px;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:13px;font-weight:600;color:#64748B;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:14px;"><a href="mailto:${email}" style="color:#00C4B4;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:13px;font-weight:600;color:#64748B;">Empresa</td>
            <td style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:14px;">${empresa}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:13px;font-weight:600;color:#64748B;">Presupuesto</td>
            <td style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.06);font-size:14px;">${budget}</td>
          </tr>
          <tr>
            <td style="padding:16px 0 0;font-size:13px;font-weight:600;color:#64748B;vertical-align:top;">Mensaje</td>
            <td style="padding:16px 0 0;font-size:14px;line-height:1.7;">${mensaje}</td>
          </tr>
        </table>
        <div style="margin-top:24px;padding-top:16px;border-top:1px solid rgba(0,0,0,0.06);">
          <a href="mailto:${email}" style="display:inline-block;background:#00C4B4;color:#0B1829;font-weight:700;font-size:13px;padding:10px 20px;border-radius:8px;text-decoration:none;">
            Responder a ${nombre} →
          </a>
        </div>
      </div>
    </div>
  `;
}

// ─── Rate limiter (in-process, IP-based) ─────────────────────────────────────
// 3 submissions per 10 minutes per IP. Resets on cold-start (Vercel).

const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT  = 3;
const WINDOW_MS   = 10 * 60 * 1000; // 10 min

function isRateLimited(ip: string): boolean {
  const now  = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Rate limit
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos. Espera unos minutos antes de intentarlo de nuevo." },
      { status: 429 }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo de la solicitud inválido." }, { status: 400 });
  }

  // Validate
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos.", issues: result.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const data = result.data;

  // Check API key
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[contact] RESEND_API_KEY no configurado — omitiendo envío en desarrollo.");
      return NextResponse.json({ ok: true, dev: true });
    }
    console.error("[contact] RESEND_API_KEY no configurado en producción.");
    return NextResponse.json({ error: "Error de configuración del servidor." }, { status: 500 });
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  if (!contactEmail) {
    console.error("[contact] CONTACT_EMAIL no configurado.");
    return NextResponse.json({ error: "Error de configuración del servidor." }, { status: 500 });
  }

  // Send email
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "hola@stivenramirez.com",
    to: contactEmail,
    replyTo: data.email,
    subject: `Nuevo contacto de ${data.nombre}${data.empresa ? ` (${data.empresa})` : ""}`,
    html: buildHtml(data),
  });

  if (error) {
    console.error("[contact] Resend error:", error.name);
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Intenta de nuevo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
