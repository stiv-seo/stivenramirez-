"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const rows = [
  {
    num: "01",
    title: "Diseño Web WordPress con SEO",
    price: "Desde $3.500.000",
    tag: "Más popular",
    description: "Sitio profesional construido con arquitectura SEO, velocidad optimizada y on-page completo. URLs semánticas, schema markup, Core Web Vitals en verde. Posiciona desde el día del lanzamiento.",
    href: "/servicios/diseno-web/wordpress/",
    details: ["Arquitectura SEO desde el wireframe", "Core Web Vitals ≥ 90 en mobile", "Schema markup + Search Console", "3–4 semanas de entrega"],
  },
  {
    num: "02",
    title: "Tienda Shopify con SEO",
    price: "Desde $3.000.000",
    tag: "E-commerce",
    description: "E-commerce con SEO de colecciones y productos, pasarelas de pago colombianas (PSE, Nequi, Bancolombia) y optimización de conversión integrada desde el día 1.",
    href: "/servicios/diseno-web/shopify/",
    details: ["SEO de colecciones y productos", "Pasarelas locales: PSE, Nequi, Bancolombia", "Core Web Vitals optimizados", "4–5 semanas de entrega"],
  },
  {
    num: "03",
    title: "SEO Continuo Mensual",
    price: "Desde $1.300.000/mes",
    tag: "Recurrente",
    description: "Posicionamiento orgánico mes a mes con estrategia, contenido y resultados medibles. Para negocios que ya tienen sitio y quieren crecer en Google de forma sostenida.",
    href: "/servicios/seo/",
    details: ["Auditoría técnica mensual", "Estrategia de keywords y contenido", "Link building de calidad", "Reporte mensual de posiciones"],
  },
  {
    num: "04",
    title: "Google, Meta y TikTok Ads",
    price: "Desde $1.500.000/mes",
    tag: "Pauta",
    description: "Campañas pagadas para acelerar resultados mientras el SEO orgánico madura. Sin porcentaje sobre el presupuesto de pauta — tarifa fija por gestión.",
    href: "/servicios/pauta/",
    details: ["Google Search + Display Ads", "Meta Ads (Facebook + Instagram)", "TikTok Ads", "Sin % sobre inversión"],
  },
];

export function Services() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      style={{
        background: "#F7F5F0",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <Container>

        {/* Header */}
        <FadeIn className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[4px] uppercase mb-3"
                style={{ color: "#00C4B4" }}>
                01 — Servicios
              </p>
              <h2
                className="font-jakarta font-extrabold leading-[1.02] tracking-[-2px]"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#0B1829" }}
              >
                Lo que construyo<br />para ti.
              </h2>
            </div>
            <p className="font-sans leading-[1.75] max-w-[300px] lg:text-right"
              style={{ fontSize: "15px", color: "#3D5166" }}>
              SEO integrado desde el primer elemento. No diseño y luego posiciono — lo hago simultáneamente.
            </p>
          </div>
        </FadeIn>

        {/* Row table */}
        <div
          style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
        >
          {rows.map((row) => {
            const isOpen = open === row.num;
            return (
              <FadeIn key={row.num}>
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>

                  {/* Trigger row */}
                  <button
                    onClick={() => setOpen(isOpen ? null : row.num)}
                    aria-expanded={isOpen}
                    className="service-row w-full text-left"
                    style={{ padding: "28px 0", cursor: "pointer" }}
                  >
                    <div className="flex items-center gap-6 lg:gap-10">

                      {/* Number */}
                      <span
                        className="font-jakarta font-bold shrink-0 w-10"
                        style={{
                          fontSize: "12px",
                          letterSpacing: "2px",
                          color: isOpen ? "#00C4B4" : "rgba(0,0,0,0.25)",
                          transition: "color 220ms ease-out",
                        }}
                      >
                        {row.num}
                      </span>

                      {/* Title */}
                      <span
                        className="font-jakarta font-extrabold flex-1 leading-tight"
                        style={{
                          fontSize: "clamp(18px, 2.5vw, 30px)",
                          letterSpacing: "-0.5px",
                          color: isOpen ? "#00C4B4" : "#0B1829",
                          transition: "color 220ms ease-out",
                        }}
                      >
                        {row.title}
                      </span>

                      {/* Tag (hidden on small) */}
                      <span
                        className="hidden md:inline-flex shrink-0 items-center font-sans text-[10px] font-semibold tracking-[2px] uppercase rounded-full px-3 py-1"
                        style={{
                          border: "1px solid rgba(0,0,0,0.1)",
                          color: "rgba(0,0,0,0.35)",
                          background: "transparent",
                        }}
                      >
                        {row.tag}
                      </span>

                      {/* Price */}
                      <span
                        className="font-jakarta font-bold shrink-0 hidden lg:block"
                        style={{
                          fontSize: "clamp(13px, 1vw, 15px)",
                          color: "rgba(0,0,0,0.45)",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        {row.price}
                      </span>

                      {/* Toggle icon */}
                      <span
                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-auto"
                        style={{
                          border: isOpen ? "1px solid #00C4B4" : "1px solid rgba(0,0,0,0.12)",
                          background: isOpen ? "#00C4B4" : "transparent",
                          color: isOpen ? "#0B1829" : "rgba(0,0,0,0.4)",
                          transition: "all 220ms ease-out",
                          fontSize: "16px",
                          transform: isOpen ? "rotate(45deg)" : "none",
                        }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </button>

                  {/* Expandable detail */}
                  <div
                    style={{
                      maxHeight: isOpen ? "320px" : "0",
                      overflow: "hidden",
                      opacity: isOpen ? 1 : 0,
                      transition: "max-height 320ms cubic-bezier(0.32,0.72,0,1), opacity 280ms ease-out",
                    }}
                  >
                    <div
                      className="grid md:grid-cols-[2fr_1fr] gap-8 pb-10 pl-16"
                    >
                      <div>
                        <p className="font-sans leading-[1.8] mb-6"
                          style={{ fontSize: "15px", color: "#3D5166" }}>
                          {row.description}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {row.details.map((d) => (
                            <li key={d}
                              className="font-sans text-[11px] font-semibold tracking-[1px] uppercase rounded-full px-3 py-1.5"
                              style={{
                                background: "rgba(0,196,180,0.08)",
                                color: "#00C4B4",
                                border: "1px solid rgba(0,196,180,0.15)",
                              }}
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-4 justify-start">
                        <p className="font-jakarta font-extrabold"
                          style={{ fontSize: "24px", color: "#0B1829", letterSpacing: "-1px" }}>
                          {row.price}
                        </p>
                        <Link
                          href={row.href}
                          className="inline-flex items-center gap-2 font-jakarta font-bold rounded-full px-5 py-3 text-sm self-start"
                          style={{
                            background: "#0B1829",
                            color: "#F7F5F0",
                            transition: "background-color 180ms ease-out",
                          }}
                        >
                          Ver qué incluye →
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
