"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SPRING = { type: "spring", duration: 0.65, bounce: 0.06 } as const;

export function AboutEditorial() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{
        background: "#0B1829",
        padding: "clamp(80px,10vw,140px) 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 clamp(24px,5vw,60px)",
          display: "grid",
          gridTemplateColumns: "42% 1fr",
          gap: "clamp(48px,7vw,80px)",
          alignItems: "center",
        }}
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: reduce ? 0 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={SPRING}
          style={{ position: "relative" }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: -16,
              top: "20%",
              bottom: "20%",
              width: 3,
              background:
                "linear-gradient(to bottom, transparent, #00C4B4, transparent)",
              borderRadius: 99,
            }}
          />
          {/* Double-bezel */}
          <div
            style={{
              padding: 5,
              borderRadius: 22,
              background: "rgba(0,196,180,0.05)",
              border: "1px solid rgba(0,196,180,0.14)",
            }}
          >
            <div
              style={{
                borderRadius: "calc(22px - 5px)",
                overflow: "hidden",
                aspectRatio: "4/5",
                position: "relative",
              }}
            >
              <Image
                src="/images/stiven-ramirez-especialista-seo-wordpress-shopify.webp"
                alt="Stiven Ramírez - diseñador web y consultor SEO en Medellín, Colombia"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(11,24,41,0.6) 100%)",
                }}
              />
              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 18,
                  left: 18,
                  right: 18,
                  background: "rgba(11,24,41,0.88)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: 12,
                  padding: "11px 14px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    background: "#00C4B4",
                    color: "#0B1829",
                    borderRadius: 8,
                    padding: "5px 10px",
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: 700,
                    fontSize: 16,
                    letterSpacing: "-1px",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  9+
                </span>
                <div>
                  <p style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600, fontSize: 12, color: "white", margin: 0 }}>
                    Años de experiencia
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "rgba(255,255,255,0.35)", margin: 0 }}>
                    Medellín · Colombia · Latam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 700,
              fontSize: "clamp(26px,3.5vw,46px)",
              color: "white",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              marginBottom: 20,
              textWrap: "balance",
            }}
          >
            Soy Stiven Ramírez.
            <br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>
              Diseñador web y consultor SEO en Medellín.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(14px,1.2vw,16px)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              marginBottom: 32,
              textWrap: "pretty",
            }}
          >
            Más de 9 años construyendo presencias digitales que posicionan en
            Google y generan ventas reales. Me especializo en WordPress y Shopify
            con un enfoque que integra diseño, posicionamiento y estrategia en
            cada proyecto.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
              marginBottom: 32,
            }}
          >
            {[
              "Google Analytics 4",
              "Google Search Console",
              "Google Ads Partner",
              "WordPress y Shopify",
            ].map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.42)",
                }}
              >
                <span style={{ color: "#00C4B4", fontSize: 10, flexShrink: 0 }}>✓</span>
                {c}
              </div>
            ))}
          </div>

          <Link
            href="/sobre-mi/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-jakarta)",
              fontSize: 14,
              fontWeight: 600,
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.18)",
              paddingBottom: 2,
              transition: "border-color 200ms, color 200ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#00C4B4";
              (e.currentTarget as HTMLElement).style.color = "#00C4B4";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.18)";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
          >
            Leer más sobre mí →
          </Link>
        </motion.div>
      </div>

      {/* Mobile collapse */}
      <style>{`
        @media (max-width: 767px) {
          [data-about-inner] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
