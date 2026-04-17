import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

export interface TechTool {
  icon?: string;
  name: string;
}

export interface TechPillsProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tools: TechTool[];
  bg?: "off-white" | "warm-white";
}

export function TechPills({
  eyebrow,
  title,
  subtitle,
  tools,
  bg = "off-white",
}: TechPillsProps) {
  const bgClass = bg === "off-white" ? "bg-off-white" : "bg-warm-white";
  const pillBg = bg === "off-white" ? "bg-warm-white" : "bg-off-white";

  return (
    <section className={bgClass} style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <Container>
        <FadeIn className="mb-10">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-0.5px]"
            style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-text-mid text-[16px] leading-[1.75] mt-3 max-w-[520px]">
              {subtitle}
            </p>
          )}
        </FadeIn>

        <div className="flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <FadeIn key={tool.name}>
              <div
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border
                  border-[rgba(0,0,0,0.08)] ${pillBg}
                  hover:border-teal hover:bg-teal/[0.06]
                  transition-all duration-200 cursor-default`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {tool.icon && (
                  <span className="text-[16px]" aria-hidden="true">
                    {tool.icon}
                  </span>
                )}
                <span className="font-jakarta font-semibold text-text-dark text-[13px]">
                  {tool.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
