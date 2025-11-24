/**
 * Centralized Portfolio Data
 * Update all your portfolio information in this single file
 * All components will automatically use this data
 */

// ============================================
// PERSONAL INFO
// ============================================
export const personalInfo = {
  name: "Pavan Malviya",
  title: "Full Stack Developer & Tech Enthusiast",
  description:
    "I build robust, scalable, and modern web applications using Node.js, React, Angular, and TypeScript. Expert in Docker, Kubernetes, and creating exceptional user experiences.",
  email: "hello@pavanmalviya.dev",
  phone: "+91 (XXX) XXX-XXXX",
  location: "India",
  website: "https://pavanmalviya.dev",
  bio: "Hi, I'm Pavan Malviya, a passionate Full Stack Developer with a focus on building robust, scalable, and modern web applications. I specialize in both frontend and backend technologies, with expertise in creating seamless user experiences and efficient server-side solutions.\n\nMy tech stack includes Node.js, Express.js, NestJS, and Next.js for backend development, React and Angular for frontend, and TypeScript and JavaScript for type-safe, maintainable code. I'm also experienced with Docker, Kubernetes, and modern DevOps practices for scalable deployments.",
  shortBio:
    "Passionate about creating exceptional digital experiences and solving complex problems with innovative solutions",
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = [
  {
    name: "GitHub",
    icon: "Github",
    url: "https://github.com/pavanmalviya",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://linkedin.com/in/pavanmalviya",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: "Twitter",
    url: "https://twitter.com/pavanmalviya",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: "Mail",
    url: `mailto:${personalInfo.email}`,
    color: "hover:text-red-500",
  },
];

// ============================================
// SKILLS
// ============================================
export const skillsData = {
  frontend: {
    category: "Frontend",
    icon: "Code",
    skills: [
      { name: "React", level: "Expert", levelPercentage: 95, years: 4 },
      { name: "Angular", level: "Advanced", levelPercentage: 85, years: 3 },
      { name: "Next.js", level: "Expert", levelPercentage: 90, years: 2 },
      { name: "TypeScript", level: "Expert", levelPercentage: 92, years: 3 },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        levelPercentage: 87,
        years: 2,
      },
      {
        name: "Framer Motion",
        level: "Intermediate",
        levelPercentage: 75,
        years: 1,
      },
      { name: "HTML/CSS", level: "Expert", levelPercentage: 98, years: 5 },
      { name: "JavaScript", level: "Expert", levelPercentage: 96, years: 5 },
    ],
  },
  backend: {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Expert", levelPercentage: 94, years: 4 },
      { name: "Express.js", level: "Expert", levelPercentage: 92, years: 4 },
      { name: "NestJS", level: "Advanced", levelPercentage: 85, years: 2 },
      { name: "PostgreSQL", level: "Advanced", levelPercentage: 88, years: 3 },
      { name: "MongoDB", level: "Intermediate", levelPercentage: 72, years: 2 },
      { name: "REST APIs", level: "Expert", levelPercentage: 95, years: 4 },
      { name: "GraphQL", level: "Intermediate", levelPercentage: 65, years: 1 },
      {
        name: "Authentication",
        level: "Advanced",
        levelPercentage: 85,
        years: 3,
      },
    ],
  },
  devops: {
    category: "DevOps & Tools",
    icon: "Zap",
    skills: [
      { name: "Docker", level: "Advanced", levelPercentage: 88, years: 2 },
      {
        name: "Kubernetes",
        level: "Intermediate",
        levelPercentage: 70,
        years: 1,
      },
      {
        name: "GitHub Actions",
        level: "Advanced",
        levelPercentage: 85,
        years: 2,
      },
      { name: "AWS", level: "Intermediate", levelPercentage: 72, years: 1 },
      { name: "Git", level: "Expert", levelPercentage: 98, years: 5 },
      { name: "Linux", level: "Advanced", levelPercentage: 82, years: 3 },
      { name: "CI/CD", level: "Advanced", levelPercentage: 86, years: 2 },
      { name: "Nginx", level: "Intermediate", levelPercentage: 70, years: 1 },
    ],
  },
};

// ============================================
// EXPERIENCE
// ============================================
export const experienceData = [
  {
    company: "Smartedge Pvt. Ltd.",
    role: "Associate Developer",
    period: "May 2025 - Present",
    location: "Pune, India",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting microservices solutions.",
    achievements: [
      "Increased app performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipelines",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
  },
  {
    company: "Codestrela Technologies Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "April 2023 - May 2024",
    location: "Remote",
    description:
      "Built MVP from scratch using modern web technologies. Collaborated with design team to create intuitive user interfaces and robust backend systems.",
    achievements: [
      "Delivered MVP in 6 months",
      "Reduced load times by 60%",
      "Integrated 10+ third-party APIs",
    ],
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Redis"],
  },
  {
    company: "WebDev Agency",
    role: "Frontend Developer",
    period: "2019 - 2020",
    location: "New York, NY",
    description:
      "Developed responsive web applications for various clients. Focused on creating pixel-perfect designs and smooth user experiences.",
    achievements: [
      "Completed 20+ client projects",
      "Improved client satisfaction by 35%",
      "Mentored 3 interns",
    ],
    technologies: ["React", "Vue.js", "SASS", "JavaScript"],
  },
];

// ============================================
// STATISTICS
// ============================================
export const statsData = [
  { label: "Years Experience", value: "5+", icon: "Calendar" },
  { label: "Projects Completed", value: "50+", icon: "Code" },
  { label: "Happy Clients", value: "30+", icon: "Users" },
  { label: "Awards Won", value: "8", icon: "Award" },
];

// ============================================
// PROJECTS
// ============================================
export const projectsData = [
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
    highlights: [
      "Real-time inventory",
      "Payment integration",
      "Admin dashboard",
      "Mobile responsive",
    ],
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
    highlights: [
      "Real-time collaboration",
      "Drag & drop interface",
      "Team management",
      "Progress tracking",
    ],
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
    highlights: [
      "Microservices architecture",
      "Rate limiting",
      "Authentication",
      "Monitoring",
    ],
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
    highlights: [
      "Biometric auth",
      "Real-time notifications",
      "Transaction history",
      "Secure payments",
    ],
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
    highlights: [
      "Real-time data",
      "Custom reports",
      "Interactive charts",
      "Export functionality",
    ],
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
    highlights: [
      "Automated deployment",
      "Infrastructure as code",
      "Monitoring",
      "Auto-scaling",
    ],
  },
];

// ============================================
// NAVIGATION ITEMS
// ============================================
export const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

// ============================================
// CONTACT INFO
// ============================================
export const contactInfo = [
  {
    icon: "Mail",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: "Phone",
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: "MapPin",
    label: "Location",
    value: personalInfo.location,
    href: "https://maps.google.com/?q=India",
  },
];

// ============================================
// SEO & METADATA
// ============================================
export const seoData = {
  siteUrl: "https://pavanmalviya.dev",
  title: "Pavan Malviya | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in Node.js, React, Angular, TypeScript, and modern web technologies. Expert in Docker, Kubernetes, and scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Angular",
    "Node.js",
    "TypeScript",
    "Next.js",
    "NestJS",
    "Docker",
    "Kubernetes",
    "Portfolio",
  ],
  author: personalInfo.name,
  twitterHandle: "@pavanmalviya",
};

// ============================================
// STRUCTURED DATA
// ============================================
export const structuredData = {
  person: {
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: seoData.siteUrl,
    sameAs: socialLinks.map((link) => link.url),
    knowsAbout: [
      "React",
      "Angular",
      "Node.js",
      "TypeScript",
      "Next.js",
      "NestJS",
      "Docker",
      "Kubernetes",
      "Full Stack Development",
      "Web Development",
    ],
  },
  website: {
    name: "Pavan Malviya Portfolio",
    url: seoData.siteUrl,
    description: seoData.description,
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
  },
};
