import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CATEGORIES,
  getPostsByCategory,
  getActiveCategorySlugs,
} from "@/lib/mdx";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { BlogCTA } from "@/components/sections/blog/BlogCTA";
import { formatDate } from "@/lib/utils";
import { collectionPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getActiveCategorySlugs().map((cat) => ({ cat }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cat: string }>;
}): Promise<Metadata> {
  const { cat } = await params;
  const label = CATEGORIES[cat];
  if (!label) return {};

  return {
    title: `Blog de ${label} en Colombia`,
    description: `Guías prácticas de ${label.toLowerCase()} para pymes colombianas: estrategias reales y accionables, sin relleno ni teoría vacía, escritas por Stiven Ramírez.`,
    alternates: { canonical: `https://stivenramirez.com/blog/category/${cat}/`, languages: { "es-CO": `https://stivenramirez.com/blog/category/${cat}/`, "x-default": `https://stivenramirez.com/blog/category/${cat}/` } },
    openGraph: {
      title: `Blog de ${label} para pymes colombianas`,
      description: `Artículos sobre ${label.toLowerCase()} para pymes en Colombia.`,
      url: `https://stivenramirez.com/blog/category/${cat}/`,
      type: "website",
      locale: "es_CO",
      siteName: "Stiven Ramírez",
    },
  };
}

const categoryVariant: Record<string, "teal" | "amber"> = {
  "Diseño Web": "teal",
  "E-commerce": "amber",
  SEO: "teal",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;
  const label = CATEGORIES[cat];
  if (!label) notFound();

  const posts = getPostsByCategory(cat);

  const schema = collectionPageSchema({
    name: `Blog de ${label}`,
    description: `Artículos sobre ${label.toLowerCase()} para pymes colombianas.`,
    url: `https://stivenramirez.com/blog/category/${cat}/`,
    author: "Stiven Ramírez",
    items: posts.map((post) => ({
      name: post.title,
      url: `https://stivenramirez.com/blog/${post.slug}/`,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero */}
      <section
        className="relative bg-midnight bg-grain overflow-hidden pt-20 md:pt-[140px]"
        style={{ paddingBottom: "80px" }}
      >
        <Container>
          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-sans text-xs text-slate">
                <li>
                  <Link href="/" className="hover:text-teal transition-colors duration-150">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link href="/blog/" className="hover:text-teal transition-colors duration-150">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li className="text-slate-light" aria-current="page">{label}</li>
              </ol>
            </nav>

            <p className="font-sans text-[11px] font-semibold tracking-[4px] uppercase text-teal mb-5">
              Categoría
            </p>
            <h1
              className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1.5px] mb-5"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              {label}
            </h1>
            <p className="font-sans text-slate-light leading-[1.8] max-w-[480px] text-[17px]">
              {posts.length} {posts.length === 1 ? "artículo" : "artículos"} publicados
            </p>

            {/* Category nav */}
            <div className="flex flex-wrap gap-2 mt-8">
              <Link
                href="/blog/"
                className="font-sans text-xs text-slate-light hover:text-teal bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-full transition-colors duration-150"
              >
                Todos
              </Link>
              {Object.entries(CATEGORIES).map(([slug, name]) => (
                <Link
                  key={slug}
                  href={`/blog/category/${slug}/`}
                  className={`font-sans text-xs px-4 py-1.5 rounded-full transition-colors duration-150 ${
                    slug === cat
                      ? "bg-teal text-midnight font-semibold"
                      : "text-slate-light hover:text-teal bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Posts grid */}
      <section className="bg-off-white" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
        <Container>
          {posts.length === 0 ? (
            <FadeIn>
              <p className="font-sans text-text-mid text-center py-20">
                Próximamente artículos en esta categoría.
              </p>
            </FadeIn>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group block bg-warm-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 h-full"
                    aria-label={`Leer: ${post.title}`}
                  >
                    <div
                      className="bg-navy flex items-center justify-center"
                      style={{ height: "160px" }}
                    >
                      <div
                        className="w-full h-full flex items-center justify-center opacity-30"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 50% 50%, #00C4B4 0%, transparent 70%)",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={categoryVariant[post.category] ?? "teal"}>
                          {post.category}
                        </Badge>
                        <span className="font-sans text-xs text-slate">{post.readTime} lectura</span>
                      </div>
                      <h2 className="font-jakarta font-bold text-text-dark text-[18px] leading-tight mb-2 group-hover:text-teal transition-colors duration-150">
                        {post.title}
                      </h2>
                      <p className="font-sans text-text-mid text-sm leading-[1.7] mb-4">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <time dateTime={post.date} className="font-sans text-xs text-slate">
                          {formatDate(post.date)}
                        </time>
                        <span className="font-jakarta font-bold text-xs text-teal group-hover:translate-x-1 transition-transform duration-150">
                          Leer →
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}

          <FadeIn delay={0.2} className="mt-10 text-center">
            <Link
              href="/blog/"
              className="font-sans text-sm text-teal underline underline-offset-2 hover:no-underline"
            >
              ← Ver todos los artículos
            </Link>
          </FadeIn>
        </Container>
      </section>

      <BlogCTA />
    </>
  );
}
