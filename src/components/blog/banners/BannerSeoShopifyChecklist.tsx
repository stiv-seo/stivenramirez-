"use client";

import { useRef, useEffect, useState } from "react";

const TEAL = "#00C4B4";

type BarType = "normal" | "thin" | "strong" | "teal";
interface CheckItem {
  state: "done" | "partial" | "empty";
  bars: { w: string; type: BarType }[];
  focal?: boolean;
}

const ITEMS: CheckItem[] = [
  { state: "done",    bars: [{ w: "46%", type: "normal" }, { w: "22%", type: "thin" }] },
  { state: "done",    bars: [{ w: "36%", type: "strong" }, { w: "28%", type: "normal" }, { w: "14%", type: "thin" }] },
  { state: "done",    bars: [{ w: "54%", type: "normal" }, { w: "18%", type: "thin" }] },
  { state: "partial", bars: [{ w: "50%", type: "teal" }, { w: "24%", type: "strong" }, { w: "14%", type: "thin" }], focal: true },
  { state: "empty",   bars: [{ w: "40%", type: "normal" }, { w: "24%", type: "thin" }] },
  { state: "empty",   bars: [{ w: "32%", type: "strong" }, { w: "30%", type: "normal" }] },
  { state: "empty",   bars: [{ w: "44%", type: "normal" }, { w: "16%", type: "thin" }] },
];

const BAR_TICK_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

function barBg(type: BarType) {
  if (type === "teal")   return `linear-gradient(90deg, rgba(0,196,180,0.55), rgba(0,196,180,0.15))`;
  if (type === "strong") return "rgba(255,255,255,0.12)";
  if (type === "thin")   return "rgba(255,255,255,0.05)";
  return "rgba(255,255,255,0.08)";
}

export function BannerSeoShopifyChecklist() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setScale(containerRef.current.clientWidth / 1200);
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
      aria-label="Ilustración: checklist de SEO para Shopify con progreso y emblema focal"
    >
      <div style={{
        width: 1200, height: 630,
        transformOrigin: "top left",
        transform: `scale(${scale})`,
        position: "relative",
        overflow: "hidden",
        background: [
          "radial-gradient(800px 540px at 38% 50%, rgba(0,196,180,0.10) 0%, rgba(0,196,180,0.03) 35%, transparent 65%)",
          "radial-gradient(900px 540px at 70% 50%, rgba(255,255,255,0.035) 0%, transparent 60%)",
          "linear-gradient(180deg, #11141c 0%, #0d1117 50%, #0a0c12 100%)",
        ].join(", "),
        boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.03) inset",
      }}>
        {/* Grid */}
        <div aria-hidden="true" style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage: "radial-gradient(900px 540px at 50% 50%, black 30%, transparent 80%)",
          maskImage: "radial-gradient(900px 540px at 50% 50%, black 30%, transparent 80%)",
        }} />
        {/* Ruler */}
        <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.04) 92%, transparent 100%)" }} />
        {/* HUD corners */}
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, top: 28, left: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, top: 28, right: 28, borderTop: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, bottom: 28, left: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderLeft: "1px solid rgba(255,255,255,0.18)" }} />
        <div aria-hidden="true" style={{ position: "absolute", width: 28, height: 28, bottom: 28, right: 28, borderBottom: "1px solid rgba(255,255,255,0.18)", borderRight: "1px solid rgba(255,255,255,0.18)" }} />

        {/* LEFT: checklist column */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 600, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 460, display: "flex", flexDirection: "column", gap: 18 }}>
            {ITEMS.map((item, idx) => (
              <div key={idx} style={{ position: "relative", display: "flex", alignItems: "center", gap: 18, height: item.focal ? 44 : 38 }}>
                {/* Focal highlight box */}
                {item.focal && (
                  <div style={{ position: "absolute", left: -28, right: -8, top: -6, bottom: -6, border: "1px solid rgba(0,196,180,0.35)", pointerEvents: "none" }} />
                )}
                {/* Focal side diamond marker */}
                {item.focal && (
                  <div style={{ position: "absolute", left: -16, top: "50%", width: 8, height: 8, transform: "translateY(-50%) rotate(45deg)", background: TEAL, boxShadow: "0 0 12px rgba(0,196,180,0.6)" }} />
                )}

                {/* Checkbox */}
                <div style={{
                  width: 22, height: 22,
                  border: item.state === "done" ? `1px solid ${TEAL}` : item.state === "partial" ? "1px solid rgba(0,196,180,0.6)" : "1px solid rgba(255,255,255,0.25)",
                  background: item.state === "done" ? TEAL : item.state === "partial" ? "rgba(0,196,180,0.18)" : "rgba(255,255,255,0.02)",
                  flexShrink: 0,
                  position: "relative",
                  boxShadow: item.state === "done" ? "0 0 14px rgba(0,196,180,0.45)" : undefined,
                }}>
                  {item.state === "done" && (
                    <div style={{ position: "absolute", left: 5, top: 9, width: 5, height: 9, border: "solid #0d1117", borderWidth: "0 2px 2px 0", transform: "rotate(45deg)" }} />
                  )}
                  {item.state === "partial" && (
                    <div style={{ position: "absolute", left: 4, right: 4, top: 9, height: 2, background: TEAL }} />
                  )}
                </div>

                {/* Bars (label placeholders) */}
                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8 }}>
                  {item.bars.map((b, bi) => (
                    <div key={bi} style={{
                      width: b.w,
                      height: b.type === "thin" ? 6 : 8,
                      background: barBg(b.type),
                      boxShadow: b.type === "teal" ? "0 0 12px rgba(0,196,180,0.35)" : undefined,
                    }} />
                  ))}
                </div>

                {/* Trailing dot */}
                <div style={{
                  width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                  background: item.focal ? TEAL : "rgba(255,255,255,0.25)",
                  boxShadow: item.focal ? "0 0 10px rgba(0,196,180,0.6)" : undefined,
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: focal emblem */}
        <div style={{ position: "absolute", top: 0, right: 0, width: 600, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 360, height: 360, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Rings */}
            <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.07)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 230, height: 230, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.10)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div style={{ position: "absolute", width: 130, height: 130, borderRadius: "50%", border: "1px solid rgba(0,196,180,0.45)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            {/* Progress arc (conic-gradient, browser only) */}
            <div style={{
              position: "absolute",
              width: 230, height: 230,
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
              background: "conic-gradient(from -90deg, rgba(0,196,180,0.85) 0deg, rgba(0,196,180,0.85) 300deg, rgba(255,255,255,0.05) 300deg, rgba(255,255,255,0.05) 360deg)",
              WebkitMaskImage: "radial-gradient(circle, transparent 60%, black 61%, black 70%, transparent 71%)",
              maskImage: "radial-gradient(circle, transparent 60%, black 61%, black 70%, transparent 71%)",
              filter: "drop-shadow(0 0 12px rgba(0,196,180,0.45))",
            }} />

            {/* Ticks at radius 160 */}
            {BAR_TICK_ANGLES.map((angle) => (
              <div
                key={angle}
                style={{
                  position: "absolute",
                  left: "50%", top: "50%",
                  width: 1, height: 8,
                  background: "rgba(0,196,180,0.55)",
                  transformOrigin: "50% 160px",
                  transform: `translate(-50%, -160px) rotate(${angle}deg)`,
                }}
              />
            ))}

            {/* Reticle 150×150 */}
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 150, height: 150, transform: "translate(-50%,-50%)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
            </div>

            {/* Core diamond 90×90 */}
            <div style={{
              position: "relative",
              width: 90, height: 90,
              transform: "rotate(45deg)",
              background: "linear-gradient(135deg, #5beedc 0%, #00C4B4 55%, rgba(0,196,180,0) 100%)",
              boxShadow: "0 0 50px rgba(0,196,180,0.55), 0 0 110px rgba(0,196,180,0.3)",
            }}>
              <div style={{ position: "absolute", top: 28, left: 28, right: 28, bottom: 28, background: "#ffffff", boxShadow: "0 0 12px rgba(255,255,255,0.85)" }} />
            </div>
          </div>
        </div>

        {/* SVG connector from focal row to emblem */}
        <svg viewBox="0 0 1200 630" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          <g stroke="rgba(0,196,180,0.5)" strokeWidth="1.25" fill="none" strokeDasharray="3 4">
            <line x1="640" y1="315" x2="820" y2="315" />
          </g>
          <g fill="rgba(0,196,180,0.9)">
            <circle cx="640" cy="315" r="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}
