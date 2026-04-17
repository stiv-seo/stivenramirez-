import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { SubpageRelated } from "@/components/sections/subpage/SubpageRelated";

export const metadata: Metadata = {
  title: "Auditoría SEO Colombia · Diagnóstico completo · Stiven Ramírez",
  description:
    "Auditoría SEO completa para sitios web colombianos. Diagnóstico técnico, análisis de keywords y plan de acción en 90 días. Desde $150 USD.",
  keywords: ["auditoria seo colombia", "auditoria seo gratis colombia", "diagnostico seo sitio web colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/auditoria-seo/" },
  openGraph: {
    title: "Auditoría SEO Colombia · Stiven Ramírez",
    description: "Diagnóstico técnico completo, análisis de keywords y plan de acción en 90 días para tu sitio.",
    url: "https://stivenramirez.com/servicios/auditoria-seo/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Auditoría SEO",
  description: "Diagnóstico SEO completo: técnico, keywords y competencia, con plan de acción en 90 días.",
  url: "https://stivenramirez.com/servicios/auditoria-seo/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $150 USD",
}]);

export default function AuditoriaSeoPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="Auditoría SEO · One-time"
        title="Saber exactamente"
        titleAccent="por qué no posicionas."
        subtitle="Antes de invertir en SEO mensual, necesitas saber dónde estás parado. La auditoría te da un diagnóstico honesto y un plan de acción priorizado — no una lista de 200 ítems sin contexto."
        breadcrumbCurrent="Auditoría SEO"
      />
      <SubpageFeatures
        eyebrow="01 — Qué entrega la auditoría"
        title="Un diagnóstico, no un informe de 80 páginas"
        subtitle="La auditoría termina con un plan de acción claro, no con más confusión."
        features={[
          { icon: "🔬", title: "Análisis técnico completo", description: "Velocidad, rastreo, indexación, canonical tags, redirecciones, schema markup y Search Console. Todo en una sola revisión." },
          { icon: "🔑", title: "Análisis de keywords", description: "Qué palabras clave tienen potencial para tu negocio, cuáles ya estás cerca de posicionar y cuáles ataca tu competencia." },
          { icon: "🏆", title: "Benchmark de competencia", description: "Qué están haciendo bien los 3 competidores que más posicionan en tu sector. Sus fortalezas son tu mapa de ruta." },
          { icon: "📋", title: "Plan de acción 90 días", description: "Lista priorizada de acciones: qué hacer primero, qué impacto esperar y cuánto tiempo tardaría cada mejora en verse en Google." },
        ]}
      />
      <SubpageProcess
        steps={[
          { number: "01", title: "Accesos y contexto", description: "Me das acceso a Search Console y GA4. Me cuentas tus objetivos de negocio. Sin eso, la auditoría sería ciega." },
          { number: "02", title: "Análisis profundo", description: "3-5 días hábiles de análisis técnico, de keywords y de competencia con herramientas profesionales (Semrush, Ahrefs, Screaming Frog)." },
          { number: "03", title: "Presentación y entrega", description: "Llamada de 45 minutos donde presento los hallazgos y el plan de acción. Entrego el informe completo en PDF + hoja de cálculo editable." },
        ]}
      />
      <SubpageRelated
        bg="off-white"
        title="¿Necesitas ir más a fondo?"
        links={[
          {
            label: "SEO Técnico",
            href: "/servicios/seo-tecnico/",
            description: "Corrección de los problemas técnicos identificados en la auditoría: velocidad, crawlability, canonicals y más.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Por qué no estás posicionando?"
        title="La respuesta está"
        titleLine2="en la auditoría."
        subtitle="$150 USD por saber exactamente qué frena tu SEO y qué hacer al respecto. Sin compromiso de continuar después."
      />
    </>
  );
}
