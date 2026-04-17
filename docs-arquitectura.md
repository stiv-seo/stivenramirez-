# Arquitectura — stivenramirez.com
# SEO-first · Next.js 14 · Colombia

---

## Estrategia de posicionamiento

**Keyword principal:** "diseño web con SEO Colombia"
**Posicionamiento:** El único profesional que diseña Y posiciona en Google — en un solo servicio.

**Por qué esta arquitectura:**
Cada sub-página de servicio SEO captura una búsqueda específica. Un cliente que busca "SEO para Shopify Colombia" no llega a una página genérica — llega directamente a `/servicios/seo-shopify/` con toda la información relevante para su caso.

---

## Sitemap completo

### Páginas principales

| Ruta | Título SEO | Keyword principal | Palabras objetivo |
|------|-----------|------------------|-------------------|
| `/` | Stiven Ramírez · SEO & Diseño Web Colombia | diseño web con seo colombia | ~1.400 |
| `/servicios/` | Servicios SEO y Diseño Web · stivenramirez.com | servicios seo diseño web colombia | ~1.000 |
| `/portafolio/` | Portafolio · Resultados reales de SEO y Diseño Web | portafolio diseño web seo colombia | ~600 |
| `/sobre-mi/` | Stiven Ramírez · Consultor SEO y Diseñador Web en Colombia | consultor seo diseñador web colombia | ~800 |
| `/blog/` | Blog SEO y Diseño Web · stivenramirez.com | blog seo diseño web colombia | Hub |
| `/contacto/` | Contacto · Stiven Ramírez | contactar consultor seo colombia | ~200 |

---

### Bloque 1 — Diseño Web con SEO integrado

| Ruta | Título SEO | Keyword principal | Intención |
|------|-----------|------------------|-----------|
| `/servicios/diseno-web-seo/` | Diseño Web con SEO Integrado Colombia | diseño web con seo colombia | Transaccional |
| `/servicios/diseno-web-wordpress-seo/` | Diseño Web WordPress con SEO · Colombia | diseño web wordpress con seo | Transaccional |
| `/servicios/tienda-shopify-seo/` | Tienda Shopify con SEO · Colombia | tienda shopify con seo colombia | Transaccional |
| `/servicios/rediseno-web-seo/` | Rediseño Web sin perder el SEO · Colombia | rediseño web seo colombia | Transaccional |

---

### Bloque 2 — SEO puro (para quien ya tiene sitio)

| Ruta | Título SEO | Keyword principal | Intención |
|------|-----------|------------------|-----------|
| `/servicios/seo/` | Consultoría SEO Freelance · Colombia | consultor seo freelance colombia | Transaccional |
| `/servicios/seo-shopify/` | SEO para Tiendas Shopify en Colombia | seo para shopify colombia | Transaccional alta |
| `/servicios/seo-wordpress/` | SEO para WordPress · Colombia | seo para wordpress colombia | Transaccional |
| `/servicios/seo-local/` | SEO Local · Colombia y Medellín | seo local colombia medellin | Transaccional local |
| `/servicios/seo-ecommerce/` | SEO para E-commerce · Colombia | seo para ecommerce colombia | Transaccional |
| `/servicios/seo-tecnico/` | SEO Técnico · Auditoría y Corrección | seo tecnico colombia | Transaccional |
| `/servicios/auditoria-seo/` | Auditoría SEO Gratuita · Colombia | auditoria seo gratis colombia | Lead magnet |

---

### Bloque 3 — Pauta digital

| Ruta | Título SEO | Keyword principal | Intención |
|------|-----------|------------------|-----------|
| `/servicios/pauta-digital/` | Google Ads y Meta Ads · Colombia | google ads meta ads colombia | Transaccional |
| `/servicios/google-ads/` | Google Ads para Pymes · Colombia | google ads colombia pymes | Transaccional |
| `/servicios/meta-ads/` | Meta Ads · Facebook e Instagram Colombia | meta ads facebook instagram colombia | Transaccional |

---

### Blog — Clusters editoriales

**Cluster 1: Diseño Web & WordPress**
| URL | Keyword | Tipo |
|-----|---------|------|
| `/blog/cuanto-cuesta-sitio-web-colombia/` | cuánto cuesta un sitio web colombia 2026 | Informacional |
| `/blog/wordpress-vs-shopify/` | wordpress vs shopify colombia | Comparación |
| `/blog/core-web-vitals-guia/` | core web vitals 2026 | Informacional |
| `/blog/errores-diseno-web-seo/` | errores diseño web que destruyen SEO | Informacional |
| `/blog/que-es-seo-tecnico/` | qué es el SEO técnico | Informacional |

**Cluster 2: SEO local**
| URL | Keyword | Tipo |
|-----|---------|------|
| `/blog/como-aparecer-google-maps/` | cómo aparecer en google maps | Informacional |
| `/blog/seo-local-colombia/` | seo local colombia | Informacional |
| `/blog/google-business-profile-guia/` | google business profile guia completa | Informacional |
| `/blog/palabras-clave-negocios-locales/` | keywords negocios locales colombia | Informacional |

**Cluster 3: E-commerce & Conversión**
| URL | Keyword | Tipo |
|-----|---------|------|
| `/blog/seo-shopify-checklist/` | seo para shopify checklist | Informacional |
| `/blog/como-aumentar-ventas-shopify/` | cómo aumentar ventas shopify | Informacional |
| `/blog/pasarelas-pago-colombia/` | pasarelas de pago colombia 2026 | Informacional |
| `/blog/tasa-conversion-ecommerce/` | tasa de conversión ecommerce | Informacional |

**Cluster 4: Estrategia digital**
| URL | Keyword | Tipo |
|-----|---------|------|
| `/blog/google-ads-vs-seo/` | google ads vs seo cuál conviene más | Comparación |
| `/blog/cuanto-invertir-publicidad-digital/` | cuánto invertir publicidad digital colombia | Informacional |
| `/blog/como-medir-roi-sitio-web/` | cómo medir ROI sitio web | Informacional |

---

### Subdominios

| Subdominio | Propósito | Prioridad |
|-----------|----------|-----------|
| `brief.stivenramirez.com` | Formulario de onboarding para nuevos clientes | Inmediata |
| `auditoria.stivenramirez.com` | Landing de auditoría SEO gratuita | Con el lanzamiento |
| `reporte.stivenramirez.com` | Portal de reportes para clientes activos | Mes 2-3 |
| `recursos.stivenramirez.com` | Hub de recursos y checklists gratuitos | Mes 2-3 |

---

## Estructura de internal linking

### Homepage → Servicios
- Cards de servicios → sub-páginas individuales
- CTA "Ver todos los servicios" → `/servicios/`
- Footer → todas las sub-páginas principales

### Servicios hub → Sub-páginas
- Cada servicio en el hub → su sub-página específica
- Sub-páginas → se enlazan entre sí cuando son complementarias

### Blog → Servicios
- Cada artículo tiene al menos 2 internal links a páginas de servicio relacionadas
- CTA de auditoría gratis al final de cada artículo → `/servicios/auditoria-seo/`

### Portafolio → Servicios
- Cada caso → enlaza al servicio que se aplicó
- Botón "Solicitar proyecto similar" → `/contacto/`

---

## Schema markup por tipo de página

| Página | Schema types |
|--------|-------------|
| Homepage | Person + LocalBusiness + WebSite |
| Servicios hub | Service |
| Sub-páginas servicio | Service + FAQPage |
| Portafolio individual | CreativeWork |
| Sobre mí | Person |
| Blog artículo | Article + BreadcrumbList |
| Blog listado | Blog |
| Contacto | ContactPage |

---

## Metadata template

### Homepage
```
title: "Stiven Ramírez | Consultor SEO & Diseñador Web Colombia"
description: "Diseño webs WordPress y Shopify con SEO integrado desde el primer día. Posiciona en Google y genera ventas. Medellín, Colombia."
keywords: ["diseño web colombia", "consultor seo colombia", "wordpress seo", "shopify seo", "diseño web medellin"]
```

### Sub-páginas SEO (ejemplo Shopify)
```
title: "SEO para Tiendas Shopify en Colombia · Stiven Ramírez"
description: "Posiciono tu tienda Shopify en Google para que tus productos aparezcan cuando tus clientes los buscan. Planes desde $500 USD/mes."
keywords: ["seo shopify colombia", "posicionar tienda shopify", "seo ecommerce colombia"]
```

---

## Notas de implementación Next.js

### App Router structure
```
app/
├── (site)/          # Route group — comparte layout con header/footer
│   ├── layout.tsx   # Layout con Header y Footer
│   ├── page.tsx     # Homepage
│   ├── servicios/
│   │   ├── page.tsx
│   │   └── [servicio]/page.tsx  # Para sub-páginas de servicios
│   └── ...
├── layout.tsx       # Root layout — fuentes, metadata base
└── globals.css
```

### generateMetadata
Cada página debe exportar `generateMetadata` o `metadata` con title, description, keywords y openGraph.

### Sitemap dinámico
```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  // Incluir todas las rutas estáticas + posts de blog dinámicos
}
```
