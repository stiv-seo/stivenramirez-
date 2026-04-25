import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options",        value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",     value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      { source: "/servicios/diseno-web-seo/",           destination: "/servicios/diseno-web/seo/",       permanent: true },
      { source: "/servicios/diseno-web-wordpress-seo/", destination: "/servicios/diseno-web/wordpress/", permanent: true },
      { source: "/servicios/tienda-shopify-seo/",       destination: "/servicios/diseno-web/shopify/",   permanent: true },
      { source: "/servicios/rediseno-web-seo/",         destination: "/servicios/diseno-web/rediseno/",  permanent: true },
      { source: "/servicios/seo-shopify/",              destination: "/servicios/seo/shopify/",          permanent: true },
      { source: "/servicios/seo-wordpress/",            destination: "/servicios/seo/wordpress/",        permanent: true },
      { source: "/servicios/seo-local/",                destination: "/servicios/seo/local/",            permanent: true },
      { source: "/servicios/seo-ecommerce/",            destination: "/servicios/seo/ecommerce/",        permanent: true },
      { source: "/servicios/seo-tecnico/",              destination: "/servicios/seo/tecnico/",          permanent: true },
      { source: "/servicios/auditoria-seo/",            destination: "/servicios/seo/auditoria/",        permanent: true },
      { source: "/servicios/pauta-digital/",            destination: "/servicios/pauta/",                permanent: true },
      { source: "/servicios/google-ads/",               destination: "/servicios/pauta/google-ads/",     permanent: true },
      { source: "/servicios/meta-ads/",                 destination: "/servicios/pauta/meta-ads/",       permanent: true },
    ];
  },
};

export default nextConfig;
