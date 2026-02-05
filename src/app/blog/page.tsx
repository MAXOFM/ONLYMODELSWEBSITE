import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogListingClient } from "@/components/blog-listing-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OnlyModels Blog - OnlyFans Creator Growth Strategies & Insights",
  description: "Expert strategies, industry insights, and proven tactics to help OnlyFans creators scale their success. Learn from the top 0.1% of creators.",
  openGraph: {
    title: "OnlyModels Blog - OnlyFans Creator Growth Strategies & Insights",
    description: "Expert strategies, industry insights, and proven tactics to help OnlyFans creators scale their success.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-secondary/30 blur-[220px]" />
      </div>

      <Header />
      <BlogListingClient />
      <Footer />
    </div>
  );
}

