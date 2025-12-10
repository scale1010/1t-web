import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inspiration — The Future of AI in 2050",
  description:
    "Imagine it is 2050 and AI has become as invisible and essential as electricity—everywhere, unremarkable until it disappears.",
  openGraph: {
    title: "Inspiration — The Future of AI in 2050",
    description:
      "Imagine it is 2050 and AI has become as invisible and essential as electricity—everywhere, unremarkable until it disappears.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspiration — The Future of AI in 2050",
    description:
      "Imagine it is 2050 and AI has become as invisible and essential as electricity—everywhere, unremarkable until it disappears.",
  },
}

export default function InspirationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 