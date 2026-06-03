"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { CALENDLY_URL } from "@/lib/constants";

/* ─── Spring / easing ──────────────────────────────────────── */
const SPRING = { type: "spring", duration: 0.8, bounce: 0.08 } as const;
const SPRING_SLOW = { type: "spring", duration: 1.1, bounce: 0.06 } as const;
const EASE = [0.16, 1, 0.3, 1] as const;

const H1_LINE1 = "Diseño web".split(" ");
const H1_LINE2 = "que posiciona en Google.".split(" ");

/* ─── Magnetic CTA ──────────────────────────────────────────── */
function MagneticBtn({
  href,
  children,
  bg = "#00C4B4",
  color = "#0B1829",
}: {
  href: string;
  children: React.ReactNode;
  bg?: string;
  color?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 140, damping: 14 });
  const sy = useSpring(y, { stiffness: 140, damping: 14 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15 }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 14px 14px 24px",
          borderRadius: 99,
          background: bg,
          color,
          fontFamily: "var(--font-jakarta)",
          fontWeight: 600,
          fontSize: "0.9375rem",
          textDecoration: "none",
          whiteSpace: "nowrap",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {children}
        <span
          aria-hidden
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          →
        </span>
      </span>
    </motion.a>
  );
}

/* ─── Floating project pill ─────────────────────────────────── */
function ProjectPill({
  name,
  tag,
  delay,
  top,
  right,
}: {
  name: string;
  tag: string;
  delay: number;
  top: string;
  right: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, x: reduce ? 0 : 24, y: reduce ? 0 : 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ...SPRING_SLOW, delay }}
      style={{
        position: "absolute",
        top,
        right,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 16px 10px 10px",
        borderRadius: 99,
        background: "rgba(11,24,41,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(0,196,180,0.2)",
      }}
    >
      <span
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "rgba(0,196,180,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
        aria-hidden
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00C4B4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      </span>
      <div>
        <p
          style={{
            fontFamily: "var(--font-jakarta)",
            fontWeight: 600,
            fontSize: 12,
            color: "rgba(247,245,240,0.9)",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10,
            color: "#00C4B4",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          {tag}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export function HeroTeal() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.1 },
    },
  };

  const word = {
    hidden: { opacity: 0, y: reduce ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: SPRING },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: 0.6 } },
  };

  return (
    <section
      style={{
        background: "#0B1829",
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
      aria-label="Hero — Diseño web que posiciona en Google"
    >
      {/* Animated blobs — more visible than before */}
      <div
        aria-hidden
        className="blob-1"
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "clamp(400px, 55vw, 700px)",
          height: "clamp(400px, 55vw, 700px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,196,180,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        className="blob-2"
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "5%",
          width: "clamp(300px, 40vw, 560px)",
          height: "clamp(300px, 40vw, 560px)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,196,180,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="bg-grid-dark absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding:
            "clamp(96px,11vh,140px) clamp(24px,5vw,60px) clamp(64px,8vh,96px)",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* H1 — word-by-word spring stagger */}
        <h1
          style={{
            margin: "0 0 clamp(20px,2.5vw,32px)",
            fontFamily: "var(--font-jakarta)",
            lineHeight: 0.96,
            letterSpacing: "-0.04em",
            textWrap: "balance",
          }}
        >
          {/* Line 1: "Diseño web" — massive white */}
          <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ display: "block", marginBottom: "0.12em" }}
            aria-label="Diseño web"
          >
            {H1_LINE1.map((w) => (
              <motion.span
                key={w}
                variants={word}
                style={{
                  display: "inline-block",
                  marginRight: "0.25em",
                  fontSize: "clamp(3.8rem,9vw,9.5rem)",
                  fontWeight: 800,
                  color: "#F7F5F0",
                }}
              >
                {w}
              </motion.span>
            ))}
          </motion.span>

          {/* Line 2: "que posiciona en Google." — teal, smaller contrast */}
          <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ display: "block" }}
            aria-label="que posiciona en Google."
          >
            {H1_LINE2.map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                variants={word}
                style={{
                  display: "inline-block",
                  marginRight: "0.22em",
                  fontSize: "clamp(2rem,4.5vw,4.75rem)",
                  fontWeight: 700,
                  color: "#00C4B4",
                }}
              >
                {w}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem,1.4vw,1.125rem)",
            lineHeight: 1.72,
            color: "rgba(247,245,240,0.52)",
            maxWidth: "44ch",
            margin: "0 0 clamp(32px,3.5vw,48px)",
            textWrap: "pretty",
          }}
        >
          WordPress y Shopify con SEO desde el primer elemento. Un solo
          profesional que diseña, posiciona y mide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.75 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px,2vw,20px)",
            flexWrap: "wrap",
          }}
        >
          <MagneticBtn href={CALENDLY_URL}>Agendar llamada gratis</MagneticBtn>

          <Link
            href="#trabajo"
            style={{
              color: "rgba(247,245,240,0.4)",
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.9375rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 200ms",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "rgba(247,245,240,0.85)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "rgba(247,245,240,0.4)")
            }
          >
            Ver proyectos ↓
          </Link>
        </motion.div>
      </div>

      {/* Floating project pills — bottom right */}
      <div
        aria-hidden
        style={{ position: "absolute", right: "5%", bottom: "8%", display: "flex", flexDirection: "column", gap: 10 }}
      >
        <ProjectPill
          name="Évora Eterno"
          tag="Shopify + SEO · +22 keywords"
          delay={1.1}
          top="auto"
          right="auto"
        />
        <ProjectPill
          name="Renovista"
          tag="WordPress + SEO · +180% tráfico"
          delay={1.3}
          top="auto"
          right="auto"
        />
      </div>

      {/* Mobile: hide pills */}
      <style>{`
        @media (max-width: 767px) {
          [data-hero-pills] { display: none !important; }
        }
      `}</style>
    </section>
  );
}
