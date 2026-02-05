"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

interface BlogPostClientProps {
  post: BlogPost;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <main className="relative z-10 px-4 py-32 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 overflow-hidden rounded-[32px] border border-white/10"
        >
          <div className="relative aspect-[21/9] overflow-hidden bg-gradient-to-br from-accent/5 to-accent-secondary/5">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 space-y-6"
        >
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur-md">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {post.content.h1}
          </h1>

          {/* Intro Text (appears right after H1) */}
          {post.content.introText && (
            <div className="space-y-4">
              {Array.isArray(post.content.introText) ? (
                post.content.introText.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                  {post.content.introText}
                </p>
              )}
            </div>
          )}

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          {post.content.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
                {section.h2}
              </h2>

              {/* Render text content (can be string or array of strings) */}
              {section.text && (
                <div className="space-y-4 mb-6">
                  {Array.isArray(section.text) ? (
                    section.text.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                      {section.text}
                    </p>
                  )}
                </div>
              )}

              {/* Render H3 subsections if they exist */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="space-y-8 mt-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="pl-4 border-l-2 border-accent/30">
                      <h3 className="mb-3 text-xl font-semibold text-foreground md:text-2xl">
                        {subsection.h3}
                      </h3>
                      <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                        {subsection.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.section>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-accent/10 via-background/80 to-accent-secondary/10 p-10 backdrop-blur-md">
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-accent/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent-secondary/20 blur-[100px]" />

            <div className="relative z-10 space-y-6 text-center">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Ready to Take Your OnlyFans to the Next Level?
              </h2>
              <p className="mx-auto max-w-xl text-lg text-muted-foreground">
                Join OnlyModels and get access to professional chatters, AI-powered growth strategies, and expert guidance.
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

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-accent/30 hover:bg-white/10"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </main>
  );
}

