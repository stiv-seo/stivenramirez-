import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface ProcessStepDetail {
  number: string | number;
  title: string;
  description: string;
  details?: string[];
  icon?: string;
  duration?: string;
}

export interface ProcessStepsProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  steps: ProcessStepDetail[];
  layout?: "vertical" | "grid";
  bg?: "off-white" | "warm-white";
}

export function ProcessSteps({
  eyebrow,
  title,
  subtitle,
  steps,
  layout = "vertical",
  bg = "warm-white",
}: ProcessStepsProps) {
  const bgClass = bg === "warm-white" ? "bg-warm-white" : "bg-off-white";

  return (
    <section className={bgClass} style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container>
        <FadeIn className="mb-14">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px]"
            style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-text-mid text-[17px] leading-[1.7] mt-4 max-w-[540px]">
              {subtitle}
            </p>
          )}
        </FadeIn>

        {layout === "vertical" ? (
          <div className="space-y-2 max-w-[680px]">
            {steps.map((step, i) => (
              <FadeIn key={String(step.number)}>
                <div className="relative flex gap-6">
                  {/* Number + connector */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-11 h-11 rounded-full border-2 border-teal bg-teal/[0.08]
                        flex items-center justify-center
                        font-jakarta font-extrabold text-teal text-[16px]"
                    >
                      {String(step.number).padStart(2, "0")}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 bg-teal/20 mt-2 mb-2 min-h-[32px]"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={cn("pb-8", i === steps.length - 1 && "pb-0")}>
                    {step.duration && (
                      <div className="mb-2">
                        <Badge variant="teal">{step.duration}</Badge>
                      </div>
                    )}
                    <h3 className="font-jakarta font-bold text-text-dark text-[17px] mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-text-mid text-[15px] leading-[1.8] mb-3">
                      {step.description}
                    </p>
                    {step.details && step.details.length > 0 && (
                      <ul className="space-y-1.5">
                        {step.details.map((detail, j) => (
                          <li key={j} className="flex gap-2 items-start font-sans text-[14px] text-slate">
                            <span className="text-teal font-bold mt-0.5 shrink-0">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <FadeIn key={String(step.number)}>
                <div
                  className="bg-white rounded-2xl p-6 border border-[rgba(0,0,0,0.06)]
                    hover:border-teal/30 transition-colors duration-200"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-full border-2 border-teal bg-teal/[0.08]
                      flex items-center justify-center
                      font-jakarta font-extrabold text-teal text-[14px] mb-4"
                  >
                    {String(step.number).padStart(2, "0")}
                  </div>
                  {step.duration && (
                    <div className="mb-2">
                      <Badge variant="teal">{step.duration}</Badge>
                    </div>
                  )}
                  <h3 className="font-jakarta font-bold text-text-dark text-[16px] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-text-mid text-[14px] leading-[1.8]">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
