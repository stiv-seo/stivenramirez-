import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Analizo tu negocio, competencia y oportunidades de keywords antes de proponer nada. Sin atajos.",
  },
  {
    number: "02",
    title: "Estrategia SEO",
    text: "Defino la arquitectura, URLs y contenido con intención de búsqueda desde el inicio del proyecto.",
  },
  {
    number: "03",
    title: "Diseño & Build",
    text: "Construyo con SEO integrado en cada elemento. Velocidad, schema markup y Core Web Vitals desde el código.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    text: "Capacitación en el CMS + configuración de Google Search Console + 30 días de soporte post-lanzamiento.",
  },
];

export function Process() {
  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="text-center mb-14">
          <Eyebrow>03 — Proceso</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            De cero a primera página en Google
          </h2>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="relative bg-warm-white rounded-2xl p-7 h-full border border-[rgba(0,0,0,0.05)]">
                {/* Step number ghost */}
                <span
                  className="absolute top-4 right-5 font-jakarta font-extrabold leading-none select-none pointer-events-none"
                  style={{
                    fontSize: "72px",
                    color: "rgba(0,196,180,0.07)",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Teal number */}
                <p className="font-jakarta font-bold text-teal text-sm tracking-[2px] mb-4">
                  {step.number}
                </p>

                <h3 className="font-jakarta font-bold text-text-dark text-[19px] mb-3">
                  {step.title}
                </h3>

                <p className="font-sans text-text-mid text-sm leading-[1.75]">
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
