"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CALENDLY_URL, WA_URL } from "@/lib/constants";

/* ── Animated GSC chart ─────────────────────────────────────────── */

const RAW = [3, 5, 4, 8, 11, 14, 18, 24, 32, 41, 58, 74, 91];

function GscDashboard({ visible }: { visible: boolean }) {
  const W = 340, H = 100, PX = 6, PY = 8;
  const max = Math.max(...RAW);
  const pts = RAW.map((v, i) => [
    PX + (i / (RAW.length - 1)) * (W - PX * 2),
    H - PY - (v / max) * (H - PY * 2 - 4),
  ] as [number, number]);

  const linePath = `M ${pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")}`;
  const areaPath = `M ${pts[0][0]},${H} ${pts.map(([x, y]) => `L ${x.toFixed(1)},${y.toFixed(1)}`).join(" ")} L ${pts[pts.length - 1][0]},${H} Z`;

  const keywords = [
    { q: "consultor seo colombia",     pos: "3" },
    { q: "seo shopify colombia",        pos: "5" },
    { q: "diseño web medellin",         pos: "4" },
    { q: "seo local medellin",          pos: "7" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(145deg, #0e1520 0%, #0a1018 100%)",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05) inset",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
        transition: "opacity 0.8s ease-out 0.3s, transform 0.8s cubic-bezier(0.32,0.72,0,1) 0.3s",
      }}
    >
      {/* Browser chrome */}
      <div style={{
        display: "flex", alignItems: "center", gap: "8px",
        padding: "12px 16px",
        background: "rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        {["#FF5F57","#FFBD2E","#28C840"].map((c, i) => (
          <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
        ))}
        <span style={{
          flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: 6,
          padding: "4px 10px", fontSize: 11, color: "rgba(255,255,255,0.35)",
          fontFamily: "monospace", textAlign: "center",
        }}>
          search.google.com/search-console
        </span>
      </div>

      <div style={{ padding: "20px 20px 16px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>
              Rendimiento en Búsqueda
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 32, fontWeight: 800, color: "#00C4B4", letterSpacing: "-2px", fontFamily: "var(--font-jakarta)" }}>
                +280%
              </span>
              <span style={{ fontSize: 11, color: "#00C4B4", opacity: 0.8 }}>↑ tráfico</span>
            </div>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", marginTop: 2 }}>
              últimos 6 meses · proyecto real
            </p>
          </div>
          {/* Mini stat pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
            {[["Clics","8.4K"],["Impres.","142K"],["CTR","5.9%"]].map(([l,v]) => (
              <div key={l} style={{
                display: "flex", gap: 6, alignItems: "center",
                background: "rgba(255,255,255,0.05)", borderRadius: 6,
                padding: "3px 8px", border: "1px solid rgba(255,255,255,0.07)",
              }}>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "1px" }}>{l}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.75)", fontFamily: "monospace" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SVG chart */}
        <div style={{ position: "relative", marginBottom: 16, borderRadius: 10, overflow: "hidden", background: "rgba(0,196,180,0.03)" }}>
          <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ display: "block" }}>
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00C4B4" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#00C4B4" stopOpacity="0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Grid lines */}
            {[0.25, 0.5, 0.75].map((v) => (
              <line key={v}
                x1={PX} y1={PY + v * (H - PY * 2)}
                x2={W - PX} y2={PY + v * (H - PY * 2)}
                stroke="rgba(255,255,255,0.05)" strokeWidth="1"
              />
            ))}
            {/* Area */}
            <path d={areaPath} fill="url(#chartFill)" />
            {/* Line — draws itself */}
            <path
              d={linePath}
              fill="none"
              stroke="#00C4B4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              style={{
                strokeDasharray: 900,
                strokeDashoffset: visible ? 0 : 900,
                transition: visible ? "stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1) 0.6s" : "none",
              }}
            />
            {/* End dot */}
            <circle
              cx={pts[pts.length - 1][0]}
              cy={pts[pts.length - 1][1]}
              r="4"
              fill="#00C4B4"
              style={{
                opacity: visible ? 1 : 0,
                filter: "drop-shadow(0 0 6px rgba(0,196,180,0.8))",
                transition: "opacity 0.3s ease-out 2.2s",
              }}
            />
          </svg>
        </div>

        {/* Keyword table */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>Consulta</span>
            <span style={{ fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>Pos.</span>
          </div>
          {keywords.map((kw, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "5px 0",
              borderBottom: i < keywords.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              opacity: visible ? 1 : 0,
              transition: `opacity 0.4s ease-out ${0.8 + i * 0.1}s`,
            }}>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", fontFamily: "monospace" }}>
                {kw.q}
              </span>
              <span style={{
                fontSize: 11, fontWeight: 700, fontFamily: "monospace",
                color: parseInt(kw.pos) <= 3 ? "#00C4B4" : parseInt(kw.pos) <= 6 ? "#F59E0B" : "rgba(255,255,255,0.5)",
                background: "rgba(255,255,255,0.05)", borderRadius: 4, padding: "2px 6px",
              }}>
                #{kw.pos}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────────── */

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0B1829 0%, #071020 60%, #060d18 100%)",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "96px",
        paddingBottom: "80px",
      }}
    >
      {/* Ambient orb */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "10%", right: "15%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,196,180,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Bottom orb */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "-100px", left: "10%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,100,200,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <Container>
        <div
          className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center"
        >
          {/* ── Left: Copy ──────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div
              className="hero-anim-up inline-flex items-center gap-2.5 rounded-full border border-teal/20 bg-teal/[0.07] px-4 py-2 mb-8"
              style={{ animationDelay: "0s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal" aria-hidden="true" />
              <span className="font-sans text-[11px] font-semibold tracking-[3px] uppercase text-teal">
                Consultor SEO · Medellín
              </span>
            </div>

            {/* H1 */}
            <h1
              className="hero-anim-up font-jakarta font-extrabold text-white leading-[1.04] mb-7"
              style={{
                fontSize: "clamp(40px, 5vw, 68px)",
                letterSpacing: "clamp(-1.5px, -0.03em, -3px)",
                animationDelay: "0.08s",
              }}
            >
              Consultor SEO<br />
              <span style={{ color: "rgba(255,255,255,0.45)" }}>&</span>{" "}
              Diseñador Web<br />
              en Medellín.
            </h1>

            {/* Divider */}
            <div
              className="hero-anim-fade mb-7"
              style={{
                height: "1px",
                width: "64px",
                background: "#00C4B4",
                opacity: 0.5,
                animationDelay: "0.2s",
              }}
              aria-hidden="true"
            />

            {/* Subtitle */}
            <p
              className="hero-anim-up font-sans leading-[1.8] mb-10 max-w-[400px]"
              style={{
                fontSize: "clamp(15px, 1.1vw, 17px)",
                color: "rgba(148,163,184,0.85)",
                animationDelay: "0.22s",
              }}
            >
              Sitios WordPress y Shopify con SEO integrado desde el primer elemento. Sin agencia, sin intermediarios — resultados medibles desde el día 1.
            </p>

            {/* CTAs */}
            <div
              className="hero-anim-up flex flex-wrap gap-3 mb-10"
              style={{ animationDelay: "0.32s" }}
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-teal hover:bg-teal-bright text-midnight font-jakarta font-bold pl-6 pr-1.5 py-1.5 active:scale-[0.97]"
                style={{ fontSize: "14px", transition: "background-color 180ms ease-out, transform 120ms ease-out" }}
              >
                Agendar llamada gratis
                <span
                  className="w-8 h-8 rounded-full bg-midnight/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px"
                  style={{ transition: "transform 180ms ease-out", fontSize: "16px" }}
                >
                  →
                </span>
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 hover:bg-white/[0.05] text-white rounded-full px-6 py-3 font-jakarta font-bold active:scale-[0.97]"
                style={{ fontSize: "14px", transition: "border-color 180ms ease-out, background-color 180ms ease-out, transform 120ms ease-out" }}
              >
                WhatsApp
              </a>
            </div>

            {/* Social proof mini-strip */}
            <div
              className="hero-anim-fade flex flex-wrap gap-x-8 gap-y-3"
              style={{ animationDelay: "0.44s" }}
            >
              {[
                { val: "9+",    lbl: "años" },
                { val: "40+",   lbl: "proyectos" },
                { val: "3",     lbl: "certificaciones Google" },
                { val: "100",   lbl: "Lighthouse SEO" },
              ].map((s) => (
                <div key={s.lbl} className="flex items-baseline gap-1.5">
                  <span className="font-jakarta font-extrabold text-teal" style={{ fontSize: "18px", letterSpacing: "-0.5px" }}>
                    {s.val}
                  </span>
                  <span className="font-sans text-[11px]" style={{ color: "rgba(255,255,255,0.28)" }}>
                    {s.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Live GSC dashboard ─────────────────── */}
          <div className="hidden lg:block">
            {/* Label */}
            <div
              className="flex items-center gap-2 mb-3"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.5s ease-out 0.2s",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal" style={{ animation: "pulse 2s infinite" }} aria-hidden="true" />
              <span className="font-sans text-[10px] font-semibold tracking-[2.5px] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
                Resultado real · Cliente Colombia
              </span>
            </div>
            <GscDashboard visible={mounted} />
          </div>

        </div>
      </Container>
    </section>
  );
}
