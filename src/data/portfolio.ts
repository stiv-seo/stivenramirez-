import type { PortfolioCase, RedesignCase } from "@/types";

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
    image: "/images/portafolio/aya-hero.webp",
  },
  {
    id: "axis33",
    client: "Axis33",
    category: "Salud",
    services: "WordPress a medida · Reposicionamiento · Reservas online",
    metrics: [],
    scopeNote:
      "Reconstrucción completa de una clínica de fisioterapia en Brisbane (Australia) que se comunicaba como estudio de Pilates: 11 páginas, contenido real por servicio y reservas online conectadas al sistema real de la clínica. En producción desde octubre de 2026; las cifras de tráfico y reservas se suman en los próximos meses.",
    href: "https://axis33physio.com",
    bgColor: "#022A52",
    image: "/images/portafolio/axis33-hero.webp",
  },
  {
    id: "renovista",
    client: "Renovista",
    category: "Construcción",
    services: "WordPress · Tema a medida · Portafolio de proyectos",
    metrics: [],
    scopeNote:
      "Sitio para una firma de construcción y estructuración de Medellín, con tema propio sobre WordPress: cada proyecto tiene su ficha con galería y descripción que el cliente administra por su cuenta. En producción; las cifras de tráfico se suman cuando haya datos verificables.",
    href: "https://renovista.com.co",
    bgColor: "#0B1829",
    image: "/images/portafolio/renovista-hero.webp",
  },
  {
    id: "factum",
    client: "Factum & Asociados",
    category: "Servicios profesionales",
    services: "Next.js · Sitio multipágina · Blog · Simulador",
    metrics: [],
    scopeNote:
      "Firma contable de Sabaneta que pasó de una sola página con anclas a un sitio con una página por servicio, blog y un simulador. En producción; las cifras de tráfico y contactos se suman cuando haya datos verificables.",
    href: "https://factumasociados.com",
    bgColor: "#0B1829",
    image: "/images/portafolio/factum-hero.webp",
  },
];

// Rediseños con captura real del sitio anterior (tomada antes de empezar el
// proyecto) y del sitio en producción. Solo entran casos con un "antes" real.
export const redesignCases: RedesignCase[] = [
  {
    id: "the-loan-ranger",
    client: "The Loan Ranger",
    sector: "Créditos hipotecarios · Colorado, EE. UU.",
    services: "Next.js · Arquitectura SEO · Contenido",
    summary:
      "El sitio anterior, hecho en Wix, era una portada con un botón de «Apply» y casi nada de texto. El nuevo explica qué hace Max, para quién y en qué zonas, y pone la llamada a un clic.",
    changes: [
      "De Wix a un sitio propio en Next.js",
      "Páginas por tipo de crédito, por zona y guías para compradores",
      "La ilustración original de la marca se conservó como identidad",
    ],
    href: "https://theloanrangercolorado.com",
    before: "/images/portafolio/loan-ranger-antes.webp",
    after: "/images/portafolio/loan-ranger-despues.webp",
    width: 1400,
    height: 710,
  },
  {
    id: "oralmaax",
    client: "Oralmaax",
    sector: "Odontología y cirugía maxilofacial · Medellín",
    services: "WordPress a medida · Rediseño · Versión en inglés",
    summary:
      "La clínica tenía un sitio de plantilla con un carrusel y un mensaje genérico. El rediseño parte de lo que la diferencia: 30 años en Medellín y un equipo fijo de especialistas.",
    changes: [
      "Tema de WordPress hecho a medida, sin constructor visual",
      "Una página por servicio, con fotos reales del equipo y la clínica",
      "Versión en inglés para pacientes internacionales",
    ],
    href: "https://oralmaax.com.co",
    before: "/images/portafolio/oralmaax-antes.webp",
    after: "/images/portafolio/oralmaax-despues.webp",
    width: 1400,
    height: 545,
  },
];
