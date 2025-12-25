"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Shield,
  Globe,
  Lock,
  Users,
  Brain,
  Database,
  Eye,
  Mail,
  Building2,
  AlertCircle
} from "lucide-react"

export default function PrivacyPage() {
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
              Global Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Last Updated: December 01, 2025
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Scalewalk Private Limited ("Company," "we," "us," or "our") operates a global AI platform. This policy outlines our commitment to data protection across all jurisdictions, including India (DPDP), the European Union/UK (GDPR), and the United States (CCPA/CPRA/COPPA).
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section 1 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">1. SCOPE AND APPLICABILITY</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  This policy applies to all users worldwide. We adhere to the highest standard of global data protection, applying the most stringent protections (typically GDPR or DPDP) across our entire user base.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">2. U.S. STATE PRIVACY RIGHTS (CCPA/CPRA)</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="mb-4">For residents of California, Virginia, Colorado, and other U.S. states with active privacy laws in 2025:</p>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Right to Opt-Out of Sale/Sharing</h3>
                  <p>We do not "sell" your personal information. We only "share" data with service providers (like AWS/Fal) for essential processing.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Right to Limit Use of Sensitive Personal Information</h3>
                  <p>You may limit our use of sensitive data (like precise geolocation or account credentials) to only what is necessary for service delivery.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Shine the Light</h3>
                  <p>You may request information regarding our disclosure of personal info to third parties for their direct marketing purposes.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card className="border-0 shadow-lg bg-muted/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">3. CHILDREN'S PRIVACY (COPPA & GLOBAL STANDARDS)</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Age Restriction</h3>
                  <p>Our Platform is not intended for children under 18.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">COPPA Compliance</h3>
                  <p>We do not knowingly collect personal information from children under 13 in the U.S. or under 16/18 in other jurisdictions without verifiable parental consent. If we discover such data, it is deleted immediately.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">4. AI-SPECIFIC COMPLIANCE (U.S. & EU)</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">U.S. AI Executive Order (2025)</h3>
                  <p>We implement rigorous safety testing and red-teaming for our Code-Gen and Deep Research tools to mitigate cybersecurity risks.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">EU AI Act (High-Risk Systems)</h3>
                  <p>Users in the EU are notified that our AI systems are designed to prevent "Unacceptable Risk" behaviors. We maintain technical documentation and logs for audit by the EU AI Office.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Section 230 (U.S.)</h3>
                  <p>We maintain immunity as a service provider for content generated by users, while strictly adhering to the "Notice and Takedown" requirements for copyrighted material.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">5. GLOBAL DATA TRANSFERS & LOCALIZATION</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Standard Contractual Clauses (SCCs)</h3>
                  <p>For data transfers from the EU/UK to India or the U.S., we utilize the latest approved SCCs to ensure an equivalent level of protection.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">India Data Localization (RBI)</h3>
                  <p>All payment system data for Indian transactions remains physically stored within India.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Data Privacy Framework (DPF)</h3>
                  <p>We ensure our U.S.-based sub-processors (Google, AWS) are certified under the EU-U.S. Data Privacy Framework.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card className="border-0 shadow-lg bg-muted/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">6. YOUR GLOBAL DATA RIGHTS</h2>
              </div>
              <p className="text-lg font-semibold text-foreground mb-4">Regardless of your location, you may exercise these rights:</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Right to Transparency</h3>
                  <p>Know what data is used to train or prompt AI models.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Right to Opt-Out of AI Training</h3>
                  <p>You can opt-out of having your inputs used for our "model improvement" via your account settings.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Right to Human Intervention</h3>
                  <p>You have the right to contest a decision made solely by our "Deep Research" automated systems if it has a legal or significant effect on you.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">7. SUB-PROCESSORS AND VENDORS</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We share data with the following essential third parties under strict Data Processing Agreements (DPAs):
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cloud Infrastructure</h3>
                  <p>Amazon Web Services (AWS), Google Cloud Platform.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">AI Infrastructure</h3>
                  <p>Fal.ai (Media Generation), OpenAI/Anthropic (API LLMs).</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Payments</h3>
                  <p>Payu (India), Paypal (International).</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card className="border-0 shadow-lg bg-muted/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">8. CONTACT & GRIEVANCE REDRESSAL</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
               
              
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Grievance Officer</h3>
                  <a 
                    href="mailto:connect=@scalewalk.com" 
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


