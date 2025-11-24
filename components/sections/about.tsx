"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Users, Code, Rocket } from "lucide-react";
import { experienceData, statsData, personalInfo } from "@/lib/portfolioData";

const iconMap: Record<string, any> = {
  Calendar,
  Code,
  Users,
  Award,
};

const TimelineItem = ({
  experience,
  index,
}: {
  experience: (typeof experienceData)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center mb-12 ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Timeline content */}
      <div
        className={`w-5/12 ${
          index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
        }`}
      >
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6">
              <div
                className={`flex items-center gap-2 mb-2 ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <Badge variant="secondary" className="text-xs">
                  {experience.period}
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {experience.location}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">
                {experience.role}
              </h3>
              <h4 className="text-primary font-medium mb-3">
                {experience.company}
              </h4>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {experience.description}
              </p>

              <div className="mb-4">
                <h5 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Key Achievements
                </h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center">
                      <Rocket className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`flex flex-wrap gap-1 ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
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
  );
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences and
            solving complex problems with innovative solutions
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {statsData.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
                {personalInfo.bio.split("\n\n")[0]}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio.split("\n\n")[1]}
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

            {experienceData.map((experience, index) => (
              <TimelineItem key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
