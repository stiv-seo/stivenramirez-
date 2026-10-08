"use client";

import { BannerFrame, TEAL, AMBER, mono, sans } from "./BannerFrame";

const CLICS = [28, 40, 34, 52, 47, 66, 60, 82, 76, 98];
const IMPR  = [60, 64, 72, 70, 84, 88, 96, 104, 112, 118];

function path(values: number[], w: number, h: number, max: number) {
  return values.map((v, i) => `${i === 0 ? "M" : "L"}${(i / (values.length - 1)) * w},${h - (v / max) * h}`).join(" ");
}

export function BannerSearchConsole() {
  const w = 980, h = 210;
  return (
    <BannerFrame
      label="Gráfico de ejemplo de clics e impresiones como el que muestra Google Search Console"
      eyebrow="Herramientas · Google"
      title={<>Search Console, <span style={{ color: TEAL }}>en simple</span></>}
      subtitle="Qué mirar y qué hacer con cada número"
      footer="stivenramirez.com · Gráfico ilustrativo"
    >
      <div style={{ display: "flex", gap: 34, marginBottom: 18 }}>
        {[["Clics", TEAL], ["Impresiones", AMBER]].map(([t, c]) => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 18, color: "rgba(255,255,255,0.8)", ...sans }}>
            <span style={{ width: 26, height: 4, borderRadius: 2, background: c }} />{t}
          </div>
        ))}
        <div style={{ marginLeft: "auto", fontSize: 14, color: "rgba(255,255,255,0.35)", ...mono }}>ÚLTIMOS 3 MESES</div>
      </div>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block", overflow: "visible" }}>
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <line key={f} x1={0} x2={w} y1={h * f} y2={h * f} stroke="rgba(255,255,255,0.07)" strokeWidth={1} />
        ))}
        <path d={path(IMPR, w, h, 130)} fill="none" stroke={AMBER} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={0.85} />
        <path d={path(CLICS, w, h, 130)} fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </BannerFrame>
  );
}
