"use client"
import { Code, Smartphone, GraduationCap, Zap, Users, ClipboardList } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description:
        "Building responsive, performant, and scalable web applications using modern frameworks like React, Next.js, FastAPI, and NestJS.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile applications with Flutter, focusing on sleek UI, smooth UX, and robust backend integration.",
    },
    {
      icon: GraduationCap,
      title: "Software Education & Training",
      description:
        "Delivering engaging computer science lessons and hands-on coding sessions to empower students and junior developers.",
    },
    {
      icon: Zap,
      title: "API Design & Integration",
      description:
        "Designing and developing secure RESTful APIs and integrating third-party services for seamless digital experiences.",
    },
    {
      icon: Users,
      title: "IT Consulting",
      description:
        "Offering expert guidance on software architecture, technology choices, and digital transformation to help businesses scale and innovate efficiently.",
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description:
        "Overseeing project lifecycles, coordinating cross-functional teams, and ensuring timely delivery of tech solutions with clarity and quality.",
    },
  ]

  return (
    <section id="services" className="py-20 px-8 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <div className="w-12 h-1 bg-blue-500 mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl">
            With a background in education and software engineering, I offer full-stack development services, mobile
            apps, and strategic digital solutions. Whether you need a performant product, expert tech advice, or strong
            project execution, I bring ideas to life with precision and purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-start p-8 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
