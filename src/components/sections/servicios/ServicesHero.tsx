import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServicesHero() {
  return (
    <section
      className="relative bg-midnight bg-grid-dark overflow-hidden"
      style={{ paddingTop: "80px", paddingBottom: "100px" }}
    >
      {/* Glow */}
      <div
        className="glow-teal absolute pointer-events-none"
        style={{ top: "-100px", right: "-100px", opacity: 0.5 }}
        aria-hidden="true"
      />

      <Container>
        {/* Breadcrumb */}
        <FadeIn>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-sm text-slate-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate">→</li>
              <li className="text-white" aria-current="page">Servicios</li>
            </ol>
          </nav>
        </FadeIn>

        <FadeIn delay={0.05}>
          <Eyebrow>Servicios · stivenramirez.com</Eyebrow>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1
            className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-6 max-w-3xl"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            SEO integrado en cada proyecto.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="font-sans text-slate-light leading-[1.75] max-w-[580px]"
            style={{ fontSize: "clamp(16px, 1.2vw, 18px)" }}
          >
            Diseño web con SEO desde el build, consultoría SEO mensual y pauta digital. Todo lo que necesitas para aparecer primero en Google y convertir.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
