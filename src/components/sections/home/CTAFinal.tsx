import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { WA_URL, CALENDLY_URL } from "@/lib/constants";

export function CTAFinal() {
  return (
    <section
      style={{ background: "#F7F5F0", paddingTop: "140px", paddingBottom: "140px" }}
    >
      <Container>
        <FadeIn>

          {/* Top divider */}
          <div
            className="mb-16"
            style={{ height: "1px", background: "rgba(0,0,0,0.1)" }}
            aria-hidden="true"
          />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

            {/* Statement */}
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[4px] uppercase mb-6"
                style={{ color: "#00C4B4" }}>
                ¿Empezamos?
              </p>
              <h2
                className="font-jakarta font-extrabold leading-[1.0] tracking-[-2.5px]"
                style={{ fontSize: "clamp(44px, 7vw, 96px)", color: "#0B1829" }}
              >
                ¿Listo para aparecer
                <br />
                <span
                  style={{
                    backgroundImage: "linear-gradient(90deg, #00C4B4 0%, #00A89A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  primero?
                </span>
              </h2>
            </div>

            {/* Action block */}
            <div className="flex flex-col gap-5 shrink-0">
              <p className="font-sans leading-[1.75] max-w-[280px]"
                style={{ fontSize: "14px", color: "#5E6E82" }}>
                Primera consulta gratuita y sin compromiso. Te digo exactamente qué necesita tu negocio.
              </p>
              <div className="flex flex-wrap gap-3">
                {/* Primary */}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full pl-6 pr-1.5 py-1.5 font-jakarta font-bold active:scale-[0.97]"
                  style={{
                    background: "#0B1829",
                    color: "#F7F5F0",
                    fontSize: "14px",
                    transition: "background-color 180ms ease-out, transform 120ms ease-out",
                  }}
                >
                  Agenda tu llamada
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      fontSize: "16px",
                      transition: "transform 180ms ease-out",
                    }}
                  >
                    →
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-jakarta font-bold active:scale-[0.97]"
                  style={{
                    border: "1px solid rgba(0,0,0,0.15)",
                    color: "#0B1829",
                    fontSize: "14px",
                    transition: "border-color 180ms ease-out, background-color 180ms ease-out, transform 120ms ease-out",
                  }}
                >
                  WhatsApp
                </a>
              </div>

              {/* Contact detail */}
              <p className="font-sans text-[12px]" style={{ color: "rgba(0,0,0,0.3)" }}>
                Medellín, Colombia · Respondo en &lt; 24 h
              </p>
            </div>

          </div>

          {/* Bottom divider */}
          <div
            className="mt-16"
            style={{ height: "1px", background: "rgba(0,0,0,0.08)" }}
            aria-hidden="true"
          />

        </FadeIn>
      </Container>
    </section>
  );
}
