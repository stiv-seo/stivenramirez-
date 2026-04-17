import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SubpageProcessProps {
  steps: ProcessStep[];
  bg?: "off-white" | "warm-white";
}

export function SubpageProcess({ steps, bg = "warm-white" }: SubpageProcessProps) {
  const bgClass  = bg === "warm-white" ? "bg-warm-white" : "bg-off-white";
  const cardBg   = bg === "warm-white" ? "bg-off-white"  : "bg-warm-white";

  return (
    <section
      className={bgClass}
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-12">
          <Eyebrow>El proceso</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px]"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
          >
            Cómo trabajamos juntos
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className={`relative ${cardBg} rounded-2xl p-8 border border-[rgba(0,0,0,0.05)] h-full overflow-hidden`}>
                <span
                  className="absolute top-4 right-6 font-jakarta font-extrabold text-[72px] leading-none select-none pointer-events-none"
                  style={{ color: "rgba(0,196,180,0.07)" }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <p className="font-sans text-[11px] font-semibold tracking-[3px] uppercase text-teal mb-4">
                  Paso {step.number}
                </p>
                <h3 className="font-jakarta font-bold text-text-dark text-[19px] leading-tight mb-3">
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
