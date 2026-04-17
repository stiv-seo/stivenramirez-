import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";

export const metadata: Metadata = {
  title: "Google Ads para Pymes Colombia · Stiven Ramírez",
  description:
    "Campañas Google Ads para pymes colombianas. Configuración, optimización y reporte sin porcentaje sobre la inversión publicitaria.",
  keywords: ["google ads colombia", "google ads pymes colombia", "publicidad google colombia", "contratar google ads colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/google-ads/" },
  openGraph: {
    title: "Google Ads para Pymes Colombia · Stiven Ramírez",
    description: "Aparece primero en Google cuando te buscan. Sin porcentaje sobre inversión.",
    url: "https://stivenramirez.com/servicios/google-ads/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Google Ads para Pymes",
  description: "Gestión de campañas Google Ads para pymes colombianas. Sin porcentaje sobre inversión publicitaria.",
  url: "https://stivenramirez.com/servicios/google-ads/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $400 USD/mes",
}]);

export default function GoogleAdsPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="Google Ads · Búsqueda y Display"
        title="Google Ads:"
        titleAccent="aparece cuando te buscan."
        subtitle="Google Ads es el único canal donde tu anuncio aparece exactamente cuando alguien busca lo que tú vendes. La intención de compra ya está ahí — el trabajo es no desperdiciarla."
        breadcrumbCurrent="Google Ads"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="Campañas Google Ads que convierten"
        subtitle="La mayoría de cuentas de Google Ads de pymes tienen el 80% del presupuesto mal gastado. Estructura correcta desde el inicio marca toda la diferencia."
        features={[
          {
            icon: "🔑",
            title: "Keyword research para Ads",
            description: "Selección de keywords con intención de compra real. Negativos bien configurados para no pagar clics de personas que no van a comprar.",
          },
          {
            icon: "📝",
            title: "Textos de anuncio que convierten",
            description: "Copys con propuesta de valor clara, extensiones configuradas (llamadas, sitelinks, reseñas) y A/B testing para mejorar el CTR.",
          },
          {
            icon: "📍",
            title: "Segmentación geográfica",
            description: "Campañas segmentadas por ciudad o zona para no pagar clics de personas que no pueden ser tus clientes.",
          },
          {
            icon: "📈",
            title: "Tracking de conversiones",
            description: "Configuración de conversiones reales: llamadas, formularios, compras. Sin tracking, no hay optimización posible.",
          },
        ]}
      />
      <SubpageProcess
        steps={[
          {
            number: "01",
            title: "Auditoría o configuración inicial",
            description: "Si ya tienes una cuenta, la audito. Si no, la construyo desde cero con la estructura correcta antes de gastar un peso.",
          },
          {
            number: "02",
            title: "Lanzamiento y primeras semanas",
            description: "Las primeras 2-3 semanas son de aprendizaje: ajusto pujas, pauso keywords que no convierten y refuerzo las que sí.",
          },
          {
            number: "03",
            title: "Optimización continua",
            description: "Revisión semanal de términos de búsqueda, ajuste de pujas por dispositivo y hora, y reporte mensual de costo por lead y ROAS.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Quieres leads desde esta semana?"
        title="Tu anuncio, primero"
        titleLine2="en Google mañana."
        subtitle="Dime qué vendes y tu presupuesto mensual. Te digo si Google Ads tiene sentido para ti y qué costo por lead es realista."
      />
    </>
  );
}
