import { SITE_URL, SITE_NAME } from "@/lib/constants";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PersonSchemaProps {
  name: string;
  url: string;
  jobTitle: string;
  description: string;
  sameAs?: string[];
}

export interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  telephone?: string;
  address?: {
    city: string;
    region: string;
    country: string;
  };
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider: string;
  areaServed?: string;
  price?: string;
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image?: string;
}

export interface FaqSchemaProps {
  items: { question: string; answer: string }[];
}

export interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export interface CreativeWorkSchemaProps {
  name: string;
  description: string;
  url: string;
  creator: string;
  dateCreated?: string;
}

export interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  author: string;
  items: { name: string; url: string }[];
}

// ─── Builders ─────────────────────────────────────────────────────────────────

export function personSchema(props: PersonSchemaProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: props.name,
    url: props.url,
    jobTitle: props.jobTitle,
    description: props.description,
    ...(props.sameAs && props.sameAs.length > 0 ? { sameAs: props.sameAs } : {}),
  };
}

export function localBusinessSchema(props: LocalBusinessSchemaProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: props.name,
    description: props.description,
    url: props.url,
    ...(props.telephone ? { telephone: props.telephone } : {}),
    ...(props.address
      ? {
          address: {
            "@type": "PostalAddress",
            addressLocality: props.address.city,
            addressRegion: props.address.region,
            addressCountry: props.address.country,
          },
        }
      : {}),
  };
}

export function webSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Consultor SEO y diseñador web en Medellín",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-301-578-7350",
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
    sameAs: [
      "https://www.instagram.com/stiv.seo/",
      "https://www.linkedin.com/in/stivenramirez/",
    ],
  };
}

export function serviceSchema(services: ServiceSchemaProps[]): object[] {
  return services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: s.url,
    provider: {
      "@type": "Person",
      name: s.provider,
      url: SITE_URL,
    },
    areaServed: s.areaServed ?? "Colombia",
    ...(s.price
      ? {
          offers: {
            "@type": "Offer",
            description: s.price,
          },
        }
      : {}),
  }));
}

export function articleSchema(props: ArticleSchemaProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.title,
    description: props.description,
    url: props.url,
    datePublished: props.datePublished,
    dateModified: props.dateModified ?? props.datePublished,
    author: {
      "@type": "Person",
      name: props.authorName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    ...(props.image
      ? {
          image: {
            "@type": "ImageObject",
            url: props.image,
            width: 1200,
            height: 630,
          },
        }
      : {}),
  };
}

export function faqSchema(props: FaqSchemaProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(props: BreadcrumbSchemaProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: props.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function creativeWorkSchema(props: CreativeWorkSchemaProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: props.name,
    description: props.description,
    url: props.url,
    creator: {
      "@type": "Person",
      name: props.creator,
      url: SITE_URL,
    },
    ...(props.dateCreated ? { dateCreated: props.dateCreated } : {}),
  };
}

export function collectionPageSchema(props: CollectionPageSchemaProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: props.name,
    description: props.description,
    url: props.url,
    author: {
      "@type": "Person",
      name: props.author,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: props.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

// ─── Helper ───────────────────────────────────────────────────────────────────

export function schemaToString(schema: object): string {
  return JSON.stringify(schema);
}
