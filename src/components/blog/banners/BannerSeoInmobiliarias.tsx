"use client";

import { BannerFrame, TEAL, AMBER, mono, sans } from "./BannerFrame";

const ETAPAS = [
  { t: "Busca", d: "apartamento en arriendo + zona", c: "rgba(255,255,255,0.75)" },
  { t: "Te encuentra", d: "página por barrio y tipo de inmueble", c: TEAL },
  { t: "Te escribe", d: "ficha clara y contacto a un clic", c: AMBER },
];

export function BannerSeoInmobiliarias() {
  return (
    <BannerFrame
      label="Recorrido de un cliente inmobiliario: busca en Google, encuentra la página del barrio y escribe"
      eyebrow="SEO · Inmobiliarias"
      title={<>Aparece cuando buscan <span style={{ color: TEAL }}>propiedades</span></>}
      footer="stivenramirez.com · Esquema del recorrido"
    >
      <div style={{ display: "flex", alignItems: "stretch", gap: 18, height: "100%" }}>
        {ETAPAS.map((e, i) => (
          <div key={e.t} style={{ display: "flex", alignItems: "center", gap: 18, flex: 1 }}>
            <div style={{
              flex: 1, height: 230, borderRadius: 18, padding: "30px 26px",
              background: "rgba(255,255,255,0.04)", border: `1px solid ${i === 0 ? "rgba(255,255,255,0.12)" : e.c}`,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div style={{ fontSize: 15, color: e.c, ...mono }}>PASO {i + 1}</div>
              <div>
                <div style={{ fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 10, ...sans }}>{e.t}</div>
                <div style={{ fontSize: 17, lineHeight: 1.4, color: "rgba(255,255,255,0.6)", ...sans }}>{e.d}</div>
              </div>
            </div>
            {i < ETAPAS.length - 1 && <div style={{ fontSize: 30, color: "rgba(255,255,255,0.3)", ...sans }}>→</div>}
          </div>
        ))}
      </div>
    </BannerFrame>
  );
}
