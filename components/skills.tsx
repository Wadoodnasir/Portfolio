"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useBrowser } from "@/contexts/browser-context"
import { skillCategories } from "./skills-static"

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { isHydrated } = useBrowser()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isHydrated && inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.name}
              skills={category.skills}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SkillCategory({ title, skills, index }: SkillCategoryProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, idx) => (
          <li key={idx} className="flex items-center">
            <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
