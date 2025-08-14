"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react"
import type { BlogPost as BlogPostType } from "@/lib/blog"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <article className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="group">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.header
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="mb-6">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-border">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readingTime} min read
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Article
              </div>
            </div>

            <Button variant="outline" size="sm" className="group bg-transparent">
              <Share2 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Share
            </Button>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 sm:h-96 object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-border pt-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="hover:bg-primary/10 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </article>
  )
}
