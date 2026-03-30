"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useBrowser } from "@/contexts/browser-context"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  index: number;
}

export default function Projects() {
  const { isHydrated } = useBrowser()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Explore some of my recent work showcasing my expertise in building complex applications
        </p>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isHydrated && inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <ProjectCard
            title="PUBLISHING.AI"
            description="AI-powered self-publishing platform helping authors generate and refine full manuscripts, supported by a comprehensive dashboard and automation tooling."
            technologies={["Vue", "TypeScript", "GraphQL", "Webhook", "SSE", "REST", "Node.js", "Nuxt", "Nest", "Express", "Redis", "Pulumi", "Mongodb", "Heroku", "PostgreSQL", "Docker", "Ninja Django", "Apache Airflow", "Github Actions", "Data Dog", "Bull queues", "AWS", "Chargebee"]}
            imageUrl="/publishing.jpg"
            link="https://www.ai.publishing.com/"
            index={0}
          />
          <ProjectCard
            title="INSTANTLY.AI"
            description="Full-stack cold email outreach platform with AI-driven personalization, campaign automation, inbox warm-up, and real-time analytics for B2B engagement."
            technologies={["Next.js", "Redux", "React", "Web socket", "Single Store", "MySQL", "Node.js", "Firebase", "Mongodb", "Fastify", "Node.js", "Redis", "PostgreSQL", "Stripe", "Docker", "MUI"]}
            imageUrl="/instantly.jpg"
            link="https://instantly.ai/"
            index={1}
          />
          <ProjectCard
            title="Podimetrics"
            description="Web dashboard and data pipeline for remote patient monitoring of diabetic foot ulcers using a smart mat device, enabling early detection via heatmaps and trends."
            technologies={["React", "Next.js", "Rest", "GraphQL", "Zustand", "Redux", "Zustand", "Shad cn"]}
            imageUrl="/podimetrics-logo.svg"
            link="https://podimetrics.com/"
            index={2}
          />
          <ProjectCard
            title="INSTANTLY.AI Mobile App"
            description="React Native app for managing email campaigns on-the-go, leveraging OpenAI prompts and WebSockets to personalize messages and track real-time engagement."
            technologies={["React Native", "Expo", "Play Store", "App store", "Redux"]}
            imageUrl="/instantly-mobile.jpg"
            link="https://instantly.ai/"
            index={3}
          />
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, technologies, imageUrl, link, index }: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 group"
    >
      <div className="h-48 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
        <img
          src={imageUrl || "https://via.placeholder.com/600x300"}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-900/30 text-blue-200 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center m-5">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span className="mr-1">Visit</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  )
}
