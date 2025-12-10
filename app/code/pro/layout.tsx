import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Code Pro - AI-Powered Code Generation Platform",
  description: "Build applications faster with AI-powered code generation. From idea to deployment in minutes.",
}

export default function CodeProLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
