import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://servinix.com";

  const staticPages = [
    "",
    "/product",
    "/gps-tracking",
    "/field-service",
    "/field-service/get-noticed",
    "/field-service/get-paid",
    "/ai-employee",
    "/ai-assistant",
    "/reviews",
    "/phones",
    "/text-marketing",
    "/industries",
    "/pricing",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
