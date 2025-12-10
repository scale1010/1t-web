import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VCX VS Code Plugin - AI Pair Programmer",
  description:
    "Code at the speed of thought with VCX, an AI pair programmer that plans changes, writes code & tests, and opens review-ready PRs—all inside VS Code.",
}

export default function CodePluginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
