"use client"

import { Sun, Moon, X } from "lucide-react"

const Sidebar = ({
  activeSection,
  setActiveSection,
  profileData,
  navigationItems,
  isDarkMode,
  setIsDarkMode,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrollToSection,
}) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-72 bg-white dark:bg-gray-900 text-gray-900 dark:text-white z-50 transform transition-transform duration-300 ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Close button for mobile */}
      <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden absolute top-4 right-4 text-gray-900 dark:text-white p-2">
        <X className="w-6 h-6" />
      </button>

      {/* Dark mode toggle for desktop */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="hidden lg:block absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Profile Section */}
      <div className="text-center p-6 border-b border-gray-300 dark:border-gray-700">
        <img
          src={profileData.image || "/placeholder.svg"}
          alt={profileData.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-300 dark:border-gray-600"
        />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{profileData.name}</h2>
        <div className="flex justify-center space-x-3">
          {profileData.socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-blue-600 transition-colors"
              >
                <IconComponent className="w-4 h-4" />
              </a>
            )
          })}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {navigationItems.map((item) => {
          const IconComponent = item.icon
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors mb-2 ${
                activeSection === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar