import { SITE_URL } from "@/lib/constants";
import type { Ciudad } from "@/data/ciudades";

interface CiudadSchemaProps {
  ciudad: Ciudad;
  slug: string;
  descripcion: string;
}

export function CiudadSchema({ ciudad, slug, descripcion }: CiudadSchemaProps) {
  const pageUrl = `${SITE_URL}/diseno-web/${slug}/`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Diseño Web", item: `${SITE_URL}/servicios/diseno-web/` },
      { "@type": "ListItem", position: 3, name: ciudad.nombre, item: pageUrl },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Stiven Ramírez — Diseño Web & SEO",
    description: `Diseño web con SEO integrado para empresas en ${ciudad.nombre}, ${ciudad.departamento}.`,
    url: pageUrl,
    telephone: "+57-301-578-7350",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: ciudad.nombre,
      containedInPlace: { "@type": "State", name: ciudad.departamento },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: ciudad.nombre,
      addressRegion: ciudad.departamento,
      addressCountry: "CO",
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${ciudad.keyword_h1} con SEO`,
    description: descripcion,
    url: pageUrl,
    provider: { "@type": "Person", name: "Stiven Ramírez", url: SITE_URL },
    areaServed: ciudad.nombre,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "COP",
      lowPrice: "1300000",
      highPrice: "3500000",
      offerCount: "3",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    </>
  );
}
