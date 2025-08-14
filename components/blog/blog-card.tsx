"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden group-hover:shadow-lg">
          <div className="relative overflow-hidden">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary/90 text-primary-foreground">{post.category}</Badge>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readingTime} min read
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                <span className="text-sm font-medium mr-1">Read more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
