"use client";

import { BannerFrame, TEAL, AMBER, RED, mono, sans } from "./BannerFrame";

const CHECKS = [
  { label: "Velocidad",          pct: 0.45, color: AMBER },
  { label: "Indexación",         pct: 0.3,  color: RED },
  { label: "URLs duplicadas",    pct: 0.7,  color: TEAL },
  { label: "Versión móvil",      pct: 0.85, color: TEAL },
  { label: "Datos estructurados", pct: 0.2, color: RED },
];

export function BannerSeoTecnico() {
  return (
    <BannerFrame
      label="Los cinco frentes del SEO técnico: velocidad, indexación, URLs duplicadas, móvil y datos estructurados"
      eyebrow="SEO técnico · Sin tecnicismos"
      title={<>¿Puede Google <span style={{ color: TEAL }}>leer</span> tu sitio?</>}
      subtitle="Los 5 puntos que revisa una auditoría técnica"
      footer="stivenramirez.com · Ilustración, no son datos de un sitio real"
    >
      {CHECKS.map((c) => (
        <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 24, padding: "15px 0" }}>
          <div style={{ width: 300, fontSize: 21, color: "rgba(255,255,255,0.85)", fontWeight: 600, ...sans }}>{c.label}</div>
          <div style={{ flex: 1, height: 14, borderRadius: 7, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
            <div style={{ width: `${c.pct * 100}%`, height: "100%", borderRadius: 7, background: c.color }} />
          </div>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: c.color, ...mono }} />
        </div>
      ))}
    </BannerFrame>
  );
}
