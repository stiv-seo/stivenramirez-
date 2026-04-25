import type { Metadata } from "next";
import { creativeWorkSchema } from "@/lib/schema";
import { PortfolioHero } from "@/components/sections/portafolio/PortfolioHero";
import { PortfolioGrid } from "@/components/sections/portafolio/PortfolioGrid";
import { PortfolioProcess } from "@/components/sections/portafolio/PortfolioProcess";
import { PortfolioCTA } from "@/components/sections/portafolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Portafolio · SEO y Diseño Web Colombia",
  description:
    "Proyectos reales de SEO y diseño web en Medellín y Colombia. E-commerce Shopify, WordPress para pymes y Google Ads con métricas documentadas.",
  keywords: [
    "portafolio diseño web seo colombia",
    "casos de estudio seo colombia",
    "resultados seo diseño web",
    "diseño web colombia resultados",
    "agencia seo colombia portafolio",
  ],
  alternates: { canonical: "https://stivenramirez.com/portafolio/" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Portafolio · SEO y Diseño Web Colombia · Stiven Ramírez",
    description:
      "E-commerce Shopify, WordPress local y Google Ads. Métricas reales, sin pantallazos editados. Colombia.",
    url: "https://stivenramirez.com/portafolio/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schemas = [
  creativeWorkSchema({
    name: "ModaOnline.co — Shopify + SEO",
    description:
      "Tienda Shopify con SEO integrado. Incremento del 45% en conversiones y 120% en tráfico orgánico.",
    url: "https://stivenramirez.com/portafolio/moda-online/",
    creator: "Stiven Ramírez",
    dateCreated: "2024-06-01",
  }),
  creativeWorkSchema({
    name: "Restaurante El Centro — WordPress + SEO Local",
    description:
      "Sitio WordPress con SEO local. Tráfico orgánico +280% y posición #1 en Google Maps.",
    url: "https://stivenramirez.com/portafolio/restaurante-el-centro/",
    creator: "Stiven Ramírez",
    dateCreated: "2024-03-01",
  }),
  creativeWorkSchema({
    name: "Clínica Dental — Google Ads",
    description:
      "Campañas Google Ads con ROAS de 3.8x y reducción del 40% en costo por lead.",
    url: "https://stivenramirez.com/portafolio/clinica-dental/",
    creator: "Stiven Ramírez",
    dateCreated: "2024-09-01",
  }),
];

export default function PortafolioPage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioProcess />
      <PortfolioCTA />
    </>
  );
}
