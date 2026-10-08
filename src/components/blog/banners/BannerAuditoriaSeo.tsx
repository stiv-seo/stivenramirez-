"use client";

import { BannerFrame, TEAL, AMBER, RED, mono, sans } from "./BannerFrame";

const PASOS = [
  { n: "1", label: "Indexación",            estado: "Revisar",  color: RED },
  { n: "2", label: "Velocidad en móvil",    estado: "Mejorar",  color: AMBER },
  { n: "3", label: "Títulos y descripciones", estado: "Mejorar", color: AMBER },
  { n: "4", label: "Enlaces internos",      estado: "Bien",     color: TEAL },
  { n: "5", label: "Imágenes",              estado: "Bien",     color: TEAL },
];

export function BannerAuditoriaSeo() {
  return (
    <BannerFrame
      label="Los cinco pasos de una auditoría SEO básica: indexación, velocidad, títulos, enlaces e imágenes"
      eyebrow="SEO · Guía paso a paso"
      title={<>Auditoría SEO <span style={{ color: TEAL }}>básica</span></>}
      subtitle="Cinco pasos con herramientas gratuitas"
      footer="stivenramirez.com · Ilustración del proceso"
    >
      {PASOS.map((p) => (
        <div key={p.n} style={{
          display: "flex", alignItems: "center", gap: 22,
          padding: "13px 0", borderTop: "1px solid rgba(255,255,255,0.07)",
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10, flexShrink: 0,
            border: `1px solid ${p.color}`, color: p.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 800, ...sans,
          }}>{p.n}</div>
          <div style={{ flex: 1, fontSize: 22, color: "rgba(255,255,255,0.9)", fontWeight: 600, ...sans }}>{p.label}</div>
          <div style={{ fontSize: 15, color: p.color, ...mono, textTransform: "uppercase" }}>{p.estado}</div>
        </div>
      ))}
    </BannerFrame>
  );
}
