import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { SubpageMidCTA } from "@/components/sections/subpage/SubpageMidCTA";
import { SubpageRelated } from "@/components/sections/subpage/SubpageRelated";

export const metadata: Metadata = {
  title: "Pauta Digital · Google & Meta Ads · Medellín",
  description:
    "Google Ads y Meta Ads para pymes en Medellín. Sin porcentaje sobre inversión. Freelance independiente con resultados medibles desde el primer mes.",
  keywords: ["pauta digital colombia", "publicidad digital colombia", "google ads meta ads colombia", "agencia pauta digital colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/pauta-digital/" },
  openGraph: {
    title: "Pauta Digital Colombia · Stiven Ramírez",
    description: "Google Ads y Meta Ads para pymes colombianas. Sin porcentaje sobre inversión. Resultados medibles.",
    url: "https://stivenramirez.com/servicios/pauta-digital/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Pauta Digital — Google Ads y Meta Ads",
  description: "Gestión de campañas en Google y redes sociales para pymes colombianas. Sin porcentaje sobre inversión publicitaria.",
  url: "https://stivenramirez.com/servicios/pauta-digital/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $1.500.000 COP/mes",
}]);

export default function PautaDigitalPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="Pauta Digital · Google y Meta"
        title="Pauta digital que"
        titleAccent="acelera mientras el SEO madura."
        subtitle="El SEO orgánico tarda meses en dar resultados. La pauta pagada genera leads desde el primer día. Los dos juntos es la estrategia más rentable para una pyme colombiana que quiere crecer rápido."
        breadcrumbCurrent="Pauta Digital"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="Campañas que trabajan, no que gastan"
        subtitle="La diferencia entre una campaña que genera ROI y una que quema presupuesto está en la estrategia inicial y la optimización continua."
        features={[
          {
            icon: "🎯",
            title: "Estrategia de canales",
            description: "No todas las empresas necesitan Google Ads y Meta Ads al mismo tiempo. Defino qué canal tiene más sentido según tu negocio, audiencia y presupuesto.",
          },
          {
            icon: "✍️",
            title: "Creatividades y copys",
            description: "Anuncios con textos que convierten y creatividades adaptadas a cada plataforma. Sin diseños genéricos de Canva sin estrategia detrás.",
          },
          {
            icon: "📊",
            title: "Optimización semanal",
            description: "Revisión y ajuste de pujas, audiencias y creatividades cada semana. Las campañas que no se tocan pierden eficiencia rápidamente.",
          },
          {
            icon: "💰",
            title: "Sin % sobre inversión",
            description: "Cobro tarifa fija mensual. Si decides subir el presupuesto publicitario, ese dinero va íntegro a tus anuncios, no a mi bolsillo.",
          },
        ]}
      />
      <SubpageMidCTA text="¿Tu presupuesto de pauta digital no genera los resultados esperados? Hablamos 30 minutos." />
      <SubpageProcess
        steps={[
          {
            number: "01",
            title: "Definición de estrategia",
            description: "Analizo tu negocio, competencia y audiencia objetivo. Defino qué canales usar, qué tipo de campaña y cuánto presupuesto publicitario mínimo tiene sentido.",
          },
          {
            number: "02",
            title: "Configuración y lanzamiento",
            description: "Estructura de campañas, grupos de anuncios, audiencias, tracking de conversiones y creatividades. Todo configurado antes de gastar un peso.",
          },
          {
            number: "03",
            title: "Optimización y reporte",
            description: "Ajustes semanales y reporte mensual con métricas que importan: costo por lead, ROAS, conversiones. Sin métricas de vanidad.",
          },
        ]}
      />
      <SubpageRelated
        bg="off-white"
        title="Elige el canal que necesitas"
        links={[
          {
            label: "Google Ads",
            href: "/servicios/google-ads/",
            description: "Campañas de búsqueda y display para capturar intención de compra activa en Google.",
          },
          {
            label: "Meta Ads",
            href: "/servicios/meta-ads/",
            description: "Campañas en Facebook e Instagram para generar demanda y alcanzar audiencias específicas.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Necesitas resultados mientras el SEO madura?"
        title="Pauta que genera leads"
        titleLine2="desde la primera semana."
        subtitle="Cuéntame tu presupuesto publicitario y tu objetivo. Te digo qué canal usaría y qué resultados son realistas."
      />
    </>
  );
}
