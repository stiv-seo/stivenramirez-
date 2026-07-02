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
  title: "WordPress con SEO | Freelance Medellín",
  description:
    "WordPress con SEO integrado: diseño personalizado, velocidad optimizada y posicionamiento desde el lanzamiento. Freelance para pymes en Medellín.",
  keywords: ["diseño web wordpress colombia", "wordpress seo colombia", "crear sitio wordpress colombia seo"],
  alternates: { canonical: "https://stivenramirez.com/servicios/diseno-web/wordpress/", languages: { "es-CO": "https://stivenramirez.com/servicios/diseno-web/wordpress/", "x-default": "https://stivenramirez.com/servicios/diseno-web/wordpress/" } },
  openGraph: {
    title: "WordPress con SEO | Freelance Medellín",
    description: "WordPress con SEO integrado desde el día 1. Velocidad, diseño y posicionamiento en un solo proyecto.",
    url: "https://stivenramirez.com/servicios/diseno-web/wordpress/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Diseño Web WordPress con SEO",
  description: "Sitio WordPress profesional con SEO integrado: tema personalizado, velocidad optimizada y posicionamiento desde el lanzamiento.",
  url: "https://stivenramirez.com/servicios/diseno-web/wordpress/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $3.500.000 COP | 3–4 semanas",
}]);

export default function DisenoWordPressSeoPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="WordPress | Diseño + SEO"
        title="Diseño Web WordPress"
        titleAccent="que posiciona en Google."
        subtitle="WordPress es la plataforma más usada del mundo —y la más mal configurada. Un sitio WordPress bien construido puede posicionar para decenas de keywords en pocos meses."
        breadcrumbCurrent="WordPress con SEO"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="WordPress sin compromisos de SEO"
        subtitle="Todo lo que un sitio WordPress necesita para competir en Google desde el día 1."
        features={[
          {
            icon: "🎨",
            title: "Tema personalizado",
            description: "Sin themes genéricos de $60. Diseño adaptado a tu marca con código limpio que no carga scripts innecesarios.",
          },
          {
            icon: "🔌",
            title: "Stack de plugins mínimo",
            description: "Solo los plugins necesarios: SEO, caché, seguridad. Sin bloat. Cada plugin extra es tiempo de carga que Google penaliza.",
          },
          {
            icon: "📝",
            title: "Contenido optimizado",
            description: "Textos escritos con keywords reales de tu mercado. Cada página tiene un H1 único, meta description trabajada y estructura clara.",
          },
          {
            icon: "🛡️",
            title: "Seguridad y mantenimiento",
            description: "WordPress seguro desde el inicio: SSL, backups, updates automáticas de core y plugins críticos. Tu sitio no se rompe a los 3 meses.",
          },
        ]}
      />
      <SubpageMidCTA text="¿Quieres un WordPress que posicione desde el primer día? Hablamos 30 minutos sin costo." />
      <LossSection
        eyebrow="02 — La diferencia"
        title="Un WordPress cualquiera vs. uno construido para Google"
        lossColumn={{
          icon: "😰",
          heading: "WordPress sin SEO desde el inicio",
          items: [
            { label: "Tema pesado con scripts de 4MB+", description: "Los temas multipropósito cargan todo aunque no lo uses. Móvil llega a 5+ segundos de carga." },
            { label: "Plugins instalados sin auditar", description: "Plugins acumulados que nadie revisa = vulnerabilidades y carga lenta garantizada." },
            { label: "Arquitectura sin keywords mapeadas", description: "Páginas creadas sin saber qué busca tu cliente. El SEO queda como tarea pendiente para después." },
            { label: "El SEO como 'extra' que se agrega después", description: "Retrofitear SEO a un sitio ya construido cuesta el doble de tiempo y da peores resultados." },
          ],
        }}
        gainColumn={{
          icon: "🚀",
          heading: "WordPress construido para Google",
          items: [
            { label: "Tema personalizado con código limpio", description: "Solo el código que necesitas. Sin scripts innecesarios. Carga rápida en móvil desde el inicio." },
            { label: "Stack mínimo de plugins auditados", description: "Cada plugin tiene un rol definido. Nada instalado por instalar. Sitio estable y liviano." },
            { label: "Keywords mapeadas antes de escribir código", description: "Cada página tiene un objetivo de búsqueda claro antes de diseñarse. El SEO es la arquitectura." },
            { label: "Core Web Vitals en verde desde el lanzamiento", description: "Entrego el sitio listo para posicionar: velocidad, metadatos y Search Console configurados." },
          ],
        }}
        bg="warm-white"
      />
      <SubpageProcess
        steps={[
          {
            number: "01",
            title: "Keywords y arquitectura",
            description: "Defino qué páginas necesita tu sitio y cuáles son las palabras clave objetivo antes de escribir una sola línea de código.",
          },
          {
            number: "02",
            title: "Desarrollo WordPress",
            description: "Construyo el tema, configuro el stack de plugins y optimizo la velocidad hasta alcanzar verde en Core Web Vitals.",
          },
          {
            number: "03",
            title: "SEO on-page y entrega",
            description: "Verifico metadatos, Schema markup, sitemap, robots.txt y Search Console. Entrego el sitio listo para indexar.",
          },
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
              Lo que recibes al final del proyecto
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-5 max-w-[780px]">
            <StatCard
              icon="📅"
              value="3–5"
              label="semanas de entrega"
              description="Para sitios de hasta 8 páginas con contenido optimizado"
              accent="teal"
            />
            <StatCard
              icon="⚡"
              value="90+"
              label="Score PageSpeed objetivo"
              description="En móvil desde el día del lanzamiento, no como promesa"
              accent="teal"
            />
            <StatCard
              icon="🎯"
              value="30+"
              label="keywords objetivo mapeadas"
              description="Antes de escribir una línea de código o contenido"
              accent="amber"
            />
          </div>
        </Container>
      </section>
      <SubpageFAQ
        bg="off-white"
        items={[
          {
            q: "¿Cuánto tiempo tarda en estar listo el sitio WordPress?",
            a: "Entre 3 y 5 semanas para un sitio de hasta 8 páginas. El proceso incluye la fase de keywords y arquitectura (semana 1), desarrollo y diseño (semanas 2-3), contenido y optimización SEO (semana 4) y revisiones finales antes de la entrega.",
          },
          {
            q: "¿Puedo actualizar el contenido yo mismo después de entregado?",
            a: "Sí. WordPress fue diseñado para que el dueño gestione su contenido sin conocimientos técnicos. Incluyo una sesión de capacitación de 1 hora donde te enseño a editar páginas, publicar artículos de blog y actualizar imágenes.",
          },
          {
            q: "¿El hosting y dominio están incluidos en el precio?",
            a: "No están incluidos, pero te ayudo a contratarlos y configurarlos. Recomiendo hosting en SiteGround o Cloudways para Colombia, con precios desde $15 USD/mes. El dominio .com cuesta alrededor de $15 USD/año.",
          },
          {
            q: "¿Por qué WordPress en lugar de Squarespace o Wix?",
            a: "WordPress permite un control total del código, un stack de plugins mínimo y optimizaciones de velocidad que Squarespace y Wix no permiten. Para SEO serio, WordPress es la única plataforma que da acceso completo a todos los factores técnicos que Google evalúa.",
          },
          {
            q: "¿Qué pasa si el sitio se daña o hay un problema de seguridad después?",
            a: "Los sitios que entrego incluyen configuración de backups automáticos diarios y medidas de seguridad básicas. Para mantenimiento continuo ofrezco un plan mensual de $150 USD que incluye actualizaciones, monitoreo y soporte técnico.",
          },
        ]}
      />
      <SubpageRelated
        bg="warm-white"
        title="¿Ya tienes el sitio y quieres posicionar?"
        links={[
          {
            label: "SEO para WordPress",
            href: "/servicios/seo/wordpress/",
            description: "Optimización técnica y de contenido para sitios WordPress existentes que no están posicionando.",
          },
          {
            label: "WordPress vs Shopify en Colombia: cuál elegir",
            href: "/blog/wordpress-vs-shopify-colombia/",
            description: "Comparativa honesta con precios reales en COP y el problema de las pasarelas de pago que nadie menciona.",
          },
        ]}
      />
      <SubpageCTA
        title="WordPress que trabaja para ti,"
        titleLine2="no al revés."
        subtitle="Cuéntame qué necesitas. En 30 minutos te digo qué páginas necesita tu sitio y cuánto costaría."
      />
    </>
  );
}
