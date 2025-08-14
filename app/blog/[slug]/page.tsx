import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog/blog-post"
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | John Developer Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "John Developer" }],
    publishedTime: post.publishedAt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["John Developer"],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <BlogPost post={post} />
    </main>
  )
}
