# Brandbook — Stiven Ramírez
# Diseño Web & SEO — Sistema de Identidad Visual

---

## Posicionamiento

**Tagline:** Diseño webs que posicionan y generan ventas.

**Propuesta de valor:** El único profesional en Colombia que diseña el sitio web Y lo posiciona en Google — en un solo contrato, con un solo interlocutor.

**No eres:**
- Solo un diseñador web
- Solo un consultor SEO
- Una agencia con juniors rotando

**Sí eres:**
- El especialista que construye y posiciona al mismo tiempo
- El profesional que habla de negocio, no de tecnología
- El que entrega resultados medibles, no horas trabajadas

---

## Paleta de colores

| Nombre | HEX | Uso |
|--------|-----|-----|
| Midnight | `#0B1829` | Color principal — fondos oscuros, header, secciones dark |
| Navy | `#0F2D52` | Variante de Midnight — gradientes, backgrounds secundarios |
| Teal | `#00C4B4` | Acento principal — CTAs, highlights, iconos activos |
| Teal Dim | `rgba(0,196,180,0.1)` | Fondos de badges, checks, elementos sutiles teal |
| Off-White | `#F5F2EC` | Fondo principal claro — secciones alternas |
| Warm White | `#FDFCFA` | Fondo base del cuerpo |
| Slate | `#5E6E82` | Texto secundario, descripciones |
| Slate Light | `#94A3B8` | Texto terciario, labels, metadata |
| Amber | `#F59E0B` | Acento secundario — urgencia, badges, categorías blog |
| Text Dark | `#1A2B3C` | Texto principal sobre fondo claro |
| Text Mid | `#3D5166` | Párrafos y texto descriptivo |

### Combinaciones permitidas
- Midnight + Teal — combinación principal
- Off-White + Midnight — páginas claras
- Midnight + Amber — solo llamadas a acción y badges

### Combinaciones prohibidas
- Teal + Amber — demasiado saturado
- Teal sobre blanco puro — bajo contraste
- Blanco puro + Off-White — sin contraste

---

## Tipografía

### Display / Títulos
- **Familia:** Plus Jakarta Sans
- **Pesos:** 700 (Bold), 800 (ExtraBold)
- **Uso:** H1, H2, H3, botones, logo, números grandes
- **Letter spacing:** -1.5px en H1, -1px en H2, -0.5px en H3
- **Line height:** 1.05 en H1, 1.1 en H2

### Cuerpo
- **Familia:** DM Sans
- **Pesos:** 300 (Light), 400 (Regular), 500 (Medium)
- **Uso:** párrafos, labels, navegación, metadata
- **Line height:** 1.75 en párrafos normales

### Escala tipográfica
| Elemento | Familia | Peso | Tamaño (desktop) | Tamaño (mobile) |
|----------|---------|------|-------------------|-----------------|
| H1 | Plus Jakarta Sans | 800 | clamp(40px, 5vw, 64px) | clamp(32px, 9vw, 48px) |
| H2 | Plus Jakarta Sans | 800 | clamp(28px, 4vw, 48px) | clamp(24px, 7vw, 36px) |
| H3 | Plus Jakarta Sans | 700 | 22px | 18px |
| H4 | Plus Jakarta Sans | 700 | 17px | 16px |
| Body | DM Sans | 400 | 16px | 15px |
| Small | DM Sans | 400 | 14px | 13px |
| Label | DM Sans | 500 | 11px + uppercase + letter-spacing 3px | igual |
| Eyebrow | DM Sans | 600 | 11px + uppercase + letter-spacing 4px | igual |

### Google Fonts URL
```
https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap
```

---

## Logo y monograma

### Logo completo
- Monograma SR (38x38px, border-radius 8px, fondo Teal, texto Midnight, Plus Jakarta Sans 800)
- Texto "Stiven Ramírez" (Plus Jakarta Sans 800, 16px, color según fondo)
- Subtítulo "SEO & Diseño Web" o "Diseño Web & SEO" (DM Sans 500, 10px, uppercase, letter-spacing 2px, Slate Light)

### Monograma solo
- Para favicon: 32x32px mínimo
- Para avatar redes: fondo Midnight, monograma Teal
- Para header mobile: mismo componente, mismo tamaño

### Reglas del logo
- Espacio mínimo: equivalente a la altura de la letra "R" alrededor
- Tamaño mínimo logo completo: 160px ancho
- Tamaño mínimo monograma: 32px
- No distorsionar proporciones
- No aplicar sombras ni efectos
- No usar sobre fotografías sin overlay

---

## Botones

### Primary (CTA principal)
```
background: #00C4B4
color: #0B1829
font-family: Plus Jakarta Sans
font-weight: 700
font-size: 14px
padding: 14px 28px
border-radius: 6px
hover: background #00E5D3, translateY(-1px), shadow teal
```

### WhatsApp
```
background: #25D366
color: white
font-family: Plus Jakarta Sans
font-weight: 700
font-size: 14px
padding: 14px 28px
border-radius: 6px
hover: background #20b858, translateY(-1px)
```

### Dark
```
background: #0B1829
color: white
font-family: Plus Jakarta Sans
font-weight: 700
font-size: 14px
padding: 14px 28px
border-radius: 6px
hover: background #0f2035
```

### Ghost
```
background: transparent
color: #00C4B4
border-bottom: 1px solid #00C4B4
font-family: Plus Jakarta Sans
font-weight: 700
font-size: 13px
padding-bottom: 2px
border-radius: 0
hover: opacity 0.75
```

### Outline Dark (sobre fondos claros)
```
border: 1.5px solid rgba(0,0,0,0.07)
color: #1A2B3C
background: white
border-radius: 6px
hover: border-color #00C4B4, color #00C4B4
```

---

## Espaciado y layout

### Container
- Max width: 1160px
- Padding horizontal: 60px (desktop), 32px (tablet), 20px (mobile)

### Secciones
- Padding vertical desktop: 100px
- Padding vertical tablet: 72px
- Padding vertical mobile: 60px

### Grid
- 12 columnas con gap 24px
- Hero: 2 columnas (60/40)
- Servicios: 2 columnas (50/50)
- About: 2 columnas (50/50)
- Stats: 4 columnas iguales
- Process: 4 columnas iguales
- Testimonials: 3 columnas iguales
- Portfolio: 3 columnas iguales
- Blog: 3 columnas iguales
- Pricing: 3 columnas iguales

### Breakpoints
- Mobile: 375px
- Mobile large: 480px
- Tablet: 768px
- Desktop small: 1024px
- Desktop: 1280px
- Desktop large: 1440px

---

## Fondos de sección

### Patrón de alternancia (homepage)
1. Hero — Midnight #0B1829
2. Stats strip — Midnight #0B1829
3. Servicios — Off-White #F5F2EC
4. Por qué yo — Warm White #FDFCFA
5. Proceso — Off-White #F5F2EC
6. Sobre mí — Warm White #FDFCFA
7. Testimonios — Off-White #F5F2EC
8. Portafolio — Warm White #FDFCFA
9. Blog — Off-White #F5F2EC
10. FAQ — Warm White #FDFCFA
11. CTA Final — Midnight #0B1829

### Efecto grid decorativo (secciones dark)
```css
background-image:
  linear-gradient(rgba(0,196,180,0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,196,180,0.04) 1px, transparent 1px);
background-size: 48px 48px;
```

### Efecto glow (secciones dark con énfasis)
```css
position: absolute;
width: 600px; height: 600px;
border-radius: 50%;
background: radial-gradient(circle, rgba(0,196,180,0.1) 0%, transparent 70%);
```

---

## Tono de voz

### Cómo habla la marca

**Directo:** Sin tecnicismos innecesarios. El cliente entiende exactamente qué haces.

**Enfocado en negocio:** No hablas de tecnología, hablas de resultados. "Tu sitio va a aparecer en Google" no "implementamos arquitectura SEO con schema markup".

**Educativo sin vender humo:** El cliente no sabe que necesita SEO hasta que alguien se lo explica bien. Tú eres ese alguien.

**Con criterio:** No aceptas cualquier proyecto. Tienes un proceso y un estándar.

### ✅ Así SÍ habla la marca
- "Tu sitio va a posicionar en Google desde el día del lanzamiento."
- "No tienes que contratar a un diseñador y luego a un SEO. Yo hago los dos."
- "Cuando te entrego el sitio, ya está configurado para aparecer en Google."

### ❌ Así NO habla la marca
- "Ofrezco servicios de diseño web, SEO, Google Ads, Meta Ads, consultoría..." (lista genérica)
- "Diseño páginas web bonitas y funcionales con los mejores estándares del mercado." (sin diferencial)
- "Implementamos estrategias de posicionamiento orgánico con enfoque data-driven." (jerga vacía)

---

## Componentes visuales recurrentes

### Eyebrow
```
font-size: 11px
font-weight: 600
letter-spacing: 4px
text-transform: uppercase
color: #00C4B4
margin-bottom: 14px
```

### Section number (decorativo)
```
font-family: Plus Jakarta Sans
font-size: clamp(80px, 10vw, 140px)
font-weight: 800
color: rgba(0,196,180,0.06) /* en fondos claros */
color: rgba(0,196,180,0.04) /* en fondos oscuros */
position: absolute
pointer-events: none
user-select: none
```

### Badge
```
font-size: 9-10px
font-weight: 700
letter-spacing: 0.1em
text-transform: uppercase
padding: 4px 10px
border-radius: 20px
/* Teal: */ background rgba(0,196,180,0.1), color #00C4B4
/* Amber: */ background rgba(245,158,11,0.1), color #F59E0B
```

### Divider decorativo
```
width: 100%
height: 1px
background: linear-gradient(90deg, #00C4B4, transparent 60%)
opacity: 0.25
```

---

## Header

### Desktop
- Height: 72px
- Background: rgba(11,24,41,0.97) + backdrop-filter blur(16px) al hacer scroll
- Position: sticky, top 0, z-index 9999
- Shadow al hacer scroll: 0 1px 0 rgba(255,255,255,0.05)
- Padding horizontal: 60px

### Mobile
- Altura: 64px
- Hamburger menu
- Menu expandido: fondo Midnight, full width, padding 20px

### Links de navegación
- Color default: #94A3B8
- Color hover: white
- Font: DM Sans 500, 13px
- Padding: 8px 14px
- Border radius: 6px

---

## Footer

### Estructura
- Fondo: #060F1A
- 4 columnas: Marca (1.5fr) + Servicios (1fr) + Recursos (1fr) + Contacto (1fr)
- Border bottom entre columnas y copyright: rgba(255,255,255,0.05)

### Bottom bar
- Fondo: #040C15
- Copyright: rgba(255,255,255,0.2), 12px
- Política de privacidad: mismo estilo

---

## Animaciones

### Principios
- Usar solo cuando agregan valor al recorrido del usuario
- Sin loops infinitos que distraigan
- Preferir transiciones CSS sobre JS cuando sea posible

### Scroll animations (Framer Motion)
```
initial: { opacity: 0, y: 24 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: "easeOut" }
delay escalonado: 0.1s entre elementos hermanos
```

### Hover states
- Botones: translateY(-1px) + shadow
- Cards: translateY(-4px) + shadow-lg
- Nav links: color transition 0.15s
- Logo monograma: scale(1.05)

### Counter animation (stats)
- Usar react-countup o implementación propia
- Activar cuando entra en viewport
- Duración: 2s
- EaseOut
