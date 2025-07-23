"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import StatCard from "../UI/StatsCard"
import SkillBar from "../UI/SkillBar"

const AboutSection = ({ aboutData, statsData, skillsData }) => {
  const [animationsStarted, setAnimationsStarted] = useState(false)

  useEffect(() => {
    // Start animations after component mounts
    const timer = setTimeout(() => {
      setAnimationsStarted(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="py-20 px-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">About</h2>
          <div className="w-12 h-1 bg-blue-500 mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{aboutData.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src={aboutData.image || "/placeholder.svg"}
              alt="About"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">{aboutData.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">{aboutData.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {aboutData.details.map((detail, index) => (
                <div key={index} className="flex">
                  <ChevronDown className="w-5 h-5 text-blue-500 mr-2 rotate-[-90deg]" />
                  <div>
                    <strong className="text-gray-800 dark:text-gray-200">{detail.label}:</strong>
                    <span className="text-gray-600 dark:text-gray-300 ml-2">{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{aboutData.additionalInfo}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} shouldAnimate={animationsStarted} index={index} />
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-3xl font-bold mb-4">Skills</h3>
          <div className="w-12 h-1 bg-blue-500 mb-6" />
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} shouldAnimate={animationsStarted} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
