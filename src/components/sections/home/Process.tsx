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
    <div className="mt-4 rounded-xl bg-teal/[0.06] border border-teal/20 px-4 pt-3 pb-3 min-w-0">
      <div className="flex items-center justify-between mb-2">
        <p className="font-sans text-[9px] font-semibold tracking-[2px] uppercase text-slate">
          GSC · Clics orgánicos
        </p>
        <span className="font-sans text-[9px] font-bold text-teal bg-teal/10 rounded-full px-2 py-0.5">
          +280%
        </span>
      </div>
      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00C4B4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00C4B4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points={`0,${h} ${coords.join(" ")} ${w},${h}`}
          fill="url(#chartGrad)"
        />
        <polyline
          points={polyline}
          fill="none"
          stroke="#00C4B4"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle cx={lastX} cy={lastY} r="3" fill="#00C4B4" />
      </svg>
      <p className="font-sans text-[9px] text-slate mt-1.5">6 meses · proyecto real</p>
    </div>
  );
}

/* Core Web Vitals score badge — shown in Build step */
function CWVBadge() {
  const vitals = [
    { label: "LCP", value: "1.2s", score: "good" },
    { label: "CLS", value: "0.01", score: "good" },
    { label: "INP", value: "62ms", score: "good" },
  ];
  return (
    <div className="mt-4 rounded-xl bg-teal/[0.06] border border-teal/20 px-4 pt-3 pb-3 min-w-0">
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
          <div
            key={v.label}
            className="flex-1 bg-warm-white border border-teal/20 rounded-lg px-2 py-1.5 text-center"
          >
            <p className="font-jakarta font-bold text-teal text-[13px] leading-none">{v.value}</p>
            <p className="font-sans text-[9px] text-slate mt-0.5">{v.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Analizo tu negocio, competencia y oportunidades de keywords antes de proponer nada. Sin atajos.",
    visual: <TrafficChart />,
  },
  {
    number: "02",
    title: "Estrategia SEO",
    text: "Defino la arquitectura, URLs y contenido con intención de búsqueda desde el inicio del proyecto.",
    visual: null,
  },
  {
    number: "03",
    title: "Diseño & Build",
    text: "Construyo con SEO integrado en cada elemento. Velocidad, schema markup y Core Web Vitals desde el código.",
    visual: <CWVBadge />,
  },
  {
    number: "04",
    title: "Lanzamiento",
    text: "Capacitación en el CMS + configuración de Google Search Console + 30 días de soporte post-lanzamiento.",
    visual: null,
  },
];

export function Process() {
  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="text-center mb-14">
          <Eyebrow>03 — Proceso</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            De cero a primera página en Google
          </h2>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="relative bg-warm-white rounded-2xl p-7 h-full border border-[rgba(0,0,0,0.05)] flex flex-col">
                {/* Ghost number */}
                <span
                  className="absolute top-4 right-5 font-jakarta font-extrabold leading-none select-none pointer-events-none"
                  style={{ fontSize: "72px", color: "rgba(0,196,180,0.07)", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <p className="font-jakarta font-bold text-teal text-sm tracking-[2px] mb-4">
                  {step.number}
                </p>
                <h3 className="font-jakarta font-bold text-text-dark text-[19px] mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-text-mid text-sm leading-[1.75] flex-1">
                  {step.text}
                </p>
                {step.visual}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
