import type { Metadata } from "next";
import { recentPosts } from "@/data/posts";
import { BlogHero } from "@/components/sections/blog/BlogHero";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { BlogCTA } from "@/components/sections/blog/BlogCTA";

export const metadata: Metadata = {
  title: "Blog SEO y Diseño Web Medellín",
  description:
    "Guías de SEO, diseño web y e-commerce para pymes en Medellín y Colombia. WordPress, Shopify y Google Ads sin relleno.",
  keywords: [
    "blog seo colombia",
    "blog diseño web colombia",
    "seo para pymes colombia",
    "como posicionar en google colombia",
    "diseño web seo articulos",
  ],
  alternates: { canonical: "https://stivenramirez.com/blog/" },
  openGraph: {
    title: "Blog SEO y Diseño Web Colombia",
    description:
      "Estrategias de SEO y diseño web para pymes colombianas. Artículos sin relleno.",
    url: "https://stivenramirez.com/blog/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog SEO y Diseño Web",
  description:
    "Artículos sobre SEO, diseño web y e-commerce para pymes en Colombia.",
  url: "https://stivenramirez.com/blog/",
  author: {
    "@type": "Person",
    name: "Stiven Ramírez",
    url: "https://stivenramirez.com",
  },
  blogPost: recentPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://stivenramirez.com/blog/${post.slug}/`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Stiven Ramírez",
    },
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogHero />
      <BlogGrid />
      <BlogCTA />
    </>
  );
}
