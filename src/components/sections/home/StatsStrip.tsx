"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";

interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  decimal?: boolean;
}

const stats: Stat[] = [
  { prefix: "+", value: 280, suffix: "%", label: "Tráfico orgánico promedio", sublabel: "en 6 meses con SEO" },
  { value: 3.2, suffix: "x", label: "ROAS promedio en pauta", sublabel: "Google & Meta Ads", decimal: true },
  { prefix: "+", value: 45, suffix: "%", label: "Conversiones e-commerce", sublabel: "Shopify + SEO combinado" },
  { prefix: "", value: 40, suffix: "+", label: "Proyectos entregados", sublabel: "desde 2020 en Colombia" },
];

function useCountUp(target: number, duration = 2000, decimal = false) {
  const [count, setCount] = useState(target); // real value on SSR/initial paint
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * target).toFixed(decimal ? 1 : 0)));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, decimal]);

  return { count, ref };
}

function StatItem({ stat }: { stat: Stat }) {
  const { count, ref } = useCountUp(stat.value, 2000, stat.decimal);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <p className="font-jakarta font-extrabold text-white leading-none mb-2"
        style={{ fontSize: "clamp(36px, 4vw, 52px)", letterSpacing: "-1px" }}
      >
        {stat.prefix}
        {stat.decimal ? count.toFixed(1) : Math.round(count)}
        {stat.suffix}
      </p>
      <p className="font-sans text-slate-light text-sm leading-tight max-w-[140px]">
        {stat.label}
      </p>
      <p className="font-sans text-slate/60 text-[11px] leading-tight max-w-[140px] mt-1">
        {stat.sublabel}
      </p>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="bg-midnight" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <Container>
        <Divider direction="center" className="mb-10 opacity-[0.12]" />
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
        <Divider direction="center" className="mt-10 opacity-[0.12]" />
      </Container>
    </section>
  );
}
