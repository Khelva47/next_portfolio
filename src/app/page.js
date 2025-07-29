"use client"
import Portfolio from "./components/Portfolio"
import { useState, useEffect } from "react"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize dark mode from localStorage on component mount
  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem("theme") : null
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
    
    const shouldBeDark = savedTheme === "dark" || (savedTheme === null && prefersDark)
    setIsDarkMode(shouldBeDark)
  }, [])

  // Handle dark mode changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const htmlElement = document.documentElement
      if (isDarkMode) {
        htmlElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        htmlElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Portfolio isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  )
}