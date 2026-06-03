"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ─── Process section ("Cómo trabajo") ─────────────────────── */

const SPRING = { type: "spring", duration: 0.65, bounce: 0.06 } as const;

const STEPS = [
  {
    num: "01",
    title: "Diagnostico tu sitio",
    body: "Auditoría técnica, análisis de palabras clave y benchmarking frente a tu competencia directa. Entrego un plan claro antes de cobrar un peso.",
    tag: "Gratis y sin compromiso",
  },
  {
    num: "02",
    title: "Diseño y optimizo",
    body: "Construyo el sitio con SEO On-Page integrado desde el primer elemento. Estructura, velocidad y contenido optimizados para Google desde el día 1.",
    tag: "WordPress · Shopify",
  },
  {
    num: "03",
    title: "Mido y mejoro",
    body: "Reportes mensuales reales de Google Search Console. Sin métricas inventadas. Ajuste continuo de estrategia en base a los datos.",
    tag: "Resultados medibles",
  },
];

export function ScrollRevealProof() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{
        background: "#F7F5F0",
        padding: "clamp(80px,10vw,140px) 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 clamp(24px,5vw,60px)",
        }}
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={SPRING}
          style={{
            fontFamily: "var(--font-jakarta)",
            fontWeight: 700,
            fontSize: "clamp(26px,3.8vw,48px)",
            color: "#0B1829",
            letterSpacing: "-0.03em",
            lineHeight: 1.06,
            margin: "0 0 clamp(48px,6vw,80px)",
            textWrap: "balance",
          }}
        >
          Cómo trabajo contigo.
        </motion.h2>

        {/* Steps — stacked rows with large decorative numbers */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: reduce ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...SPRING, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "clamp(24px,3vw,48px)",
                alignItems: "start",
                paddingBlock: "clamp(32px,4vw,52px)",
                borderBottom:
                  i < STEPS.length - 1
                    ? "1px solid rgba(11,24,41,0.08)"
                    : "none",
              }}
            >
              {/* Large decorative number — illustration, not a label */}
              <div style={{ position: "relative" }}>
                <p
                  aria-hidden
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: 800,
                    fontSize: "clamp(4rem,7vw,7.5rem)",
                    color: "rgba(0,196,180,0.15)",
                    letterSpacing: "-0.06em",
                    lineHeight: 1,
                    margin: 0,
                    userSelect: "none",
                  }}
                >
                  {step.num}
                </p>
              </div>

              {/* Content */}
              <div style={{ paddingTop: "0.4em" }}>
                {/* Tag */}
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#00A08F",
                    background: "rgba(0,196,180,0.08)",
                    padding: "4px 10px",
                    borderRadius: 99,
                    marginBottom: 12,
                  }}
                >
                  {step.tag}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: 700,
                    fontSize: "clamp(20px,2.5vw,30px)",
                    color: "#0B1829",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(14px,1.2vw,16px)",
                    color: "#5E6E82",
                    lineHeight: 1.72,
                    maxWidth: "56ch",
                    textWrap: "pretty",
                  }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
