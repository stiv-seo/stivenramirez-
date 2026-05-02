import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageMidCTA } from "@/components/sections/subpage/SubpageMidCTA";
import { LossSection } from "@/components/sections/subpage/LossSection";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { SubpageFAQ } from "@/components/sections/subpage/SubpageFAQ";
import { SubpageRelated } from "@/components/sections/subpage/SubpageRelated";
import { StatCard } from "@/components/ui/StatCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "SEO para WordPress · Freelance Medellín",
  description:
    "WordPress optimizado para Google: SEO técnico, velocidad y contenido estratégico. Freelance independiente en Medellín, Colombia.",
  keywords: ["seo wordpress colombia", "optimizar wordpress seo", "posicionar wordpress google colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/seo/wordpress/" },
  openGraph: {
    title: "SEO para WordPress Colombia",
    description: "WordPress optimizado para Google: técnico, contenido y velocidad. Colombia.",
    url: "https://stivenramirez.com/servicios/seo/wordpress/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "SEO para WordPress",
  description: "Optimización SEO técnica y de contenido para sitios WordPress en Colombia.",
  url: "https://stivenramirez.com/servicios/seo/wordpress/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $1.300.000 COP/mes",
}]);

export default function SeoWordPressPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="SEO WordPress · Colombia"
        title="SEO para WordPress"
        titleAccent="sin plugins que prometen todo."
        subtitle="Yoast o RankMath son herramientas, no estrategias. Un sitio WordPress con SEO real necesita arquitectura, contenido y velocidad trabajados por alguien que entiende cómo piensa Google."
        breadcrumbCurrent="SEO WordPress"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="WordPress optimizado para Google de verdad"
        subtitle="Más allá del semáforo verde de Yoast."
        features={[
          { icon: "⚙️", title: "SEO técnico WordPress", description: "Configuración de permalinks, canonicals, hreflang, XML sitemap y robots.txt. Los cimientos que Yoast no configura solo." },
          { icon: "🚀", title: "Velocidad WordPress", description: "Caché, CDN, compresión de imágenes, lazy loading y eliminación de plugins lentos. Core Web Vitals en verde." },
          { icon: "📝", title: "Estrategia de contenido", description: "Mapa de posts y páginas por cluster de keywords. Cada artículo apunta a una intención de búsqueda específica." },
          { icon: "🔗", title: "Enlazado interno", description: "Estructura de links internos que distribuye la autoridad hacia las páginas que quieres posicionar." },
        ]}
      />
      <SubpageMidCTA text="¿Tu WordPress tiene Yoast en verde pero no posiciona? Hablamos 30 minutos sin costo." />
      <LossSection
        eyebrow="02 — El problema"
        title="WordPress con Yoast vs. WordPress con SEO real"
        lossColumn={{
          icon: "😰",
          heading: "WordPress sin estrategia SEO",
          items: [
            { label: "Yoast verde ≠ SEO real", description: "El semáforo verde de Yoast solo valida metadatos básicos. No mide velocidad, autoridad ni arquitectura." },
            { label: "Plugins lentos que bajan el PageSpeed", description: "Cada plugin activo puede agregar scripts y CSS innecesarios. 15+ plugins = sitio lento en móvil." },
            { label: "Contenido sin mapa de keywords", description: "Artículos publicados sin objetivo = tráfico sin intención comercial. Escribir por escribir no posiciona." },
            { label: "Sin backlinks, sin autoridad de dominio", description: "Google no posiciona sitios sin credibilidad. El contenido solo no es suficiente." },
          ],
        }}
        gainColumn={{
          icon: "🚀",
          heading: "WordPress con SEO de verdad",
          items: [
            { label: "Técnico, velocidad y contenido trabajados juntos", description: "Los tres pilares del SEO atacados en paralelo cada mes con plan priorizado." },
            { label: "Core Web Vitals en verde en móvil", description: "Auditoría de plugins, caché configurado y imágenes optimizadas para pasar el umbral de Google." },
            { label: "Arquitectura de contenido por cluster", description: "Cada artículo apunta a una keyword con volumen real. El enlazado interno mueve autoridad donde importa." },
            { label: "Link building desde sitios colombianos", description: "Backlinks de calidad en tu sector sin spam ni granjas de links que penalicen el dominio." },
          ],
        }}
        bg="warm-white"
      />
      <SubpageProcess
        steps={[
          { number: "01", title: "Auditoría técnica WordPress", description: "Revisión de configuración, velocidad, indexación y errores en Search Console. Lista priorizada de correcciones." },
          { number: "02", title: "Optimización y contenido", description: "Correcciones técnicas, optimización de páginas existentes y plan de contenido nuevo por cluster." },
          { number: "03", title: "Medición y ajuste", description: "Seguimiento mensual de posiciones, tráfico y conversiones con reporte ejecutivo." },
        ]}
      />
      <section className="bg-off-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <FadeIn className="mb-8">
            <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-3">
              04 — Resultados
            </p>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px]"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
            >
              Qué esperar del SEO en WordPress
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-5 max-w-[780px]">
            <StatCard
              icon="⏱️"
              value="4–8"
              label="semanas para mejoras técnicas visibles"
              description="Desde la primera auditoría y correcciones implementadas"
              accent="teal"
            />
            <StatCard
              icon="📊"
              value="3–6"
              label="meses para tráfico orgánico estable"
              description="Para sitios existentes con contenido por optimizar"
              accent="teal"
            />
            <StatCard
              icon="🔗"
              value="DA40+"
              label="calidad objetivo de backlinks"
              description="Sin spam ni granjas de links que penalicen el dominio"
              accent="amber"
            />
          </div>
        </Container>
      </section>
      <SubpageFAQ
        bg="off-white"
        items={[
          {
            q: "¿Es suficiente instalar Yoast o RankMath para tener SEO en WordPress?",
            a: "No. Yoast y RankMath son herramientas que facilitan la implementación de algunos elementos SEO, pero no hacen el trabajo estratégico: no definen qué keywords necesitas, no corrigen problemas de velocidad, no construyen la arquitectura de contenido ni trabajan el enlazado interno. Son un punto de partida, no una estrategia.",
          },
          {
            q: "¿Cuánto tiempo tardan los resultados de SEO en WordPress?",
            a: "Para sitios nuevos, entre 3 y 6 meses para empezar a ver posiciones estables en keywords competidas. Para sitios con contenido existente que se optimiza, los cambios pueden reflejarse en 4 a 8 semanas. El SEO local y las keywords de nicho suelen posicionar más rápido.",
          },
          {
            q: "¿Los plugins de WordPress afectan el SEO negativamente?",
            a: "Sí, cuando hay muchos o cuando son pesados. Cada plugin que agrega scripts al front-end aumenta el tiempo de carga. Google penaliza los sitios lentos en mobile. Una auditoría de plugins suele ser uno de los primeros pasos en cualquier proyecto de SEO WordPress.",
          },
          {
            q: "¿Qué diferencia hay entre SEO on-page y SEO técnico en WordPress?",
            a: "El SEO on-page incluye la optimización del contenido: títulos, subtítulos, keywords, meta descriptions y estructura de cada página. El SEO técnico cubre la infraestructura: velocidad, canonicals, sitemap, robots.txt, indexación y Core Web Vitals. Ambos son necesarios; uno sin el otro no es suficiente.",
          },
          {
            q: "¿Necesito publicar contenido nuevo cada semana para posicionar en WordPress?",
            a: "No necesariamente. La frecuencia importa menos que la relevancia. Un artículo bien investigado y optimizado para una keyword específica puede generar tráfico durante años. Es mejor publicar un artículo sólido por mes que cuatro artículos superficiales por semana.",
          },
        ]}
      />
      <SubpageRelated
        bg="warm-white"
        title="¿Necesitas el sitio WordPress desde cero?"
        links={[
          {
            label: "WordPress con SEO",
            href: "/servicios/diseno-web/wordpress/",
            description: "WordPress construido con SEO integrado desde el primer día: arquitectura, velocidad y contenido optimizados.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Tu WordPress no posiciona?"
        title="WordPress que Google"
        titleLine2="quiere mostrar primero."
        subtitle="Compárteme tu URL. En 30 minutos identifico por qué no estás posicionando y qué hay que hacer."
      />
    </>
  );
}
