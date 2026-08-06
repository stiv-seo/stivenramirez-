import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { portfolioCases } from "@/data/portfolio";

export function PortfolioPreview() {
  return (
    <section
      className="bg-warm-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <Eyebrow>06 — Portafolio</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Resultados reales.<br />No mockups bonitos.
            </h2>
          </div>
          <Button variant="outline" href="/portafolio/">
            Ver todos →
          </Button>
        </FadeIn>

        {/* Cases grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioCases.map((c, i) => (
            <FadeIn key={c.id} delay={i * 0.1}>
              <Link
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block rounded-2xl overflow-hidden
                  hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Visual */}
                <div
                  className="w-full h-48 flex items-end p-6 relative overflow-hidden"
                  style={{ backgroundColor: c.bgColor }}
                >
                  {c.image && (
                    <Image
                      src={c.image}
                      alt={`Captura del sitio de ${c.client}`}
                      fill
                      className="object-cover object-top opacity-40"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-grid-dark opacity-60" />
                  <div className="relative z-10">
                    <Badge variant="teal">{c.services}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-warm-white border border-t-0 border-[rgba(0,0,0,0.05)] rounded-b-2xl p-6">
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-slate mb-2">
                    {c.category}
                  </p>
                  <h3 className="font-jakarta font-bold text-text-dark text-[19px] mb-4">
                    {c.client}
                  </h3>

                  {/* Metrics */}
                  <div className="flex gap-6 mb-5">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-jakarta font-extrabold text-teal text-xl leading-none">
                          {m.value}
                        </p>
                        <p className="font-sans text-slate text-xs mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <span className="font-jakarta font-bold text-teal text-sm group-hover:gap-2 transition-all">
                    Ver sitio en vivo →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
