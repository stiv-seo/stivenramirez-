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
  title: "Meta y TikTok Ads | Medellín",
  description:
    "Meta Ads y TikTok Ads para pymes en Medellín: audiencias precisas, lineamientos creativos y Pixel bien configurado. Sin porcentaje sobre inversión.",
  keywords: ["meta ads medellin", "facebook ads colombia", "instagram ads medellin", "tiktok ads colombia", "publicidad redes sociales pymes colombia"],
  alternates: { canonical: "https://stivenramirez.com/servicios/pauta/meta-ads/", languages: { "es-CO": "https://stivenramirez.com/servicios/pauta/meta-ads/", "x-default": "https://stivenramirez.com/servicios/pauta/meta-ads/" } },
  openGraph: {
    title: "Meta y TikTok Ads | Medellín",
    description: "Meta Ads y TikTok Ads para pymes en Medellín. Audiencias precisas y lineamientos creativos efectivos. Sin % sobre inversión.",
    url: "https://stivenramirez.com/servicios/pauta/meta-ads/",
    type: "website",
    locale: "es_CO",
    siteName: "Stiven Ramírez",
  },
};

const schema = serviceSchema([{
  name: "Meta y TikTok Ads — Facebook, Instagram y TikTok",
  description: "Gestión de campañas Meta y TikTok Ads para pymes en Medellín y Colombia. Sin porcentaje sobre inversión publicitaria.",
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
        eyebrow="Meta y TikTok Ads | Facebook, Instagram y TikTok"
        title="Meta y TikTok Ads:"
        titleAccent="llega a quien aún no te busca."
        subtitle="Google Ads captura demanda existente. Meta y TikTok Ads crean demanda nueva. Si tu producto necesita ser visto para ser deseado, las redes sociales son el canal correcto."
        breadcrumbCurrent="Meta y TikTok Ads"
      />
      <SubpageFeatures
        eyebrow="01 — Qué incluye"
        title="Campañas Meta y TikTok que escalan"
        subtitle="El error más común en pauta de redes es empezar con la audiencia equivocada y creatividades sin estrategia. La segmentación y el contenido lo son todo."
        features={[
          {
            icon: "🎯",
            title: "Estrategia de audiencias",
            description: "Audiencias por intereses, lookalike de tus mejores clientes y remarketing. Cada etapa del funnel con su audiencia y mensaje correcto.",
          },
          {
            icon: "🎨",
            title: "Lineamientos para creatividades efectivas",
            description: "Especificaciones técnicas, formatos recomendados y guía de contenido para que tus creatividades cumplan los criterios de cada plataforma. El diseño de piezas se ofrece como servicio adicional con planes de contenido específicos.",
          },
          {
            icon: "⚙️",
            title: "Pixel y eventos configurados",
            description: "Pixel de Meta y TikTok Pixel instalados correctamente con todos los eventos de conversión: vistas de producto, inicio de checkout, compras, leads.",
          },
          {
            icon: "🔄",
            title: "Remarketing activo",
            description: "Campañas que recuperan a quienes visitaron tu sitio o tu tienda sin comprar. El tráfico que ya pagaste, aprovechado al máximo.",
          },
        ]}
      />
      <SubpageMidCTA text="¿Tus campañas de Meta o TikTok generan clics pero pocas conversiones? Hablamos 30 minutos sin costo." />

      <section className="bg-off-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <div className="max-w-[760px] mx-auto">
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px] mb-3"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              Lineamientos para creatividades efectivas
            </h2>
            <p className="font-sans text-text-mid leading-[1.85] text-[16px] mb-10">
              El contenido que va a pauta tiene requisitos técnicos y estratégicos distintos al contenido orgánico. Estos son los criterios mínimos para que una pieza funcione bien en cada plataforma.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-jakarta font-bold text-text-dark text-[16px] mb-4">Meta Ads (Facebook e Instagram)</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Feed / carrusel", spec: "1080×1080 px (cuadrado) o 1200×628 px (horizontal). Máx. 20% texto sobre imagen." },
                    { label: "Stories y Reels", spec: "1080×1920 px (9:16). Vídeo entre 5–15 s. Hook en los primeros 3 s." },
                    { label: "Vídeo feed", spec: "MP4 o MOV, mín. 720p. Subtítulos siempre activos (85% se ve sin audio)." },
                    { label: "Copy principal", spec: "Máx. 125 caracteres visibles antes del «ver más». Propuesta de valor en la primera línea." },
                    { label: "CTA claro", spec: "Una sola acción por pieza: comprar, agendar, cotizar. Sin múltiples llamados." },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <span className="font-jakarta font-semibold text-teal text-[13px] min-w-[120px] mt-[2px]">{item.label}</span>
                      <span className="font-sans text-text-mid text-[14px] leading-[1.7]">{item.spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-jakarta font-bold text-text-dark text-[16px] mb-4">TikTok Ads</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Formato", spec: "Vertical 9:16, 1080×1920 px. Horizontal y cuadrado tienen alcance reducido." },
                    { label: "Duración", spec: "9–15 s para conversión directa. Hasta 60 s para storytelling de producto." },
                    { label: "Hook", spec: "Los primeros 2–3 s determinan el 70% del resultado. Arranca con el beneficio, no con el logo." },
                    { label: "Estilo", spec: "Nativo y sin pulir funciona mejor que producción corporativa. Usa voz en cámara o UGC real." },
                    { label: "Texto en pantalla", spec: "Subtítulos y textos en pantalla son obligatorios. Zona segura: evitar bordes superiores e inferiores (UI de TikTok)." },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <span className="font-jakarta font-semibold text-teal text-[13px] min-w-[120px] mt-[2px]">{item.label}</span>
                      <span className="font-sans text-text-mid text-[14px] leading-[1.7]">{item.spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 p-5 rounded-xl bg-white border border-[rgba(0,0,0,0.06)]">
              <p className="font-sans text-text-mid text-[14px] leading-[1.8]">
                <span className="font-jakarta font-semibold text-text-dark">¿Necesitas producción de piezas?</span> El diseño y producción de creatividades es un servicio adicional con planes de contenido específicos según tu canal y frecuencia. Pregúntame si quieres explorar esa opción.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-warm-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Container>
          <div className="max-w-[720px] mx-auto">
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px] mb-4"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
            >
              Google Ads vs Meta vs TikTok: ¿cuál te conviene?
            </h2>
            <p className="font-sans text-text-mid leading-[1.85] mb-8 text-[16px]">
              Google Ads es donde las personas están buscando activamente. Meta y TikTok Ads son donde apareces sin que te busquen. Google funciona mejor para servicios y productos con demanda clara (abogados, SaaS, servicios técnicos). Meta funciona mejor para productos que necesitan ser vistos para ser deseados: ropa, cosmética, decoración. TikTok Ads combina lo visual de Meta con la viralidad del contenido nativo — es especialmente efectivo para productos de consumo, lifestyle y marcas que quieren construir comunidad. Si vendes algo que la gente ya busca, Google es más eficiente. Si quieres crear demanda, Meta y TikTok son el canal correcto. Muchos negocios se benefician de tener dos o tres canales activos con estrategias distintas.
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
            title: "Pixels y estrategia",
            description: "Verifico que el Pixel de Meta y el TikTok Pixel estén bien instalados y diseño la estructura de campañas: awareness, consideración y conversión.",
          },
          {
            number: "02",
            title: "Lanzamiento y aprendizaje",
            description: "Meta necesita entre 50-100 conversiones para salir de la fase de aprendizaje. TikTok Ads escala más rápido con contenido nativo. Las primeras semanas son de datos, no de escalar.",
          },
          {
            number: "03",
            title: "Escala y optimización",
            description: "Con datos suficientes, escalo las audiencias y formatos que convierten. Reporte mensual con costo por lead, ROAS y alcance por canal.",
          },
        ]}
      />
      <SubpageFAQ
        bg="off-white"
        items={[
          {
            q: "¿Facebook, Instagram y TikTok Ads todavía funcionan en 2026?",
            a: "Sí. Facebook e Instagram siguen siendo las plataformas con mayor tiempo de atención por usuario en Colombia. TikTok Ads creció fuertemente en alcance y está generando resultados relevantes para marcas de consumo y lifestyle. El costo por resultado subió — por eso la segmentación y el contenido nativo importan más que nunca.",
          },
          {
            q: "¿Cuánto presupuesto necesito para Meta o TikTok Ads?",
            a: "Mínimo $1.500.000 COP/mes en inversión publicitaria por plataforma para salir de la fase de aprendizaje en tiempo razonable. Con menos, el algoritmo tarda más en optimizar y los resultados son inconsistentes. Para e-commerce, el mínimo práctico es mayor.",
          },
          {
            q: "¿Cuánto dura el período de aprendizaje?",
            a: "Meta necesita entre 50 y 100 conversiones por conjunto de anuncios para terminar el aprendizaje — entre 2 y 6 semanas según presupuesto. TikTok Ads suele estabilizarse más rápido con contenido nativo y bien estructurado. Durante ese período los resultados son variables — es normal y necesario.",
          },
          {
            q: "¿Meta, TikTok o Google Ads — cuál me conviene?",
            a: "Depende de tu producto. Google Ads es mejor cuando hay búsqueda activa. Meta es mejor para productos visuales y remarketing. TikTok Ads es ideal cuando quieres alcance masivo con contenido nativo, especialmente en audiencias jóvenes y productos de consumo. Muchos negocios combinan dos o tres canales con presupuestos distintos.",
          },
        ]}
      />
      <SubpageCTA
        eyebrow="¿Tu audiencia está en Instagram o TikTok?"
        title="Llega a tus clientes"
        titleLine2="antes de que te busquen."
        subtitle="Dime qué vendes y quién es tu cliente ideal. Te digo si Meta o TikTok Ads tiene sentido y qué presupuesto mínimo necesitas para ver resultados reales."
      />
    </>
  );
}
