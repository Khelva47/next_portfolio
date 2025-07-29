"use client"

import { Mail, Phone, CheckCircle2, XCircle, Loader2 } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { validateField, isFormValid } from "../../utils/validation"
import axios from "axios"
import ModalNotification from "../UI/ModalNotification"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [emailValidationStatus, setEmailValidationStatus] = useState("idle") // 'idle', 'validating', 'valid', 'invalid'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [csrfToken, setCsrfToken] = useState("")
  const [notification, setNotification] = useState(null) // { message: string, type: 'success' | 'error' }

  // Fetch CSRF token on mount
  useEffect(() => {
    fetch("/api/csrf-token")
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.csrfToken))
      .catch((err) => console.error("Failed to fetch CSRF token:", err))
  }, [])

  // Debounced email validation for real-time feedback
  const validateEmailRealtime = useCallback(
    (emailValue) => {
      if (emailValue.trim() === "") {
        setEmailValidationStatus("idle")
        setErrors((prev) => ({ ...prev, email: "" })) // Clear error if field is empty
        return
      }

      setEmailValidationStatus("validating")
      const timer = setTimeout(() => {
        const error = validateField("email", emailValue)
        setErrors((prev) => ({ ...prev, email: error }))
        setEmailValidationStatus(error ? "invalid" : "valid")
      }, 500) // Debounce time
      return () => clearTimeout(timer)
    },
    [], // No dependencies needed as validateField is pure
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Only validate if the field has been touched
    if (touched[name]) {
      if (name === "email") {
        validateEmailRealtime(value)
      } else {
        const error = validateField(name, value)
        setErrors((prev) => ({ ...prev, [name]: error }))
      }
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))

    if (name === "email") {
      validateEmailRealtime(value) // Trigger validation on blur for email
    } else {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setNotification(null) // Clear previous notification

    // Validate all fields on submit
    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    })

    // Check if the form is valid after setting all errors and touched states
    if (Object.keys(newErrors).length === 0 && isFormValid(formData, newErrors) && csrfToken) {
      try {
        // In a real application, this would be your API endpoint for sending emails
        const response = await axios.post(
          "/api/send-email", // This would be your actual API route
          formData,
          {
            headers: {
              "CSRF-Token": csrfToken,
            },
          },
        )
        setNotification({ type: "success", message: response.data.message || "Message sent successfully!" })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setErrors({})
        setTouched({})
        setEmailValidationStatus("idle")
      } catch (error) {
        console.error("Error sending email:", error)
        setNotification({
          type: "error",
          message: error.response?.data?.message || "Failed to send message. Please try again.",
        })
      }
    } else {
      // If form is not valid on submission, show a general error or rely on inline errors
      setNotification({ type: "error", message: "Please correct the errors in the form." })
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 px-8 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <div className="w-12 h-1 bg-blue-500 mb-6" />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Whether you're looking to build a custom web or mobile solution, need technical guidance on your digital
            project, or simply want to collaborate on innovative tech ideas — I'm here to help. Feel free to reach out,
            and let's create something impactful together.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Email:</h3>
                <p className="text-gray-600 dark:text-gray-300">kelvinmponda47@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Call:</h3>
                <p className="text-gray-600 dark:text-gray-300">+265 994 679 974</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors ${
                      errors.name && touched.name
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors ${
                      errors.email && touched.email
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  />
                  {emailValidationStatus === "validating" && (
                    <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500 animate-spin" />
                  )}
                  {emailValidationStatus === "valid" && (
                    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                  )}
                  {emailValidationStatus === "invalid" && (
                    <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                  )}
                  {errors.email && touched.email && (
                    <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Subject"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors ${
                    errors.subject && touched.subject
                      ? "border-red-500 dark:border-red-400"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                />
                {errors.subject && touched.subject && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.subject}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Message"
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors ${
                    errors.message && touched.message
                      ? "border-red-500 dark:border-red-400"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                />
                {errors.message && touched.message && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={!isFormValid(formData, errors) || isSubmitting}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isFormValid(formData, errors) && !isSubmitting
                    ? "bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-lg"
                    : "bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed opacity-60"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {notification && (
        <ModalNotification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </section>
  )
}

export default ContactSection
