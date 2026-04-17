import type { PortfolioCase } from "@/types";

export const portfolioCases: PortfolioCase[] = [
  {
    id: "moda-online",
    client: "ModaOnline.co",
    category: "E-commerce",
    services: "Shopify + SEO",
    metrics: [
      { label: "Conversiones", value: "+45%" },
      { label: "Tráfico orgánico", value: "+120%" },
    ],
    href: "/portafolio/moda-online/",
    bgColor: "#0F2D52",
  },
  {
    id: "restaurante-el-centro",
    client: "Restaurante El Centro",
    category: "Negocio local",
    services: "WordPress + SEO Local",
    metrics: [
      { label: "Tráfico orgánico", value: "+280%" },
      { label: "Google Maps", value: "#1" },
    ],
    href: "/portafolio/restaurante-el-centro/",
    bgColor: "#0B1829",
  },
  {
    id: "clinica-dental",
    client: "Clínica Dental",
    category: "Salud",
    services: "Google Ads",
    metrics: [
      { label: "ROAS", value: "3.8x" },
      { label: "Costo por lead", value: "-40%" },
    ],
    href: "/portafolio/clinica-dental/",
    bgColor: "#0F2D52",
  },
];
