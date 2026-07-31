import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CALENDLY_URL } from "@/lib/constants";

const toolPills = [
  {
    label: "Google Search Console",
    abbr: "GSC",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
      </svg>
    ),
  },
  {
    label: "Google Analytics 4",
    abbr: "GA4",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 21H3V3h9v2H5v14h14v-7h2v9z M21 3h-7v2h4.59L9 14.59l1.41 1.41L20 6.41V11h2V3z"/>
      </svg>
    ),
  },
  {
    label: "WordPress",
    abbr: "WordPress",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.107 12c0-1.073.202-2.1.568-3.044l3.128 8.567A8.929 8.929 0 013.107 12zM12 20.893a8.934 8.934 0 01-2.544-.371l2.701-7.845 2.768 7.584a.96.96 0 00.072.139A8.94 8.94 0 0112 20.893zm1.237-13.244c.54-.028 1.027-.084 1.027-.084.483-.057.427-.765-.057-.737 0 0-1.453.114-2.39.114-.881 0-2.362-.114-2.362-.114-.484-.028-.54.708-.057.737 0 0 .458.056.94.084l1.397 3.825-1.963 5.888-3.263-9.713c.54-.028 1.026-.084 1.026-.084.484-.057.427-.765-.056-.737 0 0-1.454.114-2.391.114-.168 0-.365-.004-.575-.011A8.928 8.928 0 0112 3.107c2.331 0 4.459.892 6.054 2.353-.039-.002-.076-.008-.116-.008-1.188 0-2.031 1.034-2.031 2.146 0 .997.576 1.84 1.188 2.833.461.808.999 1.841.999 3.339 0 1.037-.398 2.24-.921 3.913l-1.207 4.031-4.729-14.066zM17.3 19.965l2.752-7.954c.513-1.283.683-2.309.683-3.223 0-.33-.022-.637-.06-.928A8.927 8.927 0 0120.893 12c0 3.181-1.719 5.966-4.293 7.465h-.001l.701.5z"/>
      </svg>
    ),
  },
  {
    label: "Shopify",
    abbr: "Shopify",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.337.395s-.275-.015-.726.015c-.045 0-.09.045-.135.045-.275-.726-1.091-2.272-2.452-2.272h-.09C11.479-1.727 11.069-2 10.479-2c-3.723 0-5.539 4.633-6.099 6.99-1.455.45-2.497.77-2.632.815-.816.255-.846.285-.951 1.061C.677 7.366 0 12.905 0 12.905L11.339 15l6.09-1.455S15.427.605 15.337.395zM11.579.18c-.726 1.046-1.636 2.317-1.666 4.393-.95.285-1.9.576-2.861.861C7.552 3.73 8.963.18 11.579.18zM10.479 8.908l.455 2.317s-1.001-.525-2.002-.525c-1.606 0-1.696.996-1.696 1.246 0 1.366 3.573 1.891 3.573 5.098 0 2.527-1.601 4.153-3.753 4.153-2.587 0-3.903-1.606-3.903-1.606l.696-2.272s1.356 1.155 2.497 1.155c.74 0 1.05-.586 1.05-1.016 0-1.771-2.932-1.846-2.932-4.773 0-2.452 1.756-4.828 5.299-4.828.816 0 1.716.226 1.716.226v.025z"/>
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="relative bg-midnight bg-grain overflow-hidden">
      <Container className="relative">
        <div className="grid lg:grid-cols-[1fr_460px] items-stretch">
          {/* Left — copy, offset up over the photo column on desktop */}
          <div
            className="relative z-10 flex flex-col justify-center"
            style={{ paddingTop: "96px", paddingBottom: "72px" }}
          >
            <p
              className="hero-anim-up font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-6"
              style={{ animationDelay: "0s" }}
            >
              Freelance SEO &amp; Diseño Web — Medellín, Colombia
            </p>

            <h1
              className="hero-anim-up font-jakarta font-extrabold text-white leading-[0.98] tracking-[-2px] mb-7"
              style={{
                fontSize: "clamp(42px, 6vw, 78px)",
                animationDelay: "0.1s",
                textWrap: "balance",
              }}
            >
              Sitios que <span className="text-teal">posicionan</span> en
              Google, no solo se ven bien.
            </h1>

            <p
              className="hero-anim-up font-sans text-slate-light leading-[1.75] mb-9 max-w-[480px]"
              style={{ fontSize: "clamp(16px, 1.2vw, 18px)", animationDelay: "0.2s" }}
            >
              WordPress y Shopify con SEO integrado desde el primer elemento.
              No contratas a un diseñador y luego a un SEO por separado — lo
              tienes todo en una sola persona.
            </p>

            <div
              className="hero-anim-up flex flex-wrap items-center gap-x-8 gap-y-4 mb-12"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="primary" size="lg" href={CALENDLY_URL} external>
                Agendar llamada gratis →
              </Button>
              <Button variant="ghost" href="/servicios/">
                Ver servicios y precios
              </Button>
            </div>

            {/* Tool pills */}
            <div
              className="hero-anim-fade flex flex-wrap gap-2"
              style={{ animationDelay: "0.45s" }}
            >
              {toolPills.map((pill) => (
                <span
                  key={pill.abbr}
                  title={pill.label}
                  className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold text-slate-light bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                >
                  <span className="text-teal">{pill.icon}</span>
                  {pill.abbr}
                </span>
              ))}
            </div>
          </div>

          {/* Right — photo, bleeds full-bleed to the edge and below the fold on desktop. */}
          <div
            className="hero-anim-scale relative hidden lg:block"
            style={{ animationDelay: "0.15s", marginBottom: "-40px" }}
          >
            <div className="relative w-full h-full min-h-[560px]">
              <Image
                src="/images/stiven-ramirez.webp"
                alt="Stiven Ramírez — Consultor SEO y diseño web en Medellín"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0px, 460px"
              />
              {/* Duotone integration — ties the photo into the dark background instead of floating in an isolated card */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,24,41,0.75) 0%, rgba(11,24,41,0.05) 30%, rgba(11,24,41,0.1) 65%, #0B1829 100%), linear-gradient(90deg, #0B1829 0%, rgba(11,24,41,0.15) 12%, transparent 30%)",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 mix-blend-color"
                style={{ backgroundColor: "#0B1829", opacity: 0.15 }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Baseline rule — replaces the old radial glow orb as the section's signature detail */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" aria-hidden="true" />
    </section>
  );
}
