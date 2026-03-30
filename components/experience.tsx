"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building2, ChevronDown, ChevronUp } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Devsinc",
    position: "Senior Software Engineer",
    period: "APR 2023 - PRESENT",
    achievements: [
      "Leading software development projects with focus on software architectural design and scalable solutions.",
      "Developing and maintaining full-stack web applications using modern technologies and best practices.",
      "Collaborating with cross-functional teams to deliver high-quality software products on time.",
      "Mentoring junior developers and conducting code reviews to ensure code quality standards.",
      "Implementing responsive web designs and optimizing application performance.",
    ],
  },
  {
    id: 2,
    company: "Lofty Logix",
    position: "Software Engineer",
    period: "APR 2021 - MAR 2023",
    achievements: [
      "Optimized application performance through continuous iteration based on user feedback and analytics, ensuring a seamless and responsive user experience.",
      "Built and maintained web applications using React.js, Next.js and modern frontend technologies.",
      "Developed responsive and user-friendly interfaces following best practices and design patterns.",
      "Collaborated with backend teams to integrate RESTful APIs and ensure smooth data flow.",
      "Participated in agile development processes including sprint planning, daily standups, and retrospectives.",
    ],
  },
]

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Career Path</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-20 md:pl-28 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-10 top-2 w-5 h-5 rounded-full bg-blue-600 border-4 border-black shadow-lg shadow-blue-500/30" />

              <div className="glass-card rounded-xl p-6 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Building2 size={16} className="text-blue-400" />
                      <span className="text-blue-400 font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-gray-300">
                  {(expandedId === exp.id ? exp.achievements : exp.achievements.slice(0, 3)).map(
                    (achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ),
                  )}
                </ul>

                {exp.achievements.length > 3 && (
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    {expandedId === exp.id ? (
                      <>Show Less <ChevronUp size={16} /></>
                    ) : (
                      <>Show More <ChevronDown size={16} /></>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
