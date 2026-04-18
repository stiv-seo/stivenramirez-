import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { SubpageHero } from "@/components/sections/subpage/SubpageHero";
import { SubpageFeatures } from "@/components/sections/subpage/SubpageFeatures";
import { SubpageProcess } from "@/components/sections/subpage/SubpageProcess";
import { SubpageFAQ } from "@/components/sections/subpage/SubpageFAQ";
import { SubpageCTA } from "@/components/sections/subpage/SubpageCTA";
import { SubpageMidCTA } from "@/components/sections/subpage/SubpageMidCTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Facebook e Instagram Ads · Medellín · Stiven Ramírez",
  description:
    "Meta Ads para pymes en Medellín: audiencias precisas, creatividades que convierten y Pixel bien configurado. Sin porcentaje sobre inversión.",
  keywords: ["meta ads medellin", "facebook ads colombia", "instagram ads medellin", "publicidad facebook pymes colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/pauta/meta-ads/" },
  openGraph: {
    title: "Facebook e Instagram Ads · Medellín · Stiven Ramírez",
    description: "Meta Ads para pymes en Medellín. Audiencias precisas y creatividades que convierten. Sin % sobre inversión.",
    url: "https://stivenramirez.com/servicios/pauta/meta-ads/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Meta Ads — Facebook e Instagram",
  description: "Gestión de campañas Facebook e Instagram para pymes en Medellín y Colombia. Sin porcentaje sobre inversión publicitaria.",
  url: "https://stivenramirez.com/servicios/pauta/meta-ads/",
  provider: "Stiven Ramírez",
  areaServed: "Colombia",
  price: "Desde $1.500.000 COP/mes",
}]);

export default function MetaAdsPage() {
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SubpageHero
        eyebrow="Meta Ads · Facebook e Instagram"
        title="Meta Ads:"
        titleAccent="llega a quien aún no te busca."
        subtitle="Google Ads captura demanda existente. Meta Ads crea demanda nueva. Si tu producto necesita ser visto para ser deseado, Facebook e Instagram son el canal correcto."
        breadcrumbCurrent="Meta Ads"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="Campañas Meta que escalan"
        subtitle="El error más común en Meta Ads es empezar con la audiencia equivocada. La segmentación lo es todo."
        features={[
          {
            icon: "🎯",
            title: "Estrategia de audiencias",
            description: "Audiencias por intereses, lookalike de tus mejores clientes y remarketing. Cada etapa del funnel con su audiencia y mensaje correcto.",
          },
          {
            icon: "🎨",
            title: "Creatividades que detienen el scroll",
            description: "Diseño de piezas para feed, stories y reels. Formatos probados con A/B testing para identificar qué imagen y copy convierte más.",
          },
          {
            icon: "⚙️",
            title: "Pixel y eventos configurados",
            description: "Pixel de Meta instalado correctamente con todos los eventos de conversión: vistas de producto, inicio de checkout, compras, leads.",
          },
          {
            icon: "🔄",
            title: "Remarketing activo",
            description: "Campañas que recuperan a quienes visitaron tu sitio o tu tienda sin comprar. El tráfico que ya pagaste, aprovechado al máximo.",
          },
        ]}
      />
      <SubpageMidCTA text="¿Tus campañas de Meta generan clics pero pocas conversiones? Hablamos 30 minutos sin costo." />

      <section className="bg-warm-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <div className="max-w-[720px] mx-auto">
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px] mb-4"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              Google Ads vs Meta Ads: ¿cuál te conviene?
            </h2>
            <p className="font-sans text-text-mid leading-[1.85] mb-8 text-[16px]">
              Google Ads es donde las personas están buscando activamente. Meta Ads es donde apareces sin que te busquen. En Google escribes "zapatos deportivos" y aparecen 5 tiendas. En Meta ves unos zapatos en tu feed sin haberlos buscado. Google funciona mejor para servicios y productos con demanda clara (abogados, SaaS, servicios técnicos). Meta funciona mejor para productos que necesitan ser vistos para ser deseados: ropa, cosmética, decoración. Si tu producto es complejo o nuevo, Meta te permite contar una historia. Si vendes algo que la gente ya busca activamente, Google es más eficiente. Muchos negocios se benefician de tener ambos canales activos con presupuestos distintos.
            </p>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px] mb-4"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              Por qué el Pixel de Meta bien configurado lo cambia todo
            </h2>
            <p className="font-sans text-text-mid leading-[1.85] text-[16px]">
              El Pixel de Meta es la diferencia entre campañas que escalan y presupuesto que desaparece. Un Pixel mal instalado hace que Meta no entienda qué personas compran y cuáles no — entonces el algoritmo tira dardos al aire. Un Pixel bien configurado permite hacer lookalike audiences (personas similares a tus mejores clientes), retargeting preciso (recuperar a quienes casi compraron) y optimización automática real. Lo primero que revisamos antes de lanzar cualquier campaña es si el Pixel está activo en todas las páginas, si los eventos de conversión están disparando correctamente y si hay suficientes datos de entrenamiento. Sin eso, incluso con presupuesto alto, los resultados son inconsistentes.
            </p>
          </div>
        </Container>
      </section>

      <SubpageProcess
        steps={[
          {
            number: "01",
            title: "Pixel y estrategia",
            description: "Verifico que el Pixel esté bien instalado y diseño la estructura de campañas: awareness, consideración y conversión.",
          },
          {
            number: "02",
            title: "Lanzamiento y aprendizaje",
            description: "Meta necesita entre 50-100 conversiones para salir de la fase de aprendizaje. Las primeras semanas son de datos, no de escalar.",
          },
          {
            number: "03",
            title: "Escala y optimización",
            description: "Con datos suficientes, escalo las audiencias y creatividades que convierten. Reporte mensual con costo por lead, ROAS y alcance.",
          },
        ]}
      />
      <SubpageFAQ
        bg="off-white"
        items={[
          {
            q: "¿Facebook Ads todavía funciona en 2026?",
            a: "Sí, y muy bien para muchos sectores. Facebook e Instagram combinados siguen siendo las plataformas con mayor tiempo de atención por usuario en Colombia. El costo por resultado subió vs años anteriores — por eso la segmentación y las creatividades importan más que nunca.",
          },
          {
            q: "¿Cuánto presupuesto necesito para Meta Ads?",
            a: "Mínimo $1.500.000 COP/mes en inversión publicitaria para salir de la fase de aprendizaje en tiempo razonable. Con menos, Meta tarda más en optimizar y los resultados son inconsistentes. Para e-commerce con catálogo de productos, el mínimo práctico es mayor.",
          },
          {
            q: "¿Cuánto dura el período de aprendizaje?",
            a: "Meta necesita entre 50 y 100 conversiones por conjunto de anuncios para terminar el aprendizaje. Dependiendo de tu presupuesto y tasa de conversión, puede ser entre 2 y 6 semanas. Durante ese período los resultados son variables — es normal y necesario.",
          },
          {
            q: "¿Meta Ads o Google Ads — cuál me conviene?",
            a: "Depende de tu producto. Google Ads es mejor cuando hay búsqueda activa (la gente ya sabe qué quiere). Meta Ads es mejor cuando necesitas crear demanda o cuando tu producto se vende por impulso visual. Muchos negocios se benefician de tener ambos canales activos con estrategias distintas.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Tu audiencia está en Instagram?"
        title="Llega a tus clientes"
        titleLine2="antes de que te busquen."
        subtitle="Dime qué vendes y quién es tu cliente ideal. Te digo si Meta Ads tiene sentido y qué presupuesto mínimo necesitas para ver resultados reales."
      />
    </>
  );
}
