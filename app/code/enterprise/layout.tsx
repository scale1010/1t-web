import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CX Enterprise - AI Code Generation Platform",
  description:
    "Ship brand-safe UIs at scale with governed, consistent, and auditable code generation. Enterprise-grade security, compliance, and design system enforcement.",
}

export default function CodeEnterpriseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
