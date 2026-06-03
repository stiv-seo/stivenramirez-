import { CALENDLY_URL, WA_URL } from "@/lib/constants";

export function CTACommand() {
  return (
    <section style={{
      background: "#F7F5F0",
      padding: "clamp(80px,12vw,160px) 0",
    }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(20px,5vw,60px)" }}>

        {/* Top rule */}
        <div style={{ height: 1, background: "rgba(0,0,0,0.1)", marginBottom: 64 }} aria-hidden="true" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end", flexWrap: "wrap" as const }}>

          <div>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 10, fontWeight: 600,
              letterSpacing: "4px", textTransform: "uppercase",
              color: "#00C4B4", marginBottom: 24,
            }}>
              ¿Empezamos?
            </p>
            <h2 style={{
              fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
              fontSize: "clamp(44px,7.5vw,104px)",
              color: "#0B1829",
              lineHeight: 0.98,
              letterSpacing: "clamp(-2px,-0.03em,-5px)",
              margin: 0,
            }}>
              ¿Listo para
              <br />aparecer
              <br />
              <span style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundImage: "linear-gradient(90deg, #00C4B4 0%, #009E90 100%)",
              }}>
                primero?
              </span>
            </h2>
          </div>

          {/* Action block */}
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 14, paddingBottom: 8 }}>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#0B1829", color: "#F7F5F0",
                fontFamily: "var(--font-jakarta-sans)", fontSize: 14, fontWeight: 700,
                padding: "14px 16px 14px 24px", borderRadius: 99,
                textDecoration: "none", whiteSpace: "nowrap",
                transition: "background-color 180ms ease-out, transform 120ms ease-out",
              }}
            >
              Agendar llamada gratis
              <span style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 16,
              }}>→</span>
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                border: "1.5px solid rgba(0,0,0,0.15)", color: "#0B1829",
                fontFamily: "var(--font-jakarta-sans)", fontSize: 14, fontWeight: 700,
                padding: "13px 24px", borderRadius: 99,
                textDecoration: "none", whiteSpace: "nowrap",
                transition: "all 180ms ease-out",
              }}
            >
              Escribir por WhatsApp
            </a>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, color: "rgba(0,0,0,0.3)", textAlign: "center" }}>
              Respondo en &lt; 24 h · Sin compromiso
            </p>
          </div>

        </div>

        {/* Bottom rule */}
        <div style={{ height: 1, background: "rgba(0,0,0,0.08)", marginTop: 64 }} aria-hidden="true" />

      </div>
    </section>
  );
}
