import type { Metadata } from "next"
import { BlogList } from "@/components/blog/blog-list"
import { BlogHero } from "@/components/blog/blog-hero"

export const metadata: Metadata = {
  title: "Blog | John Developer - Full Stack Development Insights",
  description:
    "Explore articles about full stack development, React, Node.js, TypeScript, and modern web technologies. Learn from real-world experiences and best practices.",
  keywords: ["blog", "full stack development", "React", "Node.js", "TypeScript", "web development", "programming"],
  openGraph: {
    title: "Blog | John Developer - Full Stack Development Insights",
    description:
      "Explore articles about full stack development, React, Node.js, TypeScript, and modern web technologies.",
    type: "website",
    url: "https://johndeveloper.dev/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | John Developer - Full Stack Development Insights",
    description:
      "Explore articles about full stack development, React, Node.js, TypeScript, and modern web technologies.",
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <BlogHero />
      <BlogList />
    </main>
  )
}
