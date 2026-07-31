import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  const [featured, ...rest] = getAllPosts().slice(0, 4);

  return (
    <section className="bg-off-white" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container>
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <Eyebrow>Blog</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1.5px]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", textWrap: "balance" }}
            >
              Aprende a posicionar tu negocio en Google
            </h2>
          </div>
          <Button variant="outline" href="/blog/">
            Ver todos →
          </Button>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          {/* Featured post */}
          {featured && (
            <FadeIn>
              <Link
                href={`/blog/${featured.slug}/`}
                className="group flex flex-col h-full bg-midnight rounded-3xl p-9"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="teal">{featured.category}</Badge>
                  <span className="font-sans text-[11px] text-slate-light">{featured.readTime} lectura</span>
                </div>
                <h3
                  className="font-jakarta font-extrabold text-white leading-[1.2] tracking-[-0.5px] mb-4 group-hover:text-teal transition-colors duration-150"
                  style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
                >
                  {featured.title}
                </h3>
                <p className="font-sans text-slate-light text-[14px] leading-[1.75] mb-8 max-w-[440px]">
                  {featured.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <span className="font-sans text-[11px] text-slate-light">{formatDate(featured.date)}</span>
                  <span className="font-jakarta font-bold text-teal text-xs inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                    Leer artículo →
                  </span>
                </div>
              </Link>
            </FadeIn>
          )}

          {/* Compact list */}
          <div className="flex flex-col">
            {rest.map((post, i) => (
              <FadeIn key={post.slug} delay={0.1 + i * 0.08}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group flex items-start justify-between gap-4 py-6 border-b border-black/[0.07] first:pt-0 last:border-b-0"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="teal">{post.category}</Badge>
                      <span className="font-sans text-[10px] text-slate">{post.readTime}</span>
                    </div>
                    <h3 className="font-jakarta font-bold text-text-dark text-[15px] leading-[1.4] group-hover:text-teal transition-colors duration-150">
                      {post.title}
                    </h3>
                  </div>
                  <span
                    className="shrink-0 mt-1 font-jakarta font-bold text-teal text-sm opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
