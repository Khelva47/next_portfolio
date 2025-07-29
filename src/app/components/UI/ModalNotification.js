"use client"

import { CheckCircle, XCircle, Info, X } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion" // Import Framer Motion

const ModalNotification = ({ message, type, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsOpen(true)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Allow time for exit animation before unmounting
    setTimeout(onClose, 500) // Increased to match animation duration
  }

  // Define variants for Framer Motion animations
  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { scale: 0.8, opacity: 0, y: 50, transition: { duration: 0.5, ease: "easeIn" } },
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }

  let bgColorClass = ""
  let textColorClass = ""
  let IconComponent = Info

  switch (type) {
    case "success":
      bgColorClass = "bg-gradient-to-br from-emerald-500 to-teal-700"
      textColorClass = "text-white"
      IconComponent = CheckCircle
      break
    case "error":
      bgColorClass = "bg-gradient-to-br from-rose-600 to-red-800"
      textColorClass = "text-white"
      IconComponent = XCircle
      break
    default: // info or default
      bgColorClass = "bg-gradient-to-br from-indigo-600 to-blue-800"
      textColorClass = "text-white"
      IconComponent = Info
      break
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            background: "radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%)",
            backdropFilter: "blur(5px)", // Glassmorphism effect
          }}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`relative p-8 rounded-2xl shadow-2xl flex flex-col items-center space-y-6 max-w-md w-full text-center transform transition-all duration-500 ease-out ${bgColorClass} ${textColorClass} border-4 border-solid border-white border-opacity-20`}
            style={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 4px rgba(255, 255, 255, 0.1)", // Glowing border effect
              backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)", // Subtle shimmer
            }}
          >

            <IconComponent className="w-24 h-24 flex-shrink-0 mb-4 animate-pulse" style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))" }} />
            <motion.p
              className="text-3xl font-extrabold leading-tight tracking-wide"
              animate={{ scale: [1, 1.02, 1], transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" } }} // Subtle text bounce
            >
              {message}
            </motion.p>
            <motion.button
              onClick={handleClose}
              className="mt-6 px-10 py-4 bg-blue bg-opacity-20 text-white rounded-xl font-semibold hover:bg-opacity-30 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.4)" }} 
              whileTap={{ scale: 0.95 }} // Tap effect
            >
              Got it!
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ModalNotification