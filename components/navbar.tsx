"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useBrowserEvent } from "@/hooks/use-browser-event"
import { useBrowser } from "@/contexts/browser-context"

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
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isHydrated } = useBrowser()

  // Use our custom hook to safely add scroll event listener
  useBrowserEvent(
    "scroll",
    () => {
      setScrolled(window.scrollY > 50)
    },
    undefined,
    [],
  )

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isHydrated && scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold gradient-text">
          Wadood Nasir
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white hover:underline decoration-blue-500 decoration-2 underline-offset-8 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-3 text-gray-300 hover:text-white border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
