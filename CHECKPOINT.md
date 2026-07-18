# CHECKPOINT — stivenramirez.com

**Última actualización:** 2026-07-18
**Estado:** ✅ Build limpio — 61 páginas — 0 errores — En producción (Vercel)
**Repo GitHub:** `stiv-seo/stivenramirez-` (branch: `main`)
**Nota:** este archivo no se había actualizado desde el 16 de abril — el resto del documento (fases 0-8.6) describe el estado de esa fecha y ya está superado. Fase 9 (deploy) sí se completó. Para el estado real y reciente, ver `git log` — el sitio ha tenido trabajo constante de SEO técnico, schema y contenido de blog entre mayo y julio 2026.

## Estado real — julio 2026

- 17 posts de blog publicados (calendario en `CONTENT-CALENDAR.md`), incluyendo los 2 de julio ("Cómo vender más en Shopify Colombia" y "Shopify vs WooCommerce Colombia") escritos y publicados el 2026-07-18 tras detectar que llevaban hasta 3 días de atraso frente al calendario.
- Auditoría SEO de mayo 2026 (`/Users/stiven/Documents/08-Marcas SEO/Stiven/Auditoría-Mayo-2026/ACTION-PLAN.md`) — todos los ítems Crítico/Alto ya resueltos en código (cross-links, homepage dinámica, meta descriptions, OG images, ProfilePage schema). El único ítem que seguía marcado "pendiente" (hreflang no renderiza) resultó ser un falso positivo: el tag sí existe en el HTML, solo con casing `hrefLang` en vez de `hreflang` — válido en HTML, sin impacto real.
- **Pendiente real detectado 2026-07-18:** Search Console muestra caída sostenida — clics últimos 28 días -58% vs período anterior, posición promedio empeoró de 22.1 a 28.9, 0 quick wins (ninguna query en posición 4-10). Causa más probable: 17 días sin commits (1-18 julio) mientras el calendario prometía contenido nuevo. Monitorear si publicar los 2 posts atrasados revierte la tendencia en las próximas 2-4 semanas.
- Backlog real pendiente: caso de estudio ("De 0 a X visitas en Y meses") mencionado como prioridad de julio en la auditoría de mayo — no se ha empezado.

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
| Fase 8 — QA completo (Rondas 1–3) | ✅ |
| Fase 8.5 — Correcciones pre-deploy | ✅ |
| Fase 8.6 — Menú dropdown Servicios | ✅ |
| Fase 9 — Deploy Vercel (producción) | ⏳ Pendiente |
| Fase 10 — Pruebas Hostinger | ⏳ En ~2 meses |

---

## Qué está hecho

### Fase 2 ✅ — Design System

| Archivo | Qué hace |
|---------|----------|
| `src/app/globals.css` | Tailwind v4 `@theme` con todos los tokens del brandbook |
| `src/app/layout.tsx` | Root layout — Plus Jakarta Sans + DM Sans · favicon `/favicon.svg` · WebSite schema JSON-LD · `metadataBase` |
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
| `src/lib/constants.ts` | `NAV_LINKS`, `FOOTER_LINKS`, `WA_URL`, `CALENDLY_URL`, `SERVICES_DROPDOWN`, `INSTAGRAM_URL`, `SITE_NAME` |
| `src/app/(site)/layout.tsx` | Route group — Header + `<main>` + Footer |
| `src/components/layout/Header.tsx` | Logo real · nav desktop con dropdown Servicios hover · CTA · sticky + blur |
| `src/components/layout/MobileMenu.tsx` | Drawer Framer Motion · sub-menú Servicios expandible · overflow-y-auto |
| `src/components/layout/Footer.tsx` | 4 columnas · social icons (Instagram `@stiv.seo`) · bottom bar `#040C15` |

### Fase 4 ✅ — Homepage (10 secciones — PortfolioPreview eliminado)

`src/app/(site)/page.tsx` — Hero · StatsStrip · Services · WhyStiven · Process · AboutPreview · Testimonials · BlogPreview · FAQ · CTAFinal

### Fase 5 ✅ — Páginas principales

| Página | Archivo page | Schemas |
|--------|-------------|---------|
| `/servicios/` | ✅ | 4× Service |
| `/portafolio/` | ✅ noindex | 3× CreativeWork |
| `/sobre-mi/` | ✅ | Person (sameAs LinkedIn/`https://www.instagram.com/stiv.seo/`) |
| `/blog/` | ✅ | Blog + 3× BlogPosting |
| `/contacto/` | ✅ | Organization (reemplazó ContactPage no-estándar) |
| `/contacto/gracias/` | ✅ | noindex |

### Fase 5.5 ✅ — Activos, MDX y SEO técnico

**Assets:**
- `public/favicon.svg` — copiado de `/Users/stiven/Downloads/favicon.svg`
- `public/logo.png` — copiado de `/Users/stiven/Sites/logo2.png`
- `src/app/layout.tsx` — `icons: { icon: "/favicon.svg" }` · `metadataBase: new URL("https://stivenramirez.com")`
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
- `SubpageHero.tsx` — eyebrow, title, titleAccent, subtitle, breadcrumb + BreadcrumbList JSON-LD
- `SubpageFeatures.tsx` — eyebrow, title, subtitle, features[]
- `SubpageProcess.tsx` — steps[]
- `SubpageCTA.tsx` — eyebrow, title, titleLine2, subtitle
- `SubpageFAQ.tsx` — `<details>/<summary>` nativo · FAQPage JSON-LD inline · 5 preguntas por página
- `SubpageRelated.tsx` — links cruzados entre servicios relacionados · 1→2 col grid

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

### Fase 8 ✅ — QA completo (Rondas 1, 2 y 3 aprobadas)

| Check | Resultado |
|-------|-----------|
| HTTP 200 — todas las rutas | ✅ OK |
| Titles únicos — 32 páginas | ✅ 0 duplicados |
| Descriptions únicas (140–160 chars) | ✅ 0 duplicados · 6 expandidas en Ronda 3 |
| H1 único por página | ✅ 0 duplicados |
| `/sitemap.xml` accesible | ✅ 200 OK · 23 URLs |
| `/robots.txt` accesible | ✅ 200 OK |
| `/contacto/gracias/` noindex | ✅ |
| `/portafolio/` noindex | ✅ (eliminada del nav + homepage) |
| FAQPage JSON-LD en 5 sub-páginas | ✅ 5 preguntas cada una |
| BreadcrumbList JSON-LD en sub-páginas | ✅ via SubpageHero |
| WebSite schema en root layout | ✅ |
| Organization schema en /contacto/ | ✅ (reemplazó ContactPage) |
| `npm run build` | ✅ Exit 0 · 32 páginas · 0 errores |

### Fase 8.5 ✅ — Correcciones pre-deploy

| Corrección | Detalle |
|-----------|---------|
| "5 años" → "9 años" | `SobreMiStory.tsx`, `sobre-mi/page.tsx`, blog MDX |
| `metadataBase` añadido | `src/app/layout.tsx` |
| `/portafolio/` noindex | robots: `{ index: false, follow: false }` |
| `PortfolioPreview` eliminado | De homepage y de imports |
| `/design-system/` eliminado | `src/app/design-system/page.tsx` borrado |
| Instagram unificado | `@stiv.seo` en constants.ts · Footer · sobre-mi schema |
| Calendly URL real | `https://calendly.com/stiv-seo03/30min` |
| `.env.local` real | WA_NUMBER, RESEND_API_KEY, CONTACT_EMAIL configurados |
| Meta descriptions x6 | Expandidas a 140–160 chars |
| ContactPage → Organization | schema en `/contacto/page.tsx` |

### Fase 8.6 ✅ — Menú dropdown Servicios

**Desktop:** hover sobre "Servicios" abre panel de 660px · 3 columnas (Diseño Web / SEO / Pauta) · 13 sub-links · bg-midnight/98 + backdrop-blur + borde sutil · se cierra con delay de 120ms al salir del área  
**Mobile:** botón "Servicios" expande sub-menú con AnimatePresence `height: 0 → auto` · categorías con label · "→" prefix en cada link

`SERVICES_DROPDOWN` en `constants.ts`:
```
Diseño Web: diseno-web-seo, diseno-web-wordpress-seo, tienda-shopify-seo, rediseno-web-seo
SEO: seo, seo-shopify, seo-wordpress, seo-local, seo-ecommerce, seo-tecnico, auditoria-seo  
Pauta: google-ads, meta-ads
```

---

## URLs activas (32 páginas + utilidades)

| URL | Estado |
|-----|--------|
| `/` | ✅ |
| `/servicios/` | ✅ |
| `/servicios/diseno-web-seo/` | ✅ FAQ + Related |
| `/servicios/diseno-web-wordpress-seo/` | ✅ FAQ + Related |
| `/servicios/tienda-shopify-seo/` | ✅ FAQ + Related |
| `/servicios/rediseno-web-seo/` | ✅ Related |
| `/servicios/seo/` | ✅ FAQ + Related |
| `/servicios/seo-shopify/` | ✅ FAQ + Related |
| `/servicios/seo-wordpress/` | ✅ Related |
| `/servicios/seo-local/` | ✅ Related |
| `/servicios/seo-ecommerce/` | ✅ Related |
| `/servicios/seo-tecnico/` | ✅ Related |
| `/servicios/auditoria-seo/` | ✅ Related |
| `/servicios/pauta-digital/` | ✅ Related |
| `/servicios/google-ads/` | ✅ Related |
| `/servicios/meta-ads/` | ✅ Related |
| `/portafolio/` | ✅ noindex |
| `/sobre-mi/` | ✅ |
| `/blog/` | ✅ |
| `/blog/cuanto-cuesta-sitio-web-colombia` | ✅ |
| `/blog/seo-shopify-checklist` | ✅ |
| `/blog/como-aparecer-google-maps` | ✅ |
| `/contacto/` | ✅ |
| `/contacto/gracias/` | ✅ noindex |
| `/sitemap.xml` | ✅ 23 URLs |
| `/robots.txt` | ✅ |

---

## Fase 9 — Deploy Hostinger ⏳

**Estado:** MCP instalado y configurado. Pendiente reinicio de Claude Code para cargar los 118 tools.

### MCP configurado

```json
// ~/.claude/settings.json
{
  "mcpServers": {
    "hostinger-mcp": {
      "type": "stdio",
      "command": "hostinger-api-mcp",
      "env": {
        "APITOKEN": "REDACTED — ver 1Password/gestor de secretos",
        "DEBUG": "false"
      }
    }
  }
}
```

### GitHub

- Repo: `stiv-seo/stivenramirez-` — branch `main` ✅ push completado

### Plan de deploy (ejecutar en nueva sesión)

**Fase 0 — Diagnóstico**
1. `list_hosting_plans` / `list_websites` — detectar tipo de plan
2. Si Node.js disponible → Ruta A · Si shared → Ruta B (Vercel)

**Ruta A — Node.js hosting**
1. Crear env vars en Hostinger (4 vars)
2. Crear Node.js app (runtime 20.x, entry: `next start`)
3. Deploy desde GitHub (`stiv-seo/stivenramirez-`, branch `main`)
4. `npm ci && npm run build && npm start`
5. Verificar SSL + dominio

**Ruta B — Vercel (fallback)**
1. `vercel.com/new` → import `stiv-seo/stivenramirez-`
2. Agregar 3 env vars
3. DNS en Hostinger: A record `@ → 76.76.21.21`, CNAME `www → cname.vercel-dns.com`

### Variables de entorno para el servidor

```env
NEXT_PUBLIC_WA_NUMBER=573015787350
RESEND_API_KEY=REDACTED — ver 1Password/gestor de secretos
CONTACT_EMAIL=hola@stivenramirez.com
NODE_ENV=production
```

### Checklist post-deploy

- [ ] `https://stivenramirez.com` carga (200 OK)
- [ ] Formulario de contacto envía email a `hola@stivenramirez.com`
- [ ] SSL activo (candado en browser)
- [ ] `/sitemap.xml` accesible
- [ ] Dropdown de servicios funciona en desktop y mobile
- [ ] PageSpeed Insights Core Web Vitals ≥ 90

---

## Pendiente post-deploy (diferido)

- Reemplazar fotos placeholder por fotos reales en `/sobre-mi/`
- Verificar dominio `hola@stivenramirez.com` en Resend antes de recibir formularios
- Enviar sitemap a Google Search Console
- Configurar Google Analytics / GA4

---

## Cómo retomar

```bash
# 1. Cargar Node.js (se borra al reiniciar)
export PATH="/tmp/node-v20.19.0-darwin-arm64/bin:$PATH"

# Si /tmp/ fue limpiado:
# curl -fsSL https://nodejs.org/dist/v20.19.0/node-v20.19.0-darwin-arm64.tar.gz \
#   -o /tmp/node.tar.gz && tar -xzf /tmp/node.tar.gz -C /tmp/

# 2. Arrancar dev
cd /Users/stiven/stivenramirez && npm run dev

# 3. Para deploy — reiniciar Claude Code primero para cargar hostinger-api-mcp (118 tools)
```

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
| **Sub-páginas** | 6 shared components (SubpageHero/Features/Process/CTA/FAQ/Related) + props — evita 84 archivos |
| **FAQ nativo** | `<details>/<summary>` HTML — crawlable sin JS, elegible para FAQPage rich results |
| **Dropdown nav** | `useRef` timeout 120ms para mantener panel abierto al mover cursor trigger → panel |
| **Instagram** | `@stiv.seo` centralizado en `constants.ts` como `INSTAGRAM_URL` |

---

## Variables de entorno

```bash
# .env.local
NEXT_PUBLIC_WA_NUMBER=573015787350
RESEND_API_KEY=REDACTED — ver 1Password/gestor de secretos
CONTACT_EMAIL=hola@stivenramirez.com
```

---

## Árbol de archivos

```
src/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx                            ✅
│   │   ├── page.tsx                              ✅ homepage (10 secciones)
│   │   ├── servicios/
│   │   │   ├── page.tsx                          ✅
│   │   │   ├── diseno-web-seo/page.tsx           ✅ FAQ + Related
│   │   │   ├── diseno-web-wordpress-seo/page.tsx ✅ FAQ + Related
│   │   │   ├── tienda-shopify-seo/page.tsx       ✅ FAQ + Related
│   │   │   ├── rediseno-web-seo/page.tsx         ✅ Related
│   │   │   ├── seo/page.tsx                      ✅ FAQ + Related
│   │   │   ├── seo-shopify/page.tsx              ✅ FAQ + Related
│   │   │   ├── seo-wordpress/page.tsx            ✅ Related
│   │   │   ├── seo-local/page.tsx                ✅ Related
│   │   │   ├── seo-ecommerce/page.tsx            ✅ Related
│   │   │   ├── seo-tecnico/page.tsx              ✅ Related
│   │   │   ├── auditoria-seo/page.tsx            ✅ Related
│   │   │   ├── pauta-digital/page.tsx            ✅ Related
│   │   │   ├── google-ads/page.tsx               ✅ Related
│   │   │   └── meta-ads/page.tsx                 ✅ Related
│   │   ├── portafolio/page.tsx                   ✅ noindex
│   │   ├── sobre-mi/page.tsx                     ✅
│   │   ├── blog/
│   │   │   ├── page.tsx                          ✅
│   │   │   └── [slug]/page.tsx                   ✅ MDXRemote + Article schema
│   │   ├── contacto/
│   │   │   ├── page.tsx                          ✅ Organization schema
│   │   │   └── gracias/page.tsx                  ✅ noindex
│   ├── api/contact/route.ts                      ✅ Resend + Zod
│   ├── globals.css                               ✅
│   ├── layout.tsx                                ✅ metadataBase + WebSite schema
│   ├── sitemap.ts                                ✅ 23 URLs
│   └── robots.ts                                 ✅
├── components/
│   ├── layout/                                   ✅ Header (dropdown) · Footer · MobileMenu (expandible)
│   ├── sections/
│   │   ├── home/                                 ✅ 10 secciones
│   │   ├── servicios/                            ✅ 5 archivos
│   │   ├── portafolio/                           ✅ 4 archivos
│   │   ├── sobre-mi/                             ✅ 5 archivos
│   │   ├── blog/                                 ✅ 3 archivos
│   │   ├── contacto/                             ✅ 2 archivos
│   │   └── subpage/                              ✅ Hero · Features · Process · CTA · FAQ · Related
│   └── ui/                                       ✅ 7 componentes
├── data/                                         ✅ faq · portfolio · posts · services · testimonials · tools
├── lib/
│   ├── constants.ts                              ✅ SERVICES_DROPDOWN · INSTAGRAM_URL · CALENDLY_URL real
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
