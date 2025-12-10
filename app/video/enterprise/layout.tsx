import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VX Enterprise - AI Video Platform for Enterprise",
  description:
    "On-brand, compliant training & marketing videos in minutes. Enterprise-grade security, governance, and integrations.",
}

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
