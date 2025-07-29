"use client"
import { Menu, Sun, Moon } from "lucide-react"

const MobileHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen, isDarkMode, setIsDarkMode }) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-40 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-semibold text-gray-900 dark:text-white">Kelvin Mponda</span>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </div>
  )
}

export default MobileHeader
