import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface SubpageFeaturesProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  features: Feature[];
  bg?: "off-white" | "warm-white";
}

export function SubpageFeatures({
  eyebrow,
  title,
  subtitle,
  features,
  bg = "off-white",
}: SubpageFeaturesProps) {
  const bgClass = bg === "warm-white" ? "bg-warm-white" : "bg-off-white";

  return (
    <section
      className={bgClass}
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeIn>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", textWrap: "balance" }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="font-sans text-text-mid leading-[1.75] max-w-[420px]">
                {subtitle}
              </p>
            )}
          </FadeIn>

          {/* Divided list instead of a bordered card grid */}
          <div className="grid sm:grid-cols-2 gap-x-8">
            {features.map((f, i) => (
              <FadeIn
                key={f.title}
                delay={i * 0.07}
                className={`border-t border-black/[0.07] ${i < 2 ? "sm:border-t-0" : ""} ${i === 0 ? "border-t-0" : ""}`}
              >
                <div className="flex gap-4 py-5">
                  <span className="text-2xl shrink-0">{f.icon}</span>
                  <div>
                    <h3 className="font-jakarta font-bold text-text-dark text-[16px] leading-tight mb-1.5">
                      {f.title}
                    </h3>
                    <p className="font-sans text-text-mid text-[13px] leading-[1.7]">
                      {f.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
