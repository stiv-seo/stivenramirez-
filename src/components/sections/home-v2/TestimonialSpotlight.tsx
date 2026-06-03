export function TestimonialSpotlight() {
  return (
    <section style={{
      background: "#F7F5F0",
      padding: "clamp(80px,10vw,140px) 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Giant quote decoration */}
      <span aria-hidden="true" style={{
        position: "absolute", top: 20, left: "clamp(20px,5vw,60px)",
        fontFamily: "Georgia, serif",
        fontSize: "clamp(120px,18vw,220px)",
        color: "rgba(0,196,180,0.08)",
        lineHeight: 1,
        pointerEvents: "none",
        userSelect: "none",
      }}>
        "
      </span>

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(20px,5vw,60px)", position: "relative", zIndex: 1 }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>

          {/* Quote */}
          <blockquote style={{ margin: 0 }}>
            <p style={{
              fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
              fontSize: "clamp(24px,3.5vw,48px)",
              color: "#0B1829",
              lineHeight: 1.15,
              letterSpacing: "clamp(-0.5px,-0.02em,-2px)",
              marginBottom: 36,
            }}>
              "Logró plasmar la elegancia de nuestra joyería a la perfección. Posicionamos 22 keywords en el Top 3 de Google en 6 meses."
            </p>
            <footer style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "#0B1829",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
                fontSize: 18, color: "#00C4B4",
              }}>
                AS
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jakarta-sans)", fontWeight: 700, fontSize: 15, color: "#0B1829", margin: 0 }}>
                  Andrés Suescun
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "#5E6E82", margin: 0 }}>
                  Évora Eterno · Medellín
                </p>
              </div>
            </footer>
          </blockquote>

          {/* Before/after metric */}
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <div style={{
              background: "#0B1829", borderRadius: 20, padding: "32px 40px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              <p style={{
                fontFamily: "var(--font-dm-sans)", fontSize: 10, fontWeight: 600,
                letterSpacing: "3px", textTransform: "uppercase",
                color: "rgba(0,196,180,0.6)", marginBottom: 20,
              }}>
                Keywords en Top 3
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <p style={{
                    fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
                    fontSize: 40, color: "rgba(255,255,255,0.25)",
                    letterSpacing: "-2px", lineHeight: 1,
                    textDecoration: "line-through",
                  }}>4</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "rgba(255,255,255,0.25)", marginTop: 4 }}>antes</p>
                </div>
                <span style={{ color: "#00C4B4", fontSize: 20 }}>→</span>
                <div style={{ textAlign: "center" }}>
                  <p style={{
                    fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
                    fontSize: 56, color: "#00C4B4",
                    letterSpacing: "-3px", lineHeight: 1,
                    filter: "drop-shadow(0 0 20px rgba(0,196,180,0.35))",
                  }}>22</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "rgba(0,196,180,0.6)", marginTop: 4 }}>después</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
