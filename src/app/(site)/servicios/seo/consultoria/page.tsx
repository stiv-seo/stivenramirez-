import type { Metadata } from "next";
import Link from "next/link";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageMidCTA } from "@/components/sections/subpage/SubpageMidCTA";
import { LossSection } from "@/components/sections/subpage/LossSection";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageFAQ } from "@/components/sections/subpage/SubpageFAQ";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { StatCard } from "@/components/ui/StatCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Consultor SEO Medellín — Sin Agencia",
  description:
    "SEO mensual directo conmigo, sin ejecutivos de cuenta ni contratos largos. Estrategia y resultados medibles para pymes en Medellín. Agenda una llamada gratis.",
  keywords: ["consultor seo medellin", "seo freelance colombia", "posicionamiento google medellin", "seo sin agencia colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/seo/consultoria/", languages: { "es-CO": "https://stivenramirez.com/servicios/seo/consultoria/", "x-default": "https://stivenramirez.com/servicios/seo/consultoria/" } },
  openGraph: {
    title: "Consultor SEO Freelance en Medellín — Sin Agencia",
    description: "SEO mensual directo conmigo, sin ejecutivos de cuenta ni contratos largos. Estrategia, contenido y resultados medibles.",
    url: "https://stivenramirez.com/servicios/seo/consultoria/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Consultoría SEO mensual",
  description: "Posicionamiento orgánico mes a mes con estrategia, contenido y resultados medibles para pymes en Medellín y Colombia.",
  url: "https://stivenramirez.com/servicios/seo/consultoria/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $1.300.000 COP/mes",
}]);

export default function SeoConsultoriaPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="SEO Continuo | Medellín"
        title="Consultoría SEO que"
        titleAccent="mueve el negocio."
        subtitle="No vendo posiciones en Google. Vendo tráfico orgánico calificado que se convierte en clientes. La diferencia está en la estrategia detrás de cada acción."
        breadcrumbCurrent="Consultoría SEO"
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
      <SubpageMidCTA text="¿Tu sitio no aparece en Google aunque tienes buen contenido? Hablamos 30 minutos sin costo." />
      <LossSection
        eyebrow="02 — La diferencia"
        title="SEO sin estrategia vs. consultoría SEO con resultados"
        lossColumn={{
          icon: "😰",
          heading: "SEO sin consultor ni estrategia",
          items: [
            { label: "Posiciones cayendo sin saber por qué", description: "Google actualiza su algoritmo constantemente. Sin monitoreo activo, no sabes cuándo ni por qué bajaste." },
            { label: "Contenido publicado sin keywords objetivo", description: "Artículos escritos 'por instinto' sin volumen de búsqueda real = tráfico cero o audiencia incorrecta." },
            { label: "Sin backlinks = sin autoridad de dominio", description: "Google no posiciona sitios sin credibilidad externa. El contenido solo no es suficiente para competir." },
            { label: "Sin reporte = sin saber qué funciona", description: "Invertir en SEO sin medir es como hacer ejercicio con los ojos cerrados. No sabes si avanzas." },
          ],
        }}
        gainColumn={{
          icon: "🚀",
          heading: "Consultoría SEO mensual con plan",
          items: [
            { label: "Auditoría técnica + plan priorizado desde mes 1", description: "Primero corrijo lo que frena a Google, luego construimos sobre una base sólida." },
            { label: "Cada pieza de contenido apunta a una intención real", description: "Keywords con volumen y con intención comercial. Contenido que atrae a quien puede comprar." },
            { label: "Link building de calidad desde sitios colombianos", description: "Backlinks desde medios y directorios relevantes de tu sector. Sin spam, sin riesgos." },
            { label: "Reporte mensual con posiciones, tráfico y conversiones", description: "Cada mes sabes exactamente qué avanzó, qué falta y cuál es el plan para el siguiente mes." },
          ],
        }}
        bg="warm-white"
      />

      {/* Contenido adicional — timeline y metodología */}
      <section className="bg-off-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <div className="max-w-[720px] mx-auto">
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px] mb-4"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              ¿Cuánto tiempo tarda el SEO en generar resultados?
            </h2>
            <p className="font-sans text-text-mid leading-[1.85] mb-5 text-[16px]">
              La respuesta honesta: entre 3 y 6 meses para las primeras posiciones visibles. Si tu sitio ya tiene autoridad —años online, backlinks de calidad—, el proceso es más rápido. Si partes de cero, es más lento. Mes 1 y 2 son de correcciones técnicas y base de contenido. Mes 2-3 empiezan a aparecer posiciones en página 2. Mes 4-6, las palabras clave de menor competencia entran a página 1. Las de alta competencia pueden tomar entre 9 y 12 meses.
            </p>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px] mb-4"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              El SEO no es "escribe contenido y espera"
            </h2>
            <p className="font-sans text-text-mid leading-[1.85] text-[16px]">
              El mayor malentendido es pensar que SEO es publicar artículos y esperar que Google los indexe. SEO real es un ciclo: investigar qué buscan en tu mercado, escribir contenido que responda mejor que tus competidores, conseguir enlaces desde sitios de autoridad, monitorear posiciones semana a semana y ajustar. Cada posición que ganas en Google es porque hiciste algo que tus competidores no hicieron. Eso requiere inversión continua, no un pago único.
            </p>
            <p className="font-sans text-text-mid leading-[1.85] mt-5 text-[16px]">
              Trabajo desde el Valle de Aburrá (Sabaneta) y atiendo directamente negocios de{" "}
              <Link href="/seo/medellin/" className="text-teal underline underline-offset-2">
                SEO en Medellín
              </Link>{" "}
              y{" "}
              <Link href="/diseno-web/medellin/" className="text-teal underline underline-offset-2">
                diseño web en Medellín
              </Link>
              , además de todo el país de forma remota.
            </p>
          </div>
        </Container>
      </section>

      <SubpageProcess
        steps={[
          { number: "01", title: "Auditoría inicial", description: "Semana 1: auditoría técnica completa, mapa de keywords y análisis de competencia. La base de toda la estrategia." },
          { number: "02", title: "Ejecución mensual", description: "On-page, contenido y link building ejecutados según el plan priorizado por impacto esperado vs esfuerzo." },
          { number: "03", title: "Reporte y ajuste", description: "Último viernes del mes: reporte de resultados, análisis de qué funcionó y plan ajustado para el mes siguiente." },
        ]}
      />
      <section className="bg-warm-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <FadeIn className="mb-8">
            <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-3">
              04 — Resultados
            </p>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px]"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
            >
              Qué esperar de la consultoría SEO
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-5 max-w-[780px]">
            <StatCard
              icon="📅"
              value="3–6"
              label="meses para resultados medibles"
              description="Tráfico orgánico real para keywords con volumen de búsqueda"
              accent="teal"
            />
            <StatCard
              icon="📈"
              value="+120%"
              label="crecimiento promedio año 1"
              description="En clientes con sitios existentes y contenido por optimizar"
              accent="teal"
            />
            <StatCard
              icon="📋"
              value="0"
              label="contratos de permanencia forzados"
              description="Trabajo por trimestres renovables. Los resultados son el argumento"
              accent="amber"
            />
          </div>
        </Container>
      </section>
      <SubpageFAQ
        bg="off-white"
        items={[
          {
            q: "¿En cuánto tiempo veo resultados con SEO?",
            a: "Los primeros cambios técnicos son visibles en semanas, pero el tráfico orgánico real empieza a moverse entre el mes 3 y 6. Las keywords de baja competencia entran a página 1 antes; las de alta competencia pueden tomar 9-12 meses. SEO es una inversión con retorno creciente, no un interruptor.",
          },
          {
            q: "¿El SEO funciona para cualquier tipo de negocio?",
            a: "Funciona para negocios donde los clientes buscan en Google antes de comprar: servicios profesionales, e-commerce, salud, inmobiliaria, educación. Si tu negocio es B2B de nicho muy específico o sin volumen de búsqueda, Google Ads puede ser más directo en el corto plazo.",
          },
          {
            q: "¿Hay contrato de permanencia mínima?",
            a: "El SEO requiere mínimo 3 meses para mostrar resultados medibles. Trabajo con compromisos de 3 meses renovables, no contratos de un año. Después del primer trimestre, los resultados son el argumento para continuar.",
          },
          {
            q: "¿Puedo manejar el SEO yo mismo con Yoast o Rank Math?",
            a: "Yoast y Rank Math ayudan con el SEO básico on-page. Pero el SEO real incluye investigación de keywords, arquitectura de contenido, velocidad técnica y link building. Plugins no hacen eso automáticamente — son herramientas, no estrategia.",
          },
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
