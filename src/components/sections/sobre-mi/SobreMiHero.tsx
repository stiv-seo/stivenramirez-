import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function SobreMiHero() {
  return (
    <section
      className="relative bg-midnight bg-grain overflow-hidden pt-20 md:pt-[140px]"
      style={{ paddingBottom: "100px" }}
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_340px] items-center">
          {/* Text */}
          <FadeIn className="order-2 md:order-1">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-sans text-xs text-slate">
                <li>
                  <Link href="/" className="hover:text-teal transition-colors duration-150">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-light" aria-current="page">Sobre mí</li>
              </ol>
            </nav>

            <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-5">
              Consultor SEO · Diseñador Web · Colombia
            </p>

            <h1
              className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Soy Stiven Ramírez.
              <br />
              <span className="text-teal">Hago que Google</span>
              <br />
              te encuentre.
            </h1>

            <p
              className="font-sans text-slate-light leading-[1.8] max-w-[520px]"
              style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}
            >
              Consultor SEO y diseñador web con base en Colombia. Trabajo con pymes y
              emprendedores que quieren crecer en Google sin depender de una agencia que
              no conoce su negocio.
            </p>
          </FadeIn>

          {/* Photo */}
          <FadeIn direction="left" delay={0.15} className="order-1 md:order-2">
            <div className="relative mx-auto w-[260px] md:w-full">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,196,180,0.2) 0%, rgba(15,45,82,0.4) 100%)",
                  transform: "rotate(3deg)",
                }}
                aria-hidden="true"
              />
              <div className="relative rounded-2xl overflow-hidden bg-navy aspect-[3/4]">
                <Image
                  src="/images/stiven-ramirez.webp"
                  alt="Stiven Ramírez — Consultor SEO y Diseñador Web Colombia"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 260px, 340px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
