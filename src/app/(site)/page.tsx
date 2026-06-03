import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { LogoStrip } from "@/components/sections/home-v2/LogoStrip";
import { PricingServices } from "@/components/sections/home-v2/PricingServices";
import { BigStatement } from "@/components/sections/home-v2/BigStatement";
import { StatsFull } from "@/components/sections/home-v2/StatsFull";
import { TestimonialSpotlight } from "@/components/sections/home-v2/TestimonialSpotlight";
import { AboutEditorial } from "@/components/sections/home-v2/AboutEditorial";
import { CTACommand } from "@/components/sections/home-v2/CTACommand";
import { localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Stiven Ramírez | Consultor SEO & Diseño Web Medellín" },
  description:
    "Consultor SEO y diseñador web freelance en Medellín. WordPress y Shopify que posicionan en Google desde el día 1. Sin agencia, resultados medibles.",
  alternates: { canonical: "https://stivenramirez.com/" },
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
  description: "Consultor SEO freelance y diseñador web en Medellín con más de 9 años posicionando pymes colombianas en Google.",
  homeLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressLocality: "Medellín", addressRegion: "Antioquia", addressCountry: "CO" },
  },
  sameAs: ["https://www.instagram.com/stiv.seo/", "https://www.linkedin.com/in/stivenramirez/"],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBiz) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <Hero />
      <LogoStrip />
      <PricingServices />
      <BigStatement />
      <StatsFull />
      <TestimonialSpotlight />
      <AboutEditorial />
      <CTACommand />
    </>
  );
}
