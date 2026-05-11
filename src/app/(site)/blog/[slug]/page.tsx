import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://stivenramirez.com/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://stivenramirez.com/blog/${slug}/`,
      type: "article",
      locale: "es_CO",
      siteName: "Stiven Ramírez",
      publishedTime: post.date,
    },
  };
}

// ─── MDX component overrides ──────────────────────────────────────────────────

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-jakarta font-extrabold text-text-dark leading-tight tracking-[-0.5px] mt-12 mb-4"
      style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-jakarta font-bold text-text-dark text-[20px] leading-tight mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-sans text-text-mid leading-[1.85] mb-5 text-[16px]" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-2 mb-5 pl-5" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="space-y-2 mb-5 pl-5 list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className="font-sans text-text-mid leading-[1.75] text-[16px] list-disc marker:text-teal"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-text-dark" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-teal underline underline-offset-2 hover:no-underline transition-all duration-150"
      {...props}
    />
  ),
  hr: () => <hr className="border-[rgba(0,0,0,0.08)] my-10" />,
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-4 border-teal pl-5 my-6 font-sans italic text-text-mid"
      {...props}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse font-sans text-sm" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="text-left font-jakarta font-bold text-text-dark bg-off-white px-4 py-3 border border-[rgba(0,0,0,0.08)]"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="text-text-mid px-4 py-3 border border-[rgba(0,0,0,0.08)] align-top"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="font-mono text-[13px] bg-off-white text-teal px-1.5 py-0.5 rounded"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-midnight text-slate-light font-mono text-[13px] rounded-xl p-5 overflow-x-auto mb-6"
      {...props}
    />
  ),
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const schema = articleSchema({
    title: post.title,
    description: post.description,
    url: `https://stivenramirez.com/blog/${slug}/`,
    datePublished: post.date,
    dateModified: post.date,
    authorName: "Stiven Ramírez",
    image: `https://stivenramirez.com/blog/${slug}/opengraph-image`,
  });

  const breadcrumb = breadcrumbSchema({
    items: [
      { name: "Inicio", url: "https://stivenramirez.com/" },
      { name: "Blog",   url: "https://stivenramirez.com/blog/" },
      { name: post.title, url: `https://stivenramirez.com/blog/${slug}/` },
    ],
  });

  const categoryVariant: Record<string, "teal" | "amber"> = {
    "Diseño Web": "teal",
    "E-commerce": "amber",
    "SEO": "teal",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article>
      {/* Hero */}
      <section
        className="relative bg-midnight bg-grid-dark overflow-hidden"
        style={{ paddingTop: "120px", paddingBottom: "80px" }}
      >
        <div
          className="glow-teal absolute pointer-events-none"
          style={{ top: "-80px", right: "-80px" }}
          aria-hidden="true"
        />
        <Container>
          {/* Breadcrumb */}
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
              <li className="text-slate-light truncate max-w-[200px]" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-5">
              <Badge variant={categoryVariant[post.category] ?? "teal"}>
                {post.category}
              </Badge>
              <span className="font-sans text-xs text-slate">{post.readTime} lectura</span>
            </div>

            <h1
              className="font-jakarta font-extrabold text-white leading-[1.05] tracking-[-1px] mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              {post.title}
            </h1>

            <p className="font-sans text-slate-light leading-[1.75] text-[17px] mb-6">
              {post.description}
            </p>

            <div className="flex items-center gap-4 font-sans text-xs text-slate">
              <span>Por <strong className="text-slate-light">Stiven Ramírez</strong></span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <section className="bg-warm-white" style={{ paddingTop: "72px", paddingBottom: "100px" }}>
        <Container>
          <div className="max-w-[760px] mx-auto">
            <MDXRemote
              source={post.content}
              components={components}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />

            {/* Author card */}
            <div className="mt-16 border-t border-[rgba(0,0,0,0.08)] pt-10 flex items-start gap-5">
              <img
                src="/images/stiven-ramirez-consultor-seo-medellin.webp"
                alt="Stiven Ramírez"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover border-2 border-teal/40 shrink-0"
              />
              <div>
                <p className="font-jakarta font-bold text-text-dark text-[15px] mb-1">
                  Stiven Ramírez
                </p>
                <p className="font-sans text-sm text-text-mid leading-[1.65]">
                  Consultor SEO y diseñador web con base en Colombia. Especializado en pymes
                  que quieren crecer en Google sin depender de una agencia.{" "}
                  <a href="/sobre-mi/" className="text-teal underline underline-offset-2 hover:no-underline">
                    Conoce más →
                  </a>
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 bg-midnight rounded-2xl p-8 text-center">
              <p className="font-jakarta font-extrabold text-white text-[20px] mb-3">
                ¿Quieres aplicar esto a tu negocio?
              </p>
              <p className="font-sans text-slate-light text-sm leading-[1.75] mb-6">
                Agenda una llamada gratuita de 30 minutos y te cuento exactamente qué haría con tu sitio.
              </p>
              <a
                href="/contacto/"
                className="inline-block font-jakarta font-bold text-sm bg-teal text-midnight px-6 py-3 rounded-xl hover:bg-teal/90 transition-colors duration-150"
              >
                Agendar llamada gratuita →
              </a>
            </div>
          </div>
        </Container>
      </section>
      </article>
    </>
  );
}
