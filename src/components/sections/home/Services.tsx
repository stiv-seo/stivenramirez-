import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/data/services";

export function Services() {
  const [featured, ...rest] = services;

  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <Container>

        {/* Header — editorial asymmetric */}
        <FadeIn className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[4px] uppercase text-teal mb-4">
                01 — Servicios
              </p>
              <h2
                className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1.5px]"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                SEO integrado<br />en cada sitio.
              </h2>
            </div>
            <p className="font-sans text-text-mid leading-[1.75] max-w-[340px] lg:text-right">
              No vendas diseño web. No vendas SEO. Vende el resultado: un sitio que posiciona y convierte desde el día del lanzamiento.
            </p>
          </div>
        </FadeIn>

        {/* Asymmetric bento grid */}
        <div className="grid gap-4 lg:grid-cols-5 lg:grid-rows-2">

          {/* Featured card — large, col-span-3 row-span-2 */}
          <FadeIn className="lg:col-span-3 lg:row-span-2">
            <Link
              href={featured.href}
              className="group relative flex flex-col h-full rounded-[1.5rem] overflow-hidden bg-midnight border border-white/[0.07] hover:border-teal/25 p-8 min-h-[300px] lg:min-h-[380px]"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.18)", transition: "border-color 220ms ease-out" }}
            >
              {/* Ambient glow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute", top: "-80px", right: "-80px",
                  width: "320px", height: "320px", borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(0,196,180,0.10) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Accent tag */}
              <span className="inline-flex self-start items-center gap-1.5 rounded-full border border-teal/20 bg-teal/[0.08] px-3 py-1 font-sans text-[10px] font-semibold tracking-[2px] uppercase text-teal">
                <span className="w-1 h-1 rounded-full bg-teal" aria-hidden="true" />
                Más popular
              </span>

              <div className="mt-auto">
                <p className="font-sans text-[11px] font-semibold tracking-[2px] uppercase text-slate mb-4">
                  {featured.price}
                </p>
                <h3
                  className="font-jakarta font-extrabold text-white leading-[1.1] tracking-[-1px] mb-4"
                  style={{ fontSize: "clamp(24px, 2.8vw, 36px)" }}
                >
                  {featured.title}
                </h3>
                <p className="font-sans text-slate-light leading-[1.75] mb-8 max-w-[380px]">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-2 text-teal font-jakarta font-bold text-[14px]">
                  {featured.cta}
                </span>
              </div>
            </Link>
          </FadeIn>

          {/* Secondary cards — col-span-2 each */}
          {rest.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08} className="lg:col-span-2">
              <Link
                href={service.href}
                className="group relative flex flex-col h-full rounded-[1.25rem] bg-warm-white border border-black/[0.06] hover:border-teal/30 hover:-translate-y-0.5 hover:shadow-lg p-6 min-h-[180px]"
                style={{
                  transition: "border-color 220ms ease-out, transform 220ms cubic-bezier(0.32,0.72,0,1), box-shadow 220ms ease-out",
                }}
              >
                <p className="font-sans text-[10px] font-semibold tracking-[2px] uppercase text-slate mb-3">
                  {service.price}
                </p>
                <h3 className="font-jakarta font-bold text-text-dark text-[17px] leading-tight mb-3 flex-1">
                  {service.title}
                </h3>
                <p className="font-sans text-text-mid text-sm leading-[1.7] mb-5">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-teal font-jakarta font-bold text-[13px]">
                  {service.cta}
                </span>
              </Link>
            </FadeIn>
          ))}

        </div>

        <FadeIn className="mt-8 text-center" delay={0.2}>
          <Link
            href="/servicios/"
            className="inline-flex items-center gap-2 font-sans text-sm text-slate hover:text-teal"
            style={{ transition: "color 180ms ease-out" }}
          >
            Ver todos los servicios <span>→</span>
          </Link>
        </FadeIn>

      </Container>
    </section>
  );
}
