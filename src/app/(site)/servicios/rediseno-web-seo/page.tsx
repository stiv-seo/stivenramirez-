import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";

export const metadata: Metadata = {
  title: "Rediseño Web sin perder SEO Colombia · Stiven Ramírez",
  description:
    "Rediseño de sitios web preservando el posicionamiento en Google. Migración con redirecciones 301, auditoría previa y cero pérdida de autoridad. Colombia.",
  keywords: ["rediseño web colombia", "rediseño web sin perder seo", "migración web colombia", "actualizar sitio web colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/rediseno-web-seo/" },
  openGraph: {
    title: "Rediseño Web sin perder SEO · Stiven Ramírez",
    description: "Rediseña tu sitio sin destruir el posicionamiento que tardaste años en construir. Colombia.",
    url: "https://stivenramirez.com/servicios/rediseno-web-seo/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Rediseño Web sin perder SEO",
  description: "Rediseño de sitios web con auditoría previa, plan de redirecciones y migración que preserva el posicionamiento en Google.",
  url: "https://stivenramirez.com/servicios/rediseno-web-seo/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $600 USD",
}]);

export default function RedisenoWebSeoPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="Rediseño Web · Sin perder posiciones"
        title="Rediseño Web"
        titleAccent="sin destruir tu SEO."
        subtitle="Un rediseño mal ejecutado puede borrar en semanas el posicionamiento que tardaste años en construir. Hago el rediseño con un plan de migración que protege cada posición."
        breadcrumbCurrent="Rediseño Web con SEO"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="El rediseño que no te da sustos en Google"
        subtitle="Antes de tocar una línea de código, sé exactamente qué URLs tiene autoridad y cómo preservarla."
        features={[
          {
            icon: "🔍",
            title: "Auditoría SEO previa",
            description: "Mapeo todas las URLs con tráfico y posiciones actuales antes de empezar. Nada se mueve sin un plan documentado.",
          },
          {
            icon: "🔀",
            title: "Redirecciones 301",
            description: "Cada URL que cambia tiene su redirección configurada. El 'link juice' y la autoridad acumulada se transfieren al sitio nuevo.",
          },
          {
            icon: "🎨",
            title: "Diseño renovado",
            description: "Nuevo diseño que representa mejor tu marca actual, con la estructura de contenido que Google ya conoce y valora.",
          },
          {
            icon: "✅",
            title: "Verificación post-lanzamiento",
            description: "Monitoreo Search Console los primeros 30 días para detectar caídas rápido. Si algo falla, lo corrijo de inmediato.",
          },
        ]}
      />
      <SubpageFeatures
        eyebrow="02 — El riesgo real"
        title="Por qué el rediseño es el momento más peligroso para tu SEO"
        subtitle="Estos son los errores más comunes en rediseños que destruyen el posicionamiento:"
        bg="warm-white"
        features={[
          {
            icon: "⚠️",
            title: "URLs que cambian sin redirigir",
            description: "Si /servicios-empresa.html se convierte en /servicios/ sin redirección 301, Google trata esa página como nueva y pierde toda su autoridad.",
          },
          {
            icon: "⚠️",
            title: "Contenido que desaparece",
            description: "Eliminar texto «para que quede más limpio» elimina también las keywords por las que posicionabas. Menos texto no siempre es mejor.",
          },
          {
            icon: "⚠️",
            title: "Velocidad que empeora",
            description: "Un diseño nuevo con animaciones pesadas o imágenes sin optimizar puede duplicar el tiempo de carga y hundir los Core Web Vitals.",
          },
        ]}
      />
      <SubpageProcess
        steps={[
          {
            number: "01",
            title: "Auditoría del sitio actual",
            description: "Documento todas las URLs con tráfico, sus posiciones y su contenido clave. Este mapa es la base de la migración.",
          },
          {
            number: "02",
            title: "Rediseño con mapa de migración",
            description: "Construyo el nuevo diseño respetando la estructura de contenido que Google conoce y preparando todas las redirecciones.",
          },
          {
            number: "03",
            title: "Migración y monitoreo",
            description: "Lanzo el nuevo sitio, activo las redirecciones y monitoreo Search Console 30 días para detectar y corregir cualquier pérdida.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Tu sitio necesita un cambio?"
        title="Rediseña sin miedo"
        titleLine2="a perder Google."
        subtitle="Cuéntame cuánto tráfico orgánico tiene tu sitio actual. En 30 minutos te digo si un rediseño tiene riesgo y cómo mitigarlo."
      />
    </>
  );
}
