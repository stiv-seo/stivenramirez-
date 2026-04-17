import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

const categoryVariant: Record<string, "teal" | "amber"> = {
  "Diseño Web": "teal",
  "E-commerce": "amber",
  "SEO": "teal",
};

export function BlogGrid() {
  const posts = getAllPosts();
  return (
    <section
      className="bg-off-white"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Container>
        {/* Featured post — first item */}
        <FadeIn className="mb-8">
          <a
            href={`/blog/${posts[0].slug}/`}
            className="group block bg-warm-white rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            aria-label={`Leer: ${posts[0].title}`}
          >
            <div className="grid md:grid-cols-[1fr_420px]">
              {/* Image placeholder */}
              <div
                className="relative bg-midnight flex items-center justify-center min-h-[160px] md:min-h-[260px]"
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 50%, #00C4B4 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative text-center px-8">
                  <Badge variant={categoryVariant[posts[0].category] ?? "teal"} className="mb-4">
                    {posts[0].category}
                  </Badge>
                  <p className="font-sans text-xs text-slate">Imagen del artículo</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant={categoryVariant[posts[0].category] ?? "teal"}>
                    {posts[0].category}
                  </Badge>
                  <span className="font-sans text-xs text-slate">
                    {posts[0].readTime} lectura
                  </span>
                </div>
                <h2 className="font-jakarta font-extrabold text-text-dark text-[22px] leading-tight mb-3 group-hover:text-teal transition-colors duration-150">
                  {posts[0].title}
                </h2>
                <p className="font-sans text-text-mid text-sm leading-[1.75] mb-6">
                  {posts[0].description}
                </p>
                <div className="flex items-center justify-between">
                  <time
                    dateTime={posts[0].date}
                    className="font-sans text-xs text-slate"
                  >
                    {formatDate(posts[0].date)}
                  </time>
                  <span className="font-jakarta font-bold text-sm text-teal group-hover:translate-x-1 transition-transform duration-150">
                    Leer artículo →
                  </span>
                </div>
              </div>
            </div>
          </a>
        </FadeIn>

        {/* Remaining posts grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.slice(1).map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <a
                href={`/blog/${post.slug}/`}
                className="group block bg-warm-white rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                aria-label={`Leer: ${post.title}`}
              >
                {/* Image placeholder */}
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
                    <span className="font-sans text-xs text-slate">
                      {post.readTime} lectura
                    </span>
                  </div>
                  <h3 className="font-jakarta font-bold text-text-dark text-[18px] leading-tight mb-2 group-hover:text-teal transition-colors duration-150">
                    {post.title}
                  </h3>
                  <p className="font-sans text-text-mid text-sm leading-[1.7] mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="font-sans text-xs text-slate"
                    >
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

        {/* More posts note */}
        <FadeIn delay={0.25} className="mt-10 text-center">
          <p className="font-sans text-sm text-slate">
            Más artículos en camino.{" "}
            <a href="/contacto/" className="text-teal underline underline-offset-2 hover:no-underline">
              ¿Hay un tema que quieres que cubra?
            </a>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
