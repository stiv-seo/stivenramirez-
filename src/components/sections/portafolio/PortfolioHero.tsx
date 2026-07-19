import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function PortfolioHero() {
  return (
    <section
      className="relative bg-midnight bg-grid-dark overflow-hidden pt-20 md:pt-[140px]"
      style={{ paddingBottom: "100px" }}
    >
      <div
        className="glow-teal absolute pointer-events-none"
        style={{ top: "-120px", right: "-100px" }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-sans text-xs text-slate">
              <li>
                <a href="/" className="hover:text-teal transition-colors duration-150">
                  Inicio
                </a>
              </li>
              <li aria-hidden="true" className="text-slate">›</li>
              <li className="text-slate-light" aria-current="page">
                Portafolio
              </li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-5">
            En construcción · Resultados medibles
          </p>

          <h1
            className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Proyectos que
            <br />
            <span className="text-teal">van a hablar por sí solos.</span>
          </h1>

          <p
            className="font-sans text-slate-light leading-[1.75] max-w-[520px]"
            style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}
          >
            Cada caso que publico aquí tiene datos verificables de tráfico, conversiones y posiciones —
            sin pantallazos editados. Esta sección está creciendo con los primeros casos documentados.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
