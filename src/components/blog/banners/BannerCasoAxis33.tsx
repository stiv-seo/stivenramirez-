"use client";

import { BannerFrame, TEAL, mono, sans } from "./BannerFrame";

const HECHOS = ["11 páginas", "Contenido por servicio", "Reservas en línea"];

export function BannerCasoAxis33() {
  return (
    <BannerFrame
      label="Caso Axis33: el sitio pasó de comunicarse como estudio de Pilates a clínica de fisioterapia"
      eyebrow="Caso · Salud · Brisbane"
      title={<>Axis33: de estudio a <span style={{ color: TEAL }}>clínica</span></>}
      footer="stivenramirez.com · Caso de reposicionamiento"
    >
      <div style={{ display: "flex", alignItems: "center", gap: 26, marginTop: 6 }}>
        <div style={{ flex: 1, borderRadius: 18, padding: "30px 28px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", marginBottom: 12, ...mono }}>ANTES</div>
          <div style={{ fontSize: 30, fontWeight: 800, color: "rgba(255,255,255,0.6)", ...sans }}>Estudio de Pilates</div>
        </div>
        <div style={{ fontSize: 36, color: TEAL, ...sans }}>→</div>
        <div style={{ flex: 1, borderRadius: 18, padding: "30px 28px", background: "rgba(0,196,180,0.12)", border: `1px solid ${TEAL}` }}>
          <div style={{ fontSize: 15, color: TEAL, marginBottom: 12, ...mono }}>DESPUÉS</div>
          <div style={{ fontSize: 30, fontWeight: 800, color: "#fff", ...sans }}>Fisioterapia primero</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 34 }}>
        {HECHOS.map((h) => (
          <div key={h} style={{ padding: "10px 20px", borderRadius: 30, border: "1px solid rgba(255,255,255,0.14)", fontSize: 17, color: "rgba(255,255,255,0.75)", ...sans }}>{h}</div>
        ))}
      </div>
    </BannerFrame>
  );
}
