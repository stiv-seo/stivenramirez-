import Link from "next/link";

const plans = [
  {
    category: "Diseño Web",
    title: "WordPress\n& Shopify\ncon SEO",
    price: "Desde $3.500.000",
    unit: "por proyecto",
    href: "/servicios/diseno-web/",
    featured: false,
    includes: [
      "Arquitectura SEO desde el wireframe",
      "Core Web Vitals ≥ 90 en mobile",
      "Schema markup completo",
      "Google Search Console configurado",
      "Entrega en 3–5 semanas",
    ],
  },
  {
    category: "Posicionamiento",
    title: "SEO\nContinuo\nMensual",
    price: "$1.300.000",
    unit: "por mes",
    href: "/servicios/seo/",
    featured: true,
    includes: [
      "Auditoría técnica mensual",
      "Estrategia de keywords",
      "Contenido optimizado",
      "Link building de calidad",
      "Reporte mensual de posiciones",
    ],
  },
  {
    category: "Pauta Digital",
    title: "Google,\nMeta &\nTikTok Ads",
    price: "$1.500.000",
    unit: "por mes",
    href: "/servicios/pauta/",
    featured: false,
    includes: [
      "Google Search + Display",
      "Meta Ads (Facebook + Instagram)",
      "TikTok Ads",
      "Sin % sobre inversión",
      "Reporte semanal de campaña",
    ],
  },
];

export function PricingServices() {
  return (
    <section style={{ background: "#F7F5F0", padding: "100px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(20px,5vw,60px)" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "#00C4B4", marginBottom: 12 }}>
              01 — Servicios
            </p>
            <h2 style={{ fontFamily: "var(--font-jakarta-sans)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 800, color: "#0B1829", lineHeight: 1.02, letterSpacing: "-2px", margin: 0 }}>
              Lo que construyo<br />para ti.
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, color: "#5E6E82", lineHeight: 1.7, maxWidth: 300, margin: 0 }}>
            SEO integrado desde el primer elemento — diseño y posicionamiento en un solo proceso.
          </p>
        </div>

        {/* Pricing grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {plans.map((plan) => (
            <div
              key={plan.title}
              style={{
                background: plan.featured ? "#0B1829" : "white",
                borderRadius: 20,
                padding: "36px 32px",
                border: plan.featured ? "none" : "1px solid rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxShadow: plan.featured
                  ? "0 24px 60px rgba(11,24,41,0.25), 0 0 0 1px rgba(255,255,255,0.06)"
                  : "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {plan.featured && (
                <span style={{
                  position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                  background: "#00C4B4", color: "#0B1829",
                  fontFamily: "var(--font-dm-sans)", fontSize: 10, fontWeight: 700,
                  letterSpacing: "2px", textTransform: "uppercase",
                  padding: "5px 14px", borderRadius: 99,
                  whiteSpace: "nowrap",
                }}>
                  Más popular
                </span>
              )}

              <p style={{
                fontFamily: "var(--font-dm-sans)", fontSize: 10, fontWeight: 600,
                letterSpacing: "3px", textTransform: "uppercase",
                color: plan.featured ? "rgba(0,196,180,0.7)" : "rgba(0,0,0,0.3)",
                marginBottom: 16,
              }}>
                {plan.category}
              </p>

              <h3 style={{
                fontFamily: "var(--font-jakarta-sans)", fontSize: "clamp(24px,2.5vw,32px)",
                fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px",
                color: plan.featured ? "white" : "#0B1829",
                whiteSpace: "pre-line",
                marginBottom: 24,
              }}>
                {plan.title}
              </h3>

              <div style={{ marginBottom: 28 }}>
                <p style={{
                  fontFamily: "var(--font-jakarta-sans)", fontSize: "clamp(22px,2vw,28px)",
                  fontWeight: 800, letterSpacing: "-1px",
                  color: plan.featured ? "#00C4B4" : "#0B1829",
                }}>
                  {plan.price}
                </p>
                <p style={{
                  fontFamily: "var(--font-dm-sans)", fontSize: 12,
                  color: plan.featured ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)",
                }}>
                  {plan.unit}
                </p>
              </div>

              {/* Divider */}
              <div style={{
                height: 1, marginBottom: 24,
                background: plan.featured ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)",
              }} />

              {/* Includes */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", flex: 1 }}>
                {plan.includes.map((item) => (
                  <li key={item} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    fontFamily: "var(--font-dm-sans)", fontSize: 13,
                    color: plan.featured ? "rgba(255,255,255,0.6)" : "#5E6E82",
                    lineHeight: 1.5, marginBottom: 10,
                  }}>
                    <span style={{ color: "#00C4B4", flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "13px 24px", borderRadius: 99,
                  fontFamily: "var(--font-jakarta-sans)", fontSize: 14, fontWeight: 700,
                  textDecoration: "none",
                  background: plan.featured ? "#00C4B4" : "transparent",
                  color: plan.featured ? "#0B1829" : "#0B1829",
                  border: plan.featured ? "none" : "1.5px solid rgba(0,0,0,0.15)",
                  transition: "all 180ms ease-out",
                }}
              >
                Ver qué incluye →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
