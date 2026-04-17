import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Mensaje recibido · Stiven Ramírez",
  description: "Tu mensaje ha sido recibido. Te respondo en menos de 24 horas.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasPage() {
  return (
    <section
      className="relative bg-midnight bg-grid-dark overflow-hidden"
      style={{ minHeight: "100dvh", display: "flex", alignItems: "center" }}
    >
      {/* Glow */}
      <div
        className="glow-teal absolute pointer-events-none"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-lg mx-auto text-center py-24">
          {/* Check icon */}
          <div
            className="w-16 h-16 rounded-full bg-teal/20 border-2 border-teal/40 flex items-center justify-center mx-auto mb-8"
            aria-hidden="true"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00C4B4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-5">
            Mensaje recibido
          </p>

          <h1
            className="font-jakarta font-extrabold text-white leading-[1.1] tracking-[-1px] mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Gracias por escribirme.
          </h1>

          <p className="font-sans text-slate-light leading-[1.8] mb-10">
            Revisé tu mensaje y te respondo antes de las próximas{" "}
            <strong className="text-white font-semibold">24 horas hábiles</strong>.
            <br />
            Si necesitas respuesta más rápida, escríbeme por WhatsApp.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" href="/">
              Volver al inicio
            </Button>
            <Button
              variant="whatsapp"
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER ?? "573001234567"}`}
              external
            >
              Escribir por WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
