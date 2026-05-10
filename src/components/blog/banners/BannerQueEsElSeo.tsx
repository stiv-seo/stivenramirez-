"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";
const BG   = "#0d1117";

// Tick angles around the r4 ring (radius 250px from center)
const TICK_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

// Satellites: mix of circle nodes and rotated squares
const CIRCLE_NODES = [
  { x: 120, y: 160, dim: false, accent: false },
  { x: 470, y: 290, dim: false, accent: false },
  { x: 410, y: 430, dim: false, accent: false },
  { x: 160, y: 430, dim: false, accent: false },
  { x: 80,  y: 280, dim: false, accent: false },
  { x: 240, y: 80,  dim: true,  accent: false },
  { x: 330, y: 470, dim: true,  accent: false },
];
const SQUARE_NODES = [
  { x: 430, y: 140, teal: true,  dim: false }, // accent square
  { x: 200, y: 120, teal: false, dim: true  },
  { x: 360, y: 200, teal: false, dim: true  },
  { x: 380, y: 360, teal: false, dim: true  },
  { x: 170, y: 340, teal: false, dim: true  },
  { x: 60,  y: 200, teal: false, dim: false },
  { x: 480, y: 200, teal: false, dim: false },
];

export function BannerQueEsElSeo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setScale(containerRef.current.clientWidth / 1200);
      }
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
      aria-label="Ilustración abstracta: radar de descubrimiento SEO con señales de keywords orbitando el núcleo"
    >
      {/* ── Stage 1200×630 ── */}
      <div
        style={{
          width: 1200,
          height: 630,
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
        }}
      >
        {/* Grid texture */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: [
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "40px 40px",
          WebkitMaskImage: "radial-gradient(900px 540px at 50% 50%, black 30%, transparent 80%)",
          maskImage:        "radial-gradient(900px 540px at 50% 50%, black 30%, transparent 80%)",
        }} />

        {/* Ruler */}
        <div aria-hidden="true" style={{
          position: "absolute", left: 0, right: 0, top: "50%", height: 1,
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.04) 92%, transparent 100%)",
        }} />

        {/* HUD corners */}
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, top: 28, left: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, top: 28, right: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, bottom: 28, left: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, bottom: 28, right: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" }} />

        {/* ── Centred radar composition ── */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 540, height: 540 }}>

            {/* Concentric rings */}
            <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.08)", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.14)", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 140, height: 140, borderRadius: "50%", border: "1px solid rgba(0,196,180,0.45)", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />

            {/* Crosshair */}
            <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(0,196,180,0.45) 50%, transparent 100%)" }} />
            <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: "linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.45) 50%, transparent 100%)" }} />

            {/* Radar sweep — conic gradient (browser only, not in OG) */}
            <div style={{
              position: "absolute",
              left: "50%", top: "50%",
              width: 250, height: 250,
              transform: "translate(-50%, -50%) rotate(-30deg)",
              background: "conic-gradient(from 0deg, rgba(0,196,180,0.32) 0deg, rgba(0,196,180,0.10) 22deg, rgba(0,196,180,0) 60deg, rgba(0,196,180,0) 360deg)",
              borderRadius: "50%",
              WebkitMaskImage: "radial-gradient(circle, transparent 12%, black 14%, black 100%)",
              maskImage:        "radial-gradient(circle, transparent 12%, black 14%, black 100%)",
              filter: "blur(0.4px)",
            }} />

            {/* Cardinal ticks on r4 (radius 250px) */}
            {TICK_ANGLES.map((angle) => (
              <div
                key={angle}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: 1,
                  height: 10,
                  background: "rgba(0,196,180,0.55)",
                  transformOrigin: "50% 250px",
                  transform: `translate(-50%, -250px) rotate(${angle}deg)`,
                }}
              />
            ))}

            {/* SVG connector lines */}
            <svg
              viewBox="0 0 540 540"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
            >
              <g stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none">
                <line x1="270" y1="270" x2="120" y2="160" />
                <line x1="270" y1="270" x2="430" y2="140" />
                <line x1="270" y1="270" x2="470" y2="290" />
                <line x1="270" y1="270" x2="410" y2="430" />
                <line x1="270" y1="270" x2="160" y2="430" />
                <line x1="270" y1="270" x2="80"  y2="280" />
                <line x1="270" y1="270" x2="240" y2="80"  />
                <line x1="270" y1="270" x2="330" y2="470" />
              </g>
              {/* Teal accent connector → found signal */}
              <g stroke="rgba(0,196,180,0.7)" strokeWidth="1.25" fill="none">
                <line x1="270" y1="270" x2="430" y2="140" />
              </g>
            </svg>

            {/* Reticle frame around core */}
            <div style={{ position: "absolute", left: "50%", top: "50%", width: 130, height: 130, transform: "translate(-50%,-50%)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
            </div>

            {/* Central core — rotated diamond */}
            <div style={{
              position: "absolute",
              left: "50%", top: "50%",
              width: 70, height: 70,
              transform: "translate(-50%, -50%) rotate(45deg)",
              background: "linear-gradient(135deg, #5beedc 0%, #00C4B4 55%, rgba(0,196,180,0) 100%)",
              boxShadow: "0 0 50px rgba(0,196,180,0.6), 0 0 120px rgba(0,196,180,0.32)",
            }}>
              {/* white inner core */}
              <div style={{ position: "absolute", inset: 22, background: "#ffffff", boxShadow: "0 0 14px rgba(255,255,255,0.85)" }} />
            </div>

            {/* Circle satellite nodes */}
            {CIRCLE_NODES.map(({ x, y, dim }, i) => (
              <div
                key={`c-${i}`}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  width: dim ? 6 : 10,
                  height: dim ? 6 : 10,
                  borderRadius: "50%",
                  background: dim ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.42)",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Square (rotated) satellite nodes */}
            {SQUARE_NODES.map(({ x, y, teal, dim }, i) => (
              <div
                key={`s-${i}`}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  width: dim ? 7 : 10,
                  height: dim ? 7 : 10,
                  background: teal
                    ? TEAL
                    : dim
                      ? "rgba(255,255,255,0.16)"
                      : "rgba(255,255,255,0.32)",
                  transform: "translate(-50%, -50%) rotate(45deg)",
                  boxShadow: teal ? "0 0 14px rgba(0,196,180,0.6)" : undefined,
                }}
              />
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
