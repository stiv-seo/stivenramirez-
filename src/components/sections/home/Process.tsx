import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";

/* Mini sparkline — GSC traffic curve */
function TrafficChart() {
  const points = [2, 3, 2, 4, 5, 4, 6, 8, 9, 11, 14, 18, 22];
  const w = 140, h = 44;
  const max = Math.max(...points);
  const coords = points.map((v, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - (v / max) * (h - 4);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const polyline = coords.join(" ");
  const lastX = w;
  const lastY = h - (points[points.length - 1] / max) * (h - 4);

  return (
    <div className="mt-5 rounded-xl bg-teal/[0.06] border border-teal/20 px-4 pt-3 pb-3 min-w-0">
      <div className="flex items-center justify-between mb-2">
        <p className="font-sans text-[9px] font-semibold tracking-[2px] uppercase text-slate">
          GSC · Clics orgánicos
        </p>
        <span className="font-sans text-[9px] font-bold text-teal bg-teal/10 rounded-full px-2 py-0.5">
          +120%
        </span>
      </div>
      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00C4B4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00C4B4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`0,${h} ${coords.join(" ")} ${w},${h}`} fill="url(#chartGrad)" />
        <polyline points={polyline} fill="none" stroke="#00C4B4" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx={lastX} cy={lastY} r="3" fill="#00C4B4" />
      </svg>
      <p className="font-sans text-[9px] text-slate mt-1.5">6 meses · proyecto real</p>
    </div>
  );
}

/* Core Web Vitals score badge */
function CWVBadge() {
  const vitals = [
    { label: "LCP", value: "1.2s" },
    { label: "CLS", value: "0.01" },
    { label: "INP", value: "62ms" },
  ];
  return (
    <div className="mt-5 rounded-xl bg-teal/[0.06] border border-teal/20 px-4 pt-3 pb-3 min-w-0">
      <div className="flex items-center justify-between mb-2.5">
        <p className="font-sans text-[9px] font-semibold tracking-[2px] uppercase text-slate">
          Core Web Vitals
        </p>
        <span className="font-sans text-[9px] font-bold text-teal bg-teal/10 rounded-full px-2 py-0.5">
          100 PSI
        </span>
      </div>
      <div className="flex gap-2">
        {vitals.map((v) => (
          <div key={v.label} className="flex-1 bg-warm-white border border-teal/20 rounded-lg px-2 py-1.5 text-center">
            <p className="font-jakarta font-bold text-teal text-[13px] leading-none">{v.value}</p>
            <p className="font-sans text-[9px] text-slate mt-0.5">{v.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* URL/content architecture tree — shown in the Strategy step */
function ArchitectureVisual() {
  const nodes = [
    { label: "/", indent: 0 },
    { label: "/servicios/seo/", indent: 1 },
    { label: "/blog/[keyword]/", indent: 1 },
    { label: "/ciudad/[ciudad]/", indent: 2 },
  ];
  return (
    <div className="mt-5 rounded-xl bg-teal/[0.06] border border-teal/20 px-4 pt-3 pb-3.5 min-w-0">
      <p className="font-sans text-[9px] font-semibold tracking-[2px] uppercase text-slate mb-2.5">
        Arquitectura de URLs
      </p>
      <div className="space-y-1.5">
        {nodes.map((n) => (
          <div key={n.label} className="flex items-center gap-1.5" style={{ paddingLeft: n.indent * 14 }}>
            {n.indent > 0 && <span className="text-teal/40 font-mono text-[10px]">└</span>}
            <span className="font-mono text-[11px] text-navy">{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Launch checklist — shown in the Launch step */
function LaunchChecklist() {
  const items = ["CMS configurado", "Google Search Console", "30 días de soporte"];
  return (
    <div className="mt-5 rounded-xl bg-teal/[0.06] border border-teal/20 px-4 pt-3 pb-3.5 min-w-0">
      <p className="font-sans text-[9px] font-semibold tracking-[2px] uppercase text-slate mb-2.5">
        Checklist de lanzamiento
      </p>
      <div className="space-y-1.5">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-teal/15 text-teal flex items-center justify-center shrink-0">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="font-sans text-[11px] text-navy">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  { number: "01", title: "Diagnóstico", text: "Analizo tu negocio, competencia y oportunidades de keywords antes de proponer nada. Sin atajos.", visual: <TrafficChart /> },
  { number: "02", title: "Estrategia SEO", text: "Defino la arquitectura, URLs y contenido con intención de búsqueda desde el inicio del proyecto.", visual: <ArchitectureVisual /> },
  { number: "03", title: "Diseño & Build", text: "Construyo con SEO integrado en cada elemento. Velocidad, schema markup y Core Web Vitals desde el código.", visual: <CWVBadge /> },
  { number: "04", title: "Lanzamiento", text: "Capacitación en el CMS, configuración de Google Search Console y 30 días de soporte post-lanzamiento.", visual: <LaunchChecklist /> },
];

export function Process() {
  return (
    <section className="bg-off-white" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container>
        <FadeIn className="max-w-[520px] mb-16">
          <Eyebrow tone="muted">Proceso</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1.5px]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", textWrap: "balance" }}
          >
            De cero a primera página en Google
          </h2>
        </FadeIn>

        {/* Connected timeline — a real 4-step sequence, so the numbering earns its place */}
        <div className="relative">
          <div
            className="hidden lg:block absolute top-[19px] left-0 right-0 h-px bg-gradient-to-r from-teal/40 via-teal/15 to-transparent"
            aria-hidden="true"
          />
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="relative flex flex-col">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-midnight text-teal font-jakarta font-bold text-[13px] flex items-center justify-center mb-5">
                    {step.number}
                  </div>
                  <h3 className="font-jakarta font-bold text-text-dark text-[18px] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="font-sans text-text-mid text-[14px] leading-[1.7]">
                    {step.text}
                  </p>
                  {step.visual}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
