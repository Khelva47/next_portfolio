"use client"
import { useState, useEffect } from "react"

const SkillBar = ({ skill, index, shouldAnimate }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0)

  useEffect(() => {
    if (shouldAnimate) {
      const timer = setTimeout(() => {
        setAnimatedWidth(skill.percentage)
      }, index * 100)

      return () => clearTimeout(timer)
    }
  }, [shouldAnimate, skill.percentage, index])

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
        <span className="text-blue-500">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: shouldAnimate ? `${animatedWidth}%` : `${skill.percentage}%` }}
        />
      </div>
    </div>
  )
}

export default SkillBar
