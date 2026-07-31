import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tilt } from "@/components/ui/Tilt";
import { CALENDLY_URL } from "@/lib/constants";

// A literal, illustrative SERP mock — makes the ranking problem visible
// instead of describing it through icon+text cards. Kept industry-agnostic
// ("tu competencia" / "tu sitio") so it works for any client's business,
// not just web design.

export function Agitation() {
  return (
    <section
      className="bg-off-white relative overflow-hidden"
      style={{ paddingTop: "110px", paddingBottom: "110px" }}
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_460px] items-center">
          {/* Copy */}
          <FadeIn>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.08] tracking-[-1.5px] mb-6"
              style={{ fontSize: "clamp(28px, 3.6vw, 46px)", textWrap: "balance" }}
            >
              Cada mes sin estrategia clara es{" "}
              <span className="text-teal">tráfico que le regalas a tu competencia.</span>
            </h2>
            <p
              className="font-sans text-text-mid leading-[1.85] mb-8 max-w-[480px]"
              style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}
            >
              Un sitio que no posiciona no es un activo, es un gasto invisible.
              Cada día que pasa, tu competencia consolida posiciones que
              tendrás que recuperar con el doble de esfuerzo. El tráfico
              orgánico funciona como interés compuesto: quien empieza hoy,
              gana mañana.
            </p>
            <Button variant="primary" size="lg" href={CALENDLY_URL} external>
              Diagnóstico gratuito → 30 min
            </Button>
            <p className="font-sans text-[11px] text-slate mt-4">
              Sin compromiso. Sales con un plan claro aunque no contrates.
            </p>
          </FadeIn>

          {/* SERP mock */}
          <FadeIn delay={0.15}>
            <Tilt max={3} lift={6}>
              <div className="rounded-2xl bg-white p-5 shadow-[0_20px_60px_-15px_rgba(11,24,41,0.25)] ring-1 ring-black/5">
                {/* Fake search bar */}
                <div className="flex items-center gap-2.5 rounded-full bg-off-white px-4 py-2.5 mb-5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0012 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09A6.6 6.6 0 015.5 12c0-.73.13-1.43.34-2.09V7.06H2.18A11 11 0 001 12c0 1.78.43 3.46 1.18 4.94l3.66-2.85z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 00-9.82 6.06l3.66 2.85C6.71 7.31 9.14 5.38 12 5.38z"/>
                  </svg>
                  <span className="font-sans text-[12px] text-text-mid">[tu producto o servicio] en [tu ciudad]</span>
                </div>

                {/* Competitor rows — generic on purpose, works for any industry */}
                <div className="space-y-4 mb-3">
                  {[1, 2].map((n) => (
                    <div key={n}>
                      <p className="font-sans text-[10px] text-slate mb-0.5">
                        <span className="text-slate/70">#{n}</span> · Tu competencia
                      </p>
                      <div className="h-1.5 rounded-full bg-black/[0.06] w-[92%] mb-1" />
                      <div className="h-1.5 rounded-full bg-black/[0.06] w-[70%]" />
                    </div>
                  ))}
                </div>

                <p className="font-sans text-slate/50 text-[13px] tracking-[3px] my-3">···</p>

                {/* "You" row — the point of the whole mock */}
                <div className="rounded-xl border-[1.5px] border-dashed border-amber/50 bg-amber-dim/40 p-3.5">
                  <p className="font-sans text-[10px] text-amber font-semibold mb-1.5">
                    #7 · Tu sitio
                  </p>
                  <p className="font-sans text-[11px] text-text-mid">
                    Así te ve hoy un cliente que te busca en Google.
                  </p>
                </div>

                {/* Outcome line */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-black/5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal shrink-0" aria-hidden="true">
                    <line x1="12" y1="19" x2="12" y2="5" />
                    <polyline points="5 12 12 5 19 12" />
                  </svg>
                  <p className="font-sans text-[12px] text-teal font-semibold">
                    Con SEO real: posición 2–3 en 3–6 meses
                  </p>
                </div>
              </div>
            </Tilt>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
