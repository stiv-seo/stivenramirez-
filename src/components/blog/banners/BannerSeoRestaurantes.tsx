"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";

const ITEMS = [
  { label: "Google Maps",     pct: 0.92, teal: true  },
  { label: "Reseñas",         pct: 0.78, teal: false },
  { label: "Fotos",           pct: 0.64, teal: false },
  { label: "Sitio web",       pct: 0.46, teal: false },
  { label: "Directorios NAP", pct: 0.34, teal: false },
];

export function BannerSeoRestaurantes() {
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

  const stageW = 1200;
  const stageH = 630;

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: Math.round(stageH * scale), overflow: "hidden", borderRadius: 16 }}
      role="img"
      aria-label="Gráfico de prioridades SEO para restaurantes en Colombia: Google Maps en primer lugar"
    >
      <div
        style={{
          width: stageW,
          height: stageH,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          position: "relative",
          overflow: "hidden",
          background: [
            "radial-gradient(800px 580px at 65% 55%, rgba(0,196,180,0.11) 0%, rgba(0,196,180,0.04) 35%, transparent 65%)",
            "radial-gradient(700px 500px at 20% 45%, rgba(255,255,255,0.03) 0%, transparent 60%)",
            "linear-gradient(180deg, #11141c 0%, #0d1117 55%, #0a0c12 100%)",
          ].join(", "),
          boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.03) inset",
        }}
      >
        {/* Grid texture */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: [
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
              "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "40px 40px",
            WebkitMaskImage: "radial-gradient(1000px 580px at 50% 50%, black 20%, transparent 80%)",
            maskImage: "radial-gradient(1000px 580px at 50% 50%, black 20%, transparent 80%)",
          }}
        />

        {/* Corner ticks */}
        {[
          { top: 28, left: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" },
          { top: 28, right: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" },
          { bottom: 28, left: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" },
          { bottom: 28, right: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" },
        ].map((s, i) => (
          <div key={i} aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, ...s }} />
        ))}

        {/* ── LEFT: pin map icon ── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0, bottom: 0, left: 0,
            width: "42%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", width: 220, height: 260 }}>
            {/* Outer glow ring */}
            <div style={{
              position: "absolute",
              top: "50%", left: "50%",
              width: 200, height: 200,
              transform: "translate(-50%, -58%)",
              borderRadius: "50%",
              border: `1px dashed rgba(0,196,180,0.25)`,
            }} />
            <div style={{
              position: "absolute",
              top: "50%", left: "50%",
              width: 140, height: 140,
              transform: "translate(-50%, -58%)",
              borderRadius: "50%",
              border: `1px solid rgba(0,196,180,0.40)`,
            }} />

            {/* Pin body */}
            <svg
              viewBox="0 0 220 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", height: "100%" }}
            >
              {/* Drop shadow ellipse */}
              <ellipse cx="110" cy="245" rx="38" ry="10" fill="rgba(0,0,0,0.55)" />
              {/* Pin shape */}
              <path
                d="M110 20 C70 20 40 52 40 92 C40 132 110 220 110 220 C110 220 180 132 180 92 C180 52 150 20 110 20Z"
                fill={`rgba(0,196,180,0.18)`}
                stroke={TEAL}
                strokeWidth="2"
              />
              {/* Inner circle */}
              <circle cx="110" cy="92" r="30" fill="rgba(0,196,180,0.15)" stroke={TEAL} strokeWidth="1.5" />
              {/* Center dot */}
              <circle cx="110" cy="92" r="10" fill={TEAL} />
              <circle cx="110" cy="92" r="5" fill="#fff" />
              {/* Glow */}
              <circle cx="110" cy="92" r="10" fill="none" stroke={TEAL} strokeWidth="6" strokeOpacity="0.2" />
            </svg>
          </div>
        </div>

        {/* ── CENTER divider ── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "42%",
            top: "15%",
            bottom: "15%",
            width: 1,
            background: "linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.3) 50%, transparent 100%)",
          }}
        />

        {/* ── RIGHT: ranking bars ── */}
        <div
          style={{
            position: "absolute",
            top: 0, bottom: 0,
            left: "46%", right: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: 72,
            gap: 0,
          }}
        >
          {/* Eyebrow */}
          <div style={{
            fontSize: 11,
            letterSpacing: "0.14em",
            color: TEAL,
            textTransform: "uppercase",
            fontFamily: "monospace",
            marginBottom: 28,
            opacity: 0.85,
          }}>
            Prioridad SEO · Restaurantes Colombia
          </div>

          {/* Bars */}
          {ITEMS.map((item, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              {/* Label + pct */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
                alignItems: "baseline",
              }}>
                <span style={{
                  fontSize: 15,
                  color: item.teal ? "#fff" : "rgba(255,255,255,0.65)",
                  fontFamily: "sans-serif",
                  fontWeight: item.teal ? 600 : 400,
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontSize: 13,
                  color: item.teal ? TEAL : "rgba(255,255,255,0.35)",
                  fontFamily: "monospace",
                }}>
                  {Math.round(item.pct * 100)}%
                </span>
              </div>
              {/* Track */}
              <div style={{
                height: item.teal ? 10 : 7,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 6,
                overflow: "hidden",
              }}>
                {/* Fill */}
                <div style={{
                  height: "100%",
                  width: `${item.pct * 100}%`,
                  background: item.teal
                    ? `linear-gradient(90deg, rgba(0,196,180,0.6) 0%, ${TEAL} 100%)`
                    : "rgba(255,255,255,0.22)",
                  borderRadius: 6,
                  boxShadow: item.teal ? `0 0 14px rgba(0,196,180,0.45)` : "none",
                }} />
              </div>
            </div>
          ))}

          {/* Footer note */}
          <div style={{
            marginTop: 12,
            fontSize: 11,
            color: "rgba(255,255,255,0.25)",
            fontFamily: "monospace",
            letterSpacing: "0.05em",
          }}>
            stivenramirez.com · SEO Local Colombia 2026
          </div>
        </div>
      </div>
    </div>
  );
}
