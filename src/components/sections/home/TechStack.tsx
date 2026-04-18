import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const tools = [
  { name: "Semrush",          category: "SEO Research",         abbr: "SE",  color: "#FF642D" },
  { name: "Ahrefs",           category: "Backlinks",            abbr: "AH",  color: "#0E90FF" },
  { name: "Screaming Frog",   category: "Auditoría Técnica",    abbr: "SF",  color: "#6DBE45" },
  { name: "GSC",              category: "Rendimiento Orgánico", abbr: "GSC", color: "#00C4B4" },
  { name: "Shopify",          category: "E-commerce",           abbr: "SH",  color: "#96BF48" },
  { name: "WordPress",        category: "CMS",                  abbr: "WP",  color: "#21759B" },
  { name: "PageSpeed",        category: "Core Web Vitals",      abbr: "PS",  color: "#F59E0B" },
  { name: "Google Ads",       category: "Pauta SEM",            abbr: "GA",  color: "#4285F4" },
  { name: "Meta Ads",         category: "Social Ads",           abbr: "MA",  color: "#1877F2" },
  { name: "Hotjar",           category: "Heatmaps & UX",        abbr: "HJ",  color: "#FF3C00" },
  { name: "GTM",              category: "Tag Manager",          abbr: "GTM", color: "#2563EB" },
  { name: "Figma",            category: "Diseño UI",            abbr: "FG",  color: "#A259FF" },
];

export function TechStack() {
  return (
    <section
      className="bg-midnight bg-grid-dark relative overflow-hidden"
      style={{ paddingTop: "72px", paddingBottom: "72px" }}
    >
      <Container>
        <FadeIn className="text-center mb-10">
          <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-3">
            Herramientas de Élite
          </p>
          <h2
            className="font-jakarta font-extrabold text-white leading-[1.1] tracking-[-1px]"
            style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
          >
            Las mismas herramientas que usan las agencias,{" "}
            <span className="text-teal">sin el precio de agencia.</span>
          </h2>
        </FadeIn>

        {/* Dense compact grid — icon pill + label */}
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <FadeIn key={tool.name} delay={i * 0.04}>
              <div
                className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full pl-1.5 pr-4 py-1.5 hover:border-teal/40 hover:bg-white/[0.09] transition-all duration-200"
                title={tool.category}
              >
                {/* Icon pill */}
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center font-jakarta font-extrabold shrink-0"
                  style={{
                    background: `${tool.color}22`,
                    color: tool.color,
                    fontSize: tool.abbr.length > 2 ? "8px" : "10px",
                    letterSpacing: "-0.3px",
                  }}
                  aria-hidden="true"
                >
                  {tool.abbr}
                </span>
                <div className="text-left leading-none">
                  <p className="font-jakarta font-bold text-white text-[13px]">{tool.name}</p>
                  <p className="font-sans text-slate text-[10px] mt-0.5">{tool.category}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="font-sans text-[11px] text-slate text-center mt-8 max-w-[480px] mx-auto leading-[1.6]">
            Cada proyecto incluye acceso a los datos reales. Ves exactamente qué se mide y por qué.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
