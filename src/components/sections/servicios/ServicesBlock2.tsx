import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const plans = [
  {
    id: "esencial",
    badge: { label: "Starter", variant: "teal" as const },
    name: "Plan Esencial",
    price: "$500",
    period: "USD/mes",
    description: "Para negocios que comienzan su estrategia SEO",
    features: [
      "8 keywords objetivo",
      "Reporte mensual",
      "On-page básico",
      "Link building (5/mes)",
      "Google Search Console",
      "Soporte email",
    ],
    cta: "Solicitar Esencial",
    ctaVariant: "outline" as const,
    dark: false,
  },
  {
    id: "profesional",
    badge: { label: "Más popular", variant: "amber" as const },
    name: "Plan Profesional",
    price: "$900",
    period: "USD/mes",
    description: "Para negocios que quieren dominar su categoría",
    features: [
      "20 keywords objetivo",
      "Reporte semanal",
      "On-page avanzado",
      "Link building (15/mes)",
      "Contenido SEO (2/mes)",
      "Google Ads básico",
      "Soporte WhatsApp",
    ],
    cta: "Solicitar Profesional",
    ctaVariant: "primary" as const,
    dark: true,
  },
  {
    id: "auditoria",
    badge: { label: "One-time", variant: "teal" as const },
    name: "Auditoría SEO",
    price: "$150",
    period: "USD",
    description: "Diagnóstico completo de tu sitio actual",
    features: [
      "Auditoría técnica completa",
      "Análisis de keywords",
      "Reporte de competencia",
      "Plan de acción 90 días",
      "Llamada de presentación",
    ],
    cta: "Solicitar Auditoría →",
    ctaVariant: "outline" as const,
    dark: false,
  },
];

const subServices = [
  { label: "SEO para Shopify",       href: "/servicios/seo-shopify/",   amber: false },
  { label: "SEO para WordPress",     href: "/servicios/seo-wordpress/", amber: false },
  { label: "SEO Local Colombia",     href: "/servicios/seo-local/",     amber: false },
  { label: "SEO para E-commerce",    href: "/servicios/seo-ecommerce/", amber: false },
  { label: "SEO Técnico",            href: "/servicios/seo-tecnico/",   amber: false },
  { label: "Auditoría SEO Gratuita", href: "/servicios/auditoria-seo/", amber: true  },
];

export function ServicesBlock2() {
  return (
    <section
      className="bg-warm-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-12">
          <Eyebrow>02 — SEO Continuo</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Planes SEO mensual
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[480px]">
            Para negocios que ya tienen sitio y quieren crecer en Google mes a mes.
          </p>
        </FadeIn>

        {/* Pricing grid */}
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {plans.map((plan, i) => (
            <FadeIn key={plan.id} delay={i * 0.08}>
              <div
                className={`rounded-2xl p-8 flex flex-col h-full border ${
                  plan.dark
                    ? "bg-midnight border-teal ring-2 ring-teal text-white"
                    : "bg-off-white border-[rgba(0,0,0,0.05)]"
                }`}
              >
                <Badge variant={plan.badge.variant} className="mb-4 self-start">
                  {plan.badge.label}
                </Badge>
                <h3
                  className={`font-jakarta font-bold text-[19px] mb-1 ${
                    plan.dark ? "text-white" : "text-text-dark"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`font-sans text-sm mb-5 ${
                    plan.dark ? "text-slate-light" : "text-text-mid"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1 mb-7">
                  <span
                    className={`font-jakarta font-extrabold text-4xl tracking-[-1px] ${
                      plan.dark ? "text-white" : "text-text-dark"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className={`font-sans text-sm ${plan.dark ? "text-slate-light" : "text-slate"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-2 font-sans text-sm ${
                        plan.dark ? "text-slate-light" : "text-text-mid"
                      }`}
                    >
                      <span className="text-teal text-xs shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.ctaVariant}
                  href="/contacto/"
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Sub-services */}
        <FadeIn delay={0.2} className="mt-16">
          <h3 className="font-jakarta font-bold text-text-dark text-[22px] mb-6">
            ¿Tienes necesidades específicas?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {subServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center justify-between bg-off-white rounded-xl p-4
                  border border-[rgba(0,0,0,0.05)] hover:border-teal hover:bg-teal/5
                  transition-all duration-150"
              >
                <span className="font-jakarta font-bold text-sm text-text-dark group-hover:text-teal transition-colors duration-150 flex items-center gap-2">
                  {s.label}
                  {s.amber && (
                    <Badge variant="amber" className="text-[8px] px-1.5 py-0.5">
                      Gratis
                    </Badge>
                  )}
                </span>
                <span className="text-slate group-hover:text-teal transition-colors duration-150 text-sm">
                  →
                </span>
              </Link>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
