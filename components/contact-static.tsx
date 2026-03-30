
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-black to-indigo-950/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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

            {/* Static 3D Element Placeholder */}
            <div className="h-[200px] mt-8 bg-blue-900/20 rounded-lg flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center">
                <span className="text-white text-4xl">✉️</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send Me a Message</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  rows={5}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
