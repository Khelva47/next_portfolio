"use client"

import { CheckCircle, XCircle, Info, X } from "lucide-react"
import { useEffect, useState } from "react"

const ModalNotification = ({ message, type, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsOpen(true)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Allow time for exit animation before unmounting
    setTimeout(onClose, 300)
  }

  let bgColorClass = ""
  let textColorClass = ""
  let IconComponent = Info

  switch (type) {
    case "success":
      bgColorClass = "bg-gradient-to-br from-green-500 to-green-700"
      textColorClass = "text-white"
      IconComponent = CheckCircle
      break
    case "error":
      bgColorClass = "bg-gradient-to-br from-red-500 to-red-700"
      textColorClass = "text-white"
      IconComponent = XCircle
      break
    default: // info or default
      bgColorClass = "bg-gradient-to-br from-blue-500 to-blue-700"
      textColorClass = "text-white"
      IconComponent = Info
      break
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      style={{ background: "radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)" }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative p-8 rounded-xl shadow-2xl flex flex-col items-center space-y-6 max-w-sm w-full text-center transform transition-all duration-300 ease-out ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        } ${bgColorClass} ${textColorClass}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close notification"
        >
          <X className="w-6 h-6" />
        </button>
        <IconComponent className="w-20 h-20 flex-shrink-0 mb-2" />
        <p className="text-2xl font-bold leading-tight">{message}</p>
        <button
          onClick={handleClose}
          className="mt-4 px-8 py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Got it!
        </button>
      </div>
    </div>
  )
}

export default ModalNotification
