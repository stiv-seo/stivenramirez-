import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

const values = [
  {
    number: "01",
    title: "Resultados antes que procesos",
    description:
      "No me importa cuántas horas trabajé — me importa cuánto subió tu tráfico. Los reportes son de resultados, no de actividades.",
  },
  {
    number: "02",
    title: "Transparencia sin filtros",
    description:
      "Si algo no va a funcionar, te lo digo antes de cobrar. Prefiero perder un cliente que entregar trabajo que no cumple lo que prometí.",
  },
  {
    number: "03",
    title: "Un solo punto de contacto",
    description:
      "Tú hablas conmigo. No con un account manager que le explica a un ejecutivo lo que le dijiste. Lo que necesitas llega directo a quien lo ejecuta.",
  },
];

export function SobreMiValues() {
  return (
    <section
      className="bg-warm-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-12">
          <Eyebrow>03 — Cómo trabajo</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Lo que no negocia
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.number} delay={i * 0.1}>
              <div className="relative bg-off-white rounded-2xl p-8 border border-[rgba(0,0,0,0.05)] h-full overflow-hidden">
                <span
                  className="absolute top-4 right-6 font-jakarta font-extrabold text-[72px] leading-none select-none pointer-events-none"
                  style={{ color: "rgba(0,196,180,0.07)" }}
                  aria-hidden="true"
                >
                  {v.number}
                </span>
                <p className="font-sans text-[11px] font-semibold tracking-[3px] uppercase text-teal mb-4">
                  {v.number}
                </p>
                <h3 className="font-jakarta font-bold text-text-dark text-[19px] leading-tight mb-3">
                  {v.title}
                </h3>
                <p className="font-sans text-text-mid text-sm leading-[1.75]">
                  {v.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
