"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL } from "@/lib/constants";
import type { Estado, Grupo, Punto, Revision } from "@/lib/revision-seo/analizar";

// ─── Revisión SEO express: formulario, resultado y envío del informe ─────────

const PASOS = ["Abriendo tu página…", "Leyendo título, descripción y encabezados…", "Buscando robots.txt y sitemap…", "Armando el resultado…"];
const GRUPOS: Grupo[] = ["Lo que lee Google", "Rastreo e indexación", "Cómo se muestra", "Experiencia"];

const ESTADO: Record<Estado, { etiqueta: string; texto: string; fondo: string }> = {
  critico: { etiqueta: "Crítico", texto: "text-[#B42318]", fondo: "bg-[#B42318]" },
  mejorar: { etiqueta: "Por mejorar", texto: "text-[#B45309]", fondo: "bg-[#D97706]" },
  bien: { etiqueta: "Bien", texto: "text-[#0B7A6E]", fondo: "bg-teal" },
};

function evento(nombre: string, datos: Record<string, unknown> = {}) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer?.push({ event: nombre, ...datos });
}

function Marca({ estado }: { estado: Estado }) {
  return (
    <span className={`mt-[7px] inline-block h-2.5 w-2.5 shrink-0 rounded-full ${ESTADO[estado].fondo}`} aria-hidden="true" />
  );
}

function colorPuntaje(n: number) {
  return n >= 80 ? "#00C4B4" : n >= 50 ? "#D97706" : "#B42318";
}

// Anillo del puntaje: el arco se llena en proporción al resultado.
function Anillo({ puntaje }: { puntaje: number }) {
  const r = 86;
  const largo = 2 * Math.PI * r;
  return (
    <div className="relative h-[136px] w-[136px] shrink-0">
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="14" />
        <circle
          cx="100" cy="100" r={r} fill="none" stroke={colorPuntaje(puntaje)} strokeWidth="14" strokeLinecap="round"
          strokeDasharray={largo} strokeDashoffset={largo * (1 - puntaje / 100)}
          className="transition-[stroke-dashoffset] duration-1000 ease-out motion-reduce:transition-none"
        />
      </svg>
      <p className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-jakarta text-[44px] font-extrabold leading-none tracking-[-1.5px] text-text-dark">{puntaje}</span>
        <span className="mt-0.5 font-sans text-[13px] font-medium text-slate">de 100</span>
      </p>
    </div>
  );
}

// Barra repartida entre críticos, por mejorar y bien.
function Reparto({ resumen }: { resumen: Revision["resumen"] }) {
  const total = resumen.critico + resumen.mejorar + resumen.bien || 1;
  const tramos: [Estado, number][] = [["critico", resumen.critico], ["mejorar", resumen.mejorar], ["bien", resumen.bien]];
  return (
    <div className="flex h-2.5 w-full gap-[3px] overflow-hidden rounded-full" aria-hidden="true">
      {tramos.filter(([, n]) => n > 0).map(([e, n]) => (
        <span key={e} className={ESTADO[e].fondo} style={{ width: `${(n / total) * 100}%` }} />
      ))}
    </div>
  );
}

function Fila({ p }: { p: Punto }) {
  return (
    <li className="flex gap-3.5 border-b border-black/[0.08] py-4">
      <Marca estado={p.estado} />
      <div className="min-w-0">
        <p className="font-jakarta text-[15px] font-bold leading-snug text-text-dark">
          {p.titulo}
          <span className={`ml-2 font-sans text-xs font-semibold ${ESTADO[p.estado].texto}`}>{ESTADO[p.estado].etiqueta}</span>
        </p>
        <p className="mt-1 break-words font-sans text-[15px] leading-relaxed text-text-mid">{p.hallazgo}</p>
      </div>
    </li>
  );
}

export function RevisionSeoTool() {
  const [url, setUrl] = useState("");
  const [cargando, setCargando] = useState(false);
  const [paso, setPaso] = useState(0);
  const [error, setError] = useState("");
  const [revision, setRevision] = useState<Revision | null>(null);
  const resultadoRef = useRef<HTMLDivElement>(null);
  const fijoRef = useRef<HTMLDivElement>(null);
  const [topeFijo, setTopeFijo] = useState(96);

  const [lead, setLead] = useState({ nombre: "", email: "", telefono: "" });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [errorLead, setErrorLead] = useState("");

  useEffect(() => {
    if (!cargando) return;
    const id = setInterval(() => setPaso((n) => Math.min(n + 1, PASOS.length - 1)), 1600);
    return () => clearInterval(id);
  }, [cargando]);

  // La columna del puntaje y el formulario acompaña el scroll. Si es más alta que la
  // pantalla, se fija más arriba para que el formulario y su botón queden siempre a la vista.
  useEffect(() => {
    const el = fijoRef.current;
    if (!el) return;
    const medir = () => setTopeFijo(Math.min(96, window.innerHeight - el.offsetHeight - 24));
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    window.addEventListener("resize", medir);
    return () => { ro.disconnect(); window.removeEventListener("resize", medir); };
  }, [revision, enviado]);

  useEffect(() => {
    if (revision) resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [revision]);

  async function revisar(e: FormEvent) {
    e.preventDefault();
    if (cargando || !url.trim()) return;
    setCargando(true);
    setPaso(0);
    setError("");
    setEnviado(false);
    setErrorLead("");
    evento("revision_seo_inicio");
    try {
      const res = await fetch("/api/revision-seo/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }) });
      const datos = await res.json();
      if (!res.ok || !datos.revision) {
        setRevision(null);
        setError(datos.error ?? "No pude revisar esa página. Intenta de nuevo.");
      } else {
        setRevision(datos.revision);
        evento("revision_seo_resultado", { puntaje: datos.revision.puntaje });
      }
    } catch {
      setError("No hay conexión con el servidor. Revisa tu internet e intenta de nuevo.");
    } finally {
      setCargando(false);
    }
  }

  async function pedirInforme(e: FormEvent) {
    e.preventDefault();
    if (enviando || !revision) return;
    setEnviando(true);
    setErrorLead("");
    try {
      const res = await fetch("/api/revision-seo/informe/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: lead.nombre, email: lead.email, telefono: lead.telefono || undefined, url: revision.urlFinal }),
      });
      const datos = await res.json();
      if (!res.ok) {
        const campos = datos.issues ? Object.values(datos.issues as Record<string, string[]>).flat().join(" ") : "";
        setErrorLead(campos || datos.error || "No pude enviar el informe. Intenta de nuevo.");
      } else {
        setEnviado(true);
        evento("revision_seo_informe");
      }
    } catch {
      setErrorLead("No hay conexión con el servidor. Intenta de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  const porMejorar = revision ? revision.resumen.critico + revision.resumen.mejorar : 0;
  const prioridades = revision ? revision.prioridades.map((id) => revision.puntos.find((p) => p.id === id)!).filter(Boolean) : [];

  return (
    <>
      {/* ── Entrada con el formulario ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-midnight bg-grain pt-20 md:pt-[140px]" style={{ paddingBottom: "90px" }}>
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-xs text-slate">
              <li><Link href="/" className="transition-colors duration-150 hover:text-teal">Inicio</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-slate-light" aria-current="page">Revisión SEO gratis</li>
            </ol>
          </nav>

          <h1 className="mb-6 max-w-[15ch] font-jakarta font-extrabold leading-[1.03] tracking-[-1.5px] text-white" style={{ fontSize: "clamp(36px, 5.2vw, 68px)" }}>
            Revisa el SEO de tu página <span className="text-teal">en segundos.</span>
          </h1>
          <p className="max-w-[560px] font-sans leading-[1.8] text-slate-light" style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}>
            Escribe la dirección de tu sitio y mira qué está bien, qué falta y por dónde empezar. Son 17 puntos que Google mira en cualquier página.
          </p>

          <form onSubmit={revisar} className="mt-9 flex max-w-[680px] flex-col gap-3 sm:flex-row" noValidate>
            <label htmlFor="rs-url" className="sr-only">Dirección de tu sitio web</label>
            <input
              id="rs-url"
              type="text"
              inputMode="url"
              autoComplete="url"
              autoCapitalize="none"
              spellCheck={false}
              placeholder="tunegocio.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              aria-describedby="rs-estado"
              className="min-h-[54px] w-full flex-1 rounded-md border border-white/20 bg-white/[0.06] px-5 font-sans text-[17px] text-white placeholder:text-slate-light/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40"
            />
            <Button type="submit" size="lg" disabled={cargando || !url.trim()} className="min-h-[54px] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0">
              {cargando ? "Revisando…" : "Revisar mi página"}
            </Button>
          </form>

          <p id="rs-estado" role="status" aria-live="polite" className="mt-4 min-h-[1.6em] font-sans text-sm">
            {cargando ? (
              <span className="text-slate-light">{PASOS[paso]}</span>
            ) : error ? (
              <span className="text-[#FDA29B]">{error}</span>
            ) : (
              <span className="text-slate">Gratis y sin registro. No guardo la dirección que escribas.</span>
            )}
          </p>
        </Container>
      </section>

      {/* ── Resultado ─────────────────────────────────────────────────────── */}
      {revision && (
        <section ref={resultadoRef} className="scroll-mt-20 bg-warm-white" style={{ paddingTop: "72px", paddingBottom: "90px" }} aria-label="Resultado de la revisión">
          <Container>
            <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
              {/* Puntaje + por dónde empezar */}
              <div ref={fijoRef} className="lg:sticky lg:self-start" style={{ top: topeFijo }}>
                <p className="break-all font-sans text-sm text-slate">{revision.urlFinal}</p>
                <div className="mt-4 flex items-center gap-6">
                  <Anillo key={revision.urlFinal + revision.puntaje} puntaje={revision.puntaje} />
                  <p className="max-w-[16ch] font-jakarta text-[22px] font-bold leading-tight tracking-[-0.5px] text-text-dark">
                    {revision.puntaje >= 80 ? "La base está en orden." : revision.puntaje >= 50 ? "Hay base, con varios pendientes." : "Hay problemas que frenan a Google."}
                  </p>
                </div>
                <div className="mt-6"><Reparto resumen={revision.resumen} /></div>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-sans text-[15px] text-text-mid">
                  <li className="flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${ESTADO.critico.fondo}`} aria-hidden="true" />{revision.resumen.critico} críticos</li>
                  <li className="flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${ESTADO.mejorar.fondo}`} aria-hidden="true" />{revision.resumen.mejorar} por mejorar</li>
                  <li className="flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${ESTADO.bien.fondo}`} aria-hidden="true" />{revision.resumen.bien} bien</li>
                </ul>
                {revision.aviso && <p className="mt-5 rounded-lg bg-off-white p-4 font-sans text-sm leading-relaxed text-text-mid">{revision.aviso}</p>}

                {/* Informe por correo */}
                <div className="mt-7 rounded-2xl bg-midnight p-6">
                  {enviado ? (
                    <div role="status">
                      <h2 className="font-jakarta text-[22px] font-bold tracking-[-0.5px] text-white">Informe enviado.</h2>
                      <p className="mt-3 font-sans text-[15px] leading-relaxed text-slate-light">
                        Revisa tu correo (y la carpeta de no deseados). Si quieres verlo conmigo, agenda una llamada de 30 minutos sin costo.
                      </p>
                      <Button href={CALENDLY_URL} external className="mt-5">Agendar la llamada</Button>
                    </div>
                  ) : (
                    <form onSubmit={pedirInforme} noValidate>
                      <h2 className="font-jakarta text-[22px] font-bold leading-tight tracking-[-0.5px] text-white">
                        {porMejorar > 0 ? "Recibe el paso a paso por correo." : "Guarda este resultado en tu correo."}
                      </h2>
                      <p className="mt-2 font-sans text-[15px] leading-relaxed text-slate-light">
                        {porMejorar > 0
                          ? `El informe completo explica cómo arreglar ${porMejorar === 1 ? "el punto pendiente" : `los ${porMejorar} puntos pendientes`}, para ti o para quien maneja tu sitio.`
                          : "Te envío el informe completo para que lo tengas a la mano."}
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="col-span-2">
                          <label htmlFor="rs-nombre" className="mb-1.5 block font-sans text-sm text-slate-light">Nombre</label>
                          <input id="rs-nombre" required autoComplete="name" value={lead.nombre} onChange={(e) => setLead({ ...lead, nombre: e.target.value })}
                            className="min-h-[48px] w-full rounded-md border border-white/20 bg-white/[0.06] px-4 font-sans text-base text-white focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40" />
                        </div>
                        <div>
                          <label htmlFor="rs-email" className="mb-1.5 block font-sans text-sm text-slate-light">Correo</label>
                          <input id="rs-email" type="email" required autoComplete="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })}
                            className="min-h-[48px] w-full rounded-md border border-white/20 bg-white/[0.06] px-4 font-sans text-base text-white focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40" />
                        </div>
                        <div>
                          <label htmlFor="rs-tel" className="mb-1.5 block font-sans text-sm text-slate-light">WhatsApp <span className="text-slate">(opc.)</span></label>
                          <input id="rs-tel" type="tel" autoComplete="tel" value={lead.telefono} onChange={(e) => setLead({ ...lead, telefono: e.target.value })}
                            className="min-h-[48px] w-full rounded-md border border-white/20 bg-white/[0.06] px-4 font-sans text-base text-white focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40" />
                        </div>
                      </div>
                      <Button type="submit" disabled={enviando} className="mt-4 w-full min-h-[50px] disabled:cursor-not-allowed disabled:opacity-60">
                        {enviando ? "Enviando…" : "Enviarme el informe"}
                      </Button>
                      {errorLead && <p role="alert" className="mt-3 font-sans text-sm text-[#FDA29B]">{errorLead}</p>}
                      <p className="mt-3 font-sans text-[13px] leading-relaxed text-slate">
                        Te envío el informe y te escribo una vez por si tienes dudas. Nada más. <Link href="/privacidad/" className="underline hover:text-teal">Privacidad</Link>.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Prioridades + detalle */}
              <div>
                {prioridades.length > 0 ? (
                  <>
                    <h2 className="font-jakarta font-extrabold leading-[1.1] tracking-[-1px] text-text-dark" style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>
                      Empieza por aquí
                    </h2>
                    <ol className="mt-6 grid gap-6">
                      {prioridades.map((p, i) => (
                        <li key={p.id} className="grid grid-cols-[2.25rem_1fr] gap-x-3">
                          <span className="font-jakarta text-[28px] font-extrabold leading-none text-teal" aria-hidden="true">{i + 1}</span>
                          <div className="min-w-0">
                            <p className="font-jakarta text-[17px] font-bold leading-snug text-text-dark">
                              {p.titulo}
                              <span className={`ml-2 font-sans text-xs font-semibold ${ESTADO[p.estado].texto}`}>{ESTADO[p.estado].etiqueta}</span>
                            </p>
                            <p className="mt-1.5 break-words font-sans text-[15px] leading-relaxed text-text-mid">{p.hallazgo}</p>
                            <p className="mt-2 font-sans text-[15px] leading-relaxed text-text-dark"><strong className="font-semibold">Cómo arreglarlo:</strong> {p.arreglo}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </>
                ) : (
                  <h2 className="font-jakarta font-extrabold leading-[1.1] tracking-[-1px] text-text-dark" style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>
                    Los 17 puntos están bien.
                  </h2>
                )}

                <div className="mt-12 grid gap-10">
                  {GRUPOS.map((g) => {
                    const lista = revision.puntos.filter((p) => p.grupo === g);
                    if (!lista.length) return null;
                    return (
                      <div key={g}>
                        <div className="flex items-end justify-between gap-4 border-b border-black/[0.08] pb-3">
                          <h3 className="font-jakarta text-lg font-bold tracking-[-0.3px] text-text-dark">{g}</h3>
                          <p className="flex shrink-0 items-center gap-2 font-sans text-sm text-slate">
                            <span className="flex gap-1" aria-hidden="true">
                              {lista.map((p) => <span key={p.id} className={`h-2 w-2 rounded-full ${ESTADO[p.estado].fondo}`} />)}
                            </span>
                            {lista.filter((p) => p.estado === "bien").length} de {lista.length} bien
                          </p>
                        </div>
                        <ul>{lista.map((p) => <Fila key={p.id} p={p} />)}</ul>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-8 font-sans text-sm leading-relaxed text-slate">
                  Esta revisión es automática y mira una sola página. No analiza palabras clave, competencia ni el sitio completo: eso lo hace una{" "}
                  <Link href="/servicios/seo/auditoria/" className="font-semibold text-text-dark underline decoration-teal decoration-2 underline-offset-4 hover:text-teal">auditoría SEO</Link>.
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
