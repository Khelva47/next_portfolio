"use client"

import { useCountUp } from "../../hooks/useCountUp"

const StatCard = ({ stat, shouldAnimate, index }) => {
  const count = useCountUp(stat.number, 2000, shouldAnimate)
  const IconComponent = stat.icon // Assign the icon component to a variable

  return (
    <div
      className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-500 ${
        shouldAnimate ? "animate-slide-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl mb-3">
        <IconComponent /> {/* Render the icon as a component */}
      </div>
      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{count}</div>
      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{stat.label}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{stat.sublabel}</div>
    </div>
  )
}

export default StatCard