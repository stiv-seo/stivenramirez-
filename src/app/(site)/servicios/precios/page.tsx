import type { Metadata } from "next";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL, WA_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Precios SEO y Diseño Web Colombia",
  description:
    "Precios reales de consultoría SEO, diseño web y Google Ads en Colombia. Sin paquetes ocultos: gestión e inversión publicitaria son costos separados.",
  keywords: [
    "precio consultor seo colombia",
    "cuánto cuesta diseño web colombia",
    "tarifas seo freelance colombia",
    "precio diseño web medellín",
    "cuánto cuesta seo colombia",
  ],
  alternates: { canonical: "https://stivenramirez.com/servicios/precios/", languages: { "es-CO": "https://stivenramirez.com/servicios/precios/", "x-default": "https://stivenramirez.com/servicios/precios/" } },
  openGraph: {
    title: "Precios y Tarifas | SEO y Diseño Web Colombia",
    description:
      "Precios transparentes: diseño web, SEO mensual y pauta digital. Sin letra pequeña. Colombia.",
    url: "https://stivenramirez.com/servicios/precios/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
    images: [{ url: "https://stivenramirez.com/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://stivenramirez.com/opengraph-image"],
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tarifas SEO y Diseño Web — Stiven Ramírez",
  description:
    "Precios de servicios de SEO, diseño web y pauta digital para pymes colombianas.",
  url: "https://stivenramirez.com/servicios/precios/",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Diseño Web WordPress con SEO",
        url: "https://stivenramirez.com/servicios/diseno-web/wordpress/",
        offers: { "@type": "Offer", price: "3500000", priceCurrency: "COP" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Tienda Shopify con SEO",
        url: "https://stivenramirez.com/servicios/diseno-web/shopify/",
        offers: { "@type": "Offer", price: "3000000", priceCurrency: "COP" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Rediseño Web",
        url: "https://stivenramirez.com/servicios/diseno-web/rediseno/",
        offers: { "@type": "Offer", price: "2800000", priceCurrency: "COP" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Consultoría SEO Mensual",
        url: "https://stivenramirez.com/servicios/seo/consultoria/",
        offers: { "@type": "Offer", price: "1300000", priceCurrency: "COP" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "SEO Local",
        url: "https://stivenramirez.com/servicios/seo/local/",
        offers: { "@type": "Offer", price: "1600000", priceCurrency: "COP" },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "SEO E-commerce",
        url: "https://stivenramirez.com/servicios/seo/ecommerce/",
        offers: { "@type": "Offer", price: "2000000", priceCurrency: "COP" },
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "Auditoría SEO",
        url: "https://stivenramirez.com/servicios/seo/auditoria/",
        offers: { "@type": "Offer", price: "550000", priceCurrency: "COP" },
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Service",
        name: "Google Ads",
        url: "https://stivenramirez.com/servicios/pauta/google-ads/",
        offers: { "@type": "Offer", price: "1500000", priceCurrency: "COP" },
      },
    },
  ],
};

interface PriceCardProps {
  name: string;
  price: string;
  priceLabel: string;
  description: string;
  href: string;
  badge?: "teal" | "amber";
  note?: string;
  highlight?: boolean;
}

function PriceCard({
  name,
  price,
  priceLabel,
  description,
  href,
  badge = "teal",
  note,
  highlight = false,
}: PriceCardProps) {
  return (
    <a
      href={href}
      className={`group block rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        highlight
          ? "bg-midnight border-teal/30 hover:border-teal/60"
          : "bg-warm-white border-[rgba(0,0,0,0.06)] hover:border-[rgba(0,188,168,0.25)]"
      }`}
    >
      <Badge variant={badge} className="mb-4">
        {priceLabel}
      </Badge>
      <h3
        className={`font-jakarta font-bold text-[18px] leading-tight mb-3 group-hover:text-teal transition-colors duration-150 ${
          highlight ? "text-white" : "text-text-dark"
        }`}
      >
        {name}
      </h3>
      <p
        className={`font-jakarta font-extrabold tracking-[-0.5px] mb-3 ${
          highlight ? "text-teal" : "text-text-dark"
        }`}
        style={{ fontSize: "clamp(22px, 2.5vw, 28px)" }}
      >
        {price}
      </p>
      <p
        className={`font-sans text-sm leading-[1.7] mb-4 ${
          highlight ? "text-slate-light" : "text-text-mid"
        }`}
      >
        {description}
      </p>
      {note && (
        <p className="font-sans text-[11px] text-slate leading-[1.6] mb-4 border-t border-[rgba(255,255,255,0.07)] pt-4">
          {note}
        </p>
      )}
      <span className="font-jakarta font-bold text-xs text-teal group-hover:translate-x-1 transition-transform duration-150 inline-block">
        Ver detalle →
      </span>
    </a>
  );
}

const faqItems = [
  {
    q: "¿Los precios incluyen IVA?",
    a: "No. Todos los precios son base. Si tu empresa requiere factura, se agrega el 19% de IVA sobre el valor del servicio.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Sí. Para proyectos de diseño web el pago es 50% al inicio y 50% en la entrega. Para servicios mensuales se factura al inicio de cada mes.",
  },
  {
    q: "¿Qué diferencia hay entre la tarifa de gestión y la inversión en pauta?",
    a: "La tarifa de gestión es lo que me pagas a mí por administrar la campaña (estrategia, configuración, optimización, reportes). La inversión publicitaria es el presupuesto que va directamente a Google o Meta para mostrar los anuncios. Son dos pagos distintos.",
  },
  {
    q: "¿Los precios 'Desde' qué quieren decir?",
    a: "Son el punto de entrada para proyectos estándar. El precio final depende del alcance: número de páginas, integraciones, cantidad de keywords a trabajar, tamaño del catálogo o complejidad técnica del sitio.",
  },
  {
    q: "¿Hacen descuentos?",
    a: "No tengo descuentos por defecto. Lo que sí hago es ajustar el alcance al presupuesto disponible: definimos juntos qué entra y qué queda para una fase 2.",
  },
];

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <SubpageHero
        eyebrow="Tarifas"
        title="Precios claros,"
        titleAccent="sin sorpresas."
        subtitle="Todo lo que necesitas saber antes de tomar una decisión. Si el alcance de tu proyecto está fuera de estos rangos, conversamos y lo ajustamos."
        breadcrumbCurrent="Precios"
      />

      {/* ── Diseño Web ─────────────────────────────────────────────────────── */}
      <section className="bg-off-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <FadeIn className="mb-10">
            <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-3">
              01 — Diseño Web
            </p>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
            >
              Sitios web que posicionan desde el día 1
            </h2>
            <p className="font-sans text-text-mid text-[15px] leading-[1.75] mt-3 max-w-[520px]">
              Proyectos únicos con entrega completa. El precio incluye diseño, desarrollo y SEO on-page integrado.
            </p>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FadeIn delay={0}>
              <PriceCard
                name="WordPress con SEO"
                price="Desde $3.500.000 COP"
                priceLabel="3–4 semanas"
                description="Sitio web en WordPress optimizado para Google desde la estructura. Incluye diseño personalizado, SEO técnico y on-page."
                href="/servicios/diseno-web/wordpress/"
              />
            </FadeIn>
            <FadeIn delay={0.07}>
              <PriceCard
                name="Shopify con SEO"
                price="Desde $3.000.000 COP"
                priceLabel="4–5 semanas"
                description="Tienda Shopify lista para vender y posicionar. Configuración de productos, pasarela de pago y SEO de e-commerce."
                href="/servicios/diseno-web/shopify/"
                badge="amber"
              />
            </FadeIn>
            <FadeIn delay={0.14}>
              <PriceCard
                name="Rediseño Web"
                price="Desde $2.800.000 COP"
                priceLabel="2–3 semanas"
                description="Modernización de un sitio existente sin perder el posicionamiento actual. Incluye auditoría previa y migración segura."
                href="/servicios/diseno-web/rediseno/"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── SEO ────────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-midnight bg-grain overflow-hidden"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <Container>
          <FadeIn className="mb-10">
            <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-3">
              02 — SEO
            </p>
            <h2
              className="font-jakarta font-extrabold text-white leading-[1.1] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
            >
              Posicionamiento orgánico mensual
            </h2>
            <p className="font-sans text-slate-light text-[15px] leading-[1.75] mt-3 max-w-[520px]">
              Servicios recurrentes con contrato mínimo de 3 meses. El SEO no es inmediato: los resultados llegan entre el mes 3 y el 6.
            </p>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FadeIn delay={0}>
              <PriceCard
                name="Consultoría SEO"
                price="Desde $1.300.000/mes"
                priceLabel="Mensual"
                description="Estrategia SEO integral: auditoría, contenido, técnico y linkbuilding. Para quien quiere crecer en Google sin depender de una agencia."
                href="/servicios/seo/consultoria/"
                highlight
              />
            </FadeIn>
            <FadeIn delay={0.07}>
              <PriceCard
                name="SEO Local"
                price="Desde $1.600.000/mes"
                priceLabel="Mensual"
                description="Para negocios físicos o de servicio a domicilio. Google Business Profile, reseñas y posicionamiento en búsquedas locales."
                href="/servicios/seo/local/"
                highlight
              />
            </FadeIn>
            <FadeIn delay={0.14}>
              <PriceCard
                name="SEO E-commerce"
                price="Desde $2.000.000/mes"
                priceLabel="Mensual"
                description="Para tiendas Shopify o WooCommerce con catálogo activo. Optimización de fichas de producto, categorías y recuperación de carritos desde Google."
                href="/servicios/seo/ecommerce/"
                highlight
                badge="amber"
              />
            </FadeIn>
            <FadeIn delay={0.21}>
              <PriceCard
                name="SEO para WordPress"
                price="Desde $1.300.000/mes"
                priceLabel="Mensual"
                description="SEO continuo para sitios WordPress. Yoast/RankMath, velocidad, contenido y construcción de autoridad mes a mes."
                href="/servicios/seo/wordpress/"
                highlight
              />
            </FadeIn>
            <FadeIn delay={0.28}>
              <PriceCard
                name="SEO para Shopify"
                price="Desde $1.300.000/mes"
                priceLabel="Mensual"
                description="Posicionamiento orgánico específico para Shopify. Metafields, colecciones, blog y estructura técnica limpia."
                href="/servicios/seo/shopify/"
                highlight
              />
            </FadeIn>
            <FadeIn delay={0.35}>
              <PriceCard
                name="SEO Técnico"
                price="Desde $1.200.000"
                priceLabel="Proyecto único"
                description="Diagnóstico y corrección de problemas técnicos: velocidad, Core Web Vitals, indexación, datos estructurados y rastreo."
                href="/servicios/seo/tecnico/"
                highlight
              />
            </FadeIn>
          </div>

          {/* Auditoría destacada */}
          <FadeIn delay={0.1} className="mt-6">
            <div className="rounded-2xl border border-teal/20 bg-[rgba(0,196,180,0.05)] p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-2">
                  Punto de entrada recomendado
                </p>
                <h3 className="font-jakarta font-bold text-white text-[20px] mb-1">
                  Auditoría SEO — $550.000 COP
                </h3>
                <p className="font-sans text-slate-light text-sm leading-[1.7]">
                  Precio fijo. Informe completo con los problemas que frenan tu posicionamiento y un plan de acción priorizado. Sin compromiso de contratar SEO mensual.
                </p>
              </div>
              <div className="shrink-0">
                <Button variant="primary" size="md" href="/servicios/seo/auditoria/">
                  Ver auditoría →
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Pauta ──────────────────────────────────────────────────────────── */}
      <section className="bg-off-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <FadeIn className="mb-10">
            <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-3">
              03 — Pauta Digital
            </p>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
            >
              Anuncios que generan ventas, no solo clics
            </h2>
            <p className="font-sans text-text-mid text-[15px] leading-[1.75] mt-3 max-w-[560px]">
              <strong>Importante:</strong> la tarifa de gestión y la inversión publicitaria son costos separados. Lo que me pagas a mí cubre la estrategia y administración; lo que va a Google o Meta es tu presupuesto de pauta.
            </p>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2">
            <FadeIn delay={0}>
              <PriceCard
                name="Google Ads"
                price="Desde $1.500.000/mes"
                priceLabel="Gestión mensual"
                description="Campañas de búsqueda, display y shopping optimizadas para ROAS. Configuración, seguimiento de conversiones y reportes mensuales."
                href="/servicios/pauta/google-ads/"
                note="Inversión mínima recomendada en Google: $1.500.000 COP/mes (costo adicional, va directo a Google)."
                badge="amber"
              />
            </FadeIn>
            <FadeIn delay={0.07}>
              <PriceCard
                name="Meta Ads & TikTok Ads"
                price="Desde $1.500.000/mes"
                priceLabel="Gestión mensual"
                description="Campañas en Facebook, Instagram y TikTok. Creativos, segmentación por audiencia y optimización continua del costo por resultado."
                href="/servicios/pauta/meta-ads/"
                note="Inversión mínima recomendada en la plataforma: $1.500.000 COP/mes (costo adicional, va directo a Meta o TikTok)."
                badge="amber"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section
        className="bg-warm-white"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <Container>
          <FadeIn className="mb-10 text-center">
            <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-3">
              Preguntas frecuentes
            </p>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px]"
              style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
            >
              Dudas sobre precios
            </h2>
          </FadeIn>

          <div className="max-w-[680px] mx-auto divide-y divide-[rgba(0,0,0,0.07)]">
            {faqItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <details className="group py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <summary className="flex items-start justify-between gap-4">
                    <span className="font-jakarta font-bold text-text-dark text-[16px] leading-snug">
                      {item.q}
                    </span>
                    <span className="text-teal font-bold text-xl shrink-0 mt-0.5 group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="font-sans text-text-mid text-sm leading-[1.75] mt-4 pr-8">
                    {item.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2} className="mt-12 text-center">
            <p className="font-sans text-text-mid text-sm mb-4">
              ¿Tienes un proyecto con necesidades específicas?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="primary" size="md" href={CALENDLY_URL} external>
                Agendar llamada gratuita →
              </Button>
              <Button variant="outline" size="md" href={WA_URL} external>
                WhatsApp
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <SubpageCTA
        eyebrow="¿Listo para empezar?"
        title="Hablemos de tu proyecto."
        subtitle="Cuéntame qué necesitas y en menos de 24 horas tienes una propuesta con alcance y precio exacto."
      />
    </>
  );
}
