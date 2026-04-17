import { Container } from "@/components/ui/Container";

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
  const cardBg = bg === "off-white" ? "bg-warm-white" : "bg-off-white";

  return (
    <section className={bgClass} style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container>
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-5">
            FAQ
          </p>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-10"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            Preguntas frecuentes
          </h2>

          <div className="space-y-3">
            {items.map((item, i) => (
              <details
                key={i}
                className={`group ${cardBg} rounded-2xl border border-[rgba(0,0,0,0.05)] overflow-hidden`}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-jakarta font-bold text-text-dark text-[16px] leading-tight list-none select-none hover:text-teal transition-colors duration-150">
                  <span>{item.q}</span>
                  <span className="shrink-0 text-slate group-open:rotate-45 transition-transform duration-200 text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5">
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
