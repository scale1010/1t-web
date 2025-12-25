"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"
import { Card, CardContent } from "@/components/ui/card"
import { 
  XCircle,
  DollarSign,
  AlertTriangle,
  Mail,
  Clock,
  FileText,
  CreditCard,
  Ban
} from "lucide-react"

export default function RefundPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Refund and Cancellation Policy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Last Updated: December 01, 2025
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Scalewalk Private Limited, we strive to provide high-quality AI-driven services. Because our platform provides "digital content" and "instant compute resources" (GPU processing), our refund policy is governed by the nature of these digital services.
            </p>
          </div>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section 1 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">1. CANCELLATION POLICY</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Subscription Cancellation</h3>
                  <p>You may cancel your subscription at any time through your Account Settings.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Effect of Cancellation</h3>
                  <p>Upon cancellation, you will continue to have access to the Platform until the end of your current billing cycle. No further charges will be applied to your payment method after the current cycle ends.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Trial Period</h3>
                  <p>If we offer a "Free Trial," you must cancel before the trial period ends to avoid being charged for the subsequent billing cycle.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="border-0 shadow-lg bg-muted/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">2. REFUND POLICY</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Digital Nature of Service</h3>
                  <p>Due to the high computational costs associated with AI generation (Video-Gen, Code-Gen, and Research), we do not offer refunds once a subscription has been used to generate any content.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Non-Refundable Circumstances</h3>
                  <p className="mb-2">Refunds will not be issued for:</p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Unused credits or "minutes" at the end of a billing cycle.</li>
                    <li>Dissatisfaction with the "creative output" or "hallucinations" of the AI (as AI outputs are generated "as-is").</li>
                    <li>Accidental purchases made after the trial period has expired.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Exception for Technical Failure</h3>
                  <p>If a system error on our Platform prevents the delivery of a service you paid for (e.g., a video fails to generate but credits are deducted), we will credit your account with the equivalent resources. If we are unable to fix the technical failure within 7 business days, a partial or full refund may be issued at our sole discretion.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">3. REFUND PROCESS (FOR ELIGIBLE CASES)</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Request Timeline</h3>
                  <p>Eligible refund requests must be submitted within 48 hours of the transaction.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Submission</h3>
                  <p>To request a refund, email <a href="mailto:connect@scalewalk.com" className="text-primary hover:underline">connect@scalewalk.com</a> with your Transaction ID and the reason for the request.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Approval & Processing</h3>
                  <p>Approved refunds will be processed via our payment aggregator. As per standard banking norms, it may take 5 to 7 business days for the amount to reflect in your original payment method (Bank Account/Credit Card/UPI).</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">4. DUPLICATE PAYMENTS</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                In the event of a duplicate payment due to a technical glitch, the excess amount will be refunded in full to the original payment method without any deductions, provided it is reported to us within 24 hours of the transaction.
              </p>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card className="border-0 shadow-lg bg-muted/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Ban className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">5. CHARGEBACKS AND DISPUTES</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We encourage users to contact our support team to resolve billing issues. Unauthorized "Chargebacks" or disputes filed via your bank without first contacting us will result in the immediate and permanent suspension of your account.
              </p>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">6. CONTACT US</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For any queries related to refunds or cancellations, please contact:
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Billing Support</h3>
                  <a 
                    href="mailto:connect@scalewalk.com" 
                    className="text-primary hover:underline"
                  >
                    connect@scalewalk.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Grievance Officer</h3>
                  <a 
                    href="mailto:connect@scalewalk.com" 
                    className="text-primary hover:underline"
                  >
                    grievance-officer@scalewalk.com
                  </a>
                  <div className="pt-4">
                    <Link href="/contact" className="text-primary hover:underline font-medium">
                      View full contact details →
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      <SiteFooter />
      <ChatInterface />
    </div>
  )
}


