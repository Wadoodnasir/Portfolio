
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Instantly.ai",
    description:
      "A B2B CRM focused on optimizing cold email outreach by combining lead management, campaign automation, and performance analytics with a strong emphasis on email warm-up and deliverability.",
    image: "/images/instantly.png",
    link: "https://instantly.ai/",
    technologies: ["React", "Node.js", "GCP", "Firebase", "Redis"],
  },
  {
    id: 2,
    title: "Publishing.ai",
    description:
      "A comprehensive self-publishing platform that leverages generative AI to assist authors, notably by generating full book manuscripts, alongside offering educational courses, coaching, and marketing tools.",
    image: "/images/publishing.png",
    link: "https://www.ai.publishing.com/",
    technologies: ["Next.js", "TypeScript", "OpenAI", "AWS", "MongoDB"],
  },
  {
    id: 3,
    title: "Podimetrics",
    description:
      "Advanced technology designed specifically to address the prevention of diabetic foot ulcers, a critical complication of diabetes that can lead to amputation.",
    image: "/images/podimetrics.png",
    link: "https://podimetrics.com/",
    technologies: ["React", "Express", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    id: 4,
    title: "AIM FIT",
    description:
      "A fitness app that offers personalized workout plans, nutrition tracking, and real-time coaching to help users achieve their fitness goals.",
    image: "/images/aimfit.png",
    link: "#",
    technologies: ["React Native", "Node.js", "Firebase", "Redux", "GraphQL"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-indigo-950/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on throughout my career. Each project represents unique challenges
          and solutions.
        </p>

        {/* Static Laptop Image */}
        <div className="h-[300px] mb-16 flex items-center justify-center">
          <div className="relative w-64 h-48">
            <div className="absolute bottom-0 w-64 h-8 bg-gray-800 rounded-b-lg"></div>
            <div className="absolute bottom-8 w-64 h-40 bg-gray-700 rounded-t-lg transform origin-bottom perspective-800 rotate-x-10">
              <div className="absolute inset-1 bg-blue-900/50 rounded-t-md flex items-center justify-center">
                <div className="text-white text-xl font-bold">Portfolio</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-blue-500/20 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-900/40 text-blue-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="mr-1">Visit</span>
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
