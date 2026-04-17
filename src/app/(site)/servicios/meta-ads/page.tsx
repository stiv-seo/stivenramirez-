import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";

export const metadata: Metadata = {
  title: "Meta Ads Colombia · Facebook e Instagram · Stiven Ramírez",
  description:
    "Campañas Facebook e Instagram Ads para pymes colombianas. Audiencias precisas, creatividades que convierten y optimización semanal sin % sobre inversión.",
  keywords: ["meta ads colombia", "facebook ads colombia", "instagram ads colombia", "publicidad facebook colombia pymes"],
  alternates: { canonical: "https://stivenramirez.com/servicios/meta-ads/" },
  openGraph: {
    title: "Meta Ads Colombia · Facebook e Instagram · Stiven Ramírez",
    description: "Facebook e Instagram Ads para pymes. Audiencias precisas, creatividades que convierten.",
    url: "https://stivenramirez.com/servicios/meta-ads/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Meta Ads — Facebook e Instagram",
  description: "Gestión de campañas Facebook e Instagram para pymes colombianas. Sin porcentaje sobre inversión publicitaria.",
  url: "https://stivenramirez.com/servicios/meta-ads/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $1.500.000 COP/mes",
}]);

export default function MetaAdsPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="Meta Ads · Facebook e Instagram"
        title="Meta Ads:"
        titleAccent="llega a quien aún no te busca."
        subtitle="Google Ads captura demanda existente. Meta Ads crea demanda nueva. Si tu producto necesita ser visto para ser deseado, Facebook e Instagram son el canal correcto."
        breadcrumbCurrent="Meta Ads"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="Campañas Meta que escalan"
        subtitle="El error más común en Meta Ads es empezar con la audiencia equivocada. La segmentación lo es todo."
        features={[
          {
            icon: "🎯",
            title: "Estrategia de audiencias",
            description: "Audiencias por intereses, lookalike de tus mejores clientes y remarketing. Cada etapa del funnel con su audiencia y mensaje correcto.",
          },
          {
            icon: "🎨",
            title: "Creatividades que detienen el scroll",
            description: "Diseño de piezas para feed, stories y reels. Formatos probados con A/B testing para identificar qué imagen y copy convierte más.",
          },
          {
            icon: "⚙️",
            title: "Pixel y eventos configurados",
            description: "Pixel de Meta instalado correctamente con todos los eventos de conversión: vistas de producto, inicio de checkout, compras, leads.",
          },
          {
            icon: "🔄",
            title: "Remarketing activo",
            description: "Campañas que recuperan a quienes visitaron tu sitio o tu tienda sin comprar. El tráfico que ya pagaste, aprovechado al máximo.",
          },
        ]}
      />
      <SubpageProcess
        steps={[
          {
            number: "01",
            title: "Pixel y estrategia",
            description: "Verifico que el Pixel esté bien instalado y diseño la estructura de campañas: awareness, consideración y conversión.",
          },
          {
            number: "02",
            title: "Lanzamiento y aprendizaje",
            description: "Meta necesita entre 50-100 conversiones para salir de la fase de aprendizaje. Las primeras semanas son de datos, no de escalar.",
          },
          {
            number: "03",
            title: "Escala y optimización",
            description: "Con datos suficientes, escalo las audiencias y creatividades que convierten. Reporte mensual con costo por lead, ROAS y alcance.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Tu audiencia está en Instagram?"
        title="Llega a tus clientes"
        titleLine2="antes de que te busquen."
        subtitle="Dime qué vendes y quién es tu cliente ideal. Te digo si Meta Ads tiene sentido y qué presupuesto mínimo necesitas para ver resultados reales."
      />
    </>
  );
}
