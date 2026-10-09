"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";

// ─── Franja de entrada a la Revisión SEO express: se escribe la dirección aquí
//     y la herramienta arranca sola en su página ────────────────────────────────

const GRUPOS = ["Lo que lee Google", "Rastreo e indexación", "Cómo se muestra", "Experiencia"];
const SUAVE = "cubic-bezier(0.16, 1, 0.3, 1)";

export function RevisionSeoCTA({ origen = "inicio" }: { origen?: string }) {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const ref = useRef<HTMLElement>(null);
  const [visto, setVisto] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisto(true);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function ir(e: FormEvent) {
    e.preventDefault();
    const valor = url.trim();
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer?.push({ event: "revision_seo_cta", origen });
    router.push(valor ? `/herramientas/revision-seo/?url=${encodeURIComponent(valor)}` : "/herramientas/revision-seo/");
  }

  const largo = 2 * Math.PI * 86;

  return (
    <section ref={ref} className="relative overflow-hidden bg-teal" style={{ paddingTop: "72px", paddingBottom: "72px" }} aria-labelledby="rs-cta-t">
      <Container>
        <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <p className="font-sans text-sm font-bold text-midnight">Herramienta gratis</p>
            <h2 id="rs-cta-t" className="mt-3 max-w-[18ch] font-jakarta font-extrabold leading-[1.04] tracking-[-1.5px] text-midnight" style={{ fontSize: "clamp(32px, 4.4vw, 56px)" }}>
              ¿Cómo está el SEO de tu página? Revísalo ahora.
            </h2>
            <p className="mt-4 max-w-[52ch] font-sans text-[17px] leading-[1.7] text-midnight/85">
              Escribe la dirección de tu sitio y en segundos ves qué está bien, qué falta y por dónde empezar. Sin registro.
            </p>

            <form onSubmit={ir} className="mt-7 flex max-w-[620px] flex-col gap-3 sm:flex-row" noValidate>
              <label htmlFor={`rs-cta-${origen}`} className="sr-only">Dirección de tu sitio web</label>
              <input
                id={`rs-cta-${origen}`}
                type="text"
                inputMode="url"
                autoComplete="url"
                autoCapitalize="none"
                spellCheck={false}
                placeholder="tunegocio.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="min-h-[56px] w-full flex-1 rounded-md border-2 border-midnight bg-white px-5 font-sans text-[17px] text-midnight placeholder:text-[#5B6B7C] focus:outline-none focus:ring-4 focus:ring-midnight/25"
              />
              <button type="submit" className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-md bg-midnight px-7 font-jakarta text-base font-bold text-white transition-transform duration-200 hover:-translate-y-px">
                Revisar mi página
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </form>
          </div>

          {/* Qué revisa: anillo de 17 puntos y los cuatro grupos */}
          <div className="flex items-center gap-7">
            <div className="relative h-[150px] w-[150px] shrink-0" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
                <circle cx="100" cy="100" r="86" fill="none" stroke="rgba(11,24,41,0.18)" strokeWidth="14" />
                <circle cx="100" cy="100" r="86" fill="none" stroke="#0B1829" strokeWidth="14" strokeLinecap="round" strokeDasharray={largo}
                  strokeDashoffset={visto ? 0 : largo} className="motion-reduce:!transition-none" style={{ transition: `stroke-dashoffset 1.6s ${SUAVE} 0.2s` }} />
              </svg>
              <p className="absolute inset-0 flex flex-col items-center justify-center text-midnight">
                <span className="font-jakarta text-[46px] font-extrabold leading-none tracking-[-1.5px]">17</span>
                <span className="mt-0.5 font-sans text-[13px] font-semibold">puntos</span>
              </p>
            </div>
            <ul className="grid gap-3 font-sans text-[15px] font-semibold text-midnight">
              {GRUPOS.map((g, i) => (
                <li key={g} className={`flex items-center gap-2.5 ${visto ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"} motion-reduce:!translate-x-0 motion-reduce:!opacity-100 motion-reduce:!transition-none`}
                  style={{ transition: `opacity 0.6s ${SUAVE} ${500 + i * 160}ms, transform 0.6s ${SUAVE} ${500 + i * 160}ms` }}>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-midnight" aria-hidden="true" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
