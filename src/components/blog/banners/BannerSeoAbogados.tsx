"use client";

import { BannerFrame, TEAL, mono, sans } from "./BannerFrame";

const RESULTADOS = [
  { nombre: "Tu firma",        nota: "Perfil completo · reseñas respondidas", destacado: true },
  { nombre: "Otra firma",      nota: "Perfil incompleto",                     destacado: false },
  { nombre: "Otra firma",      nota: "Sin reseñas recientes",                 destacado: false },
];

export function BannerSeoAbogados() {
  return (
    <BannerFrame
      label="Ejemplo de resultados locales de Google para la búsqueda de un abogado, con tu firma en primer lugar"
      eyebrow="SEO local · Abogados"
      title={<>Que te encuentren cuando <span style={{ color: TEAL }}>te buscan</span></>}
      footer="stivenramirez.com · Ejemplo ilustrativo de resultados"
    >
      <div style={{
        display: "flex", alignItems: "center", gap: 14, padding: "14px 22px", marginBottom: 20,
        border: "1px solid rgba(255,255,255,0.16)", borderRadius: 40,
        fontSize: 20, color: "rgba(255,255,255,0.75)", ...sans,
      }}>
        <span style={{ width: 16, height: 16, borderRadius: 8, border: `2px solid ${TEAL}` }} />
        abogado laboral cerca de mí
      </div>
      {RESULTADOS.map((r, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 20, padding: "14px 22px", marginBottom: 10, borderRadius: 14,
          background: r.destacado ? "rgba(0,196,180,0.12)" : "rgba(255,255,255,0.04)",
          border: r.destacado ? `1px solid ${TEAL}` : "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: r.destacado ? TEAL : "rgba(255,255,255,0.35)", width: 28, ...sans }}>{i + 1}</div>
          <div style={{ flex: 1, fontSize: 21, fontWeight: 700, color: r.destacado ? "#fff" : "rgba(255,255,255,0.55)", ...sans }}>{r.nombre}</div>
          <div style={{ fontSize: 14, color: r.destacado ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.35)", ...mono }}>{r.nota}</div>
        </div>
      ))}
    </BannerFrame>
  );
}
