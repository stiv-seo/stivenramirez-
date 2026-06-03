"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";

const PRICE_ROWS = [
  { label: "Landing page",           low: "$800K",  high: "$3.5M",  pct: 0.28 },
  { label: "Sitio corporativo",       low: "$3M",    high: "$8M",    pct: 0.52 },
  { label: "Tienda Shopify",          low: "$5M",    high: "$10M",   pct: 0.76 },
  { label: "WooCommerce a medida",    low: "$6M",    high: "$15M",   pct: 1.00, highlight: true },
];

export function BannerCuantoCobraDiseñadorWeb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setScale(containerRef.current.clientWidth / 1200);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const W = 1200, H = 630;
  const cardX = 220, cardY = 100, cardW = 760, cardH = 430;
  const rowH = 90, rowStart = cardY + 72;
  const barMaxW = 440;

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: Math.round(H * scale), overflow: "hidden", borderRadius: 16 }}
      role="img"
      aria-label="Comparativa de precios de diseño web en Colombia"
    >
      <div style={{
        width: W, height: H,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        position: "relative",
        overflow: "hidden",
        background: [
          "radial-gradient(700px 500px at 55% 50%, rgba(0,196,180,0.09) 0%, rgba(0,196,180,0.02) 40%, transparent 70%)",
          "linear-gradient(180deg, #11141c 0%, #0d1117 55%, #0a0c12 100%)",
        ].join(", "),
      }}>

        {/* Grid background */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          WebkitMaskImage: "radial-gradient(900px 500px at 50% 50%, black 20%, transparent 75%)",
          maskImage: "radial-gradient(900px 500px at 50% 50%, black 20%, transparent 75%)",
        }} />

        {/* HUD corners */}
        {([["top","left"],["top","right"],["bottom","left"],["bottom","right"]] as const).map(([v,h]) => (
          <div key={v+h} aria-hidden="true" style={{
            position: "absolute", width: 24, height: 24,
            [v]: 24, [h]: 24,
            borderTop: v === "top" ? "1px solid rgba(255,255,255,0.16)" : undefined,
            borderBottom: v === "bottom" ? "1px solid rgba(255,255,255,0.16)" : undefined,
            borderLeft: h === "left" ? "1px solid rgba(255,255,255,0.16)" : undefined,
            borderRight: h === "right" ? "1px solid rgba(255,255,255,0.16)" : undefined,
          }} />
        ))}

        {/* Card panel */}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          {/* Card background */}
          <rect x={cardX} y={cardY} width={cardW} height={cardH} rx="16"
            fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

          {/* Card header bar */}
          <rect x={cardX} y={cardY} width={cardW} height="52" rx="16" fill="rgba(255,255,255,0.04)" />
          <rect x={cardX} y={cardY + 36} width={cardW} height="16" fill="rgba(255,255,255,0.04)" />

          {/* Header label */}
          <text x={cardX + 28} y={cardY + 33} fill="rgba(255,255,255,0.55)" fontSize="13"
            fontFamily="system-ui, sans-serif" fontWeight="600" letterSpacing="3">
            PRECIO DISEÑO WEB · COLOMBIA 2026
          </text>

          {/* Column headers */}
          <text x={cardX + 28}  y={rowStart - 16} fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="500">TIPO DE SITIO</text>
          <text x={cardX + 700} y={rowStart - 16} fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="500" textAnchor="end">RANGO COP</text>

          {PRICE_ROWS.map((row, i) => {
            const y = rowStart + i * rowH;
            const barW = barMaxW * row.pct;
            const isLast = i === PRICE_ROWS.length - 1;
            return (
              <g key={row.label}>
                {/* Row separator */}
                {i > 0 && <line x1={cardX + 20} y1={y - 4} x2={cardX + cardW - 20} y2={y - 4} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />}

                {/* Row highlight */}
                {row.highlight && (
                  <rect x={cardX + 8} y={y + 2} width={cardW - 16} height={rowH - 8} rx="8"
                    fill="rgba(0,196,180,0.06)" stroke={`rgba(0,196,180,0.18)`} strokeWidth="1" />
                )}

                {/* Label */}
                <text x={cardX + 28} y={y + rowH / 2 + 5} fill={row.highlight ? TEAL : "rgba(255,255,255,0.72)"}
                  fontSize="15" fontFamily="system-ui, sans-serif" fontWeight={row.highlight ? "700" : "500"}>
                  {row.label}
                </text>

                {/* Bar track */}
                <rect x={cardX + 260} y={y + rowH / 2 - 7} width={barMaxW} height="14" rx="7"
                  fill="rgba(255,255,255,0.05)" />

                {/* Bar fill */}
                <rect x={cardX + 260} y={y + rowH / 2 - 7} width={barW} height="14" rx="7"
                  fill={row.highlight
                    ? `url(#barGradHL)`
                    : "rgba(255,255,255,0.18)"}
                />

                {/* Price range */}
                <text x={cardX + 720} y={y + rowH / 2 + 5}
                  fill={row.highlight ? TEAL : "rgba(255,255,255,0.55)"}
                  fontSize="13" fontFamily="system-ui, sans-serif" fontWeight="600" textAnchor="end">
                  {row.low} – {row.high}
                </text>

                {/* Teal dot for highlight */}
                {row.highlight && (
                  <circle cx={cardX + 260 + barW} cy={y + rowH / 2} r="5"
                    fill={TEAL} style={{ filter: "drop-shadow(0 0 6px rgba(0,196,180,0.8))" }} />
                )}
              </g>
            );
          })}

          {/* Gradient defs */}
          <defs>
            <linearGradient id="barGradHL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(0,196,180,0.4)" />
              <stop offset="100%" stopColor={TEAL} />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating label bottom-right */}
        <div aria-hidden="true" style={{
          position: "absolute", bottom: 36, right: 36,
          fontSize: 11, fontFamily: "system-ui, sans-serif", fontWeight: 600,
          letterSpacing: 2, color: "rgba(255,255,255,0.2)", textTransform: "uppercase",
        }}>
          stivenramirez.com
        </div>
      </div>
    </div>
  );
}
