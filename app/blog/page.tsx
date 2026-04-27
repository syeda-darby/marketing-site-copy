import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, guides, and best practices for field service businesses.",
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  if (posts.length === 0) {
    return (
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <h1 className="font-heading text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground">No posts yet. Check back soon!</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-20 lg:px-8">
      <h1 className="font-heading text-4xl font-bold mb-12">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border border-border/50 p-6 hover:border-primary/30 hover:shadow-lg transition-all"
          >
            {post.featuredImage && (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <p className="text-xs text-muted-foreground mb-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h2 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            {post.metaDescription && (
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {post.metaDescription}
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
