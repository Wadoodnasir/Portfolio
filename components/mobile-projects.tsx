"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useBrowser } from "@/contexts/browser-context"

const androidApps = [
  {
    id: 2,
    title: "GrogerApp - Grocery Delivery",
    description:
      "GrocerApp is Pakistan's leading online grocery store offering same day grocery delivery to your doorstep. Install Grocer App now and get access to biggest online supermarket offering online groceries delivery in Lahore, Islamabad, Rawalpindi & Faisalabad.",
    image: "/grocer.png?height=400&width=600",
    link: "https://play.google.com/store/apps/details?id=com.barfee.mart",
    platform: "android",
  },
  {
    id: 3,
    title: "DVM Central",
    description:
      "DVM Central Is Your Ultimate Source For Professional Needs In Veterinary Practices. Easily Explore Webinars, and Guides, And Get Updates On Upcoming Conference.",
    image: "/dvm.png?height=400&width=600",
    link: "https://play.google.com/store/apps/details?id=com.gtechsources.vetandtech.app",
    platform: "android",
  },
  {
    id: 4,
    title: "Nearpeer",
    description:
      "Nearpeer is Pakistan's first largest online learning platform providing students with ease of learning at very reasonable prices. Register today.",
    image: "/nearpeer.png?height=400&width=600",
    link: "https://play.google.com/store/apps/details?id=org.nearpeer.learning",
    platform: "android",
  },
  {
    id: 5,
    title: "Digi khata",
    description:
      "DigiKhata aims to empower MSMEs in Pakistan with reliable & simple business solutions. It helps businesses to record their credits easily on their mobile phone only with a few clicks.",
    image: "/digi-khata.png?height=400&width=600",
    link: "https://play.google.com/store/apps/details?id=com.androidapp.digikhata",
    platform: "android",
  }
]

const iosApps = [
  {
    id: 102,
    title: "Nearpeer",
    description:
      "Nearpeer is Pakistan's first largest online learning platform providing students with ease of learning at very reasonable prices. Register today.",
    image: "/nearpeer.png?height=400&width=600",
    link: "https://apps.apple.com/ca/app/nearpeer/id1525357562",
    platform: "ios",
  },
  {
    id: 103,
    title: "Udhaar Book - Digi Khata Book",
    description:
      "Udhaar Book is your digital Khatabook, Cashbook, Salary Book, Invoice Maker, and Inventory (Stock) manager. Udhaar Book is the only app you need to run and grow your business.",
    image: "/udhara.png?height=400&width=600",
    link: "https://apps.apple.com/pk/app/udhaar-book-digi-khata-book/id1542333203",
    platform: "ios",
  },
  {
    id: 105,
    title: "Free People",
    description:
      "Our better-than-ever app brings the best of Free People to your fingertips! Quickly and easily browse new arrivals, back-in-stock favorites, FP Movement activewear, beauty & wellness, intimates, denim, shoes and more.",
    image: "/free-people.png?height=400&width=600",
    link: "https://apps.apple.com/pk/app/free-people/id659532790",
    platform: "ios",
  },
  {
    id: 106,
    title: "Zbooni",
    description:
      "Thousands of businesses have tapped into a personalised commerce experience using Zbooni. Get set up in minutes, start harnessing the power of real-time conversations with your customers and take your selling game to the next level.",
    image: "/zbooni.png?height=400&width=600",
    link: "https://apps.apple.com/pk/app/zbooni/id1222835796",
    platform: "ios",
  },
]

// Combine all apps
const allApps = [...androidApps, ...iosApps]

export default function MobileProjects() {
  const [platformFilter, setPlatformFilter] = useState("all")
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

  const filteredApps = allApps.filter((app) => {
    if (platformFilter === "all") return true
    return app.platform === platformFilter
  })

  // Don't render anything during SSR
  if (!isHydrated) {
    return (
      <section id="mobile-projects" className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="gradient-text">React Native Applications</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of React Native mobile applications I've developed for Android and iOS platforms.
          </p>
          <div className="py-20 text-center">
            <p className="text-gray-400">Loading mobile projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="mobile-projects" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="gradient-text">React Native Applications</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
          A showcase of React Native mobile applications I've developed for Android and iOS platforms.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setPlatformFilter("all")}
            className={`px-6 py-2 rounded-full text-sm ${
              platformFilter === "all" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setPlatformFilter("android")}
            className={`px-6 py-2 rounded-full text-sm ${
              platformFilter === "android" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
            }`}
          >
            Android
          </button>
          <button
            onClick={() => setPlatformFilter("ios")}
            className={`px-6 py-2 rounded-full text-sm ${
              platformFilter === "ios" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
            }`}
          >
            iOS
          </button>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isHydrated && inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredApps.map((app) => (
            <motion.div
              key={app.id}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="card-hover bg-gray-900/50 rounded-xl overflow-hidden border border-blue-500/20 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <Image src={app.image || "/placeholder.svg"} alt={app.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      app.platform === "android" ? "bg-green-600/70" : "bg-blue-600/70"
                    }`}
                  >
                    {app.platform === "android" ? "Android" : "iOS"}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                <div className="mb-2">
                  <span className="px-3 py-1 bg-blue-900/40 text-blue-300 text-sm rounded-full">React Native</span>
                </div>
                <p className="text-gray-400 mb-4 flex-grow">{app.description}</p>

                <div className="flex justify-end mt-auto">
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="mr-1">View App</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No apps found matching your filter criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
