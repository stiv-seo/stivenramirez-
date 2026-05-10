"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";

// 7 fault marks around center (380, 230 in scene 760×460)
const MARKS = [
  { x: 160, y: 120 }, { x: 600, y: 120 },
  { x: 120, y: 240 }, { x: 640, y: 240 },
  { x: 200, y: 380 }, { x: 560, y: 380 },
  { x: 380, y: 60  },
];
// Dim corner marks
const DIM_MARKS = [
  { x: 80,  y: 60,  s: 22 }, { x: 680, y: 60,  s: 22 },
  { x: 80,  y: 420, s: 22 }, { x: 680, y: 420, s: 22 },
];
// Background fragment rects
const FRAGS = [
  { l: 60,  t: 80,  w: 60, h: 8 },
  { l: 660, t: 120, w: 40, h: 8 },
  { l: 80,  t: 380, w: 80, h: 6 },
  { l: 620, t: 360, w: 70, h: 8 },
  { l: 200, t: 30,  w: 30, h: 6 },
  { l: 540, t: 430, w: 30, h: 6 },
];

function FaultMark({ x, y, size = 36, dim = false }: { x: number; y: number; size?: number; dim?: boolean }) {
  const color = dim ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.45)";
  return (
    <div style={{ position: "absolute", left: x, top: y, width: size, height: size, transform: "translate(-50%, -50%)", border: `1px solid ${color}`, background: "rgba(255,255,255,0.03)" }}>
      <div style={{ position: "absolute", left: "50%", top: "50%", width: 28, height: 1, background: color, transform: "translate(-50%, -50%) rotate(45deg)" }} />
      <div style={{ position: "absolute", left: "50%", top: "50%", width: 28, height: 1, background: color, transform: "translate(-50%, -50%) rotate(-45deg)" }} />
    </div>
  );
}

export function BannerErroresDisenoWebSeo() {
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
      aria-label="Ilustración: 7 errores de diseño web que destruyen el SEO — marcadores de fallo"
    >
      <div style={{
        width: 1200, height: 630,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        position: "relative",
        overflow: "hidden",
        background: [
          "radial-gradient(700px 540px at 50% 50%, rgba(0,196,180,0.10) 0%, rgba(0,196,180,0.03) 35%, transparent 65%)",
          "radial-gradient(900px 540px at 50% 50%, rgba(255,255,255,0.035) 0%, transparent 60%)",
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

        {/* Centered scene 760×460 */}
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 760, height: 460 }}>

            {/* Background fragments */}
            {FRAGS.map((f, i) => (
              <div key={i} style={{ position: "absolute", left: f.l, top: f.t, width: f.w, height: f.h, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
            ))}

            {/* Concentric rings (center at 380, 230) */}
            <div style={{ position: "absolute", width: 460, height: 460, borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.07)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.10)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 160, height: 160, borderRadius: "50%", border: "1px solid rgba(0,196,180,0.45)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            {/* Crosshair */}
            <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(0,196,180,0.35) 50%, transparent 100%)" }} />
            <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: "linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.35) 50%, transparent 100%)" }} />

            {/* SVG connector lines from center to each fault mark */}
            <svg viewBox="0 0 760 460" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible" }}>
              <g stroke="rgba(0,196,180,0.35)" strokeWidth="1" fill="none" strokeDasharray="3 5">
                <line x1="380" y1="230" x2="160" y2="120" />
                <line x1="380" y1="230" x2="600" y2="120" />
                <line x1="380" y1="230" x2="120" y2="240" />
                <line x1="380" y1="230" x2="640" y2="240" />
                <line x1="380" y1="230" x2="200" y2="380" />
                <line x1="380" y1="230" x2="560" y2="380" />
                <line x1="380" y1="230" x2="380" y2="60"  />
              </g>
            </svg>

            {/* 7 fault marks */}
            {MARKS.map((m, i) => (
              <FaultMark key={i} x={m.x} y={m.y} />
            ))}

            {/* 4 dim corner marks (smaller) */}
            {DIM_MARKS.map((m, i) => (
              <FaultMark key={`d${i}`} x={m.x} y={m.y} size={m.s} dim />
            ))}

            {/* Reticle 150×150 at center */}
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 150, height: 150, transform: "translate(-50%,-50%)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
            </div>

            {/* Focal big X at center */}
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 110, height: 110, transform: "translate(-50%,-50%)" }}>
              {/* Diamond glow */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transform: "rotate(45deg)", background: "linear-gradient(135deg, rgba(0,196,180,0.35) 0%, rgba(0,196,180,0.15) 60%, rgba(0,196,180,0) 100%)", boxShadow: "0 0 60px rgba(0,196,180,0.55), 0 0 130px rgba(0,196,180,0.32)" }} />
              {/* X stroke 1 */}
              <div style={{ position: "absolute", left: "50%", top: "50%", width: 110, height: 4, background: "linear-gradient(90deg, rgba(0,196,180,0) 0%, #00C4B4 25%, #5beedc 50%, #00C4B4 75%, rgba(0,196,180,0) 100%)", boxShadow: "0 0 18px rgba(0,196,180,0.7)", transform: "translate(-50%, -50%) rotate(45deg)" }} />
              {/* X stroke 2 */}
              <div style={{ position: "absolute", left: "50%", top: "50%", width: 110, height: 4, background: "linear-gradient(90deg, rgba(0,196,180,0) 0%, #00C4B4 25%, #5beedc 50%, #00C4B4 75%, rgba(0,196,180,0) 100%)", boxShadow: "0 0 18px rgba(0,196,180,0.7)", transform: "translate(-50%, -50%) rotate(-45deg)" }} />
              {/* Center white dot */}
              <div style={{ position: "absolute", left: "50%", top: "50%", width: 10, height: 10, borderRadius: "50%", background: "#ffffff", boxShadow: "0 0 14px rgba(255,255,255,0.85)", transform: "translate(-50%, -50%)" }} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
