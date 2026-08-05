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
  { prefix: "+", value: 120, suffix: "%", label: "Tráfico orgánico promedio", sublabel: "en 6 meses con SEO", fillPct: 78 },
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

/** A single dominant number gets real visual weight; the rest stay compact — breaks the flat 4-identical-columns pattern. */
function StatColumn({
  stat,
  active,
  delay,
  featured = false,
}: {
  stat: Stat;
  active: boolean;
  delay: number;
  featured?: boolean;
}) {
  const count = useCountUp(stat.value, active, 1400, stat.decimal);

  return (
    <div
      className={
        featured
          ? "flex flex-col"
          : "flex flex-col lg:pl-6 lg:border-l border-white/[0.07] lg:first:border-l-0 lg:first:pl-0"
      }
    >
      <p className={featured ? "font-sans text-white text-[14px] font-semibold leading-tight mb-2" : "font-sans text-white text-[12.5px] font-semibold leading-tight mb-1"}>
        {stat.label}
      </p>
      <p className={featured ? "font-sans text-slate-light/60 text-[12px] mb-5" : "font-sans text-slate-light/60 text-[11px] mb-4"}>
        {stat.sublabel}
      </p>
      <p
        className={
          featured
            ? "font-jakarta font-extrabold text-teal leading-none tabular-nums mb-5"
            : "font-jakarta font-extrabold text-white leading-none tabular-nums mb-4"
        }
        style={{ fontSize: featured ? "clamp(48px, 7vw, 88px)" : "clamp(28px, 2.6vw, 38px)" }}
      >
        {stat.prefix}
        {stat.decimal ? count.toFixed(1) : Math.round(count)}
        {stat.suffix}
      </p>
      <div className={featured ? "h-[3px] rounded-full bg-white/[0.06] overflow-hidden max-w-[220px]" : "h-[3px] rounded-full bg-white/[0.06] overflow-hidden mt-auto"}>
        <div
          className="h-full w-full rounded-full bg-teal origin-left"
          style={{
            transform: `scaleX(${active ? stat.fillPct / 100 : 0})`,
            transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [featured, ...rest] = stats;

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
    <section className="bg-midnight bg-grid-dark" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
      <Container>
        <div
          ref={ref}
          className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12"
        >
          <p className="font-sans text-[11px] font-semibold tracking-[3px] uppercase text-slate-light/60 mb-8">
            Panel de resultados — clientes 2020–2026
          </p>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            {/* The one number that matters most gets 2-3x the visual weight of the rest */}
            <div className="lg:pr-10 lg:border-r lg:border-white/[0.07]">
              <StatColumn stat={featured} active={active} delay={0} featured />
            </div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-8">
              {rest.map((stat, i) => (
                <StatColumn key={stat.label} stat={stat} active={active} delay={(i + 1) * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
