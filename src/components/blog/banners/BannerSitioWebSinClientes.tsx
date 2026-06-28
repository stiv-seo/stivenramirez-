"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";
const RED  = "#FF4D4D";

const ISSUES = [
  { num: "01", label: "Google no te encuentra",    tag: "SEO",        sev: 0.92 },
  { num: "02", label: "Llegan pero no convierten", tag: "Conversión", sev: 0.76 },
  { num: "03", label: "El mensaje no conecta",     tag: "Copy",       sev: 0.58 },
  { num: "04", label: "El sitio carga lento",      tag: "Velocidad",  sev: 0.44 },
];

const W = 1200;
const H = 630;

export function BannerSitioWebSinClientes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setScale(containerRef.current.clientWidth / W);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  /* card geometry */
  const cX = 72, cY = 68, cW = 680, cH = 492;
  const rowH = 96, rowStart = cY + 88;
  const barTrackW = 200;

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: Math.round(H * scale), overflow: "hidden", borderRadius: 16 }}
      role="img"
      aria-label="Las 4 razones por las que un sitio web no genera clientes en Colombia"
    >
      <div style={{
        width: W, height: H,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        position: "relative",
        overflow: "hidden",
        background: [
          "radial-gradient(780px 560px at 38% 52%, rgba(0,196,180,0.08) 0%, rgba(0,196,180,0.02) 45%, transparent 70%)",
          "linear-gradient(175deg, #12151f 0%, #0d1117 55%, #090b10 100%)",
        ].join(", "),
      }}>

        {/* Grid texture */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: [
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "44px 44px",
          WebkitMaskImage: "radial-gradient(900px 580px at 40% 52%, black 15%, transparent 78%)",
          maskImage: "radial-gradient(900px 580px at 40% 52%, black 15%, transparent 78%)",
        }} />

        {/* Corner HUD ticks */}
        {([["top","left"],["top","right"],["bottom","left"],["bottom","right"]] as const).map(([v,h]) => (
          <div key={v+h} aria-hidden="true" style={{
            position: "absolute", width: 22, height: 22,
            [v]: 22, [h]: 22,
            borderTop:    v === "top"    ? "1px solid rgba(255,255,255,0.15)" : undefined,
            borderBottom: v === "bottom" ? "1px solid rgba(255,255,255,0.15)" : undefined,
            borderLeft:   h === "left"   ? "1px solid rgba(255,255,255,0.15)" : undefined,
            borderRight:  h === "right"  ? "1px solid rgba(255,255,255,0.15)" : undefined,
          }} />
        ))}

        {/* ── CARD (SVG layer) ── */}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient id="sevGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={RED} stopOpacity="0.5" />
              <stop offset="100%" stopColor={RED} />
            </linearGradient>
            <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={TEAL} stopOpacity="0.5" />
              <stop offset="100%" stopColor={TEAL} />
            </linearGradient>
          </defs>

          {/* Card background */}
          <rect x={cX} y={cY} width={cW} height={cH} rx="18"
            fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

          {/* Card header bar */}
          <rect x={cX} y={cY} width={cW} height="58" rx="18" fill="rgba(255,255,255,0.04)" />
          <rect x={cX} y={cY + 42} width={cW} height="16" fill="rgba(255,255,255,0.04)" />

          {/* Header text */}
          <text x={cX + 26} y={cY + 36}
            fill="rgba(255,255,255,0.45)" fontSize="12" fontFamily="monospace"
            fontWeight="700" letterSpacing="3">
            DIAGNÓSTICO · SITIO WEB · COLOMBIA 2026
          </text>

          {/* Column headers */}
          <text x={cX + 26}    y={rowStart - 14} fill="rgba(255,255,255,0.28)" fontSize="10" fontFamily="monospace" fontWeight="600" letterSpacing="1">PROBLEMA</text>
          <text x={cX + 390}   y={rowStart - 14} fill="rgba(255,255,255,0.28)" fontSize="10" fontFamily="monospace" fontWeight="600" letterSpacing="1">SEVERIDAD</text>
          <text x={cX + cW - 26} y={rowStart - 14} fill="rgba(255,255,255,0.28)" fontSize="10" fontFamily="monospace" fontWeight="600" letterSpacing="1" textAnchor="end">ÁREA</text>

          {ISSUES.map((issue, i) => {
            const y = rowStart + i * rowH;
            const barW = barTrackW * issue.sev;
            const isFirst = i === 0;
            return (
              <g key={issue.num}>
                {/* Row divider */}
                {i > 0 && (
                  <line x1={cX + 18} y1={y - 6} x2={cX + cW - 18} y2={y - 6}
                    stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
                )}

                {/* Row highlight for first (most severe) */}
                {isFirst && (
                  <rect x={cX + 8} y={y + 4} width={cW - 16} height={rowH - 12} rx="8"
                    fill="rgba(255,77,77,0.04)" stroke="rgba(255,77,77,0.14)" strokeWidth="1" />
                )}

                {/* Issue number */}
                <text x={cX + 26} y={y + rowH / 2 + 6}
                  fill={isFirst ? RED : "rgba(255,255,255,0.22)"}
                  fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="1">
                  {issue.num}
                </text>

                {/* ✕ icon */}
                <text x={cX + 72} y={y + rowH / 2 + 6}
                  fill={isFirst ? RED : "rgba(255,80,80,0.55)"}
                  fontSize="16" fontFamily="sans-serif" fontWeight="700">
                  ✕
                </text>

                {/* Label */}
                <text x={cX + 100} y={y + rowH / 2 + 6}
                  fill={isFirst ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.65)"}
                  fontSize="16" fontFamily="system-ui, sans-serif"
                  fontWeight={isFirst ? "700" : "400"}>
                  {issue.label}
                </text>

                {/* Severity bar track */}
                <rect x={cX + 390} y={y + rowH / 2 - 6} width={barTrackW} height="12" rx="6"
                  fill="rgba(255,255,255,0.05)" />

                {/* Severity bar fill */}
                <rect x={cX + 390} y={y + rowH / 2 - 6} width={barW} height="12" rx="6"
                  fill={isFirst ? "url(#sevGrad)" : "rgba(255,100,100,0.35)"} />

                {/* Severity dot */}
                <circle cx={cX + 390 + barW} cy={y + rowH / 2} r={isFirst ? 5 : 4}
                  fill={isFirst ? RED : "rgba(255,100,100,0.6)"}
                  style={isFirst ? { filter: "drop-shadow(0 0 6px rgba(255,77,77,0.7))" } : undefined}
                />

                {/* Tag pill */}
                <rect x={cX + cW - 26 - 90} y={y + rowH / 2 - 14} width="90" height="28" rx="14"
                  fill={isFirst ? "rgba(255,77,77,0.12)" : "rgba(255,255,255,0.06)"}
                  stroke={isFirst ? "rgba(255,77,77,0.3)" : "rgba(255,255,255,0.1)"}
                  strokeWidth="1"
                />
                <text
                  x={cX + cW - 26 - 45} y={y + rowH / 2 + 5}
                  fill={isFirst ? RED : "rgba(255,255,255,0.4)"}
                  fontSize="11" fontFamily="monospace" fontWeight="700"
                  textAnchor="middle" letterSpacing="0.5">
                  {issue.tag}
                </text>
              </g>
            );
          })}

          {/* Card footer */}
          <line x1={cX + 18} y1={cY + cH - 52} x2={cX + cW - 18} y2={cY + cH - 52}
            stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
          <text x={cX + 26} y={cY + cH - 24}
            fill="rgba(255,77,77,0.6)" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="2">
            RESULTADO: 0 CLIENTES · VER SOLUCIÓN →
          </text>
        </svg>

        {/* ── RIGHT: decorative panel ── */}
        <div aria-hidden="true" style={{
          position: "absolute",
          top: 0, bottom: 0,
          left: cX + cW + 48,
          right: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingRight: 56,
        }}>
          {/* Eyebrow */}
          <div style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            color: TEAL,
            fontFamily: "monospace",
            fontWeight: 700,
            marginBottom: 24,
            opacity: 0.8,
            textTransform: "uppercase",
          }}>
            Estrategia Web · Colombia
          </div>

          {/* Main headline */}
          <div style={{
            fontSize: 32,
            fontFamily: "system-ui, sans-serif",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Por qué tu<br />
            sitio web no<br />
            genera clientes
          </div>

          {/* Subtext */}
          <div style={{
            fontSize: 14,
            fontFamily: "sans-serif",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.6,
            marginBottom: 32,
          }}>
            4 causas reales y<br />cómo corregirlas
          </div>

          {/* Teal accent line */}
          <div style={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: `linear-gradient(90deg, ${TEAL}, transparent)`,
          }} />
        </div>

        {/* Watermark */}
        <div aria-hidden="true" style={{
          position: "absolute", bottom: 28, right: 32,
          fontSize: 10, fontFamily: "monospace", fontWeight: 600,
          letterSpacing: 2, color: "rgba(255,255,255,0.18)", textTransform: "uppercase",
        }}>
          stivenramirez.com
        </div>
      </div>
    </div>
  );
}
