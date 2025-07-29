// src/utils/validation.js
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateField = (name, value) => {
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

export const isFormValid = (formData, errors) => {
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