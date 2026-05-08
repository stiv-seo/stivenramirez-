import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageFAQ } from "@/components/sections/subpage/SubpageFAQ";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { SubpageMidCTA } from "@/components/sections/subpage/SubpageMidCTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Google Ads para pymes | Medellín",
  description:
    "Google Ads para pymes en Medellín sin porcentaje sobre inversión. Configuración, optimización y reporte mensual. Freelance independiente.",
  keywords: ["google ads medellin", "google ads pymes colombia", "publicidad google medellin", "contratar google ads colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/pauta/google-ads/" },
  openGraph: {
    title: "Google Ads para pymes | Medellín",
    description: "Aparece primero en Google cuando te buscan. Sin porcentaje sobre inversión. Freelance en Medellín.",
    url: "https://stivenramirez.com/servicios/pauta/google-ads/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Google Ads para Pymes",
  description: "Gestión de campañas Google Ads para pymes en Medellín y Colombia. Sin porcentaje sobre inversión publicitaria.",
  url: "https://stivenramirez.com/servicios/pauta/google-ads/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $1.500.000 COP/mes",
}]);

export default function GoogleAdsPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="Google Ads | Búsqueda y Display"
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
      <SubpageMidCTA text="¿Tienes una cuenta Google Ads activa que no genera los resultados esperados? Hablamos 30 minutos." />

      <section className="bg-warm-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <div className="max-w-[720px] mx-auto">
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px] mb-4"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              ¿Por qué Google Ads y no solo SEO?
            </h2>
            <p className="font-sans text-text-mid leading-[1.85] mb-8 text-[16px]">
              Google Ads y SEO no son competencia, son complemento. SEO es inversión a largo plazo que genera tráfico creciente pero tarda entre 3 y 6 meses en verse. Google Ads es inmediato: configurado bien, tu anuncio aparece mañana cuando alguien busca. Para pymes que necesitan leads ahora pero también quieren construir presencia orgánica, Google Ads acelera el timeline mientras el SEO escala. El modelo correcto es ambos: Ads genera ingresos hoy, esos ingresos financian el SEO de largo plazo.
            </p>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px] mb-4"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              Estructura típica de una cuenta Google Ads bien armada
            </h2>
            <p className="font-sans text-text-mid leading-[1.85] text-[16px]">
              Una cuenta sin estructura es presupuesto desperdiciado. La estructura correcta incluye campañas separadas por intención de búsqueda (marca, servicios generales, problemas específicos), grupos de anuncios por keyword con variaciones cercanas, y textos únicos para cada grupo que responden exactamente lo que la persona busca. Alguien que busca "Google Ads para tiendas online" requiere un anuncio distinto al que busca "cómo anunciarme en Google". Son búsquedas diferentes, con intenciones diferentes. Google Ads es un sistema de precisión: pequeños ajustes en estructura generan cambios enormes en el costo por lead.
            </p>
          </div>
        </Container>
      </section>

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
      <SubpageFAQ
        bg="off-white"
        items={[
          {
            q: "¿Cuánto presupuesto mínimo necesito para Google Ads?",
            a: "Para ver resultados en Colombia, recomiendo mínimo $1.500.000 COP/mes en inversión publicitaria (adicional al fee de gestión). Con menos, los datos tardan en acumularse y la optimización es lenta. Para sectores competitivos como seguros o inmobiliaria, el mínimo práctico es mayor.",
          },
          {
            q: "¿En cuánto tiempo veo resultados?",
            a: "Con cuenta bien estructurada, los primeros leads aparecen en los primeros días. Las primeras 2-3 semanas son de ajuste. Después del mes 1 ya tenemos datos para optimizar. Google Ads es inmediato comparado con SEO, pero también requiere paciencia en las primeras semanas de aprendizaje.",
          },
          {
            q: "¿Cobras porcentaje sobre la inversión publicitaria?",
            a: "No. Cobro un fee fijo de gestión mensual sin importar cuánto inviertas en pauta. Esto elimina el conflicto de interés de que te conviene gastar más. Mi incentivo es que tu costo por lead sea lo más bajo posible.",
          },
          {
            q: "¿Puedo pausar la campaña cuando quiera?",
            a: "Sí. Las campañas son tuyas — la cuenta de Google Ads queda a tu nombre desde el inicio. Puedes pausar en cualquier momento. Lo que recomiendo es no pausar en el primer mes porque interrumpe el aprendizaje del algoritmo y pierdes los datos acumulados.",
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
