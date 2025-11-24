"use client";

import type React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { personalInfo, socialLinks } from "@/lib/portfolioData";

const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + currentIndex * 50);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="inline-block w-0.5 h-8 bg-primary ml-1"
      />
    </span>
  );
};

const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0.3, 0.8, 0.3],
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    }}
    className="absolute"
  >
    {children}
  </motion.div>
);

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)]" />

        {/* Floating geometric shapes */}
        <FloatingElement delay={0}>
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl top-20 left-20" />
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="w-24 h-24 rounded-lg bg-gradient-to-r from-accent/15 to-primary/15 blur-lg top-40 right-32 rotate-45" />
        </FloatingElement>
        <FloatingElement delay={4}>
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/25 to-accent/25 blur-md bottom-32 left-40" />
        </FloatingElement>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting with slide-in animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="text-primary font-medium text-lg tracking-wide">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name with typewriter effect */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6"
          >
            <TypewriterText text={personalInfo.name} delay={0} />
          </motion.h1>

          {/* Animated title with gradient text */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Enhanced description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* Enhanced CTA Buttons with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto group relative overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent backdrop-blur-sm border-primary/50 hover:bg-primary/10"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="flex items-center justify-center space-x-6"
          >
            {socialLinks.map(({ icon, name, url }, index) => {
              // Dynamically get icon
              const IconComponent = require("lucide-react")[icon];
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 3.2 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-primary/20 transition-colors duration-300"
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="h-5 w-5" />
                      <span className="sr-only">{name}</span>
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
            Scroll
          </span>
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
