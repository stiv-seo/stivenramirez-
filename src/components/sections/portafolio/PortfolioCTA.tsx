import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { WA_URL, CALENDLY_URL } from "@/lib/constants";

export function PortfolioCTA() {
  return (
    <section
      className="relative bg-midnight bg-grid-dark overflow-hidden"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        className="glow-teal absolute pointer-events-none"
        style={{ bottom: "-200px", left: "50%", transform: "translateX(-50%)" }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-5">
            Tu negocio puede ser el siguiente
          </p>
          <h2
            className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1px] mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            ¿Resultados
            <br />
            como estos?
          </h2>
          <p className="font-sans text-slate-light leading-[1.75] mb-10">
            Hablemos 30 minutos. Te cuento qué estrategia aplicaría en tu caso específico y qué resultados son realistas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" href={CALENDLY_URL} external>
              Agendar llamada gratuita →
            </Button>
            <Button variant="whatsapp" size="lg" href={WA_URL} external>
              Escribir por WhatsApp
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
