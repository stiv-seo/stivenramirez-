import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CALENDLY_URL, WA_URL } from "@/lib/constants";

const toolPills = [
  { label: "Google Search Console", abbr: "GSC" },
  { label: "Google Analytics 4",   abbr: "GA4" },
  { label: "WordPress",            abbr: "WordPress" },
  { label: "Shopify",              abbr: "Shopify" },
  { label: "Semrush",              abbr: "Semrush" },
];

export function Hero() {
  return (
    <section
      className="relative bg-midnight overflow-hidden flex items-center"
      style={{ minHeight: "100dvh", paddingTop: "96px", paddingBottom: "80px" }}
    >
      {/* Ambient glow — teal top-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "-160px", right: "-120px",
          width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,196,180,0.09) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />
      {/* Ambient glow — subtle bottom-left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: "-120px", left: "-160px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,196,180,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container>
        <div
          className="grid items-center gap-16 lg:gap-20"
          style={{ gridTemplateColumns: "1fr" }}
        >
          <div
            className="lg:grid lg:items-center lg:gap-16"
            style={{ gridTemplateColumns: "56fr 44fr" }}
          >
            {/* ── Left: Copy ─────────────────────────────────────── */}
            <div>

              {/* Eyebrow pill */}
              <div
                className="hero-anim-up inline-flex items-center gap-2.5 rounded-full border border-teal/20 bg-teal/[0.07] px-4 py-2 mb-8"
                style={{ animationDelay: "0s" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" aria-hidden="true" />
                <span className="font-sans text-[11px] font-semibold tracking-[3px] uppercase text-teal">
                  Consultor SEO · Medellín, Colombia
                </span>
              </div>

              {/* H1 */}
              <h1
                className="hero-anim-up font-jakarta font-extrabold text-white leading-[1.02] tracking-[-2px] mb-7"
                style={{ fontSize: "clamp(42px, 5.5vw, 76px)", animationDelay: "0.1s" }}
              >
                Diseño webs que{" "}
                <span
                  className="relative"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #00C4B4 0%, #00E5D3 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  posicionan
                </span>{" "}
                en Google<br className="hidden sm:block" /> y generan ventas.
              </h1>

              {/* Subtitle */}
              <p
                className="hero-anim-up font-sans text-slate-light leading-[1.8] mb-10 max-w-[500px]"
                style={{ fontSize: "clamp(16px, 1.2vw, 18px)", animationDelay: "0.2s" }}
              >
                Sitios WordPress y Shopify con SEO integrado desde el primer elemento.
                No contratas a un diseñador y luego a un SEO —{" "}
                <span className="text-white/80">lo tienes todo en uno.</span>
              </p>

              {/* CTAs */}
              <div
                className="hero-anim-up flex flex-wrap gap-3 mb-10"
                style={{ animationDelay: "0.3s" }}
              >
                {/* Primary — button-in-button architecture */}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full pl-6 pr-1.5 py-1.5 font-jakarta font-bold text-[14px] bg-teal hover:bg-teal-bright text-midnight active:scale-[0.97]"
                  style={{ transition: "background-color 180ms ease-out, transform 120ms ease-out" }}
                >
                  Agendar llamada gratis
                  <span
                    className="w-8 h-8 rounded-full bg-midnight/20 flex items-center justify-center text-base group-hover:translate-x-0.5 group-hover:-translate-y-px"
                    style={{ transition: "transform 180ms ease-out" }}
                  >
                    →
                  </span>
                </a>

                {/* Secondary */}
                <Link
                  href="/servicios/"
                  className="inline-flex items-center gap-2 border border-white/15 text-white rounded-full px-6 py-3 font-jakarta font-bold text-[14px] hover:border-white/30 hover:bg-white/[0.05] active:scale-[0.97]"
                  style={{ transition: "border-color 180ms ease-out, background-color 180ms ease-out, transform 120ms ease-out" }}
                >
                  Ver servicios
                </Link>
              </div>

              {/* Tool pills */}
              <div
                className="hero-anim-fade flex flex-wrap gap-2"
                style={{ animationDelay: "0.48s" }}
              >
                {toolPills.map((pill) => (
                  <span
                    key={pill.abbr}
                    title={pill.label}
                    className="inline-flex items-center font-sans text-[11px] font-semibold text-slate-light bg-white/[0.05] border border-white/[0.09] rounded-full px-3 py-1.5 hover:border-teal/30 hover:text-teal/80"
                    style={{ transition: "border-color 180ms ease-out, color 180ms ease-out" }}
                  >
                    {pill.abbr}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right: Double-bezel photo + floating proof cards ── */}
            <div
              className="hero-anim-scale hidden lg:block relative"
              style={{ animationDelay: "0.18s" }}
            >

              {/* Double-bezel outer shell */}
              <div
                className="rounded-[2rem] p-[7px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.5)",
                }}
              >
                {/* Inner core */}
                <div
                  className="relative overflow-hidden bg-navy"
                  style={{
                    borderRadius: "calc(2rem - 7px)",
                    aspectRatio: "4/5",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08)",
                  }}
                >
                  <Image
                    src="/images/stiven-ramirez.webp"
                    alt="Stiven Ramírez — Consultor SEO y diseñador web en Medellín, Colombia"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 0px, 42vw"
                  />
                  {/* Subtle inner ring */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      borderRadius: "calc(2rem - 7px)",
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Floating proof card — GSC */}
              <div
                className="absolute -top-5 -left-10 rounded-2xl border border-white/10 p-4"
                style={{
                  background: "rgba(11,24,41,0.92)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  minWidth: "164px",
                  animation: "heroFadeUp 0.7s ease-out 0.45s both",
                }}
              >
                <p className="font-sans text-[9px] font-semibold tracking-[2.5px] uppercase text-slate mb-1.5">
                  GSC · Orgánico
                </p>
                <p
                  className="font-jakarta font-extrabold text-teal leading-none mb-1"
                  style={{ fontSize: "26px" }}
                >
                  +280%
                </p>
                <p className="font-sans text-[11px] text-slate-light">tráfico en 6 meses</p>
              </div>

              {/* Floating badge — experiencia */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl p-4"
                style={{
                  background: "#00C4B4",
                  boxShadow: "0 8px 32px rgba(0,196,180,0.35)",
                  animation: "heroFadeUp 0.7s ease-out 0.5s both",
                }}
              >
                <p
                  className="font-jakarta font-extrabold text-midnight leading-none"
                  style={{ fontSize: "30px" }}
                >
                  9+
                </p>
                <p className="font-sans text-[11px] font-semibold text-midnight/65 mt-0.5">
                  años de experiencia
                </p>
              </div>

              {/* Floating projects badge — mid-right */}
              <div
                className="absolute top-1/2 -right-12 -translate-y-1/2 rounded-2xl border border-white/10 px-4 py-3"
                style={{
                  background: "rgba(11,24,41,0.92)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                  animation: "heroFadeUp 0.7s ease-out 0.55s both",
                }}
              >
                <p
                  className="font-jakarta font-extrabold text-white leading-none"
                  style={{ fontSize: "22px" }}
                >
                  40+
                </p>
                <p className="font-sans text-[9px] font-semibold tracking-[1.5px] uppercase text-slate mt-1">
                  Proyectos
                </p>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
