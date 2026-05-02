import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export const CATEGORIES: Record<string, string> = {
  seo: "SEO",
  "diseno-web": "Diseño Web",
  casos: "Casos",
};

export function categoryToSlug(category: string): string {
  return (
    Object.entries(CATEGORIES).find(([, v]) => v === category)?.[0] ??
    category.toLowerCase().replace(/\s+/g, "-")
  );
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "",
        readTime: data.readTime ?? "",
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostsByCategory(catSlug: string): PostMeta[] {
  const label = CATEGORIES[catSlug];
  if (!label) return [];
  return getAllPosts().filter((p) => p.category === label);
}

export function getActiveCategorySlugs(): string[] {
  const posts = getAllPosts();
  const used = new Set(posts.map((p) => categoryToSlug(p.category)));
  return Object.keys(CATEGORIES).filter((slug) => used.has(slug));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    category: data.category ?? "",
    readTime: data.readTime ?? "",
    content,
  };
}
