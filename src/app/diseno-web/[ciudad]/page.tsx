import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CIUDADES, getCiudad } from "@/data/ciudades";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { StatsStrip } from "@/components/sections/home/StatsStrip";
import { LossSection } from "@/components/sections/subpage/LossSection";
import { ProcessSteps } from "@/components/sections/subpage/ProcessSteps";
import { SubpageFAQ } from "@/components/sections/subpage/SubpageFAQ";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { TechPills } from "@/components/sections/subpage/TechPills";
import { WA_URL, CALENDLY_URL, SITE_URL } from "@/lib/constants";

type Props = { params: Promise<{ ciudad: string }> };

export function generateStaticParams() {
  return CIUDADES.map((c) => ({ ciudad: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ciudad: slug } = await params;
  const ciudad = getCiudad(slug);
  if (!ciudad) return {};
  return {
    title: `${ciudad.keyword_h1} con SEO · Stiven Ramírez`,
    description: ciudad.meta_description,
    keywords: [
      ciudad.keyword_meta,
      `seo ${ciudad.nombre.toLowerCase()}`,
      `wordpress ${ciudad.nombre.toLowerCase()}`,
      `shopify ${ciudad.nombre.toLowerCase()}`,
      "diseño web colombia",
    ],
    alternates: { canonical: `${SITE_URL}/diseno-web/${ciudad.slug}/` },
    openGraph: {
      title: `${ciudad.keyword_h1} con SEO · Stiven Ramírez`,
      description: ciudad.meta_description,
      url: `${SITE_URL}/diseno-web/${ciudad.slug}/`,
      type: "website",
      locale: "es_CO",
      siteName: "Stiven Ramírez",
    },
  };
}

export default async function CiudadPage({ params }: Props) {
  const { ciudad: slug } = await params;
  const ciudad = getCiudad(slug);
  if (!ciudad) notFound();

  // ── Schema ───────────────────────────────────────────────────────────────────

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Diseño Web", item: `${SITE_URL}/servicios/diseno-web/` },
      { "@type": "ListItem", position: 3, name: ciudad.nombre, item: `${SITE_URL}/diseno-web/${ciudad.slug}/` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Stiven Ramírez — Diseño Web & SEO",
    description: `Diseño web con SEO integrado para empresas en ${ciudad.nombre}, ${ciudad.departamento}.`,
    url: `${SITE_URL}/diseno-web/${ciudad.slug}/`,
    telephone: "+57-301-578-7350",
    areaServed: {
      "@type": "City",
      name: ciudad.nombre,
      containedInPlace: { "@type": "State", name: ciudad.departamento },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: ciudad.nombre,
      addressRegion: ciudad.departamento,
      addressCountry: "CO",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${ciudad.keyword_h1} con SEO`,
    description: ciudad.meta_description,
    url: `${SITE_URL}/diseno-web/${ciudad.slug}/`,
    provider: { "@type": "Person", name: "Stiven Ramírez", url: SITE_URL },
    areaServed: ciudad.nombre,
  };

  // ── Data ─────────────────────────────────────────────────────────────────────

  const services = [
    {
      icon: "🔌",
      title: "WordPress con SEO",
      desc: "Sitio WordPress con tema personalizado, arquitectura de URLs semántica, velocidad optimizada y Core Web Vitals en verde. Para sitios corporativos, portafolios y blogs.",
      price: "A partir de $3.500.000 COP",
      href: "/servicios/diseno-web/wordpress/",
    },
    {
      icon: "🛍️",
      title: "Shopify con SEO",
      desc: "Tienda Shopify con colecciones optimizadas, schema Product, pasarelas de pago locales y SEO técnico correcto desde el inicio. Para e-commerce.",
      price: "A partir de $3.000.000 COP",
      href: "/servicios/diseno-web/shopify/",
    },
    {
      icon: "📈",
      title: "SEO On-page",
      desc: "Optimización de metaetiquetas, encabezados, contenido y estructura interna de un sitio existente. Ideal si ya tienes sitio pero no posicionas.",
      price: "A partir de $550.000 COP",
      href: "/servicios/seo/auditoria/",
    },
    {
      icon: "📊",
      title: "Analítica y reportes",
      desc: "Configuración de Google Search Console, GA4 y tablero de métricas. Sabes exactamente cuánto tráfico orgánico genera cada página cada mes.",
      price: "Incluido en todos los proyectos",
      href: "/servicios/seo/consultoria/",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Diagnóstico y estrategia",
      description: "Analizamos tu negocio, competencia y objetivos. Definimos la arquitectura, keywords y plataforma correcta.",
      duration: "Semana 1",
    },
    {
      number: 2,
      title: "Diseño y desarrollo",
      description: "Construyo el sitio con SEO integrado desde el primer elemento. Tú revisas y apruebas cada etapa.",
      duration: "Semanas 2–3",
    },
    {
      number: 3,
      title: "Optimización y lanzamiento",
      description: "Ajustes finales, configuración de Search Console, GA4 y schema markup. Lanzamiento controlado.",
      duration: "Semana 4",
    },
    {
      number: 4,
      title: "Seguimiento y reporte",
      description: "Reporte de posiciones al mes 1, 3 y 6. Con SEO continuo, reportes mensuales con resultados.",
      duration: "Mes 1–6",
    },
  ];

  const faqs = [
    {
      q: `¿Cuánto cuesta un sitio web en ${ciudad.nombre}?`,
      a: `Los precios son los mismos para cualquier cliente colombiano. Un sitio WordPress con SEO integrado parte desde $3.500.000 COP y un Shopify desde $3.000.000 COP. El trabajo es 100% remoto — no hay costos adicionales por estar en ${ciudad.nombre}.`,
    },
    {
      q: "¿Qué incluye el SEO integrado?",
      a: "Arquitectura de URLs, estructura de encabezados, metaetiquetas, velocidad de carga (Core Web Vitals), schema markup y optimización de contenido. Todo se construye junto con el diseño — no se agrega después.",
    },
    {
      q: "¿En cuánto tiempo veo resultados en Google?",
      a: "Las mejoras técnicas se reflejan en 2–4 semanas. El tráfico orgánico empieza a crecer entre el mes 3 y 6, dependiendo de la competencia del sector. Comparto reportes mensuales con posiciones, tráfico y conversiones.",
    },
    {
      q: "¿Trabajo con WordPress o con Shopify?",
      a: "Depende de tu negocio. WordPress es ideal para sitios corporativos, portafolios y blogs. Shopify es mejor para tiendas online con catálogo de productos. En la llamada de diagnóstico te explico cuál aplica para tu caso.",
    },
    {
      q: `¿Cómo trabajamos si estoy en ${ciudad.nombre} y tú en Medellín?`,
      a: `El proceso es 100% remoto. Usamos videollamadas para las reuniones de diagnóstico y presentación, y Google Drive para compartir materiales. Tengo clientes activos en ${ciudad.nombre}, Bogotá, Cali y otras ciudades — la distancia no afecta la calidad ni los tiempos.`,
    },
  ];

  const planFeaturesSitio = [
    "Diseño personalizado",
    "SEO técnico base",
    "Core Web Vitals optimizados",
    "Google Search Console",
    "1 mes de soporte post-lanzamiento",
  ];

  const planFeaturesCombo = [
    "Todo lo del plan Sitio Web",
    "SEO on-page mensual",
    "8–20 keywords objetivo",
    "Link building mensual",
    "Reporte mensual de posiciones",
    "Soporte WhatsApp",
  ];

  const planFeaturesSeo = [
    "Auditoría SEO inicial",
    "Keywords + estrategia de contenido",
    "On-page mensual",
    "Link building mensual",
    "Google Search Console",
    "Reporte mensual",
  ];

  const techTools = [
    { icon: "🔌", name: "WordPress" },
    { icon: "🛍️", name: "Shopify" },
    { icon: "📊", name: "Google Search Console" },
    { icon: "📈", name: "Google Analytics 4" },
    { icon: "⚡", name: "Core Web Vitals" },
    { icon: "🔍", name: "Ahrefs" },
    { icon: "🎨", name: "Figma" },
    { icon: "📝", name: "Schema Markup" },
  ];

  const cityDataCards = [
    { label: "Población", value: ciudad.poblacion },
    { label: "Mercado principal", value: ciudad.mercado },
    { label: "Oportunidad", value: ciudad.oportunidad },
    { label: "Modalidad de trabajo", value: `100% remoto con empresas de ${ciudad.nombre}` },
  ];

  return (
    <>
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── S1 Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-midnight bg-grid-dark overflow-hidden"
        style={{ paddingTop: "80px", paddingBottom: "100px" }}
      >
        <div
          className="glow-teal absolute pointer-events-none"
          style={{ top: "-100px", right: "-80px" }}
          aria-hidden="true"
        />
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-sans text-xs text-slate flex-wrap">
              <li>
                <Link href="/" className="hover:text-teal transition-colors duration-150">Inicio</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/servicios/diseno-web/" className="hover:text-teal transition-colors duration-150">Diseño Web</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-slate-light" aria-current="page">{ciudad.nombre}</li>
            </ol>
          </nav>

          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold text-teal bg-teal/10 border border-teal/20 rounded-full px-3 py-1">
                Disponible para proyectos
              </span>
              <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold text-amber bg-amber/10 border border-amber/20 rounded-full px-3 py-1">
                {ciudad.nombre}, {ciudad.departamento}
              </span>
            </div>

            <h1
              className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-6"
              style={{ fontSize: "clamp(34px, 4.5vw, 58px)" }}
            >
              {ciudad.keyword_h1}
              <br />
              <span className="text-teal">con SEO integrado.</span>
            </h1>

            <p
              className="font-sans text-slate-light leading-[1.8] max-w-[560px] mb-8"
              style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}
            >
              {ciudad.descripcion} WordPress y Shopify con SEO construido desde el primer elemento. Trabajo 100% remoto con empresas de {ciudad.nombre} y toda Colombia.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button variant="primary" size="lg" href={CALENDLY_URL} external>
                Solicitar cotización gratis →
              </Button>
              <Button variant="whatsapp" size="lg" href={WA_URL} external>
                WhatsApp
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              {["40+ proyectos entregados en Colombia", "Trabajo 100% remoto", "Resultados visibles desde mes 3"].map((t) => (
                <span key={t} className="flex items-center gap-2 font-sans text-[12px] text-slate">
                  <span className="text-teal font-bold" aria-hidden="true">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── S2 Stats ─────────────────────────────────────────────────────────── */}
      <StatsStrip />

      {/* ── S3 Contexto ciudad ───────────────────────────────────────────────── */}
      <section className="bg-warm-white" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Container>
          <div className="grid gap-14 md:grid-cols-2 items-start">
            <FadeIn>
              <Eyebrow>Mercado local</Eyebrow>
              <h2
                className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-5"
                style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
              >
                ¿Por qué las empresas en {ciudad.nombre} necesitan SEO?
              </h2>
              <div className="space-y-4 font-sans text-text-mid leading-[1.8]">
                <p>
                  {ciudad.nombre} concentra una economía activa en {ciudad.mercado}. Con una población de {ciudad.poblacion} y un tejido empresarial dominado por {ciudad.empresas}, la competencia digital apenas empieza a consolidarse.
                </p>
                <p>
                  La oportunidad concreta: {ciudad.oportunidad}. Eso significa que entrar ahora con un sitio bien construido y SEO sólido tiene un costo de posicionamiento mucho menor que en mercados saturados.
                </p>
                <p>
                  El trabajo es 100% remoto. Tengo clientes activos en {ciudad.nombre} y no necesito estar presente físicamente para entregar resultados medibles.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="space-y-3">
                {cityDataCards.map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-off-white rounded-xl p-5 border border-[rgba(0,0,0,0.05)]"
                  >
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-slate mb-1">
                      {label}
                    </p>
                    <p className="font-jakarta font-semibold text-text-dark text-[15px] leading-[1.5]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── S4 Qué incluye ───────────────────────────────────────────────────── */}
      <section className="bg-off-white" style={{ paddingTop: "100px", paddingBottom: "20px" }}>
        <Container>
          <FadeIn className="mb-10">
            <Eyebrow>Servicios</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
            >
              Qué incluye el diseño web con SEO
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-[1.7] mt-4 max-w-[560px]">
              Diseño, desarrollo y SEO en un solo contrato. Sin subcontratar, sin intermediarios.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <FadeIn key={s.title}>
                <Link href={s.href} className="block h-full">
                  <div className="bg-white rounded-2xl p-7 border border-[rgba(0,0,0,0.06)] hover:border-teal/30 hover:shadow-sm transition-all duration-200 h-full group">
                    <span className="text-4xl mb-5 block" aria-hidden="true">{s.icon}</span>
                    <h3 className="font-jakarta font-bold text-text-dark text-[18px] mb-2 group-hover:text-teal transition-colors duration-150">
                      {s.title}
                    </h3>
                    <p className="font-sans text-text-mid text-[14px] leading-[1.8] mb-5">{s.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-jakarta font-semibold text-slate text-[13px]">{s.price}</span>
                      <span className="font-jakarta font-semibold text-teal text-[13px] group-hover:translate-x-1 transition-transform duration-150">
                        Ver detalle →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <TechPills
        eyebrow="Stack tecnológico"
        title="Herramientas que uso en cada proyecto"
        tools={techTools}
        bg="off-white"
      />

      {/* ── S5 Loss ──────────────────────────────────────────────────────────── */}
      <LossSection
        eyebrow="La diferencia"
        title="Sitio web sin SEO vs. con SEO integrado"
        bg="warm-white"
        lossColumn={{
          icon: "😓",
          heading: "Sin SEO desde el diseño",
          items: [
            { label: "Invisible en Google", description: "Google no puede rastrear ni entender el contenido. El sitio no aparece para ninguna búsqueda relevante." },
            { label: "Tráfico solo de pauta", description: "Cada visita cuesta dinero. Si dejas de pagar anuncios, el tráfico desaparece completamente." },
            { label: "Rediseño costoso después", description: "Agregar SEO a un sitio ya construido requiere cambiar URLs, estructura y contenido — con riesgo de perder lo que tenías." },
            { label: "Sin datos ni métricas", description: "No sabes qué páginas generan ventas, de dónde vienen tus clientes ni qué buscan en Google." },
          ],
        }}
        gainColumn={{
          icon: "🚀",
          heading: "Con SEO integrado desde el inicio",
          items: [
            { label: "Posicionamiento orgánico", description: "Apareces en Google para las búsquedas de tus clientes potenciales sin pagar por clic." },
            { label: "Tráfico que no se apaga", description: "El SEO construye activos digitales permanentes. El tráfico crece mes a mes sin depender de pauta." },
            { label: "Base técnica correcta", description: "URLs semánticas, velocidad optimizada y schema markup desde el inicio — sin deuda técnica futura." },
            { label: "Decisiones con datos", description: "Reportes mensuales con posiciones, tráfico y conversiones. Sabes exactamente qué funciona." },
          ],
        }}
      />

      {/* ── S6 Proceso ───────────────────────────────────────────────────────── */}
      <ProcessSteps
        eyebrow="Proceso"
        title="Cómo trabajamos juntos"
        subtitle="4 etapas claras. Tú sabes en qué paso estamos en todo momento."
        steps={processSteps}
        layout="grid"
        bg="off-white"
      />

      {/* ── S7 Precios ───────────────────────────────────────────────────────── */}
      <section className="bg-warm-white" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Container>
          <FadeIn className="mb-12">
            <Eyebrow>Precios</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
            >
              Inversión para tu proyecto en {ciudad.nombre}
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-[1.7] mt-4 max-w-[520px]">
              Precios en COP. Sin costos adicionales por ubicación — el trabajo es 100% remoto.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-5">
            {/* Plan 1 — Sitio Web */}
            <FadeIn>
              <div className="bg-white rounded-2xl p-7 border border-[rgba(0,0,0,0.06)] h-full flex flex-col">
                <Badge variant="teal" className="mb-4 self-start">Diseño Web</Badge>
                <h3 className="font-jakarta font-bold text-text-dark text-[18px] mb-2">Sitio Web</h3>
                <p className="font-sans text-text-mid text-[14px] leading-[1.7] mb-6">
                  WordPress o Shopify con SEO técnico base y Core Web Vitals en verde.
                </p>
                <div className="mb-6">
                  <p className="font-sans text-slate text-[12px] uppercase tracking-[1px] mb-1">A partir de</p>
                  <p className="font-jakarta font-extrabold text-teal leading-none" style={{ fontSize: "clamp(28px, 3vw, 36px)" }}>
                    $3.000.000
                  </p>
                  <p className="font-sans text-slate text-sm mt-1">COP · pago único</p>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {planFeaturesSitio.map((f) => (
                    <li key={f} className="flex gap-2 items-start font-sans text-[14px] text-text-mid">
                      <span className="text-teal font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="md" href={CALENDLY_URL} external className="w-full justify-center">
                  Solicitar cotización
                </Button>
              </div>
            </FadeIn>

            {/* Plan 2 — Web + SEO (Más popular) */}
            <FadeIn>
              <div className="bg-midnight rounded-2xl p-7 border border-teal/20 h-full flex flex-col">
                <Badge variant="amber" className="mb-4 self-start">Más popular</Badge>
                <h3 className="font-jakarta font-bold text-white text-[18px] mb-2">Web + SEO</h3>
                <p className="font-sans text-slate-light text-[14px] leading-[1.7] mb-6">
                  Sitio web con posicionamiento continuo. Para empresas que quieren crecer en Google.
                </p>
                <div className="mb-6">
                  <p className="font-sans text-slate-light text-[12px] uppercase tracking-[1px] mb-1">A partir de</p>
                  <p className="font-jakarta font-extrabold text-teal leading-none" style={{ fontSize: "clamp(28px, 3vw, 36px)" }}>
                    $3.500.000
                  </p>
                  <p className="font-sans text-slate-light text-sm mt-1">COP · diseño + desde $1.300.000/mes SEO</p>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {planFeaturesCombo.map((f) => (
                    <li key={f} className="flex gap-2 items-start font-sans text-[14px] text-slate-light">
                      <span className="text-teal font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" size="md" href={CALENDLY_URL} external className="w-full justify-center">
                  Solicitar cotización
                </Button>
              </div>
            </FadeIn>

            {/* Plan 3 — Solo SEO */}
            <FadeIn>
              <div className="bg-white rounded-2xl p-7 border border-[rgba(0,0,0,0.06)] h-full flex flex-col">
                <Badge variant="teal" className="mb-4 self-start">Solo SEO</Badge>
                <h3 className="font-jakarta font-bold text-text-dark text-[18px] mb-2">SEO Mensual</h3>
                <p className="font-sans text-text-mid text-[14px] leading-[1.7] mb-6">
                  Para sitios que ya existen y necesitan posicionarse en Google.
                </p>
                <div className="mb-6">
                  <p className="font-sans text-slate text-[12px] uppercase tracking-[1px] mb-1">A partir de</p>
                  <p className="font-jakarta font-extrabold text-teal leading-none" style={{ fontSize: "clamp(28px, 3vw, 36px)" }}>
                    $1.300.000
                  </p>
                  <p className="font-sans text-slate text-sm mt-1">COP/mes</p>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {planFeaturesSeo.map((f) => (
                    <li key={f} className="flex gap-2 items-start font-sans text-[14px] text-text-mid">
                      <span className="text-teal font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="md" href={CALENDLY_URL} external className="w-full justify-center">
                  Solicitar cotización
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── S8 FAQ ───────────────────────────────────────────────────────────── */}
      <SubpageFAQ items={faqs} bg="off-white" />

      {/* ── S9 CTA Final ─────────────────────────────────────────────────────── */}
      <SubpageCTA
        eyebrow={`¿Tu empresa en ${ciudad.nombre}?`}
        title={`Diseño web para ${ciudad.nombre}`}
        titleLine2="con SEO que funciona."
        subtitle={`Atiendo clientes en ${ciudad.nombre} de forma 100% remota. Cotización gratis, sin compromiso. Cuéntame tu proyecto.`}
      />

      {/* ── S10 Navegación entre ciudades ────────────────────────────────────── */}
      <section
        className="bg-midnight border-t border-white/[0.06]"
        style={{ paddingTop: "32px", paddingBottom: "32px" }}
      >
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <p className="font-sans text-[11px] text-slate shrink-0">También atiendo en:</p>
            <div className="flex flex-wrap gap-2">
              {CIUDADES.map((c) => {
                const isActive = c.slug === ciudad.slug;
                return (
                  <Link
                    key={c.slug}
                    href={`/diseno-web/${c.slug}/`}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "font-sans text-[12px] px-3 py-1.5 rounded-full border transition-all duration-150",
                      isActive
                        ? "text-teal border-teal/40 bg-teal/10 pointer-events-none"
                        : "text-slate border-white/10 hover:text-white hover:border-white/25",
                    ].join(" ")}
                  >
                    {c.nombre}
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
