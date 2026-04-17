import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  { value: "9+", label: "años en SEO y diseño web" },
  { value: "40+", label: "proyectos entregados" },
  { value: "3.2x", label: "ROI promedio en clientes" },
];

export function SobreMiStory() {
  return (
    <section
      className="bg-warm-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <div className="grid gap-16 md:grid-cols-2 items-start">
          {/* Story */}
          <FadeIn>
            <Eyebrow>01 — Mi historia</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-6"
              style={{ fontSize: "clamp(26px, 3vw, 40px)" }}
            >
              Por qué junto SEO y diseño en un solo contrato
            </h2>
            <div className="space-y-4 font-sans text-text-mid leading-[1.8]">
              <p>
                Empecé en diseño web. Construía sitios que se veían bien pero que
                Google no encontraba. Entonces aprendí SEO. Y descubrí que la mayoría
                de los problemas de posicionamiento vienen del diseño — arquitectura mal
                pensada, velocidad de carga, títulos genéricos.
              </p>
              <p>
                Desde entonces trabajo los dos juntos desde el día 1. No diseño primero
                y luego "le pongo SEO". La estrategia de contenido, la estructura de
                URLs y la velocidad son decisiones de diseño.
              </p>
              <p>
                Trabajo solo — no tengo equipo de 20 personas que no conocen tu negocio.
                Eso significa que yo mismo hago el diagnóstico, el diseño, el SEO y los
                reportes. Sin intermediarios que traduzcan mal tus objetivos.
              </p>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn direction="left" delay={0.1}>
            <div className="space-y-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-6 bg-off-white rounded-2xl p-6 border border-[rgba(0,0,0,0.05)]"
                >
                  <span className="font-jakarta font-extrabold text-teal text-4xl tracking-[-1px] shrink-0 w-20 text-right">
                    {s.value}
                  </span>
                  <span className="font-sans text-text-mid text-sm leading-[1.5]">
                    {s.label}
                  </span>
                </div>
              ))}

              {/* Quote */}
              <blockquote className="bg-midnight rounded-2xl p-6 mt-2">
                <p className="font-jakarta font-bold text-white text-[17px] leading-[1.5] mb-3">
                  "Un sitio bien construido es la mejor inversión de marketing que puede hacer una pyme."
                </p>
                <footer className="font-sans text-sm text-teal">
                  — Stiven Ramírez
                </footer>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
