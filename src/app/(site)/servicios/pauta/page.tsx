import type { Metadata } from "next";
import Link from "next/link";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageMidCTA } from "@/components/sections/subpage/SubpageMidCTA";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Pauta Digital | Google, Meta y TikTok Ads Medellín",
  description:
    "Google Ads, Meta Ads y TikTok Ads para pymes en Medellín. Sin porcentaje sobre inversión. Freelance independiente con resultados medibles desde el primer mes.",
  keywords: ["pauta digital colombia", "publicidad digital colombia", "google ads meta ads colombia", "tiktok ads colombia", "agencia pauta digital colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/pauta/" },
  openGraph: {
    title: "Pauta Digital Colombia",
    description: "Google Ads, Meta Ads y TikTok Ads para pymes colombianas. Sin porcentaje sobre inversión. Resultados medibles.",
    url: "https://stivenramirez.com/servicios/pauta/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Pauta Digital — Google Ads, Meta Ads y TikTok Ads",
  description: "Gestión de campañas en Google, Meta y TikTok para pymes colombianas. Sin porcentaje sobre inversión publicitaria.",
  url: "https://stivenramirez.com/servicios/pauta/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $1.500.000 COP/mes",
}]);

const channels = [
  {
    icon: "🔍",
    title: "Google Ads",
    description: "Aparece cuando alguien busca exactamente lo que vendes. Campañas de búsqueda y display con estructura correcta desde el inicio.",
    href: "/servicios/pauta/google-ads/",
    best: "Negocios con demanda activa",
  },
  {
    icon: "📱",
    title: "Meta y TikTok Ads",
    description: "Facebook, Instagram y TikTok para llegar a tu audiencia antes de que te busque. Audiencias precisas y lineamientos para creatividades que detienen el scroll.",
    href: "/servicios/pauta/meta-ads/",
    best: "Productos visuales y de consumo",
  },
];

export default function PautaHubPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="Pauta Digital | Google, Meta y TikTok"
        title="Pauta digital que"
        titleAccent="acelera mientras el SEO madura."
        subtitle="El SEO orgánico tarda meses en dar resultados. La pauta pagada genera leads desde el primer día. Los dos juntos es la estrategia más rentable para una pyme colombiana que quiere crecer rápido."
        breadcrumbCurrent="Pauta Digital"
      />
      <section className="bg-off-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <FadeIn className="mb-10">
            <Eyebrow>Elige tu canal</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Google Ads, Meta o TikTok: ¿cuál necesitas?
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-[1.7] mt-4 max-w-[560px]">
              No todas las empresas necesitan los dos canales. Defino cuál tiene más sentido según tu negocio, audiencia y presupuesto antes de gastar un peso.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5 max-w-[720px]">
            {channels.map((channel) => (
              <FadeIn key={channel.href}>
                <Link href={channel.href} className="block h-full">
                  <div className="bg-white rounded-2xl p-7 border border-[rgba(0,0,0,0.06)] hover:border-teal/30 hover:shadow-sm transition-all duration-200 h-full group">
                    <span className="text-4xl mb-5 block" aria-hidden="true">{channel.icon}</span>
                    <h3 className="font-jakarta font-bold text-text-dark text-[18px] mb-2 group-hover:text-teal transition-colors duration-150">
                      {channel.title}
                    </h3>
                    <p className="font-sans text-text-mid text-[14px] leading-[1.8] mb-4">
                      {channel.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-jakarta font-semibold text-slate text-[12px]">Mejor para: {channel.best}</span>
                      <span className="font-jakarta font-semibold text-teal text-[13px] group-hover:translate-x-1 transition-transform duration-150">
                        Ver detalle →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
      <SubpageFeatures
        eyebrow="Por qué pauta sin % sobre inversión"
        title="Campañas que trabajan, no que gastan"
        subtitle="La diferencia entre una campaña que genera ROI y una que quema presupuesto está en la estrategia inicial y la optimización continua."
        bg="warm-white"
        features={[
          {
            icon: "🎯",
            title: "Estrategia de canales",
            description: "No todas las empresas necesitan Google Ads y Meta Ads al mismo tiempo. Defino qué canal tiene más sentido según tu negocio, audiencia y presupuesto.",
          },
          {
            icon: "✍️",
            title: "Copys y lineamientos creativos",
            description: "Textos de anuncio que convierten y lineamientos estratégicos para tus creatividades (especificaciones técnicas, formatos y recomendaciones por plataforma). El diseño de piezas es un servicio adicional con planes de contenido separados.",
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
      <SubpageCTA
        eyebrow="¿Necesitas resultados mientras el SEO madura?"
        title="Pauta que genera leads"
        titleLine2="desde la primera semana."
        subtitle="Cuéntame tu presupuesto publicitario y tu objetivo. Te digo qué canal usaría y qué resultados son realistas."
      />
    </>
  );
}
