import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { FadeIn } from "@/components/ui/FadeIn";

const differentiators = [
  {
    icon: "⚡",
    title: "SEO desde el build",
    text: "No agrego SEO al final. Lo construyo desde la arquitectura, las URLs, los headings y el código. El sitio posiciona desde el día del lanzamiento.",
  },
  {
    icon: "👤",
    title: "Un solo interlocutor",
    text: "Hablas directamente conmigo en cada etapa. Sin juniors, sin subcontratistas, sin teléfono roto entre el diseñador y el SEO.",
  },
  {
    icon: "📊",
    title: "Resultados medibles",
    text: "Todo se mide. Google Search Console, Analytics, posiciones, tráfico, conversiones. No trabajo por horas — trabajo por resultados.",
  },
];

export function WhyStiven() {
  return (
    <section
      className="bg-warm-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <FadeIn>
            <Eyebrow>02 — Por qué Stiven</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              El diseñador web que también es tu consultor SEO.
            </h2>
            <p className="font-sans text-text-mid leading-[1.75]">
              La mayoría de diseñadores entregan el sitio y se van. La mayoría de consultores SEO no saben construir. Yo hago los dos — y eso cambia todo el resultado.
            </p>
          </FadeIn>

          {/* Right — differentiators */}
          <div className="flex flex-col gap-0">
            {differentiators.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.1}>
                <div className="relative flex gap-5 py-7 overflow-hidden">
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 font-jakarta font-extrabold leading-none select-none pointer-events-none text-text-dark"
                    style={{ fontSize: "clamp(64px, 8vw, 96px)", opacity: 0.04 }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="text-2xl shrink-0 mt-0.5">{d.icon}</div>
                  <div>
                    <h3 className="font-jakarta font-bold text-text-dark text-[17px] mb-2">
                      {d.title}
                    </h3>
                    <p className="font-sans text-text-mid text-sm leading-[1.75]">
                      {d.text}
                    </p>
                  </div>
                </div>
                {i < differentiators.length - 1 && (
                  <Divider direction="left" className="opacity-[0.15]" />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
