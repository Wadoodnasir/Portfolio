"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"
import SimpleFallback from "./simple-fallback"
import { useBrowser } from "@/contexts/browser-context"
import { sendEmail } from "@/app/actions/sendEmail"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const { isHydrated } = useBrowser()

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        setErrorMessage(result.error || "Failed to send message. Please try again later.")
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.")
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section id="contact" className="section-padding py-20 bg-gradient-to-b from-black to-indigo-950/30">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isHydrated && inView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Info */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-gray-400">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <a
                    href="mailto:wadoodnasir4@gmail.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    wadoodnasir4@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <Phone className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <a href="tel:+923034498760" className="text-gray-400 hover:text-blue-400 transition-colors">
                    (+92) 303-4498760
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <Linkedin className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/dev-wadood-nasir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/dev-wadood-nasir/
                  </a>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="h-[200px] mt-8">
              <SimpleFallback>
                <div className="w-full h-full bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📨</div>
                    <p className="text-lg text-blue-300">Let's connect!</p>
                  </div>
                </div>
              </SimpleFallback>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send Me a Message</h3>

            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-center">
                <p className="text-white font-medium">Thank you for your message! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-center">
                    <p className="text-white font-medium">{errorMessage}</p>
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
