import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy — 1 thought AI",
  description:
    "Refund and Cancellation Policy for 1 thought AI platform. Learn about our refund process, cancellation terms, and billing policies.",
  openGraph: {
    title: "Refund and Cancellation Policy — 1 thought AI",
    description:
      "Refund and Cancellation Policy for 1 thought AI platform. Learn about our refund process, cancellation terms, and billing policies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund and Cancellation Policy — 1 thought AI",
    description:
      "Refund and Cancellation Policy for 1 thought AI platform. Learn about our refund process, cancellation terms, and billing policies.",
  },
}

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


