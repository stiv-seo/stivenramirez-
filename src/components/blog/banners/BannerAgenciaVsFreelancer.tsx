"use client";

import { useRef, useEffect, useState } from "react";

export function BannerAgenciaVsFreelancer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setScale(containerRef.current.clientWidth / 1200);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: Math.round(630 * scale), overflow: "hidden", borderRadius: 16 }}
      role="img"
      aria-label="Ilustración comparativa: Agencia SEO (red distribuida de nodos) vs Freelancer (núcleo luminoso único)"
    >
      {/* ── Stage 1200×630 ── */}
      <div
        style={{
          width: 1200,
          height: 630,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          position: "relative",
          overflow: "hidden",
          background: [
            "radial-gradient(1200px 700px at 78% 52%, rgba(0,196,180,0.10) 0%, rgba(0,196,180,0.04) 30%, transparent 60%)",
            "radial-gradient(900px 560px at 18% 48%, rgba(255,255,255,0.035) 0%, transparent 55%)",
            "linear-gradient(180deg, #11141c 0%, #0f1117 50%, #0c0e15 100%)",
          ].join(", "),
          boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.03) inset",
        }}
      >
        {/* Grid texture */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: [
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)",
              "linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "40px 40px",
            WebkitMaskImage: "radial-gradient(900px 540px at 50% 50%, black 30%, transparent 80%)",
            maskImage: "radial-gradient(900px 540px at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        {/* Ruler */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.04) 92%, transparent 100%)",
          }}
        />

        {/* Corner ticks */}
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, top: 28, left: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, top: 28, right: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, bottom: 28, left: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, bottom: 28, right: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" }} />

        {/* ── LEFT: Agencia — distributed network ── */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "50%", display: "grid", placeItems: "center" }}
        >
          <div style={{ position: "relative", width: 420, height: 420 }}>

            {/* Concentric rings (outermost → innermost) */}
            <Ring size={420} borderColor="rgba(255,255,255,0.04)" />
            <Ring size={320} dashed borderColor="rgba(255,255,255,0.07)" />
            <Ring size={220} borderColor="rgba(255,255,255,0.12)" />
            <Ring size={120} borderColor="rgba(255,255,255,0.18)" />

            {/* SVG connector lines */}
            <svg
              viewBox="0 0 420 420"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
            >
              {/* Core → outer nodes */}
              <g stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none">
                <line x1="210" y1="210" x2="100" y2="80"  />
                <line x1="210" y1="210" x2="320" y2="70"  />
                <line x1="210" y1="210" x2="370" y2="220" />
                <line x1="210" y1="210" x2="320" y2="350" />
                <line x1="210" y1="210" x2="120" y2="360" />
                <line x1="210" y1="210" x2="50"  y2="200" />
                <line x1="210" y1="210" x2="170" y2="40"  />
                <line x1="210" y1="210" x2="270" y2="380" />
              </g>
              {/* Teal accent line → divider */}
              <g stroke="rgba(0,196,180,0.7)" strokeWidth="1.25" fill="none">
                <line x1="210" y1="210" x2="420" y2="210" />
              </g>
              {/* Outer node interconnects */}
              <g stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none">
                <line x1="100" y1="80"  x2="170" y2="40"  />
                <line x1="170" y1="40"  x2="320" y2="70"  />
                <line x1="320" y1="70"  x2="370" y2="220" />
                <line x1="370" y1="220" x2="320" y2="350" />
                <line x1="320" y1="350" x2="270" y2="380" />
                <line x1="270" y1="380" x2="120" y2="360" />
                <line x1="120" y1="360" x2="50"  y2="200" />
                <line x1="50"  y1="200" x2="100" y2="80"  />
              </g>
            </svg>

            {/* Central white core node */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 18,
                height: 18,
                transform: "translate(-50%, -50%)",
                background: "#e8eef5",
                borderRadius: "50%",
                boxShadow: "0 0 0 6px rgba(255,255,255,0.06), 0 0 0 14px rgba(255,255,255,0.03)",
              }}
            />

            {/* Outer network nodes */}
            <Node style={{ left: 100, top: 80  }} />
            <Node style={{ left: 320, top: 70  }} accent />
            <Node style={{ left: 370, top: 220 }} />
            <Node style={{ left: 320, top: 350 }} />
            <Node style={{ left: 120, top: 360 }} />
            <Node style={{ left: 50,  top: 200 }} />
            <Node style={{ left: 170, top: 40  }} dim />
            <Node style={{ left: 270, top: 380 }} dim />
            <Node style={{ left: 60,  top: 300 }} dim />
            <Node style={{ left: 380, top: 140 }} dim />
            <Node style={{ left: 240, top: 120 }} dim />
            <Node style={{ left: 160, top: 280 }} dim />
          </div>
        </div>

        {/* ── CENTER: scan line + diamond ── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            transform: "translateX(-0.5px)",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.04) 15%, rgba(0,196,180,0.55) 50%, rgba(255,255,255,0.04) 85%, transparent 100%)",
          }}
        >
          {/* Diamond border */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 14,
              height: 14,
              border: "1px solid #00C4B4",
              background: "#0f1117",
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
          />
          {/* Glowing teal dot */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 6,
              height: 6,
              background: "#00C4B4",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 24px 4px rgba(0,196,180,0.18), 0 0 60px 10px rgba(0,196,180,0.18)",
            }}
          />
        </div>

        {/* ── RIGHT: Freelancer — solo luminous core ── */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "50%", display: "grid", placeItems: "center" }}
        >
          <div style={{ position: "relative", width: 360, height: 360, display: "grid", placeItems: "center" }}>

            {/* Crosshair lines */}
            <div
              style={{
                position: "absolute",
                left: -40,
                right: -40,
                height: 1,
                top: "50%",
                background: "linear-gradient(90deg, transparent, rgba(0,196,180,0.5), transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: -40,
                bottom: -40,
                width: 1,
                left: "50%",
                background: "linear-gradient(180deg, transparent, rgba(0,196,180,0.5), transparent)",
              }}
            />

            {/* Circular halos (outermost → innermost) */}
            <Halo size={300} borderColor="rgba(0,196,180,0.08)" />
            <Halo size={220} dashed borderColor="rgba(0,196,180,0.15)" />
            <Halo size={140} borderColor="rgba(0,196,180,0.40)" />

            {/* Viewfinder frame + corner squares */}
            <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(0,196,180,0.35)" }}>
              {/* TL */}
              <div style={{ position: "absolute", top: -9, left: -9, width: 18, height: 18, border: "1px solid #00C4B4", background: "#0f1117" }} />
              {/* TR */}
              <div style={{ position: "absolute", top: -9, right: -9, width: 18, height: 18, border: "1px solid #00C4B4", background: "#0f1117" }} />
              {/* BL */}
              <div style={{ position: "absolute", bottom: -9, left: -9, width: 18, height: 18, border: "1px solid #00C4B4", background: "#0f1117" }} />
              {/* BR */}
              <div style={{ position: "absolute", bottom: -9, right: -9, width: 18, height: 18, border: "1px solid #00C4B4", background: "#0f1117" }} />
            </div>

            {/* Glowing pulse circle */}
            <div
              style={{
                position: "relative",
                width: 80,
                height: 80,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 50% 50%, #5beedc 0%, #00C4B4 35%, rgba(0,196,180,0) 70%)",
                boxShadow:
                  "0 0 60px rgba(0,196,180,0.55), 0 0 140px rgba(0,196,180,0.35)",
              }}
            >
              {/* White inner core */}
              <div
                style={{
                  position: "absolute",
                  inset: 28,
                  background: "#ffffff",
                  borderRadius: "50%",
                  boxShadow: "0 0 18px rgba(255,255,255,0.85)",
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function Ring({
  size,
  dashed,
  borderColor,
}: {
  size: number;
  dashed?: boolean;
  borderColor: string;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        border: `1px ${dashed ? "dashed" : "solid"} ${borderColor}`,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

function Node({
  style,
  dim,
  accent,
}: {
  style: React.CSSProperties;
  dim?: boolean;
  accent?: boolean;
}) {
  const size = dim ? 6 : 10;
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: accent
          ? "#00C4B4"
          : dim
            ? "rgba(255,255,255,0.18)"
            : "rgba(255,255,255,0.45)",
        transform: "translate(-50%, -50%)",
        ...(accent
          ? { boxShadow: "0 0 0 4px rgba(0,196,180,0.12), 0 0 18px rgba(0,196,180,0.6)" }
          : {}),
        ...style,
      }}
    />
  );
}

function Halo({
  size,
  dashed,
  borderColor,
}: {
  size: number;
  dashed?: boolean;
  borderColor: string;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        border: `1px ${dashed ? "dashed" : "solid"} ${borderColor}`,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
