import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { SubpageMidCTA } from "@/components/sections/subpage/SubpageMidCTA";

export const metadata: Metadata = {
  title: "Diseño Web con SEO Integrado desde el Día 1 | Medellín",
  description:
    "Sitios web con SEO integrado desde el día 1: arquitectura, velocidad y contenido optimizados para Google. Freelance independiente en Medellín.",
  keywords: ["diseño web con seo colombia", "diseño web seo integrado", "sitio web posicionamiento google colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/diseno-web/seo/", languages: { "es-CO": "https://stivenramirez.com/servicios/diseno-web/seo/", "x-default": "https://stivenramirez.com/servicios/diseno-web/seo/" } },
  openGraph: {
    title: "Diseño Web con SEO Integrado desde el Día 1 | Medellín",
    description: "Sitio web que posiciona en Google desde el día 1. SEO integrado en diseño, velocidad y contenido.",
    url: "https://stivenramirez.com/servicios/diseno-web/seo/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Diseño Web con SEO integrado",
  description: "Sitios web construidos con arquitectura SEO, velocidad optimizada y contenido estratégico desde el día 1.",
  url: "https://stivenramirez.com/servicios/diseno-web/seo/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $3.500.000 COP | 3–4 semanas",
}]);

export default function DisenoWebSeoPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="Diseño Web | SEO Integrado"
        title="Diseño Web con SEO"
        titleAccent="integrado desde el día 1."
        subtitle="No diseño primero y luego 'le pongo SEO'. La arquitectura, las URLs, los textos y la velocidad se construyen juntos para que Google te encuentre desde el lanzamiento."
        breadcrumbCurrent="Diseño Web con SEO"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="SEO que no se agrega después"
        subtitle="Cada decisión de diseño es también una decisión de posicionamiento."
        features={[
          {
            icon: "🏗️",
            title: "Arquitectura SEO",
            description: "Estructura de URLs, jerarquía de páginas y menú de navegación pensados para que Google entienda de qué trata tu sitio.",
          },
          {
            icon: "⚡",
            title: "Velocidad optimizada",
            description: "Core Web Vitals por debajo del umbral verde: LCP < 2.5s, CLS < 0.1. Imágenes WebP, código limpio, sin plugins basura.",
          },
          {
            icon: "✍️",
            title: "Contenido con keywords",
            description: "Investigación de palabras clave antes de escribir una sola línea. Cada página tiene un objetivo de búsqueda claro.",
          },
          {
            icon: "📊",
            title: "Analytics desde el día 1",
            description: "Google Analytics 4 y Search Console conectados antes del lanzamiento. Empiezas midiendo desde la primera visita.",
          },
        ]}
      />
      <SubpageMidCTA text="¿Necesitas un sitio web que posicione en Google desde el primer día? Hablamos 30 minutos sin costo." />
      <SubpageProcess
        steps={[
          {
            number: "01",
            title: "Diagnóstico y estrategia",
            description: "Investigo las keywords de tu sector, analizo la competencia y defino qué páginas necesita tu sitio y con qué estructura.",
          },
          {
            number: "02",
            title: "Diseño + SEO simultáneo",
            description: "Construyo el sitio con las decisiones de SEO ya tomadas: URLs, H1s, textos, velocidad y datos estructurados.",
          },
          {
            number: "03",
            title: "Lanzamiento y medición",
            description: "Verifico la indexación en Search Console, confirmo que los Core Web Vitals están en verde y entrego todo documentado.",
          },
        ]}
      />
      <SubpageCTA
        title="Un sitio que posiciona"
        titleLine2="desde el primer día."
        subtitle="Agenda 30 minutos y te cuento exactamente qué keywords puede capturar tu sitio y cuánto tardarías en posicionar."
      />
    </>
  );
}
