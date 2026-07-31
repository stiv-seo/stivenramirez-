"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  decimal?: boolean;
  /** Visual bar fill — illustrative weighting, not a literal percent of the raw value. */
  fillPct: number;
}

const stats: Stat[] = [
  { prefix: "+", value: 280, suffix: "%", label: "Tráfico orgánico promedio", sublabel: "en 6 meses con SEO", fillPct: 92 },
  { value: 3.2, suffix: "x", label: "ROAS promedio en pauta", sublabel: "Google & Meta Ads", decimal: true, fillPct: 58 },
  { prefix: "+", value: 45, suffix: "%", label: "Conversiones e-commerce", sublabel: "Shopify + SEO combinado", fillPct: 45 },
  { value: 40, suffix: "+", label: "Proyectos entregados", sublabel: "desde 2020 en Colombia", fillPct: 74 },
];

function useCountUp(target: number, active: boolean, duration = 1400, decimal = false) {
  const [count, setCount] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!active || done.current) return;
    done.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimal ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration, decimal]);

  return count;
}

function StatColumn({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) {
  const count = useCountUp(stat.value, active, 1400, stat.decimal);

  return (
    <div className="flex flex-col lg:pl-6 lg:border-l border-white/[0.07] lg:first:border-l-0 lg:first:pl-0">
      <p className="font-sans text-white text-[12.5px] font-semibold leading-tight mb-1">{stat.label}</p>
      <p className="font-sans text-slate-light/60 text-[11px] mb-4">{stat.sublabel}</p>
      <p
        className="font-jakarta font-extrabold text-white leading-none tabular-nums mb-4"
        style={{ fontSize: "clamp(28px, 2.6vw, 38px)" }}
      >
        {stat.prefix}
        {stat.decimal ? count.toFixed(1) : Math.round(count)}
        {stat.suffix}
      </p>
      <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden mt-auto">
        <div
          className="h-full rounded-full bg-teal"
          style={{
            width: active ? `${stat.fillPct}%` : "0%",
            transition: `width 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-midnight bg-grid-dark" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
      <Container>
        <div
          ref={ref}
          className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10"
        >
          <p className="font-sans text-[11px] font-semibold tracking-[3px] uppercase text-slate-light/60 mb-6">
            Panel de resultados — clientes 2020–2026
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {stats.map((stat, i) => (
              <StatColumn key={stat.label} stat={stat} active={active} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
