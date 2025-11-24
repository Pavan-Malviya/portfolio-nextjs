import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
// @ts-ignore: allow side-effect global CSS import
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingElements } from "@/components/floating-elements";
import { PageTransition } from "@/components/page-transition";
import { AnimatedBackground } from "@/components/animated-background";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
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
  authors: [{ name: "Pavan Malviya" }],
  creator: "Pavan Malviya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pavanmalviya.dev",
    title: "Pavan Malviya | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in Node.js, React, Angular, TypeScript, and modern web technologies. Expert in Docker, Kubernetes, and scalable web applications.",
    siteName: "Pavan Malviya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Malviya | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in Node.js, React, Angular, TypeScript, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <AnimatedBackground />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <FloatingElements />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
