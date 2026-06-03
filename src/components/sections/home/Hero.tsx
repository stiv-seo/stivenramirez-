"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CALENDLY_URL, WA_URL } from "@/lib/constants";

/* ── GSC mini chart ─────────────────────────────────────────────── */

const EASE = "cubic-bezier(0.16,1,0.3,1)";
const RAW  = [3,5,4,8,11,14,18,24,32,41,58,74,91];

function GscPanel({ visible }: { visible: boolean }) {
  const W=320, H=80, PX=4, PY=6;
  const max = Math.max(...RAW);
  const pts = RAW.map((v,i):[number,number] => [
    PX + (i/(RAW.length-1))*(W-PX*2),
    H - PY - (v/max)*(H-PY*2-4),
  ]);
  const line = `M ${pts.map(([x,y])=>`${x.toFixed(1)},${y.toFixed(1)}`).join(" L ")}`;
  const area = `M ${pts[0][0]},${H} ${pts.map(([x,y])=>`L ${x.toFixed(1)},${y.toFixed(1)}`).join(" ")} L ${pts[pts.length-1][0]},${H} Z`;

  return (
    <div style={{
      background:"rgba(255,255,255,0.04)",
      backdropFilter:"blur(24px)",
      WebkitBackdropFilter:"blur(24px)",
      border:"1px solid rgba(255,255,255,0.09)",
      borderRadius:20,
      overflow:"hidden",
      boxShadow:"0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.9s ${EASE} 0.2s, transform 0.9s ${EASE} 0.2s`,
    }}>
      {/* chrome */}
      <div style={{display:"flex",alignItems:"center",gap:6,padding:"11px 16px",borderBottom:"1px solid rgba(255,255,255,0.06)",background:"rgba(0,0,0,0.2)"}}>
        {["#FF5F57","#FFBD2E","#28C840"].map((c,i)=><span key={i} style={{width:9,height:9,borderRadius:"50%",background:c,opacity:0.75}}/>)}
        <span style={{flex:1,textAlign:"center",fontSize:10,fontFamily:"monospace",color:"rgba(255,255,255,0.25)"}}>search.google.com/search-console</span>
      </div>
      <div style={{padding:"18px 20px 14px"}}>
        {/* header */}
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:14}}>
          <div>
            <p style={{fontSize:9,fontWeight:600,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:4}}>Tráfico orgánico</p>
            <p style={{fontSize:28,fontWeight:800,color:"#00C4B4",letterSpacing:"-2px",lineHeight:1,fontFamily:"var(--font-jakarta)"}}>+280%</p>
            <p style={{fontSize:9,color:"rgba(255,255,255,0.2)",marginTop:2}}>últimos 6 meses · proyecto real</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:5}}>
            {[["Clics","8.4K"],["Impres.","142K"],["CTR","5.9%"]].map(([l,v])=>(
              <div key={l} style={{display:"flex",gap:6,alignItems:"center",background:"rgba(255,255,255,0.05)",borderRadius:6,padding:"2px 8px",border:"1px solid rgba(255,255,255,0.07)"}}>
                <span style={{fontSize:9,color:"rgba(255,255,255,0.3)"}}>{l}</span>
                <span style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.7)",fontFamily:"monospace"}}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        {/* chart */}
        <div style={{borderRadius:8,overflow:"hidden",background:"rgba(0,196,180,0.03)",marginBottom:14}}>
          <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{display:"block"}}>
            <defs>
              <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00C4B4" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#00C4B4" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {[0.3,0.6,0.9].map(v=>(
              <line key={v} x1={PX} y1={PY+v*(H-PY*2)} x2={W-PX} y2={PY+v*(H-PY*2)} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            ))}
            <path d={area} fill="url(#cg)"/>
            <path d={line} fill="none" stroke="#00C4B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{strokeDasharray:900,strokeDashoffset:visible?0:900,transition:visible?`stroke-dashoffset 2s ${EASE} 0.5s`:"none"}}/>
            <circle cx={pts[pts.length-1][0]} cy={pts[pts.length-1][1]} r="4" fill="#00C4B4"
              style={{opacity:visible?1:0,filter:"drop-shadow(0 0 6px rgba(0,196,180,0.9))",transition:`opacity 0.3s ease 2.3s`}}/>
          </svg>
        </div>
        {/* keywords */}
        <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:10}}>
          {[["consultor seo colombia","#3"],["diseño web medellin","#4"],["seo shopify colombia","#5"],["seo local medellin","#7"]].map(([q,p],i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 0",borderBottom:i<3?"1px solid rgba(255,255,255,0.04)":"none",opacity:visible?1:0,transition:`opacity 0.4s ease ${0.9+i*0.1}s`}}>
              <span style={{fontSize:10,color:"rgba(255,255,255,0.5)",fontFamily:"monospace"}}>{q}</span>
              <span style={{fontSize:10,fontWeight:700,fontFamily:"monospace",color:parseInt(p.replace("#",""))<=4?"#00C4B4":"rgba(255,255,255,0.4)",background:"rgba(255,255,255,0.05)",borderRadius:4,padding:"2px 5px"}}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────────── */

export function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setVis(true),100); return ()=>clearTimeout(t); },[]);

  return (
    <section style={{
      position:"relative", overflow:"hidden",
      background:"linear-gradient(160deg,#0a0e18 0%,#040810 60%,#020406 100%)",
      minHeight:"100dvh", display:"flex", flexDirection:"column", justifyContent:"center",
      paddingTop:96, paddingBottom:80,
    }}>
      {/* ── animated blobs ── */}
      <div aria-hidden="true" className="blob-1" style={{
        position:"absolute", top:"-15%", right:"-10%",
        width:"55vw", height:"55vw", maxWidth:700, maxHeight:700,
        borderRadius:"50%",
        background:"radial-gradient(circle,rgba(0,196,180,0.09) 0%,transparent 70%)",
        pointerEvents:"none",
      }}/>
      <div aria-hidden="true" className="blob-2" style={{
        position:"absolute", bottom:"-10%", left:"-8%",
        width:"45vw", height:"45vw", maxWidth:580, maxHeight:580,
        borderRadius:"50%",
        background:"radial-gradient(circle,rgba(15,45,82,0.5) 0%,transparent 70%)",
        pointerEvents:"none",
      }}/>
      <div aria-hidden="true" className="blob-3" style={{
        position:"absolute", top:"40%", left:"45%",
        width:"30vw", height:"30vw", maxWidth:400, maxHeight:400,
        borderRadius:"50%",
        background:"radial-gradient(circle,rgba(0,196,180,0.04) 0%,transparent 70%)",
        pointerEvents:"none",
      }}/>

      <div style={{maxWidth:1160,margin:"0 auto",padding:"0 clamp(20px,5vw,60px)",position:"relative",zIndex:1,width:"100%"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1.05fr",gap:"clamp(40px,6vw,80px)",alignItems:"center"}}>

          {/* ── LEFT ── */}
          <div>
            {/* eyebrow */}
            <div style={{
              display:"inline-flex",alignItems:"center",gap:10,
              borderRadius:99,border:"1px solid rgba(0,196,180,0.2)",
              background:"rgba(0,196,180,0.07)",padding:"8px 16px",marginBottom:32,
              opacity:vis?1:0,transform:vis?"translateY(0)":"translateY(16px)",
              transition:`opacity 0.7s ${EASE}, transform 0.7s ${EASE}`,
            }}>
              <span style={{width:6,height:6,borderRadius:"50%",background:"#00C4B4",flexShrink:0}}/>
              <span style={{fontFamily:"var(--font-dm-sans)",fontSize:10,fontWeight:600,letterSpacing:"3px",textTransform:"uppercase",color:"#00C4B4"}}>
                Consultor SEO · Medellín, Colombia
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily:"var(--font-jakarta-sans)",fontWeight:800,
              fontSize:"clamp(40px,5.5vw,72px)",
              lineHeight:1.04,letterSpacing:"clamp(-1.5px,-0.028em,-3px)",
              color:"white",marginBottom:28,
              opacity:vis?1:0,transform:vis?"translateY(0)":"translateY(20px)",
              transition:`opacity 0.8s ${EASE} 0.08s, transform 0.8s ${EASE} 0.08s`,
            }}>
              Consultor SEO<br/>
              <span style={{color:"rgba(255,255,255,0.38)"}}>&</span>{" "}
              Diseñador Web<br/>
              en Medellín.
            </h1>

            {/* accent line */}
            <div style={{
              width:48,height:3,background:"#00C4B4",borderRadius:99,marginBottom:28,
              opacity:vis?0.7:0,transition:`opacity 0.6s ${EASE} 0.2s`,
            }}/>

            {/* subtitle */}
            <p style={{
              fontFamily:"var(--font-dm-sans)",fontSize:"clamp(15px,1.1vw,17px)",
              color:"rgba(148,163,184,0.8)",lineHeight:1.8,maxWidth:400,marginBottom:40,
              opacity:vis?1:0,transform:vis?"translateY(0)":"translateY(16px)",
              transition:`opacity 0.8s ${EASE} 0.22s, transform 0.8s ${EASE} 0.22s`,
            }}>
              Sitios WordPress y Shopify con SEO integrado desde el primer elemento. Sin agencia, sin intermediarios — resultados medibles desde el día 1.
            </p>

            {/* CTAs */}
            <div style={{
              display:"flex",flexWrap:"wrap",gap:12,marginBottom:40,
              opacity:vis?1:0,transform:vis?"translateY(0)":"translateY(16px)",
              transition:`opacity 0.8s ${EASE} 0.32s, transform 0.8s ${EASE} 0.32s`,
            }}>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                style={{
                  display:"inline-flex",alignItems:"center",gap:8,
                  background:"#00C4B4",color:"#040810",
                  fontFamily:"var(--font-jakarta-sans)",fontSize:14,fontWeight:700,
                  padding:"13px 16px 13px 24px",borderRadius:99,textDecoration:"none",
                  transition:`background-color 180ms ${EASE},transform 120ms ease-out`,
                }}
                onMouseEnter={e=>{e.currentTarget.style.background="#00E5D3";}}
                onMouseLeave={e=>{e.currentTarget.style.background="#00C4B4";}}
              >
                Agendar llamada gratis
                <span style={{width:32,height:32,borderRadius:"50%",background:"rgba(0,0,0,0.15)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:16}}>→</span>
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                style={{
                  display:"inline-flex",alignItems:"center",gap:8,
                  border:"1px solid rgba(255,255,255,0.15)",color:"white",
                  fontFamily:"var(--font-jakarta-sans)",fontSize:14,fontWeight:700,
                  padding:"13px 24px",borderRadius:99,textDecoration:"none",
                  transition:`border-color 180ms ${EASE},background-color 180ms ${EASE}`,
                }}
              >
                WhatsApp
              </a>
            </div>

            {/* mini stats */}
            <div style={{
              display:"flex",flexWrap:"wrap",gap:"16px 32px",
              opacity:vis?1:0,transition:`opacity 0.8s ${EASE} 0.44s`,
            }}>
              {[["9+","años"],["40+","proyectos"],["100","SEO Score"],["3","certs Google"]].map(([v,l])=>(
                <div key={l} style={{display:"flex",alignItems:"baseline",gap:6}}>
                  <span style={{fontFamily:"var(--font-jakarta-sans)",fontWeight:800,fontSize:20,color:"#00C4B4",letterSpacing:"-0.5px"}}>{v}</span>
                  <span style={{fontFamily:"var(--font-dm-sans)",fontSize:11,color:"rgba(255,255,255,0.28)"}}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: glass GSC ── */}
          <div style={{display:"none"}} className="lg-block">
            <div style={{marginBottom:10,display:"flex",alignItems:"center",gap:8,opacity:vis?1:0,transition:`opacity 0.5s ease 0.2s`}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:"#00C4B4",animation:"pulse 2s infinite"}}/>
              <span style={{fontFamily:"var(--font-dm-sans)",fontSize:9,fontWeight:600,letterSpacing:"2.5px",textTransform:"uppercase",color:"rgba(255,255,255,0.22)"}}>Resultado real · Cliente Colombia</span>
            </div>
            <GscPanel visible={vis}/>
          </div>

          {/* Mobile: show GSC panel below */}
          <div className="lg-hide" style={{display:"block"}}>
            <GscPanel visible={vis}/>
          </div>

        </div>
      </div>
    </section>
  );
}
