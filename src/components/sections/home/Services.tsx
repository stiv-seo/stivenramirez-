import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { services } from "@/data/services";

export function Services() {
  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        {/* Header */}
        <FadeIn className="mb-14">
          <Eyebrow>01 — Qué hago</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            SEO integrado en cada sitio.<br />Desde el primer día.
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[520px]">
            No vendas diseño web. No vendas SEO. Vende el resultado: un sitio que posiciona en Google y convierte visitas en clientes desde el día del lanzamiento.
          </p>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <div
                className="group relative bg-warm-white rounded-2xl p-8 flex flex-col h-full
                  border border-[rgba(0,0,0,0.05)]
                  hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Accent dot */}
                <div
                  className={`absolute top-6 right-6 w-2 h-2 rounded-full ${
                    service.accent === "teal" ? "bg-teal" : "bg-amber"
                  }`}
                />

                <div className="text-3xl mb-4">{service.icon}</div>

                <h3 className="font-jakarta font-bold text-text-dark text-[22px] mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-text-mid text-sm leading-[1.75] mb-6 flex-1">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[rgba(0,0,0,0.06)]">
                  <Badge variant={service.accent}>{service.price}</Badge>
                  <Button variant="ghost" href={service.href}>
                    {service.cta}
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer CTA */}
        <FadeIn className="mt-10 text-center" delay={0.3}>
          <Button variant="outline" size="md" href="/servicios/">
            Ver todos los servicios y precios →
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
