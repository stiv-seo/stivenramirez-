import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Diagnóstico sin filtros",
    description:
      "Auditoría técnica del sitio, análisis de keywords con potencial real y estudio de competencia. Entiendo tu negocio antes de tocar una línea de código.",
  },
  {
    number: "02",
    title: "Diseño + SEO desde el día 1",
    description:
      "No primero diseño y luego SEO. La arquitectura, los textos y la velocidad se piensan juntos. Lo que se construye bien no necesita repararse después.",
  },
  {
    number: "03",
    title: "Resultados medibles",
    description:
      "Reportes claros con posiciones, tráfico, conversiones y ROI. Sin métricas de vanidad — solo los números que importan para tu negocio.",
  },
];

export function PortfolioProcess() {
  return (
    <section
      className="bg-warm-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-12">
          <Eyebrow>Cómo trabajo</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Un proceso que ya funciona
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[480px]">
            Los resultados de arriba no son casualidad. Son el producto de un proceso repetible y documentado.
          </p>
        </FadeIn>

        <div className="relative">
          <div
            className="hidden md:block absolute top-[19px] left-0 right-0 h-px bg-gradient-to-r from-teal/40 via-teal/15 to-transparent"
            aria-hidden="true"
          />
          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="relative flex flex-col">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-midnight text-teal font-jakarta font-bold text-[13px] flex items-center justify-center mb-5">
                    {step.number}
                  </div>
                  <h3 className="font-jakarta font-bold text-text-dark text-[19px] leading-tight mb-2.5">
                    {step.title}
                  </h3>
                  <p className="font-sans text-text-mid text-sm leading-[1.75]">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
