import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { SubpageFAQ } from "@/components/sections/subpage/SubpageFAQ";
import { SubpageRelated } from "@/components/sections/subpage/SubpageRelated";

export const metadata: Metadata = {
  title: "SEO Local Colombia · Google Maps · Stiven Ramírez",
  description:
    "Posiciona tu negocio en Google Maps y búsquedas locales. Google Business Profile, reseñas y SEO local para negocios colombianos.",
  keywords: ["seo local colombia", "aparecer google maps colombia", "google business profile colombia", "seo local medellin bogota"],
  alternates: { canonical: "https://stivenramirez.com/servicios/seo-local/" },
  openGraph: {
    title: "SEO Local Colombia · Google Maps · Stiven Ramírez",
    description: "Aparece primero cuando alguien busca tu negocio cerca. Google Business Profile y SEO local.",
    url: "https://stivenramirez.com/servicios/seo-local/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "SEO Local Colombia",
  description: "Posicionamiento en Google Maps y búsquedas locales para negocios físicos en Colombia.",
  url: "https://stivenramirez.com/servicios/seo-local/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $1.600.000 COP/mes",
}]);

export default function SeoLocalPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="SEO Local · Google Maps"
        title="Aparece primero cuando"
        titleAccent="te buscan cerca."
        subtitle="El 60% de los clics en búsquedas locales van a los 3 primeros resultados de Google Maps. Si no estás ahí, estás perdiendo clientes frente a competidores que sí optimizaron."
        breadcrumbCurrent="SEO Local"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="El Local Pack de Google, conquistado"
        subtitle="Los tres factores que Google usa para rankear en búsquedas locales: relevancia, distancia y prominencia. Solo puedo trabajar dos de tres — y los trabajo bien."
        features={[
          { icon: "📍", title: "Google Business Profile", description: "Optimización completa de tu ficha: categorías, descripción, fotos, horarios y publicaciones semanales para señalar actividad." },
          { icon: "⭐", title: "Estrategia de reseñas", description: "Sistema para conseguir reseñas reales de clientes satisfechos y protocolo de respuesta que Google premia." },
          { icon: "📋", title: "Consistencia NAP", description: "Nombre, dirección y teléfono idénticos en todos los directorios: Google, Facebook, Páginas Amarillas, Tripadvisor y más." },
          { icon: "🌐", title: "Sitio web local", description: "Página de contacto con schema LocalBusiness, mapa embebido y contenido que menciona la zona geográfica que atiendes." },
        ]}
      />
      <SubpageProcess
        steps={[
          { number: "01", title: "Auditoría local", description: "Reviso tu ficha de Google Business, la consistencia NAP en directorios y las reseñas actuales. Identifico las brechas vs tu competencia local." },
          { number: "02", title: "Optimización de ficha y citas", description: "Completo todos los campos de GBP, corrijo inconsistencias NAP, subo fotos y activo las publicaciones semanales." },
          { number: "03", title: "Reseñas y mantenimiento", description: "Implemento el sistema de captación de reseñas y monitoreo el ranking local mes a mes con ajustes continuos." },
        ]}
      />
      <SubpageFAQ
        bg="off-white"
        items={[
          {
            q: "¿Qué es el Local Pack de Google Maps?",
            a: "Es el bloque de 3 resultados con mapa que aparece en Google cuando alguien busca un negocio local: 'restaurante cerca de mí', 'dentista en Medellín' o 'ferretería en Bogotá'. Estos 3 resultados concentran más del 60% de los clics en búsquedas locales.",
          },
          {
            q: "¿Cuánto tiempo tarda en aparecer en Google Maps?",
            a: "Con la ficha verificada y optimizada correctamente, los primeros resultados en búsquedas de marca (nombre exacto del negocio) se ven en 1 a 2 semanas. Para búsquedas genéricas competidas ('restaurante en Laureles'), entre 1 y 3 meses dependiendo de la competencia en la zona.",
          },
          {
            q: "¿Sirve el SEO local si no tengo sitio web?",
            a: "Sirve parcialmente. Google Business Profile puede posicionar solo con la ficha, pero tener un sitio web con schema LocalBusiness, mapa embebido y contenido local refuerza la prominencia. Para competidores con sitio web, la ficha sola suele no ser suficiente en categorías competidas.",
          },
          {
            q: "¿Las reseñas falsas o compradas me pueden penalizar?",
            a: "Sí. Google detecta patrones inusuales: muchas reseñas en poco tiempo, reseñas de cuentas recién creadas o sin historial, o reseñas con lenguaje muy similar entre sí. Las consecuencias van desde la eliminación de reseñas hasta la suspensión completa de la ficha.",
          },
          {
            q: "¿Funciona el SEO local en toda Colombia o solo en ciudades grandes?",
            a: "Funciona en cualquier ciudad. De hecho, en ciudades intermedias y municipios la competencia es menor y los resultados llegan más rápido. El SEO local es especialmente poderoso en mercados donde los competidores no han optimizado su presencia digital.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Tus clientes te encuentran en Maps?"
        title="El Local Pack de Google"
        titleLine2="es tuyo."
        subtitle="Dime el nombre de tu negocio y la ciudad. Reviso tu ficha en tiempo real y te digo qué falta para aparecer primero."
      />
    </>
  );
}
