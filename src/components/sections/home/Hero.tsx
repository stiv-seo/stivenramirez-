"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WA_URL } from "@/lib/constants";

const trustSignals = [
  "+40 proyectos entregados",
  "SEO incluido en cada sitio",
  "Sin subcontratistas",
];

export function Hero() {
  return (
    <section
      className="relative bg-midnight bg-grid-dark overflow-hidden"
      style={{ paddingTop: "80px", paddingBottom: "100px" }}
    >
      {/* Glow orb */}
      <div
        className="glow-teal absolute pointer-events-none"
        style={{ top: "-100px", right: "-100px", opacity: 0.6 }}
        aria-hidden="true"
      />

      <Container>
        <div
          className="grid items-center gap-12 lg:gap-8"
          style={{ gridTemplateColumns: "1fr" }}
        >
          <div className="lg:grid lg:items-center lg:gap-16"
            style={{ gridTemplateColumns: "60fr 40fr" }}
          >
            {/* Left — copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" as const }}
              >
                <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-5">
                  Consultor SEO &amp; Diseñador Web · Colombia
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
                className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-6"
                style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
              >
                Diseño webs que posicionan en Google y generan ventas.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
                className="font-sans text-slate-light leading-[1.75] mb-8 max-w-[560px]"
                style={{ fontSize: "clamp(16px, 1.2vw, 18px)" }}
              >
                Sitios WordPress y Shopify con SEO integrado desde el primer elemento. No contratas a un diseñador y luego a un SEO — lo tienes todo en uno.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Button variant="primary" size="lg" href="/servicios/">
                  Ver mis servicios →
                </Button>
                <Button variant="whatsapp" size="lg" href={WA_URL} external>
                  WhatsApp
                </Button>
              </motion.div>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-x-6 gap-y-2"
              >
                {trustSignals.map((signal) => (
                  <span
                    key={signal}
                    className="font-sans text-[13px] text-slate-light flex items-center gap-2"
                  >
                    <span className="text-teal">✦</span>
                    {signal}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — foto placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div
                className="relative w-full rounded-2xl overflow-hidden bg-navy"
                style={{ aspectRatio: "4/5" }}
              >
                {/* Placeholder until real photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-midnight flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-teal/20 flex items-center justify-center mx-auto mb-3">
                      <span className="font-jakarta font-extrabold text-2xl text-teal">SR</span>
                    </div>
                    <p className="font-sans text-xs text-slate-light/50">
                      Foto profesional · próximamente
                    </p>
                  </div>
                </div>
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
