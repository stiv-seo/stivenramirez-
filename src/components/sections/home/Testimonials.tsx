import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials } from "@/data/testimonials";
import type { Testimonial, TestimonialMetric } from "@/types";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Metric({ metric, size = "md" }: { metric: TestimonialMetric; size?: "md" | "lg" }) {
  return (
    <div className="flex items-center gap-2.5 flex-wrap">
      {metric.before && (
        <>
          <span className={`font-jakarta font-bold text-slate line-through opacity-50 ${size === "lg" ? "text-[16px]" : "text-[13px]"}`}>
            {metric.before}
          </span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal shrink-0" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </>
      )}
      <span className={`font-jakarta font-extrabold text-teal leading-none ${size === "lg" ? "text-[26px]" : "text-[16px]"}`}>
        {metric.after}
      </span>
      <span className="font-sans text-slate text-[11px]">{metric.label}</span>
    </div>
  );
}

function CompactCard({ t, delay }: { t: Testimonial; delay: number }) {
  return (
    <FadeIn delay={delay} className="h-full">
      <figure className="flex flex-col h-full bg-warm-white rounded-2xl p-6">
        <Stars count={t.stars} />
        <blockquote className="font-sans text-text-mid text-[13px] leading-[1.7] mt-4 flex-1">
          &ldquo;{t.text}&rdquo;
        </blockquote>
        <Metric metric={t.metric} />
        <figcaption className="border-t border-black/[0.06] pt-4 mt-4">
          <p className="font-jakarta font-bold text-text-dark text-[14px]">{t.name}</p>
          <p className="font-sans text-slate text-[11px] mt-0.5">{t.company} · {t.city}</p>
        </figcaption>
      </figure>
    </FadeIn>
  );
}

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="bg-off-white" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container>
        <FadeIn className="mb-14 max-w-[560px]">
          <Eyebrow>Testimonios</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1.5px]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", textWrap: "balance" }}
          >
            Lo que dicen los negocios que ya posicionan
          </h2>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          {/* Featured testimonial — oversized quote treatment */}
          <FadeIn>
            <figure className="relative flex flex-col h-full bg-midnight rounded-3xl p-9 overflow-hidden">
              <span
                className="absolute -top-4 -left-2 font-jakarta font-extrabold leading-none select-none pointer-events-none text-white/[0.05]"
                style={{ fontSize: "180px" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <div className="relative">
                <Stars count={featured.stars} />
                <blockquote
                  className="font-jakarta font-medium text-white leading-[1.45] mt-6 mb-8"
                  style={{ fontSize: "clamp(19px, 1.8vw, 24px)", textWrap: "pretty" }}
                >
                  {featured.text}
                </blockquote>
              </div>
              <div className="mt-auto relative">
                <Metric metric={featured.metric} size="lg" />
                <figcaption className="border-t border-white/10 pt-4 mt-6">
                  <p className="font-jakarta font-bold text-white text-[15px]">{featured.name}</p>
                  <p className="font-sans text-slate-light text-[12px] mt-0.5">{featured.company} · {featured.city}</p>
                </figcaption>
              </div>
            </figure>
          </FadeIn>

          {/* Supporting testimonials */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {rest.map((t, i) => (
              <CompactCard key={t.id} t={t} delay={0.1 + i * 0.1} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
