"use client";

import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/lib/blog-data";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function BlogListingClient() {
  return (
    <main className="relative z-10 px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-foreground/70 backdrop-blur-md">
            <BookOpen className="h-4 w-4 text-accent" />
            OnlyModels Blog
          </div>
          
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Creator Growth <span className="text-accent">Insights</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Expert strategies, industry insights, and proven tactics to help OnlyFans creators scale their success.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-accent/10 via-background/80 to-accent-secondary/10 p-12 backdrop-blur-md">
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent-secondary/20 blur-[100px]" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Ready to Scale Your OnlyFans?
              </h2>
              <p className="mx-auto max-w-xl text-lg text-muted-foreground">
                Join the top 0.1% of creators. We handle infrastructure, chat, and growth so you can focus on creating.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                <a
                  href="/#apply"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/40"
                >
                  <span className="relative z-10">Apply Now</span>
                  <svg
                    className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
                
                <a
                  href="/#cta"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-accent/30 hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

