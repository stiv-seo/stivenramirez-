---
name: Stiven Ramírez — Diseño Web & SEO
description: Diseño Y posiciono en Google, en un solo contrato — sitio de marca personal para PyMEs colombianas.
colors:
  deep-signal-navy: "#0B1829"
  navy-secondary: "#0F2D52"
  beacon-teal: "#00C4B4"
  beacon-teal-bright: "#00E5D3"
  beacon-teal-dim: "rgba(0, 196, 180, 0.1)"
  off-white: "#F5F2EC"
  warm-white: "#FDFCFA"
  slate: "#5E6E82"
  slate-light: "#94A3B8"
  urgency-amber: "#F59E0B"
  urgency-amber-dim: "rgba(245, 158, 11, 0.1)"
  text-dark: "#1A2B3C"
  text-mid: "#3D5166"
  whatsapp-green: "#25D366"
  footer-black: "#060F1A"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(42px, 6vw, 78px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-2px"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(28px, 4vw, 48px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-1px"
  title:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.5px"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "4px"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  2xl: "20px"
  full: "9999px"
spacing:
  section-py: "100px"
  container-px: "60px"
  container-max: "1160px"
components:
  button-primary:
    backgroundColor: "{colors.beacon-teal}"
    textColor: "{colors.deep-signal-navy}"
    rounded: "{rounded.md}"
    padding: "14px 36px"
  button-primary-hover:
    backgroundColor: "{colors.beacon-teal-bright}"
    rounded: "{rounded.md}"
  button-dark:
    backgroundColor: "{colors.deep-signal-navy}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "14px 36px"
  button-outline:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.md}"
    padding: "14px 36px"
  input-field:
    backgroundColor: "{colors.off-white}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
---

# Design System: Stiven Ramírez — Diseño Web & SEO

## 1. Overview

**Creative North Star: "Signal in the Dark"**

The system is built on one idea: a signal cutting through a dark, quiet field. Every surface starts from a near-black navy (Deep Signal Navy, `#0B1829`) and the only thing allowed to glow is Beacon Teal (`#00C4B4`) — the color of "your site is now visible." That's not incidental: the product itself sells visibility (Google rankings), so the palette performs the pitch. Amber exists only as a second, rarer signal — urgency and time-sensitive callouts — never mixed with teal on the same element.

The system explicitly rejects the SaaS-landing cliché of a radial "glow orb" behind the hero headline. Instead, depth comes from a film-grain texture overlay (`.bg-grain`, replacing flat blur) and a single hairline gradient rule at the base of the hero section. Photography is integrated via duotone treatment (a navy color-overlay + gradient mask tying the portrait into the dark background) rather than floating in an isolated card. This is a solo consultant's site, not an agency's — the tone is confident and specific, never generic-corporate, and never dressed up as a bigger operation than it is.

**Key Characteristics:**
- Dark-first hero and header (Deep Signal Navy), alternating with warm off-white content sections — never pure white.
- Beacon Teal is the only "loud" color; it marks CTAs, active states, and the literal idea of a visibility signal.
- No glow-orb hero decoration, no gradient text, no glassmorphism-as-decoration. Depth comes from grain texture, duotone photography, and a single baseline rule.
- Generous corner rounding across buttons, cards, and pills (8px–20px, full-pill for tags) — soft but not cartoonish.
- Shadows are structural, reserved for things that are actually floating (dropdown panel, WhatsApp FAB), never decorative on static cards.

## 2. Colors

The palette pairs a near-black navy field with a single saturated signal color; every other hue is a warm neutral or a rare secondary accent.

### Primary
- **Beacon Teal** (`#00C4B4` / `beacon-teal`): the visibility signal. Used on primary CTAs, active nav states, section eyebrows, icon accents, and the hero's emphasized word ("posicionan"). Its hover state is **Beacon Teal Bright** (`#00E5D3`).

### Secondary
- **Urgency Amber** (`#F59E0B` / `urgency-amber`): a second, rarer signal for badges, blog categories, and time-pressure moments. Always used alone — never combined with teal on the same element (too saturated together).

### Neutral
- **Deep Signal Navy** (`#0B1829` / `deep-signal-navy`): the dark field — header, hero, footer, dark section backgrounds. This is the system's dominant surface, not an occasional dark-mode toggle.
- **Navy Secondary** (`#0F2D52`): gradient companion to Deep Signal Navy for subtle depth in dark sections.
- **Warm White** (`#FDFCFA`): the base body background for light sections.
- **Off-White** (`#F5F2EC`): the alternating light-section background and the default form-field fill.
- **Slate** (`#5E6E82`): secondary body text and descriptions on light backgrounds.
- **Slate Light** (`#94A3B8`): tertiary text, nav labels, and metadata — including on dark backgrounds, where it's the default inactive-nav color.
- **Text Dark** (`#1A2B3C`) / **Text Mid** (`#3D5166`): primary and paragraph text on light backgrounds.

### Named Rules
**The One Signal Rule.** Beacon Teal and Urgency Amber never appear combined on the same element or in the same visual unit (badge, card, icon group). Each is its own signal; mixing them reads as noise, not urgency.

**The No-Pure-White Rule.** Light sections use Warm White or Off-White, never `#FFFFFF`, except for small isolated surfaces (outline button fill, form card background) that need to pop against an off-white section.

## 3. Typography

**Display Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)
**Body Font:** DM Sans (with system-ui, sans-serif fallback)

**Character:** Plus Jakarta Sans carries every heading at extrabold weight with tight, negative letter-spacing — confident and declarative, built to read as a headline even at a glance. DM Sans handles everything read at length, at a looser 1.75 line-height, so dense service/pricing copy stays easy to scan despite the site's information density.

### Hierarchy
- **Display** (800, `clamp(42px, 6vw, 78px)`, line-height 0.98, letter-spacing -2px): hero H1 only. Uses `text-wrap: balance`. One word per hero is set in Beacon Teal for emphasis.
- **Headline** (800, `clamp(28px, 4vw, 48px)`, line-height 1.1, letter-spacing -1px): section H2s.
- **Title** (700, 22px, letter-spacing -0.5px): H3 card and subsection titles.
- **Body** (400, 16px, line-height 1.75): paragraphs, max width ~480px in hero/lead copy for line-length control.
- **Label / Eyebrow** (600, 11px, letter-spacing 4px, uppercase, Beacon Teal): the small kicker line above hero and section headings (e.g. "Freelance SEO & Diseño Web — Medellín, Colombia").

### Named Rules
**The Extrabold-Only Headline Rule.** Headings never drop below weight 700; the hierarchy is carried by size and negative letter-spacing, not by lightweight display type.

## 4. Elevation

The system is flat by default. Shadows are **structural, not ambient** — reserved exclusively for surfaces that are genuinely floating above the page (an open dropdown, a fixed floating action button), never applied to static cards or sections as decoration. A static card gets a border or a tinted background instead of a shadow.

### Shadow Vocabulary
- **Floating panel** (`box-shadow: 0 24px 60px rgba(0,0,0,0.5)`): the services dropdown menu — a genuinely detached overlay above dark content.
- **Floating action button** (`box-shadow: 0 4px 24px rgba(37,211,102,0.35)`): the fixed WhatsApp button, colored to match its own accent (WhatsApp green), not the brand teal.
- **CTA hover glow** (`box-shadow: 0 4px 20px rgba(0,196,180,0.35)`): primary button hover state — a deliberate exception, signaling interactivity via the brand's own signal color.
- **Scrolled header hairline** (`box-shadow: 0 1px 0 rgba(255,255,255,0.05)`): a 1px seam, not a drop shadow, marking the header once the page scrolls beneath it.

### Named Rules
**The Structural-Only Rule.** If an element isn't detached from the page flow (an overlay, a fixed element, or a button announcing its own hover state), it does not get a shadow. Depth on static content comes from color, border, or tint — never blur.

## 5. Components

### Buttons
- **Shape:** 8px radius (`rounded-md`), except the `ghost` variant which is a text link with a teal underline and no fill.
- **Primary:** Beacon Teal fill, Deep Signal Navy text, bold. Hover lifts 1px (`-translate-y-px`) and gains the CTA hover glow. This is the only button that both fills a saturated color and lifts — it is reserved for the one primary action per view.
- **Dark:** Deep Signal Navy fill, white text — used on light-section CTAs that need to feel weighty without competing with a teal primary CTA on the same view.
- **Outline / Border:** transparent or white fill, hairline border (`rgba(0,0,0,0.07)` on light, `white/30` on dark), teal border + text on hover. The secondary action.
- **Ghost:** no fill, no radius, teal text with a teal underline — the lowest-emphasis action, used for "ver más" style links beside a primary CTA.
- **WhatsApp:** dedicated variant in WhatsApp green (`#25D366`), used only for WhatsApp-specific CTAs — never substitutes for the teal primary.

### Chips / Pills
- **Tool pills** (hero): `bg-white/5`, `border-white/10`, full-pill radius, 11px semibold label, teal icon — a quiet, low-contrast credential strip (GSC, GA4, WordPress, Shopify) that doesn't compete with the headline.
- **Badge:** full-pill, 9px bold uppercase with 0.1em tracking, tinted background matching its accent (`beacon-teal-dim` or `urgency-amber-dim`) — never a solid fill, always the dim/tint version.

### Cards / Containers
- **Corner Style:** 16–20px radius (`rounded-xl` / `rounded-2xl`) for feature and stat cards.
- **Background:** tinted accent at 6% opacity (`bg-teal/[0.06]` or `bg-amber/[0.06]`) with a matching 20%-opacity border — never a plain white card with a drop shadow.
- **Shadow Strategy:** none at rest, per the Structural-Only Rule; a card may lift 1px on hover (`hover:-translate-y-1`) as a state response, not a permanent decoration.
- **Border:** 1px, colored to match the card's accent tint, never a heavier colored side-stripe.

### Inputs / Fields
- **Style:** Off-White fill, hairline border (`rgba(0,0,0,0.1)`), 16px radius (`rounded-xl`), calm and precise — no visual noise at rest.
- **Focus:** border shifts to Beacon Teal plus a soft teal focus ring (`ring-2 ring-teal/20`). This is the only place a ring-style focus treatment appears in the system.
- **Placeholder:** Slate, not a lighter gray — kept legible against the Off-White fill.

### Navigation
- **Style:** fixed header on Deep Signal Navy, 72px tall. Inactive links are Slate Light (quiet); active/hover links go full white — nav is intentionally low-contrast until a state calls attention to itself.
- **Services dropdown:** frosted dark panel (`rgba(11,24,41,0.98)` + 20px backdrop blur), grouped into columns, hover rows tint with `bg-teal/[0.08]`.
- **Scrolled state:** header background gains opacity and blur, plus the Scrolled Header Hairline shadow — a subtle "lift off the page" cue rather than a hard shadow.
- **Mobile:** hamburger animates into an X; a drawer handles the full nav; WhatsApp icon stays pinned beside it in WhatsApp green.

### Hero Photography (signature component)
Portraits are integrated into the dark hero rather than floated in a card: a `fill`-mode image sits behind two overlays — a directional navy gradient (fading the photo into the background at the edges) and a `mix-blend-mode: color` navy wash at 15% opacity, so the photo reads as part of the same dark surface instead of a separate rectangle pasted on top.

## 6. Do's and Don'ts

### Do:
- **Do** keep Beacon Teal as the only saturated accent used for interactive/primary emphasis; everything else is navy, off-white, or a rare amber flag.
- **Do** use the film-grain texture (`.bg-grain`) and duotone photo treatment for depth in dark hero sections — this is the system's substitute for glow/blur decoration.
- **Do** reserve shadows for genuinely floating elements (dropdowns, fixed FAB, hover-state glow); static cards use tint + border instead.
- **Do** keep headings at weight 700+ in Plus Jakarta Sans with negative letter-spacing; carry hierarchy through size, not lighter weights.
- **Do** write copy that leads with a business result ("tu sitio va a posicionar desde el día del lanzamiento"), matching PRODUCT.md's brand voice — direct, business-focused, never jargon-first.

### Don't:
- **Don't** add a radial "glow orb" behind hero headlines — explicitly rejected in favor of grain texture and the baseline rule (see PRODUCT.md anti-reference: generic SaaS landing template).
- **Don't** combine Beacon Teal and Urgency Amber on the same element or component.
- **Don't** use pure white (`#FFFFFF`) as a section background; use Warm White or Off-White.
- **Don't** apply a drop shadow to a static, at-rest card or section — shadow is a state response or an overlay cue only, never ambient decoration.
- **Don't** use `border-left`/`border-right` as a colored stripe accent; borders in this system are full 1px outlines tinted to match the element's accent.
- **Don't** write generic agency copy without a differentiator (PRODUCT.md anti-reference: "los mejores estándares del mercado", listing services without a hook) — every section should sound like one specialist speaking, not an agency team.
