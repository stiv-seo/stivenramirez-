"use client";

import { useRef, useEffect, useState } from "react";

const TEAL  = "#00C4B4";
const AMBER = "#F59E0B";

const ZONES = [
  { name: "El Poblado",  sub: "Parque Lleras · Provenza",  comp: "Muy alta", pct: 1.00, teal: true  },
  { name: "Laureles",    sub: "La 70 · Av. Nutibara",      comp: "Alta",     pct: 0.78, teal: false },
  { name: "Envigado",    sub: "Av. El Poblado",             comp: "Media",    pct: 0.54, teal: false },
  { name: "El Centro",   sub: "Parque Berrío · Prado",     comp: "Media",    pct: 0.40, teal: false },
  { name: "Bello",       sub: "Itagüí · Comunas",          comp: "Baja",     pct: 0.24, teal: false },
];

const W = 1200;
const H = 630;

export function BannerSeoRestaurantesMedellin() {
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
      aria-label="Mapa de competencia SEO para restaurantes por zona en Medellín"
    >
      <div style={{
        width: W, height: H,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        position: "relative",
        overflow: "hidden",
        background: [
          "radial-gradient(750px 520px at 70% 50%, rgba(0,196,180,0.10) 0%, rgba(0,196,180,0.03) 40%, transparent 68%)",
          "radial-gradient(500px 400px at 18% 60%, rgba(245,158,11,0.06) 0%, transparent 60%)",
          "linear-gradient(165deg, #11141c 0%, #0d1117 55%, #090b10 100%)",
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
          WebkitMaskImage: "radial-gradient(1000px 600px at 65% 50%, black 15%, transparent 80%)",
          maskImage: "radial-gradient(1000px 600px at 65% 50%, black 15%, transparent 80%)",
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

        {/* ── LEFT: headline ── */}
        <div style={{
          position: "absolute",
          top: 0, bottom: 0, left: 0,
          width: 390,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 64,
          paddingRight: 32,
        }}>
          {/* Map pin icon */}
          <svg width="42" height="50" viewBox="0 0 42 50" fill="none" style={{ marginBottom: 24 }} aria-hidden="true">
            <path d="M21 2C11.6 2 4 9.6 4 19C4 32 21 48 21 48C21 48 38 32 38 19C38 9.6 30.4 2 21 2Z"
              fill="rgba(0,196,180,0.15)" stroke={TEAL} strokeWidth="1.5" />
            <circle cx="21" cy="19" r="7" fill="rgba(0,196,180,0.2)" stroke={TEAL} strokeWidth="1.5" />
            <circle cx="21" cy="19" r="3" fill={TEAL} />
          </svg>

          {/* Eyebrow */}
          <div style={{
            fontSize: 10, letterSpacing: "0.18em", color: TEAL,
            fontFamily: "monospace", fontWeight: 700,
            textTransform: "uppercase", marginBottom: 18, opacity: 0.85,
          }}>
            SEO Local · Medellín 2026
          </div>

          {/* Headline */}
          <div style={{
            fontSize: 34, fontFamily: "system-ui, sans-serif",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.12, marginBottom: 16,
          }}>
            Restaurantes<br />
            en Medellín:<br />
            <span style={{ color: TEAL }}>guía por zona</span>
          </div>

          {/* Stat */}
          <div style={{
            fontSize: 13, fontFamily: "sans-serif",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.55,
          }}>
            +12.000 restaurantes<br />
            en la ciudad
          </div>

          {/* Accent line */}
          <div style={{
            marginTop: 28, width: 44, height: 3, borderRadius: 2,
            background: `linear-gradient(90deg, ${TEAL}, transparent)`,
          }} />
        </div>

        {/* Vertical divider */}
        <div aria-hidden="true" style={{
          position: "absolute", left: 390, top: "12%", bottom: "12%", width: 1,
          background: `linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.25) 50%, transparent 100%)`,
        }} />

        {/* ── RIGHT: zone competition chart ── */}
        <div style={{
          position: "absolute",
          top: 0, bottom: 0,
          left: 422, right: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingRight: 64,
          gap: 0,
        }}>
          {/* Column header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
            paddingBottom: 12,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}>
            <span style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700,
              color: "rgba(255,255,255,0.28)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Zona
            </span>
            <span style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700,
              color: "rgba(255,255,255,0.28)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Competencia SEO
            </span>
          </div>

          {ZONES.map((zone, i) => (
            <div key={i} style={{
              marginBottom: i < ZONES.length - 1 ? 18 : 0,
              paddingBottom: i < ZONES.length - 1 ? 18 : 0,
              borderBottom: i < ZONES.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div>
                  <div style={{
                    fontSize: 15, fontFamily: "system-ui, sans-serif",
                    fontWeight: zone.teal ? 700 : 500,
                    color: zone.teal ? "#fff" : "rgba(255,255,255,0.65)",
                    marginBottom: 2,
                  }}>
                    {zone.name}
                  </div>
                  <div style={{
                    fontSize: 11, fontFamily: "monospace",
                    color: "rgba(255,255,255,0.28)",
                    letterSpacing: "0.04em",
                  }}>
                    {zone.sub}
                  </div>
                </div>
                {/* Competition pill */}
                <div style={{
                  fontSize: 11, fontFamily: "monospace", fontWeight: 700,
                  color: zone.teal ? TEAL : AMBER,
                  background: zone.teal ? "rgba(0,196,180,0.1)" : "rgba(245,158,11,0.1)",
                  border: `1px solid ${zone.teal ? "rgba(0,196,180,0.25)" : "rgba(245,158,11,0.2)"}`,
                  padding: "3px 12px", borderRadius: 20,
                  letterSpacing: "0.05em",
                }}>
                  {zone.comp}
                </div>
              </div>

              {/* Bar */}
              <div style={{ height: zone.teal ? 8 : 6, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: `${zone.pct * 100}%`,
                  background: zone.teal
                    ? `linear-gradient(90deg, rgba(0,196,180,0.5), ${TEAL})`
                    : `linear-gradient(90deg, rgba(245,158,11,0.3), rgba(245,158,11,0.6))`,
                  borderRadius: 4,
                  boxShadow: zone.teal ? `0 0 12px rgba(0,196,180,0.4)` : "none",
                }} />
              </div>
            </div>
          ))}

          {/* Footer note */}
          <div style={{
            marginTop: 20,
            fontSize: 10, fontFamily: "monospace",
            color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.06em",
          }}>
            stivenramirez.com · SEO Local Medellín 2026
          </div>
        </div>
      </div>
    </div>
  );
}
