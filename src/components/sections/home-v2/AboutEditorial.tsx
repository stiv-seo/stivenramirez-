import Image from "next/image";
import Link from "next/link";

export function AboutEditorial() {
  return (
    <section style={{ background: "#0B1829", padding: "clamp(80px,10vw,140px) 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(20px,5vw,60px)" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Photo */}
          <div style={{ position: "relative" }}>
            {/* Decorative teal line */}
            <div style={{
              position: "absolute", left: -24, top: 40, bottom: 40,
              width: 3, background: "#00C4B4", borderRadius: 99,
              opacity: 0.6,
            }} aria-hidden="true" />
            <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
              <Image
                src="/images/stiven-ramirez-consultor-seo-medellin.webp"
                alt="Stiven Ramírez — Consultor SEO en Medellín, Colombia"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(11,24,41,0.7) 100%)",
              }} />
              {/* Floating badge */}
              <div style={{
                position: "absolute", bottom: 24, left: 24, right: 24,
                background: "rgba(11,24,41,0.9)", backdropFilter: "blur(12px)",
                borderRadius: 12, padding: "14px 18px",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <span style={{
                  background: "#00C4B4", color: "#0B1829",
                  borderRadius: 8, padding: "6px 12px",
                  fontFamily: "var(--font-jakarta-sans)", fontWeight: 800, fontSize: 18,
                  letterSpacing: "-1px", lineHeight: 1,
                }}>9+</span>
                <div>
                  <p style={{ fontFamily: "var(--font-jakarta-sans)", fontWeight: 700, fontSize: 13, color: "white", margin: 0 }}>
                    Años de experiencia
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, color: "rgba(255,255,255,0.4)", margin: 0 }}>
                    Medellín · Colombia · Latam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial copy */}
          <div>
            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 10, fontWeight: 600,
              letterSpacing: "4px", textTransform: "uppercase",
              color: "rgba(0,196,180,0.7)", marginBottom: 24,
            }}>
              02 — Sobre mí
            </p>

            <h2 style={{
              fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
              fontSize: "clamp(28px,3.5vw,48px)",
              color: "white", lineHeight: 1.08,
              letterSpacing: "-1.5px", marginBottom: 24,
            }}>
              Soy Stiven Ramírez.<br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>
                Diseñador web<br />y consultor SEO.
              </span>
            </h2>

            <p style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 16,
              color: "rgba(255,255,255,0.55)", lineHeight: 1.8,
              marginBottom: 40,
            }}>
              Con base en Medellín. Más de 9 años construyendo presencias digitales que posicionan en Google y generan ventas reales. Me especializo en WordPress y Shopify con un enfoque que integra diseño, posicionamiento y estrategia en cada proyecto.
            </p>

            {/* Credential grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
              {[
                "Google Analytics 4",
                "Google Search Console",
                "Google Ads Partner",
                "WordPress & Shopify",
              ].map((c) => (
                <div key={c} style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontFamily: "var(--font-dm-sans)", fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                }}>
                  <span style={{ color: "#00C4B4", fontSize: 10 }}>✓</span>
                  {c}
                </div>
              ))}
            </div>

            <Link
              href="/sobre-mi/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-jakarta-sans)", fontSize: 14, fontWeight: 700,
                color: "white", textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                paddingBottom: 2,
                transition: "border-color 180ms ease-out, color 180ms ease-out",
              }}
            >
              Leer más sobre mí →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
