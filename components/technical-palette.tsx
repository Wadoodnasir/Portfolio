"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useBrowser } from "@/contexts/browser-context"
import SimpleFallback from "./simple-fallback"
import { skillPalette } from "./technical-palette-static"

// Define skill categories with their colors


export default function TechnicalPalette() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="technical-palette" className="section-padding py-20 bg-gradient-to-b from-indigo-950/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="gradient-text">My Technical Palette</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          A colorful showcase of my technical expertise across different domains of software development.
        </p>

        {/* Palette Visualization - only visible on larger screens */}
        <div className="hidden md:block min-h-[400px] mb-12">
          <SimpleFallback>
            <div className="w-full h-full bg-gray-900/50 rounded-xl p-6 border border-blue-500/20">
              <div className="flex flex-wrap justify-center gap-6 h-full items-center">
                {skillPalette.map((category, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-full w-[120px] h-[120px] transition-all duration-300 transform hover:scale-110"
                    style={{ backgroundColor: `${category.color}33`, border: `2px solid ${category.color}` }}
                  >
                    <div className="text-3xl mb-1">{category.icon}</div>
                    <div className="text-[12px] font-bold text-center" style={{ color: category.color }}>{category.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </SimpleFallback>
        </div>

        {/* Interactive Palette Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isHydrated && inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillPalette.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className={`rounded-xl overflow-hidden transform transition-all duration-300 ${
                activeCategory === category.name ? "scale-105 shadow-lg shadow-blue-500/20" : ""
              }`}
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div
                className="p-6 h-full flex flex-col"
                style={{
                  background: `linear-gradient(135deg, ${category.color}22, ${category.color}44)`,
                  borderLeft: `4px solid ${category.color}`,
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold" style={{ color: category.color }}>
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor: `${category.color}33`,
                        color: category.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex-1" />
                <div
                  className="w-full h-1 mt-4 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${category.color}88, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Palette Legend */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-200">My Development Philosophy</h3>
          <p className="text-gray-400 mb-6 text-center">
            Just as an artist carefully selects colors from their palette to create a masterpiece, I combine these
            technical skills to craft elegant, efficient, and scalable software solutions that solve real-world
            problems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {skillPalette.map((category, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 rounded-full"
                style={{ backgroundColor: `${category.color}22` }}
              >
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color }} />
                <span className="text-sm font-medium" style={{ color: category.color }}>
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
