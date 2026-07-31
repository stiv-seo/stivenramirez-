import type { Metadata } from "next";
import Link from "next/link";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Diseño Web con SEO en Medellín",
  description:
    "Diseño web con SEO integrado para pymes en Medellín: WordPress, Shopify y rediseños que posicionan en Google desde el día 1. Freelance independiente.",
  keywords: ["diseño web medellin", "diseño web seo colombia", "wordpress shopify medellin", "diseño web pymes colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/diseno-web/", languages: { "es-CO": "https://stivenramirez.com/servicios/diseno-web/", "x-default": "https://stivenramirez.com/servicios/diseno-web/" } },
  openGraph: {
    title: "Diseño Web con SEO en Medellín",
    description: "WordPress, Shopify y rediseños con SEO integrado desde el día 1. Para pymes en Medellín.",
    url: "https://stivenramirez.com/servicios/diseno-web/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const services = [
  {
    icon: "🌐",
    title: "Diseño Web con SEO",
    description: "Sitios web construidos con arquitectura SEO, velocidad y contenido optimizados desde el día 1. Sin retrofitear SEO después.",
    href: "/servicios/diseno-web/seo/",
    price: "Desde $3.500.000 COP",
  },
  {
    icon: "🔌",
    title: "WordPress con SEO",
    description: "WordPress con tema personalizado, stack mínimo de plugins y Core Web Vitals en verde. Posiciona desde el lanzamiento.",
    href: "/servicios/diseno-web/wordpress/",
    price: "Desde $3.500.000 COP",
  },
  {
    icon: "🛍️",
    title: "Shopify con SEO",
    description: "Tienda Shopify con colecciones optimizadas, pasarelas de pago locales y SEO técnico correcto desde el inicio.",
    href: "/servicios/diseno-web/shopify/",
    price: "Desde $3.000.000 COP",
  },
  {
    icon: "🔄",
    title: "Rediseño Web sin perder SEO",
    description: "Renueva el diseño de tu sitio sin destruir el posicionamiento que tardaste años en construir. Auditoría + migración + monitoreo.",
    href: "/servicios/diseno-web/rediseno/",
    price: "Desde $2.800.000 COP",
  },
];

export default function DisenoWebHubPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Diseño Web | Medellín"
        title="Sitios web que posicionan"
        titleAccent="desde el primer día."
        subtitle="No diseño primero y luego 'le pongo SEO'. La arquitectura, las URLs, el contenido y la velocidad se construyen juntos para que Google te encuentre desde el lanzamiento."
        breadcrumbCurrent="Diseño Web"
      />
      <section className="bg-off-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <FadeIn className="mb-10">
            <Eyebrow>Elige tu proyecto</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Diseño web para pymes que quieren crecer en Google
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-[1.7] mt-4 max-w-[560px]">
              Cada plataforma tiene sus ventajas. Elige según tu tipo de negocio o cuéntame tu situación y te recomiendo cuál se adapta mejor.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <FadeIn key={service.href}>
                <Link href={service.href} className="block h-full">
                  <div className="bg-white rounded-2xl p-7 border border-[rgba(0,0,0,0.06)] hover:border-teal/30 hover:shadow-sm transition-all duration-200 h-full group">
                    <span className="text-4xl mb-5 block" aria-hidden="true">{service.icon}</span>
                    <h3 className="font-jakarta font-bold text-text-dark text-[18px] mb-2 group-hover:text-teal transition-colors duration-150">
                      {service.title}
                    </h3>
                    <p className="font-sans text-text-mid text-[14px] leading-[1.8] mb-5">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-jakarta font-semibold text-slate text-[13px]">{service.price}</span>
                      <span className="font-jakarta font-semibold text-teal text-[13px] group-hover:translate-x-1 transition-transform duration-150">
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
      <SubpageCTA
        eyebrow="¿No sabes cuál elegir?"
        title="30 minutos para saber"
        titleLine2="qué plataforma necesitas."
        subtitle="Cuéntame tu negocio, presupuesto y objetivo. Te digo qué plataforma usaría y por qué, sin compromiso."
      />
    </>
  );
}
