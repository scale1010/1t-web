import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — 1 thought AI",
  description:
    "Privacy Policy for 1 thought AI platform. Learn how we protect your data across all jurisdictions including GDPR, DPDP, CCPA, and COPPA compliance.",
  openGraph: {
    title: "Privacy Policy — 1 thought AI",
    description:
      "Privacy Policy for 1 thought AI platform. Learn how we protect your data across all jurisdictions including GDPR, DPDP, CCPA, and COPPA compliance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — 1 thought AI",
    description:
      "Privacy Policy for 1 thought AI platform. Learn how we protect your data across all jurisdictions including GDPR, DPDP, CCPA, and COPPA compliance.",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


