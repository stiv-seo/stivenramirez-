import type { Metadata } from "next";
import { ContactoHero } from "@/components/sections/contacto/ContactoHero";
import { ContactoMain } from "@/components/sections/contacto/ContactoMain";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbeme para tu proyecto de diseño web o SEO en Colombia. Freelance en Medellín. Respondo en menos de 24 horas con diagnóstico honesto y sin compromiso inicial.",
  keywords: [
    "contactar consultor seo colombia",
    "contratar diseñador web colombia",
    "presupuesto diseño web seo",
    "stiven ramirez contacto",
  ],
  alternates: { canonical: "https://stivenramirez.com/contacto/" },
  openGraph: {
    title: "Contacto",
    description:
      "Cuéntame tu proyecto. Respondo en menos de 24 horas con un diagnóstico honesto y presupuesto sin sorpresas.",
    url: "https://stivenramirez.com/contacto/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stiven Ramírez — Consultor SEO y Diseñador Web",
  url: "https://stivenramirez.com",
  email: "hola@stivenramirez.com",
  areaServed: "Colombia",
  founder: {
    "@type": "Person",
    name: "Stiven Ramírez",
    url: "https://stivenramirez.com",
    jobTitle: "Consultor SEO y Diseñador Web",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hola@stivenramirez.com",
    availableLanguage: "Spanish",
  },
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactoHero />
      <ContactoMain />
    </>
  );
}
