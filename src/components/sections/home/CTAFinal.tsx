import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { WA_URL, CALENDLY_URL } from "@/lib/constants";

export function CTAFinal() {
  return (
    <section
      className="relative bg-midnight overflow-hidden"
      style={{ paddingTop: "140px", paddingBottom: "140px" }}
    >
      {/* Center ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,196,180,0.10) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <Container>
        <FadeIn>
          {/* Gradient border wrapper (double-bezel CTA) */}
          <div
            className="relative rounded-[2rem] p-[1px] mx-auto max-w-[800px]"
            style={{
              background: "linear-gradient(135deg, rgba(0,196,180,0.35) 0%, rgba(255,255,255,0.06) 50%, rgba(0,196,180,0.12) 100%)",
            }}
          >
            <div
              className="rounded-[calc(2rem-1px)] text-center"
              style={{
                background: "linear-gradient(160deg, rgba(15,45,82,0.55) 0%, rgba(11,24,41,0.97) 100%)",
                backdropFilter: "blur(24px)",
                padding: "clamp(48px, 6vw, 80px) clamp(32px, 5vw, 72px)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.08)",
              }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/[0.08] px-4 py-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" style={{ animation: "pulse 2s infinite" }} aria-hidden="true" />
                <span className="font-sans text-[10px] font-semibold tracking-[3px] uppercase text-teal">
                  ¿Empezamos?
                </span>
              </div>

              <h2
                className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-5"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
              >
                ¿Listo para aparecer primero en Google?
              </h2>

              <p className="font-sans text-slate-light leading-[1.8] mb-10 mx-auto" style={{ maxWidth: "440px" }}>
                Primera consulta gratuita y sin compromiso. Te digo exactamente qué necesita tu negocio para posicionar.
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                {/* Primary — button-in-button */}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full pl-6 pr-1.5 py-1.5 font-jakarta font-bold text-[14px] bg-teal hover:bg-teal-bright text-midnight active:scale-[0.97]"
                  style={{ transition: "background-color 180ms ease-out, transform 120ms ease-out" }}
                >
                  Agenda tu llamada gratuita
                  <span className="w-8 h-8 rounded-full bg-midnight/20 flex items-center justify-center text-base">
                    →
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.05] text-white rounded-full px-6 py-3 font-jakarta font-bold text-[14px] active:scale-[0.97]"
                  style={{ transition: "border-color 180ms ease-out, background-color 180ms ease-out, transform 120ms ease-out" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Escribir por WhatsApp
                </a>
              </div>

            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
