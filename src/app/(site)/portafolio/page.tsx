import type { Metadata } from "next";
import { PortfolioHero } from "@/components/sections/portafolio/PortfolioHero";
import { PortfolioGrid } from "@/components/sections/portafolio/PortfolioGrid";
import { PortfolioProcess } from "@/components/sections/portafolio/PortfolioProcess";
import { PortfolioCTA } from "@/components/sections/portafolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Portafolio SEO y Diseño Web Colombia",
  description:
    "Casos de estudio de SEO y diseño web en Medellín y Colombia, en construcción. E-commerce Shopify, WordPress para pymes y Google Ads verificables.",
  keywords: [
    "portafolio diseño web seo colombia",
    "casos de estudio seo colombia",
    "resultados seo diseño web",
    "diseño web colombia resultados",
    "agencia seo colombia portafolio",
  ],
  alternates: { canonical: "https://stivenramirez.com/portafolio/", languages: { "es-CO": "https://stivenramirez.com/portafolio/", "x-default": "https://stivenramirez.com/portafolio/" } },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Portafolio SEO y Diseño Web Colombia",
    description:
      "E-commerce Shopify, WordPress local y Google Ads. Casos de estudio con métricas verificables, en construcción. Colombia.",
    url: "https://stivenramirez.com/portafolio/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
    images: [{ url: "https://stivenramirez.com/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://stivenramirez.com/opengraph-image"],
  },
};

export default function PortafolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioProcess />
      <PortfolioCTA />
    </>
  );
}
