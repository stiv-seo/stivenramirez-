import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const differentiators = [
  {
    num: "01",
    title: "SEO desde el build",
    text: "No agrego SEO al final. Lo construyo desde la arquitectura, las URLs, los headings y el código. El sitio posiciona desde el día del lanzamiento.",
  },
  {
    num: "02",
    title: "Un solo interlocutor",
    text: "Hablas directamente conmigo en cada etapa. Sin juniors, sin subcontratistas, sin teléfono roto entre el diseñador y el SEO.",
  },
  {
    num: "03",
    title: "Resultados medibles",
    text: "Todo se mide. Google Search Console, Analytics, posiciones, tráfico, conversiones. No trabajo por horas — trabajo por resultados.",
  },
];

export function WhyStiven() {
  return (
    <section
      className="bg-midnight relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: "-100px", right: "-100px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,196,180,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container>
        <div className="grid gap-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">

          {/* Left — sticky editorial statement */}
          <FadeIn>
            <p className="font-sans text-[10px] font-semibold tracking-[4px] uppercase text-teal mb-5">
              02 — Por qué Stiven
            </p>
            <h2
              className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              El diseñador web que también es tu consultor SEO.
            </h2>
            <p className="font-sans text-slate-light leading-[1.8] mb-10">
              La mayoría de diseñadores entregan el sitio y se van. La mayoría de consultores SEO no saben construir. Yo hago los dos — y eso cambia todo el resultado.
            </p>

            {/* Social proof pill */}
            <div
              className="inline-flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-4"
              style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)" }}
            >
              <div className="flex -space-x-2">
                {["A","B","C"].map((l) => (
                  <span
                    key={l}
                    className="w-8 h-8 rounded-full bg-teal/20 border-2 border-midnight flex items-center justify-center font-jakarta font-bold text-teal text-[11px]"
                  >
                    {l}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-jakarta font-bold text-white text-[13px] leading-none mb-0.5">
                  +40 proyectos entregados
                </p>
                <p className="font-sans text-[11px] text-slate-light">
                  Colombia · Latam · 2020–2026
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — numbered differentiators with separator lines */}
          <div className="flex flex-col">
            {differentiators.map((d, i) => (
              <FadeIn key={d.num} delay={i * 0.1}>
                <div
                  className="group flex gap-6 py-8 relative"
                  style={{
                    borderBottom: i < differentiators.length - 1
                      ? "1px solid rgba(255,255,255,0.07)"
                      : "none",
                  }}
                >
                  {/* Number — large ghost */}
                  <span
                    className="font-jakarta font-extrabold text-white shrink-0 leading-none select-none"
                    style={{
                      fontSize: "clamp(36px, 4vw, 52px)",
                      opacity: 0.06,
                      letterSpacing: "-2px",
                    }}
                    aria-hidden="true"
                  >
                    {d.num}
                  </span>

                  <div className="pt-1.5">
                    {/* Teal accent line */}
                    <div
                      className="w-6 h-[2px] rounded-full bg-teal mb-4 opacity-70"
                      aria-hidden="true"
                    />
                    <h3 className="font-jakarta font-bold text-white text-[17px] mb-2.5">
                      {d.title}
                    </h3>
                    <p className="font-sans text-slate-light text-sm leading-[1.8]">
                      {d.text}
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
