import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  const recentPosts = getAllPosts().slice(0, 4);
  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <Eyebrow>07 — Blog</Eyebrow>
            <h2
              className="font-jakarta font-extrabold text-text-dark leading-[1.1] tracking-[-1px]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Aprende a posicionar<br />tu negocio en Google
            </h2>
          </div>
          <Button variant="outline" href="/blog/">
            Ver todos →
          </Button>
        </FadeIn>

        {/* Posts grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recentPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}/`}
                className="group block bg-warm-white rounded-2xl p-7 h-full
                  border border-[rgba(0,0,0,0.05)]
                  hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="teal">{post.category}</Badge>
                  <span className="font-sans text-[11px] text-slate">{post.readTime} lectura</span>
                </div>

                <h3 className="font-jakarta font-bold text-text-dark text-[17px] leading-[1.35] mb-3
                  group-hover:text-teal transition-colors duration-150">
                  {post.title}
                </h3>

                <p className="font-sans text-text-mid text-sm leading-[1.7] mb-6 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="font-sans text-[11px] text-slate">
                    {formatDate(post.date)}
                  </span>
                  <span className="font-jakarta font-bold text-teal text-xs">
                    Leer →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
