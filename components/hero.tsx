"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useBrowser } from "@/contexts/browser-context"

export default function Hero() {
  const { isHydrated } = useBrowser()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl animate-glow" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl animate-glow" style={{ animationDelay: "3s" }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
            >
              Available for Freelance Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Wadood Nasir</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Full Stack Developer crafting scalable, high-performance web applications with{" "}
              <span className="text-white font-medium">5+ years</span> of experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#contact"
                className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get in Touch
                <ArrowDown size={16} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-8 py-3.5 border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/5 rounded-full font-medium transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a href="https://github.com/Wadoodnasir" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dev-wadood-nasir/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:wadoodnasir4@gmail.com" className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-2xl animate-glow" />
              {/* Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/10">
                <img
                  src="/Wadood.jpg"
                  alt="Wadood Nasir"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-blue-600 to-indigo-700 px-4 py-2 rounded-full shadow-lg text-sm font-semibold animate-float">
                Full Stack Dev
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {isHydrated && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} className="text-gray-500 animate-bounce" />
          </motion.div>
        </div>
      )}
    </section>
  )
}
