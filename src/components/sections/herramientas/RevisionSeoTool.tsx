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

const SUAVE = "cubic-bezier(0.16, 1, 0.3, 1)";

// Cuenta de 0 al valor final al aparecer (sin animación si el visitante pidió menos movimiento).
function useConteo(objetivo: number, ms = 1300) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const dur = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : ms;
    const t0 = performance.now();
    let raf = 0;
    const paso = (t: number) => {
      const p = dur ? Math.min(1, (t - t0) / dur) : 1;
      setN(objetivo * (1 - Math.pow(1 - p, 4)));
      if (p < 1) raf = requestAnimationFrame(paso);
    };
    raf = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(raf);
  }, [objetivo, ms]);
  return n;
}

// Marca un elemento como visto la primera vez que entra en pantalla.
function useVisto<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visto, setVisto] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisto(true);
        io.disconnect();
      }
    }, { rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visto] as const;
}

function entrada(visto: boolean, retraso = 0) {
  return {
    className: `${visto ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:!transition-none`,
    style: { transition: `opacity 0.7s ${SUAVE} ${retraso}ms, transform 0.7s ${SUAVE} ${retraso}ms` },
  };
}

// Anillo del puntaje: el arco se llena y el número cuenta hasta el resultado.
function Anillo({ puntaje }: { puntaje: number }) {
  const r = 86;
  const largo = 2 * Math.PI * r;
  const n = useConteo(puntaje);
  return (
    <div className="relative h-[136px] w-[136px] shrink-0" role="img" aria-label={`${puntaje} de 100`}>
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="14" />
        <circle cx="100" cy="100" r={r} fill="none" stroke={colorPuntaje(puntaje)} strokeWidth="14" strokeLinecap="round" strokeDasharray={largo} strokeDashoffset={largo * (1 - n / 100)} />
      </svg>
      <p className="absolute inset-0 flex flex-col items-center justify-center" aria-hidden="true">
        <span className="font-jakarta text-[44px] font-extrabold leading-none tracking-[-1.5px] text-text-dark tabular-nums">{Math.round(n)}</span>
        <span className="mt-0.5 font-sans text-[13px] font-medium text-slate">de 100</span>
      </p>
    </div>
  );
}

// Barra repartida entre críticos, por mejorar y bien: cada tramo crece hasta su parte.
function Reparto({ resumen }: { resumen: Revision["resumen"] }) {
  const total = resumen.critico + resumen.mejorar + resumen.bien || 1;
  const tramos: [Estado, number][] = [["critico", resumen.critico], ["mejorar", resumen.mejorar], ["bien", resumen.bien]];
  const p = useConteo(1, 1500);
  return (
    <div className="flex h-2.5 w-full gap-[3px] overflow-hidden rounded-full bg-black/[0.06]" aria-hidden="true">
      {tramos.filter(([, n]) => n > 0).map(([e, n]) => (
        <span key={e} className={ESTADO[e].fondo} style={{ width: `${(n / total) * 100 * p}%` }} />
      ))}
    </div>
  );
}

function Fila({ p, orden }: { p: Punto; orden: number }) {
  const [ref, visto] = useVisto<HTMLLIElement>();
  const e = entrada(visto, orden * 70);
  return (
    <li ref={ref} className={`flex gap-3.5 border-b border-black/[0.08] py-4 ${e.className}`} style={e.style}>
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

function Prioridad({ p, orden }: { p: Punto; orden: number }) {
  const [ref, visto] = useVisto<HTMLLIElement>();
  const e = entrada(visto, 250 + orden * 140);
  return (
    <li ref={ref} className={`grid grid-cols-[2.25rem_1fr] gap-x-3 ${e.className}`} style={e.style}>
      <span className="font-jakarta text-[28px] font-extrabold leading-none text-teal" aria-hidden="true">{orden + 1}</span>
      <div className="min-w-0">
        <p className="font-jakarta text-[17px] font-bold leading-snug text-text-dark">
          {p.titulo}
          <span className={`ml-2 font-sans text-xs font-semibold ${ESTADO[p.estado].texto}`}>{ESTADO[p.estado].etiqueta}</span>
        </p>
        <p className="mt-1.5 break-words font-sans text-[15px] leading-relaxed text-text-mid">{p.hallazgo}</p>
        <p className="mt-2 font-sans text-[15px] leading-relaxed text-text-dark"><strong className="font-semibold">Cómo arreglarlo:</strong> {p.arreglo}</p>
      </div>
    </li>
  );
}

// Encabezado de grupo: los puntos de colores se encienden uno a uno.
function Grupo({ nombre, lista }: { nombre: string; lista: Punto[] }) {
  const [ref, visto] = useVisto<HTMLDivElement>();
  return (
    <div>
      <div ref={ref} className="flex items-end justify-between gap-4 border-b border-black/[0.08] pb-3">
        <h3 className="font-jakarta text-lg font-bold tracking-[-0.3px] text-text-dark">{nombre}</h3>
        <p className="flex shrink-0 items-center gap-2 font-sans text-sm text-slate">
          <span className="flex gap-1" aria-hidden="true">
            {lista.map((p, i) => (
              <span key={p.id} className={`h-2 w-2 rounded-full ${ESTADO[p.estado].fondo} ${visto ? "scale-100 opacity-100" : "scale-0 opacity-0"} motion-reduce:!scale-100 motion-reduce:!opacity-100`}
                style={{ transition: `transform 0.5s ${SUAVE} ${200 + i * 90}ms, opacity 0.3s linear ${200 + i * 90}ms` }} />
            ))}
          </span>
          {lista.filter((p) => p.estado === "bien").length} de {lista.length} bien
        </p>
      </div>
      <ul>{lista.map((p, i) => <Fila key={p.id} p={p} orden={i} />)}</ul>
    </div>
  );
}

export function RevisionSeoTool() {
  const [url, setUrl] = useState("");
  const [cargando, setCargando] = useState(false);
  const [paso, setPaso] = useState(0);
  const [error, setError] = useState("");
  const [revision, setRevision] = useState<Revision | null>(null);
  const [vez, setVez] = useState(0); // cambia en cada revisión para que el resultado vuelva a entrar animado
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
  }, [vez, revision, enviado]);

  useEffect(() => {
    if (revision) resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [revision, vez]);

  function revisar(e: FormEvent) {
    e.preventDefault();
    ejecutar(url);
  }

  // Si se llega desde otra página con la dirección ya escrita (?url=), la revisión arranca sola.
  const arranco = useRef(false);
  useEffect(() => {
    if (arranco.current) return;
    arranco.current = true;
    const inicial = new URLSearchParams(window.location.search).get("url")?.trim();
    if (!inicial) return;
    window.history.replaceState(null, "", window.location.pathname);
    ejecutar(inicial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function ejecutar(valor: string) {
    const url = valor.trim();
    if (cargando || !url) return;
    setUrl(url);
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
        setVez((n) => n + 1);
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

          <div className="mt-4 h-[3px] max-w-[680px] overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div className="h-full rounded-full bg-teal motion-reduce:transition-none" style={{ width: cargando ? `${((paso + 1) / PASOS.length) * 92}%` : "0%", opacity: cargando ? 1 : 0, transition: `width 1.6s ${SUAVE}, opacity 0.3s linear` }} />
          </div>

          <p id="rs-estado" role="status" aria-live="polite" className="mt-3 min-h-[1.6em] font-sans text-sm">
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
            <div key={vez} className="grid gap-x-16 gap-y-12 min-[900px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
              {/* Puntaje + por dónde empezar */}
              <div ref={fijoRef} className="min-[900px]:sticky min-[900px]:self-start" style={{ top: topeFijo }}>
                <p className="break-all font-sans text-sm text-slate">{revision.urlFinal}</p>
                <div className="mt-4 flex items-center gap-6">
                  <Anillo puntaje={revision.puntaje} />
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
                      {prioridades.map((p, i) => <Prioridad key={p.id} p={p} orden={i} />)}
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
                    return <Grupo key={g} nombre={g} lista={lista} />;
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
