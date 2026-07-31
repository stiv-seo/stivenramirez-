import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

const differentiators = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "SEO desde el build",
    text: "No agrego SEO al final. Lo construyo desde la arquitectura, las URLs, los headings y el código. El sitio posiciona desde el día del lanzamiento.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
      </svg>
    ),
    title: "Un solo interlocutor",
    text: "Hablas directamente conmigo en cada etapa. Sin juniors, sin subcontratistas, sin teléfono roto entre el diseñador y el SEO.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="20" x2="4" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="20" y1="20" x2="20" y2="14" />
      </svg>
    ),
    title: "Resultados medibles",
    text: "Todo se mide. Google Search Console, Analytics, posiciones, tráfico, conversiones. No trabajo por horas, trabajo por resultados.",
  },
];

export function WhyStiven() {
  return (
    <section
      className="bg-warm-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          {/* Left — sticky-feel copy */}
          <FadeIn className="lg:sticky lg:top-28">
            <Eyebrow>Por qué Stiven</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-6"
              style={{ fontSize: "clamp(28px, 3.6vw, 46px)", textWrap: "balance" }}
            >
              El diseñador web que también es tu consultor SEO.
            </h2>
            <p className="font-sans text-text-mid leading-[1.75] max-w-[380px]">
              La mayoría de diseñadores entregan el sitio y se van. La mayoría
              de consultores SEO no saben construir. Yo hago los dos, y eso
              cambia todo el resultado.
            </p>
          </FadeIn>

          {/* Right — connected timeline, not cards */}
          <div className="relative">
            <div
              className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-teal/40 via-teal/15 to-transparent"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-10">
              {differentiators.map((d, i) => (
                <FadeIn key={d.title} delay={i * 0.12}>
                  <div className="relative flex gap-6">
                    <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-warm-white border-2 border-teal/30 text-teal flex items-center justify-center">
                      {d.icon}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-jakarta font-bold text-text-dark text-[18px] mb-2">
                        {d.title}
                      </h3>
                      <p className="font-sans text-text-mid text-[14px] leading-[1.75] max-w-[440px]">
                        {d.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
