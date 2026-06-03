"use client";

import { motion, useReducedMotion } from "framer-motion";

const SPRING = { type: "spring", duration: 0.65, bounce: 0.07 } as const;

const TESTIMONIALS = [
  {
    quote:
      "Logró plasmar la elegancia de nuestra joyería a la perfección. Posicionamos 22 keywords en el Top 3 de Google en 6 meses.",
    author: "Andrés Suescun",
    role: "Fundador · Évora Eterno",
    initials: "AS",
    before: 4,
    after: 22,
    metric: "Keywords en Top 3",
  },
  {
    quote:
      "Stiven entendió nuestro negocio desde el primer día. El tráfico orgánico creció más del 280% en el primer semestre.",
    author: "Catalina Restrepo",
    role: "Directora · Atta Foods",
    initials: "CR",
    before: null,
    after: null,
    metric: null,
  },
];

export function TestimonialSpotlight() {
  const reduce = useReducedMotion();
  const [featured, secondary] = TESTIMONIALS;

  return (
    <section
      style={{
        background: "#0B1829",
        padding: "clamp(80px,10vw,140px) 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,196,180,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 clamp(24px,5vw,60px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={SPRING}
          style={{ marginBottom: "clamp(48px,6vw,72px)" }}
        >
          {/* Giant quote mark */}
          <span
            aria-hidden
            style={{
              display: "block",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(64px,10vw,120px)",
              color: "rgba(0,196,180,0.2)",
              lineHeight: 0.8,
              marginBottom: 16,
              userSelect: "none",
            }}
          >
            "
          </span>

          <blockquote style={{ margin: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontWeight: 700,
                fontSize: "clamp(22px,3.5vw,44px)",
                color: "#F7F5F0",
                lineHeight: 1.18,
                letterSpacing: "-0.025em",
                marginBottom: 32,
                textWrap: "pretty",
              }}
            >
              {featured.quote}
            </p>

            <footer
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24,
              }}
            >
              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(0,196,180,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#00C4B4",
                    flexShrink: 0,
                  }}
                >
                  {featured.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#F7F5F0",
                      margin: 0,
                    }}
                  >
                    {featured.author}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "rgba(247,245,240,0.45)",
                      margin: 0,
                    }}
                  >
                    {featured.role}
                  </p>
                </div>
              </div>

              {/* Before/after metric */}
              {featured.before !== null && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px 24px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-jakarta)",
                        fontWeight: 700,
                        fontSize: 32,
                        color: "rgba(255,255,255,0.18)",
                        letterSpacing: "-2px",
                        lineHeight: 1,
                        textDecoration: "line-through",
                      }}
                    >
                      {featured.before}
                    </p>
                    <p
                      style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "rgba(255,255,255,0.18)", marginTop: 4 }}
                    >
                      antes
                    </p>
                  </div>
                  <span style={{ color: "#00C4B4", fontSize: 18 }} aria-hidden>→</span>
                  <div style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-jakarta)",
                        fontWeight: 800,
                        fontSize: 48,
                        color: "#00C4B4",
                        letterSpacing: "-3px",
                        lineHeight: 1,
                        filter: "drop-shadow(0 0 14px rgba(0,196,180,0.3))",
                      }}
                    >
                      {featured.after}
                    </p>
                    <p
                      style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "rgba(0,196,180,0.6)", marginTop: 4 }}
                    >
                      {featured.metric}
                    </p>
                  </div>
                </div>
              )}
            </footer>
          </blockquote>
        </motion.div>

        {/* Divider */}
        <div
          aria-hidden
          style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "clamp(32px,4vw,48px)" }}
        />

        {/* Secondary testimonial */}
        <motion.blockquote
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...SPRING, delay: 0.1 }}
          style={{ margin: 0 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 600,
              fontSize: "clamp(16px,2vw,22px)",
              color: "rgba(247,245,240,0.65)",
              lineHeight: 1.55,
              marginBottom: 20,
              textWrap: "pretty",
              maxWidth: "60ch",
            }}
          >
            "{secondary.quote}"
          </p>
          <footer style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(0,196,180,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-jakarta)",
                fontWeight: 700,
                fontSize: 12,
                color: "#00C4B4",
                flexShrink: 0,
              }}
            >
              {secondary.initials}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: 13, color: "#F7F5F0", margin: 0 }}>
                {secondary.author}
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(247,245,240,0.35)", margin: 0 }}>
                {secondary.role}
              </p>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
