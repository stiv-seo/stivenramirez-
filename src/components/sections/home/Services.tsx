import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tilt } from "@/components/ui/Tilt";
import { services } from "@/data/services";

// Bento layout: one featured tile (dark, larger) + two stacked mid tiles +
// one wide banner tile — deliberately unequal, instead of four identical cards.

export function Services() {
  const [featured, midA, midB, wide] = services;

  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        {/* Header */}
        <FadeIn className="mb-14 max-w-[640px]">
          <Eyebrow>Qué hago</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1.5px] mb-4"
            style={{ fontSize: "clamp(30px, 4.5vw, 52px)", textWrap: "balance" }}
          >
            SEO integrado en cada sitio, desde el primer día.
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[480px]">
            No vendo diseño web. No vendo SEO. Vendo el resultado: un sitio que
            posiciona en Google y convierte visitas en clientes desde el
            lanzamiento.
          </p>
        </FadeIn>

        {/* Bento grid — single column on mobile (document order), named-area bento from lg: up */}
        <div
          className="grid gap-5 grid-cols-1 lg:grid-cols-3
            lg:[grid-template-areas:'featured_featured_mid-a'_'featured_featured_mid-b'_'wide_wide_wide']"
        >
          {/* Featured — dark, oversized */}
          <div className="lg:[grid-area:featured]">
          <FadeIn className="h-full">
            <Tilt max={3} lift={4} className="h-full">
            <Link
              href={featured.href}
              className="group relative flex flex-col justify-between h-full min-h-[280px] bg-midnight rounded-3xl p-9 overflow-hidden"
            >
              <div
                className="absolute -right-16 -top-16 w-56 h-56 rounded-full opacity-[0.08] pointer-events-none"
                style={{ background: "radial-gradient(circle, var(--color-teal) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{featured.icon}</span>
                  <Badge variant={featured.accent}>{featured.price.split(" · ")[0]}</Badge>
                </div>
                <h3 className="font-jakarta font-extrabold text-white leading-[1.1] tracking-[-0.5px] mb-3" style={{ fontSize: "clamp(24px, 2.5vw, 32px)" }}>
                  {featured.title}
                </h3>
                <p className="font-sans text-slate-light text-[15px] leading-[1.75] max-w-[420px]">
                  {featured.description}
                </p>
              </div>
              <span className="font-jakarta font-bold text-teal text-sm inline-flex items-center gap-2 mt-8 group-hover:gap-3 transition-all duration-200">
                {featured.cta}
              </span>
            </Link>
            </Tilt>
          </FadeIn>
          </div>

          {/* Mid tiles — tinted background, no border */}
          <div className="lg:[grid-area:mid-a]">
          <FadeIn className="h-full" delay={0.1}>
            <Link
              href={midA.href}
              className="group flex flex-col justify-between h-full min-h-[130px] bg-teal-dim rounded-3xl p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-2xl">{midA.icon}</span>
                <Badge variant={midA.accent}>{midA.price.split(" · ")[0]}</Badge>
              </div>
              <div>
                <h3 className="font-jakarta font-bold text-text-dark text-[17px] mb-1">{midA.title}</h3>
                <span className="font-sans text-teal text-[13px] font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                  {midA.cta}
                </span>
              </div>
            </Link>
          </FadeIn>
          </div>

          <div className="lg:[grid-area:mid-b]">
          <FadeIn className="h-full" delay={0.18}>
            <Link
              href={midB.href}
              className="group flex flex-col justify-between h-full min-h-[130px] bg-amber-dim rounded-3xl p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-2xl">{midB.icon}</span>
                <Badge variant={midB.accent}>{midB.price.split(" ")[0]}</Badge>
              </div>
              <div>
                <h3 className="font-jakarta font-bold text-text-dark text-[17px] mb-1">{midB.title}</h3>
                <span className="font-sans text-amber text-[13px] font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                  {midB.cta}
                </span>
              </div>
            </Link>
          </FadeIn>
          </div>

          {/* Wide banner tile */}
          <div className="lg:[grid-area:wide]">
          <FadeIn className="h-full" delay={0.26}>
            <Link
              href={wide.href}
              className="group flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 h-full bg-warm-white rounded-3xl p-8"
            >
              <span className="text-3xl shrink-0">{wide.icon}</span>
              <div className="flex-1">
                <h3 className="font-jakarta font-bold text-text-dark text-[19px] mb-1.5">{wide.title}</h3>
                <p className="font-sans text-text-mid text-sm leading-[1.7] max-w-[520px]">{wide.description}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <Badge variant={wide.accent}>{wide.price.split(" ")[0]}</Badge>
                <span className="font-jakarta font-bold text-text-dark text-sm inline-flex items-center gap-2 group-hover:gap-3 group-hover:text-teal transition-all duration-200">
                  {wide.cta}
                </span>
              </div>
            </Link>
          </FadeIn>
          </div>
        </div>

        <FadeIn className="mt-10 text-center" delay={0.32}>
          <Link
            href="/servicios/"
            className="font-jakarta font-bold text-text-dark text-sm border-b border-text-dark/30 pb-0.5 hover:text-teal hover:border-teal transition-colors duration-200"
          >
            Ver todos los servicios y precios →
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
