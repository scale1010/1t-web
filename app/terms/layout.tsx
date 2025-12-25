import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — 1 thought AI",
  description:
    "Terms of Service for 1 thought AI platform. Read our terms and conditions for using our AI-powered tools including Video-Gen, Code-Gen, and Deep Research.",
  openGraph: {
    title: "Terms of Service — 1 thought AI",
    description:
      "Terms of Service for 1 thought AI platform. Read our terms and conditions for using our AI-powered tools including Video-Gen, Code-Gen, and Deep Research.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — 1 thought AI",
    description:
      "Terms of Service for 1 thought AI platform. Read our terms and conditions for using our AI-powered tools including Video-Gen, Code-Gen, and Deep Research.",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


