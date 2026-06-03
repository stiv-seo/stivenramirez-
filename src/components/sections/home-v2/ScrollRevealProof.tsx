"use client";

import { useEffect, useRef, useState } from "react";

/* Scroll-driven reveal — purpose: each stat appears as it enters view */

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function CountUp({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <>{val}{suffix}</>;
}

const proofItems = [
  { prefix: "+", value: 280, suffix: "%",  label: "Tráfico orgánico promedio",  sub: "en 6 meses con SEO" },
  { prefix: "",  value: 40,  suffix: "+",  label: "Proyectos entregados",        sub: "Colombia · Latam · 2020–2026" },
  { prefix: "",  value: 32,  suffix: "×",  label: "ROAS promedio en pauta",      sub: "Google & Meta Ads combinado" },
  { prefix: "",  value: 100, suffix: "",   label: "SEO Score Lighthouse",         sub: "en todos los proyectos" },
];

export function ScrollRevealProof() {
  const { ref, inView } = useInView();

  return (
    <section style={{ background: "#0B1829", position: "relative", overflow: "hidden" }}>
      {/* Teal line top */}
      <div style={{ height: 3, background: "#00C4B4" }} aria-hidden="true" />

      <div ref={ref} style={{
        maxWidth: 1160, margin: "0 auto",
        padding: "clamp(60px,8vw,100px) clamp(24px,5vw,60px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "clamp(32px,4vw,0px)",
      }}>
        {proofItems.map((item, i) => (
          <div
            key={item.label}
            style={{
              padding: "clamp(20px,3vw,48px) clamp(20px,3vw,40px)",
              borderRight: i < proofItems.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
            }}
          >
            <p style={{
              fontFamily: "var(--font-jakarta-sans)", fontWeight: 800,
              fontSize: "clamp(40px,5vw,64px)",
              color: "#00C4B4",
              letterSpacing: "-0.03em", lineHeight: 1,
              marginBottom: 12,
            }}>
              {item.prefix}<CountUp target={item.value} suffix={item.suffix} inView={inView} />
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, fontSize: 14, color: "white", marginBottom: 4 }}>
              {item.label}
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
