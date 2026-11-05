import Link from "next/link";
import { Container } from "@/components/ui/Container";

type Guide = { href: string; title: string; note: string };

// Enlaces internos a guías del blog desde una página de servicio.
export function RelatedGuides({ title = "Guías relacionadas", guides }: { title?: string; guides: Guide[] }) {
  return (
    <section className="bg-off-white" style={{ paddingTop: "56px", paddingBottom: "56px" }}>
      <Container>
        <h2 className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-0.5px] mb-6" style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}>
          {title}
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {guides.map((g) => (
            <li key={g.href}>
              <Link href={g.href} className="block h-full rounded-2xl bg-warm-white p-5 hover:shadow-sm transition-shadow">
                <span className="block font-jakarta font-bold text-text-dark text-[15px] mb-1.5">{g.title}</span>
                <span className="block font-sans text-text-mid text-[13px] leading-[1.65]">{g.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
