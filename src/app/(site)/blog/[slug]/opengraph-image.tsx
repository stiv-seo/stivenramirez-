import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/mdx";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (slug === "agencia-seo-vs-freelancer-colombia") {
    return new ImageResponse(<AgenciaOG />, { width: 1200, height: 630 });
  }

  if (slug === "que-es-el-seo-colombia") {
    return new ImageResponse(<QueEsElSeoOG />, { width: 1200, height: 630 });
  }

  if (slug === "wordpress-vs-shopify-colombia") {
    return new ImageResponse(<WordpressShopifyOG />, { width: 1200, height: 630 });
  }

  // Generic fallback for posts without a custom banner
  return new ImageResponse(
    <GenericOG title={post?.title ?? ""} category={post?.category ?? ""} />,
    { width: 1200, height: 630 }
  );
}

// ─── Shared primitives ────────────────────────────────────────────────────────

const BG = "#0f1117";
const TEAL = "#00C4B4";

const stage: React.CSSProperties = {
  display: "flex",
  width: 1200,
  height: 630,
  position: "relative",
  overflow: "hidden",
  background: `radial-gradient(900px 600px at 78% 50%, rgba(0,196,180,0.10) 0%, rgba(0,196,180,0.03) 35%, transparent 65%), linear-gradient(180deg, #11141c 0%, #0f1117 50%, #0c0e15 100%)`,
};

function Corner() {
  const c: React.CSSProperties = {
    position: "absolute",
    width: 28,
    height: 28,
    borderColor: "rgba(255,255,255,0.18)",
    borderStyle: "solid",
    borderWidth: 0,
  };
  return (
    <>
      <div style={{ ...c, top: 28, left: 28, borderTopWidth: 1, borderLeftWidth: 1 }} />
      <div style={{ ...c, top: 28, right: 28, borderTopWidth: 1, borderRightWidth: 1 }} />
      <div style={{ ...c, bottom: 28, left: 28, borderBottomWidth: 1, borderLeftWidth: 1 }} />
      <div style={{ ...c, bottom: 28, right: 28, borderBottomWidth: 1, borderRightWidth: 1 }} />
    </>
  );
}

function ScanLine() {
  return (
    <div
      style={{
        position: "absolute",
        left: 600,
        top: 0,
        bottom: 0,
        width: 1,
        background: `linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.04) 15%, rgba(0,196,180,0.55) 50%, rgba(255,255,255,0.04) 85%, transparent 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* diamond */}
      <div
        style={{
          width: 14,
          height: 14,
          border: `1px solid ${TEAL}`,
          background: BG,
          transform: "rotate(45deg)",
          position: "absolute",
        }}
      />
      {/* teal dot */}
      <div
        style={{
          width: 6,
          height: 6,
          background: TEAL,
          position: "absolute",
          boxShadow: `0 0 24px 4px rgba(0,196,180,0.18)`,
        }}
      />
    </div>
  );
}

// ─── Agencia vs Freelancer ────────────────────────────────────────────────────

function AgenciaOG() {
  return (
    <div style={stage}>
      {/* grid texture */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <Corner />
      <ScanLine />

      {/* LEFT: network */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 600, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: 420, height: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* rings */}
          {[420, 320, 220, 120].map((s, i) => (
            <div key={i} style={{ position: "absolute", width: s, height: s, borderRadius: "50%", border: `1px solid rgba(255,255,255,${i === 0 ? 0.04 : i === 1 ? 0.07 : i === 2 ? 0.12 : 0.18})` }} />
          ))}
          {/* SVG lines */}
          <svg width={420} height={420} style={{ position: "absolute", top: 0, left: 0 }}>
            <g stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none">
              <line x1="210" y1="210" x2="100" y2="80" />
              <line x1="210" y1="210" x2="320" y2="70" />
              <line x1="210" y1="210" x2="370" y2="220" />
              <line x1="210" y1="210" x2="320" y2="350" />
              <line x1="210" y1="210" x2="120" y2="360" />
              <line x1="210" y1="210" x2="50"  y2="200" />
            </g>
            <g stroke="rgba(0,196,180,0.7)" strokeWidth="1.25" fill="none">
              <line x1="210" y1="210" x2="420" y2="210" />
            </g>
            <g stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none">
              <line x1="100" y1="80"  x2="320" y2="70"  />
              <line x1="320" y1="70"  x2="370" y2="220" />
              <line x1="370" y1="220" x2="320" y2="350" />
              <line x1="320" y1="350" x2="120" y2="360" />
              <line x1="120" y1="360" x2="50"  y2="200" />
              <line x1="50"  y1="200" x2="100" y2="80"  />
            </g>
          </svg>
          {/* central node */}
          <div style={{ position: "absolute", width: 18, height: 18, borderRadius: "50%", background: "#e8eef5", boxShadow: "0 0 0 6px rgba(255,255,255,0.06), 0 0 0 14px rgba(255,255,255,0.03)" }} />
          {/* outer nodes */}
          {[
            { x: 100, y: 80,  accent: false, dim: false },
            { x: 320, y: 70,  accent: true,  dim: false },
            { x: 370, y: 220, accent: false, dim: false },
            { x: 320, y: 350, accent: false, dim: false },
            { x: 120, y: 360, accent: false, dim: false },
            { x: 50,  y: 200, accent: false, dim: false },
            { x: 170, y: 40,  accent: false, dim: true  },
            { x: 270, y: 380, accent: false, dim: true  },
          ].map(({ x, y, accent, dim }, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x - (dim ? 3 : 5),
                top: y - (dim ? 3 : 5),
                width: dim ? 6 : 10,
                height: dim ? 6 : 10,
                borderRadius: "50%",
                background: accent ? TEAL : dim ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.45)",
                boxShadow: accent ? "0 0 0 4px rgba(0,196,180,0.12), 0 0 18px rgba(0,196,180,0.6)" : undefined,
              }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: solo core */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 600, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: 360, height: 360, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* crosshair */}
          <div style={{ position: "absolute", left: -40, right: -40, height: 1, top: "50%", background: "linear-gradient(90deg, transparent, rgba(0,196,180,0.5), transparent)" }} />
          <div style={{ position: "absolute", top: -40, bottom: -40, width: 1, left: "50%", background: "linear-gradient(180deg, transparent, rgba(0,196,180,0.5), transparent)" }} />
          {/* halos */}
          {[{ s: 300, c: "rgba(0,196,180,0.08)" }, { s: 220, c: "rgba(0,196,180,0.15)" }, { s: 140, c: "rgba(0,196,180,0.40)" }].map(({ s, c }, i) => (
            <div key={i} style={{ position: "absolute", width: s, height: s, borderRadius: "50%", border: `1px solid ${c}` }} />
          ))}
          {/* frame */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "1px solid rgba(0,196,180,0.35)" }}>
            {[{ t: -9, l: -9 }, { t: -9, r: -9 }, { b: -9, l: -9 }, { b: -9, r: -9 }].map((pos, i) => (
              <div key={i} style={{ position: "absolute", width: 18, height: 18, border: `1px solid ${TEAL}`, background: BG, ...(pos as object) }} />
            ))}
          </div>
          {/* pulse */}
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, #5beedc 0%, #00C4B4 35%, rgba(0,196,180,0) 70%)", boxShadow: "0 0 60px rgba(0,196,180,0.55), 0 0 140px rgba(0,196,180,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#fff", boxShadow: "0 0 18px rgba(255,255,255,0.85)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Qué es el SEO — radar de descubrimiento ─────────────────────────────────

function QueEsElSeoOG() {
  const bgSeo = `radial-gradient(700px 540px at 50% 50%, rgba(0,196,180,0.10) 0%, rgba(0,196,180,0.03) 35%, transparent 65%), linear-gradient(180deg, #11141c 0%, #0d1117 50%, #0a0c12 100%)`;
  const circles = [
    { x: 120, y: 160, dim: false }, { x: 470, y: 290, dim: false },
    { x: 410, y: 430, dim: false }, { x: 160, y: 430, dim: false },
    { x: 80,  y: 280, dim: false }, { x: 240, y: 80,  dim: true  },
    { x: 330, y: 470, dim: true  },
  ];
  const squares = [
    { x: 430, y: 140, teal: true  },
    { x: 200, y: 120, teal: false, dim: true  },
    { x: 360, y: 200, teal: false, dim: true  },
    { x: 60,  y: 200, teal: false, dim: false },
    { x: 480, y: 200, teal: false, dim: false },
  ];
  return (
    <div style={{ ...stage, background: bgSeo, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <Corner />

      {/* Radar */}
      <div style={{ position: "relative", width: 540, height: 540, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Rings */}
        {[{ s: 500, c: "rgba(255,255,255,0.04)" }, { s: 380, c: "rgba(255,255,255,0.08)" }, { s: 260, c: "rgba(255,255,255,0.14)" }, { s: 140, c: "rgba(0,196,180,0.45)" }].map(({ s, c }, i) => (
          <div key={i} style={{ position: "absolute", width: s, height: s, borderRadius: "50%", border: `1px solid ${c}` }} />
        ))}

        {/* Crosshair */}
        <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(0,196,180,0.45) 50%, transparent 100%)" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, background: "linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.45) 50%, transparent 100%)" }} />

        {/* SVG connector lines */}
        <svg width={540} height={540} style={{ position: "absolute", top: 0, left: 0 }}>
          <g stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none">
            <line x1="270" y1="270" x2="120" y2="160" />
            <line x1="270" y1="270" x2="430" y2="140" />
            <line x1="270" y1="270" x2="470" y2="290" />
            <line x1="270" y1="270" x2="410" y2="430" />
            <line x1="270" y1="270" x2="160" y2="430" />
            <line x1="270" y1="270" x2="80"  y2="280" />
          </g>
          <g stroke="rgba(0,196,180,0.7)" strokeWidth="1.25" fill="none">
            <line x1="270" y1="270" x2="430" y2="140" />
          </g>
        </svg>

        {/* Reticle */}
        <div style={{ position: "absolute", width: 130, height: 130, display: "flex", alignItems: "stretch", justifyContent: "stretch" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: 14, height: 14, borderTop: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderLeft: `1px solid ${TEAL}` }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: 14, height: 14, borderBottom: `1px solid ${TEAL}`, borderRight: `1px solid ${TEAL}` }} />
        </div>

        {/* Core diamond */}
        <div style={{ position: "relative", width: 70, height: 70, background: "linear-gradient(135deg, #5beedc 0%, #00C4B4 55%, rgba(0,196,180,0) 100%)", boxShadow: "0 0 50px rgba(0,196,180,0.6)", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 26, height: 26, background: "#fff", boxShadow: "0 0 14px rgba(255,255,255,0.85)" }} />
        </div>

        {/* Circle satellites */}
        {circles.map(({ x, y, dim }, i) => (
          <div key={i} style={{ position: "absolute", left: x - (dim ? 3 : 5), top: y - (dim ? 3 : 5), width: dim ? 6 : 10, height: dim ? 6 : 10, borderRadius: "50%", background: dim ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.42)" }} />
        ))}

        {/* Square satellites */}
        {squares.map(({ x, y, teal, dim }, i) => (
          <div key={i} style={{ position: "absolute", left: x - (dim ? 3.5 : 5), top: y - (dim ? 3.5 : 5), width: dim ? 7 : 10, height: dim ? 7 : 10, background: teal ? TEAL : dim ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.32)", transform: "rotate(45deg)", boxShadow: teal ? "0 0 14px rgba(0,196,180,0.6)" : undefined }} />
        ))}
      </div>
    </div>
  );
}

// ─── WordPress vs Shopify ─────────────────────────────────────────────────────

function WordpressShopifyOG() {
  const tileBase: React.CSSProperties = { position: "absolute", border: "1px solid rgba(255,255,255,0.12)" };
  return (
    <div style={{ ...stage, background: `radial-gradient(900px 600px at 78% 50%, rgba(0,196,180,0.10) 0%, rgba(0,196,180,0.03) 35%, transparent 65%), radial-gradient(900px 540px at 18% 50%, rgba(255,255,255,0.04) 0%, transparent 55%), linear-gradient(180deg, #11141c 0%, #0f1117 50%, #0c0e15 100%)` }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <Corner />
      <ScanLine />

      {/* LEFT: modular tiles */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 600, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: 420, height: 420 }}>
          <svg width={420} height={420} style={{ position: "absolute", top: 0, left: 0 }}>
            <g stroke="rgba(255,255,255,0.10)" strokeWidth="1" fill="none">
              <line x1="120" y1="80"  x2="180" y2="80"  /><line x1="240" y1="80"  x2="300" y2="80"  />
              <line x1="120" y1="200" x2="180" y2="200" /><line x1="240" y1="200" x2="300" y2="200" />
              <line x1="120" y1="320" x2="180" y2="320" /><line x1="240" y1="320" x2="300" y2="320" />
              <line x1="80"  y1="120" x2="80"  y2="180" /><line x1="200" y1="120" x2="200" y2="180" /><line x1="320" y1="120" x2="320" y2="180" />
              <line x1="80"  y1="240" x2="80"  y2="300" /><line x1="200" y1="240" x2="200" y2="300" /><line x1="320" y1="240" x2="320" y2="300" />
            </g>
            <g stroke="rgba(0,196,180,0.7)" strokeWidth="1.25" fill="none">
              <line x1="320" y1="200" x2="420" y2="210" />
            </g>
          </svg>
          {/* 3×3 tiles */}
          <div style={{ ...tileBase, left: 40, top: 40, width: 80, height: 80, background: "rgba(255,255,255,0.09)" }} />
          <div style={{ ...tileBase, left: 160, top: 40, width: 80, height: 80, background: "rgba(255,255,255,0.05)" }} />
          <div style={{ ...tileBase, left: 280, top: 40, width: 80, height: 80, background: "rgba(255,255,255,0.14)" }} />
          <div style={{ ...tileBase, left: 40, top: 160, width: 80, height: 80, background: "rgba(255,255,255,0.05)" }} />
          <div style={{ ...tileBase, left: 160, top: 160, width: 80, height: 80, background: "rgba(255,255,255,0.14)" }} />
          <div style={{ ...tileBase, left: 280, top: 160, width: 80, height: 80, background: "rgba(0,196,180,0.14)", borderColor: "rgba(0,196,180,0.55)", boxShadow: "0 0 28px rgba(0,196,180,0.22)" }} />
          <div style={{ ...tileBase, left: 40, top: 280, width: 80, height: 80, background: "rgba(255,255,255,0.14)" }} />
          <div style={{ ...tileBase, left: 160, top: 280, width: 80, height: 80, background: "rgba(255,255,255,0.09)" }} />
          <div style={{ ...tileBase, left: 280, top: 280, width: 80, height: 80, background: "rgba(255,255,255,0.05)" }} />
          {/* exploded tile */}
          <div style={{ ...tileBase, left: -20, top: 200, width: 36, height: 36, background: "rgba(255,255,255,0.09)" }} />
          {/* teal accent dot */}
          <div style={{ position: "absolute", left: 237, top: 197, width: 6, height: 6, borderRadius: "50%", background: TEAL, boxShadow: "0 0 12px rgba(0,196,180,0.6)" }} />
        </div>
      </div>

      {/* RIGHT: monolith */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 600, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: 360, height: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {[{ w: 350, h: 410, c: "rgba(0,196,180,0.07)" }, { w: 290, h: 350, c: "rgba(0,196,180,0.15)" }, { w: 230, h: 290, c: "rgba(0,196,180,0.40)" }].map(({ w, h, c }, i) => (
            <div key={i} style={{ position: "absolute", width: w, height: h, borderRadius: 4, border: `1px solid ${c}` }} />
          ))}
          {/* monolith body */}
          <div style={{ position: "relative", width: 200, height: 260, background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%), #131722", border: "1px solid rgba(255,255,255,0.18)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* layer lines */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "linear-gradient(to bottom, transparent 0, transparent 39px, rgba(255,255,255,0.06) 40px, rgba(255,255,255,0.06) 41px, transparent 42px)", backgroundSize: "100% 60px" }} />
            {/* central seam */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, transparent 0%, rgba(0,196,180,0.55) 50%, transparent 100%)", boxShadow: "0 0 16px rgba(0,196,180,0.5)" }} />
            {/* gem */}
            <div style={{ position: "relative", width: 40, height: 40, background: "linear-gradient(135deg, #5beedc 0%, #00C4B4 60%, rgba(0,196,180,0) 100%)", boxShadow: "0 0 30px rgba(0,196,180,0.55)", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 12, height: 12, background: "#fff", boxShadow: "0 0 12px rgba(255,255,255,0.85)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Generic fallback ─────────────────────────────────────────────────────────

function GenericOG({ title, category }: { title: string; category: string }) {
  return (
    <div style={{ ...stage, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      <Corner />
      {/* teal glow */}
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,196,180,0.15) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        {category ? (
          <div style={{ background: "rgba(0,196,180,0.15)", border: `1px solid rgba(0,196,180,0.4)`, borderRadius: 999, padding: "6px 20px", color: TEAL, fontSize: 14, fontFamily: "sans-serif", letterSpacing: 1 }}>
            {category.toUpperCase()}
          </div>
        ) : null}
        <div style={{ color: "#fff", fontSize: 52, fontWeight: 800, fontFamily: "sans-serif", textAlign: "center", maxWidth: 800, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 20, fontFamily: "sans-serif" }}>
          stivenramirez.com
        </div>
      </div>
    </div>
  );
}
