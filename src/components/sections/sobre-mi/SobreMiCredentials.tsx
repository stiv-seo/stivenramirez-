import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { tools } from "@/data/tools";

const categoryLabel: Record<string, string> = {
  seo: "SEO",
  analytics: "Analytics",
  design: "Diseño",
  dev: "Desarrollo",
};

const certifications = [
  { title: "Google Analytics 4 Certified", issuer: "Google" },
  { title: "Google Ads Search Certified", issuer: "Google" },
  { title: "SEMrush SEO Toolkit", issuer: "Semrush Academy" },
  { title: "Inbound Marketing", issuer: "HubSpot Academy" },
];

export function SobreMiCredentials() {
  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-12">
          <Eyebrow>02 — Stack y certificaciones</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Herramientas que uso a diario
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[480px]">
            No teoría — herramientas de industria que uso en cada proyecto y que conozco a fondo.
          </p>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Tools grid */}
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between bg-warm-white rounded-xl px-4 py-3.5 border border-[rgba(0,0,0,0.05)]"
                >
                  <span className="font-jakarta font-bold text-sm text-text-dark">
                    {tool.name}
                  </span>
                  <Badge variant="teal" className="text-[9px] px-1.5 py-0.5">
                    {categoryLabel[tool.category] ?? tool.category}
                  </Badge>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={0.1}>
            <h3 className="font-jakarta font-bold text-text-dark text-[20px] mb-6">
              Certificaciones
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-4 bg-warm-white rounded-xl p-5 border border-[rgba(0,0,0,0.05)]"
                >
                  <span className="text-teal text-sm mt-0.5 shrink-0">✓</span>
                  <div>
                    <p className="font-jakarta font-bold text-sm text-text-dark leading-tight">
                      {cert.title}
                    </p>
                    <p className="font-sans text-xs text-slate mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
