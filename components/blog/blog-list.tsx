"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BlogCard } from "./blog-card"
import { getAllBlogPosts } from "@/lib/blog"

export function BlogList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const posts = getAllBlogPosts()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Latest Articles</h2>
          <p className="text-lg text-muted-foreground">
            Sharing knowledge and experiences from the world of development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
