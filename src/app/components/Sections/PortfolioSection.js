"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const portfolioData = {
    categories: ["All", "Web Design", "Mobile App", "UI/UX"],
    projects: [
      {
        id: 1,
        title: "Portfolio",
        category: "Web Design",
        image: "/images/sl_031420_28950_10.jpg",
        link: "https://kelvin-mponda.vercel.app/",
      },
      {
        id: 2,
        title: "BPFAA",
        category: "Web Design",
        image: "/images/Boma.jpg", 
        link: "https://nominations.bomaprize.org",
      },
      {
        id: 3,
        title: "BusYanga",
        category: "Web Design",
        image: "/images/busyanga2.jpg",
        link: "https://www.busyanga.site/landing",
      },
      {
        id: 4,
        title: "DriveMe",
        category: "Mobile App",
        image: "/images/DriveMe.jpg",
        link: "",
        inProgress: true,
      },
      {
        id: 5,
        title: "Alikonko",
        category: "Web Design",
        image: "/images/Alikonko.jpg",
        link: "",
        inProgress: true,
      },
      {
        id: 6,
        title: "iTech360Systems",
        category: "Web Design",
        image: "/images/iTech.jpg",
        link: "https://itech360systems.it.com/",
      },

      {
        id: 7,
        title: "BusYanga",
        category: "Web Design",
        image: "/placeholder.svg",
        link: "https://www.busyanga.site/landing",
      },
    ],
  }

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeFilter)
  }, [activeFilter, portfolioData.projects])

  return (
    <section id="portfolio" className="py-20 px-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-12 h-1 bg-blue-500 mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Explore a collection of projects that showcase my journey as a full-stack developer and educator.
            From intuitive mobile and web apps, to robust backend systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {portfolioData.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === category
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-64 overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />
</div>

              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white px-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-200 mb-6 text-sm uppercase tracking-wider">{project.category}</p>

                  {project.inProgress ? (
                    <span className="inline-flex items-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg cursor-not-allowed">
                      In Progress
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
