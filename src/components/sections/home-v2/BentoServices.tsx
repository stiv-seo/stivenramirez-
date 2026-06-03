"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

/*
  Sticky Stack — 3 cards apiladas al scroll.
  Cada card: position: sticky; top: 0; min-height: 100dvh
  z-index incremental: la siguiente siempre encima.
  useScroll mide el progress de cada wrapper y aplica scale + opacity.
  Resultado visual: la nueva card sube sobre la anterior que se achica.
*/

const SERVICES = [
  {
    num: "01",
    title: "Diseño web con SEO",
    sub: "WordPress y Shopify",
    body: "Sitio profesional construido con arquitectura SEO, velocidad optimizada y schema markup desde el día del lanzamiento. No diseño y luego optimizo — todo ocurre en paralelo.",
    features: [
      "Arquitectura SEO On-Page",
      "Core Web Vitals optimizados",
      "Schema markup integrado",
      "Sitemap y robots.txt configurados",
    ],
    price: "Desde $3.500.000 COP",
    href: "/servicios/diseno-web/seo/",
    bg: "#0B1829",
    accent: "#00C4B4",
    textColor: "#F7F5F0",
    subColor: "rgba(247,245,240,0.42)",
  },
  {
    num: "02",
    title: "SEO continuo mensual",
    sub: "Posicionamiento orgánico",
    body: "Estrategia de contenido, optimización técnica y linkbuilding mes a mes. Reportes con datos reales de Google Search Console. Sin contratos trampa.",
    features: [
      "Auditoría mensual",
      "Contenido optimizado",
      "Link building editorial",
      "Reporte GSC mensual",
    ],
    price: "Desde $1.300.000/mes",
    href: "/servicios/seo/consultoria/",
    bg: "#F7F5F0",
    accent: "#00C4B4",
    textColor: "#0B1829",
    subColor: "#5E6E82",
  },
  {
    num: "03",
    title: "Google y Meta Ads",
    sub: "Pauta digital",
    body: "Campañas de pago diseñadas para acelerar resultados mientras el SEO orgánico madura. Segmentación precisa, creatividades propias y optimización semanal.",
    features: [
      "Configuración de campañas",
      "Creatividades incluidas",
      "Optimización semanal",
      "Reportes de ROAS",
    ],
    price: "Desde $1.500.000/mes",
    href: "/servicios/pauta/",
    bg: "#0F2D52",
    accent: "#F59E0B",
    textColor: "#F7F5F0",
    subColor: "rgba(247,245,240,0.42)",
  },
];

/* ─── Individual sticky card ────────────────────────────────── */
function StickyCard({
  service,
  index,
  total,
}: {
  service: (typeof SERVICES)[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* Scale and opacity animate when the NEXT card slides over this one */
  const scale = useTransform(
    scrollYProgress,
    [0.55, 1],
    isLast ? [1, 1] : reduce ? [1, 1] : [1, 0.93]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.6, 1],
    isLast ? [1, 1] : reduce ? [1, 1] : [1, 0.55]
  );

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        top: 0,
        minHeight: "100dvh",
        zIndex: index + 1,
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          flex: 1,
          background: service.bg,
          display: "flex",
          alignItems: "center",
          transformOrigin: "top center",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "clamp(48px,7vw,96px) clamp(24px,5vw,60px)",
            width: "100%",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px,6vw,100px)",
            alignItems: "center",
          }}
        >
          {/* Left: content */}
          <div>
            {/* Decorative large number */}
            <p
              aria-hidden
              style={{
                fontFamily: "var(--font-jakarta)",
                fontWeight: 800,
                fontSize: "clamp(5rem,10vw,10rem)",
                color:
                  service.bg === "#F7F5F0"
                    ? "rgba(11,24,41,0.06)"
                    : "rgba(247,245,240,0.05)",
                letterSpacing: "-0.06em",
                lineHeight: 1,
                marginBottom: -16,
                userSelect: "none",
              }}
            >
              {service.num}
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: service.accent,
                marginBottom: 12,
              }}
            >
              {service.sub.toUpperCase()}
            </p>

            <h2
              style={{
                fontFamily: "var(--font-jakarta)",
                fontWeight: 700,
                fontSize: "clamp(28px,3.5vw,48px)",
                color: service.textColor,
                letterSpacing: "-0.025em",
                lineHeight: 1.08,
                marginBottom: "clamp(16px,2vw,24px)",
                textWrap: "balance",
              }}
            >
              {service.title}
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(15px,1.3vw,17px)",
                color: service.subColor,
                lineHeight: 1.72,
                marginBottom: "clamp(24px,3vw,36px)",
                textWrap: "pretty",
              }}
            >
              {service.body}
            </p>

            <Link
              href={service.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "13px 13px 13px 22px",
                borderRadius: 99,
                background: service.accent,
                color:
                  service.accent === "#F59E0B" ? "#0B1829" : "#0B1829",
                fontFamily: "var(--font-jakarta)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Ver más
              <span
                aria-hidden
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                }}
              >
                →
              </span>
            </Link>
          </div>

          {/* Right: features + price */}
          <div>
            <div
              style={{
                borderRadius: 16,
                border: `1px solid ${
                  service.bg === "#F7F5F0"
                    ? "rgba(11,24,41,0.08)"
                    : "rgba(255,255,255,0.08)"
                }`,
                overflow: "hidden",
              }}
            >
              {service.features.map((f, i) => (
                <div
                  key={f}
                  style={{
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    borderBottom:
                      i < service.features.length - 1
                        ? `1px solid ${
                            service.bg === "#F7F5F0"
                              ? "rgba(11,24,41,0.06)"
                              : "rgba(255,255,255,0.06)"
                          }`
                        : "none",
                  }}
                >
                  <span
                    style={{ color: service.accent, fontSize: 12, flexShrink: 0 }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: service.subColor,
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontWeight: 700,
                fontSize: "clamp(18px,2vw,26px)",
                color: service.accent,
                marginTop: 24,
                letterSpacing: "-0.02em",
              }}
            >
              {service.price}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Section wrapper ───────────────────────────────────────── */
export function BentoServices() {
  return (
    <section aria-label="Servicios de diseño web y SEO">
      {SERVICES.map((service, i) => (
        <StickyCard
          key={service.num}
          service={service}
          index={i}
          total={SERVICES.length}
        />
      ))}
    </section>
  );
}
