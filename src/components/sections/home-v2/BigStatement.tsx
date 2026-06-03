import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

export function BigStatement() {
  return (
    <section style={{
      background: "#07090f",
      padding: "clamp(80px,10vw,140px) 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Giant decorative text */}
      <span aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
        fontSize: "clamp(120px, 20vw, 280px)",
        color: "rgba(255,255,255,0.018)",
        letterSpacing: "-8px",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        userSelect: "none",
        lineHeight: 1,
      }}>
        SEO
      </span>

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(20px,5vw,60px)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end" }}>

          <div>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 10, fontWeight: 600,
              letterSpacing: "4px", textTransform: "uppercase",
              color: "rgba(0,196,180,0.6)", marginBottom: 32,
            }}>
              La realidad
            </p>
            <h2 style={{
              fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
              fontSize: "clamp(32px,5.5vw,72px)",
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "clamp(-1px,-0.02em,-3px)",
              margin: 0,
            }}>
              Cada mes sin SEO es<br />
              tráfico que le{" "}
              <span style={{ color: "#00C4B4" }}>regalas</span><br />
              a tu competencia.
            </h2>
          </div>

          {/* Right: action */}
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end", paddingBottom: 6 }}>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#00C4B4", color: "#0B1829",
                fontFamily: "var(--font-jakarta-sans)", fontSize: 14, fontWeight: 700,
                padding: "13px 24px 13px 24px", borderRadius: 99,
                textDecoration: "none", whiteSpace: "nowrap",
                transition: "background-color 180ms ease-out",
              }}
            >
              Diagnóstico gratis →
            </a>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 12,
              color: "rgba(255,255,255,0.2)", textAlign: "right",
            }}>
              Sin compromiso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
