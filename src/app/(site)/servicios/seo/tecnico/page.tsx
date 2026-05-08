import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { SubpageMidCTA } from "@/components/sections/subpage/SubpageMidCTA";

export const metadata: Metadata = {
  title: "SEO Técnico | Velocidad y Rastreo | Medellín",
  description:
    "SEO técnico en Medellín: velocidad, indexación, canonicals y Core Web Vitals. Para sitios que no posicionan a pesar del contenido.",
  keywords: ["seo tecnico colombia", "auditoria tecnica seo", "core web vitals colombia", "indexacion google colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/seo/tecnico/" },
  openGraph: {
    title: "SEO Técnico Colombia",
    description: "Velocidad, rastreo, indexación y datos estructurados. Los cimientos que el SEO necesita.",
    url: "https://stivenramirez.com/servicios/seo/tecnico/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "SEO Técnico",
  description: "Auditoría y corrección de problemas técnicos de SEO: velocidad, indexación, rastreo y datos estructurados.",
  url: "https://stivenramirez.com/servicios/seo/tecnico/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $1.200.000 COP",
}]);

export default function SeoTecnicoPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="SEO Técnico | Fundamentos"
        title="SEO Técnico:"
        titleAccent="los cimientos que sostienen todo."
        subtitle="El mejor contenido del mundo no posiciona si Google no puede rastrearlo, indexarlo y entenderlo. El SEO técnico es lo que hace posible que el resto del SEO funcione."
        breadcrumbCurrent="SEO Técnico"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="Cada capa técnica revisada"
        subtitle="De los Core Web Vitals al schema markup, sin dejar puntos ciegos."
        features={[
          { icon: "⚡", title: "Core Web Vitals", description: "LCP, FID/INP y CLS medidos y optimizados hasta alcanzar el umbral verde de Google. Velocidad real en móvil, no solo en escritorio." },
          { icon: "🤖", title: "Rastreo e indexación", description: "Verificación de robots.txt, sitemap, canonical tags y cobertura en Search Console. Cada página que debe indexarse, indexada." },
          { icon: "🏗️", title: "Arquitectura y URLs", description: "Estructura de URLs limpia, redirecciones correctas, sin cadenas ni loops, paginación correcta y canonicals bien configurados." },
          { icon: "📋", title: "Datos estructurados", description: "Schema markup implementado y validado: Organization, Service, Article, FAQ, BreadcrumbList. Rich snippets que mejoran el CTR." },
        ]}
      />
      <SubpageMidCTA text="¿Sospechas que problemas técnicos están frenando tu posicionamiento? Hablamos 30 minutos." />
      <SubpageProcess
        steps={[
          { number: "01", title: "Rastreo completo", description: "Crawl del sitio con herramientas profesionales (Screaming Frog + Semrush). Lista exhaustiva de problemas técnicos ordenados por impacto." },
          { number: "02", title: "Corrección priorizada", description: "Primero los problemas que bloquean la indexación, luego los que afectan la velocidad, luego los que limitan los rich snippets." },
          { number: "03", title: "Verificación y documentación", description: "Confirmación en Search Console de que las correcciones surtieron efecto. Entrega de informe técnico documentado." },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Tu sitio tiene problemas técnicos?"
        title="Los problemas técnicos"
        titleLine2="silenciosos que frenan tu SEO."
        subtitle="La mayoría de sitios tienen al menos 5 problemas técnicos que limitan su posicionamiento sin que el dueño lo sepa. ¿Los revisamos?"
      />
    </>
  );
}
