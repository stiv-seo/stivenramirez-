import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "wordpress-seo",
    icon: "🌐",
    title: "Diseño Web WordPress con SEO",
    description:
      "Sitio profesional construido con arquitectura SEO, velocidad optimizada y on-page completo. Posiciona desde el día del lanzamiento.",
    price: "Desde $800 USD · 3–4 semanas",
    cta: "Ver qué incluye →",
    href: "/servicios/diseno-web-wordpress-seo/",
    accent: "teal",
  },
  {
    id: "shopify-seo",
    icon: "🛒",
    title: "Tienda Shopify con SEO",
    description:
      "E-commerce con SEO de productos, pasarelas de pago locales y optimización de conversión incluida desde el día 1.",
    price: "Desde $1.200 USD · 4–5 semanas",
    cta: "Ver qué incluye →",
    href: "/servicios/tienda-shopify-seo/",
    accent: "teal",
  },
  {
    id: "seo-mensual",
    icon: "📈",
    title: "SEO Continuo Mensual",
    description:
      "Para negocios que ya tienen sitio. Posicionamiento orgánico mes a mes con estrategia, contenido y resultados medibles.",
    price: "Desde $500 USD/mes",
    cta: "Ver planes →",
    href: "/servicios/seo/",
    accent: "amber",
  },
  {
    id: "ads",
    icon: "🎯",
    title: "Google & Social Ads",
    description:
      "Campañas pagadas para acelerar resultados mientras el SEO orgánico madura. Sin porcentaje sobre presupuesto.",
    price: "Desde $400 USD/mes",
    cta: "Ver planes →",
    href: "/servicios/pauta-digital/",
    accent: "amber",
  },
];
