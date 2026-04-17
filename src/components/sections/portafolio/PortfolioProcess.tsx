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
          <Eyebrow>02 — Cómo trabajo</Eyebrow>
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

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="relative bg-off-white rounded-2xl p-8 border border-[rgba(0,0,0,0.05)] h-full">
                {/* Ghost number */}
                <span
                  className="absolute top-4 right-6 font-jakarta font-extrabold text-[72px] leading-none select-none pointer-events-none"
                  style={{ color: "rgba(0,196,180,0.08)" }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <p className="font-sans text-[11px] font-semibold tracking-[3px] uppercase text-teal mb-4">
                  Paso {step.number}
                </p>
                <h3 className="font-jakarta font-bold text-text-dark text-[20px] leading-tight mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-text-mid text-sm leading-[1.75]">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
