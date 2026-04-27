import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog";
import { parseMDX } from "@/lib/mdx";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getBlogBySlug(slug);
    return {
      title: frontmatter.metaTitle || frontmatter.title,
      description: frontmatter.metaDescription,
      openGraph: {
        title: frontmatter.metaTitle || frontmatter.title,
        description: frontmatter.metaDescription,
        images: frontmatter.featuredImage ? [frontmatter.featuredImage] : [],
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getBlogBySlug(slug);
  } catch {
    notFound();
  }

  const { content } = await parseMDX(post.content);
  const { frontmatter } = post;

  return (
    <article className="container mx-auto px-4 py-20 lg:px-8 max-w-3xl">
      <header className="mb-12">
        {frontmatter.featuredImage && (
          <img
            src={frontmatter.featuredImage}
            alt={frontmatter.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
        )}
        <p className="text-sm text-muted-foreground mb-2">
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {frontmatter.author && ` · ${frontmatter.author}`}
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
          {frontmatter.title}
        </h1>
        {frontmatter.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-lg max-w-none prose-headings:font-heading prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
        {content}
      </div>
    </article>
  );
}
