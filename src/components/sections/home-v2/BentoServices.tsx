"use client";
import Link from "next/link";

/*
  Gapless bento — 12-col grid math:
  Card A: col-span-7 row-span-2 (featured dark)
  Card B: col-span-5 row-span-1 (light)
  Card C: col-span-5 row-span-1 (light)
  = 7+5 = 12 ✓ | Row 1: A+B | Row 2: A+C → zero gaps
  grid-auto-flow: dense applied
*/

export function BentoServices() {
  return (
    <section style={{ background: "#F7F5F0", padding: "clamp(80px,10vw,140px) 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(24px,5vw,60px)" }}>

        {/* Header — NO section number */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
          <h2 style={{
            fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
            fontSize: "clamp(28px,4vw,52px)",
            color: "#0B1829", lineHeight: 1.06,
            letterSpacing: "-0.03em", margin: 0,
            textWrap: "balance",
          }}>
            Lo que construyo para ti.
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans)", fontSize: 15,
            color: "#5E6E82", lineHeight: 1.7,
            maxWidth: "38ch", margin: 0, textAlign: "right",
          }}>
            SEO integrado desde el primer elemento — no diseño y luego posiciono.
          </p>
        </div>

        {/* Bento grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoFlow: "dense",
          gap: 16,
        }}>

          {/* A: Featured dark — col 1-7, rows 1-2 */}
          <Link href="/servicios/diseno-web/wordpress/" style={{
            gridColumn: "1 / 8",
            gridRow: "1 / 3",
            background: "#0B1829",
            borderRadius: 20,
            padding: "clamp(28px,3vw,44px)",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            textDecoration: "none",
            minHeight: 380,
            position: "relative", overflow: "hidden",
            transition: "transform 300ms cubic-bezier(0.16,1,0.3,1)",
          }}
          >
            {/* Ambient blob */}
            <div aria-hidden="true" style={{
              position: "absolute", top: "-20%", right: "-10%",
              width: "60%", height: "60%", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,196,180,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <span style={{
              position: "absolute", top: 28, right: 28,
              background: "#00C4B4", color: "#040C15",
              fontFamily: "var(--font-dm-sans)", fontSize: 10, fontWeight: 700,
              letterSpacing: "2px", textTransform: "uppercase",
              padding: "5px 12px", borderRadius: 99,
            }}>Más popular</span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{
                fontFamily: "var(--font-dm-sans)", fontSize: 12,
                color: "rgba(0,196,180,0.7)", letterSpacing: "1px",
                textTransform: "uppercase", marginBottom: 12,
              }}>Diseño Web</p>
              <h3 style={{
                fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
                fontSize: "clamp(22px,2.5vw,34px)",
                color: "white", lineHeight: 1.1,
                letterSpacing: "-0.02em", marginBottom: 16,
              }}>
                WordPress & Shopify<br />con SEO integrado
              </h3>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: "40ch", marginBottom: 28 }}>
                Sitio profesional con arquitectura SEO, velocidad optimizada y schema markup desde el día del lanzamiento.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-jakarta-sans)", fontWeight: 700, fontSize: 18, color: "#00C4B4" }}>
                  Desde $3.500.000 COP
                </span>
                <span style={{
                  width: 40, height: 40, borderRadius: "50%",
                  border: "1px solid rgba(0,196,180,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#00C4B4", fontSize: 18,
                }}>→</span>
              </div>
            </div>
          </Link>

          {/* B: SEO Mensual — col 8-12, row 1 */}
          <Link href="/servicios/seo/" style={{
            gridColumn: "8 / 13",
            gridRow: "1 / 2",
            background: "white",
            borderRadius: 20,
            padding: "clamp(24px,2.5vw,36px)",
            display: "flex", flexDirection: "column",
            textDecoration: "none",
            border: "1px solid rgba(0,0,0,0.07)",
            transition: "border-color 250ms ease-out, transform 300ms cubic-bezier(0.16,1,0.3,1)",
          }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(0,196,180,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C4B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-jakarta-sans)", fontWeight: 700, fontSize: 18, color: "#0B1829", marginBottom: 8 }}>SEO Continuo Mensual</h3>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "#5E6E82", lineHeight: 1.65, flex: 1 }}>Posicionamiento orgánico mes a mes con estrategia, contenido y resultados medibles.</p>
            <p style={{ fontFamily: "var(--font-jakarta-sans)", fontWeight: 700, fontSize: 15, color: "#0B1829", marginTop: 20 }}>Desde $1.300.000/mes</p>
          </Link>

          {/* C: Ads — col 8-12, row 2 */}
          <Link href="/servicios/pauta/" style={{
            gridColumn: "8 / 13",
            gridRow: "2 / 3",
            background: "#0B1829",
            borderRadius: 20,
            padding: "clamp(24px,2.5vw,36px)",
            display: "flex", flexDirection: "column",
            textDecoration: "none",
            transition: "transform 300ms cubic-bezier(0.16,1,0.3,1)",
          }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-jakarta-sans)", fontWeight: 700, fontSize: 18, color: "white", marginBottom: 8 }}>Google, Meta & TikTok Ads</h3>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, flex: 1 }}>Pauta digital para acelerar resultados mientras el SEO orgánico madura.</p>
            <p style={{ fontFamily: "var(--font-jakarta-sans)", fontWeight: 700, fontSize: 15, color: "#F59E0B", marginTop: 20 }}>Desde $1.500.000/mes</p>
          </Link>

        </div>

      </div>
    </section>
  );
}
