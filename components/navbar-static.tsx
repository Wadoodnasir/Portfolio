"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Web", href: "#web-projects" },
  { name: "Mobile", href: "#mobile-projects" },
  { name: "Palette", href: "#technical-palette" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          HR
        </Link>

        <div className="hidden md:flex space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="/demo">Three.js Demo</NavLink>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink href="#home" onClick={() => setMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </NavLink>
            <NavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink href="/demo" onClick={() => setMobileMenuOpen(false)}>
              Three.js Demo
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  )
}
