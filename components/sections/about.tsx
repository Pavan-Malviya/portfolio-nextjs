"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, Users, Code, Rocket } from "lucide-react"

const experiences = [
  {
    company: "TechCorp Solutions",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting microservices solutions.",
    achievements: ["Increased app performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipelines"],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    location: "Remote",
    description:
      "Built MVP from scratch using modern web technologies. Collaborated with design team to create intuitive user interfaces and robust backend systems.",
    achievements: ["Delivered MVP in 6 months", "Reduced load times by 60%", "Integrated 10+ third-party APIs"],
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Redis"],
  },
  {
    company: "WebDev Agency",
    role: "Frontend Developer",
    period: "2019 - 2020",
    location: "New York, NY",
    description:
      "Developed responsive web applications for various clients. Focused on creating pixel-perfect designs and smooth user experiences.",
    achievements: ["Completed 20+ client projects", "Improved client satisfaction by 35%", "Mentored 3 interns"],
    technologies: ["React", "Vue.js", "SASS", "JavaScript"],
  },
]

const stats = [
  { label: "Years Experience", value: "5+", icon: Calendar },
  { label: "Projects Completed", value: "50+", icon: Code },
  { label: "Happy Clients", value: "30+", icon: Users },
  { label: "Awards Won", value: "8", icon: Award },
]

const TimelineItem = ({ experience, index }: { experience: (typeof experiences)[0]; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Timeline content */}
      <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                <Badge variant="secondary" className="text-xs">
                  {experience.period}
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {experience.location}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">{experience.role}</h3>
              <h4 className="text-primary font-medium mb-3">{experience.company}</h4>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

              <div className="mb-4">
                <h5 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Key Achievements</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center">
                      <Rocket className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`flex flex-wrap gap-1 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Timeline center dot */}
      <div className="w-2/12 flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
          className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg relative z-10"
        />
      </div>

      {/* Empty space for alternating layout */}
      <div className="w-5/12" />
    </motion.div>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences and solving complex problems with innovative
            solutions
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hi, I'm Pavan Malviya, a passionate Full Stack Developer with a focus on building robust, scalable, and modern web applications. I specialize in both frontend and backend technologies, with expertise in creating seamless user experiences and efficient server-side solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My tech stack includes Node.js, Express.js, NestJS, and Next.js for backend development, React and Angular for frontend, and TypeScript and JavaScript for type-safe, maintainable code. I'm also experienced with Docker, Kubernetes, and modern DevOps practices for scalable deployments.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl font-serif font-bold text-center text-foreground mb-12"
          >
            Professional Journey
          </motion.h3>

          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

            {experiences.map((experience, index) => (
              <TimelineItem key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
