"use client";

import {
  motion,
  useReducedMotion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SPRING = { type: "spring", duration: 0.65, bounce: 0.06 } as const;

const projects = [
  {
    id: "evora",
    name: "Évora Eterno",
    category: "Joyería · Shopify + SEO",
    result: "+22 keywords en Top 3 de Google",
    image: "https://picsum.photos/seed/luxury-jewelry-colombia/1200/900",
    href: "/portafolio/",
    accent: "#00C4B4",
  },
  {
    id: "renovista",
    name: "Renovista",
    category: "Inmobiliaria · WordPress + SEO",
    result: "+180% tráfico orgánico en 5 meses",
    image: "https://picsum.photos/seed/modern-real-estate-medellin/800/600",
    href: "/portafolio/",
    accent: "#00C4B4",
  },
  {
    id: "atta",
    name: "Atta Foods",
    category: "Alimentos · WordPress + SEO",
    result: "+320% tráfico orgánico en 6 meses",
    image: "https://picsum.photos/seed/organic-food-fresh-colombia/800/600",
    href: "/portafolio/",
    accent: "#00C4B4",
  },
];

/* ─── Spotlight border card ──────────────────────────────────── */
function SpotlightCard({
  project,
  large = false,
  delay = 0,
}: {
  project: (typeof projects)[0];
  large?: boolean;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  /* Spotlight effect — cursor position relative to card */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const spotY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const spotlight = useMotionTemplate`radial-gradient(
    280px circle at ${spotX}px ${spotY}px,
    rgba(0,196,180,0.13),
    transparent 80%
  )`;

  /* 3D tilt — only on large card */
  const rotateX = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    if (large && !reduce) {
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      rotateX.set(((e.clientY - cy) / rect.height) * -6);
      rotateY.set(((e.clientX - cx) / rect.width) * 6);
    }
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    if (large) {
      rotateX.set(0);
      rotateY.set(0);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...SPRING, delay }}
      style={{ height: "100%" }}
    >
      <Link href={project.href} style={{ display: "block", height: "100%", textDecoration: "none" }}>
        {/* Outer shell — spotlight glow layer */}
        <motion.div
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{
            height: "100%",
            borderRadius: 20,
            padding: 1,
            background: spotlight,
            position: "relative",
          }}
        >
          {/* Border ring */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 20,
              border: "1px solid rgba(11,24,41,0.1)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Inner card */}
          <motion.div
            style={{
              height: "100%",
              borderRadius: "calc(20px - 1px)",
              overflow: "hidden",
              background: "white",
              display: "flex",
              flexDirection: "column",
              rotateX: large ? rotateX : 0,
              rotateY: large ? rotateY : 0,
              transformStyle: "preserve-3d",
              transformPerspective: "800px",
            }}
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                flex: large ? "0 0 60%" : "0 0 55%",
                overflow: "hidden",
              }}
            >
              <Image
                src={project.image}
                alt={`Proyecto ${project.name} — diseño web con SEO`}
                fill
                style={{ objectFit: "cover", transition: "transform 500ms cubic-bezier(0.16,1,0.3,1)" }}
                sizes={large ? "(max-width: 768px) 100vw, 55vw" : "(max-width: 768px) 100vw, 35vw"}
                className="project-img"
              />
              {/* Overlay gradient */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 40%, rgba(11,24,41,0.08) 100%)",
                }}
              />
            </div>

            {/* Info */}
            <div
              style={{
                flex: 1,
                padding: large ? "24px 28px 28px" : "20px 22px 22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#5E6E82",
                    marginBottom: 6,
                  }}
                >
                  {project.category}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontWeight: 700,
                    fontSize: large ? 22 : 17,
                    color: "#0B1829",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                    margin: 0,
                  }}
                >
                  {project.name}
                </h3>
              </div>

              {/* Result chip */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 16,
                  padding: "6px 12px",
                  borderRadius: 99,
                  background: "rgba(0,196,180,0.08)",
                  alignSelf: "flex-start",
                }}
              >
                <span
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#00C4B4", flexShrink: 0 }}
                  aria-hidden
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#00A08F",
                    whiteSpace: "nowrap",
                  }}
                >
                  {project.result}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Link>

      {/* Image zoom on hover — via CSS */}
      <style>{`
        a:hover .project-img { transform: scale(1.04); }
      `}</style>
    </motion.div>
  );
}

/* ─── Section ──────────────────────────────────────────────── */
export function WorkPreview() {
  const reduce = useReducedMotion();

  return (
    <section
      id="trabajo"
      style={{
        background: "#F7F5F0",
        padding: "clamp(80px,10vw,140px) 0",
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
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={SPRING}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 700,
              fontSize: "clamp(26px,3.8vw,48px)",
              color: "#0B1829",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Proyectos reales.
            <br />
            <span style={{ color: "#5E6E82", fontWeight: 500 }}>
              Resultados medibles.
            </span>
          </h2>

          <Link
            href="/portafolio/"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 14,
              fontWeight: 600,
              color: "#0B1829",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              borderBottom: "1px solid rgba(11,24,41,0.2)",
              paddingBottom: 2,
              whiteSpace: "nowrap",
              transition: "border-color 200ms, color 200ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#00C4B4";
              (e.currentTarget as HTMLElement).style.color = "#00C4B4";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(11,24,41,0.2)";
              (e.currentTarget as HTMLElement).style.color = "#0B1829";
            }}
          >
            Ver portafolio completo →
          </Link>
        </motion.div>

        {/* Grid: 1 large + 2 stacked (12-col math: 7+5=12) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto",
            gap: 16,
          }}
        >
          {/* Large card — col 1-7, rows 1-2 */}
          <div
            style={{
              gridColumn: "1 / 8",
              gridRow: "1 / 3",
              minHeight: 520,
            }}
          >
            <SpotlightCard project={projects[0]} large delay={0} />
          </div>

          {/* Card 2 — col 8-12, row 1 */}
          <div style={{ gridColumn: "8 / 13", gridRow: "1 / 2", minHeight: 248 }}>
            <SpotlightCard project={projects[1]} delay={0.08} />
          </div>

          {/* Card 3 — col 8-12, row 2 */}
          <div style={{ gridColumn: "8 / 13", gridRow: "2 / 3", minHeight: 248 }}>
            <SpotlightCard project={projects[2]} delay={0.14} />
          </div>
        </div>

        {/* Mobile: single column */}
        <style>{`
          @media (max-width: 767px) {
            [data-work-grid] {
              grid-template-columns: 1fr !important;
            }
            [data-work-grid] > * {
              grid-column: 1 !important;
              grid-row: auto !important;
              min-height: 320px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
