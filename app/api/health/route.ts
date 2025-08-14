import { NextResponse } from "next/server"

export async function GET() {
  // Add health checks here (database, external services, etc.)
  const healthCheck = {
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || "1.0.0",
  }

  return NextResponse.json(healthCheck, { status: 200 })
}
