import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background with Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-blue-900/20 to-black"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="block">Hi, I'm</span>
          <span className="gradient-text block mt-2">Wadood Nasir</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">Full Stack Developer</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-400">
          Building scalable and performance-optimized web applications with 5+ years of experience
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-700 hover:bg-blue-600 rounded-full font-medium transition-all"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-blue-700 hover:bg-blue-700/20 rounded-full font-medium transition-all"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Static Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="text-white/70 animate-bounce" />
      </div>
    </section>
  )
}
