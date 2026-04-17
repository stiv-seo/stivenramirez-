import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials } from "@/data/testimonials";

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
                <blockquote className="font-sans text-text-mid text-sm leading-[1.75] my-5 flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="border-t border-[rgba(0,0,0,0.06)] pt-5">
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
