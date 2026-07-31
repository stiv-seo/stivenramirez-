import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export interface FAQItem {
  q: string;
  a: string;
}

interface SubpageFAQProps {
  items: FAQItem[];
  bg?: "off-white" | "warm-white";
}

export function SubpageFAQ({ items, bg = "warm-white" }: SubpageFAQProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const bgClass = bg === "off-white" ? "bg-off-white" : "bg-warm-white";

  return (
    <section className={bgClass} style={{ paddingTop: "90px", paddingBottom: "90px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container>
        <div className="max-w-2xl mx-auto">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-8"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            Resuelve tus dudas antes de escribirme
          </h2>

          <div>
            {items.map((item, i) => (
              <details
                key={i}
                className="group border-b border-black/[0.08] first:border-t first:border-t-black/[0.08]"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer py-5 font-jakarta font-bold text-text-dark text-[15px] leading-snug list-none select-none group-open:text-teal hover:text-teal transition-colors duration-150">
                  <span>{item.q}</span>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full border border-black/15 text-slate flex items-center justify-center group-open:bg-teal group-open:border-teal group-open:text-midnight group-open:rotate-45 transition-all duration-300"
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="5" y1="1" x2="5" y2="9" />
                      <line x1="1" y1="5" x2="9" y2="5" />
                    </svg>
                  </span>
                </summary>
                <div className="pb-5 pr-10">
                  <p className="font-sans text-text-mid text-[14px] leading-[1.8]">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
