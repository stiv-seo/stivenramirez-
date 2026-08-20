import type { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CIUDADES } from "@/data/ciudades";

export const metadata: Metadata = {
  title: "SEO para Pymes en Medellín",
  description:
    "Consultoría SEO para pymes en Medellín: posicionamiento técnico, de contenido y local. Freelance sin agencia. Shopify, WordPress, e-commerce y más.",
  keywords: ["consultor seo medellin", "seo pymes colombia", "posicionamiento google medellin", "seo freelance medellin"],
  alternates: { canonical: "https://stivenramirez.com/servicios/seo/", languages: { "es-CO": "https://stivenramirez.com/servicios/seo/", "x-default": "https://stivenramirez.com/servicios/seo/" } },
  openGraph: {
    title: "SEO para pymes Medellín",
    description: "SEO mensual, técnico, local y de plataforma para pymes en Medellín. Sin agencia, sin permanencia forzada.",
    url: "https://stivenramirez.com/servicios/seo/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const services = [
  {
    icon: "🔎",
    title: "Consultoría SEO Mensual",
    description: "SEO continuo mes a mes: keywords, on-page, link building y reporte. Sin contratos de un año.",
    href: "/servicios/seo/consultoria/",
    price: "Desde $1.300.000 COP/mes",
  },
  {
    icon: "🛍️",
    title: "SEO para Shopify",
    description: "Colecciones, productos, velocidad y Core Web Vitals. El SEO específico de la plataforma que la mayoría ignora.",
    href: "/servicios/seo/shopify/",
    price: "Desde $1.300.000 COP/mes",
  },
  {
    icon: "🔌",
    title: "SEO para WordPress",
    description: "Más allá de Yoast: técnico, velocidad, arquitectura de contenido y link building real.",
    href: "/servicios/seo/wordpress/",
    price: "Desde $1.300.000 COP/mes",
  },
  {
    icon: "📍",
    title: "SEO Local",
    description: "Posiciona en Google Maps y búsquedas cercanas. Google Business Profile optimizado para el Local Pack.",
    href: "/servicios/seo/local/",
    price: "Desde $1.600.000 COP/mes",
  },
  {
    icon: "🗂️",
    title: "SEO E-commerce",
    description: "Categorías, productos y catálogo optimizados. Para tiendas online que pagan cada venta con pauta.",
    href: "/servicios/seo/ecommerce/",
    price: "Desde $2.000.000 COP/mes",
  },
  {
    icon: "⚙️",
    title: "SEO Técnico",
    description: "Core Web Vitals, rastreo, indexación y datos estructurados. Los cimientos que el resto del SEO necesita.",
    href: "/servicios/seo/tecnico/",
    price: "Desde $1.200.000 COP",
  },
  {
    icon: "🔬",
    title: "Auditoría SEO",
    description: "Diagnóstico técnico completo con plan de acción 90 días. Saber exactamente qué frena tu posicionamiento.",
    href: "/servicios/seo/auditoria/",
    price: "$550.000 COP",
  },
];

export default function SeoHubPage() {
  return (
    <>
      <SubpageHero
        eyebrow="SEO | Medellín"
        title="SEO para pymes"
        titleAccent="que posiciona en Google."
        subtitle="Consultoría SEO sin agencia. Trabajo solo, sin intermediarios, con estrategia real: técnico, contenido y links. Para el tipo de negocio que tienes, en la plataforma que usas."
        breadcrumbCurrent="SEO"
      />
      <section className="bg-off-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <FadeIn className="mb-10">
            <Eyebrow>Elige tu tipo de SEO</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              SEO para cada negocio y plataforma
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-[1.7] mt-4 max-w-[560px]">
              No hay una sola estrategia SEO. Elige según tu plataforma y tu objetivo, o cuéntame tu situación y te recomiendo por dónde empezar.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <FadeIn key={service.href}>
                <Link href={service.href} className="block h-full">
                  <div className="bg-white rounded-2xl p-6 border border-[rgba(0,0,0,0.06)] hover:border-teal/30 hover:shadow-sm transition-all duration-200 h-full group">
                    <span className="text-3xl mb-4 block" aria-hidden="true">{service.icon}</span>
                    <h3 className="font-jakarta font-bold text-text-dark text-[16px] mb-2 group-hover:text-teal transition-colors duration-150">
                      {service.title}
                    </h3>
                    <p className="font-sans text-text-mid text-[13px] leading-[1.8] mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-jakarta font-semibold text-slate text-[12px]">{service.price}</span>
                      <span className="font-jakarta font-semibold text-teal text-[12px] group-hover:translate-x-1 transition-transform duration-150">
                        Ver detalle →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <Container>
          <FadeIn>
            <Eyebrow>Ciudades</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px] mb-6"
              style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}
            >
              SEO local en tu ciudad
            </h2>
            <div className="flex flex-wrap gap-3">
              {CIUDADES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/seo/${c.slug}/`}
                  className="font-jakarta font-semibold text-[13px] text-text-mid hover:text-teal border border-[rgba(0,0,0,0.08)] hover:border-teal/30 rounded-full px-4 py-2 transition-colors duration-150"
                >
                  SEO en {c.nombre}
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>
      <SubpageCTA
        eyebrow="¿No sabes por dónde empezar?"
        title="30 minutos para saber"
        titleLine2="qué SEO necesitas."
        subtitle="Dime tu URL y tu objetivo. Te digo qué tipo de SEO tiene más sentido para tu negocio y qué resultados son realistas."
      />
    </>
  );
}
