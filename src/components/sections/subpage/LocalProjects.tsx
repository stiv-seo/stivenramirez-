import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { portfolioCases, redesignCases } from "@/data/portfolio";

// Proyectos reales de clientes del Valle de Aburrá. Solo datos de portfolio.ts:
// sin métricas ni citas que no estén documentadas.
const ids = ["renovista", "factum", "oralmaax"] as const;

type Item = { id: string; client: string; kind: string; text: string; href?: string };

function items(): Item[] {
  const out: Item[] = [];
  for (const id of ids) {
    const p = portfolioCases.find((c) => c.id === id);
    if (p) out.push({ id, client: p.client, kind: p.category, text: p.scopeNote ?? p.services, href: p.href });
    const r = redesignCases.find((c) => c.id === id);
    if (r) out.push({ id, client: r.client, kind: r.sector, text: r.summary, href: r.href });
  }
  return out;
}

export function LocalProjects({ zona = "Valle de Aburrá" }: { zona?: string }) {
  const list = items();
  if (!list.length) return null;
  return (
    <section className="bg-midnight" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <Container>
        <FadeIn>
          <Eyebrow>Proyectos en la zona</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-white leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            Negocios del {zona} con los que he trabajado
          </h2>
          <p className="font-sans text-slate-light text-[15px] leading-[1.7] max-w-2xl mb-10">
            Sitios reales, en producción. Las cifras de tráfico se publican cuando hay datos verificables, no antes.
          </p>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-3">
          {list.map((p) => (
            <FadeIn key={p.id}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col">
                <p className="font-sans text-[12px] text-teal mb-2">{p.kind}</p>
                <h3 className="font-jakarta font-bold text-white text-[18px] mb-3">{p.client}</h3>
                <p className="font-sans text-slate-light text-[14px] leading-[1.7] mb-5">{p.text}</p>
                <div className="mt-auto flex flex-wrap gap-4">
                  {p.href ? (
                    <a href={p.href} rel="noopener" target="_blank" className="font-jakarta font-semibold text-[13px] text-teal hover:underline">
                      Ver el sitio
                    </a>
                  ) : null}
                  <Link href="/portafolio/" className="font-jakarta font-semibold text-[13px] text-white/80 hover:text-white">
                    Ver el portafolio
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
