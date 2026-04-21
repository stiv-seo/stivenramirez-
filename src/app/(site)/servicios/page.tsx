import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { ServicesHero } from "@/components/sections/servicios/ServicesHero";
import { ServicesBlock1 } from "@/components/sections/servicios/ServicesBlock1";
import { ServicesBlock2 } from "@/components/sections/servicios/ServicesBlock2";
import { ServicesBlock3 } from "@/components/sections/servicios/ServicesBlock3";
import { ServicesCTA } from "@/components/sections/servicios/ServicesCTA";

export const metadata: Metadata = {
  title: "Servicios SEO y Diseño Web · Stiven Ramírez",
  description:
    "Diseño web WordPress y Shopify con SEO integrado, SEO mensual y Google Ads. Freelance independiente para pymes en Medellín.",
  keywords: [
    "servicios seo diseño web colombia",
    "consultor seo colombia",
    "diseño web wordpress colombia",
    "shopify seo colombia",
    "google ads colombia",
  ],
  alternates: { canonical: "https://stivenramirez.com/servicios/" },
  openGraph: {
    title: "Servicios SEO y Diseño Web · Stiven Ramírez",
    description:
      "Diseño web con SEO integrado, SEO mensual y Google Ads. Todo en un solo contrato. Colombia.",
    url: "https://stivenramirez.com/servicios/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schemas = serviceSchema([
  {
    name: "Diseño Web WordPress con SEO",
    description: "Sitio profesional construido con arquitectura SEO, velocidad optimizada y on-page completo desde el primer día.",
    url: "https://stivenramirez.com/servicios/diseno-web/wordpress/",
    provider: "Stiven Ramírez",
    areaServed: "Colombia",
    price: "Desde $3.500.000 COP",
  },
  {
    name: "Tienda Shopify con SEO",
    description: "E-commerce con SEO de productos, pasarelas de pago locales y optimización de conversión incluida.",
    url: "https://stivenramirez.com/servicios/diseno-web/shopify/",
    provider: "Stiven Ramírez",
    areaServed: "Colombia",
    price: "Desde $3.000.000 COP",
  },
  {
    name: "SEO Continuo Mensual",
    description: "Posicionamiento orgánico mes a mes con estrategia, contenido y resultados medibles.",
    url: "https://stivenramirez.com/servicios/seo/",
    provider: "Stiven Ramírez",
    areaServed: "Colombia",
    price: "Desde $1.300.000 COP/mes",
  },
  {
    name: "Google Ads y Meta Ads",
    description: "Campañas pagadas en Google y redes sociales sin porcentaje sobre el presupuesto publicitario.",
    url: "https://stivenramirez.com/servicios/pauta/",
    provider: "Stiven Ramírez",
    areaServed: "Colombia",
    price: "Desde $1.500.000 COP/mes",
  },
]);

export default function ServiciosPage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServicesHero />
      <ServicesBlock1 />
      <ServicesBlock2 />
      <ServicesBlock3 />
      <ServicesCTA />
    </>
  );
}
