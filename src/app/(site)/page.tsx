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

export const metadata: Metadata = {
  title: { absolute: "Stiven Ramírez | Consultor SEO & Diseño Web Medellín" },
  description:
    "Consultor SEO y diseñador web freelance en Medellín. WordPress y Shopify que posicionan en Google desde el día 1. Sin agencia, resultados medibles.",
  alternates: { canonical: "https://stivenramirez.com/" },
};

export default function HomePage() {
  return (
    <>
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
