---
target: home
total_score: 28
p0_count: 0
p1_count: 3
timestamp: 2026-08-05T22-30-15Z
slug: src-app-site-page-tsx
---
## Puntaje de Salud del Diseño

| # | Heurística | Puntaje | Hallazgo clave |
|---|-----------|-------|---------------|
| 1 | Visibilidad del estado del sistema | 3/4 | El acordeón de FAQ usa `aria-expanded`; los contadores animados confirman carga de datos al hacer scroll. Falta un estado visible mientras `FadeIn` espera el `IntersectionObserver` (arranca en `opacity: 0`). |
| 2 | Coincidencia con el mundo real | 3/4 | Copy en español, precios en COP, ciudades reales. `AboutPreview.tsx:13` menciona "Bancolombia, Éxito, Levi's y más" sin ninguna prueba — poco creíble para un freelancer solo. |
| 3 | Control y libertad del usuario | 3/4 | Acordeón, drawer móvil cerrable, dropdown que cierra al salir el mouse. El carrusel horizontal de `BlogPreview.tsx` no tiene flechas prev/next visibles. |
| 4 | Consistencia y estándares | 2/4 | Botón/Badge/Eyebrow reutilizados de forma consistente. Violación: `Agitation.tsx:50` combina `shadow-[0_20px_60px...]` + `ring-1 ring-black/5` en una tarjeta estática — contradice la propia "Structural-Only Rule" de DESIGN.md. |
| 5 | Prevención de errores | 2/4 | No hay formularios en el home, pero la visibilidad de `FadeIn` depende 100% de JS — riesgo real en conexiones móviles inestables (la audiencia objetivo). |
| 6 | Reconocimiento antes que memoria | 3/4 | Header persistente, código de color teal=señal / amber=urgencia consistente en el resto del sitio. `TechStack.tsx` rompe justo ese código de color (ver Issue #1). |
| 7 | Flexibilidad y eficiencia | 3/4 | Tres rutas de conversión paralelas (Calendly, WhatsApp, `/contacto/`) — bien resuelto para una audiencia mixta. |
| 8 | Diseño estético y minimalista | 3/4 | Buen whitespace, bento asimétrico real en Services. TechStack diluye el "un solo color señal" con 6+ tonos saturados extra. |
| 9 | Ayuda a reconocer/diagnosticar errores | 3/4 | N/A en su mayoría — el home no tiene entrada de datos, solo navegación. |
| 10 | Ayuda y documentación | 3/4 | El FAQ funciona como ayuda embebida; "respondo en menos de 2 horas" fija una expectativa concreta y verificable. |
| **Total** | | **28/40** | **Bueno — base sólida, hay áreas débiles que atender** |

## Veredicto de Anti-Patrones

**Empezamos por aquí: ¿esto se ve hecho por IA?**

**Evaluación LLM**: Veredicto **límite, inclinado hacia "no"**. La foto del hero es una foto real de espacio de trabajo con tratamiento duotono (no el típico glow-orb/mockup de dashboard), `Services.tsx` usa un bento grid deliberadamente asimétrico en vez de cuatro tarjetas idénticas, y `Process.tsx`/`WhyStiven.tsx` usan una línea de tiempo conectada real en vez de la repetición genérica de icono-en-caja-redondeada. Pero quedan tres señales de plantilla:
- El componente `Eyebrow` (kicker teal, 11px, tracking 4px, uppercase) se repite en 7 de las 12 secciones (Services, WhyStiven, AboutPreview, Testimonials, BlogPreview, FAQ, Process) — exactamente el patrón que `brand.md` marca como "AI scaffolding" a menos que sea un sistema de marca deliberado. DESIGN.md sí lo documenta como token, lo cual atenúa el veredicto, pero el efecto visual en la página sigue siendo que cada sección se anuncia igual.
- Numeración escénica dos veces: los pasos 01-04 de `Process.tsx` (sí se gana el derecho, porque es una secuencia real) y los números fantasma "01/02/03/04" de `BlogPreview.tsx` — combinados con la repetición de eyebrows, suman a la sensación de plantilla.
- `TechStack.tsx` (líneas 4-17): 12 badges de herramientas, cada una en su color de marca saturado (naranja, azul, verde, morado...) es el clásico "muro de logos de confianza" de SaaS/agencia — la sección que más se siente genérica de toda la página.

Nota aparte: Plus Jakarta Sans + DM Sans están en la lista de rechazo-reflejo de `brand.md`, pero al ser una identidad ya en producción aplica preservación de identidad — se anota como observación, no como bloqueo.

**Escaneo determinístico**: El detector estático (`detect.mjs`) sobre los 15 archivos del home encontró **2 hallazgos**, ambos de la regla `layout-transition` (animar propiedades que afectan el layout en vez de `transform`/`opacity`): `StatsStrip.tsx:64` (`transition: width` en la barra de progreso) y `FAQ.tsx:57` (`transition: max-height` en el acordeón). Exit code 2, sin crashes.

El detector en vivo (inyectado en `https://stivenramirez.com/` vía consola del navegador) encontró entre 94 y 109 hallazgos según la posición de scroll (el detector es sensible a la posición del viewport), agrupados así: `ai-color-palette` 32, `low-contrast` 28, `layout-transition` 13, `line-length` 9, `repeated-section-kickers` 9, `tiny-text` 7, `clipped-overflow-container` 4, `all-caps-body` 2, `cramped-padding` 1, `hero-eyebrow-chip` 1, `oversized-h1` 1, `overused-font` 1, `nested-cards` 1.

**Falsos positivos identificados**: `overused-font` (Plus Jakarta Sans 41%) y `oversized-h1` (78px) son falsos positivos — DESIGN.md documenta exactamente ese sistema tipográfico de dos familias y ese clamp de 78px como el límite superior deliberado del H1. `repeated-section-kickers` y `hero-eyebrow-chip`/`all-caps-body` también son probables falsos positivos en el sentido estricto de "detector de IA-slop", porque DESIGN.md documenta el componente Eyebrow como un token de sistema deliberado — aunque, como nota la Evaluación LLM arriba, la repetición sigue siendo un problema de variedad de dirección de arte, solo que no es "IA-slop" en sentido estricto. `ai-color-palette` marcando el teal como "cian neón" es debatible de la misma forma: es exactamente la intención del North Star "Signal in the Dark".

**El hallazgo que NO es falso positivo, y que coincide en tres fuentes independientes**: `low-contrast` (28 instancias) mide contraste real de `#00C4B4` sobre fondos blancos/off-white en **2.0–2.2:1**, muy por debajo del 4.5:1 que exige WCAG AA. Esto coincide exactamente con lo que (a) la Evaluación LLM señaló como Priority Issue citando el propio `PRODUCT.md`, y (b) lo que **el propio brandbook del proyecto** ya tenía documentado como "combinación prohibida" antes de esta crítica. Tres fuentes independientes — juicio de diseño, medición determinística en vivo, y la documentación de marca previa del cliente — apuntan al mismo problema. Es la señal más sólida de todo este reporte.

**Overlays visuales**: la inyección de `detect.js` vía `live-server.mjs` funcionó sin bloqueos de CSP ni errores de consola. El servidor local y el script inyectado se cerraron y limpiaron al terminar (proceso detenido, tag de script removido, tab cerrado) siguiendo el protocolo — así que ahora mismo no queda un overlay visible abierto en tu navegador. Si quieres verlo en vivo resaltado sobre la página, puedo volver a inyectarlo.

## Impresión General

El home es sólido en fundamentos (foto real, bento asimétrico, proceso con secuencia real, tres canales de conversión paralelos) pero tiene una fuga de identidad justo antes del CTA final (TechStack) y un problema de contraste de accesibilidad que el propio cliente ya había anticipado en su brandbook pero que sigue sin resolverse en producción. La oportunidad más grande: alinear la página con las reglas que **ella misma** ya definió en DESIGN.md — no hace falta inventar nada nuevo, solo hacer cumplir lo ya documentado.

## Qué Está Funcionando

- **Foto del hero** (`Hero.tsx:118-141`): foto candid real con integración duotono, cumpliendo exactamente el rechazo de DESIGN.md al glow-orb/mockup — funciona porque es prueba, no decoración, en línea con el principio "prueba, no promesa" de PRODUCT.md.
- **Línea de tiempo de `Process.tsx`**: la numeración 01-04 se la gana porque es un proceso secuencial real con visuales distintos por paso (gráfico de tráfico, arquitectura, Core Web Vitals, checklist de lanzamiento) — evita la trampa genérica de "3 tarjetas numeradas idénticas" en la que caen la mayoría de competidores.
- **`WhatsAppFloat.tsx`**: el único elemento de toda la página con sombra ambiental en reposo, y está correctamente reservado para el único elemento genuinamente fijo/flotante — ejecución disciplinada de la propia "Structural-Only Rule" que el sitio se impuso a sí mismo.

## Problemas Prioritarios

**[P1] TechStack rompe la identidad visual central del sitio**
- **Por qué importa**: `TechStack.tsx` (líneas 4-17, 48-59) pinta 12 herramientas cada una en su color de marca saturado (naranja, azul, verde, morado, etc.) sobre el fondo navy oscuro — justo contradice el North Star "Signal in the Dark" de DESIGN.md ("lo único que puede brillar es el Beacon Teal"). Y ocurre justo antes del CTA final, diluyendo el enfoque en el momento de conversión más importante.
- **Arreglo**: recolorear todos los badges a un tratamiento único con tinte teal/monocromático, o directamente cortar la sección del home.
- **Comando sugerido**: `$impeccable colorize` (o `$impeccable distill` si se opta por eliminar la sección).

**[P1] El teal sobre fondos claros falla WCAG AA — confirmado por tres fuentes independientes**
- **Por qué importa**: `Eyebrow.tsx` usa `text-teal` por defecto sobre fondos off-white/warm-white (contraste ~1.97–2.2:1, se necesita 4.5:1), afectando 28 instancias en 7 secciones (Services, WhyStiven, AboutPreview, Testimonials, BlogPreview, FAQ, Process). El propio `PRODUCT.md` ya cita esto como "combinación prohibida" del brandbook original — y ahora la medición en vivo lo confirma con datos reales.
- **Arreglo**: cambiar estos casos a `tone="muted"` (ya existe en `Eyebrow.tsx`), reservando el eyebrow teal para secciones oscuras únicamente.
- **Comando sugerido**: `$impeccable audit` (para mapear cada instancia) seguido de `$impeccable harden`.

**[P1] Cifra de crecimiento de tráfico contradictoria entre secciones**
- **Por qué importa**: `StatsStrip.tsx:18` y el badge de `Process.tsx:26` afirman "+280%" de crecimiento promedio de tráfico orgánico en 6 meses; `faq.ts:32` afirma "+120%" para la misma métrica. Un dueño de PyME colombiano escéptico (ya quemado por un mal freelancer antes) es exactamente la persona que va a notar esta inconsistencia al hacer scroll de vuelta — y confirma la desconfianza que el sitio necesita disolver, no reforzar.
- **Arreglo**: unificar a una sola cifra defendible en los tres archivos.
- **Comando sugerido**: `$impeccable clarify`.

**[P2] El dropdown de Servicios expone una lista de 7 ítems sin agrupar**
- **Por qué importa**: la columna "SEO" en `constants.ts:62-71` lista 7 links planos, renderizados en `ServicesDropdown` (`Header.tsx:99-148`) — el único punto de decisión real de la página, y falla la regla de ≤4 opciones visibles justo en el sitio de un negocio cuyo pitch central es "un solo interlocutor, sin complejidad".
- **Arreglo**: mostrar los 3-4 links de mayor intención más un enlace "Ver todos".
- **Comando sugerido**: `$impeccable layout`.

**[P3] Tarjeta estática con sombra + borde ("ghost card") viola la regla propia del sistema**
- **Por qué importa**: `Agitation.tsx:50` combina un drop shadow con un `ring-1` en una tarjeta que no flota ni está fija — exactamente el patrón que DESIGN.md (y el skill Impeccable) prohíben para contenido estático.
- **Arreglo**: quitar la sombra; la interacción `Tilt` que ya tiene la tarjeta es suficiente señal de interactividad.
- **Comando sugerido**: `$impeccable polish`.

## Alertas por Persona

**Jordan (primera vez, confundido)**: el mockup de SERP en `Agitation.tsx` exige inferir una metáfora abstracta ("#7 · Tu sitio" en un resultado falso de Google) de un vistazo, más comprimido en móvil; los acrónimos de 2 letras de `TechStack.tsx` (SE, AH, SF, GTM) asumen familiaridad previa con Semrush/Ahrefs/GTM que un dueño de restaurante o clínica probablemente no tiene.

**Riley (probador metódico)**: detecta de inmediato la contradicción +280%/+120% (Issue #3). `Button.tsx` no define ningún estilo `focus-visible` en ninguna variante (líneas 32-52) — un usuario de teclado solo obtiene el outline por defecto del navegador, sin verificar contra los fondos navy/off-white. También encuentra que el carrusel de blog no tiene affordance visible de scroll.

**Casey (usuario móvil distraído)**: a 390px, StatsStrip + la tarjeta SERP de Agitation + los cuatro tiles de Services se apilan a ancho completo en secuencia antes del segundo CTA — un scroll largo con solo dos momentos de conversión (Hero, CTA inline de Agitation) antes de eso. Los 12 pills de TechStack se envuelven en varias filas en móvil, gastando presupuesto de scroll justo antes del CTA final.

**Dueño de PyME colombiano escéptico (persona específica del proyecto)**: el chip sin sustento de `AboutPreview.tsx:13` ("Bancolombia, Éxito, Levi's y más") combinado con la discrepancia +280%/+120% es exactamente el patrón ("esta persona exagera") que confirma su mala experiencia previa con un freelancer, en vez de disolverla.

## Observaciones Menores

- Dos animaciones activan propiedades de layout en vez de `transform`/`opacity` (regla `layout-transition` del detector): la barra de progreso de `StatsStrip.tsx:64` (`transition: width`) y el acordeón de `FAQ.tsx:57` (`transition: max-height`) — riesgo de jank/repintado, no se observó visualmente en esta prueba pero es una deuda técnica real.
- Los contadores de `StatsStrip` se reinician y vuelven a animar desde 0 cada vez que la sección reentra al viewport (confirmado en vivo, con valores intermedios distintos en cada pase) — probablemente no es el comportamiento buscado para un contador de "una sola vez".
- Se capturó un frame del drawer móvil a medio deslizar con el fondo parcialmente visible a través de él; en un frame posterior ya se ve sólido — probablemente solo un artefacto de timing de captura, pero vale una confirmación visual manual.
- El WhatsApp CTA aparece 4 veces (ícono del header, FAB flotante, botón en FAQ, botón en CTAFinal) — probablemente intencional dado el peso de ese canal en Colombia, pero vale confirmar que es deliberado y no acumulación orgánica.
- `testimonials.ts` solo tiene 3 testimonios para un sitio que afirma "+40 proyectos entregados" — no es un error, pero es una brecha de prueba social frente al volumen que se reclama.
- La columna "Ciudades" del footer lista 7 ciudades sin agrupar — menor prioridad porque es contenido SEO de footer, no un punto de decisión real.

## Preguntas para Considerar

1. Si un dueño de PyME escéptico ve "+280%" en StatsStrip y "+120%" en el FAQ para la misma afirmación, ¿cuál número cree — y importa que ninguno esté anclado a una fuente pública verificable?
2. TechStack cambia la única regla ganada de la página (el teal como único color que brilla) por reconocimiento de logos — ¿vale la pena, o es una señal de credibilidad más dirigida a otros marketers que al dueño de restaurante o clínica que describe PRODUCT.md?
3. Siete de doce secciones abren con el mismo kicker teal idéntico — si cada sección se anuncia igual, ¿llega a pasar alguna vez la "dirección de arte por sección" que `brand.md` explícitamente permite?
