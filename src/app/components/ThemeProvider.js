"use client"

import { useState, useEffect } from "react"

export default function ThemeProvider({ children }) {
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
    // Check localStorage on mount
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") setIsDarkMode(true)
  }, [isDarkMode])

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      {children}
    </div>
  )
}