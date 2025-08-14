import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/seo/structured-data"

export default function HomePage() {
  const personStructuredData = {
    name: "Pavan Malviya",
    jobTitle: "Full Stack Developer",
    url: "https://pavanmalviya.dev",
    sameAs: [
      "https://github.com/pavanmalviya",
      "https://linkedin.com/in/pavanmalviya",
      "https://twitter.com/pavanmalviya",
    ],
    knowsAbout: ["React", "Angular", "Node.js", "TypeScript", "Next.js", "NestJS", "Docker", "Kubernetes", "Full Stack Development", "Web Development"],
  }

  const websiteStructuredData = {
    name: "Pavan Malviya Portfolio",
    url: "https://pavanmalviya.dev",
    description: "Full Stack Developer specializing in React, Angular, Node.js, TypeScript, Docker, and Kubernetes",
    author: {
      "@type": "Person",
      name: "Pavan Malviya",
    },
  }

  return (
    <>
      <StructuredData type="Person" data={personStructuredData} />
      <StructuredData type="WebSite" data={websiteStructuredData} />
      <main className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
