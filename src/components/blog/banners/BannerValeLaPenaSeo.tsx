"use client";

import { BannerFrame, TEAL, AMBER, mono, sans } from "./BannerFrame";

export function BannerValeLaPenaSeo() {
  const w = 980, h = 250;
  return (
    <BannerFrame
      label="Comparación ilustrativa entre pauta y SEO a lo largo del tiempo: la pauta da resultados inmediatos y el SEO crece de forma acumulada"
      eyebrow="SEO · Pymes"
      title={<>¿Vale la pena el <span style={{ color: TEAL }}>SEO</span>?</>}
      subtitle="Pauta y SEO no rinden igual en el tiempo"
      footer="stivenramirez.com · Curvas ilustrativas, no son datos"
    >
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block", overflow: "visible" }}>
        <line x1={0} x2={w} y1={h} y2={h} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
        <line x1={0} x2={0} y1={0} y2={h} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
        <path d={`M0,${h * 0.42} L${w},${h * 0.42}`} fill="none" stroke={AMBER} strokeWidth={4} strokeDasharray="12 10" strokeLinecap="round" />
        <path d={`M0,${h * 0.95} C${w * 0.35},${h * 0.92} ${w * 0.55},${h * 0.6} ${w},${h * 0.08}`} fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" />
        <text x={w - 6} y={h * 0.42 - 14} textAnchor="end" fill={AMBER} fontSize={19} fontWeight={700} style={sans}>Pauta: mientras pagas</text>
        <text x={w - 190} y={h * 0.2} textAnchor="end" fill={TEAL} fontSize={19} fontWeight={700} style={sans}>SEO: se acumula</text>
        <text x={0} y={h + 30} fill="rgba(255,255,255,0.4)" fontSize={14} style={mono}>MES 1</text>
        <text x={w} y={h + 30} textAnchor="end" fill="rgba(255,255,255,0.4)" fontSize={14} style={mono}>MES 12</text>
      </svg>
    </BannerFrame>
  );
}
