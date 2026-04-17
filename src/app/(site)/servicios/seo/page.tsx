import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";

export const metadata: Metadata = {
  title: "Consultor SEO en Colombia · Stiven Ramírez",
  description:
    "Consultoría SEO mensual para pymes colombianas. Estrategia, contenido y link building con resultados medibles. Sin contratos largos.",
  keywords: ["consultor seo colombia", "seo colombia", "posicionamiento google colombia", "agencia seo colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/seo/" },
  openGraph: {
    title: "Consultor SEO Colombia · Stiven Ramírez",
    description: "SEO mensual con estrategia, contenido y resultados medibles. Pymes colombianas.",
    url: "https://stivenramirez.com/servicios/seo/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Consultoría SEO mensual",
  description: "Posicionamiento orgánico mes a mes con estrategia, contenido y resultados medibles para pymes en Colombia.",
  url: "https://stivenramirez.com/servicios/seo/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $500 USD/mes",
}]);

export default function SeoPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="SEO Continuo · Colombia"
        title="Consultoría SEO que"
        titleAccent="mueve el negocio."
        subtitle="No vendo posiciones en Google. Vendo tráfico orgánico calificado que se convierte en clientes. La diferencia está en la estrategia detrás de cada acción."
        breadcrumbCurrent="SEO Continuo"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="SEO sin métricas de vanidad"
        subtitle="Cada mes trabajamos en lo que mueve la aguja: posiciones, tráfico y conversiones."
        features={[
          { icon: "🔎", title: "Investigación de keywords", description: "Mapa de palabras clave actualizado según tu sector, estacionalidad y competencia. Atacamos primero las de mayor ROI." },
          { icon: "📄", title: "Optimización on-page", description: "Títulos, H1s, meta descriptions, estructura de contenido y datos estructurados revisados y optimizados cada mes." },
          { icon: "🔗", title: "Link building", description: "Construcción de enlaces de calidad desde sitios colombianos y del sector. Sin spam, sin granjas de links." },
          { icon: "📈", title: "Reporte mensual", description: "Dashboard con posiciones, tráfico orgánico, conversiones y comparativa mes anterior. Números que entienden los dueños de negocio, no solo los técnicos." },
        ]}
      />
      <SubpageProcess
        steps={[
          { number: "01", title: "Auditoría inicial", description: "Semana 1: auditoría técnica completa, mapa de keywords y análisis de competencia. La base de toda la estrategia." },
          { number: "02", title: "Ejecución mensual", description: "On-page, contenido y link building ejecutados según el plan priorizado por impacto esperado vs esfuerzo." },
          { number: "03", title: "Reporte y ajuste", description: "Último viernes del mes: reporte de resultados, análisis de qué funcionó y plan ajustado para el mes siguiente." },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Quieres crecer en Google?"
        title="SEO que genera clientes,"
        titleLine2="no solo tráfico."
        subtitle="Agenda 30 minutos. Te muestro en qué posiciones está tu sitio ahora y qué es realista lograr en 6 meses."
      />
    </>
  );
}
