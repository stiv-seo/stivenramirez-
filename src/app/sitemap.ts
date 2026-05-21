import type { MetadataRoute } from "next";
import { getAllPosts, getActiveCategorySlugs } from "@/lib/mdx";
import { CIUDADES } from "@/data/ciudades";

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
    { url: `${BASE}/servicios/diseno-web/`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/diseno-web/wordpress/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/diseno-web/shopify/`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/diseno-web/rediseno/`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicios/diseno-web/seo/`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // ── Sub-páginas SEO ───────────────────────────────────────────────────────
    { url: `${BASE}/servicios/seo/`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/seo/shopify/`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicios/seo/wordpress/`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicios/seo/local/`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicios/seo/ecommerce/`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicios/seo/tecnico/`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/servicios/seo/auditoria/`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/servicios/seo/consultoria/`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // ── Sub-páginas pauta ─────────────────────────────────────────────────────
    { url: `${BASE}/servicios/pauta/`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/pauta/google-ads/`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios/pauta/meta-ads/`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // ── Precios ───────────────────────────────────────────────────────────────
    { url: `${BASE}/servicios/precios/`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const ciudadRoutes: MetadataRoute.Sitemap = [
    ...CIUDADES.map((c) => ({
      url: `${BASE}/diseno-web/${c.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...CIUDADES.map((c) => ({
      url: `${BASE}/seo/${c.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const posts = getAllPosts();
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = getActiveCategorySlugs().map((cat) => ({
    url: `${BASE}/blog/category/${cat}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...ciudadRoutes, ...postRoutes, ...categoryRoutes];
}
