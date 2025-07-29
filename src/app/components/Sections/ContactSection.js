"use client"
import { Mail, Phone } from "lucide-react"
import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Validation functions
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : ""
      case "email":
        if (value.trim() === "") return "Email is required"
        if (!emailRegex.test(value)) return "Please enter a valid email address"
        return ""
      case "subject":
        return value.trim() === "" ? "Subject is required" : ""
      case "message":
        return value.trim() === "" ? "Message is required" : ""
      default:
        return ""
    }
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Validate field if it has been touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }))
    }
  }

  // Handle input blur (when user leaves the field)
  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))

    const error = validateField(name, value)
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }))
  }

  // Check if form is valid
  const isFormValid = () => {
    const { name, email, subject, message } = formData
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      emailRegex.test(email) &&
      subject.trim() !== "" &&
      message.trim() !== "" &&
      Object.values(errors).every((error) => error === "")
    )
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate all fields
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

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData)
      // Here you would typically send the data to your backend
      alert("Message sent successfully!")

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setTouched({})
      setErrors({})
    }
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
                <div>
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
                disabled={!isFormValid()}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isFormValid()
                    ? "bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-lg"
                    : "bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed opacity-60"
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
