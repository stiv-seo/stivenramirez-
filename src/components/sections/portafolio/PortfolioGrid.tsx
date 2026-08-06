import Link from "next/link";
import Image from "next/image";
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
          <Eyebrow>Casos de estudio</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Casos de estudio en construcción
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[500px]">
            Publico cada proyecto apenas se lanza, con el alcance real del trabajo. A medida que hay datos verificables (Search Console, GA4) los voy sumando aquí. Mientras tanto, mira el trabajo reciente en el <Link href="/blog/" className="text-teal underline underline-offset-2 hover:no-underline">blog</Link>.
          </p>
        </FadeIn>

        {portfolioCases.length === 0 && (
          <FadeIn delay={0.1} className="mt-8 rounded-2xl bg-warm-white p-10 text-center">
            <p className="font-sans text-text-mid leading-[1.75] max-w-[440px] mx-auto">
              Todavía no hay casos publicados con datos verificados. Si quieres ver ejemplos concretos de tu sector mientras tanto, <Link href="/contacto/" className="text-teal underline underline-offset-2 hover:no-underline">escríbeme directamente</Link>.
            </p>
          </FadeIn>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {portfolioCases.map((caso, i) => (
            <FadeIn key={caso.id} delay={i * 0.1}>
              <article className="group bg-warm-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">

                {/* Card header with bg color or real screenshot */}
                <div
                  className="relative flex items-end p-8 overflow-hidden"
                  style={{ backgroundColor: caso.bgColor, minHeight: "180px" }}
                >
                  {caso.image && (
                    <Image
                      src={caso.image}
                      alt={`Captura del sitio de ${caso.client}`}
                      fill
                      className="object-cover object-top opacity-40"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 70% 30%, #00C4B4 0%, transparent 60%)",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 0%, rgba(11,24,41,0.85) 100%)",
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

                {/* Metrics, o nota de alcance mientras no hay datos verificables */}
                {caso.metrics.length > 0 ? (
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
                ) : caso.scopeNote ? (
                  <div className="px-6 py-5 border-b border-[rgba(0,0,0,0.05)]">
                    <p className="font-sans text-[13px] text-text-mid leading-[1.6]">
                      {caso.scopeNote}
                    </p>
                  </div>
                ) : null}

                {/* CTA */}
                <div className="p-6 mt-auto">
                  <Link
                    href={caso.href}
                    target={caso.href.startsWith("http") ? "_blank" : undefined}
                    rel={caso.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between font-jakarta font-bold text-sm text-text-dark group-hover:text-teal transition-colors duration-150"
                    aria-label={`Ver sitio en vivo: ${caso.client}`}
                  >
                    <span>Ver sitio en vivo</span>
                    <span className="text-teal transition-transform duration-150 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* More coming */}
        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="font-sans text-sm text-slate">
            Más casos en camino —{" "}
            <Link
              href="/contacto/"
              className="text-teal underline underline-offset-2 hover:no-underline"
            >
              escríbeme si quieres ver ejemplos de tu sector
            </Link>
            .
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
