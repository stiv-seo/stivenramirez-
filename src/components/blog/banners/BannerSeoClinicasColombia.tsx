"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";

const EEAT = [
  { label: "Experiencia",  sub: "Casos reales documentados", pct: 0.88, teal: true  },
  { label: "Expertise",    sub: "Médico firma el contenido",  pct: 0.94, teal: false },
  { label: "Autoridad",    sub: "Menciones y backlinks",      pct: 0.72, teal: false },
  { label: "Confianza",    sub: "Reseñas verificadas + NAP",  pct: 0.80, teal: false },
];

const W = 1200;
const H = 630;

export function BannerSeoClinicasColombia() {
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

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: Math.round(H * scale), overflow: "hidden", borderRadius: 16 }}
      role="img"
      aria-label="E-E-A-T para SEO médico en Colombia: Experiencia, Expertise, Autoridad y Confianza"
    >
      <div style={{
        width: W, height: H,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        position: "relative",
        overflow: "hidden",
        background: [
          "radial-gradient(700px 500px at 68% 48%, rgba(0,196,180,0.09) 0%, rgba(0,196,180,0.02) 45%, transparent 70%)",
          "radial-gradient(500px 400px at 15% 55%, rgba(0,196,180,0.05) 0%, transparent 55%)",
          "linear-gradient(170deg, #11141c 0%, #0d1117 55%, #090b10 100%)",
        ].join(", "),
      }}>

        {/* Grid */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: [
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "44px 44px",
          WebkitMaskImage: "radial-gradient(950px 580px at 62% 50%, black 15%, transparent 80%)",
          maskImage: "radial-gradient(950px 580px at 62% 50%, black 15%, transparent 80%)",
        }} />

        {/* Corner HUD */}
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

        {/* ── LEFT: icon + headline ── */}
        <div style={{
          position: "absolute",
          top: 0, bottom: 0, left: 0, width: 400,
          display: "flex", flexDirection: "column",
          justifyContent: "center", paddingLeft: 64, paddingRight: 36,
        }}>
          {/* Medical cross SVG */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 22 }} aria-hidden="true">
            <rect x="18" y="4" width="12" height="40" rx="4" fill={`rgba(0,196,180,0.18)`} stroke={TEAL} strokeWidth="1.5" />
            <rect x="4" y="18" width="40" height="12" rx="4" fill={`rgba(0,196,180,0.18)`} stroke={TEAL} strokeWidth="1.5" />
            <rect x="20" y="20" width="8" height="8" rx="1" fill={TEAL} />
          </svg>

          {/* Eyebrow */}
          <div style={{
            fontSize: 10, letterSpacing: "0.18em", color: TEAL,
            fontFamily: "monospace", fontWeight: 700,
            textTransform: "uppercase", marginBottom: 18, opacity: 0.85,
          }}>
            SEO Médico · Colombia 2026
          </div>

          {/* Headline */}
          <div style={{
            fontSize: 32, fontFamily: "system-ui, sans-serif",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.15, marginBottom: 18,
          }}>
            SEO para<br />
            clínicas y<br />
            <span style={{ color: TEAL }}>consultorios</span>
          </div>

          {/* Sub */}
          <div style={{
            fontSize: 13, fontFamily: "sans-serif",
            color: "rgba(255,255,255,0.38)", lineHeight: 1.6,
            marginBottom: 28,
          }}>
            Cómo atraer más pacientes<br />con Google Business Profile
          </div>

          {/* YMYL badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(0,196,180,0.08)",
            border: "1px solid rgba(0,196,180,0.2)",
            borderRadius: 20, padding: "5px 14px",
            alignSelf: "flex-start",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: TEAL }} />
            <span style={{ fontSize: 11, fontFamily: "monospace", fontWeight: 700,
              color: TEAL, letterSpacing: "0.1em" }}>
              YMYL · E-E-A-T
            </span>
          </div>
        </div>

        {/* Vertical divider */}
        <div aria-hidden="true" style={{
          position: "absolute", left: 400, top: "12%", bottom: "12%", width: 1,
          background: "linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.22) 50%, transparent 100%)",
        }} />

        {/* ── RIGHT: E-E-A-T panel ── */}
        <div style={{
          position: "absolute",
          top: 0, bottom: 0, left: 436, right: 0,
          display: "flex", flexDirection: "column",
          justifyContent: "center", paddingRight: 64,
        }}>
          {/* Panel header */}
          <div style={{
            fontSize: 10, fontFamily: "monospace", fontWeight: 700,
            color: "rgba(255,255,255,0.28)", letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 28,
            paddingBottom: 14,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}>
            Señales E-E-A-T para contenido médico
          </div>

          {EEAT.map((item, i) => (
            <div key={i} style={{ marginBottom: i < EEAT.length - 1 ? 26 : 0 }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "baseline", marginBottom: 8,
              }}>
                <div>
                  <span style={{
                    fontSize: 15, fontFamily: "system-ui, sans-serif",
                    fontWeight: item.teal ? 700 : 500,
                    color: item.teal ? "#fff" : "rgba(255,255,255,0.72)",
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontSize: 11, fontFamily: "monospace",
                    color: "rgba(255,255,255,0.28)", marginLeft: 10,
                    letterSpacing: "0.04em",
                  }}>
                    {item.sub}
                  </span>
                </div>
                <span style={{
                  fontSize: 12, fontFamily: "monospace",
                  color: item.teal ? TEAL : "rgba(255,255,255,0.35)",
                  fontWeight: 700,
                }}>
                  {Math.round(item.pct * 100)}%
                </span>
              </div>

              {/* Track */}
              <div style={{
                height: item.teal ? 9 : 7,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 5, overflow: "hidden",
              }}>
                <div style={{
                  height: "100%",
                  width: `${item.pct * 100}%`,
                  background: item.teal
                    ? `linear-gradient(90deg, rgba(0,196,180,0.5), ${TEAL})`
                    : "rgba(255,255,255,0.22)",
                  borderRadius: 5,
                  boxShadow: item.teal ? `0 0 10px rgba(0,196,180,0.4)` : "none",
                }} />
              </div>
            </div>
          ))}

          {/* Footer */}
          <div style={{
            marginTop: 24, fontSize: 10, fontFamily: "monospace",
            color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em",
          }}>
            stivenramirez.com · SEO para salud Colombia
          </div>
        </div>
      </div>
    </div>
  );
}
