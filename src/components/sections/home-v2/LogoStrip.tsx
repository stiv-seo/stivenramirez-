const brands = [
  "Bancolombia", "Éxito", "Levi's", "Rappi",
  "Renovista", "Évora Eterno", "Atta", "Colsubsidio",
  "Bancolombia", "Éxito", "Levi's", "Rappi",
  "Renovista", "Évora Eterno", "Atta", "Colsubsidio",
];

export function LogoStrip() {
  return (
    <div
      style={{
        background: "#F7F5F0",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* Label */}
        <span
          style={{
            flexShrink: 0,
            fontFamily: "var(--font-dm-sans)",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.3)",
            padding: "0 32px 0 24px",
            whiteSpace: "nowrap",
            borderRight: "1px solid rgba(0,0,0,0.1)",
            marginRight: 32,
          }}
        >
          Proyectos con
        </span>

        {/* Scrolling brands */}
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className="marquee-track" style={{ gap: 0 }}>
            {brands.map((b, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 28,
                  paddingRight: 28,
                  fontFamily: "var(--font-jakarta-sans)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "rgba(0,0,0,0.4)",
                  letterSpacing: "-0.2px",
                  whiteSpace: "nowrap",
                }}
              >
                {b}
                <span style={{ opacity: 0.2, fontSize: 8 }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
