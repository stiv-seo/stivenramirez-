import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { portfolioCases } from "@/data/portfolio";

const categoryColors: Record<string, "teal" | "amber"> = {
  "E-commerce": "teal",
  "Negocio local": "amber",
  "Salud": "teal",
};

export function PortfolioGrid() {
  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-12">
          <Eyebrow>01 — Casos de estudio</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Resultados para negocios reales
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[500px]">
            Desde e-commerce hasta negocios locales — estrategias distintas, mismo enfoque en resultados.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolioCases.map((caso, i) => (
            <FadeIn key={caso.id} delay={i * 0.1}>
              <article className="group bg-warm-white rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

                {/* Card header with bg color */}
                <div
                  className="relative flex items-end p-8"
                  style={{ backgroundColor: caso.bgColor, minHeight: "180px" }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 70% 30%, #00C4B4 0%, transparent 60%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <Badge
                      variant={categoryColors[caso.category] ?? "teal"}
                      className="mb-3"
                    >
                      {caso.category}
                    </Badge>
                    <h3 className="font-jakarta font-bold text-white text-xl leading-tight">
                      {caso.client}
                    </h3>
                    <p className="font-sans text-[13px] text-slate-light mt-1">
                      {caso.services}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex border-b border-[rgba(0,0,0,0.05)]">
                  {caso.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex-1 px-6 py-5 text-center first:border-r first:border-[rgba(0,0,0,0.05)]"
                    >
                      <p className="font-jakarta font-extrabold text-teal text-2xl tracking-[-0.5px]">
                        {m.value}
                      </p>
                      <p className="font-sans text-[11px] text-text-mid mt-1 leading-tight">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-6 mt-auto">
                  <a
                    href={caso.href}
                    className="flex items-center justify-between font-jakarta font-bold text-sm text-text-dark group-hover:text-teal transition-colors duration-150"
                    aria-label={`Ver caso de estudio: ${caso.client}`}
                  >
                    <span>Ver caso completo</span>
                    <span className="text-teal transition-transform duration-150 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* More coming */}
        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="font-sans text-sm text-slate">
            Más casos en camino —{" "}
            <a
              href="/contacto/"
              className="text-teal underline underline-offset-2 hover:no-underline"
            >
              escríbeme si quieres ver ejemplos de tu sector
            </a>
            .
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
