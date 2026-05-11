import type { Metadata } from "next";
import { collectionPageSchema } from "@/lib/schema";
import { PortfolioHero } from "@/components/sections/portafolio/PortfolioHero";
import { PortfolioGrid } from "@/components/sections/portafolio/PortfolioGrid";
import { PortfolioProcess } from "@/components/sections/portafolio/PortfolioProcess";
import { PortfolioCTA } from "@/components/sections/portafolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Portafolio | SEO y Diseño Web Colombia",
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
    title: "Portafolio | SEO y Diseño Web Colombia",
    description:
      "E-commerce Shopify, WordPress local y Google Ads. Métricas reales, sin pantallazos editados. Colombia.",
    url: "https://stivenramirez.com/portafolio/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const portfolioSchema = collectionPageSchema({
  name: "Portafolio SEO y Diseño Web Colombia",
  description:
    "Proyectos reales de SEO y diseño web en Medellín y Colombia. E-commerce Shopify, WordPress para pymes y Google Ads con métricas documentadas.",
  url: "https://stivenramirez.com/portafolio/",
  author: "Stiven Ramírez",
  items: [
    { name: "ModaOnline.co — Shopify + SEO", url: "https://stivenramirez.com/portafolio/moda-online/" },
    { name: "Restaurante El Centro — WordPress + SEO Local", url: "https://stivenramirez.com/portafolio/restaurante-el-centro/" },
    { name: "Clínica Dental — Google Ads", url: "https://stivenramirez.com/portafolio/clinica-dental/" },
  ],
});

export default function PortafolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioProcess />
      <PortfolioCTA />
    </>
  );
}
