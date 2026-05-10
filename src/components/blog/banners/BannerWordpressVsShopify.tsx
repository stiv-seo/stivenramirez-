"use client";

import { useRef, useEffect, useState } from "react";

export function BannerWordpressVsShopify() {
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
      aria-label="Ilustración comparativa: WordPress (sistema modular) vs Shopify (plataforma integrada)"
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
            "radial-gradient(900px 600px at 78% 50%, rgba(0,196,180,0.10) 0%, rgba(0,196,180,0.03) 35%, transparent 65%)",
            "radial-gradient(900px 540px at 18% 50%, rgba(255,255,255,0.04) 0%, transparent 55%)",
            "linear-gradient(180deg, #11141c 0%, #0f1117 50%, #0c0e15 100%)",
          ].join(", "),
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.03) inset",
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
            WebkitMaskImage:
              "radial-gradient(900px 540px at 50% 50%, black 30%, transparent 80%)",
            maskImage:
              "radial-gradient(900px 540px at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        {/* Horizontal ruler */}
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

        {/* ── LEFT: WordPress — modular tiles ── */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "50%", display: "grid", placeItems: "center" }}
        >
          <div style={{ position: "relative", width: 420, height: 420 }}>

            {/* SVG connector lines */}
            <svg
              viewBox="0 0 420 420"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
            >
              <g stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none">
                <line x1="120" y1="80"  x2="180" y2="80"  />
                <line x1="240" y1="80"  x2="300" y2="80"  />
                <line x1="120" y1="200" x2="180" y2="200" />
                <line x1="240" y1="200" x2="300" y2="200" />
                <line x1="120" y1="320" x2="180" y2="320" />
                <line x1="240" y1="320" x2="300" y2="320" />
                <line x1="80"  y1="120" x2="80"  y2="180" />
                <line x1="200" y1="120" x2="200" y2="180" />
                <line x1="320" y1="120" x2="320" y2="180" />
                <line x1="80"  y1="240" x2="80"  y2="300" />
                <line x1="200" y1="240" x2="200" y2="300" />
                <line x1="320" y1="240" x2="320" y2="300" />
              </g>
              <g stroke="rgba(0,196,180,0.7)" strokeWidth="1.25" fill="none">
                <line x1="320" y1="200" x2="420" y2="210" />
              </g>
            </svg>

            {/* 3×3 tile grid */}
            {/* top row */}
            <Tile style={{ left: 40,  top: 40,  width: 80, height: 80, background: "rgba(255,255,255,0.09)" }} />
            <Tile style={{ left: 160, top: 40,  width: 80, height: 80, background: "rgba(255,255,255,0.05)" }} />
            <Tile style={{ left: 280, top: 40,  width: 80, height: 80, background: "rgba(255,255,255,0.14)" }} />
            {/* middle row */}
            <Tile style={{ left: 40,  top: 160, width: 80, height: 80, background: "rgba(255,255,255,0.05)" }} />
            <Tile style={{ left: 160, top: 160, width: 80, height: 80, background: "rgba(255,255,255,0.14)" }} />
            {/* accent tile */}
            <Tile style={{ left: 280, top: 160, width: 80, height: 80, background: "rgba(0,196,180,0.14)", borderColor: "rgba(0,196,180,0.55)", boxShadow: "0 0 28px rgba(0,196,180,0.22)" }} />
            {/* bottom row */}
            <Tile style={{ left: 40,  top: 280, width: 80, height: 80, background: "rgba(255,255,255,0.14)" }} />
            <Tile style={{ left: 160, top: 280, width: 80, height: 80, background: "rgba(255,255,255,0.09)" }} />
            <Tile style={{ left: 280, top: 280, width: 80, height: 80, background: "rgba(255,255,255,0.05)" }} />

            {/* Exploded tile (outside grid — modular feel) */}
            <Tile style={{ left: -20, top: 200, width: 36, height: 36, background: "rgba(255,255,255,0.09)" }} />

            {/* Joint connector dots */}
            <Dot style={{ left: 120, top: 80 }} />
            <Dot style={{ left: 240, top: 80 }} />
            <Dot style={{ left: 120, top: 200 }} />
            <Dot accent style={{ left: 240, top: 200 }} />
            <Dot style={{ left: 120, top: 320 }} />
            <Dot style={{ left: 240, top: 320 }} />
            <Dot dim style={{ left: 80,  top: 120 }} />
            <Dot dim style={{ left: 200, top: 120 }} />
            <Dot dim style={{ left: 320, top: 120 }} />
            <Dot dim style={{ left: 80,  top: 240 }} />
            <Dot dim style={{ left: 200, top: 240 }} />
            <Dot dim style={{ left: 320, top: 240 }} />
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
          {/* Teal glowing dot */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 6,
              height: 6,
              background: "#00C4B4",
              transform: "translate(-50%, -50%)",
              boxShadow:
                "0 0 24px 4px rgba(0,196,180,0.18), 0 0 60px 10px rgba(0,196,180,0.18)",
            }}
          />
        </div>

        {/* ── RIGHT: Shopify — monolith ── */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "50%", display: "grid", placeItems: "center" }}
        >
          <div style={{ position: "relative", width: 360, height: 420, display: "grid", placeItems: "center" }}>

            {/* Concentric rectangular halos */}
            <div style={{ position: "absolute", width: 350, height: 410, borderRadius: 4, border: "1px solid rgba(0,196,180,0.07)", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 290, height: 350, borderRadius: 4, border: "1px dashed rgba(0,196,180,0.15)", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 230, height: 290, borderRadius: 4, border: "1px solid rgba(0,196,180,0.40)", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />

            {/* Monolith body */}
            <div
              style={{
                position: "relative",
                width: 200,
                height: 260,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%), #131722",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow:
                  "0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                overflow: "hidden",
              }}
            >
              {/* Internal horizontal layer lines */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(to bottom, transparent 0, transparent 39px, rgba(255,255,255,0.06) 40px, rgba(255,255,255,0.06) 41px, transparent 42px)",
                  backgroundSize: "100% 60px",
                }}
              />

              {/* Central teal seam */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: 1,
                  transform: "translateX(-0.5px)",
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.55) 50%, transparent 100%)",
                  boxShadow: "0 0 16px rgba(0,196,180,0.5)",
                }}
              />

              {/* Cap (top extension) */}
              <div
                style={{
                  position: "absolute",
                  top: -16,
                  height: 8,
                  left: -20,
                  right: -20,
                  borderLeft: "1px solid rgba(255,255,255,0.18)",
                  borderRight: "1px solid rgba(255,255,255,0.18)",
                  borderTop: "1px solid rgba(255,255,255,0.14)",
                }}
              />

              {/* Base (bottom extension) */}
              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  height: 8,
                  left: -20,
                  right: -20,
                  borderLeft: "1px solid rgba(255,255,255,0.18)",
                  borderRight: "1px solid rgba(255,255,255,0.18)",
                  borderBottom: "1px solid rgba(255,255,255,0.14)",
                }}
              />

              {/* Gem (rotated diamond) */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: 40,
                  height: 40,
                  transform: "translate(-50%, -50%) rotate(45deg)",
                  background:
                    "linear-gradient(135deg, #5beedc 0%, #00C4B4 60%, rgba(0,196,180,0) 100%)",
                  boxShadow:
                    "0 0 30px rgba(0,196,180,0.55), 0 0 80px rgba(0,196,180,0.3)",
                }}
              >
                {/* White inner core */}
                <div
                  style={{
                    position: "absolute",
                    inset: 14,
                    background: "#ffffff",
                    boxShadow: "0 0 12px rgba(255,255,255,0.85)",
                  }}
                />
              </div>

              {/* Side port dots — left */}
              <div style={{ position: "absolute", left: 0, top: 60,  width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.40)", transform: "translate(-50%,-50%)" }} />
              <div style={{ position: "absolute", left: 0, top: 130, width: 6, height: 6, borderRadius: "50%", background: "#00C4B4", boxShadow: "0 0 10px rgba(0,196,180,0.6)", transform: "translate(-50%,-50%)" }} />
              <div style={{ position: "absolute", left: 0, top: 200, width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.18)", transform: "translate(-50%,-50%)" }} />
              {/* right */}
              <div style={{ position: "absolute", left: 200, top: 60,  width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.18)", transform: "translate(-50%,-50%)" }} />
              <div style={{ position: "absolute", left: 200, top: 130, width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.40)", transform: "translate(-50%,-50%)" }} />
              <div style={{ position: "absolute", left: 200, top: 200, width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.18)", transform: "translate(-50%,-50%)" }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function Tile({ style }: { style: React.CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        border: "1px solid rgba(255,255,255,0.12)",
        ...style,
      }}
    />
  );
}

function Dot({
  style,
  dim,
  accent,
}: {
  style: React.CSSProperties;
  dim?: boolean;
  accent?: boolean;
}) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
  };
  if (accent) {
    return (
      <div
        aria-hidden="true"
        style={{
          ...base,
          ...style,
          background: "#00C4B4",
          boxShadow: "0 0 12px rgba(0,196,180,0.6)",
        }}
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      style={{
        ...base,
        ...style,
        background: dim ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.35)",
      }}
    />
  );
}
