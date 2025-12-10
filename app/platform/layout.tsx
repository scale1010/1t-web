import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Lab Platform — Identity, Policy, Telemetry for AI at Work",
  description:
    "One governance & data plane for Video, Code-gen (CX/VCX), and Deep Research. SSO/SCIM, policy-as-code, audit trails, data residency, model routing, and certified integrations.",
  keywords: "AI governance platform, policy as code, audit trail, SSO SCIM, data residency, model routing",
  openGraph: {
    title: "The Lab Platform — Identity, Policy, Telemetry for AI at Work",
    description:
      "One governance & data plane for Video, Code-gen (CX/VCX), and Deep Research. SSO/SCIM, policy-as-code, audit trails, data residency, model routing, and certified integrations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lab Platform — Identity, Policy, Telemetry for AI at Work",
    description:
      "One governance & data plane for Video, Code-gen (CX/VCX), and Deep Research. SSO/SCIM, policy-as-code, audit trails, data residency, model routing, and certified integrations.",
  },
}

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 