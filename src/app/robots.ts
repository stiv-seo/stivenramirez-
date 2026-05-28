import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/contacto/gracias/",
          "/api/",
          "/_next/static/data/",
          "/design-system/",
        ],
      },
    ],
    sitemap: "https://stivenramirez.com/sitemap.xml",
  };
}
