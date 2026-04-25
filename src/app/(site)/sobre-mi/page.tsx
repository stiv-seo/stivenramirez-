import type { Metadata } from "next";
import { personSchema } from "@/lib/schema";
import { INSTAGRAM_URL } from "@/lib/constants";
import { SobreMiHero } from "@/components/sections/sobre-mi/SobreMiHero";
import { SobreMiStory } from "@/components/sections/sobre-mi/SobreMiStory";
import { SobreMiCredentials } from "@/components/sections/sobre-mi/SobreMiCredentials";
import { SobreMiValues } from "@/components/sections/sobre-mi/SobreMiValues";
import { SobreMiCTA } from "@/components/sections/sobre-mi/SobreMiCTA";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Consultor SEO freelance y diseñador web con base en Medellín. Trabajo con pymes que quieren crecer en Google sin depender de una agencia.",
  keywords: [
    "stiven ramirez consultor seo colombia",
    "diseñador web seo colombia",
    "consultor seo freelance colombia",
    "experto seo colombia",
    "diseño web seo medellin colombia",
  ],
  alternates: { canonical: "https://stivenramirez.com/sobre-mi/" },
  openGraph: {
    title: "Sobre mí · Stiven Ramírez",
    description:
      "9+ años juntando SEO y diseño web en un solo proceso. Trabajo solo, sin intermediarios, con resultados medibles.",
    url: "https://stivenramirez.com/sobre-mi/",
    type: "profile",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = personSchema({
  name: "Stiven Ramírez",
  url: "https://stivenramirez.com",
  jobTitle: "Consultor SEO y Diseñador Web",
  description:
    "Consultor SEO y diseñador web con base en Colombia. Especializado en pymes y emprendedores que quieren crecer en Google con diseño web y SEO integrados.",
  sameAs: [
    "https://www.linkedin.com/in/stivenramirez/",
    INSTAGRAM_URL,
  ],
});

export default function SobreMiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SobreMiHero />
      <SobreMiStory />
      <SobreMiCredentials />
      <SobreMiValues />
      <SobreMiCTA />
    </>
  );
}
