import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL } from "@/lib/constants";

const painPoints = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    text: "Tu competencia aparece primero en Google. Tú no existes para ese cliente.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: "Cada mes sin SEO es posicionamiento que tardas 6 meses más en recuperar.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    text: "Pagas en pauta lo que el SEO te daría gratis. El tráfico orgánico no tiene CPC.",
  },
];

export function Agitation() {
  return (
    <section
      className="bg-off-white relative overflow-hidden"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      {/* Subtle teal accent line top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[3px] rounded-full bg-teal"
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-[780px] mx-auto text-center">
          {/* Eyebrow */}
          <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-6">
            La realidad que nadie te dice
          </p>

          {/* Headline */}
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1.5px] mb-6"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
          >
            Cada mes sin una estrategia clara es{" "}
            <span className="text-teal">tráfico que le regalas a tu competencia.</span>
          </h2>

          {/* Body */}
          <p
            className="font-sans text-text-mid leading-[1.8] mb-10 max-w-[600px] mx-auto"
            style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}
          >
            Un sitio que no posiciona no es un activo — es un gasto invisible. Cada día que pasa sin SEO, tu competencia consolida posiciones que tú deberás recuperar con el doble de esfuerzo y presupuesto. El tráfico orgánico funciona como interés compuesto: quien empieza hoy, gana mañana.
          </p>

          {/* Pain points */}
          <div className="grid gap-4 sm:grid-cols-3 mb-10 text-left">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-warm-white border border-[rgba(0,0,0,0.07)] rounded-2xl p-5"
              >
                <span className="text-teal shrink-0 mt-0.5">{p.icon}</span>
                <p className="font-sans text-text-mid text-[13px] leading-[1.65]">{p.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="primary" size="lg" href={CALENDLY_URL} external>
            Diagnóstico gratuito → 30 min
          </Button>
          <p className="font-sans text-[11px] text-slate mt-4">
            Sin compromiso. Saldrás con un plan claro aunque no contrates.
          </p>
        </div>
      </Container>
    </section>
  );
}
