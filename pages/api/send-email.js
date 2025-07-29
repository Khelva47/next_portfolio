import { NextApiRequest, NextApiResponse } from "next"
import { sendEmail } from "../../src/app/services/emailService"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { name, email, subject, message } = req.body
    const result = await sendEmail({ name, email, subject, message })
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
}