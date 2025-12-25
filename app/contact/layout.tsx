import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us — 1 thought AI",
  description:
    "Get in touch with 1 thought AI. Contact our support team, find our office address, or reach out to our Grievance Redressal Officer.",
  openGraph: {
    title: "Contact Us — 1 thought AI",
    description:
      "Get in touch with 1 thought AI. Contact our support team, find our office address, or reach out to our Grievance Redressal Officer.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — 1 thought AI",
    description:
      "Get in touch with 1 thought AI. Contact our support team, find our office address, or reach out to our Grievance Redressal Officer.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


