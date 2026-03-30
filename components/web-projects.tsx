
import Image from "next/image"
import { ExternalLink } from "lucide-react"

// Remove "use client" directive to make this a server component

// Projects data
const webProjects = [
  {
    id: 1,
    title: "Digbi Health",
    description:
      "Move beyond Point Solutions to Holistic Care informed by Gut Microbiome, CGM, and Genetics. We use genetic, gut microbiome, food, lifestyle, and clinical signals to target the root cause of illness.",
    image: "/digibi.png?height=400&width=600",
    link: "https://digbihealth.com/",
  },
  {
    id: 2,
    title: "Staples",
    description:
      "We eliminate the need for direct contact, as our delivery drivers will leave your package at the front door after the driver knocks or rings your doorbell. If a signature is needed, the driver will step 6 feet back and wait for you to sign for your package before returning to their vehicle.",
    image: "/staples.png?height=400&width=600",
    link: "https://www.staples.ca/a/content/free-shipping",
  },
  {
    id: 3,
    title: "QFC",
    description:
      "We are a leading onshore business and financial centre located in Doha, welcoming international and domestic companies to become registered QFC entities. QFC aims to promote Qatar as a major business and commercial hub at the crossroads between East and West.",
    image: "/qfc.png?height=400&width=600",
    link: "https://www.qfc.qa/en",
  },
  {
    id: 4,
    title: "Joey Joey",
    description:
      "One-click RSVP to group hangouts, classes and adventures nearby. Have other ideas? Host your own and we can help rally a fun crowd. Remember when friends were just a block away? We recreate that magic, turning your classmates from yoga into your go-to crew for impromtu dinners and bad jokes.",
    image: "/joey.png?height=400&width=600",
    link: "https://www.joeyjoey.co/",
  },
  {
    id: 5,
    title: "Aire Health",
    description:
      "AIRE Skinstor Allowing Dermatologists to conduct real-time research studies and patient outcome analysis to foster health care breakthroughs. AIRE EDU is skincare sampling platform for Residents where they can learn about new products, research studies, and obtain free samples throughout the year.",
    image: "/aire.png?height=400&width=600",
    link: "https://airehealth.com/",
  },
  {
    id: 6,
    title: "Vet and Tech",
    description:
      "VetAndTech Is Your Ultimate Source For Educational And Professional Needs In Veterinary Practices. Easily Explore Veterinary Educational Resources, Access CE Courses, Webinars, and Guides, And Get Updates On Upcoming Conference.",
    image: "/vet.png?height=400&width=600",
    link: "https://www.vetandtech.com/",
  },
  {
    id: 7,
    title: "Equip-bid",
    description:
      "Equip-Bid Auctions is your full-service online auction company that offers an array of products and services- ranging from business liquidations to antiques and restaurant equipment. Sign up now to create and add new auctions and get optimum value for personal and commercial property.",
    image: "/equip-bid.png?height=400&width=600",
    link: "https://equipbid.biz/",
  },
  {
    id: 8,
    title: "MCG(MyCareGorithm)",
    description:
      "MyCareGorithm was created with the singular purpose of developing the tools to transform the consultation encounter between a cancer patient and a cancer specialist. Intent is to replace the status quo with a multimedia, educational, impactful, personalized, and visually impressive experience.",
    image: "/mcg.png?height=400&width=600",
    link: "https://picswagger.com/",
  },
  {
    id: 9,
    title: "Telus",
    description:
      "Everything you need is in the My TELUS app. Manage your services anywhere, anytime. Pay your bill, check your usage, change your plan, stay on top of your account and more with the My TELUS app.",
    image: "/telus.png?height=400&width=600",
    link: "https://www.telus.com/en",
  },
]

export default function WebProjects() {
  return (
    <section id="web-projects" className="section-padding bg-gradient-to-b from-black to-indigo-950/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="gradient-text">Web Projects</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          A collection of web applications and websites I've developed throughout my career.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-blue-500/20 flex flex-col h-full hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                <div className="flex justify-end mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="mr-1">Visit Website</span>
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
