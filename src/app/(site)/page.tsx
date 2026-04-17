import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { StatsStrip } from "@/components/sections/home/StatsStrip";
import { Services } from "@/components/sections/home/Services";
import { WhyStiven } from "@/components/sections/home/WhyStiven";
import { Process } from "@/components/sections/home/Process";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { BlogPreview } from "@/components/sections/home/BlogPreview";
import { FAQ } from "@/components/sections/home/FAQ";
import { CTAFinal } from "@/components/sections/home/CTAFinal";

export const metadata: Metadata = {
  title: "Stiven Ramírez | Consultor SEO & Diseñador Web Colombia",
  description:
    "Diseño webs WordPress y Shopify con SEO integrado desde el primer día. Posiciona en Google, genera ventas. Consultor en Medellín, Colombia.",
  alternates: { canonical: "https://stivenramirez.com/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Services />
      <WhyStiven />
      <Process />
      <AboutPreview />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <CTAFinal />
    </>
  );
}
