export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  category: string
  tags: string[]
  readingTime: number
}

// Mock blog data - in a real app, this would come from a CMS or markdown files
const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications: Best Practices and Patterns",
    excerpt:
      "Learn how to structure and organize large React applications for maintainability and scalability. Explore advanced patterns and architectural decisions.",
    content: `
      <h2>Introduction</h2>
      <p>Building scalable React applications requires careful planning and adherence to best practices. In this article, we'll explore the key principles and patterns that help create maintainable, performant applications.</p>
      
      <h2>Component Architecture</h2>
      <p>A well-structured component hierarchy is the foundation of any scalable React application. We'll discuss how to organize components, manage state effectively, and implement proper separation of concerns.</p>
      
      <h2>State Management</h2>
      <p>Choosing the right state management solution is crucial for scalability. We'll compare different approaches including Context API, Redux, and Zustand, and when to use each.</p>
      
      <h2>Performance Optimization</h2>
      <p>Learn about React's built-in optimization features like React.memo, useMemo, and useCallback, as well as advanced techniques for improving application performance.</p>
      
      <h2>Conclusion</h2>
      <p>By following these patterns and best practices, you'll be able to build React applications that scale effectively and remain maintainable as they grow.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800&text=React+Architecture",
    publishedAt: "2024-01-15",
    category: "React",
    tags: ["React", "Architecture", "Best Practices", "Scalability"],
    readingTime: 8,
  },
  {
    slug: "nodejs-microservices-architecture",
    title: "Node.js Microservices Architecture: A Complete Guide",
    excerpt:
      "Dive deep into microservices architecture with Node.js. Learn how to design, implement, and deploy scalable microservices systems.",
    content: `
      <h2>What are Microservices?</h2>
      <p>Microservices architecture is a method of developing software systems that focuses on building single-function modules with well-defined interfaces and operations.</p>
      
      <h2>Benefits of Microservices</h2>
      <p>Explore the advantages of microservices including scalability, technology diversity, fault isolation, and team autonomy.</p>
      
      <h2>Implementation with Node.js</h2>
      <p>Learn how to implement microservices using Node.js, Express, and modern tools like Docker and Kubernetes for orchestration.</p>
      
      <h2>Communication Patterns</h2>
      <p>Understand different communication patterns between microservices including REST APIs, message queues, and event-driven architecture.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800&text=Node.js+Microservices",
    publishedAt: "2024-01-10",
    category: "Backend",
    tags: ["Node.js", "Microservices", "Architecture", "Docker"],
    readingTime: 12,
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Better Code Quality",
    excerpt:
      "Explore advanced TypeScript patterns and techniques that will help you write more robust, type-safe code and catch errors at compile time.",
    content: `
      <h2>Generic Constraints</h2>
      <p>Learn how to use generic constraints to create more flexible and reusable type definitions while maintaining type safety.</p>
      
      <h2>Conditional Types</h2>
      <p>Discover the power of conditional types and how they can help you create sophisticated type transformations.</p>
      
      <h2>Utility Types</h2>
      <p>Explore TypeScript's built-in utility types and learn how to create your own custom utility types for common patterns.</p>
      
      <h2>Template Literal Types</h2>
      <p>Understand how template literal types can help you create more expressive and type-safe APIs.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800&text=TypeScript+Patterns",
    publishedAt: "2024-01-05",
    category: "TypeScript",
    tags: ["TypeScript", "Patterns", "Type Safety", "Advanced"],
    readingTime: 10,
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques: Grid, Flexbox, and Beyond",
    excerpt:
      "Master modern CSS layout techniques including CSS Grid, Flexbox, and new features like Container Queries and CSS Custom Properties.",
    content: `
      <h2>CSS Grid Layout</h2>
      <p>Learn how to create complex, responsive layouts with CSS Grid. Understand grid containers, grid items, and advanced grid techniques.</p>
      
      <h2>Flexbox Mastery</h2>
      <p>Master Flexbox for one-dimensional layouts. Learn when to use Flexbox vs Grid and how to combine them effectively.</p>
      
      <h2>Container Queries</h2>
      <p>Explore the new Container Queries feature and how it enables truly component-based responsive design.</p>
      
      <h2>CSS Custom Properties</h2>
      <p>Understand how CSS Custom Properties (CSS Variables) can make your stylesheets more maintainable and dynamic.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800&text=Modern+CSS",
    publishedAt: "2023-12-28",
    category: "CSS",
    tags: ["CSS", "Grid", "Flexbox", "Modern Web"],
    readingTime: 7,
  },
  {
    slug: "web-performance-optimization",
    title: "Web Performance Optimization: From 0 to 100 Lighthouse Score",
    excerpt:
      "Learn comprehensive strategies to optimize web performance and achieve perfect Lighthouse scores. Cover everything from loading optimization to runtime performance.",
    content: `
      <h2>Performance Metrics</h2>
      <p>Understand the key performance metrics that matter: LCP, FID, CLS, and how to measure and improve them.</p>
      
      <h2>Loading Optimization</h2>
      <p>Learn techniques for optimizing resource loading including code splitting, lazy loading, and resource prioritization.</p>
      
      <h2>Runtime Performance</h2>
      <p>Discover how to optimize JavaScript execution, reduce main thread blocking, and improve user interaction responsiveness.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implement effective caching strategies using service workers, HTTP caching, and CDN optimization.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800&text=Web+Performance",
    publishedAt: "2023-12-20",
    category: "Performance",
    tags: ["Performance", "Optimization", "Lighthouse", "Web Vitals"],
    readingTime: 15,
  },
  {
    slug: "docker-kubernetes-deployment",
    title: "Docker and Kubernetes: Complete Deployment Guide",
    excerpt:
      "Master containerization and orchestration with Docker and Kubernetes. Learn how to deploy and scale applications in production environments.",
    content: `
      <h2>Docker Fundamentals</h2>
      <p>Learn Docker basics including images, containers, Dockerfiles, and best practices for containerizing applications.</p>
      
      <h2>Kubernetes Architecture</h2>
      <p>Understand Kubernetes architecture, including pods, services, deployments, and how they work together.</p>
      
      <h2>Deployment Strategies</h2>
      <p>Explore different deployment strategies including rolling updates, blue-green deployments, and canary releases.</p>
      
      <h2>Monitoring and Scaling</h2>
      <p>Learn how to monitor your applications and implement auto-scaling based on metrics and demand.</p>
    `,
    coverImage: "/placeholder.svg?height=400&width=800&text=Docker+Kubernetes",
    publishedAt: "2023-12-15",
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "DevOps", "Deployment"],
    readingTime: 13,
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts.find((post) => post.slug === slug) || null
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag))
}
