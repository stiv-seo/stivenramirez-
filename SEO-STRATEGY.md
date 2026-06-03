# SEO Strategy — stivenramirez.com
*Generado: 22 abril 2026 · Revisión: trimestral*

---

## Resumen ejecutivo

**Negocio:** Marca personal de Stiven Ramírez — Consultor SEO y Diseñador Web freelance  
**Mercado:** Colombia (Medellín primario) + Latam  
**Stack:** Next.js + Vercel  
**Estado actual:** Sitio en etapa inicial (25 URLs, 3 posts, sin tráfico orgánico medible aún)  
**Horizonte del plan:** 12 meses (abril 2026 – abril 2027)

**Objetivo principal:** Generar 5–10 consultas de clientes al mes desde búsqueda orgánica al mes 9.

---

## 1. Diagnóstico de partida

### Fortalezas
- Sitio técnicamente sólido (SEO: 100, Best Practices: 100 en Lighthouse)
- Arquitectura de URLs bien planificada y coherente
- Framework Next.js con SSR — sin problemas de JS rendering
- FAQPage schema implementado en homepage
- CLS: 0 en mobile y desktop
- Tagline claro: "Diseño webs que posicionan en Google y generan ventas"

### Debilidades críticas
- LCP mobile: 5.5s (umbral Google: < 2.5s) — penaliza ranking directamente
- www sin redirect → duplicado de contenido
- Sin tráfico CrUX (insuficiente volumen Chrome todavía)
- Sin schema `Person` — invisible para Knowledge Graph
- Solo 3 artículos de blog — ningún cluster terminado
- Sin backlinks externos relevantes (estimado)
- Sin presencia confirmada en Google Business Profile

### Oportunidades
- Mercado colombiano poco explotado con contenido SEO especializado en español
- Alta demanda de freelancers de confianza vs agencias genéricas
- Nicho de Shopify Colombia casi sin cubrir a nivel contenido
- Blog en 4 clusters puede capturar búsquedas informacionales de alto volumen local
- Personal brand genera autoridad más rápido que una agencia sin cara visible

---

## 2. Palabras clave objetivo

### Tier 1 — Transaccionales (generan consultas directas)

| Keyword | Intención | Dificultad estimada | Página destino |
|---------|-----------|--------------------|----|
| consultor seo freelance colombia | Compra | Media | /servicios/seo/ |
| diseñador web wordpress medellín | Compra | Media-Baja | /servicios/diseno-web/wordpress/ |
| diseño tiendas shopify colombia | Compra | Media | /servicios/diseno-web/shopify/ |
| seo para tiendas shopify colombia | Compra | Baja | /servicios/seo/shopify/ |
| agencia seo medellín | Compra | Alta | /servicios/seo/ |
| rediseño web empresa medellín | Compra | Baja | /servicios/diseno-web/rediseno/ |
| consultoría seo colombia | Compra | Media | /servicios/seo/consultoria/ |
| auditoría seo colombia | Compra | Baja | /servicios/seo/auditoria/ |

### Tier 2 — Informacionales (capturan tráfico, nutren hacia compra)

| Keyword | Volumen estimado | Cluster | Página destino |
|---------|-----------------|---------|----------------|
| cuánto cuesta un sitio web en colombia | Alto | Diseño Web | /blog/cuanto-cuesta-sitio-web-colombia/ ✅ |
| cómo aparecer en google maps colombia | Alto | SEO Local | /blog/como-aparecer-google-maps/ ✅ |
| seo shopify checklist | Medio | E-commerce | /blog/seo-shopify-checklist/ ✅ |
| wordpress vs shopify colombia 2026 | Medio | Diseño Web | por crear |
| cuánto cuesta el seo en colombia | Alto | SEO | por crear |
| seo local para restaurantes medellín | Medio | SEO Local | por crear |
| velocidad de carga sitio web seo | Medio | Técnico | por crear |
| cuánto cobra un diseñador web en colombia | Alto | Diseño Web | por crear |

### Tier 3 — Comparación y alternativas (mitad de funnel)

| Keyword | Página destino |
|---------|----------------|
| shopify vs woocommerce colombia | por crear |
| mejor agencia seo medellín | por crear |
| freelancer vs agencia web colombia | por crear |

---

## 3. Análisis competitivo

### Competidores directos en Colombia

| Competidor | Fortaleza | Tu ventaja |
|------------|-----------|-----------|
| Agencias grandes (Adstyle, iAgencia) | Portafolio amplio, DA alto | Precio, trato personal, especialización SEO |
| Freelancers en Workana/Fiverr | Precio bajo | Calidad, posicionamiento, garantías |
| Consultores SEO sin sitio web | Presencia local | Demuestras lo que vendes (tu propio SEO) |
| WordPress.com / Wix | Precio | Resultados reales, custom |

### Gaps de contenido detectados
- Nadie cubre bien "SEO Shopify Colombia" — oportunidad inmediata
- "Cuánto cuesta SEO en Colombia" — contenido existente es muy genérico
- "Diseñador web Medellín" — mayoría son agencias sin cara, tú tienes ventaja de personal brand
- Comparativas España vs Colombia — muchos buscan proveedores de habla hispana fuera de España

---

## 4. Arquitectura de contenido

### Sitemap objetivo (12 meses)

```
stivenramirez.com/
├── /                          ✅ live
├── /sobre-mi/                 ✅ live (E-E-A-T crítico)
├── /portafolio/               ✅ live (falta contenido real)
├── /contacto/                 ✅ live
│
├── /servicios/                ✅ live
│   ├── /diseno-web/           ✅ live
│   │   ├── /wordpress/        ✅ live — PRIORIDAD 1
│   │   ├── /shopify/          ✅ live — PRIORIDAD 1
│   │   ├── /rediseno/         ✅ live
│   │   └── /seo/              ✅ live (SEO dentro de diseño web)
│   ├── /seo/                  ✅ live — PRIORIDAD 1
│   │   ├── /shopify/          ✅ live
│   │   ├── /wordpress/        ✅ live
│   │   ├── /local/            ✅ live
│   │   ├── /ecommerce/        ✅ live
│   │   ├── /tecnico/          ✅ live
│   │   ├── /auditoria/        ✅ live
│   │   └── /consultoria/      ✅ live
│   └── /pauta/                ✅ live
│       ├── /google-ads/       ✅ live
│       └── /meta-ads/         ✅ live
│
├── /blog/                     ✅ live
│   ├── Cluster 1: Diseño Web (8 posts objetivo)
│   ├── Cluster 2: SEO Colombia (8 posts objetivo)
│   ├── Cluster 3: E-commerce Shopify (6 posts objetivo)
│   └── Cluster 4: Estrategia digital pymes (6 posts objetivo)
│
└── [Futuro]
    ├── /casos/                — portafolio detallado (mes 4-6)
    └── /herramientas/         — recursos gratuitos (mes 6-9)
```

### Páginas faltantes de alto impacto (Tier 1 a crear)

1. **Casos de estudio** `/casos/[cliente]/` — E-E-A-T crítico para cerrar ventas
2. **Herramientas gratuitas** — calculadora de presupuesto web, generan backlinks naturales
3. **Comparativas** `/blog/wordpress-vs-shopify/` — alto volumen, alta conversión

---

## 5. Plan de contenido — Blog

### Cadencia recomendada
- **Meses 1-3:** 2 posts/mes (calidad sobre cantidad, mínimo 1,500 palabras)
- **Meses 4-6:** 3 posts/mes
- **Meses 7-12:** 4 posts/mes

### Posts prioritarios por cluster

#### Cluster 1 — Diseño Web & WordPress (genera leads directos)
| Post | Keyword objetivo | Estado | Prioridad |
|------|-----------------|--------|-----------|
| Cuánto cuesta un sitio web en Colombia 2026 | cuánto cuesta sitio web colombia | ✅ publicado | — |
| WordPress vs Shopify Colombia 2026 | wordpress vs shopify colombia | por crear | ⭐ ALTA |
| Cuánto cobra un diseñador web en Colombia | cuánto cobra diseñador web colombia | por crear | ⭐ ALTA |
| Cuándo hacer rediseño web (señales) | rediseño web colombia | por crear | Media |
| Elementor vs Divi: cuál elegir en 2026 | elementor vs divi | por crear | Media |
| Landing pages que convierten: guía completa | landing page diseño colombia | por crear | Media |

#### Cluster 2 — SEO para negocios Colombia (posiciona tu expertise)
| Post | Keyword objetivo | Estado | Prioridad |
|------|-----------------|--------|-----------|
| Cómo aparecer en Google Maps | cómo aparecer google maps colombia | ✅ publicado | — |
| Cuánto cuesta el SEO en Colombia 2026 | cuánto cuesta seo colombia | por crear | ⭐ ALTA |
| SEO local para restaurantes en Medellín | seo restaurantes medellín | por crear | ⭐ ALTA |
| Tiempo para ver resultados de SEO | cuánto tarda seo resultados | por crear | Media |
| Cómo hacer una auditoría SEO básica | auditoría seo colombia | por crear | Media |
| SEO vs Google Ads: qué funciona mejor | seo vs google ads colombia | por crear | Media |

#### Cluster 3 — E-commerce & Shopify
| Post | Keyword objetivo | Estado | Prioridad |
|------|-----------------|--------|-----------|
| SEO Shopify: checklist completo | seo shopify checklist | ✅ publicado | — |
| Cómo vender más en Shopify Colombia | vender shopify colombia | por crear | ⭐ ALTA |
| Shopify vs WooCommerce en Colombia | shopify vs woocommerce colombia | por crear | Alta |
| Apps Shopify esenciales para Colombia | apps shopify colombia | por crear | Media |
| Cómo hacer dropshipping en Colombia | dropshipping colombia shopify | por crear | Media |

#### Cluster 4 — Estrategia digital pymes
| Post | Keyword objetivo | Estado | Prioridad |
|------|-----------------|--------|-----------|
| Por qué tu sitio web no genera clientes | sitio web sin clientes | por crear | ⭐ ALTA |
| Google Ads para pymes: guía 2026 | google ads pymes colombia | por crear | Alta |
| Cómo medir el ROI del marketing digital | roi marketing digital colombia | por crear | Media |
| WhatsApp Business para empresas | whatsapp business empresa colombia | por crear | Media |

---

## 6. E-E-A-T — Plan de autoridad

### Página /sobre-mi/ (debe incluir)
- [ ] Foto profesional real (no ilustración)
- [ ] Historia personal: cómo llegué al SEO y diseño web
- [ ] Credenciales verificables: certificaciones Google, años de experiencia
- [ ] Número de proyectos completados (con fecha)
- [ ] Logos de clientes (con permiso)
- [ ] Enlace a LinkedIn y perfil público verificado
- [ ] Schema `Person` con `sameAs` a todos los perfiles sociales

### /portafolio/ — Casos de estudio (mes 3-4)
Cada caso debe incluir:
- Cliente (nombre real o industria anónima)
- Problema que tenían antes
- Solución implementada
- Resultados medibles: "+280% tráfico en 4 meses"
- Testimonio con nombre y foto
- Schema `Article` + cita del cliente

### Señales externas de autoridad
- [ ] Perfil LinkedIn completo y activo (publicar 2x/semana)
- [ ] Google Business Profile (Medellín — si tienes oficina o trabajas local)
- [ ] Directorios: Workana, Freelancer.com, Clutch.co
- [ ] YouTube: tutoriales cortos de SEO/WordPress (alta correlación con AI visibility)
- [ ] Menciones en medios: escribir para Entrepreneur ES, HubSpot ES blog

---

## 7. Schema markup plan

| Página | Schema actual | Schema a agregar | Prioridad |
|--------|--------------|-----------------|-----------|
| Homepage | WebSite, Organization, FAQPage | **Person**, ProfessionalService | ⭐ CRÍTICO |
| /sobre-mi/ | ninguno | Person, ProfilePage | ⭐ CRÍTICO |
| /servicios/seo/ | ninguno | Service, ProfessionalService | Alta |
| /servicios/diseno-web/ | ninguno | Service | Alta |
| Cada servicio | ninguno | Service + FAQPage | Alta |
| /portafolio/ | ninguno | ItemList | Media |
| Cada caso | ninguno | Article + Review | Media |
| /blog/[post]/ | ninguno | Article, BlogPosting, BreadcrumbList | Alta |

---

## 8. Optimización técnica — Prioridades inmediatas

Ordenadas por impacto en ranking:

1. **LCP < 2.5s en mobile** — `<Image priority>` en hero de Next.js  
   *Impacto directo en Core Web Vitals = señal de ranking*

2. **Redirect www → non-www** — `next.config.js` redirects  
   *Previene dilución de PageRank entre dos versiones del sitio*

3. **Trailing slash consistente** — `trailingSlash: true` en `next.config.js`  
   *Elimina URLs duplicadas para todos los servicios y blog*

4. **Security headers** — `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`  
   *Aporta a la puntuación de Best Practices (ya en 100, mantener)*

5. **Schema `Person`** — agregar a homepage y /sobre-mi/  
   *Construye entidad Knowledge Graph para marca personal*

6. **IndexNow** — implementar para Bing/Yandex  
   *Indexación inmediata en motores alternativos (10-15% del mercado)*

---

## 9. Link building

### Estrategia meses 1-6 (volumen bajo, calidad alta)

| Táctica | Fuente | Esfuerzo | Valor |
|---------|--------|----------|-------|
| Directorios profesionales | Clutch.co, GoodFirms, DesignRush | Bajo | Alto DA |
| Foros y comunidades | Reddit r/Colombia, grupos FB pymes CO | Bajo | Tráfico referral |
| Guest posting | Blogs de marketing digital en español | Medio | DA + autoridad |
| Testimonios a herramientas | Elementor, Ahrefs, SEMrush ES | Bajo | DA altísimo |
| HARO / Qwoted en español | Responder consultas de periodistas | Medio | Menciones autoridad |
| YouTube channel propio | Tutoriales SEO Colombia | Alto | Brand + backlinks |
| Casos de estudio públicos | Publicar resultados de clientes | Medio | Backlinks naturales |

### Estrategia meses 7-12 (escala)
- Colaboraciones con otros freelancers (diseñadores sin SEO, SEOs sin diseño)
- Podcast appearances en podcasts de emprendimiento colombiano
- Herramientas gratuitas (generan backlinks pasivos): calculadora costo web

---

## 10. KPIs y metas

### Baseline (abril 2026)
- Tráfico orgánico: ~0 (sin datos CrUX, recién lanzado)
- Keywords en top 100: estimado < 10
- Backlinks externos: estimado < 20
- Páginas indexadas: 25
- Performance mobile: 71/100
- LCP mobile: 5.5s

### Proyecciones

| Métrica | Mes 3 (jul 2026) | Mes 6 (oct 2026) | Mes 12 (abr 2027) |
|---------|-----------------|-----------------|-------------------|
| Sesiones orgánicas/mes | 200–400 | 800–1,500 | 3,000–6,000 |
| Keywords top 10 | 3–8 | 15–30 | 40–80 |
| Keywords top 100 | 20–40 | 80–150 | 300–500 |
| Backlinks dominios únicos | 10–20 | 30–60 | 100–200 |
| Consultas desde orgánico | 1–2/mes | 3–5/mes | 7–12/mes |
| LCP mobile | < 2.5s | < 2.5s | < 2.0s |
| Performance mobile | 85+ | 88+ | 90+ |

---

## 11. Roadmap de implementación

### Fase 1 — Fundación técnica (semanas 1-2, AHORA)
- [ ] Fix LCP: `<Image priority>` en componente hero
- [ ] Fix www redirect en `next.config.js`
- [ ] Fix trailing slash (`trailingSlash: true`)
- [ ] Agregar security headers
- [ ] Agregar schema `Person` en homepage y /sobre-mi/
- [ ] Verificar propiedad en Google Search Console
- [ ] Configurar Service Account para GSC + GA4

### Fase 2 — Contenido primario (semanas 3-8)
- [ ] Completar contenido de páginas de servicio (mín 800 palabras cada una)
  - /servicios/seo/ — texto completo, precios, proceso, FAQ
  - /servicios/diseno-web/wordpress/ — idem
  - /servicios/diseno-web/shopify/ — idem
- [ ] /sobre-mi/ con foto real, historia, credenciales, schema Person
- [ ] Publicar 4 posts prioritarios (ver Cluster 1 y 2)
- [ ] Schema Service en cada página de servicio
- [ ] FAQPage en cada servicio
- [ ] Configurar Google Business Profile

### Fase 3 — Blog y autoridad (semanas 9-20)
- [ ] 2 posts/mes, rotando clusters
- [ ] 3 casos de estudio completos en /portafolio/
- [ ] Testimonios reales con foto y nombre en homepage
- [ ] Outreach para 10 backlinks de directorios
- [ ] LinkedIn activo (2 posts/semana vinculados al blog)
- [ ] IndexNow implementado

### Fase 4 — Escala y autoridad (semanas 21-52)
- [ ] 4 posts/mes
- [ ] Guest posts en 3 medios de marketing digital español
- [ ] YouTube: 1 video/semana (tutoriales SEO Colombia)
- [ ] Herramienta gratuita (calculadora presupuesto web)
- [ ] Review de GSC data cada 2 semanas — pivot de keywords según datos reales

---

## 12. GEO — Visibilidad en IA (ChatGPT, Perplexity, Google AI Overviews)

Para que Stiven Ramírez sea citado cuando alguien pregunta "¿quién es buen consultor SEO en Colombia?":

- [ ] Menciones consistentes en toda la web: nombre + "consultor SEO Medellín Colombia"
- [ ] Schema `Person` con `sameAs` a LinkedIn, Instagram, Twitter/X
- [ ] Casos de estudio con métricas citables: "+280% tráfico orgánico en 4 meses para tienda Shopify colombiana"
- [ ] Estructura de artículos con preguntas directas como H2 (el formato que citan las IAs)
- [ ] Wikipedia-style: crear o editar página si hay suficiente notabilidad (mes 9+)
- [ ] Perfil en Clutch con reviews reales (fuente que cita Perplexity frecuentemente)
- [ ] Responder en Quora en español sobre preguntas de SEO Colombia

---

*Actualizar este documento cada trimestre con datos reales de GSC.*
