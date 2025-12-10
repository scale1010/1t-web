import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Video Editor | Make Stunning Videos in Minutes — VX Pro",
  description:
    "Create videos from a prompt or template. Edit on a simple timeline. Auto-captions, VO, styles. Export everywhere.",
  openGraph: {
    title: "AI Video Editor | Make Stunning Videos in Minutes — VX Pro",
    description:
      "Create videos from a prompt or template. Edit on a simple timeline. Auto-captions, VO, styles. Export everywhere.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Video Editor | Make Stunning Videos in Minutes — VX Pro",
    description:
      "Create videos from a prompt or template. Edit on a simple timeline. Auto-captions, VO, styles. Export everywhere.",
  },
}

export default function VideoProLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
