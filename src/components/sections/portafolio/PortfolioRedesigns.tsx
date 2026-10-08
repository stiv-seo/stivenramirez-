import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { redesignCases } from "@/data/portfolio";

export function PortfolioRedesigns() {
  return (
    <section className="bg-warm-white" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container>
        <FadeIn className="mb-14">
          <Eyebrow>Antes y después</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Rediseños que puedes comparar
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[560px]">
            Mueve la línea de cada imagen. A la izquierda está el sitio que tenía el cliente cuando empezamos; a la derecha, el que está hoy en producción.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-20">
          {redesignCases.map((caso) => (
            <FadeIn key={caso.id}>
              <article className="grid items-start gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12">
                <BeforeAfter
                  before={caso.before}
                  after={caso.after}
                  width={caso.width}
                  height={caso.height}
                  client={caso.client}
                />
                <div>
                  <p className="font-sans text-[13px] text-text-mid">{caso.sector}</p>
                  <h3 className="font-jakarta font-extrabold text-text-dark text-2xl leading-tight tracking-[-0.5px] mt-1">
                    {caso.client}
                  </h3>
                  <p className="font-sans text-[13px] font-semibold text-text-dark mt-2">{caso.services}</p>
                  <p className="font-sans text-text-mid leading-[1.75] mt-5">{caso.summary}</p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {caso.changes.map((c) => (
                      <li key={c} className="flex gap-3 font-sans text-[15px] text-text-dark leading-[1.6]">
                        <span className="text-teal" aria-hidden="true">→</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={caso.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-jakarta font-bold text-sm text-text-dark hover:text-teal transition-colors duration-150"
                  >
                    Ver el sitio de {caso.client} en vivo <span className="text-teal">→</span>
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
