export const skillCategories = [
  {
    name: "Backend Technologies",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "TypeScript",
      "Fastify.js",
      "GraphQL",
      "REST",
      "Webhooks",
      "Bull Queues",
      "Socket.io",
      "Microservice Architecture",
      "Event-Driven Architecture",
      "gRPC",
      "SOAP APIs",
    ],
  },
  {
    name: "Serverless Technologies",
    skills: [
      "Google Cloud Functions",
      "Firebase Functions",
      "Cloud Run",
      "AWS Lambda",
      "API Gateway",
      "WebSocket APIs",
      "EventBridge",
      "Firebase Hosting",
    ],
  },
  {
    name: "Real-Time & Messaging",
    skills: [
      "WebSockets",
      "Firebase Realtime Database",
      "Redis Pub/Sub",
      "GraphQL Subscriptions",
      "MQTT",
      "Kafka",
      "RabbitMQ",
      "ActiveMQ",
      "SignalR (.NET)",
    ],
  },
  {
    name: "Frontend Technologies",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Redux",
      "RTK (Redux Toolkit)",
      "React Query",
      "Zustand",
      "MobX",
      "Preact",
      "TypeScript",
      "PWA (Progressive Web Apps)",
      "SSR (Server-Side Rendering)",
      "ISR (Incremental Static Regeneration)",
      "SSG (Static Site Generation)",
    ],
  },
  {
    name: "UI Libraries & Styling",
    skills: [
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
      "Reactstrap",
      "Vuetify",
      "Shadcn",
      "Reka UI",
      "Radix UI",
      "Chakra UI",
      "CSS Grid",
      "Flexbox",
    ],
  },
  {
    name: "Testing & Quality Assurance",
    skills: [
      "Jest",
      "Supertest",
      "Vitest",
      "Cypress",
      "xUnit",
      "Test-Driven Development (TDD)",
      "Behavior-Driven Development (BDD)",
      "End-to-End Testing (E2E)",
      "Unit Testing",
      "Integration Testing",
      "Continuous Integration (CI)",
    ],
  },
  {
    name: "Database & ORM",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase Firestore",
      "Firebase Realtime Database",
      "Appwrite",
      "Amazon RDS",
      "Azure SQL Database",
      "TypeORM",
      "Mongoose (ODM)",
      "Prisma",
      "Knex.js",
      "Entity Framework Core",
      "Dapper",
      "Database Replication & Sharding",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS (S3, Lambda, RDS, EC2, CloudFront, API Gateway, IAM)",
      "Google Cloud Platform (GCP)",
      "Firebase",
      "Heroku",
      "Terraform",
      "Pulumi",
      "GitHub Actions",
      "Google Cloud Build",
      "Docker",
      "Kubernetes",
      "Infrastructure as Code (IaC)",
      "Automated Testing & Deployment",
    ],
  },
  {
    name: "Security & Authentication",
    skills: [
      "OAuth 2.0",
      "OpenID Connect",
      "JWT (JSON Web Tokens)",
      "Firebase Authentication",
      "Auth0",
      "Single Sign-On (SSO)",
      "Role-Based Access Control (RBAC)",
      "HTTPS / SSL / TLS",
      "API Rate Limiting",
      "Secure Coding Practices",
      "Data Encryption",
    ],
  },
  {
    name: "Monitoring & Logging",
    skills: [
      "Google Stackdriver",
      "Prometheus",
      "Grafana",
      "DataDog (DD)",
    ],
  },
  {
    name: "APIs & Integrations",
    skills: [
      "RESTful APIs",
      "GraphQL APIs",
      "gRPC",
      "Stripe",
      "Twilio",
      "SendGrid",
      "PayPal",
      "Google APIs",
      "AWS SDK",
      "OpenAI API",
      "Third-Party API Integration",
      "API Rate Limiting",
    ],
  },
  {
    name: "Performance & Scalability",
    skills: [
      "Caching (Redis, Memcached)",
      "Load Balancing",
      "Horizontal & Vertical Scaling",
      "Auto-Scaling",
      "Content Delivery Networks (CDNs)",
      "Asset Optimization (Lazy Loading, Image Compression)",
      "Query Optimization",
      "Database Indexing & Tuning",
      "Asynchronous Programming (.NET async/await, TPL)",
    ],
  },
  {
    name: "Project & Version Control",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Jira",
      "Figma",
      "Miro",
      "ClickUp",
      "Slack",
      "Microsoft Teams",
      "Confluence",
      "Zoom",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Technical Skills</span>
        </h2>

        {/* Static Skill Cloud */}
        <div className="h-[200px] mb-16 flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-full bg-gray-900/30 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex flex-wrap items-center justify-center p-8 gap-4">
              {skillCategories
                .flatMap((category) => category.skills)
                .slice(0, 20)
                .map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-900/40 text-blue-300 text-sm rounded-full"
                    style={{
                      fontSize: `${0.8}rem`,
                      opacity: 0.7,
                    }}
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/30 rounded-xl p-6 border-t-2 border-blue-600 shadow-lg hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
