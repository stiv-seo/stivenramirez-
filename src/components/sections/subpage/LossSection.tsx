import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export interface LossItem {
  label: string;
  description: string;
}

export interface LossSectionProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  lossColumn: {
    icon: string;
    heading: string;
    items: LossItem[];
  };
  gainColumn: {
    icon: string;
    heading: string;
    items: LossItem[];
  };
  bg?: "off-white" | "warm-white";
}

export function LossSection({
  eyebrow,
  title,
  subtitle,
  lossColumn,
  gainColumn,
  bg = "off-white",
}: LossSectionProps) {
  const bgClass = bg === "off-white" ? "bg-off-white" : "bg-warm-white";

  return (
    <section className={bgClass} style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container>
        <FadeIn className="mb-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px]"
            style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-text-mid text-[17px] leading-[1.7] mt-4 max-w-[560px]">
              {subtitle}
            </p>
          )}
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Loss column — amber */}
          <FadeIn>
            <div className="bg-amber/[0.04] border border-amber/25 rounded-2xl p-7 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl" aria-hidden="true">
                  {lossColumn.icon}
                </span>
                <h3 className="font-jakarta font-bold text-text-dark text-[18px]">
                  {lossColumn.heading}
                </h3>
              </div>
              <ul className="space-y-5">
                {lossColumn.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      className="shrink-0 font-jakarta font-extrabold text-amber text-[18px] leading-none mt-0.5"
                      aria-hidden="true"
                    >
                      ✗
                    </span>
                    <div>
                      <p className="font-jakarta font-semibold text-amber text-[14px] mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-sans text-slate text-[13px] leading-[1.7]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Gain column — teal */}
          <FadeIn>
            <div
              className={cn(
                "border border-teal/25 rounded-2xl p-7 h-full",
                "bg-teal/[0.04]"
              )}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl" aria-hidden="true">
                  {gainColumn.icon}
                </span>
                <h3 className="font-jakarta font-bold text-text-dark text-[18px]">
                  {gainColumn.heading}
                </h3>
              </div>
              <ul className="space-y-5">
                {gainColumn.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      className="shrink-0 font-jakarta font-extrabold text-teal text-[18px] leading-none mt-0.5"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <div>
                      <p className="font-jakarta font-semibold text-teal text-[14px] mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-sans text-slate text-[13px] leading-[1.7]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
