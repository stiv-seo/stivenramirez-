import type { Estado, Revision } from "./analizar";
import { CALENDLY_URL } from "@/lib/constants";

// ─── Informe por correo ──────────────────────────────────────────────────────

export function esc(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

const marca: Record<Estado, { texto: string; color: string }> = {
  critico: { texto: "Crítico", color: "#B42318" },
  mejorar: { texto: "Por mejorar", color: "#B54708" },
  bien: { texto: "Bien", color: "#067647" },
};

export function htmlInforme(nombre: string, r: Revision): string {
  const orden: Estado[] = ["critico", "mejorar", "bien"];
  const filas = orden
    .flatMap((estado) => r.puntos.filter((p) => p.estado === estado))
    .map(
      (p) => `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid rgba(0,0,0,0.07);vertical-align:top;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${marca[p.estado].color};">${marca[p.estado].texto}</p>
            <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#1A2B3C;">${esc(p.titulo)}</p>
            <p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#3D5166;">${esc(p.hallazgo)}</p>
            ${p.estado === "bien" ? "" : `<p style="margin:0;font-size:14px;line-height:1.6;color:#1A2B3C;"><strong>Cómo arreglarlo:</strong> ${esc(p.arreglo)}</p>`}
          </td>
        </tr>`
    )
    .join("");

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:620px;margin:0 auto;color:#1A2B3C;">
    <div style="background:#0B1829;padding:28px 32px;border-radius:12px 12px 0 0;">
      <p style="margin:0 0 10px;font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#00C4B4;">Revisión SEO express</p>
      <p style="margin:0;font-size:22px;font-weight:800;color:#ffffff;line-height:1.25;">${esc(r.urlFinal)}</p>
    </div>
    <div style="background:#FDFCFA;padding:32px;border:1px solid rgba(0,0,0,0.08);border-top:none;border-radius:0 0 12px 12px;">
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;">Hola ${esc(nombre)}, este es el informe completo de la revisión que hiciste en stivenramirez.com.</p>
      <p style="margin:0 0 4px;font-size:44px;font-weight:800;line-height:1;color:#0B1829;">${r.puntaje}<span style="font-size:18px;color:#5E6E82;"> / 100</span></p>
      <p style="margin:0 0 22px;font-size:14px;color:#5E6E82;">${r.resumen.critico} críticos · ${r.resumen.mejorar} por mejorar · ${r.resumen.bien} bien</p>
      ${r.aviso ? `<p style="margin:0 0 18px;padding:12px 14px;background:#F5F2EC;border-radius:8px;font-size:13px;line-height:1.6;color:#3D5166;">${esc(r.aviso)}</p>` : ""}
      <table style="width:100%;border-collapse:collapse;">${filas}</table>
      <p style="margin:24px 0 8px;font-size:13px;line-height:1.7;color:#5E6E82;">Esta revisión es automática y mira una sola página: no reemplaza una auditoría, que además analiza palabras clave, competencia y el sitio completo.</p>
      <div style="margin-top:20px;padding-top:20px;border-top:1px solid rgba(0,0,0,0.07);">
        <p style="margin:0 0 14px;font-size:15px;line-height:1.7;">Si quieres, lo miramos juntos en una llamada de 30 minutos, sin costo.</p>
        <a href="${CALENDLY_URL}" style="display:inline-block;background:#00C4B4;color:#0B1829;font-weight:700;font-size:14px;padding:12px 22px;border-radius:8px;text-decoration:none;">Agendar la llamada</a>
      </div>
      <p style="margin:26px 0 0;font-size:13px;color:#5E6E82;">Stiven Ramírez · Diseño web y SEO · <a href="https://stivenramirez.com" style="color:#0B1829;">stivenramirez.com</a></p>
    </div>
  </div>`;
}

export function htmlAviso(datos: { nombre: string; email: string; telefono?: string }, r: Revision, tablero?: string | null): string {
  const peores = r.puntos.filter((p) => p.estado !== "bien").slice(0, 6).map((p) => `<li>${esc(p.titulo)}: ${esc(p.hallazgo)}</li>`).join("");
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#1A2B3C;">
    <p style="font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#00C4B4;">Nuevo contacto por la revisión SEO</p>
    <p style="font-size:15px;line-height:1.7;"><strong>${esc(datos.nombre)}</strong> · <a href="mailto:${esc(datos.email)}">${esc(datos.email)}</a>${datos.telefono ? ` · ${esc(datos.telefono)}` : ""}</p>
    <p style="font-size:15px;line-height:1.7;">Sitio: <a href="${esc(r.urlFinal)}">${esc(r.urlFinal)}</a><br/>Puntaje: <strong>${r.puntaje}/100</strong> (${r.resumen.critico} críticos, ${r.resumen.mejorar} por mejorar)</p>
    <ul style="font-size:14px;line-height:1.7;padding-left:18px;">${peores}</ul>
    <p style="font-size:14px;line-height:1.7;">${tablero ? `Quedó una tarea de seguimiento en <a href="${tablero}">tu portal</a>, para escribirle en dos días.` : "No se pudo crear la tarea de seguimiento en el portal: anótala a mano."} Responder este correo le escribe directo.</p>
  </div>`;
}

// Versión en texto plano del informe. Los filtros de correo desconfían de los mensajes que solo traen HTML.
export function textoInforme(nombre: string, r: Revision): string {
  const pendientes = r.puntos.filter((p) => p.estado !== "bien");
  const lineas = [
    `Hola ${nombre},`,
    "",
    `Este es el resultado de la revisión de ${r.urlFinal}: ${r.puntaje} de 100.`,
    `${r.resumen.critico} críticos, ${r.resumen.mejorar} por mejorar, ${r.resumen.bien} bien.`,
    "",
  ];
  if (pendientes.length) {
    lineas.push("Qué arreglar:", "");
    for (const p of pendientes) lineas.push(`- ${p.titulo} (${marca[p.estado].texto}): ${p.hallazgo}`, `  Cómo arreglarlo: ${p.arreglo}`, "");
  } else {
    lineas.push("Los 17 puntos están bien.", "");
  }
  lineas.push(
    "Esta revisión es automática y mira una sola página. Si quieres verla conmigo, agenda 30 minutos sin costo:",
    CALENDLY_URL,
    "",
    "Stiven Ramírez",
    "Diseño web y SEO · https://stivenramirez.com",
  );
  return lineas.join("\n");
}
