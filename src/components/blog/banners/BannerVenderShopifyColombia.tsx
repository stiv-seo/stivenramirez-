"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";

const STRATEGIES = [
  { label: "Pagos locales",     sub: "PSE, Nequi, Bancolombia",   pct: 0.95, teal: true  },
  { label: "Velocidad móvil",   sub: "70%+ del tráfico es móvil", pct: 0.88, teal: false },
  { label: "Checkout simple",   sub: "Menos campos, más ventas",  pct: 0.80, teal: false },
  { label: "WhatsApp + SEO",    sub: "Canales que no dependen de pauta", pct: 0.74, teal: false },
];

const W = 1200;
const H = 630;

export function BannerVenderShopifyColombia() {
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
      aria-label="12 estrategias para vender más en Shopify Colombia: pagos locales, velocidad móvil, checkout simple, WhatsApp y SEO"
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
          {/* Shopping bag / cart icon */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 22 }} aria-hidden="true">
            <path d="M12 16h24l-2 22a4 4 0 0 1-4 3.6H18a4 4 0 0 1-4-3.6L12 16Z" fill="rgba(0,196,180,0.18)" stroke={TEAL} strokeWidth="1.5" />
            <path d="M18 16v-4a6 6 0 0 1 12 0v4" stroke={TEAL} strokeWidth="1.5" fill="none" />
          </svg>

          <div style={{
            fontSize: 10, letterSpacing: "0.18em", color: TEAL,
            fontFamily: "monospace", fontWeight: 700,
            textTransform: "uppercase", marginBottom: 18, opacity: 0.85,
          }}>
            E-commerce · Colombia 2026
          </div>

          <div style={{
            fontSize: 30, fontFamily: "system-ui, sans-serif",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.15, marginBottom: 18,
          }}>
            12 estrategias<br />
            para vender más<br />
            en <span style={{ color: TEAL }}>Shopify</span>
          </div>

          <div style={{
            fontSize: 13, fontFamily: "sans-serif",
            color: "rgba(255,255,255,0.38)", lineHeight: 1.6,
            marginBottom: 28,
          }}>
            Pagos, velocidad y retención<br />para tiendas colombianas
          </div>
        </div>

        <div aria-hidden="true" style={{
          position: "absolute", left: 400, top: "12%", bottom: "12%", width: 1,
          background: "linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.22) 50%, transparent 100%)",
        }} />

        {/* ── RIGHT: strategy impact panel ── */}
        <div style={{
          position: "absolute",
          top: 0, bottom: 0, left: 436, right: 0,
          display: "flex", flexDirection: "column",
          justifyContent: "center", paddingRight: 64,
        }}>
          <div style={{
            fontSize: 10, fontFamily: "monospace", fontWeight: 700,
            color: "rgba(255,255,255,0.28)", letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 28,
            paddingBottom: 14,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}>
            Impacto por estrategia
          </div>

          {STRATEGIES.map((item, i) => (
            <div key={i} style={{ marginBottom: i < STRATEGIES.length - 1 ? 26 : 0 }}>
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

          <div style={{
            marginTop: 24, fontSize: 10, fontFamily: "monospace",
            color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em",
          }}>
            stivenramirez.com · E-commerce Colombia
          </div>
        </div>
      </div>
    </div>
  );
}
