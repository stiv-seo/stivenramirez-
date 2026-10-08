"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

export const TEAL = "#00C4B4";
export const AMBER = "#F5A524";
export const RED = "#F26D6D";
export const W = 1200;
export const H = 630;

interface FrameProps {
  label: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  footer: string;
  children: ReactNode;
}

// Lienzo común de los banners del blog: fondo, cuadrícula, esquinas, titular y pie.
// Cada banner solo aporta su ilustración central.
export function BannerFrame({ label, eyebrow, title, subtitle, footer, children }: FrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setScale(containerRef.current.clientWidth / W);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: Math.round(H * scale), overflow: "hidden", borderRadius: 16 }}
      role="img"
      aria-label={label}
    >
      <div style={{
        width: W, height: H,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        position: "relative",
        overflow: "hidden",
        background: [
          "radial-gradient(800px 560px at 50% 45%, rgba(0,196,180,0.07) 0%, transparent 60%)",
          "linear-gradient(170deg, #11141c 0%, #0d1117 55%, #090b10 100%)",
        ].join(", "),
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: [
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
            "linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "44px 44px",
          WebkitMaskImage: "radial-gradient(950px 580px at 50% 50%, black 15%, transparent 80%)",
          maskImage: "radial-gradient(950px 580px at 50% 50%, black 15%, transparent 80%)",
        }} />

        {([["top", "left"], ["top", "right"], ["bottom", "left"], ["bottom", "right"]] as const).map(([v, h]) => (
          <div key={v + h} aria-hidden="true" style={{
            position: "absolute", width: 22, height: 22,
            [v]: 22, [h]: 22,
            borderTop:    v === "top"    ? "1px solid rgba(255,255,255,0.15)" : undefined,
            borderBottom: v === "bottom" ? "1px solid rgba(255,255,255,0.15)" : undefined,
            borderLeft:   h === "left"   ? "1px solid rgba(255,255,255,0.15)" : undefined,
            borderRight:  h === "right"  ? "1px solid rgba(255,255,255,0.15)" : undefined,
          }} />
        ))}

        <div style={{ position: "absolute", top: 52, left: 0, right: 0, textAlign: "center" }}>
          <div style={{
            fontSize: 12, letterSpacing: "0.18em", color: TEAL,
            fontFamily: "monospace", fontWeight: 700,
            textTransform: "uppercase", marginBottom: 14, opacity: 0.85,
          }}>
            {eyebrow}
          </div>
          <div style={{
            fontSize: 40, fontFamily: "system-ui, sans-serif",
            fontWeight: 800, color: "#fff", lineHeight: 1.12,
          }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ fontSize: 16, fontFamily: "sans-serif", color: "rgba(255,255,255,0.45)", marginTop: 12 }}>
              {subtitle}
            </div>
          )}
        </div>

        <div style={{ position: "absolute", top: 228, left: 110, right: 110, bottom: 64 }}>
          {children}
        </div>

        <div style={{
          position: "absolute", bottom: 20, left: 0, right: 0, textAlign: "center",
          fontSize: 11, fontFamily: "monospace",
          color: "rgba(255,255,255,0.22)", letterSpacing: "0.06em",
        }}>
          {footer}
        </div>
      </div>
    </div>
  );
}

export const mono = { fontFamily: "monospace", letterSpacing: "0.02em" } as const;
export const sans = { fontFamily: "system-ui, sans-serif" } as const;
