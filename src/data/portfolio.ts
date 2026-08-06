import type { PortfolioCase } from "@/types";

// Sección en construcción — se agregan casos reales a medida que se documentan
// con métricas verificables (GSC, GA4) y permiso del cliente para publicarlas.
// Proyectos muy recientes se publican con alcance y capturas, sin métricas
// inventadas, hasta tener datos reales de tráfico/conversión (2-3 meses).
export const portfolioCases: PortfolioCase[] = [
  {
    id: "imporprex",
    client: "Imporprex",
    category: "E-commerce",
    services: "Shopify · Migración de tema · UX",
    metrics: [],
    scopeNote:
      "Migración completa del tema de PageFly (app de terceros) a Liquid nativo en Shopify: home, colección y ficha de producto rediseñadas. Lanzado julio 2026 — cifras de tráfico y conversión se suman en los próximos meses.",
    href: "https://imporprex.com",
    bgColor: "#0B1829",
    image: "/images/portafolio/imporprex-hero.webp",
  },
  {
    id: "aya",
    client: "AyA",
    category: "Negocio local",
    services: "WordPress · GeneratePress · Cotizador en vivo",
    metrics: [],
    scopeNote:
      "Sitio para compra y refinación de plata con calculadora de cotización en vivo, tema a medida sobre WordPress + GeneratePress. Lanzado recientemente — cifras de tráfico y conversión se suman en los próximos meses.",
    href: "https://ayasasmp.com",
    bgColor: "#0B1829",
  },
];
