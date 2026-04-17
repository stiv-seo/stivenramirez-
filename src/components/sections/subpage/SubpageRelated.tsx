import Link from "next/link";
import { Container } from "@/components/ui/Container";

export interface RelatedLink {
  label: string;
  href: string;
  description: string;
}

interface SubpageRelatedProps {
  title?: string;
  links: RelatedLink[];
  bg?: "off-white" | "warm-white";
}

export function SubpageRelated({
  title = "Servicios relacionados",
  links,
  bg = "off-white",
}: SubpageRelatedProps) {
  const bgClass = bg === "off-white" ? "bg-off-white" : "bg-warm-white";
  const cardBg = bg === "off-white" ? "bg-warm-white" : "bg-off-white";

  return (
    <section className={bgClass} style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-jakarta font-bold text-text-dark text-[20px] mb-6">{title}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group flex flex-col gap-1 ${cardBg} rounded-2xl p-5 border border-[rgba(0,0,0,0.05)] hover:border-teal hover:bg-teal/5 transition-all duration-150`}
              >
                <span className="font-jakarta font-bold text-text-dark text-[15px] group-hover:text-teal transition-colors duration-150 flex items-center gap-2">
                  {link.label}
                  <span className="text-slate group-hover:text-teal transition-colors duration-150 text-sm">
                    →
                  </span>
                </span>
                <span className="font-sans text-xs text-text-mid leading-[1.6]">
                  {link.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
