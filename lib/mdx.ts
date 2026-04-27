import { compileMDX } from "next-mdx-remote/rsc";

export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  author: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  featuredImage?: string;
}

export async function parseMDX(source: string) {
  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return { content, frontmatter };
}
