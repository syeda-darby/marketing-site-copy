import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogFrontmatter } from "./mdx";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as BlogFrontmatter, content };
}

export function getBlogPosts() {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => {
      const { frontmatter } = getBlogBySlug(slug);
      return { slug, ...frontmatter };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}
