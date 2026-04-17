// ─── Contacto ────────────────────────────────────────────────────────────────

export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "573001234567";
export const WA_URL = `https://wa.me/${WA_NUMBER}`;
export const CALENDLY_URL = "https://calendly.com/stiv-seo03/30min";
export const BRIEF_URL = "/contacto"; // brief.stivenramirez.com — fuera del scope por ahora

// ─── Navegación ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Servicios",  href: "/servicios/" },
  { label: "Blog",       href: "/blog/" },
  { label: "Sobre mí",   href: "/sobre-mi/" },
] as const;

// ─── Footer links ─────────────────────────────────────────────────────────────

export const FOOTER_LINKS = {
  servicios: [
    { label: "Diseño Web WordPress",  href: "/servicios/diseno-web-wordpress-seo/" },
    { label: "Tienda Shopify + SEO",  href: "/servicios/tienda-shopify-seo/" },
    { label: "SEO Continuo",          href: "/servicios/seo/" },
    { label: "Google & Social Ads",   href: "/servicios/pauta-digital/" },
    { label: "Auditoría SEO Gratis",  href: "/servicios/auditoria-seo/" },
  ],
  recursos: [
    { label: "Blog",        href: "/blog/" },
    { label: "Sobre mí",    href: "/sobre-mi/" },
    { label: "Contacto",    href: "/contacto/" },
  ],
  contacto: [
    { label: "WhatsApp",          href: WA_URL,          external: true },
    { label: "Agendar llamada",   href: CALENDLY_URL,    external: true },
    { label: "Completar brief",   href: BRIEF_URL },
    { label: "hola@stivenramirez.com", href: "mailto:hola@stivenramirez.com", external: true },
  ],
} as const;

// ─── Services dropdown nav ────────────────────────────────────────────────────

export const SERVICES_DROPDOWN = [
  {
    group: "Diseño Web",
    links: [
      { label: "Diseño Web con SEO",  href: "/servicios/diseno-web-seo/" },
      { label: "WordPress con SEO",   href: "/servicios/diseno-web-wordpress-seo/" },
      { label: "Shopify con SEO",     href: "/servicios/tienda-shopify-seo/" },
      { label: "Rediseño Web",        href: "/servicios/rediseno-web-seo/" },
    ],
  },
  {
    group: "SEO",
    links: [
      { label: "Consultoría SEO",  href: "/servicios/seo/" },
      { label: "SEO para Shopify", href: "/servicios/seo-shopify/" },
      { label: "SEO para WordPress", href: "/servicios/seo-wordpress/" },
      { label: "SEO Local",        href: "/servicios/seo-local/" },
      { label: "SEO E-commerce",   href: "/servicios/seo-ecommerce/" },
      { label: "SEO Técnico",      href: "/servicios/seo-tecnico/" },
      { label: "Auditoría SEO",    href: "/servicios/auditoria-seo/" },
    ],
  },
  {
    group: "Pauta",
    links: [
      { label: "Google Ads", href: "/servicios/google-ads/" },
      { label: "Meta Ads",   href: "/servicios/meta-ads/" },
    ],
  },
] as const;

// ─── Social ───────────────────────────────────────────────────────────────────

export const INSTAGRAM_HANDLE = "stiv.seo";
export const INSTAGRAM_URL = "https://www.instagram.com/stiv.seo/";

// ─── Site metadata ────────────────────────────────────────────────────────────

export const SITE_URL = "https://stivenramirez.com";
export const SITE_NAME = "Stiven Ramírez";
export const SITE_TAGLINE = "Consultor SEO & Diseñador Web Colombia";
