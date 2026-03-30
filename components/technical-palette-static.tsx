
export const skillPalette = [
  {
    name: "Frontend",
    color: "#FF5E5B",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "RTK",
      "React Query",
      "SSR",
      "ISR",
      "SSG",
      "Vue",
      "Nuxt",
      "TypeScript",
      "Zustand",
      "Mobx",
      "Preact",
      "PWA",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Reactstrap",
      "Vuetify",
      "Shadcn",
      "Radix UI",
      "Reka UI",
      "Chakra UI",
      "CSS Grid",
      "Flexbox"
    ],
    icon: "🎨",
  },
  {
    name: "Backend",
    color: "#8367C7",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Typescript",
      "Fastify",
      "GraphQL",
      "REST",
      "Webhooks",
      "Bull Queues",
      "Socket.io",
      "Microservices",
      "Event-Driven Architecture",
      "gRPC",
      "SOAP APIs",
      "Appwrite",
      ".NET Core",
      "Entity Framework Core",
      "Dapper"
    ],
    icon: "🏗️",
  },
  {
    name: "Mobile",
    color: "#61DAFB",
    skills: [
      "React Native",
      "Expo",
      "Redux",
      "React Navigation",
      "Native Modules",
      "App Store",
      "Google Play",
      "Formik",
      "Yup"
    ],
    icon: "📱",
  },
  {
    name: "Database",
    color: "#3BB273",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Redis",
      "Prisma",
      "TypeORM",
      "Knex.js",
      "Mongoose",
      "Firestore",
      "Realtime Database",
      "Amazon RDS",
      "Azure SQL Database",
      "Database Replication",
      "Database Sharding"
    ],
    icon: "🗄️",
  },
  {
    name: "DevOps",
    color: "#FFC145",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
      "Pulumi",
      "Heroku",
      "Google Cloud Build",
      "Infrastructure as Code"
    ],
    icon: "⚙️",
  },
  {
    name: "Cloud & Serverless",
    color: "#00B8D9",
    skills: [
      "AWS Lambda",
      "Google Cloud Functions",
      "Firebase Functions",
      "Cloud Run",
      "API Gateway",
      "WebSocket APIs",
      "EventBridge",
      "Cloud Storage",
      "Pub/Sub"
    ],
    icon: "☁️",
  },
  {
    name: "Testing",
    color: "#FF6B6B",
    skills: [
      "Jest",
      "React Testing Library",
      "Supertest",
      "Cypress",
      "Playwright",
      "Vitest",
      "TDD",
      "BDD",
      "xUnit",
      "E2E Testing",
      "Unit Testing",
      "Integration Testing"
    ],
    icon: "🧪",
  },
  {
    name: "Security",
    color: "#2D9CDB",
    skills: [
      "OAuth 2.0",
      "OpenID Connect",
      "JWT",
      "Auth0",
      "Firebase Authentication",
      "SSO",
      "RBAC",
      "SSL/TLS",
      "HTTPS",
      "API Rate Limiting",
      "Data Encryption",
      "Secure Coding Practices"
    ],
    icon: "🔐",
  },
  {
    name: "Real-Time",
    color: "#F2994A",
    skills: [
      "WebSockets",
      "Redis Pub/Sub",
      "GraphQL Subscriptions",
      "MQTT",
      "Kafka",
      "RabbitMQ",
      "ActiveMQ",
      "SignalR",
      "Firebase Realtime Database"
    ],
    icon: "⚡",
  },
  {
    name: "Monitoring & Performance",
    color: "#27AE60",
    skills: [
      "Google Stackdriver",
      "Prometheus",
      "Grafana",
      "Datadog",
      "Load Balancing",
      "Auto-Scaling",
      "CDNs",
      "Caching (Redis/Memcached)",
      "Query Optimization",
      "Database Indexing",
      "Lazy Loading",
      "Image Compression",
      "Asynchronous Programming (.NET)"
    ],
    icon: "📈",
  },
  {
    name: "APIs & Integrations",
    color: "#9B51E0",
    skills: [
      "REST APIs",
      "GraphQL",
      "SOAP",
      "gRPC",
      "Stripe",
      "Twilio",
      "SendGrid",
      "PayPal",
      "Google APIs",
      "AWS SDK",
      "OpenAI",
      "API Gateway Management"
    ],
    icon: "🔌",
  },
  {
    name: "Project & Collaboration",
    color: "#6C5CE7",
    skills: [
      "Jira",
      "Figma",
      "Miro",
      "ClickUp",
      "Slack",
      "Microsoft Teams",
      "Confluence",
      "Zoom"
    ],
    icon: "📋",
  },
  {
    name: "Version Control",
    color: "#34495E",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
    icon: "🔧",
  }
];

export default function TechnicalPalette() {
  return (
    <section id="technical-palette" className="section-padding bg-gradient-to-b from-indigo-950/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="gradient-text">My Technical Palette</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          A colorful showcase of my technical expertise across different domains of software development.
        </p>

        {/* Static Palette Visualization */}
        <div className="hidden md:flex justify-center items-center h-[200px] mb-12 gap-4">
          {skillPalette.map((category, index) => (
            <div
              key={index}
              className="w-24 h-24 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
              style={{ backgroundColor: category.color }}
            >
              {category.icon}
            </div>
          ))}
        </div>

        {/* Static Palette Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillPalette.map((category, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
              style={{
                boxShadow: `0 4px 20px ${category.color}20`,
              }}
            >
              <div
                className="p-6 h-full flex flex-col"
                style={{
                  background: `linear-gradient(135deg, ${category.color}22, ${category.color}44)`,
                  borderLeft: `4px solid ${category.color}`,
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold" style={{ color: category.color }}>
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-2 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor: `${category.color}33`,
                        color: category.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div
                  className="w-full h-1 mt-4 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${category.color}88, transparent)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Palette Legend */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-200">My Development Philosophy</h3>
          <p className="text-gray-400 mb-6 text-center">
            Just as an artist carefully selects colors from their palette to create a masterpiece, I combine these
            technical skills to craft elegant, efficient, and scalable software solutions that solve real-world
            problems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {skillPalette.map((category, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 rounded-full"
                style={{ backgroundColor: `${category.color}22` }}
              >
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color }} />
                <span className="text-sm font-medium" style={{ color: category.color }}>
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
