import type { Revision } from "./analizar";

// Cada informe pedido deja una tarea de seguimiento en el portal de tareas.
// La vista de cliente del portal es pública, así que a la tarea solo van el dominio y los
// puntos que fallan: nombre, correo y teléfono se quedan en el correo de aviso.

const PORTAL = (process.env.PORTAL_URL ?? "https://tasks.stivenramirez.com").replace(/\/$/, "");
const CLIENTE = Number(process.env.PORTAL_CLIENT_ID ?? 7); // "stiven-ramirez" en el portal
const DIAS_PARA_ESCRIBIR = 2;

async function pedir(ruta: string, metodo: "POST" | "PATCH", cuerpo: unknown) {
  const res = await fetch(`${PORTAL}${ruta}`, {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cuerpo),
    signal: AbortSignal.timeout(5000),
  });
  if (!res.ok) throw new Error(`portal ${metodo} ${ruta}: ${res.status}`);
  return res.json();
}

/** Crea la tarea y devuelve su enlace en el tablero, o null si el portal no respondió. */
export async function crearSeguimiento(r: Revision): Promise<string | null> {
  try {
    const dominio = new URL(r.urlFinal).hostname.replace(/^www\./, "");
    const vence = new Date(Date.now() + DIAS_PARA_ESCRIBIR * 24 * 60 * 60 * 1000).toISOString();
    const { task } = await pedir("/api/tasks", "POST", {
      clientId: CLIENTE,
      title: `Escribirle al contacto de la revisión SEO: ${dominio} (${r.puntaje}/100)`,
      type: "auditoria",
      priority: "alta",
      status: "por_hacer",
      dueDate: vence,
    });

    const pendientes = r.puntos.filter((p) => p.estado !== "bien");
    const nota = [
      `Pidió el informe de ${r.urlFinal}. Puntaje ${r.puntaje}/100: ${r.resumen.critico} críticos, ${r.resumen.mejorar} por mejorar, ${r.resumen.bien} bien.`,
      pendientes.length ? "Puntos para abrir la conversación:" : "No tiene puntos pendientes: la conversación va por contenido y competencia, no por lo técnico.",
      ...pendientes.map((p) => `- ${p.titulo}: ${p.hallazgo}`),
      "Nombre, correo y teléfono están en el correo de aviso «Revisión SEO: …» (responder ese correo le escribe directo).",
    ].join("\n");
    await pedir(`/api/tasks/${task.id}`, "PATCH", { activityBody: nota, author: "Revisión SEO" });

    return `${PORTAL}/board`;
  } catch (e) {
    console.error("[revision-seo/seguimiento]", e);
    return null;
  }
}
