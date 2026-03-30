"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useBrowser } from "@/contexts/browser-context"
import { Code2, GraduationCap, Layers, Rocket } from "lucide-react"

export default function About() {
  const { isHydrated } = useBrowser()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const show = isHydrated && inView

  return (
    <section id="about" className="py-24 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">Get to know me</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl blur-xl" />
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-blue-500/30 rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-indigo-500/30 rounded-br-2xl" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
                <img
                  src="/Wadood.jpg"
                  alt="Wadood Nasir"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={show ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 shadow-xl"
              >
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-xs text-gray-400 font-medium">Years of<br/>Experience</div>
              </motion.div>

              {/* Projects badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={show ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-4 glass-card rounded-xl p-3 shadow-xl"
              >
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-xs text-gray-400 font-medium">Projects</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-blue-400 font-semibold">Full Stack Developer</span> passionate about
                building web applications that are both powerful and beautiful. With over 5 years of hands-on
                experience, I bring ideas to life through clean, efficient code.
              </p>

              <p>
                Holding a BSCS from <span className="text-blue-400 font-semibold">Lahore Garrison University</span> (Grade A),
                I combine strong academic foundations with real-world expertise across the full development stack.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card rounded-xl p-4 transition-all duration-300">
                <Code2 className="text-blue-400 mb-2" size={22} />
                <h4 className="text-white font-semibold text-sm">Clean Code</h4>
                <p className="text-gray-500 text-xs mt-1">Maintainable & scalable</p>
              </div>
              <div className="glass-card rounded-xl p-4 transition-all duration-300">
                <Rocket className="text-blue-400 mb-2" size={22} />
                <h4 className="text-white font-semibold text-sm">Performance</h4>
                <p className="text-gray-500 text-xs mt-1">Optimized solutions</p>
              </div>
              <div className="glass-card rounded-xl p-4 transition-all duration-300">
                <Layers className="text-blue-400 mb-2" size={22} />
                <h4 className="text-white font-semibold text-sm">Full Stack</h4>
                <p className="text-gray-500 text-xs mt-1">Frontend to backend</p>
              </div>
              <div className="glass-card rounded-xl p-4 transition-all duration-300">
                <GraduationCap className="text-blue-400 mb-2" size={22} />
                <h4 className="text-white font-semibold text-sm">BSCS Grad</h4>
                <p className="text-gray-500 text-xs mt-1">Lahore Garrison Uni</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Let's Connect
              </a>
              <a
                href="#experience"
                className="px-7 py-3 border border-gray-700 hover:border-blue-500/50 rounded-full font-medium transition-all duration-300 hover:bg-blue-500/5"
              >
                My Experience
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
