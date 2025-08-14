"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    category: "Full Stack",
    featured: true,
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    highlights: ["Real-time inventory", "Payment integration", "Admin dashboard", "Mobile responsive"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    image: "/task-management-app.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    category: "Frontend",
    featured: true,
    liveUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/example/tasks",
    highlights: ["Real-time collaboration", "Drag & drop interface", "Team management", "Progress tracking"],
  },
  {
    id: 3,
    title: "API Gateway Service",
    description:
      "A scalable microservices API gateway with authentication, rate limiting, and monitoring capabilities. Deployed using Docker and Kubernetes.",
    image: "/api-gateway-architecture.png",
    technologies: ["NestJS", "Redis", "Docker", "Kubernetes", "MongoDB"],
    category: "Backend",
    featured: false,
    githubUrl: "https://github.com/example/api-gateway",
    highlights: ["Microservices architecture", "Rate limiting", "Authentication", "Monitoring"],
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
    image: "/mobile-banking-app.png",
    technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
    category: "Mobile",
    featured: false,
    liveUrl: "https://banking.example.com",
    githubUrl: "https://github.com/example/banking",
    highlights: ["Biometric auth", "Real-time notifications", "Transaction history", "Secure payments"],
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts for business intelligence.",
    image: "/analytics-dashboard.png",
    technologies: ["React", "D3.js", "Express.js", "PostgreSQL"],
    category: "Frontend",
    featured: false,
    liveUrl: "https://analytics.example.com",
    githubUrl: "https://github.com/example/analytics",
    highlights: ["Real-time data", "Custom reports", "Interactive charts", "Export functionality"],
  },
  {
    id: 6,
    title: "DevOps Pipeline",
    description:
      "Automated CI/CD pipeline with testing, deployment, and monitoring. Includes infrastructure as code and automated scaling.",
    image: "/devops-pipeline-diagram.png",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "AWS"],
    category: "DevOps",
    featured: false,
    githubUrl: "https://github.com/example/devops",
    highlights: ["Automated deployment", "Infrastructure as code", "Monitoring", "Auto-scaling"],
  },
]

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile", "DevOps"]

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group ${project.featured ? "md:col-span-2" : ""}`}
    >
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
        <div className="relative overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.liveUrl && (
              <Button size="sm" variant="secondary" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            <Button size="sm" variant="secondary" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
          )}
        </div>

        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <Badge variant="outline">{project.category}</Badge>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
            <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
              {project.highlights.map((highlight: string) => (
                <div key={highlight} className="flex items-center">
                  <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category))
    }
  }

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className="transition-all duration-200"
              >
                {category === "All" && <Filter className="h-4 w-4 mr-2" />}
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="bg-transparent backdrop-blur-sm">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
