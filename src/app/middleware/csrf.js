// src/middleware/csrf.js
import { NextResponse } from "next/server"
import csurf from "csurf"

export function csrfMiddleware(req, res) {
  const csrfProtection = csurf({
    cookie: {
      key: "_csrf",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict",
    },
  })

  return new Promise((resolve, reject) => {
    csrfProtection(req, res, (err) => {
      if (err) {
        reject(new NextResponse(JSON.stringify({ error: "Invalid CSRF token" }), { status: 403 }))
      } else {
        resolve()
      }
    })
  })
}