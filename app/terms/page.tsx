"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"
import { Card, CardContent } from "@/components/ui/card"
import { 
  FileText,
  Shield,
  Scale,
  AlertTriangle,
  Lock,
  Gavel,
  Mail
} from "lucide-react"

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Effective Date: December 01, 2025
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and ScaleWalk Private Limited ("Company," "we," "us," or "our"). By accessing or using our AI-powered Platform, APIs, and tools (including Video-Gen, Code-Gen, and Deep Research), you acknowledge that you have read, understood, and agreed to be bound by these Terms.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section 1 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">1. INTERMEDIARY STATUS & SAFE HARBOR (IT ACT & DSA)</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">1.1. Status</h3>
                  <p>In accordance with Section 79 of the Information Technology Act, 2000 (India) and the EU Digital Services Act (DSA), the Company acts as an Intermediary. We provide a platform for the generation of content via artificial intelligence but do not initiate the transmission, select the receiver, or select/modify the information contained in the transmission.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">1.2. No Proactive Monitoring</h3>
                  <p>We do not proactively monitor User-generated inputs or AI-generated outputs. We claim full immunity and "Safe Harbor" from liability for any third-party content or AI-generated content to the maximum extent permitted by law.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">2. SERVICES & ELIGIBILITY</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2.1. AI Tools</h3>
                  <p>The Platform provides tools for generative media (Video-Gen), software development (Code-Gen), and automated data synthesis (Deep Research).</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2.2. Eligibility</h3>
                  <p>You must be at least 18 years of age. You represent that your use of the Platform does not violate any laws in your jurisdiction.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2.3. AI Regulations</h3>
                  <p>You agree to comply with the EU AI Act, ensuring no use of the Platform for prohibited practices (e.g., biometric categorization or social scoring).</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">3. INTELLECTUAL PROPERTY & CONTENT</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">3.1. User Inputs</h3>
                  <p>You retain ownership of the prompts and data you provide. You warrant that you have the legal right to upload such data.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">3.2. AI Outputs</h3>
                  <p>Subject to your compliance with these Terms, we assign to you all rights and interests in the outputs generated. However, the Company makes no guarantee that outputs will not inadvertently resemble existing copyrighted works. The risk of copyright infringement rests solely with the User.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">3.3. Mandatory Disclosure</h3>
                  <p>For Video-Gen, you must comply with transparency requirements (EU AI Act & India IT Rules 2025) by disclosing that content is "AI-Generated" or a "Deepfake" where applicable.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">4. PAYMENTS & RBI COMPLIANCE</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">4.1. Processor</h3>
                  <p>Payments are handled via Razorpay. By using the Platform, you agree to comply with Razorpay's terms and RBI regulations.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">4.2. Data Localization</h3>
                  <p>In compliance with RBI mandates, all payment-related data is stored on servers located within India.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">4.3. Refunds</h3>
                  <p>Subscription fees are generally non-refundable as per our Refund Policy.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card className="border-0 shadow-lg bg-muted/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">5. PROHIBITED CONDUCT</h2>
              </div>
              <p className="text-lg font-semibold text-foreground mb-4">You are strictly prohibited from:</p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>Generating non-consensual sexual content or malicious "Deepfakes."</li>
                <li>Using Code-Gen for malware creation or unauthorized hacking.</li>
                <li>Using Deep Research to spread state-sponsored misinformation or manipulate financial markets.</li>
                <li>Reverse-engineering our AI models or sub-processors (e.g., Fal, AWS).</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">6. COMPREHENSIVE INDEMNITY (LEGAL SAFEGUARD)</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">6.1. General Indemnity</h3>
                  <p>You agree to indemnify, defend, and hold harmless ScaleWalk Private Limited, its directors, officers, employees, and affiliates from and against any and all claims, damages, losses, liabilities, costs, or expenses (including attorney's fees) arising from:</p>
                  <ul className="mt-3 space-y-2 list-disc list-inside ml-4">
                    <li>(i) Your use of the Platform;</li>
                    <li>(ii) Any content (Video, Code, or Research) generated by you that violates third-party intellectual property or privacy rights;</li>
                    <li>(iii) Your violation of the EU AI Act, GDPR, or India's DPDP Act;</li>
                    <li>(iv) Any legal action resulting from "Deepfakes" created by you.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">7. LIMITATION OF LIABILITY</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">7.1. "As-Is" Basis</h3>
                  <p>AI outputs may contain "hallucinations" or inaccuracies. We do not warrant the truthfulness of Deep Research or the security of Code-Gen.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">7.2. Liability Cap</h3>
                  <p>To the maximum extent permitted by law, the Company's total liability shall not exceed the amount paid by you to the Company in the three (3) months preceding the claim.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">7.3. Third-Party Failures</h3>
                  <p>We are not liable for outages caused by third-party vendors (AWS, Fal, Google Cloud).</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card className="border-0 shadow-lg bg-muted/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">8. DATA PRIVACY (GDPR & DPDP 2025)</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">8.1. Data Rights</h3>
                  <p>Users in the EU and India have the right to access, correct, or erase their data.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">8.2. Nomination</h3>
                  <p>Under the India DPDP Act 2023/2025, you have the right to nominate an individual to exercise your data rights in the event of your death or incapacity.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">8.3. Sub-processors</h3>
                  <p>You acknowledge our use of sub-processors (AWS, Fal, etc.) governed by Data Processing Addendums (DPAs).</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gavel className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">9. GOVERNING LAW & JURISDICTION</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">9.1. Governing Law</h3>
                  <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">9.2. Exclusive Jurisdiction</h3>
                  <p>Any legal action, suit, or proceeding arising out of or relating to these Terms shall be instituted exclusively in the courts located in Gurgaon, Haryana, India. Both parties hereby waive any objection to the venue of such courts.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 10 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">10. TERMINATION</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your account immediately, without notice, for violations of these Terms, non-payment, or as required by regulatory authorities (RBI, EU AI Office).
              </p>
            </CardContent>
          </Card>

          {/* Section 11 */}
          <Card className="border-0 shadow-lg bg-muted/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">11. CONTACT & GRIEVANCE REDRESSAL</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For any issues or grievances, contact our designated officer:
              </p>
              <div className="space-y-3">
                
                <div>
                  <p className="font-semibold text-foreground">Grievance Officer:</p>
                  <a 
                    href="mailto:grievance-officer@scalewalk.com" 
                    className="text-primary hover:underline"
                  >
                    grievance-officer@scalewalk.com
                  </a>
                </div>
                <div className="pt-4">
                  <Link href="/contact" className="text-primary hover:underline font-medium">
                    View full contact details →
                  </Link>
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


