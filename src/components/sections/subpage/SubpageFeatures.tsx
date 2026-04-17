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
  const cardBg  = bg === "warm-white" ? "bg-off-white"  : "bg-warm-white";

  return (
    <section
      className={bgClass}
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-text-mid leading-[1.75] max-w-[500px]">
              {subtitle}
            </p>
          )}
        </FadeIn>

        <div className={`grid gap-6 ${features.length <= 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <div className={`${cardBg} rounded-2xl p-7 border border-[rgba(0,0,0,0.05)] h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-jakarta font-bold text-text-dark text-[17px] leading-tight mb-2">
                  {f.title}
                </h3>
                <p className="font-sans text-text-mid text-sm leading-[1.75]">
                  {f.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
