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
  title: "SEO para Shopify | Freelance Medellín",
  description:
    "SEO para tiendas Shopify: colecciones, productos, velocidad y Core Web Vitals optimizados. Freelance independiente en Medellín, Colombia.",
  keywords: ["seo shopify colombia", "optimizar tienda shopify", "posicionar shopify google colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/seo/shopify/", languages: { "es-CO": "https://stivenramirez.com/servicios/seo/shopify/", "x-default": "https://stivenramirez.com/servicios/seo/shopify/" } },
  openGraph: {
    title: "SEO para Shopify Colombia",
    description: "Colecciones, productos y velocidad optimizados para que tu tienda Shopify aparezca en Google.",
    url: "https://stivenramirez.com/servicios/seo/shopify/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "SEO para Shopify",
  description: "Posicionamiento orgánico para tiendas Shopify: colecciones, productos, velocidad y contenido optimizados.",
  url: "https://stivenramirez.com/servicios/seo/shopify/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $1.300.000 COP/mes",
}]);

export default function SeoShopifyPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="SEO Shopify | E-commerce"
        title="SEO para Shopify"
        titleAccent="más allá de los metadatos."
        subtitle="Shopify tiene limitaciones de SEO que la mayoría ignora: URLs duplicadas, colecciones sin contenido, velocidad penalizada por apps. Las conozco todas y sé cómo solucionarlas."
        breadcrumbCurrent="SEO Shopify"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="SEO de Shopify de arriba a abajo"
        subtitle="Desde la arquitectura de colecciones hasta el schema de productos."
        features={[
          { icon: "🗂️", title: "Colecciones optimizadas", description: "Las páginas de categoría son el mayor activo SEO de un e-commerce. Cada colección con URL, descripción y metadatos trabajados." },
          { icon: "🛍️", title: "SEO de productos", description: "Títulos únicos, alt texts, schema Product con precio y disponibilidad para rich snippets en resultados de búsqueda." },
          { icon: "⚡", title: "Velocidad y Core Web Vitals", description: "Auditoría de apps, compresión de imágenes y optimización del tema para alcanzar verde en PageSpeed en móvil." },
          { icon: "✍️", title: "Contenido de categorías", description: "Texto SEO en colecciones que ayuda a Google a entender qué vendes y a los compradores a confirmar que están en el lugar correcto." },
        ]}
      />
      <SubpageMidCTA text="¿Tu tienda Shopify depende de pauta para cada venta? Hablamos 30 minutos sin costo ni compromiso." />
      <LossSection
        eyebrow="02 — El problema"
        title="Shopify sin SEO vs. Shopify optimizado"
        lossColumn={{
          icon: "😰",
          heading: "Sin SEO en Shopify",
          items: [
            { label: "URLs duplicadas sin resolver", description: "Shopify genera dos URLs por producto por defecto y Google no sabe cuál indexar." },
            { label: "Colecciones sin contenido", description: "Páginas vacías para bots = no posicionan para ninguna keyword de compra." },
            { label: "Apps que destrozan la velocidad", description: "Cada app activa agrega scripts. El móvil llega a 3+ segundos de carga fácilmente." },
            { label: "100% dependencia de pauta", description: "Cada venta cuesta dinero en Google Ads o Meta Ads. Nunca deja de costar." },
          ],
        }}
        gainColumn={{
          icon: "🚀",
          heading: "Con SEO Shopify bien hecho",
          items: [
            { label: "Colecciones indexadas con keywords de compra", description: "Las páginas que más tráfico generan posicionan para quien ya quiere comprar." },
            { label: "Rich snippets en productos", description: "Precio, disponibilidad y reseñas visibles en resultados de Google sin pagar por clic." },
            { label: "PageSpeed verde en móvil", description: "Auditoría de apps y optimización del tema para pasar los Core Web Vitals." },
            { label: "Tráfico orgánico creciente", description: "Cada mes más visitas sin costo adicional. SEO reduce el costo por venta mes a mes." },
          ],
        }}
        bg="warm-white"
      />
      <SubpageProcess
        steps={[
          { number: "01", title: "Auditoría Shopify", description: "Mapeo errores técnicos específicos de Shopify: duplicados, velocidad, estructura de colecciones y oportunidades de keywords." },
          { number: "02", title: "Optimización por prioridad", description: "Correcciones técnicas primero, luego colecciones con más tráfico potencial, luego productos estrella." },
          { number: "03", title: "Contenido y reporte", description: "Descripciones de colección, blog de la tienda y reporte mensual con tráfico orgánico y posiciones." },
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
              Lo que un Shopify bien optimizado produce
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-5 max-w-[780px]">
            <StatCard
              icon="📅"
              value="3–6"
              label="meses para posiciones estables"
              description="En colecciones con keywords reales y volumen de búsqueda"
              accent="teal"
            />
            <StatCard
              icon="⚡"
              value="90+"
              label="PageSpeed objetivo en móvil"
              description="Después de auditoría de apps y optimización del tema"
              accent="teal"
            />
            <StatCard
              icon="📈"
              value="$0"
              label="costo por clic orgánico"
              description="Cada posición ganada en Google no tiene costo adicional por visita"
              accent="amber"
            />
          </div>
        </Container>
      </section>
      <SubpageFAQ
        bg="off-white"
        items={[
          {
            q: "¿Cuánto tiempo tarda en verse el SEO en una tienda Shopify?",
            a: "Los primeros resultados suelen verse entre 2 y 3 meses después de la optimización. Las colecciones optimizadas con keywords reales son las primeras en posicionar. El tráfico orgánico sostenido normalmente se consolida entre los 4 y 6 meses.",
          },
          {
            q: "¿Puedo hacer SEO en Shopify sin cambiar el tema?",
            a: "Sí. La mayoría de optimizaciones (metadatos, descripciones de colección, schema, velocidad) se pueden hacer sin modificar el tema. Solo en casos donde el tema es muy lento o tiene errores estructurales graves conviene cambiar o ajustar el código del tema.",
          },
          {
            q: "¿Por qué el SEO de Shopify es diferente al de un sitio WordPress?",
            a: "Shopify genera URLs duplicadas por defecto para productos dentro de colecciones, tiene restricciones en robots.txt y depende mucho del rendimiento de las apps instaladas. Son problemas específicos de la plataforma que requieren soluciones específicas.",
          },
          {
            q: "¿Qué pasa con las URLs duplicadas de Shopify?",
            a: "Shopify genera dos URLs para cada producto: /products/nombre y /collections/coleccion/products/nombre. Google recibe una señal de canonical automática, pero no siempre es suficiente. La solución correcta incluye revisar que los canonicals apunten a la URL correcta y que la estructura de colecciones sea la que Google indexa.",
          },
          {
            q: "¿Necesita mi tienda Shopify un blog para posicionar?",
            a: "No es obligatorio, pero sí recomendado. Las colecciones capturan tráfico transaccional (quien ya quiere comprar) y el blog captura tráfico informacional (quien investiga antes de comprar). Juntos cubren todo el embudo. Con solo colecciones bien optimizadas ya puedes posicionar para keywords de compra.",
          },
        ]}
      />
      <SubpageRelated
        bg="warm-white"
        title="¿Necesitas la tienda desde cero?"
        links={[
          {
            label: "Shopify con SEO",
            href: "/servicios/diseno-web/shopify/",
            description: "Construcción completa: diseño, pasarelas de pago locales y SEO integrado desde el lanzamiento.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Tu tienda depende solo de pauta?"
        title="Shopify que vende"
        titleLine2="sin pagarle a Google cada clic."
        subtitle="Compárteme la URL de tu tienda. En 30 minutos te muestro los 5 problemas de SEO más urgentes que tiene."
      />
    </>
  );
}
