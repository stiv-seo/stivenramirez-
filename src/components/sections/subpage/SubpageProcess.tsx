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
  const bgClass = bg === "warm-white" ? "bg-warm-white" : "bg-off-white";
  const cols =
    steps.length >= 4 ? "lg:grid-cols-4" : steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <section className={bgClass} style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container>
        <FadeIn className="mb-14 max-w-[480px]">
          <Eyebrow>El proceso</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px]"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)", textWrap: "balance" }}
          >
            Cómo trabajamos juntos
          </h2>
        </FadeIn>

        <div className="relative">
          <div
            className={`hidden lg:block absolute top-[19px] left-0 right-0 h-px bg-gradient-to-r from-teal/40 via-teal/15 to-transparent`}
            aria-hidden="true"
          />
          <div className={`grid gap-10 sm:grid-cols-2 ${cols}`}>
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="relative flex flex-col">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-midnight text-teal font-jakarta font-bold text-[13px] flex items-center justify-center mb-5">
                    {step.number}
                  </div>
                  <h3 className="font-jakarta font-bold text-text-dark text-[18px] leading-tight mb-2.5">
                    {step.title}
                  </h3>
                  <p className="font-sans text-text-mid text-[14px] leading-[1.7]">
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
