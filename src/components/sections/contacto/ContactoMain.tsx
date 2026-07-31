"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { WA_URL, CALENDLY_URL } from "@/lib/constants";

const budgetOptions = [
  { value: "", label: "¿Cuál es tu presupuesto aproximado?" },
  { value: "menos-1m", label: "Menos de $1.000.000 COP" },
  { value: "1m-2m", label: "$1.000.000 – $2.000.000 COP" },
  { value: "2m-4m", label: "$2.000.000 – $4.000.000 COP" },
  { value: "mas-4m", label: "Más de $4.000.000 COP" },
  { value: "no-se", label: "No lo sé todavía" },
];

const channels = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.886a.5.5 0 0 0 .611.611l6.037-1.471A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.073-1.38l-.364-.216-3.773.919.938-3.683-.236-.38A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    label: "WhatsApp",
    description: "Respuesta inmediata en horario laboral",
    cta: "Escribir ahora",
    href: WA_URL,
    accent: "text-[#25D366]",
    bg: "bg-[#25D366]/10 border-[#25D366]/20",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: "Calendly",
    description: "Agenda una llamada de 30 min sin costo",
    cta: "Ver disponibilidad",
    href: CALENDLY_URL,
    accent: "text-teal",
    bg: "bg-teal/10 border-teal/20",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    description: "hola@stivenramirez.com",
    cta: "Enviar email",
    href: "mailto:hola@stivenramirez.com",
    accent: "text-amber",
    bg: "bg-amber/10 border-amber/20",
  },
];

export function ContactoMain() {
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    empresa: "",
    presupuesto: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error ?? "Ocurrió un error. Intenta de nuevo.");
        setLoading(false);
        return;
      }
      router.push("/contacto/gracias/");
    } catch {
      setError("No se pudo enviar el mensaje. Revisa tu conexión e intenta de nuevo.");
      setLoading(false);
    }
  }

  const inputBase =
    "w-full font-sans text-sm text-text-dark bg-off-white border border-[rgba(0,0,0,0.1)] rounded-xl px-4 py-3 placeholder:text-slate focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all duration-150";

  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] items-start">

          {/* Form */}
          <FadeIn>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-0.5px] mb-2"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Cuéntame tu proyecto
            </h2>
            <p className="font-sans text-text-mid text-sm leading-[1.75] mb-8">
              Rellena el formulario o usa cualquiera de los canales de la derecha.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="font-sans text-xs font-semibold text-text-dark mb-1.5 block">
                    Nombre <span className="text-teal">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-sans text-xs font-semibold text-text-dark mb-1.5 block">
                    Email <span className="text-teal">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="empresa" className="font-sans text-xs font-semibold text-text-dark mb-1.5 block">
                  Empresa o sitio web actual
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  autoComplete="organization"
                  placeholder="Mi empresa S.A.S. o tusitio.com"
                  value={form.empresa}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div>
                <label htmlFor="presupuesto" className="font-sans text-xs font-semibold text-text-dark mb-1.5 block">
                  Presupuesto aproximado
                </label>
                <select
                  id="presupuesto"
                  name="presupuesto"
                  value={form.presupuesto}
                  onChange={handleChange}
                  className={inputBase}
                >
                  {budgetOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="font-sans text-xs font-semibold text-text-dark mb-1.5 block">
                  ¿Qué necesitas? <span className="text-teal">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu negocio, qué quieres lograr y en qué plazo..."
                  value={form.mensaje}
                  onChange={handleChange}
                  className={`${inputBase} resize-none`}
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center"
                disabled={loading}
              >
                {loading ? "Enviando…" : "Enviar mensaje →"}
              </Button>

              {error && (
                <p className="font-sans text-[13px] text-red-500 text-center leading-[1.5]" role="alert">
                  {error}
                </p>
              )}

              <p className="font-sans text-[11px] text-slate text-center leading-[1.6]">
                Sin spam. Tus datos solo se usan para responderte.
                <br />
                Respondo en menos de 24 horas en días hábiles.
              </p>
            </form>
          </FadeIn>

          {/* Channels */}
          <FadeIn direction="left" delay={0.1}>
            <h3 className="font-jakarta font-bold text-text-dark text-[18px] mb-6">
              O contáctame directo
            </h3>
            <div className="space-y-4">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col sm:flex-row items-start gap-4 rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-0.5 ${ch.bg}`}
                  aria-label={`${ch.label}: ${ch.description}`}
                >
                  <span className={`mt-0.5 shrink-0 ${ch.accent}`}>{ch.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-jakarta font-bold text-sm ${ch.accent}`}>
                      {ch.label}
                    </p>
                    <p className="font-sans text-xs text-text-mid mt-0.5 leading-[1.5]">
                      {ch.description}
                    </p>
                  </div>
                  <span className={`font-sans text-xs font-semibold shrink-0 mt-0.5 ${ch.accent} group-hover:translate-x-0.5 transition-transform duration-150`}>
                    {ch.cta} →
                  </span>
                </a>
              ))}
            </div>

            {/* Trust note */}
            <div className="mt-8 bg-warm-white rounded-2xl p-6">
              <p className="font-jakarta font-bold text-text-dark text-[15px] mb-3">
                ¿No sabes qué necesitas?
              </p>
              <p className="font-sans text-sm text-text-mid leading-[1.7]">
                Agenda la llamada de Calendly. En 30 minutos te digo exactamente qué servicio
                encaja con tus objetivos y cuánto cuesta.
              </p>
            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
