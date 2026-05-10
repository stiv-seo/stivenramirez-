"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";

const TICK_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

const PINS = [
  { x: 140, y: 160, dim: false },
  { x: 90,  y: 300, dim: true  },
  { x: 200, y: 420, dim: false },
  { x: 340, y: 480, dim: true  },
  { x: 460, y: 420, dim: false },
  { x: 520, y: 280, dim: false },
  { x: 470, y: 140, dim: true  },
  { x: 340, y: 90,  dim: false },
  { x: 240, y: 240, dim: true  },
  { x: 400, y: 340, dim: true  },
];

function CompetitorPin({ x, y, dim }: { x: number; y: number; dim: boolean }) {
  const color = dim ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.30)";
  const dotBg = dim ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.25)";
  return (
    <div style={{ position: "absolute", left: x, top: y, width: 18, height: 30, transform: "translate(-50%, -100%)" }}>
      <div style={{ width: 18, height: 18, transform: "rotate(45deg)", border: `1px solid ${color}`, background: "rgba(255,255,255,0.04)", marginLeft: "auto", marginRight: "auto" }} />
      <div style={{ width: 1, height: 12, background: color, marginLeft: "auto", marginRight: "auto", transform: "translateY(-2px)" }} />
      <div style={{ position: "absolute", left: "50%", bottom: -3, width: 4, height: 4, borderRadius: "50%", background: dotBg, transform: "translateX(-50%)" }} />
    </div>
  );
}

export function BannerGoogleMaps() {
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
      aria-label="Mapa de proximidad con pin focal teal y competidores — Google Maps SEO local"
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

        {/* Diagonal "streets" SVG */}
        <svg aria-hidden="true" viewBox="0 0 1200 630" preserveAspectRatio="none" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", WebkitMaskImage: "radial-gradient(900px 540px at 50% 50%, black 20%, transparent 75%)", maskImage: "radial-gradient(900px 540px at 50% 50%, black 20%, transparent 75%)" }}>
          <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none">
            <line x1="-100" y1="500" x2="1300" y2="120" />
            <line x1="-100" y1="200" x2="1300" y2="-200" />
            <line x1="-100" y1="700" x2="1300" y2="320" />
            <line x1="-100" y1="100" x2="1300" y2="600" />
            <line x1="-100" y1="-100" x2="1300" y2="400" />
          </g>
        </svg>

        {/* Ruler */}
        <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.04) 92%, transparent 100%)" }} />
        {/* HUD corners */}
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, top: 28, left: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, top: 28, right: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, bottom: 28, left: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, bottom: 28, right: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" }} />

        {/* Centered map 600×540 */}
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 600, height: 540 }}>

            {/* Concentric rings */}
            <div style={{ position: "absolute", width: 480, height: 480, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.07)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 130, height: 130, borderRadius: "50%", border: "1px solid rgba(0,196,180,0.45)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            {/* Crosshair */}
            <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(0,196,180,0.4) 50%, transparent 100%)" }} />
            <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: "linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.4) 50%, transparent 100%)" }} />

            {/* Cardinal ticks at radius 240 */}
            {TICK_ANGLES.map((angle) => (
              <div
                key={angle}
                style={{
                  position: "absolute",
                  left: "50%", top: "50%",
                  width: 1, height: 10,
                  background: "rgba(0,196,180,0.55)",
                  transformOrigin: "50% 240px",
                  transform: `translate(-50%, -240px) rotate(${angle}deg)`,
                }}
              />
            ))}

            {/* Competitor pins */}
            {PINS.map((pin, i) => (
              <CompetitorPin key={i} x={pin.x} y={pin.y} dim={pin.dim} />
            ))}

            {/* Reticle 110×110 at center */}
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 110, height: 110, transform: "translate(-50%,-50%)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
            </div>

            {/* Focal pin at center */}
            <div style={{ position: "absolute", left: "50%", top: "50%", width: 56, height: 84, transform: "translate(-50%, -100%) translateY(28px)", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* Head */}
              <div style={{
                width: 56, height: 56,
                transform: "rotate(45deg)",
                background: "linear-gradient(135deg, #5beedc 0%, #00C4B4 60%, rgba(0,196,180,0) 100%)",
                boxShadow: "0 0 50px rgba(0,196,180,0.55), 0 0 110px rgba(0,196,180,0.3)",
                position: "relative",
              }}>
                <div style={{ position: "absolute", top: 18, left: 18, right: 18, bottom: 18, background: "#ffffff", boxShadow: "0 0 12px rgba(255,255,255,0.85)" }} />
              </div>
              {/* Stem */}
              <div style={{ width: 1, height: 24, background: `linear-gradient(180deg, ${TEAL}, rgba(0,196,180,0))`, transform: "translateY(-2px)", boxShadow: "0 0 6px rgba(0,196,180,0.6)" }} />
              {/* Base dot */}
              <div style={{ position: "absolute", left: "50%", bottom: -2, width: 8, height: 8, borderRadius: "50%", background: TEAL, boxShadow: "0 0 12px rgba(0,196,180,0.7)", transform: "translateX(-50%)" }} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
