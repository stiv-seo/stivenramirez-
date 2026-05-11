import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const credentials = [
  "Especialista WordPress & Shopify",
  "Google Analytics 4 certificado",
  "Google Search Console certificado",
  "Google Ads Partner",
  "+40 proyectos en Colombia y Latam",
];

export function AboutPreview() {
  return (
    <section
      className="bg-warm-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — foto placeholder */}
          <FadeIn direction="left">
            <div
              className="relative w-full rounded-2xl overflow-hidden bg-navy"
              style={{ aspectRatio: "4/5", maxHeight: "500px" }}
            >
              <Image
                src="/images/stiven-ramirez.webp"
                alt="Stiven Ramírez — Consultor SEO freelance en Medellín, Colombia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" aria-hidden="true" />
            </div>
          </FadeIn>

          {/* Right — copy */}
          <FadeIn delay={0.1}>
            <Eyebrow>04 — Sobre mí</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Soy Stiven Ramírez.<br />Consultor SEO & Diseñador Web.
            </h2>
            <p className="font-sans text-text-mid leading-[1.75] mb-8">
              Con base en Medellín, Colombia. Más de 9 años construyendo presencias digitales que posicionan en Google y generan ventas reales. Me especializo en WordPress y Shopify con un enfoque que integra diseño, posicionamiento y estrategia en cada proyecto.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3 font-sans text-sm text-text-mid">
                  <span className="text-teal text-base shrink-0">✓</span>
                  {c}
                </li>
              ))}
            </ul>

            <Button variant="outline" href="/sobre-mi/">
              Conocer más →
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
