import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CALENDLY_URL } from "@/lib/constants";

const ticker = [
  "WordPress", "Shopify", "SEO Técnico", "Core Web Vitals",
  "Google Ads", "SEO Local", "Link Building", "Schema Markup",
  "Meta Ads", "Auditoría SEO", "Google Search Console", "E-commerce SEO",
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(180deg, #07090f 0%, #0B1829 100%)",
        minHeight: "100dvh",
      }}
    >
      {/* Noise grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed", inset: 0, zIndex: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          opacity: 0.028,
          pointerEvents: "none",
        }}
      />

      {/* Teal radial — top right */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "-200px", right: "-150px", zIndex: 0,
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,196,180,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Main copy ─────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-center relative z-10" style={{ paddingTop: "120px", paddingBottom: "60px" }}>
        <Container>

          {/* Eyebrow row */}
          <div
            className="hero-anim-up flex items-center gap-4 mb-10"
            style={{ animationDelay: "0s" }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" aria-hidden="true" />
              <span className="font-sans text-[10px] font-semibold tracking-[4px] uppercase text-teal">
                Consultor SEO
              </span>
            </span>
            <span
              className="h-px flex-1 max-w-[60px]"
              style={{ background: "rgba(0,196,180,0.3)" }}
              aria-hidden="true"
            />
            <span className="font-sans text-[10px] font-semibold tracking-[4px] uppercase"
              style={{ color: "rgba(255,255,255,0.25)" }}>
              Medellín, Colombia
            </span>
          </div>

          {/* H1 — display type */}
          <h1
            className="hero-anim-up font-jakarta font-extrabold text-white"
            style={{
              fontSize: "clamp(52px, 9vw, 128px)",
              lineHeight: "0.96",
              letterSpacing: "clamp(-3px, -0.04em, -6px)",
              animationDelay: "0.08s",
            }}
          >
            <span className="block">Diseño webs</span>
            <span
              className="block"
              style={{
                backgroundImage: "linear-gradient(90deg, #00C4B4 0%, #00E5D3 40%, rgba(0,229,211,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              que posicionan
            </span>
            <span className="block" style={{ color: "rgba(255,255,255,0.92)" }}>
              en Google.
            </span>
          </h1>

          {/* Divider */}
          <div
            className="hero-anim-fade my-10"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, rgba(255,255,255,0.12) 0%, transparent 70%)",
              animationDelay: "0.22s",
            }}
            aria-hidden="true"
          />

          {/* Sub-row: descriptor + CTA */}
          <div
            className="hero-anim-up flex flex-col md:flex-row md:items-center gap-8 md:gap-16"
            style={{ animationDelay: "0.28s" }}
          >
            {/* Descriptor */}
            <p
              className="font-sans leading-[1.75] max-w-[420px]"
              style={{ fontSize: "clamp(15px, 1.1vw, 17px)", color: "rgba(148,163,184,0.9)" }}
            >
              Sitios WordPress y Shopify con SEO integrado desde el primer elemento. Un solo profesional — diseño, posicionamiento y estrategia.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 shrink-0">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-teal hover:bg-teal-bright text-midnight font-jakarta font-bold pl-6 pr-1.5 py-1.5 active:scale-[0.97]"
                style={{ fontSize: "14px", transition: "background-color 180ms ease-out, transform 120ms ease-out" }}
              >
                Llamada gratis
                <span className="w-8 h-8 rounded-full bg-midnight/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px"
                  style={{ transition: "transform 180ms ease-out", fontSize: "16px" }}>
                  →
                </span>
              </a>
              <Link
                href="/servicios/"
                className="font-sans text-sm hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)", transition: "color 180ms ease-out" }}
              >
                Ver servicios
              </Link>
            </div>
          </div>

          {/* Metadata strip */}
          <div
            className="hero-anim-fade flex flex-wrap gap-x-10 gap-y-3 mt-14"
            style={{ animationDelay: "0.38s" }}
          >
            {[
              { num: "9+",    label: "Años de experiencia" },
              { num: "40+",   label: "Proyectos entregados" },
              { num: "+280%", label: "Tráfico promedio en 6 meses" },
              { num: "100",   label: "SEO Score Lighthouse" },
            ].map((m) => (
              <div key={m.label} className="flex items-baseline gap-2.5">
                <span
                  className="font-jakarta font-extrabold text-teal"
                  style={{ fontSize: "clamp(20px, 2vw, 28px)", letterSpacing: "-1px" }}
                >
                  {m.num}
                </span>
                <span className="font-sans text-[11px] font-medium tracking-[1px]"
                  style={{ color: "rgba(255,255,255,0.28)" }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>

        </Container>
      </div>

      {/* ── Ticker strip ─────────────────────────────────────────── */}
      <div
        className="relative z-10 overflow-hidden border-t"
        style={{
          borderColor: "rgba(255,255,255,0.07)",
          paddingTop: "14px",
          paddingBottom: "14px",
          background: "rgba(255,255,255,0.02)",
        }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5">
              <span
                className="font-sans text-[11px] font-semibold tracking-[3px] uppercase"
                style={{ color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}
              >
                {item}
              </span>
              <span style={{ color: "rgba(0,196,180,0.4)", fontSize: "10px" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
