import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <section className="bg-off-white overflow-hidden" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container>
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
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
      </Container>

      {/* Horizontal editorial shelf — bleeds past the container edge, snap-scrolls */}
      <FadeIn delay={0.1}>
        <div
          className="flex gap-5 overflow-x-auto pb-4 pl-5 md:pl-8 lg:pl-[calc((100vw-1160px)/2+60px)] pr-5 snap-x snap-mandatory scroll-px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group shrink-0 w-[280px] sm:w-[320px] snap-start flex flex-col bg-warm-white rounded-2xl p-7"
            >
              <span className="font-jakarta font-extrabold text-teal/15 leading-none mb-4 block" style={{ fontSize: "42px" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="teal">{post.category}</Badge>
                <span className="font-sans text-[11px] text-slate">{post.readTime}</span>
              </div>
              <h3 className="font-jakarta font-bold text-text-dark text-[16px] leading-[1.4] mb-3 group-hover:text-teal transition-colors duration-150">
                {post.title}
              </h3>
              <p className="font-sans text-text-mid text-[13px] leading-[1.65] mb-6 line-clamp-3 flex-1">
                {post.description}
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-black/[0.06]">
                <span className="font-sans text-[11px] text-slate">{formatDate(post.date)}</span>
                <span className="font-jakarta font-bold text-teal text-xs inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                  Leer →
                </span>
              </div>
            </Link>
          ))}
          {/* Trailing spacer so the last card can snap with breathing room */}
          <div className="shrink-0 w-px" aria-hidden="true" />
        </div>
      </FadeIn>
    </section>
  );
}
