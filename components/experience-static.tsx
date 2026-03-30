
const experiences = [
  {
    id: 1,
    company: "Devsinc",
    position: "Senior Software Engineer",
    period: "NOV 2019 - PRESENT",
    achievements: [
      "Developed and contributed to 10+ web applications using JavaScript, React, Next.js, Express, NestJS, Node.js Microservice Architecture, AWS and GCP.",
      "Designed and implemented scalable backend solutions with ExpressJs and MongoDB, implementing indexing, aggregation pipelines, optimizing code performance and reducing server response time by 30%.",
      "Developed micro frontend solutions with React.js, Next.js and Redux, increasing user engagement and overall satisfaction by 40%, using SSR, SSG and ISR.",
      "Integrated React applications with Google Cloud Platform (GCP) services, including Cloud Run, Firestore, Cloud Storage, Cloud Functions, and Pub/Sub, achieving a 99.9% uptime, reducing latency by 40%, and enhancing scalability.",
      "Redesigned a monolithic application into a microservices architecture with Docker, Kubernetes (GKE), and Nestjs, enhancing deployment speed and cutting downtime by 60%.",
      "Converted complex Figma designs into fully responsive, pixel-perfect UI components using MUI, ShadCN, and Tailwind CSS.",
      "Built and designed CI/CD pipelines using Pulumi, GitHub Actions, and Google Cloud Build, automating testing and deployment processes.",
      "Introduced unit testing to web applications, elevating code quality to 92%, and automated and documented development and deployment processes.",
      "Refactored multiple REST API endpoints into GraphQL, reducing over-fetching and under-fetching issues.",
      "Implemented advanced caching strategies using Redis, reducing API response times by 60%.",
      "Built middleware components in Node.js, integrating GCP Pub/Sub and Firebase Messaging for event-driven microservices.",
      "Integrated OAuth 2.0, Firebase Authentication, and Auth0 to enable secure user authentication across applications.",
      "Built an AI-driven prompt tool for CRM email campaigns using OpenAI APIs and WebSockets.",
      "Led the migration of the CRM database from PostgreSQL to SingleStore, resulting in a 50% improvement in query performance.",
      "Leveraged NX and Turbo to create and manage internal NPM packages within a monorepo.",
      "Managed and mentored junior developers in the Node.js environment.",
    ],
  },
]

export default function Experience() {
  // Show only first 5 achievements by default (static)
  const visibleAchievements = 5

  return (
    <section id="experience" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Work Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 bg-gray-900/30 rounded-xl p-6 border-l-4 border-blue-600 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                  <h4 className="text-xl text-blue-400">{exp.company}</h4>
                </div>
                <div className="mt-2 md:mt-0 text-gray-400 font-medium">{exp.period}</div>
              </div>

              <div className="mt-4">
                <h5 className="text-lg font-semibold mb-3 text-gray-200">Key Achievements:</h5>
                <ul className="space-y-2 text-gray-300">
                  {exp.achievements.slice(0, visibleAchievements).map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {exp.achievements.length > visibleAchievements && (
                  <div className="mt-4 text-blue-400 font-medium">
                    +{exp.achievements.length - visibleAchievements} more achievements
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
