import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deep Research Pro | Cited Answers Without the Rabbit Holes",
  description:
    "Deep Research Pro finds, grounds, and synthesizes answers from your files and trusted sites. Every claim has a source card you can inspect.",
  openGraph: {
    title: "Deep Research Pro | Cited Answers Without the Rabbit Holes",
    description:
      "Deep Research Pro finds, grounds, and synthesizes answers from your files and trusted sites. Every claim has a source card you can inspect.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Research Pro | Cited Answers Without the Rabbit Holes",
    description:
      "Deep Research Pro finds, grounds, and synthesizes answers from your files and trusted sites. Every claim has a source card you can inspect.",
  },
}

export default function ResearchProLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 