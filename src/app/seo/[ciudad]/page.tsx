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
import { WA_URL, CALENDLY_URL, SITE_URL } from "@/lib/constants";

type Props = { params: Promise<{ ciudad: string }> };

export function generateStaticParams() {
  return CIUDADES.map((c) => ({ ciudad: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ciudad: slug } = await params;
  const ciudad = getCiudad(slug);
  if (!ciudad) return {};
  const ogImage = `${SITE_URL}/opengraph-image`;
  const title = `Consultor SEO Local en ${ciudad.nombre} | Stiven Ramírez`;
  const description = `Consultor SEO freelance en ${ciudad.nombre}. Posicionamiento orgánico en Google para pymes de ${ciudad.departamento}. Sin agencia, resultados medibles desde el mes 3.`;
  return {
    title: { absolute: title },
    description,
    keywords: [
      `consultor seo ${ciudad.nombre.toLowerCase()}`,
      `seo ${ciudad.nombre.toLowerCase()}`,
      `posicionamiento web ${ciudad.nombre.toLowerCase()}`,
      `agencia seo ${ciudad.nombre.toLowerCase()}`,
      `seo ${ciudad.departamento.toLowerCase()}`,
    ],
    alternates: { canonical: `${SITE_URL}/seo/${ciudad.slug}/`, languages: { "es-CO": `${SITE_URL}/seo/${ciudad.slug}/`, "x-default": `${SITE_URL}/seo/${ciudad.slug}/` } },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/seo/${ciudad.slug}/`,
      type: "website",
      locale: "es_CO",
      siteName: "Stiven Ramírez",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function SeoCiudadPage({ params }: Props) {
  const { ciudad: slug } = await params;
  const ciudad = getCiudad(slug);
  if (!ciudad) notFound();

  const pageUrl = `${SITE_URL}/seo/${ciudad.slug}/`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "SEO", item: `${SITE_URL}/servicios/seo/` },
      { "@type": "ListItem", position: 3, name: ciudad.nombre, item: pageUrl },
    ],
  };

  // LocalBusiness con address solo para la ciudad de domicilio real. En las demás,
  // solo Service + areaServed — declarar una "sede" en cada ciudad es inexacto y
  // se lee como señal de doorway pages.
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Stiven Ramírez — Consultor SEO",
    description: `Consultoría SEO para empresas en ${ciudad.nombre}, ${ciudad.departamento}.`,
    url: pageUrl,
    telephone: "+57-301-578-7350",
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: ciudad.nombre,
      containedInPlace: { "@type": "State", name: ciudad.departamento },
    },
    ...(ciudad.esSedeReal
      ? {
          address: {
            "@type": "PostalAddress",
            addressLocality: ciudad.nombre,
            addressRegion: ciudad.departamento,
            addressCountry: "CO",
          },
        }
      : {}),
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Consultor SEO en ${ciudad.nombre}`,
    description: `Posicionamiento orgánico en Google para pymes en ${ciudad.nombre}.`,
    url: pageUrl,
    provider: { "@type": "Person", name: "Stiven Ramírez", url: SITE_URL },
    areaServed: ciudad.nombre,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "COP",
      lowPrice: "550000",
      highPrice: "2000000",
      offerCount: "4",
    },
  };

  // ── Data ──────────────────────────────────────────────────────────────────────

  const services = [
    {
      icon: "📈",
      title: "Consultoría SEO Mensual",
      desc: "Estrategia SEO integral: auditoría inicial, plan de keywords, on-page mensual, link building y reporte de posiciones. Para quien quiere crecer en Google mes a mes.",
      price: "Desde $1.300.000 COP/mes",
      href: "/servicios/seo/consultoria/",
      linkText: "Ver consultoría SEO →",
    },
    {
      icon: "📍",
      title: "SEO Local",
      desc: `Para negocios físicos o de servicio a domicilio en ${ciudad.nombre}. Google Business Profile, reseñas, schema local y posicionamiento en búsquedas con intención local.`,
      price: "Desde $1.600.000 COP/mes",
      href: "/servicios/seo/local/",
      linkText: "Ver SEO local →",
    },
    {
      icon: "🛍️",
      title: "SEO E-commerce",
      desc: "Para tiendas Shopify o WooCommerce. Optimización de fichas de producto, categorías, schema Product y recuperación de tráfico orgánico perdido.",
      price: "Desde $2.000.000 COP/mes",
      href: "/servicios/seo/ecommerce/",
      linkText: "Ver SEO e-commerce →",
    },
    {
      icon: "🔍",
      title: "Auditoría SEO",
      desc: "Diagnóstico completo del sitio: problemas técnicos, contenido, links y oportunidades. Informe entregado en 5 días hábiles con plan de acción priorizado.",
      price: "$550.000 COP (precio fijo)",
      href: "/servicios/seo/auditoria/",
      linkText: "Ver auditoría SEO →",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Auditoría y diagnóstico",
      description: "Analizo tu sitio, competencia y keywords actuales. Identifico los bloqueos técnicos que frenan el posicionamiento.",
      duration: "Semana 1",
    },
    {
      number: 2,
      title: "Estrategia y keywords",
      description: `Defino las palabras clave con mayor potencial para tu negocio en ${ciudad.nombre} y diseño la arquitectura de contenido.`,
      duration: "Semana 2",
    },
    {
      number: 3,
      title: "Optimización técnica y on-page",
      description: "Corrijo los problemas técnicos, optimizo las páginas existentes y creo el contenido necesario para posicionar.",
      duration: "Mes 1–2",
    },
    {
      number: 4,
      title: "Link building y autoridad",
      description: "Construyo referencias externas de calidad. El reporte mensual documenta posiciones, tráfico y conversiones.",
      duration: "Mes 3 en adelante",
    },
  ];

  const faqs = [
    {
      q: `¿Cuánto tarda en dar resultados el SEO en ${ciudad.nombre}?`,
      a: `Los cambios técnicos se reflejan en 2–4 semanas en Google Search Console. El tráfico orgánico empieza a crecer entre el mes 3 y 6, dependiendo de la competencia del sector en ${ciudad.nombre}. Comparto reportes mensuales con posiciones, tráfico y conversiones.`,
    },
    {
      q: "¿Qué diferencia hay entre SEO y Google Ads?",
      a: "Google Ads es pauta: pagas por cada clic y cuando paras el presupuesto, el tráfico desaparece. El SEO construye posicionamiento orgánico — sin pagar por clic — que crece mes a mes y permanece aunque dejes de invertir. Los mejores resultados combinan ambos en distintas etapas.",
    },
    {
      q: `¿Por qué contratarte en lugar de una agencia en ${ciudad.nombre}?`,
      a: `En las agencias el cliente habla con un ejecutivo de ventas y el trabajo lo ejecuta un equipo anónimo. Yo soy el especialista que hace el trabajo y el único interlocutor. Sin tercerización, sin filtros. Y trabajo con ${ciudad.nombre} de forma 100% remota — sin costos adicionales por ubicación.`,
    },
    {
      q: "¿Haces contrato mínimo?",
      a: "El contrato mínimo para SEO mensual es de 3 meses. El SEO no es un servicio de resultado inmediato — los primeros meses se sientan las bases técnicas y de contenido. Quien busca resultados en 30 días necesita Google Ads, no SEO.",
    },
    {
      q: `¿Funciona el SEO para negocios pequeños en ${ciudad.nombre}?`,
      a: `Sí, y en muchos casos mejor que para empresas grandes. Un negocio pequeño bien posicionado para búsquedas específicas de ${ciudad.nombre} puede ganar clientes que una empresa grande con más presupuesto en pauta nunca alcanza. La clave es elegir las keywords correctas.`,
    },
  ];

  const planFeaturesSeo = [
    "Auditoría SEO inicial",
    "Plan de keywords personalizado",
    "On-page mensual",
    "Google Search Console",
    "Reporte mensual de posiciones",
  ];

  const planFeaturesLocal = [
    "Todo lo del plan SEO",
    "Google Business Profile",
    "Gestión de reseñas",
    "Schema local",
    "Búsquedas 'cerca de mí'",
    "Soporte WhatsApp",
  ];

  const planFeaturesCombo = [
    "Sitio web WordPress o Shopify",
    "SEO técnico base",
    "Consultoría SEO mensual",
    "8–20 keywords objetivo",
    "Link building mensual",
    "Reporte mensual de posiciones",
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />

      {/* ── S1 Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-midnight bg-grain overflow-hidden"
        style={{ paddingTop: "80px", paddingBottom: "100px" }}
      >
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-sans text-xs text-slate flex-wrap">
              <li>
                <Link href="/" className="hover:text-teal transition-colors duration-150">Inicio</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/servicios/seo/" className="hover:text-teal transition-colors duration-150">SEO</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-slate-light" aria-current="page">{ciudad.nombre}</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-[1fr_320px] gap-12 items-center">
            {/* Left — copy */}
            <div>
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
                Consultor SEO en {ciudad.nombre}
                <br />
                <span className="text-teal">que posiciona en Google.</span>
              </h1>

              <p
                className="font-sans text-slate-light leading-[1.8] max-w-[520px] mb-6"
                style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}
              >
                ¿Tu negocio en {ciudad.nombre} no aparece en Google? SEO técnico, contenido y link building sin agencia — directamente con el especialista. Resultados medibles desde el mes 3.
              </p>

              <div className="flex flex-wrap gap-3 mb-2">
                <Button variant="whatsapp" size="lg" href={WA_URL} external>
                  Escribir por WhatsApp →
                </Button>
                <Button variant="border" size="lg" href={CALENDLY_URL} external>
                  Agendar llamada gratis
                </Button>
              </div>
              <p className="font-sans text-[11px] text-slate mb-8">
                Sin compromiso | Respondo en menos de 24 h
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "40+ proyectos en Colombia",
                  "Trabajo 100% remoto",
                  "Desde $550.000 COP",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-2 font-sans text-[12px] text-slate">
                    <span className="text-teal font-bold" aria-hidden="true">✓</span>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — result card */}
            <div className="hidden md:block shrink-0" aria-hidden="true">
              <div className="bg-[#0D1E31] rounded-2xl border border-teal/15 p-6 w-full">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-slate">
                    Reporte | Mes 6
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-sans text-[10px] text-teal bg-teal/10 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                    Activo
                  </span>
                </div>

                <div className="mb-5">
                  <p className="font-sans text-slate text-[11px] mb-1">Keywords en top 10</p>
                  <p className="font-jakarta font-extrabold text-teal leading-none" style={{ fontSize: "40px" }}>
                    +34
                  </p>
                  <p className="font-sans text-slate text-[11px] mt-1">vs. 3 al inicio</p>
                </div>

                <div className="flex items-end gap-1.5 h-10 mb-5">
                  {[10, 18, 28, 40, 58, 76, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 6 ? "#00C4B4" : `rgba(0,196,180,${0.12 + i * 0.07})`,
                      }}
                    />
                  ))}
                </div>

                <div className="space-y-2.5 mb-5">
                  {[
                    { kw: `"seo ${ciudad.nombre.toLowerCase()}"`, pos: "#1", highlight: true },
                    { kw: `"consultor seo ${ciudad.nombre.toLowerCase()}"`, pos: "#2" },
                    { kw: `"posicionamiento web ${ciudad.nombre.toLowerCase()}"`, pos: "#3" },
                  ].map(({ kw, pos, highlight }) => (
                    <div key={kw} className="flex items-center justify-between gap-2">
                      <span className="font-sans text-[11px] text-slate truncate">{kw}</span>
                      <span className={`font-jakarta font-bold text-[12px] shrink-0 ${highlight ? "text-teal" : "text-slate-light"}`}>
                        {pos}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="font-sans text-[10px] text-slate/50">
                    Ejemplo de resultados | datos enmascarados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── S2 Stats ─────────────────────────────────────────────────────────── */}
      <StatsStrip />

      {/* ── S2.5 Mercado local ───────────────────────────────────────────────── */}
      <section className="bg-off-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <FadeIn className="mb-10">
            <Eyebrow>{ciudad.nombre}, {ciudad.departamento}</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              SEO en {ciudad.nombre}: qué sectores más lo necesitan
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-[1.8] mt-4 max-w-[620px]">
              {ciudad.mercado.charAt(0).toUpperCase() + ciudad.mercado.slice(1)} — sectores activos en {ciudad.nombre} con alta competencia offline pero poca inversión en SEO. El negocio que construya presencia orgánica hoy domina las búsquedas por años.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-x-10 max-w-[860px]">
            {ciudad.marketSection.cards.map((card, i) => (
              <FadeIn
                key={card.title}
                delay={i * 0.06}
                className={`flex gap-4 py-5 border-t border-black/[0.07] ${i < 2 ? "sm:border-t-0" : ""} ${i === 0 ? "border-t-0" : ""}`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">{card.icon}</span>
                <div>
                  <h3 className="font-jakarta font-bold text-text-dark text-[16px] mb-1.5">{card.title}</h3>
                  <p className="font-sans text-text-mid text-[14px] leading-[1.75]">{card.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── S3 Servicios ─────────────────────────────────────────────────────── */}
      <section className="bg-warm-white" style={{ paddingTop: "100px", paddingBottom: "20px" }}>
        <Container>
          <FadeIn className="mb-10">
            <Eyebrow>Servicios SEO</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
            >
              Qué incluye la consultoría SEO
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-[1.7] mt-4 max-w-[560px]">
              Estrategia, ejecución técnica y contenido en un solo contrato. Sin subcontratar, sin intermediarios.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <Link
                  href={s.href}
                  className={`group flex flex-col h-full rounded-2xl p-7 transition-colors duration-200 ${
                    i === 0 ? "bg-midnight hover:bg-[#0f2035]" : "bg-off-white hover:bg-teal-dim"
                  }`}
                >
                  <span className="text-4xl mb-5 block" aria-hidden="true">{s.icon}</span>
                  <h3 className={`font-jakarta font-bold text-[18px] mb-2 ${i === 0 ? "text-white" : "text-text-dark"}`}>
                    {s.title}
                  </h3>
                  <p className={`font-sans text-[14px] leading-[1.8] mb-5 flex-1 ${i === 0 ? "text-slate-light" : "text-text-mid"}`}>
                    {s.desc}
                  </p>
                  <div className={`flex items-center justify-between gap-3 mt-auto pt-5 border-t ${i === 0 ? "border-white/10" : "border-black/[0.08]"}`}>
                    <span className={`font-jakarta font-semibold text-[13px] ${i === 0 ? "text-slate-light" : "text-slate"}`}>
                      {s.price}
                    </span>
                    <span className="font-jakarta font-semibold text-teal text-[13px] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200 shrink-0">
                      {s.linkText}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-8 flex justify-center">
            <Button variant="whatsapp" size="lg" href={WA_URL} external>
              Cotizar SEO en {ciudad.nombre} →
            </Button>
          </FadeIn>
        </Container>
      </section>

      {/* ── S4 Testimonio ────────────────────────────────────────────────────── */}
      <section className="bg-midnight" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <FadeIn className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-0.5 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote>
              <p className="font-jakarta font-bold text-white leading-[1.65] mb-8" style={{ fontSize: "clamp(18px, 2vw, 22px)" }}>
                &ldquo;En 4 meses pasamos de estar en la página 5 a top 3 para nuestras keywords principales. El tráfico orgánico ahora genera el 60% de nuestros leads — sin pagar por clic.&rdquo;
              </p>
              <footer className="flex flex-col items-center gap-1">
                <span className="font-jakarta font-semibold text-teal text-[15px]">Alejandro Torres</span>
                <span className="font-sans text-slate text-[13px]">CEO | Renovista</span>
                <span className="inline-flex items-center gap-1.5 mt-2 font-jakarta text-[12px] font-semibold text-amber bg-amber/10 border border-amber/20 rounded-full px-3 py-1">
                  Top 3 en 4 meses | SEO orgánico
                </span>
              </footer>
            </blockquote>
          </FadeIn>
        </Container>
      </section>

      {/* ── S5 Comparación ───────────────────────────────────────────────────── */}
      <LossSection
        eyebrow="La diferencia"
        title="Sin SEO vs. con SEO real"
        bg="warm-white"
        lossColumn={{
          icon: "😓",
          heading: "Sin SEO",
          items: [
            { label: "Invisible en Google", description: "El sitio existe pero Google no lo entiende. Aparece para el nombre de la marca, nada más." },
            { label: "100% dependiente de pauta", description: "Cada visita cuesta dinero. Si dejas de invertir en Google Ads, el tráfico se apaga de inmediato." },
            { label: "Sin datos de posicionamiento", description: "No sabes en qué posición aparece tu sitio para cada keyword ni cuántas búsquedas relevantes pierdes cada mes." },
            { label: "Competencia que crece sin ti", description: "Mientras no haces SEO, tu competencia construye autoridad y posiciones que luego son muy difíciles de recuperar." },
          ],
        }}
        gainColumn={{
          icon: "🚀",
          heading: "Con SEO mensual",
          items: [
            { label: "Tráfico orgánico creciente", description: "Cada mes el sitio posiciona para más keywords y atrae más visitas sin pagar por clic." },
            { label: "Canal independiente de pauta", description: "El SEO construye activos permanentes. El tráfico crece aunque reduzcas o elimines el presupuesto en ads." },
            { label: "Reportes mensuales con datos reales", description: "Posiciones, tráfico orgánico y conversiones documentadas. Sabes exactamente el retorno de cada mes." },
            { label: "Autoridad de dominio acumulada", description: "Cada enlace, cada artículo bien hecho suma a una ventaja competitiva que se hace más difícil de superar con el tiempo." },
          ],
        }}
      />

      {/* ── S6 Precios ───────────────────────────────────────────────────────── */}
      <section id="precios" className="bg-off-white" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Container>
          <FadeIn className="mb-12">
            <Eyebrow>Precios</Eyebrow>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h2
                className="font-jakarta font-extrabold text-text-dark leading-[1.05] tracking-[-1px]"
                style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
              >
                Inversión en SEO para {ciudad.nombre}
              </h2>
              <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold text-amber bg-amber/10 border border-amber/20 rounded-full px-3 py-1 shrink-0">
                Solo 3 cupos / mes
              </span>
            </div>
            <p className="font-sans text-text-mid text-[17px] leading-[1.7] max-w-[520px]">
              Precios en COP. El trabajo es 100% remoto — sin costos adicionales por estar en {ciudad.nombre}.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-5">
            {/* Plan 1 — Auditoría */}
            <FadeIn>
              <div className="bg-warm-white rounded-2xl p-7 h-full flex flex-col">
                <Badge variant="teal" className="mb-4 self-start">Punto de entrada</Badge>
                <h3 className="font-jakarta font-bold text-text-dark text-[18px] mb-2">Auditoría SEO</h3>
                <p className="font-sans text-text-mid text-[14px] leading-[1.7] mb-6">
                  Diagnóstico completo con plan de acción priorizado. Precio fijo, sin compromiso de contratar SEO mensual.
                </p>
                <div className="mb-6">
                  <p className="font-sans text-slate text-[12px] uppercase tracking-[1px] mb-2">Precio fijo</p>
                  <p className="font-jakarta font-extrabold text-teal leading-none" style={{ fontSize: "clamp(28px, 3vw, 36px)" }}>
                    $550.000
                  </p>
                  <p className="font-sans text-slate text-sm mt-1">COP | pago único</p>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {[
                    "Análisis técnico completo",
                    "Oportunidades de keywords",
                    "Análisis de competencia",
                    "Plan de acción priorizado",
                    "Entregado en 5 días hábiles",
                  ].map((f) => (
                    <li key={f} className="flex gap-2 items-start font-sans text-[14px] text-text-mid">
                      <span className="text-teal font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="whatsapp" size="md" href={WA_URL} external className="w-full justify-center">
                  Pedir auditoría →
                </Button>
              </div>
            </FadeIn>

            {/* Plan 2 — SEO Mensual (Más popular) */}
            <FadeIn>
              <div className="bg-midnight rounded-2xl p-7 border border-teal/20 h-full flex flex-col">
                <Badge variant="amber" className="mb-4 self-start">Más popular</Badge>
                <h3 className="font-jakarta font-bold text-white text-[18px] mb-2">SEO Mensual</h3>
                <p className="font-sans text-slate-light text-[14px] leading-[1.7] mb-6">
                  Posicionamiento continuo para empresas que quieren crecer en Google mes a mes.
                </p>
                <div className="mb-6">
                  <p className="font-sans text-slate-light text-[11px] uppercase tracking-[1px] mb-2">A partir de</p>
                  <p className="font-jakarta font-extrabold text-teal leading-none" style={{ fontSize: "clamp(26px, 2.8vw, 34px)" }}>
                    $1.300.000
                  </p>
                  <p className="font-sans text-slate-light text-sm mt-0.5">COP / mes | mín. 3 meses</p>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {planFeaturesSeo.map((f) => (
                    <li key={f} className="flex gap-2 items-start font-sans text-[14px] text-slate-light">
                      <span className="text-teal font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" size="md" href={CALENDLY_URL} external className="w-full justify-center">
                  Agendar llamada →
                </Button>
              </div>
            </FadeIn>

            {/* Plan 3 — SEO Local */}
            <FadeIn>
              <div className="bg-warm-white rounded-2xl p-7 h-full flex flex-col">
                <Badge variant="teal" className="mb-4 self-start">Negocio local</Badge>
                <h3 className="font-jakarta font-bold text-text-dark text-[18px] mb-2">SEO Local</h3>
                <p className="font-sans text-text-mid text-[14px] leading-[1.7] mb-6">
                  Para negocios físicos o de servicio a domicilio en {ciudad.nombre} que quieren aparecer en Google Maps.
                </p>
                <div className="mb-6">
                  <p className="font-sans text-slate text-[12px] uppercase tracking-[1px] mb-2">A partir de</p>
                  <p className="font-jakarta font-extrabold text-teal leading-none" style={{ fontSize: "clamp(28px, 3vw, 36px)" }}>
                    $1.600.000
                  </p>
                  <p className="font-sans text-slate text-sm mt-1">COP / mes | mín. 3 meses</p>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {planFeaturesLocal.map((f) => (
                    <li key={f} className="flex gap-2 items-start font-sans text-[14px] text-text-mid">
                      <span className="text-teal font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="whatsapp" size="md" href={WA_URL} external className="w-full justify-center">
                  Cotizar SEO local →
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="mt-6">
            <div className="rounded-2xl bg-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-sans text-text-mid text-sm leading-[1.7]">
                ¿Ya tienes un sitio pero no sabes si está bien optimizado? La <strong>Auditoría SEO a $550.000</strong> es el punto de partida sin riesgo.
              </p>
              <Link
                href="/servicios/precios/"
                className="font-jakarta font-bold text-teal text-sm hover:text-teal-bright shrink-0 transition-colors duration-150"
              >
                Ver todos los precios →
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── S7 Proceso ───────────────────────────────────────────────────────── */}
      <ProcessSteps
        eyebrow="Proceso"
        title="Cómo funciona el SEO mensual"
        subtitle="4 etapas claras. Tú sabes en qué paso estamos en todo momento."
        steps={processSteps}
        layout="vertical"
        bg="warm-white"
      />

      {/* ── S8 FAQ ───────────────────────────────────────────────────────────── */}
      <SubpageFAQ items={faqs} bg="off-white" />

      {/* ── S9 CTA Final ─────────────────────────────────────────────────────── */}
      <SubpageCTA
        eyebrow={`¿Tu empresa en ${ciudad.nombre}?`}
        title={`SEO en ${ciudad.nombre}`}
        titleLine2="que genera tráfico real."
        subtitle={`Atiendo clientes en ${ciudad.nombre} de forma 100% remota. Cotización gratis, sin compromiso. Cuéntame en qué posición está tu sitio hoy.`}
      />

      {/* ── S10 Navegación entre ciudades ────────────────────────────────────── */}
      <section
        className="bg-midnight border-t border-white/[0.06]"
        style={{ paddingTop: "32px", paddingBottom: "32px" }}
      >
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            <p className="font-sans text-[11px] text-slate shrink-0">SEO también en:</p>
            <div className="flex flex-wrap gap-2">
              {CIUDADES.map((c) => {
                const isActive = c.slug === ciudad.slug;
                return (
                  <Link
                    key={c.slug}
                    href={`/seo/${c.slug}/`}
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
