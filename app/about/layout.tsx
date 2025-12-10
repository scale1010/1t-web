import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Lab — Secure, Self-Hosted AI Platform",
  description:
    "Lab from SW Company helps teams run modern AI apps on their own terms—self-hosted or private cloud, model-agnostic, and built for enterprise scale.",
  openGraph: {
    title: "About Lab — Secure, Self-Hosted AI Platform",
    description:
      "Lab from SW Company helps teams run modern AI apps on their own terms—self-hosted or private cloud, model-agnostic, and built for enterprise scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lab — Secure, Self-Hosted AI Platform",
    description:
      "Lab from SW Company helps teams run modern AI apps on their own terms—self-hosted or private cloud, model-agnostic, and built for enterprise scale.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 