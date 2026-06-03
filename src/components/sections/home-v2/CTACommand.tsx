"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { CALENDLY_URL, WA_URL } from "@/lib/constants";

const SPRING_FAST = { type: "spring", duration: 0.6, bounce: 0.08 } as const;
const EASE = [0.16, 1, 0.3, 1] as const;

/* ─── Magnetic wrapper ──────────────────────────────────────── */
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 130, damping: 14 });
  const sy = useSpring(y, { stiffness: 130, damping: 14 });
  const reduce = useReducedMotion();

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section ──────────────────────────────────────────────── */
export function CTACommand() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{
        background: "#F7F5F0",
        padding: "clamp(80px,12vw,160px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Teal ambient */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -300,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,196,180,0.1) 0%, transparent 65%)",
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
          textAlign: "center",
        }}
      >
        {/* Headline — centered for the final call */}
        <motion.h2
          initial={{ opacity: 0, y: reduce ? 0 : 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={SPRING_FAST}
          style={{
            fontFamily: "var(--font-jakarta)",
            fontWeight: 700,
            fontSize: "clamp(3rem,8vw,8rem)",
            color: "#0B1829",
            letterSpacing: "-0.04em",
            lineHeight: 0.96,
            margin: "0 0 clamp(32px,4vw,52px)",
            textWrap: "balance",
          }}
        >
          ¿Listo para
          <br />
          <span style={{ color: "#00C4B4" }}>aparecer primero?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...SPRING_FAST, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem,1.3vw,1.125rem)",
            color: "#5E6E82",
            lineHeight: 1.7,
            maxWidth: "44ch",
            margin: "0 auto clamp(40px,5vw,64px)",
            textWrap: "pretty",
          }}
        >
          Agenda una llamada de 30 minutos sin costo. Analizo tu sitio,
          te cuento qué está fallando y propongo un plan claro.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...SPRING_FAST, delay: 0.18 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(12px,2vw,20px)",
            flexWrap: "wrap",
          }}
        >
          {/* Primary — magnetic */}
          <Magnetic>
            <a
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
                  padding: "15px 15px 15px 26px",
                  borderRadius: 99,
                  background: "#0B1829",
                  color: "#F7F5F0",
                  fontFamily: "var(--font-jakarta)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  boxShadow: "0 4px 24px rgba(11,24,41,0.16)",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: EASE }}
              >
                Agendar llamada gratis
                <span
                  aria-hidden
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                  }}
                >
                  →
                </span>
              </motion.span>
            </a>
          </Magnetic>

          {/* Secondary */}
          <Link
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              border: "1.5px solid rgba(11,24,41,0.15)",
              color: "#0B1829",
              fontFamily: "var(--font-jakarta)",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "14px 26px",
              borderRadius: 99,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "border-color 200ms, background-color 200ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#00C4B4";
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgba(0,196,180,0.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(11,24,41,0.15)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            WhatsApp →
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...SPRING_FAST, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "rgba(11,24,41,0.28)",
            marginTop: 20,
          }}
        >
          Respondo en menos de 24 h · Sin compromiso
        </motion.p>
      </div>
    </section>
  );
}
