# Implementation Roadmap — stivenramirez.com
*Priorizado por impacto en ranking · Abril 2026*

---

## Semana 1-2 — Fundación técnica (URGENTE)

### Día 1-2: Fixes críticos de performance y duplicados
- [ ] **LCP fix** — `<Image priority>` en componente hero de homepage  
  *Impacto: LCP 5.5s → objetivo < 2.5s. Señal directa de ranking.*
  
- [ ] **www redirect** — agregar en `next.config.js`:
  ```js
  { source: '/:path*', has: [{ type: 'host', value: 'www.stivenramirez.com' }],
    destination: 'https://stivenramirez.com/:path*', permanent: true }
  ```

- [ ] **Trailing slash** — `trailingSlash: true` en `next.config.js`

- [ ] **Security headers** — `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`

### Día 3-4: Schema y estructura

- [ ] **Schema Person** en homepage y /sobre-mi/:
  ```json
  { "@type": "Person", "name": "Stiven Ramírez", "jobTitle": "Consultor SEO y Diseñador Web",
    "url": "https://stivenramirez.com", "address": { "addressLocality": "Medellín", "addressCountry": "CO" },
    "sameAs": ["LinkedIn URL", "Instagram URL"] }
  ```

- [ ] **Schema ProfessionalService** en homepage con `hasOfferCatalog`

- [ ] **Corregir title** de homepage:  
  De: "Stiven Ramírez · Diseño Web & SEO Medellín · Stiven Ramírez"  
  A: "Diseño Web & SEO en Medellín · Stiven Ramírez"

### Día 5-7: Analytics y Search Console

- [ ] Verificar propiedad `sc-domain:stivenramirez.com` en Google Search Console
- [ ] Configurar Service Account de Google Cloud (para GSC + GA4 via skill seo-google)
- [ ] Confirmar que sitemap.xml está enviado en GSC
- [ ] Configurar GA4 con filtros de tráfico interno
- [ ] Instalar `next-sitemap` si el sitemap no se actualiza automáticamente

---

## Semana 3-8 — Contenido primario (páginas de servicio)

### Páginas de servicio (objetivo: mínimo 800 palabras + FAQ + schema)

**Prioridad 1** (generan más leads directos):
- [ ] `/servicios/seo/` — expandir a 1,200+ palabras, agregar precios, proceso, casos
- [ ] `/servicios/diseno-web/wordpress/` — portfolio de proyectos, proceso, precios
- [ ] `/servicios/diseno-web/shopify/` — casos de e-commerce, integración de pagos

**Prioridad 2:**
- [ ] `/servicios/seo/local/` — casos Medellín, Google Business Profile, Maps
- [ ] `/servicios/seo/auditoria/` — qué incluye, proceso, entregable
- [ ] `/servicios/pauta/google-ads/` — qué esperar, proceso, ejemplos ROAS

**Todas las páginas de servicio deben tener:**
- [ ] Schema `Service` con `areaServed: "Colombia"`
- [ ] Schema `FAQPage` con 3-5 preguntas relevantes
- [ ] CTA principal + CTA WhatsApp como alternativa
- [ ] Enlace a casos de estudio relacionados

### /sobre-mi/ — E-E-A-T crítico
- [ ] Foto profesional real (no ilustración ni avatar)
- [ ] Historia personal: origen, por qué SEO + diseño, qué me diferencia
- [ ] Credenciales: certificaciones Google, años experiencia, número de proyectos
- [ ] 4-6 logos de clientes (con permiso o anónimos "Restaurante Medellín")
- [ ] Schema `Person` + `ProfilePage`
- [ ] Enlace a LinkedIn verificado

### Blog — primeros 4 posts nuevos
- [ ] WordPress vs Shopify Colombia 2026 (May 5)
- [ ] Cuánto cuesta el SEO en Colombia (May 19)
- [ ] Cuánto cobra un diseñador web en Colombia (Jun 2)
- [ ] Por qué tu sitio web no genera clientes (Jun 16)

---

## Semana 9-20 — Autoridad y escala

### Portafolio / Casos de estudio (mes 3-4)
- [ ] 3 casos de estudio completos (1,000+ palabras cada uno)
- [ ] Cada caso: problema → solución → resultado medible → testimonio con foto
- [ ] Schema `Article` en cada caso
- [ ] Pedirle al cliente permiso de publicar su nombre y logo

### Presencia externa
- [ ] Crear/completar perfil en Clutch.co (con reviews reales)
- [ ] Crear perfil en GoodFirms
- [ ] Perfil en DesignRush
- [ ] LinkedIn: completar al 100% + publicar 2x/semana
- [ ] Google Business Profile (si aplica dirección física o área de servicio)

### IndexNow
- [ ] Instalar `next-indexnow` o configurar manualmente
- [ ] Verificar key en `/indexnow-key.txt`
- [ ] Confirmar que nuevos posts se envían automáticamente

### Optimizaciones de performance
- [ ] Auditar bundle JS con `next build --analyze` → identificar librerías pesadas
- [ ] Implementar lazy loading para secciones below-the-fold
- [ ] Optimizar fuentes: `font-display: swap` + subset solo caracteres latinos
- [ ] Verificar que imágenes del portafolio estén en WebP con tamaño apropiado

---

## Semana 21-52 — Escala y thought leadership

### Blog a 4 posts/mes
- Seguir calendar hasta diciembre 2026
- Actualizar posts de 2026 con datos frescos en enero 2027

### Herramienta gratuita (mes 6-7)
- Calculadora de presupuesto web: `/herramientas/calculadora-web/`
- Genera backlinks pasivos + leads (email a cambio del resultado detallado)
- Anunciarlo en grupos de Facebook de emprendedores colombianos

### YouTube (mes 5+)
- Canal: tutoriales de SEO y diseño web en español para Colombia
- 1 video/semana, mínimo 5 minutos
- Cada video enlaza a post de blog relacionado
- Descripción de cada video incluye links a servicios

### Link building activo (mes 4+)
- Guest posts: 1/mes en blogs de marketing digital hispano
- HARO en español: responder consultas de periodistas sobre marketing digital
- Testimonios a herramientas que uses (Elementor, Rank Math, etc.)
- Colaboraciones con diseñadores gráficos sin SEO (referidos mutuos)

---

## Métricas de seguimiento mensual

| Métrica | Herramienta | Frecuencia |
|---------|------------|-----------|
| Tráfico orgánico | GA4 | Semanal |
| Posiciones de keywords | GSC | Quincenal |
| LCP / CWV | PSI API | Mensual |
| Backlinks nuevos | Ahrefs/GSC | Mensual |
| Consultas desde orgánico | GA4 (goal conversion) | Semanal |
| Páginas indexadas | GSC (Coverage) | Mensual |
| CTR promedio en GSC | GSC | Quincenal |

---

## Dependencias y riesgos

| Riesgo | Probabilidad | Mitigación |
|--------|-------------|-----------|
| LCP no mejora con `<Image priority>` | Media | Investigar elemento LCP real con DevTools, puede ser un bloque de texto o background |
| Pocas consultas mes 1-3 | Alta (normal) | Medir micro-conversiones: WhatsApp clicks, tiempo en página de servicio |
| Google no indexa páginas nuevas rápido | Media | GSC fetch & render manual, IndexNow para Bing mientras |
| Competidor copia contenido | Baja | Schema de autor + fecha de publicación, canonical tags |
| Algoritmo update de Google | Baja-Media | E-E-A-T sólido protege de updates: autor real, casos reales, contenido profundo |
