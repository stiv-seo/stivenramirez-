import Link from "next/link";
import { Container } from "@/components/ui/Container";

// Enlace contextual hacia la página de la ciudad con sede real, para que Google sepa
// cuál es LA página de Medellín y las páginas de servicio no compitan con ella.
export function LocalCallout({ href, anchor, text }: { href: string; anchor: string; text: string }) {
  return (
    <section className="bg-off-white" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Container>
        <p className="font-sans text-text-mid text-[15px] leading-[1.7] max-w-3xl">
          {text}{" "}
          <Link href={href} className="font-jakarta font-semibold text-teal underline underline-offset-2 hover:no-underline">
            {anchor}
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
