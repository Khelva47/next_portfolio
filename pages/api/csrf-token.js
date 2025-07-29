import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req, res) {
  if (req.method === "GET") {
    res.setHeader("Set-Cookie", "csrfToken=" + require("crypto").randomBytes(16).toString("hex") + "; HttpOnly; Path=/; SameSite=Strict")
    res.status(200).json({ csrfToken: req.cookies.csrfToken || require("crypto").randomBytes(16).toString("hex") })
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}