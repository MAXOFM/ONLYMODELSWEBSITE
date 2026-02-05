import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { BlogPostClient } from "@/components/blog-post-client";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Find the blog post by slug
  const post = blogPosts.find((p) => p.url === `/blog/${slug}`);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-secondary/30 blur-[220px]" />
      </div>

      <Header />
      <BlogPostClient post={post} />
      <Footer />
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.url === `/blog/${slug}`);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: ["OnlyModels"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
    },
  };
}

