import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const wordpressIncludes = {
  seo: [
    "Arquitectura de URLs",
    "Keyword research",
    "On-page completo",
    "Schema markup",
    "Core Web Vitals",
    "Google Search Console",
  ],
  diseno: [
    "Diseño personalizado",
    "Elementor Pro",
    "Responsive design",
    "Velocidad optimizada",
    "Capacitación CMS",
    "30 días soporte",
  ],
};

const shopifyIncludes = {
  seo: [
    "SEO de productos",
    "SEO de colecciones",
    "Velocidad Shopify",
    "Structured data",
    "Keyword research",
    "Schema markup",
  ],
  tienda: [
    "Tema personalizado",
    "Pasarelas pago CO",
    "Gestión inventario",
    "Recuperación carrito",
    "Analytics integrado",
    "30 días soporte",
  ],
};

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 font-sans text-sm text-text-mid">
          <span className="text-teal text-xs shrink-0">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ServicesBlock1() {
  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-12">
          <Eyebrow>01 — Diseño Web con SEO</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Diseño Web con SEO integrado
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[560px]">
            El servicio por el que me contratan. No es diseño + SEO separado — es un proceso donde el SEO está en cada decisión de diseño desde el primer día.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card WordPress */}
          <FadeIn delay={0.05}>
            <div className="bg-warm-white rounded-2xl p-8 border border-[rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <Badge variant="teal" className="mb-4 self-start">
                Desde $800 USD · 3–4 semanas
              </Badge>
              <h3 className="font-jakarta font-bold text-text-dark text-[22px] mb-6">
                Diseño Web WordPress con SEO
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 flex-1">
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-slate mb-3">
                    SEO incluido
                  </p>
                  <CheckList items={wordpressIncludes.seo} />
                </div>
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-slate mb-3">
                    Diseño & Dev
                  </p>
                  <CheckList items={wordpressIncludes.diseno} />
                </div>
              </div>
              <div className="pt-7 mt-7 border-t border-[rgba(0,0,0,0.06)]">
                <Button variant="primary" href="/servicios/diseno-web-wordpress-seo/" className="w-full justify-center">
                  Solicitar proyecto →
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Card Shopify */}
          <FadeIn delay={0.1}>
            <div className="bg-warm-white rounded-2xl p-8 border border-[rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <Badge variant="teal" className="mb-4 self-start">
                Desde $1.200 USD · 4–5 semanas
              </Badge>
              <h3 className="font-jakarta font-bold text-text-dark text-[22px] mb-6">
                Tienda Shopify con SEO
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 flex-1">
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-slate mb-3">
                    SEO incluido
                  </p>
                  <CheckList items={shopifyIncludes.seo} />
                </div>
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-slate mb-3">
                    Tienda & Dev
                  </p>
                  <CheckList items={shopifyIncludes.tienda} />
                </div>
              </div>
              <div className="pt-7 mt-7 border-t border-[rgba(0,0,0,0.06)]">
                <Button variant="primary" href="/servicios/tienda-shopify-seo/" className="w-full justify-center">
                  Solicitar proyecto →
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
