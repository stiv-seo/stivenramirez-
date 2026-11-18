import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeIn } from "@/components/ui/FadeIn";
import { PRAGMA_AUTHOR_URL } from "@/lib/constants";

const articles = [
  {
    title: "Mejores prácticas para crear un sitio SEO-friendly con micro frontends",
    date: "15 de septiembre de 2023",
    href: "https://www.pragma.co/es/blog/mejores-practicas-crear-sitio-web-seo-friendly-micro-frontends",
  },
  {
    title: "SXO: optimización de la experiencia de búsqueda",
    date: "31 de julio de 2023",
    href: "https://www.pragma.co/es/blog/la-importancia-del-sxo-en-el-posicionamiento-web-seo-ux",
  },
  {
    title: "Mejora tu estrategia de SEO con el apoyo de QA",
    date: "14 de julio de 2023",
    href: "https://www.pragma.co/es/blog/mejora-tu-estrategia-de-seo-con-el-apoyo-de-qa",
  },
  {
    title: "Cómo el SGE y la IA de Google están cambiando el SEO",
    date: "26 de febrero de 2024",
    href: "https://www.pragma.co/es/blog/como-sge-y-la-ia-google-cambian-el-seo",
  },
];

export function SobreMiPublicaciones() {
  return (
    <section
      className="bg-warm-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        <FadeIn className="mb-10">
          <Eyebrow>Publicaciones</Eyebrow>
          <h2
            className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Lo que he escrito sobre SEO
          </h2>
          <p className="font-sans text-text-mid leading-[1.75] max-w-[520px]">
            Artículos que publiqué en el blog de Pragma, una empresa de tecnología colombiana.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="grid gap-3 md:grid-cols-2">
            {articles.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  rel="noopener"
                  className="block bg-off-white rounded-xl p-5 transition-colors hover:bg-white"
                >
                  <span className="font-jakarta font-bold text-sm text-text-dark leading-snug block">
                    {a.title}
                  </span>
                  <span className="font-sans text-xs text-slate mt-1 block">
                    Pragma · {a.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={PRAGMA_AUTHOR_URL}
            rel="noopener"
            className="inline-block mt-6 font-jakarta font-bold text-sm text-text-dark underline decoration-teal underline-offset-4"
          >
            Ver todos mis artículos en Pragma
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
