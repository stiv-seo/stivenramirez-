import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { SubpageFAQ } from "@/components/sections/subpage/SubpageFAQ";
import { SubpageRelated } from "@/components/sections/subpage/SubpageRelated";

export const metadata: Metadata = {
  title: "Tienda Shopify con SEO Colombia · Stiven Ramírez",
  description:
    "E-commerce Shopify con SEO integrado: colecciones optimizadas, velocidad máxima y conversión desde el lanzamiento. Colombia.",
  keywords: ["tienda shopify colombia", "shopify seo colombia", "crear tienda shopify colombia", "ecommerce shopify colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/tienda-shopify-seo/" },
  openGraph: {
    title: "Tienda Shopify con SEO · Stiven Ramírez",
    description: "Shopify con SEO de colecciones, velocidad optimizada y pasarelas de pago locales. Colombia.",
    url: "https://stivenramirez.com/servicios/tienda-shopify-seo/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Tienda Shopify con SEO",
  description: "E-commerce Shopify con SEO integrado, pasarelas de pago locales y optimización de conversión desde el lanzamiento.",
  url: "https://stivenramirez.com/servicios/tienda-shopify-seo/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $3.000.000 COP · 4–5 semanas",
}]);

export default function TiendaShopifySeoPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="Shopify · E-commerce + SEO"
        title="Tienda Shopify con SEO"
        titleAccent="que vende y posiciona."
        subtitle="Una tienda Shopify sin SEO depende 100% de pauta pagada. Con SEO integrado desde el inicio, el tráfico orgánico crece mes a mes mientras tus campañas generan resultados inmediatos."
        breadcrumbCurrent="Tienda Shopify con SEO"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="Shopify sin los errores de SEO típicos"
        subtitle="La mayoría de tiendas Shopify tienen URLs duplicadas, colecciones sin texto y productos con imágenes de 5MB. Así no se posiciona."
        features={[
          {
            icon: "🗂️",
            title: "Colecciones optimizadas",
            description: "Las páginas de categoría son las que más tráfico orgánico generan. Cada colección tiene URL, descripción y metadatos trabajados.",
          },
          {
            icon: "🚀",
            title: "Velocidad máxima",
            description: "Shopify puede ser lento. Audito y elimino apps innecesarias, comprimo imágenes y optimizo el tema para pasar los Core Web Vitals.",
          },
          {
            icon: "💳",
            title: "Pasarelas de pago locales",
            description: "Integración con PSE, Bancolombia, Nequi y tarjetas colombianas. Tus clientes pueden pagar como prefieren.",
          },
          {
            icon: "📦",
            title: "Productos con SEO",
            description: "Nombres de archivo, alt texts, títulos únicos y schema Product en cada producto para aparecer con rich snippets en Google.",
          },
        ]}
      />
      <SubpageProcess
        steps={[
          {
            number: "01",
            title: "Estrategia de catálogo",
            description: "Defino la arquitectura de colecciones con keywords reales y configuro Shopify para evitar contenido duplicado desde el inicio.",
          },
          {
            number: "02",
            title: "Desarrollo y personalización",
            description: "Tema customizado o ajustado, pasarelas de pago locales, recuperación de carritos y configuración de velocidad.",
          },
          {
            number: "03",
            title: "SEO técnico y lanzamiento",
            description: "Sitemap, Search Console, GA4, schema markup y verificación de Core Web Vitals antes del lanzamiento.",
          },
        ]}
      />
      <SubpageFAQ
        bg="off-white"
        items={[
          {
            q: "¿Cuánto cuesta Shopify por mes para vender en Colombia?",
            a: "El plan Basic de Shopify cuesta $39 USD/mes y es suficiente para la mayoría de pymes que empiezan. Incluye hosting, SSL y actualizaciones. A eso se suma el costo de la pasarela de pago local (PSE, Nequi, tarjetas) que varía entre 2.5% y 3.5% por transacción.",
          },
          {
            q: "¿Puedo aceptar pagos en pesos colombianos con Shopify?",
            a: "Sí. Integro pasarelas locales como PayU, ePayco o Wompi que permiten recibir pagos con PSE, Nequi, Bancolombia y tarjetas débito/crédito colombianas. Tus clientes pueden pagar exactamente como prefieren.",
          },
          {
            q: "¿Cuánto tiempo tarda en estar lista la tienda?",
            a: "Entre 4 y 6 semanas para una tienda de hasta 50 productos con colecciones optimizadas. El tiempo varía según la cantidad de productos, el nivel de personalización del diseño y qué tan rápido el cliente entrega el contenido (fotos, textos, logos).",
          },
          {
            q: "¿Puedo agregar más productos después de que me entreguen la tienda?",
            a: "Sí. Shopify está diseñado para que el dueño gestione productos sin ayuda técnica. Te entrego una guía de cómo agregar productos con SEO correcto (nombre de archivo de imagen, alt text, URL del producto) para que mantengas la optimización al escalar.",
          },
          {
            q: "¿Shopify o WooCommerce para vender en Colombia?",
            a: "Shopify para la mayoría de casos: es más rápido de lanzar, más estable y requiere menos mantenimiento técnico. WooCommerce tiene más flexibilidad pero más complejidad técnica y más puntos de falla. Para catálogos grandes (+1000 productos) o necesidades muy específicas, WooCommerce puede ser mejor opción.",
          },
        ]}
      />
      <SubpageRelated
        bg="warm-white"
        title="¿Tu tienda ya está activa y quieres posicionar?"
        links={[
          {
            label: "SEO para Shopify",
            href: "/servicios/seo-shopify/",
            description: "Optimización de colecciones, productos y velocidad para tiendas Shopify existentes que dependen de pauta.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Tienes productos para vender online?"
        title="Una tienda que vende"
        titleLine2="sin depender solo de pauta."
        subtitle="Cuéntame cuántos productos tienes y qué quieres lograr. Te digo si Shopify es la plataforma correcta y cuánto costaría."
      />
    </>
  );
}
