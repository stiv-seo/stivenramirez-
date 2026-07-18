"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";
const AMBER = "#F5A524";

const ROWS = [
  { label: "Costo mensual",     shopify: "Fijo, más alto",     woo: "Variable, más bajo" },
  { label: "Mantenimiento",     shopify: "Cero",               woo: "Requiere gestión" },
  { label: "Velocidad base",    shopify: "Buena por defecto",  woo: "Depende del hosting" },
  { label: "Flexibilidad",      shopify: "Moderada",           woo: "Alta" },
];

const W = 1200;
const H = 630;

export function BannerShopifyVsWoocommerce() {
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
      aria-label="Comparativa Shopify vs WooCommerce en Colombia: costo, mantenimiento, velocidad y flexibilidad"
    >
      <div style={{
        width: W, height: H,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        position: "relative",
        overflow: "hidden",
        background: [
          "radial-gradient(800px 560px at 50% 45%, rgba(0,196,180,0.07) 0%, transparent 60%)",
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
          WebkitMaskImage: "radial-gradient(950px 580px at 50% 50%, black 15%, transparent 80%)",
          maskImage: "radial-gradient(950px 580px at 50% 50%, black 15%, transparent 80%)",
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

        {/* Eyebrow + headline, top */}
        <div style={{ position: "absolute", top: 56, left: 0, right: 0, textAlign: "center" }}>
          <div style={{
            fontSize: 10, letterSpacing: "0.18em", color: TEAL,
            fontFamily: "monospace", fontWeight: 700,
            textTransform: "uppercase", marginBottom: 14, opacity: 0.85,
          }}>
            E-commerce · Colombia 2026
          </div>
          <div style={{
            fontSize: 32, fontFamily: "system-ui, sans-serif",
            fontWeight: 800, color: "#fff", lineHeight: 1.15,
          }}>
            <span style={{ color: TEAL }}>Shopify</span> vs <span style={{ color: AMBER }}>WooCommerce</span>
          </div>
          <div style={{
            fontSize: 13, fontFamily: "sans-serif",
            color: "rgba(255,255,255,0.38)", marginTop: 10,
          }}>
            Comparativa honesta para negocios colombianos
          </div>
        </div>

        {/* Comparison table */}
        <div style={{ position: "absolute", top: 240, left: 90, right: 90, bottom: 60 }}>
          {/* Column headers */}
          <div style={{ display: "flex", marginBottom: 18 }}>
            <div style={{ width: "34%" }} />
            <div style={{ width: "33%", textAlign: "center", fontSize: 14, fontFamily: "system-ui, sans-serif", fontWeight: 700, color: TEAL }}>Shopify</div>
            <div style={{ width: "33%", textAlign: "center", fontSize: 14, fontFamily: "system-ui, sans-serif", fontWeight: 700, color: AMBER }}>WooCommerce</div>
          </div>

          {ROWS.map((row, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center",
              paddingTop: 16, paddingBottom: 16,
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}>
              <div style={{ width: "34%", fontSize: 13, fontFamily: "monospace", color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}>
                {row.label}
              </div>
              <div style={{ width: "33%", textAlign: "center", fontSize: 13, fontFamily: "sans-serif", color: "rgba(255,255,255,0.85)" }}>
                {row.shopify}
              </div>
              <div style={{ width: "33%", textAlign: "center", fontSize: 13, fontFamily: "sans-serif", color: "rgba(255,255,255,0.85)" }}>
                {row.woo}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          position: "absolute", bottom: 20, left: 0, right: 0, textAlign: "center",
          fontSize: 10, fontFamily: "monospace",
          color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em",
        }}>
          stivenramirez.com · E-commerce Colombia
        </div>
      </div>
    </div>
  );
}
