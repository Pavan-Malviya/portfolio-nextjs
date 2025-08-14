"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Smartphone, Cloud, Server, Layout } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Angular", level: 85, icon: "🅰️" },
      { name: "TypeScript", level: 88, icon: "🔷" },
      { name: "JavaScript", level: 92, icon: "🟨" },
      { name: "HTML/CSS", level: 95, icon: "🌐" },
      { name: "Tailwind CSS", level: 87, icon: "🎨" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 93, icon: "🟢" },
      { name: "Express.js", level: 90, icon: "🚀" },
      { name: "NestJS", level: 85, icon: "🔴" },
      { name: "Next.js", level: 88, icon: "▲" },
      { name: "PostgreSQL", level: 82, icon: "🐘" },
      { name: "MongoDB", level: 80, icon: "🍃" },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Docker", level: 88, icon: "🐳" },
      { name: "Kubernetes", level: 78, icon: "☸️" },
      { name: "Docker Compose", level: 90, icon: "🐙" },
      { name: "Git", level: 95, icon: "📝" },
      { name: "CI/CD", level: 85, icon: "🔄" },
      { name: "GitHub", level: 92, icon: "🐱" },
    ],
  },
  {
    name: "Database & APIs",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "SQLite", level: 85, icon: "💾" },
      { name: "REST APIs", level: 93, icon: "🌐" },
      { name: "GraphQL", level: 75, icon: "🔗" },
      { name: "Testing (Jest)", level: 82, icon: "🧪" },
      { name: "Postman", level: 88, icon: "📮" },
      { name: "VS Code", level: 95, icon: "💻" },
    ],
  },
]

const SkillBar = ({ skill, index, isVisible }: { skill: any; index: number; isVisible: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
      </div>
      <div className="relative">
        <Progress value={0} className="h-2 bg-muted" />
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ category, index }: { category: any; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
              <category.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
          </div>

          <div className="space-y-4">
            {category.skills.map((skill: any, skillIndex: number) => (
              <SkillBar key={skill.name} skill={skill} index={skillIndex} isVisible={isInView} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Vercel",
              "Render",
              "Docker Hub",
              "Supertest",
              "Socket.io",
              "Webpack",
              "Vite",
              "ESLint",
              "Prettier",
              "Nodemon",
              "PM2",
              "Nginx",
              "Redis",
              "JWT",
              "Bcrypt",
              "Multer",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="outline" className="text-sm py-1 px-3 hover:bg-primary/10 transition-colors">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
