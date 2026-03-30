
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const androidApps = [
  {
    id: 1,
    title: "SenSights",
    description:
      "SenSights is a cloud-based platform that delivers remote monitoring, personal emergency response & telehealth services for seniors (Safe@Home) along with risk monitoring and screening for seniorcare workers (Safe2Work).",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://play.google.com/store/apps/details?id=com.sensights&hl=en&gl=US",
    platform: "android",
  },
  {
    id: 2,
    title: "GrogerApp - Grocery Delivery",
    description:
      "GrocerApp is Pakistan's leading online grocery store offering same day grocery delivery to your doorstep. Install Grocer App now and get access to biggest online supermarket offering online groceries delivery in Lahore, Islamabad, Rawalpindi & Faisalabad.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://play.google.com/store/apps/details?id=com.barfee.mart",
    platform: "android",
  },
  {
    id: 3,
    title: "DVM Central",
    description:
      "DVM Central Is Your Ultimate Source For Professional Needs In Veterinary Practices. Easily Explore Webinars, and Guides, And Get Updates On Upcoming Conference.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://play.google.com/store/apps/details?id=com.gtechsources.vetandtech.app",
    platform: "android",
  },
]

const iosApps = [
  {
    id: 101,
    title: "SenSights",
    description:
      "SenSights is a cloud-based platform that delivers remote monitoring, personal emergency response & telehealth services for seniors (Safe@Home) along with risk monitoring and screening for seniorcare workers (Safe2Work).",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://apps.apple.com/tt/app/sensights/id1522446657",
    platform: "ios",
  },
  {
    id: 102,
    title: "Nearpeer",
    description:
      "Nearpeer is Pakistan's first largest online learning platform providing students with ease of learning at very reasonable prices. Register today.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://apps.apple.com/ca/app/nearpeer/id1525357562",
    platform: "ios",
  },
  {
    id: 103,
    title: "Udhaar Book - Digi Khata Book",
    description:
      "Udhaar Book is your digital Khatabook, Cashbook, Salary Book, Invoice Maker, and Inventory (Stock) manager. Udhaar Book is the only app you need to run and grow your business.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://apps.apple.com/pk/app/udhaar-book-digi-khata-book/id1542333203",
    platform: "ios",
  },
]

// Combine all apps
const allApps = [...androidApps, ...iosApps]

export default function MobileProjects() {
  return (
    <section id="mobile-projects" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="gradient-text">React Native Applications</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
          A showcase of React Native mobile applications I've developed for Android and iOS platforms.
        </p>

        {/* Static Phone Image */}
        <div className="h-[300px] mb-12 flex items-center justify-center">
          <div className="relative w-48 h-80 bg-gray-800 rounded-3xl border-4 border-gray-700 overflow-hidden">
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-gray-900 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-blue-900/30 flex items-center justify-center">
              <div className="text-white text-xl font-bold">React Native</div>
            </div>
          </div>
        </div>

        {/* Static Platform Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          <div className="px-6 py-2 rounded-full text-sm bg-blue-600 text-white">All</div>
          <div className="px-6 py-2 rounded-full text-sm bg-gray-800 text-gray-300">Android</div>
          <div className="px-6 py-2 rounded-full text-sm bg-gray-800 text-gray-300">iOS</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allApps.map((app) => (
            <div
              key={app.id}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-blue-500/20 flex flex-col h-full hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
