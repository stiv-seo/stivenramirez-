import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

const BASE = "https://stivenramirez.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    // ── Principales ──────────────────────────────────────────────────────────
    { url: BASE,                      lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/servicios/`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/portafolio/`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sobre-mi/`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog/`,           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/contacto/`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
    // ── Sub-páginas diseño ────────────────────────────────────────────────────
    { url: `${BASE}/servicios/diseno-web-seo/`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/diseno-web-wordpress-seo/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/tienda-shopify-seo/`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/rediseno-web-seo/`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // ── Sub-páginas SEO ───────────────────────────────────────────────────────
    { url: `${BASE}/servicios/seo/`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/seo-shopify/`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicios/seo-wordpress/`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicios/seo-local/`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicios/seo-ecommerce/`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicios/seo-tecnico/`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/servicios/auditoria-seo/`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // ── Sub-páginas pauta ─────────────────────────────────────────────────────
    { url: `${BASE}/servicios/pauta-digital/`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/google-ads/`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/meta-ads/`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const posts = getAllPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
