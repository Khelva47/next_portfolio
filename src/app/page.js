"use client"
import Portfolio from "./components/Portfolio"
import { useState, useEffect } from "react"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDarkMode) {
      htmlElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      htmlElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Portfolio isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  )
}