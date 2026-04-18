import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials } from "@/data/testimonials";
import type { TestimonialMetric } from "@/types";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function MetricBadge({ metric }: { metric: TestimonialMetric }) {
  return (
    <div className="mt-5 rounded-xl bg-midnight/[0.04] border border-teal/20 px-4 py-3">
      <p className="font-sans text-[10px] font-semibold tracking-[2px] uppercase text-slate mb-2">
        {metric.label}
      </p>
      <div className="flex items-center gap-3">
        {metric.before && (
          <>
            <span className="font-jakarta font-bold text-slate text-[15px] line-through opacity-50">
              {metric.before}
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal shrink-0" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </>
        )}
        <span className="font-jakarta font-extrabold text-teal text-[18px] leading-none">
          {metric.after}
        </span>
        {metric.note && (
          <span className="font-sans text-[11px] text-slate-light bg-teal/10 rounded-full px-2 py-0.5">
            {metric.note}
          </span>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-14">
          <Eyebrow>05 — Testimonios</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Lo que dicen los negocios que ya posicionan
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <figure
                className="bg-warm-white rounded-2xl p-8 flex flex-col h-full
                  border border-[rgba(0,0,0,0.05)]
                  hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <Stars count={t.stars} />
                <blockquote className="font-sans text-text-mid text-sm leading-[1.75] mt-5 flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <MetricBadge metric={t.metric} />
                <figcaption className="border-t border-[rgba(0,0,0,0.06)] pt-5 mt-5">
                  <p className="font-jakarta font-bold text-text-dark text-[15px]">
                    {t.name}
                  </p>
                  <p className="font-sans text-slate text-xs mt-0.5">
                    {t.company} · {t.city}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
