import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const credentials = [
  "Google Analytics 4 certificado",
  "Google Search Console certificado",
  "Google Ads Partner",
  "Especialista WordPress & Shopify",
  "+40 proyectos en Colombia y Latam",
  "Proyectos con Bancolombia, Éxito, Levi's",
];

const reasons = [
  {
    title: "SEO desde el build",
    body: "No agrego SEO al final. Lo construyo desde la arquitectura, las URLs y el código.",
  },
  {
    title: "Un solo interlocutor",
    body: "Hablas directamente conmigo. Sin juniors, sin subcontratistas, sin teléfono roto.",
  },
  {
    title: "Resultados medibles",
    body: "Todo se mide. GSC, Analytics, posiciones. No trabajo por horas — por resultados.",
  },
];

export function WhyStiven() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#07090f", paddingTop: "140px", paddingBottom: "140px" }}
    >
      {/* Ambient */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "-80px", left: "-80px",
        width: "480px", height: "480px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,196,180,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <Container>
        {/* Section label */}
        <FadeIn>
          <p className="font-sans text-[10px] font-semibold tracking-[4px] uppercase text-teal mb-16">
            02 — Por qué Stiven
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 lg:items-start">

          {/* Left — statement + reasons */}
          <div>
            <FadeIn>
              <h2
                className="font-jakarta font-extrabold text-white leading-[1.0] tracking-[-2px] mb-12"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                El diseñador que también es tu consultor SEO.
              </h2>
            </FadeIn>

            {/* Reasons */}
            <div>
              {reasons.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.1}>
                  <div
                    className="flex gap-6 py-7"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span
                      className="font-jakarta font-extrabold text-teal shrink-0 select-none"
                      style={{ fontSize: "11px", letterSpacing: "2px", opacity: 0.6, paddingTop: "4px" }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-jakarta font-bold text-white text-[17px] mb-2 leading-tight">
                        {r.title}
                      </h3>
                      <p className="font-sans text-sm leading-[1.75]"
                        style={{ color: "rgba(148,163,184,0.8)" }}>
                        {r.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right — credential card */}
          <FadeIn delay={0.15}>
            <div
              className="rounded-[1.5rem] p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)",
              }}
            >
              <p className="font-sans text-[10px] font-semibold tracking-[3px] uppercase text-teal mb-6">
                Credenciales
              </p>
              <ul className="space-y-4">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="text-teal mt-0.5 shrink-0 text-xs">✓</span>
                    <span className="font-sans text-sm leading-snug"
                      style={{ color: "rgba(255,255,255,0.65)" }}>
                      {c}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div
                className="my-8"
                style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
                aria-hidden="true"
              />

              {/* Mini stat */}
              <div className="flex items-end gap-4">
                <div>
                  <p
                    className="font-jakarta font-extrabold text-teal leading-none mb-1"
                    style={{ fontSize: "42px", letterSpacing: "-2px" }}
                  >
                    9+
                  </p>
                  <p className="font-sans text-[11px] font-semibold tracking-[2px] uppercase"
                    style={{ color: "rgba(255,255,255,0.3)" }}>
                    Años construyendo webs que posicionan
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
