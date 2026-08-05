import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { WA_URL, CALENDLY_URL } from "@/lib/constants";

export function CTAFinal() {
  return (
    <section
      className="relative bg-midnight bg-grain overflow-hidden"
      style={{ paddingTop: "140px", paddingBottom: "120px" }}
    >
      <Container>
        {/* Asymmetric close — the page's closing statement gets the same scale as the opening one, not a timid centered card */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <FadeIn>
            <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-6">
              ¿Empezamos?
            </p>
            <h2
              className="font-jakarta font-extrabold text-white leading-[0.98] tracking-[-1.5px]"
              style={{ fontSize: "clamp(38px, 6vw, 80px)", textWrap: "balance" }}
            >
              ¿Listo para aparecer{" "}
              <span className="text-teal">primero</span> en Google?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:pb-2">
            <p className="font-sans text-slate-light leading-[1.75] mb-8 max-w-[380px]">
              Primera consulta gratuita y sin compromiso. Te digo exactamente qué necesita tu negocio para posicionar.
            </p>
            <div className="flex flex-col gap-4 items-start">
              <Button variant="primary" size="lg" href={CALENDLY_URL} external>
                Agenda tu llamada gratuita →
              </Button>
              <Button variant="whatsapp" size="lg" href={WA_URL} external>
                Escribir por WhatsApp
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
