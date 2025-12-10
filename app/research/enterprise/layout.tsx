import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deep Research Enterprise | Cited, Permission-Aware Answers for Enterprise",
  description:
    "Deep Research Enterprise grounds every claim in your content and the web with citations, honors permissions by default, and records a full provenance trail—all on the Lab platform.",
  openGraph: {
    title: "Deep Research Enterprise | Cited, Permission-Aware Answers for Enterprise",
    description:
      "Deep Research Enterprise grounds every claim in your content and the web with citations, honors permissions by default, and records a full provenance trail—all on the Lab platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Research Enterprise | Cited, Permission-Aware Answers for Enterprise",
    description:
      "Deep Research Enterprise grounds every claim in your content and the web with citations, honors permissions by default, and records a full provenance trail—all on the Lab platform.",
  },
}

export default function ResearchEnterpriseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 