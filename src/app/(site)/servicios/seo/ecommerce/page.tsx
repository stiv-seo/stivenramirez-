import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { SubpageMidCTA } from "@/components/sections/subpage/SubpageMidCTA";

export const metadata: Metadata = {
  title: "SEO para E-commerce | Freelance Medellín",
  description:
    "SEO para tiendas online en Colombia: categorías, productos y velocidad optimizados. Freelance para pymes y e-commerce en Medellín.",
  keywords: ["seo ecommerce colombia", "seo tienda online colombia", "posicionar ecommerce google colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/seo/ecommerce/", languages: { "es-CO": "https://stivenramirez.com/servicios/seo/ecommerce/", "x-default": "https://stivenramirez.com/servicios/seo/ecommerce/" } },
  openGraph: {
    title: "SEO para E-commerce Colombia",
    description: "Tráfico orgánico para tu tienda online. Categorías, productos y velocidad optimizados.",
    url: "https://stivenramirez.com/servicios/seo/ecommerce/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "SEO para E-commerce",
  description: "Posicionamiento orgánico para tiendas online en Colombia. Categorías, productos y contenido optimizados.",
  url: "https://stivenramirez.com/servicios/seo/ecommerce/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $2.000.000 COP/mes",
}]);

export default function SeoEcommercePage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="SEO E-commerce | Colombia"
        title="SEO para e-commerce"
        titleAccent="que reduce el costo por venta."
        subtitle="Un e-commerce que no posiciona en Google paga cada venta con pauta. Cada posición orgánica ganada es una venta que ya no cuesta dinero en anuncios."
        breadcrumbCurrent="SEO E-commerce"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="SEO de e-commerce, desde las categorías hasta el checkout"
        subtitle="El SEO de una tienda online es diferente al de un sitio corporativo. Requiere estrategia de catálogo, no solo metadatos."
        features={[
          { icon: "🗂️", title: "Arquitectura de categorías", description: "Las páginas de categoría son el mayor activo SEO de un e-commerce. Defino la estructura con keywords reales antes de construir." },
          { icon: "📦", title: "SEO de productos", description: "Nombres únicos, descripciones originales, imágenes optimizadas y schema Product para rich snippets con precio y disponibilidad." },
          { icon: "🔄", title: "Gestión de out-of-stock", description: "Productos agotados sin 404, redirecciones correctas y señales de disponibilidad que no destruyen el SEO acumulado." },
          { icon: "🏪", title: "Contenido de soporte", description: "Blog y guías de compra que capturan búsquedas informacionales y llevan tráfico a las categorías con intención de compra." },
        ]}
      />
      <SubpageMidCTA text="¿Tu e-commerce paga cada venta con pauta? Hablamos 30 minutos para ver el potencial orgánico." />
      <SubpageProcess
        steps={[
          { number: "01", title: "Auditoría de catálogo", description: "Reviso la arquitectura actual, identifico canibalización de keywords entre productos y categorías, y mapeo oportunidades de tráfico." },
          { number: "02", title: "Optimización por prioridad", description: "Categorías con más volumen primero, luego productos estrella, luego contenido de soporte. El impacto en ventas guía el orden." },
          { number: "03", title: "Medición y escalado", description: "Reporte mensual de tráfico orgánico, conversiones y revenue atribuido a SEO. Escalamos lo que funciona." },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Tu e-commerce depende de pauta?"
        title="Tráfico orgánico que"
        titleLine2="no para cuando paras la pauta."
        subtitle="Compárteme tu tienda. Identifico las 3 páginas de categoría con más potencial de posicionamiento en 30 minutos."
      />
    </>
  );
}
