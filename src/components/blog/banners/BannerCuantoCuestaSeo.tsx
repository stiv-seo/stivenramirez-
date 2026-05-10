"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";

const BAR_CONFIGS = [
  { pct: 0.18, teal: false, bg: "rgba(255,255,255,0.06)" },
  { pct: 0.34, teal: false, bg: "rgba(255,255,255,0.10)" },
  { pct: 0.52, teal: false, bg: "rgba(255,255,255,0.10)" },
  { pct: 0.72, teal: false, bg: "rgba(255,255,255,0.14)" },
  { pct: 0.96, teal: true,  bg: "linear-gradient(180deg, rgba(0,196,180,0.30) 0%, rgba(0,196,180,0.18) 60%, rgba(0,196,180,0.10) 100%)" },
  { pct: 0.64, teal: false, bg: "rgba(255,255,255,0.14)" },
];

export function BannerCuantoCuestaSeo() {
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

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: Math.round(630 * scale), overflow: "hidden", borderRadius: 16 }}
      role="img"
      aria-label="Gráfico de barras de inversión en sitio web con SEO en Colombia"
    >
      <div style={{
        width: 1200, height: 630,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        position: "relative",
        overflow: "hidden",
        background: [
          "radial-gradient(700px 540px at 62% 56%, rgba(0,196,180,0.10) 0%, rgba(0,196,180,0.03) 35%, transparent 65%)",
          "radial-gradient(900px 560px at 30% 50%, rgba(255,255,255,0.035) 0%, transparent 60%)",
          "linear-gradient(180deg, #11141c 0%, #0d1117 50%, #0a0c12 100%)",
        ].join(", "),
        boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.03) inset",
      }}>
        {/* Grid */}
        <div aria-hidden="true" style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage: "radial-gradient(900px 540px at 50% 50%, black 30%, transparent 80%)",
          maskImage: "radial-gradient(900px 540px at 50% 50%, black 30%, transparent 80%)",
        }} />
        {/* Ruler */}
        <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.04) 92%, transparent 100%)" }} />
        {/* HUD corners */}
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, top: 28, left: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, top: 28, right: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, bottom: 28, left: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, bottom: 28, right: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" }} />

        {/* Centered scene 880×460 */}
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 880, height: 460 }}>

            {/* Horizontal dashed reference lines */}
            {[180, 280, 380].map((b) => (
              <div key={b} style={{ position: "absolute", left: 30, right: 30, bottom: b, height: 0, borderTop: "1px dashed rgba(255,255,255,0.06)" }} />
            ))}

            {/* Baseline */}
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 80, height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 10%, rgba(255,255,255,0.18) 90%, transparent 100%)" }}>
              <div style={{ position: "absolute", left: 0, top: "50%", transform: "translate(0,-50%)", width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.25)" }} />
              <div style={{ position: "absolute", right: 0, top: "50%", transform: "translate(0,-50%)", width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.25)" }} />
            </div>

            {/* Tick marks under baseline */}
            {[0,1,2,3,4,5].map((i) => (
              <div key={i} style={{ position: "absolute", left: 80 + i * 126, bottom: 70, width: 90, height: 6, borderTop: "1px solid rgba(255,255,255,0.18)" }} />
            ))}

            {/* Bars */}
            <div style={{ position: "absolute", left: 80, right: 80, bottom: 81, display: "flex", alignItems: "flex-end", gap: 36, height: 350 }}>
              {BAR_CONFIGS.map((bar, i) => {
                const segColor = bar.teal ? "rgba(0,196,180,0.35)" : "rgba(255,255,255,0.05)";
                const topColor = bar.teal ? TEAL : "rgba(255,255,255,0.28)";
                return (
                  <div key={i} style={{
                    flex: 1,
                    height: `${bar.pct * 100}%`,
                    position: "relative",
                    background: bar.bg,
                    border: bar.teal ? `1px solid ${TEAL}` : "1px solid rgba(255,255,255,0.12)",
                    borderBottom: "none",
                    boxShadow: bar.teal ? "0 0 30px rgba(0,196,180,0.35), inset 0 1px 0 rgba(255,255,255,0.08)" : undefined,
                  }}>
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                      backgroundImage: `linear-gradient(to bottom, transparent 0, transparent 29px, ${segColor} 30px, ${segColor} 31px, transparent 32px)`,
                      backgroundSize: "100% 50px",
                    }} />
                    <div style={{
                      position: "absolute", top: -1, left: -3, right: -3, height: 1,
                      background: topColor,
                      boxShadow: bar.teal ? "0 0 12px rgba(0,196,180,0.6)" : undefined,
                    }} />
                  </div>
                );
              })}
            </div>

            {/* Trend line SVG */}
            <svg viewBox="0 0 880 460" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}>
              <g stroke="rgba(0,196,180,0.45)" strokeWidth="1.25" fill="none" strokeDasharray="3 4">
                <polyline points="125,317 251,261 377,198 503,128 629,44 755,156" />
              </g>
              <g fill="rgba(0,196,180,0.9)">
                <circle cx="629" cy="44" r="3.5" />
              </g>
            </svg>

            {/* Vertical guide */}
            <div style={{ position: "absolute", left: 629, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.4) 25%, rgba(0,196,180,0.4) 75%, transparent 100%)" }} />

            {/* Reticle at focal (629, 44) */}
            <div style={{ position: "absolute", left: 629, top: 44, width: 110, height: 110, transform: "translate(-50%, -50%)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
            </div>

            {/* Focal diamond */}
            <div style={{
              position: "absolute", left: 629, top: 44,
              width: 60, height: 60,
              transform: "translate(-50%, -50%) rotate(45deg)",
              background: "linear-gradient(135deg, #5beedc 0%, #00C4B4 55%, rgba(0,196,180,0) 100%)",
              boxShadow: "0 0 50px rgba(0,196,180,0.55), 0 0 110px rgba(0,196,180,0.3)",
            }}>
              <div style={{ position: "absolute", top: 19, left: 19, right: 19, bottom: 19, background: "#ffffff", boxShadow: "0 0 12px rgba(255,255,255,0.85)" }} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
