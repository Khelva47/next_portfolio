import sanitizeHtml from "sanitize-html"

export const sendEmail = async (formData) => {
  const sanitizedData = {
    name: sanitizeHtml(formData.name, {
      allowedTags: [],
      allowedAttributes: {},
    }),
    email: sanitizeHtml(formData.email, {
      allowedTags: [],
      allowedAttributes: {},
    }),
    subject: sanitizeHtml(formData.subject, {
      allowedTags: [],
      allowedAttributes: {},
    }),
    message: sanitizeHtml(formData.message, {
      allowedTags: [],
      allowedAttributes: {},
    }),
  }

  // Nodemailer configuration for Gmail
  const transporter = require("nodemailer").createTransport({
    service: "gmail",
    auth: {
      user: "kelvinmponda47@gmail.com", 
      pass: process.env.GMAIL_APP_PASSWORD, 
    },
  })

  const mailOptions = {
    from: sanitizedData.email, 
    to: "kelvinmponda47@gmail.com", 
    subject: sanitizedData.subject,
    text: `From: ${sanitizedData.name} <${sanitizedData.email}>\n\n${sanitizedData.message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`)
  }
}