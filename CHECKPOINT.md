# CHECKPOINT — stivenramirez.com

**Última actualización:** 2026-04-16  
**Dev server:** `http://localhost:3000` — funcionando (200 OK en todas las rutas)

---

## Estado de fases

| Fase | Estado |
|------|--------|
| Fase 0 — Documentación | ✅ |
| Fase 1 — Arquitectura | ✅ |
| Fase 2 — Design System | ✅ |
| Fase 3 — Header + Footer | ✅ |
| Fase 4 — Homepage | ✅ |
| Fase 5 — Páginas principales | ✅ |
| Fase 5.5 — Logo, MDX, Sitemap | ✅ |
| Fase 6 — 14 sub-páginas SEO | ✅ |
| Fase 7 — API contacto (Resend) | ✅ |
| Fase 8 — QA completo | ✅ |

---

## Qué está hecho

### Fase 2 ✅ — Design System

| Archivo | Qué hace |
|---------|----------|
| `src/app/globals.css` | Tailwind v4 `@theme` con todos los tokens del brandbook |
| `src/app/layout.tsx` | Root layout — Plus Jakarta Sans + DM Sans · favicon `/favicon.svg` |
| `src/lib/utils.ts` | `cn()` + `formatDate()` |
| `src/components/ui/Button.tsx` | 5 variantes · 3 tamaños · polymorphic |
| `src/components/ui/Badge.tsx` | teal + amber |
| `src/components/ui/Eyebrow.tsx` | tones: teal / muted |
| `src/components/ui/SectionNumber.tsx` | surface: light / dark |
| `src/components/ui/Divider.tsx` | directions: left / right / center |
| `src/components/ui/FadeIn.tsx` | Framer Motion `whileInView` |
| `src/components/ui/Container.tsx` | max-width 1160px + padding responsive |

### Fase 3 ✅ — Header + Footer + Layout

| Archivo | Qué hace |
|---------|----------|
| `src/lib/constants.ts` | `NAV_LINKS`, `FOOTER_LINKS`, `WA_URL`, `CALENDLY_URL`, `SITE_NAME` |
| `src/app/(site)/layout.tsx` | Route group — Header + `<main>` + Footer |
| `src/components/layout/Header.tsx` | Logo real (`/logo.png`, h-10 w-auto, width=140) · nav desktop · CTA · sticky + blur |
| `src/components/layout/MobileMenu.tsx` | Drawer Framer Motion |
| `src/components/layout/Footer.tsx` | 4 columnas · social icons · bottom bar `#040C15` |

### Fase 4 ✅ — Homepage (11 secciones)

`src/app/(site)/page.tsx` — Hero · StatsStrip · Services · WhyStiven · Process · AboutPreview · Testimonials · PortfolioPreview · BlogPreview · FAQ · CTAFinal

### Fase 5 ✅ — Páginas principales (todas aprobadas)

| Página | Archivo page | Schemas |
|--------|-------------|---------|
| `/servicios/` | ✅ | 4× Service |
| `/portafolio/` | ✅ | 3× CreativeWork |
| `/sobre-mi/` | ✅ | Person (sameAs LinkedIn/Instagram) |
| `/blog/` | ✅ | Blog + 3× BlogPosting |
| `/contacto/` | ✅ | ContactPage |
| `/contacto/gracias/` | ✅ | noindex |

### Fase 5.5 ✅ — Activos, MDX y SEO técnico

**Assets:**
- `public/favicon.svg` — copiado de `/Users/stiven/Downloads/favicon.svg`
- `public/logo.png` — copiado de `/Users/stiven/Sites/logo2.png`
- `src/app/layout.tsx` — `icons: { icon: "/favicon.svg" }` añadido
- `src/components/layout/Header.tsx` — logo real `<Image src="/logo.png" width={140} height={40} className="h-10 w-auto" />`

**MDX real:**

| Archivo | Palabras | Keywords |
|---------|----------|---------|
| `src/lib/mdx.ts` | — | `getAllPosts()` + `getPostBySlug()` con `gray-matter` |
| `content/blog/cuanto-cuesta-sitio-web-colombia.mdx` | ~1.600 | cuánto cuesta sitio web colombia |
| `content/blog/seo-shopify-checklist.mdx` | ~2.100 | seo shopify colombia |
| `content/blog/como-aparecer-google-maps.mdx` | ~1.900 | aparecer google maps colombia |
| `src/app/(site)/blog/[slug]/page.tsx` | — | generateMetadata + Article schema + MDXRemote |

**SEO técnico:**

| Archivo | Contenido |
|---------|-----------|
| `src/app/sitemap.ts` | 20 rutas estáticas + 3 slugs MDX dinámicos = 23 URLs |
| `src/app/robots.ts` | Allow: / · Disallow: /contacto/gracias/, /api/, /_next/, /design-system/ |

### Fase 6 ✅ — 14 sub-páginas SEO

Componentes compartidos en `src/components/sections/subpage/`:
- `SubpageHero.tsx` — eyebrow, title, titleAccent, subtitle, breadcrumb
- `SubpageFeatures.tsx` — eyebrow, title, subtitle, features[]
- `SubpageProcess.tsx` — steps[]
- `SubpageCTA.tsx` — eyebrow, title, titleLine2, subtitle

**Bloque Diseño (4 páginas):**

| URL | H1 |
|-----|----|
| `/servicios/diseno-web-seo/` | Diseño web que posiciona y convierte. |
| `/servicios/diseno-web-wordpress-seo/` | WordPress que posiciona desde el día uno. |
| `/servicios/tienda-shopify-seo/` | Tu tienda Shopify, lista para vender. |
| `/servicios/rediseno-web-seo/` | Tu web actual, convertida en máquina de leads. |

**Bloque SEO (7 páginas):**

| URL | H1 |
|-----|----|
| `/servicios/seo/` | SEO que genera clientes, no solo tráfico. |
| `/servicios/seo-shopify/` | Tu tienda Shopify, visible en Google. |
| `/servicios/seo-wordpress/` | WordPress que posiciona en Google. |
| `/servicios/seo-local/` | Primero en Google Maps cuando te buscan cerca. |
| `/servicios/seo-ecommerce/` | SEO para tiendas que quieren vender más. |
| `/servicios/seo-tecnico/` | La base técnica que Google necesita ver. |
| `/servicios/auditoria-seo/` | Saber exactamente por qué no posicionas. |

**Bloque Pauta (3 páginas):**

| URL | H1 |
|-----|----|
| `/servicios/pauta-digital/` | Pauta digital que acelera mientras el SEO madura. |
| `/servicios/google-ads/` | Google Ads: aparece cuando te buscan. |
| `/servicios/meta-ads/` | Meta Ads: llega a quien aún no te busca. |

### Fase 7 ✅ — API formulario de contacto (Resend)

| Archivo | Qué hace |
|---------|----------|
| `src/app/api/contact/route.ts` | POST · Zod validation · Resend · dev fallback sin API key |
| `src/components/sections/contacto/ContactoMain.tsx` | fetch real a `/api/contact` · redirect a `/contacto/gracias/` |
| `.env.example` | Documenta NEXT_PUBLIC_WA_NUMBER, CONTACT_EMAIL, RESEND_API_KEY |

### Fase 8 ✅ — QA completo (todos los checks pasados)

| Check | Resultado |
|-------|-----------|
| HTTP 200 — 26 URLs | ✅ 26/26 OK |
| Titles únicos — 23 páginas | ✅ 0 duplicados |
| Descriptions únicas — 23 páginas | ✅ 0 duplicados |
| H1 único por página — 23 páginas | ✅ 0 duplicados |
| `/sitemap.xml` accesible | ✅ 200 OK · 23 URLs |
| `/robots.txt` accesible | ✅ 200 OK |
| `/contacto/gracias/` noindex | ✅ `robots: { index: false, follow: false }` |
| `npm run build` | ✅ Exit 0 · 0 errores |

---

## URLs activas (23 páginas + utilidades)

| URL | Estado |
|-----|--------|
| `/` | ✅ |
| `/servicios/` | ✅ |
| `/servicios/diseno-web-seo/` | ✅ |
| `/servicios/diseno-web-wordpress-seo/` | ✅ |
| `/servicios/tienda-shopify-seo/` | ✅ |
| `/servicios/rediseno-web-seo/` | ✅ |
| `/servicios/seo/` | ✅ |
| `/servicios/seo-shopify/` | ✅ |
| `/servicios/seo-wordpress/` | ✅ |
| `/servicios/seo-local/` | ✅ |
| `/servicios/seo-ecommerce/` | ✅ |
| `/servicios/seo-tecnico/` | ✅ |
| `/servicios/auditoria-seo/` | ✅ |
| `/servicios/pauta-digital/` | ✅ |
| `/servicios/google-ads/` | ✅ |
| `/servicios/meta-ads/` | ✅ |
| `/portafolio/` | ✅ |
| `/sobre-mi/` | ✅ |
| `/blog/` | ✅ |
| `/blog/cuanto-cuesta-sitio-web-colombia` | ✅ |
| `/blog/seo-shopify-checklist` | ✅ |
| `/blog/como-aparecer-google-maps` | ✅ |
| `/contacto/` | ✅ |
| `/contacto/gracias/` | ✅ noindex |
| `/sitemap.xml` | ✅ |
| `/robots.txt` | ✅ |

---

## Antes del deploy

- [ ] Eliminar `src/app/design-system/page.tsx`
- [ ] Reemplazar fotos placeholder por fotos reales en `/sobre-mi/`
- [ ] Activar Calendly URL real en `src/lib/constants.ts`
- [ ] Reemplazar número WhatsApp placeholder (`NEXT_PUBLIC_WA_NUMBER`)
- [ ] Rellenar `RESEND_API_KEY` en `.env.local` (ver `.env.example` para instrucciones)
- [ ] Verificar dominio `hola@stivenramirez.com` en Resend

## Post-deploy pendiente (aprobado diferir)

- Submenú de navegación en "Servicios" con las 14 sub-páginas
- Mostrar 4 servicios principales en `/servicios/` con enlace a sub-páginas

---

## Decisiones técnicas clave

| Decisión | Detalle |
|----------|---------|
| **Next.js 16.2.3** | App Router. Misma API que 14. |
| **Tailwind CSS v4** | Sin `tailwind.config.ts`. Tokens en `globals.css` con `@theme` |
| **Framer Motion v12** | `ease: "easeOut" as const` — genérico `string` rechazado |
| **Node.js** | 20.19.0 arm64 en `/tmp/` — **se borra en reinicios** |
| **MDX** | `gray-matter` + `next-mdx-remote/rsc` · contenido en `content/blog/` |
| **Sitemap** | 20 estáticas + dinámicas desde `getAllPosts()` — se actualiza al agregar artículos |
| **Subagentes** | No tienen permisos de escritura en sandbox. Todo se escribe en sesión principal |
| **Route group `(site)/`** | Nunca tener `app/page.tsx` Y `app/(site)/page.tsx` simultáneamente |
| **Logo** | `public/logo.png` · `width={140} height={40} className="h-10 w-auto"` |
| **Favicon** | `public/favicon.svg` · referenciado en `layout.tsx` con `icons` |
| **Sub-páginas** | 4 shared components (SubpageHero/Features/Process/CTA) + props — evita 56 archivos |

---

## Variables de entorno

```bash
# .env.local
NEXT_PUBLIC_WA_NUMBER=573001234567   # cambiar antes del deploy
RESEND_API_KEY=                       # completar con API key real
CONTACT_EMAIL=stiv.seo03@gmail.com
```

---

## Cómo retomar

```bash
# 1. Cargar Node.js (se borra al reiniciar)
export PATH="/tmp/node-v20.19.0-darwin-arm64/bin:$PATH"

# Si /tmp/ fue limpiado:
# curl -fsSL https://nodejs.org/dist/v20.19.0/node-v20.19.0-darwin-arm64.tar.gz \
#   -o /tmp/node.tar.gz && tar -xzf /tmp/node.tar.gz -C /tmp/

# 2. Arrancar
cd /Users/stiven/stivenramirez && npm run dev
```

---

## Árbol de archivos

```
src/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx                            ✅
│   │   ├── page.tsx                              ✅ homepage
│   │   ├── servicios/
│   │   │   ├── page.tsx                          ✅
│   │   │   ├── diseno-web-seo/page.tsx           ✅
│   │   │   ├── diseno-web-wordpress-seo/page.tsx ✅
│   │   │   ├── tienda-shopify-seo/page.tsx       ✅
│   │   │   ├── rediseno-web-seo/page.tsx         ✅
│   │   │   ├── seo/page.tsx                      ✅
│   │   │   ├── seo-shopify/page.tsx              ✅
│   │   │   ├── seo-wordpress/page.tsx            ✅
│   │   │   ├── seo-local/page.tsx                ✅
│   │   │   ├── seo-ecommerce/page.tsx            ✅
│   │   │   ├── seo-tecnico/page.tsx              ✅
│   │   │   ├── auditoria-seo/page.tsx            ✅
│   │   │   ├── pauta-digital/page.tsx            ✅
│   │   │   ├── google-ads/page.tsx               ✅
│   │   │   └── meta-ads/page.tsx                 ✅
│   │   ├── portafolio/page.tsx                   ✅
│   │   ├── sobre-mi/page.tsx                     ✅
│   │   ├── blog/
│   │   │   ├── page.tsx                          ✅
│   │   │   └── [slug]/page.tsx                   ✅ MDXRemote + Article schema
│   │   ├── contacto/
│   │   │   ├── page.tsx                          ✅
│   │   │   └── gracias/page.tsx                  ✅ noindex
│   ├── api/contact/route.ts                      ✅ Resend + Zod
│   ├── design-system/page.tsx                    ⚠️  eliminar antes del deploy
│   ├── globals.css                               ✅
│   ├── layout.tsx                                ✅ favicon incluido
│   ├── sitemap.ts                                ✅ 23 URLs
│   └── robots.ts                                 ✅
├── components/
│   ├── layout/                                   ✅ Header · Footer · MobileMenu
│   ├── sections/
│   │   ├── home/                                 ✅ 11 secciones
│   │   ├── servicios/                            ✅ 5 archivos
│   │   ├── portafolio/                           ✅ 4 archivos
│   │   ├── sobre-mi/                             ✅ 5 archivos
│   │   ├── blog/                                 ✅ 3 archivos
│   │   ├── contacto/                             ✅ 2 archivos
│   │   └── subpage/                              ✅ SubpageHero · Features · Process · CTA
│   └── ui/                                       ✅ 7 componentes
├── data/                                         ✅ faq · portfolio · posts · services · testimonials · tools
├── lib/
│   ├── constants.ts                              ✅
│   ├── mdx.ts                                    ✅ getAllPosts + getPostBySlug
│   ├── schema.ts                                 ✅ 8 builders JSON-LD
│   └── utils.ts                                  ✅
└── types/index.ts                                ✅
content/
└── blog/
    ├── cuanto-cuesta-sitio-web-colombia.mdx      ✅ ~1.600 palabras
    ├── seo-shopify-checklist.mdx                 ✅ ~2.100 palabras
    └── como-aparecer-google-maps.mdx             ✅ ~1.900 palabras
public/
    ├── favicon.svg                               ✅
    └── logo.png                                  ✅
```
