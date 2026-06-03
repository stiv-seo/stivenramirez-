/* Results marquee — no "use client" needed, pure CSS animation from globals.css */

const results = [
  "+3,847% tráfico orgánico",
  "22 keywords en Top 3",
  "40+ proyectos entregados",
  "WordPress + SEO",
  "Shopify + SEO",
  "100 SEO Score",
  "Medellín · Colombia",
  "+3,847% tráfico orgánico",
  "22 keywords en Top 3",
  "40+ proyectos entregados",
  "WordPress + SEO",
  "Shopify + SEO",
  "100 SEO Score",
  "Medellín · Colombia",
];

export function LogoStrip() {
  return (
    <div
      style={{
        background: "#060F1A",
        borderTop: "1px solid rgba(0,196,180,0.12)",
        padding: "18px 0",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track" style={{ gap: 0 }}>
        {results.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0,
              paddingRight: 0,
              fontFamily: "var(--font-jakarta)",
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(247,245,240,0.3)",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ paddingInline: "clamp(24px, 3vw, 40px)" }}>{item}</span>
            <span
              style={{
                display: "inline-block",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "#00C4B4",
                opacity: 0.5,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
