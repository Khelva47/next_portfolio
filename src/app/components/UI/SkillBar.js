"use client"

import { useState, useEffect } from "react"

const SkillBar = ({ skill, index, shouldAnimate }) => {
  const [width, setWidth] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (shouldAnimate && !hasAnimated) {
      setHasAnimated(true)
      const timer = setTimeout(() => {
        setWidth(skill.percentage)
      }, index * 200)
      return () => clearTimeout(timer)
    }
  }, [shouldAnimate, skill.percentage, index, hasAnimated])

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-blue-500 dark:bg-blue-400 h-3 rounded-full transition-all duration-1000 ease-out skill-bar"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default SkillBar
