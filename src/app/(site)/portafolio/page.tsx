import type { Metadata } from "next";
import { PortfolioHero } from "@/components/sections/portafolio/PortfolioHero";
import { PortfolioGrid } from "@/components/sections/portafolio/PortfolioGrid";
import { PortfolioProcess } from "@/components/sections/portafolio/PortfolioProcess";
import { PortfolioCTA } from "@/components/sections/portafolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Portafolio de Diseño Web y SEO en Colombia",
  description:
    "Casos reales de diseño web y SEO en Colombia: e-commerce Shopify, WordPress para pymes, con alcance y resultados verificables por cliente.",
  keywords: [
    "portafolio diseño web seo colombia",
    "casos de estudio seo colombia",
    "resultados seo diseño web",
    "diseño web colombia resultados",
    "agencia seo colombia portafolio",
  ],
  alternates: { canonical: "https://stivenramirez.com/portafolio/", languages: { "es-CO": "https://stivenramirez.com/portafolio/", "x-default": "https://stivenramirez.com/portafolio/" } },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Portafolio SEO y Diseño Web Colombia",
    description:
      "E-commerce Shopify y WordPress local en Colombia. Casos reales, con alcance y resultados verificables.",
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
