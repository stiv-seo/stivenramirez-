const stats = [
  { value: "+280%", label: "Tráfico orgánico promedio en 6 meses con SEO" },
  { value: "40+",   label: "Proyectos entregados en Colombia y Latam desde 2020" },
  { value: "3.2×",  label: "ROAS promedio en campañas Google & Meta Ads" },
  { value: "100",   label: "Lighthouse SEO Score en todos los proyectos" },
];

export function StatsFull() {
  return (
    <section style={{
      background: "#0B1829",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {stats.map((s, i) => (
          <div
            key={s.value}
            style={{
              padding: "56px 40px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            <p style={{
              fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
              fontSize: "clamp(36px,4vw,56px)",
              color: "#00C4B4",
              letterSpacing: "clamp(-2px,-0.03em,-3px)",
              lineHeight: 1,
              marginBottom: 14,
            }}>
              {s.value}
            </p>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 13,
              color: "rgba(255,255,255,0.4)", lineHeight: 1.6,
              maxWidth: 180,
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
