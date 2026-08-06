import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { StatsStrip } from "@/components/sections/home/StatsStrip";
import { Agitation } from "@/components/sections/home/Agitation";
import { Services } from "@/components/sections/home/Services";
import { WhyStiven } from "@/components/sections/home/WhyStiven";
import { Process } from "@/components/sections/home/Process";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { BlogPreview } from "@/components/sections/home/BlogPreview";
import { FAQ } from "@/components/sections/home/FAQ";
import { TechStack } from "@/components/sections/home/TechStack";
import { CTAFinal } from "@/components/sections/home/CTAFinal";
import { localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Stiven Ramírez | Consultor SEO & Diseño Web Medellín" },
  description:
    "Consultor SEO y diseñador web freelance en Medellín. WordPress y Shopify que posicionan en Google desde el día 1. Sin agencia, resultados medibles.",
  alternates: { canonical: "https://stivenramirez.com/", languages: { "es-CO": "https://stivenramirez.com/", "x-default": "https://stivenramirez.com/" } },
};

const localBiz = localBusinessSchema({
  name: "Stiven Ramírez - Consultor SEO Medellín",
  description:
    "Consultor SEO freelance y diseñador web en Medellín. WordPress y Shopify que posicionan en Google desde el día 1. Sin agencia, resultados medibles.",
  url: SITE_URL,
  telephone: "+57-301-578-7350",
  address: { city: "Medellín", region: "Antioquia", country: "CO" },
});

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stiven Ramírez",
  url: SITE_URL,
  jobTitle: "Consultor SEO",
  description:
    "Consultor SEO freelance y diseñador web en Medellín con más de 4 años posicionando pymes colombianas en Google.",
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
  },
  sameAs: [
    "https://www.instagram.com/stiv.seo/",
    "https://www.linkedin.com/in/stiven-ramirez-0a0332199/",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBiz) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <Hero />
      <StatsStrip />
      <Agitation />
      <Services />
      <WhyStiven />
      <Process />
      <AboutPreview />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <TechStack />
      <CTAFinal />
    </>
  );
}
