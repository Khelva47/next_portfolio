// middleware.js
import { NextResponse } from "next/server"
import { csrfMiddleware } from "./src/middleware/csrf"

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/api/send-email")) {
    await csrfMiddleware(req, {})
  }
  return NextResponse.next()
}

export const config = {
  matcher: "/api/:path*",
}