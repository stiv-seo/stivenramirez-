"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

/*
  Python RNG seed: "seo colombia medellin".length % 3 = 0
  → Hero: Cinematic Center / Teal drench
  → H1 max-w-screen-xl, clamp(3rem,6vw,5.5rem), 2 lines guaranteed
  No meta-labels. No stats in hero. No pill badges.
*/

export function HeroTeal() {
  const videoRef = useRef<HTMLDivElement>(null);

  /* Parallax on scroll — purpose: depth */
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        background: "#00C4B4",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Noise grain on teal */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        opacity: 0.06,
        pointerEvents: "none",
      }} />

      {/* Parallax dark shape */}
      <div
        ref={videoRef}
        aria-hidden="true"
        style={{
          position: "absolute", bottom: "-20%", right: "-5%",
          width: "55vw", height: "80vh",
          background: "rgba(0,0,0,0.08)",
          borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "0 clamp(24px,5vw,80px)",
        paddingBottom: "clamp(60px,8vw,100px)",
        position: "relative",
        zIndex: 1,
        width: "100%",
      }}>

        {/* H1 — 2 lines max, ultra-wide container */}
        <h1 style={{
          fontFamily: "var(--font-jakarta-sans)",
          fontWeight: 800,
          fontSize: "clamp(3rem, 6vw, 5.5rem)",
          lineHeight: 1.06,
          letterSpacing: "-0.03em",
          color: "#040C15",
          marginBottom: "clamp(28px,3vw,44px)",
          maxWidth: "100%",
          textWrap: "balance",
        }}>
          Diseño webs que posicionan en Google.<br />
          <span style={{ opacity: 0.55 }}>Sin agencia. Con resultados.</span>
        </h1>

        {/* Subtitle — max 65ch */}
        <p style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "clamp(16px, 1.2vw, 20px)",
          lineHeight: 1.7,
          color: "rgba(4,12,21,0.65)",
          maxWidth: "52ch",
          marginBottom: "clamp(36px,4vw,56px)",
        }}>
          WordPress y Shopify con SEO integrado desde el primer elemento. Un solo profesional — diseño, posicionamiento y estrategia.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#040C15", color: "#00C4B4",
              fontFamily: "var(--font-jakarta-sans)", fontSize: 15, fontWeight: 700,
              padding: "14px 18px 14px 26px", borderRadius: 99,
              textDecoration: "none",
              transition: "transform 120ms ease-out, box-shadow 200ms ease-out",
              boxShadow: "0 4px 20px rgba(4,12,21,0.25)",
            }}
          >
            Agendar llamada gratis
            <span style={{
              width: 34, height: 34, borderRadius: "50%",
              background: "rgba(0,196,180,0.15)",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontSize: 18,
            }}>→</span>
          </a>
          <Link
            href="/servicios/"
            style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600,
              color: "rgba(4,12,21,0.55)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(4,12,21,0.25)",
              paddingBottom: 2,
              transition: "color 180ms ease-out",
            }}
          >
            Ver servicios
          </Link>
        </div>

      </div>

      {/* Bottom: credential strip on dark band */}
      <div style={{
        background: "#040C15",
        padding: "20px clamp(24px,5vw,80px)",
        display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap",
        position: "relative", zIndex: 1,
      }}>
        {[
          { v: "9+",    l: "años de experiencia" },
          { v: "40+",   l: "proyectos entregados" },
          { v: "+280%", l: "tráfico promedio en 6 meses" },
          { v: "100",   l: "SEO Score Lighthouse" },
        ].map(({ v, l }) => (
          <div key={l} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{
              fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
              fontSize: "clamp(20px,2vw,28px)",
              color: "#00C4B4", letterSpacing: "-0.5px",
            }}>{v}</span>
            <span style={{
              fontFamily: "var(--font-dm-sans)", fontSize: 12,
              color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap",
            }}>{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
