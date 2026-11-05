"use client";

import { BannerFrame, TEAL, mono, sans } from "./BannerFrame";

const FILAS = [
  { viejo: "/producto/camiseta-algodon/", nuevo: "/products/camiseta-algodon" },
  { viejo: "/categoria-producto/camisetas/", nuevo: "/collections/camisetas" },
  { viejo: "/sobre-nosotros/", nuevo: "/pages/sobre-nosotros" },
];
const PASOS = ["Mapa de URLs", "Redirecciones 301", "Search Console"];

export function BannerMigracionWooShopify() {
  return (
    <BannerFrame
      label="Migración de WooCommerce a Shopify: cada URL vieja se redirige con un 301 a su equivalente nueva"
      eyebrow="E-commerce · Migración"
      title={<>WooCommerce a <span style={{ color: TEAL }}>Shopify</span> sin perder posiciones</>}
      footer="stivenramirez.com · Ejemplos ilustrativos de URLs"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 4 }}>
        {FILAS.map((f) => (
          <div key={f.viejo} style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ flex: 1, padding: "14px 20px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", fontSize: 19, color: "rgba(255,255,255,0.55)", ...mono }}>{f.viejo}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: TEAL, ...sans }}>
              <span style={{ fontSize: 14, fontWeight: 800, padding: "3px 10px", borderRadius: 20, border: `1px solid ${TEAL}` }}>301</span>
              <span style={{ fontSize: 26 }}>→</span>
            </div>
            <div style={{ flex: 1, padding: "14px 20px", borderRadius: 12, background: "rgba(0,196,180,0.12)", border: `1px solid ${TEAL}`, fontSize: 19, color: "#fff", ...mono }}>{f.nuevo}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 30 }}>
        {PASOS.map((p) => (
          <div key={p} style={{ padding: "9px 20px", borderRadius: 30, border: "1px solid rgba(255,255,255,0.14)", fontSize: 16, color: "rgba(255,255,255,0.75)", ...sans }}>{p}</div>
        ))}
      </div>
    </BannerFrame>
  );
}
