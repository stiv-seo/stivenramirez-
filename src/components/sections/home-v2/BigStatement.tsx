"use client";

import {
  motion,
  useReducedMotion,
  useInView,
  useMotionValue,
  animate,
  useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

const SPRING = { type: "spring", duration: 0.7, bounce: 0.06 } as const;

/* ─── Animated counter ──────────────────────────────────────── */
function CountUp({
  to,
  suffix = "",
  prefix = "",
  inView,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}) {
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, to, {
      duration: reduce ? 0 : 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return ctrl.stop;
  }, [inView, to, count, reduce]);

  return (
    <>
      {prefix}
      <motion.span style={{ fontVariantNumeric: "tabular-nums" }}>
        {rounded}
      </motion.span>
      {suffix}
    </>
  );
}

/* ─── Side metrics ──────────────────────────────────────────── */
const SIDE_METRICS = [
  { value: 40, suffix: "+", label: "Proyectos entregados", sub: "Colombia · Latam" },
  { value: 32, suffix: "×", label: "ROAS promedio", sub: "Google y Meta Ads" },
  { value: 100, suffix: "", label: "SEO Score Lighthouse", sub: "Todos los proyectos" },
];

export function BigStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <section
      style={{
        background: "#00C4B4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grain texture overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "clamp(80px,11vw,160px) clamp(24px,5vw,60px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main proof: huge number + statement */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "clamp(32px,4vw,64px)",
            alignItems: "center",
            marginBottom: "clamp(48px,6vw,80px)",
          }}
        >
          {/* Big number */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontWeight: 800,
                fontSize: "clamp(5rem,13vw,14rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.05em",
                color: "#0B1829",
                margin: 0,
                fontVariantNumeric: "tabular-nums",
              }}
              aria-label="Más del 280 por ciento de tráfico orgánico promedio"
            >
              +<CountUp to={280} suffix="%" inView={inView} />
            </p>
          </div>

          {/* Statement + CTA */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...SPRING, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-jakarta)",
                fontWeight: 700,
                fontSize: "clamp(22px,3vw,38px)",
                color: "#0B1829",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                margin: "0 0 clamp(20px,2.5vw,32px)",
                textWrap: "balance",
              }}
            >
              de tráfico orgánico promedio.
              <br />
              En 6 meses con SEO.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...SPRING, delay: 0.32 }}
            >
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <motion.span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "13px 13px 13px 22px",
                    borderRadius: 99,
                    background: "#0B1829",
                    color: "#F7F5F0",
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                >
                  Diagnóstico gratuito
                  <span
                    aria-hidden
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                    }}
                  >
                    →
                  </span>
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden
          style={{ height: 1, background: "rgba(11,24,41,0.12)", marginBottom: "clamp(40px,5vw,64px)" }}
        />

        {/* Side metrics row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
          }}
        >
          {SIDE_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...SPRING, delay: 0.1 + i * 0.09 }}
              style={{
                padding:
                  "clamp(16px,2.5vw,32px) clamp(16px,2vw,28px)",
                borderRight:
                  i < SIDE_METRICS.length - 1
                    ? "1px solid rgba(11,24,41,0.12)"
                    : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem,4vw,4rem)",
                  color: "#0B1829",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: 8,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <CountUp to={m.value} suffix={m.suffix} inView={inView} />
              </p>
              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#0B1829",
                  marginBottom: 2,
                }}
              >
                {m.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  color: "rgba(11,24,41,0.5)",
                }}
              >
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: metrics 1-col */}
        <style>{`
          @media (max-width: 767px) {
            [data-metrics-row] { grid-template-columns: 1fr !important; }
            [data-metrics-row] > * { border-right: none !important; border-bottom: 1px solid rgba(11,24,41,0.12); }
            [data-bignum-grid] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
