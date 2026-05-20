import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
    title: `Blog de ${label}`,
    description: `Artículos sobre ${label.toLowerCase()} para pymes colombianas. Guías prácticas sin relleno por Stiven Ramírez.`,
    alternates: { canonical: `https://stivenramirez.com/blog/category/${cat}/` },
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

  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-midnight bg-grid-dark overflow-hidden pt-20 md:pt-[140px]"
        style={{ paddingBottom: "80px" }}
      >
        <div
          className="glow-teal absolute pointer-events-none"
          style={{ top: "-100px", right: "-80px" }}
          aria-hidden="true"
        />
        <Container>
          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-sans text-xs text-slate">
                <li>
                  <a href="/" className="hover:text-teal transition-colors duration-150">
                    Inicio
                  </a>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <a href="/blog/" className="hover:text-teal transition-colors duration-150">
                    Blog
                  </a>
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
              <a
                href="/blog/"
                className="font-sans text-xs text-slate hover:text-teal border border-[rgba(255,255,255,0.1)] hover:border-teal/40 px-4 py-1.5 rounded-full transition-all duration-150"
              >
                Todos
              </a>
              {Object.entries(CATEGORIES).map(([slug, name]) => (
                <a
                  key={slug}
                  href={`/blog/category/${slug}/`}
                  className={`font-sans text-xs px-4 py-1.5 rounded-full border transition-all duration-150 ${
                    slug === cat
                      ? "bg-teal text-midnight border-teal font-semibold"
                      : "text-slate hover:text-teal border-[rgba(255,255,255,0.1)] hover:border-teal/40"
                  }`}
                >
                  {name}
                </a>
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
                  <a
                    href={`/blog/${post.slug}/`}
                    className="group block bg-warm-white rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
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
                  </a>
                </FadeIn>
              ))}
            </div>
          )}

          <FadeIn delay={0.2} className="mt-10 text-center">
            <a
              href="/blog/"
              className="font-sans text-sm text-teal underline underline-offset-2 hover:no-underline"
            >
              ← Ver todos los artículos
            </a>
          </FadeIn>
        </Container>
      </section>

      <BlogCTA />
    </>
  );
}
