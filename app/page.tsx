"use client"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import WebProjects from "@/components/web-projects"
import MobileProjects from "@/components/mobile-projects"
import TechnicalPalette from "@/components/technical-palette"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HireMe from "@/components/HireMe"

// Force static generation for the entire page

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <WebProjects />
        <MobileProjects />
        <TechnicalPalette />
        <Skills />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
