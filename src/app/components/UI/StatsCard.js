"use client"
import { UserCheck, FolderOpen, Headphones, Users } from "lucide-react"
import { useState, useEffect } from "react"

const StatCard = ({ stat, shouldAnimate, index }) => {
  const [displayNumber, setDisplayNumber] = useState(0)

  // Icon mapping
  const iconMap = {
    "user-check": UserCheck,
    "folder-open": FolderOpen,
    headphones: Headphones,
    users: Users,
  }

  const IconComponent = iconMap[stat.icon]

  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        let start = 0
        const end = stat.number
        const duration = 2000
        const increment = end / (duration / 16)

        const counter = setInterval(() => {
          start += increment
          if (start >= end) {
            setDisplayNumber(end)
            clearInterval(counter)
          } else {
            setDisplayNumber(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(counter)
      }, index * 200)

      return () => clearTimeout(timer)
    }
  }, [shouldAnimate, stat.number, index])

  return (
    <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-center mb-4">
        {IconComponent && <IconComponent className="w-12 h-12 text-blue-400" />}
      </div>
      <div className="text-3xl font-bold text-blue-400 mb-2">{shouldAnimate ? displayNumber : stat.number}</div>
      <div className="text-white font-medium mb-1">{stat.label}</div>
      <div className="text-gray-400 text-sm">{stat.sublabel}</div>
    </div>
  )
}

export default StatCard
