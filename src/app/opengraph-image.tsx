import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Stiven Ramírez — Consultor SEO & Diseñador Web Colombia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1829",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,196,180,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,196,180,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,196,180,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#00C4B4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontWeight: 800,
                fontSize: "17px",
                color: "#0B1829",
                lineHeight: 1,
              }}
            >
              SR
            </span>
          </div>
          <span
            style={{
              color: "#94A3B8",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Stiven Ramírez
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "52px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            maxWidth: "820px",
            marginBottom: "24px",
          }}
        >
          Diseño web + SEO integrado desde el primer día.
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#94A3B8",
            fontSize: "22px",
            lineHeight: 1.5,
            marginBottom: "48px",
          }}
        >
          Sitios WordPress y Shopify que posicionan en Google desde el lanzamiento.
        </div>

        {/* Trust pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["+40 proyectos", "SEO incluido", "Colombia"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(0,196,180,0.12)",
                border: "1px solid rgba(0,196,180,0.3)",
                borderRadius: "100px",
                padding: "8px 20px",
                color: "#00C4B4",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "96px",
            color: "rgba(148,163,184,0.5)",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          stivenramirez.com
        </div>
      </div>
    ),
    { ...size }
  );
}
