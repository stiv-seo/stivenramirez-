import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactoHero() {
  return (
    <section
      className="relative bg-midnight bg-grain overflow-hidden pt-20 md:pt-[140px]"
      style={{ paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-sans text-xs text-slate">
              <li>
                <Link href="/" className="hover:text-teal transition-colors duration-150">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-slate-light" aria-current="page">Contacto</li>
            </ol>
          </nav>

          <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-5">
            Sin compromiso · Respondo en menos de 24 h
          </p>

          <h1
            className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-6"
            style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
          >
            Hablemos.
          </h1>

          <p
            className="font-sans text-slate-light leading-[1.8] max-w-[480px]"
            style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}
          >
            Cuéntame qué necesita tu negocio. Te respondo con un diagnóstico
            honesto y un presupuesto sin sorpresas.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
