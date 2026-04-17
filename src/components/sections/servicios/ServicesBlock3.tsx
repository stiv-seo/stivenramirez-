import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const adServices = [
  {
    id: "google-ads",
    icon: "🎯",
    title: "Google Ads para Pymes",
    description:
      "Aparece en los primeros resultados cuando alguien busca exactamente lo que ofreces. Solo pagas cuando hacen clic.",
    price: "Desde $400 USD/mes",
    features: [
      "Configuración de campañas",
      "Keyword research",
      "Textos de anuncio",
      "Optimización semanal",
      "Reporte mensual",
      "Sin % sobre inversión",
    ],
    cta: "Ver Google Ads →",
    href: "/servicios/google-ads/",
  },
  {
    id: "meta-ads",
    icon: "📱",
    title: "Facebook e Instagram Ads",
    description:
      "Llega a tu audiencia ideal en Facebook e Instagram con creatividades que convierten. Ideal para e-commerce y generación de leads.",
    price: "Desde $400 USD/mes",
    features: [
      "Estrategia de audiencias",
      "Diseño de creatividades",
      "A/B testing",
      "Pixel configurado",
      "Reporte mensual",
      "Sin % sobre inversión",
    ],
    cta: "Ver Meta Ads →",
    href: "/servicios/meta-ads/",
  },
];

export function ServicesBlock3() {
  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-12">
          <Eyebrow>03 — Pauta Digital</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Google Ads &amp; Meta Ads
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[520px]">
            Campañas pagadas para acelerar resultados mientras el SEO orgánico madura. Sin porcentaje sobre el presupuesto publicitario.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {adServices.map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.08}>
              <div className="bg-warm-white rounded-2xl p-8 border border-[rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <Badge variant="teal" className="mb-4 self-start">
                  {s.price}
                </Badge>
                <h3 className="font-jakarta font-bold text-text-dark text-[22px] mb-3">
                  {s.title}
                </h3>
                <p className="font-sans text-text-mid text-sm leading-[1.75] mb-6">
                  {s.description}
                </p>
                <ul className="space-y-2 flex-1 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-sans text-sm text-text-mid">
                      <span className="text-teal text-xs shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="dark" href={s.href} className="w-full justify-center">
                  {s.cta}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
