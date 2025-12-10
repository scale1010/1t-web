"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Shield,
  Users,
  CheckCircle,
  Lock,
  BarChart3,
  FileCheck,
  Settings,
  Eye,
  Database,
  Award,
  Headphones,
  Sparkles,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"

export default function VideoEnterprisePage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState("Enterprise")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleAIPlatformClick = () => {
    scrollToTop()
  }

  const FloatingToggle = () => (
    <div
      className={`fixed top-20 right-4 z-40 transition-all duration-300 ${scrollY > 100 ? "opacity-100" : "opacity-0"}`}
    >
      <div className="bg-background/80 backdrop-blur-md border border-border rounded-lg p-1 shadow-lg">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
          <Sparkles className="h-4 w-4 text-primary" />
          <Link
            href="/"
            onClick={handleAIPlatformClick}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            AI Platform
          </Link>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm font-medium text-primary">Video</span>
        </div>
        <Link href="/video/pro">
          <button
            onClick={() => scrollToTop()}
            className="px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm text-muted-foreground hover:text-foreground"
          >
            Pro
          </button>
        </Link>
        <button
          onClick={() => {
            setActiveTab("Enterprise")
            scrollToTop()
          }}
          className="px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm bg-primary text-primary-foreground shadow-sm"
        >
          Enterprise
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <FloatingToggle />
      <ChatInterface />

      <section className="py-8 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center">
            <div className="bg-muted p-1 rounded-lg">
              <Link href="/video/pro">
                <button
                  onClick={() => scrollToTop()}
                  className="px-6 py-2 rounded-md font-medium transition-all duration-300 text-sm text-muted-foreground hover:text-foreground"
                >
                  Pro
                </button>
              </Link>
              <button
                onClick={() => {
                  setActiveTab("Enterprise")
                  scrollToTop()
                }}
                className="px-6 py-2 rounded-md font-medium transition-all duration-300 bg-background text-foreground shadow-sm"
              >
                Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div
            className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-work-sans)] leading-tight">
                On-brand, compliant training & marketing videos—in minutes.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                VX Enterprise runs on the Lab Platform (identity, policy, telemetry). Watermarking, approvals, LMS/DAM,
                and audit built in.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Book demo
                </button>
                <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                  See security
                </button>
                <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                  2-min overview →
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in delay-300">
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img
                  src="/video-enterprise-hero.png"
                  alt="VX Enterprise Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { metric: "90%", label: "faster script-to-publish" },
              { metric: "1-click", label: "localization (VO, captions, on-screen text)" },
              { metric: "100%", label: "brand consistency via style embeddings" },
              { metric: "Audit-ready", label: "exports (policy checks, lineage)" },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-primary">{item.metric}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Brief", desc: "Define your video requirements and objectives", icon: FileCheck },
              { step: "2", title: "Storyboard", desc: "AI generates visual storyboard from your brief", icon: Eye },
              { step: "3", title: "Edit", desc: "Refine and customize with enterprise tools", icon: Settings },
              { step: "4", title: "Publish", desc: "Export to SCORM/xAPI & DAM write-back", icon: Database },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-sm text-primary font-semibold">Step {item.step}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Enterprise capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Brand-style engine",
                desc: "Typography, motion, VO timbre automatically applied",
              },
              {
                icon: CheckCircle,
                title: "Approval flows & reviews",
                desc: "Role-based, tracked approval processes",
              },
              {
                icon: Eye,
                title: "Dual watermarking",
                desc: "Visible + invisible watermarking for content protection",
              },
              {
                icon: Shield,
                title: "Policy checks",
                desc: "PII, disclaimers, logo usage, region compliance",
              },
              {
                icon: BarChart3,
                title: "Analytics",
                desc: "TTFV, edit-to-publish %, LMS completion tracking",
              },
              {
                icon: Users,
                title: "Team collaboration",
                desc: "Multi-user editing and review workflows",
              },
            ].map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Enterprise integrations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">LMS</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Cornerstone</li>
                <li>Workday</li>
                <li>Blackboard</li>
                <li>Moodle</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">DAM/CMS</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Adobe</li>
                <li>Bynder</li>
                <li>Sitecore</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">SSO/IDP</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Okta</li>
                <li>Azure AD</li>
                <li>Google Workspace</li>
                <li>SAML 2.0</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Storage/KMS</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AWS S3</li>
                <li>Google Cloud Storage</li>
                <li>Customer-managed keys</li>
                <li>Zero-trust architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Governance & Security
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Lock className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Policy-as-code</h3>
                <p className="text-muted-foreground mb-4">
                  Automated policy enforcement across projects and markets with immutable audit ledger.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Audit ledger with immutable lineage</li>
                  <li>• Data controls: zero-retention mode, residency, DLP</li>
                  <li>• Compliance: SOC2/ISO roadmap</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
                <p className="text-muted-foreground mb-4">
                  Enterprise-grade security with DPA & indemnity options for complete peace of mind.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SOC2 Type II certified</li>
                  <li>• GDPR & CCPA compliant</li>
                  <li>• DPA & indemnity options</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Enterprise use cases
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "L&D",
                desc: "Onboarding, compliance training, skill development",
                examples: ["Employee onboarding", "Compliance training", "Skills development"],
              },
              {
                icon: Award,
                title: "Brand Ops",
                desc: "Ad variants, product explainers, marketing content",
                examples: ["Product launches", "Marketing campaigns", "Brand guidelines"],
              },
              {
                icon: Headphones,
                title: "Support/Docs",
                desc: "How-tos, release notes, customer education",
                examples: ["Product tutorials", "Release notes", "Customer support"],
              },
            ].map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <useCase.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.desc}</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {useCase.examples.map((example, i) => (
                      <li key={i}>• {example}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Customer success stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">75%</div>
                  <div className="text-muted-foreground">reduction in training video production time</div>
                </div>
                <blockquote className="text-lg mb-4">
                  "VX Enterprise transformed our L&D workflow. We went from weeks to hours for compliance training
                  videos."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Sarah Chen, Head of Learning & Development, TechCorp
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <div className="text-muted-foreground">faster brand-compliant content creation</div>
                </div>
                <blockquote className="text-lg mb-4">
                  "The brand consistency and approval workflows are game-changers for our marketing team."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Michael Rodriguez, Brand Operations Manager, GlobalBrand
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Enterprise packaging
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Platform (Required)</h3>
                <p className="text-muted-foreground mb-4">
                  Lab governance/data plane provides identity, policy, and telemetry foundation.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>• Identity & access management</div>
                  <div>• Policy enforcement</div>
                  <div>• Audit & compliance</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">VX Enterprise SKU</h3>
                <p className="text-muted-foreground mb-6">
                  Seats + usage model with optional add-on packs for enhanced capabilities.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Brand Pack</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Style embeddings</li>
                      <li>• Brand guidelines</li>
                      <li>• Asset management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compliance Pack</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Policy checks</li>
                      <li>• Audit trails</li>
                      <li>• Watermarking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Localization Pack</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Multi-language VO</li>
                      <li>• Auto-captions</li>
                      <li>• Regional compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do you ensure brand control across all video content?",
                a: "Our brand-style engine automatically applies your typography, motion graphics, and voice timbre to all content. Combined with approval workflows, this ensures 100% brand consistency.",
              },
              {
                q: "What legal review checkpoints are available?",
                a: "Role-based approval flows with tracked reviews, policy checks for PII and disclaimers, and immutable audit trails for complete legal oversight.",
              },
              {
                q: "How is data retention handled?",
                a: "Zero-retention mode available with customer-managed keys. Data residency controls and DLP policies ensure compliance with regional requirements.",
              },
              {
                q: "What indemnity options are provided?",
                a: "Enterprise customers receive comprehensive DPA coverage and indemnity options as part of our SOC2/ISO compliance framework.",
              },
              {
                q: "Which LMS platforms are supported?",
                a: "Native integrations with Cornerstone, Workday, Blackboard, Moodle, and SCORM/xAPI compatibility for any LMS.",
              },
              {
                q: "How does watermarking work?",
                a: "Dual watermarking system with both visible and invisible watermarks for content protection and tracking across all distribution channels.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-8">
            Ready to transform your enterprise video workflow?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Talk to a solutions engineer
            </button>
            <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
              Schedule a 15-min fit call
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
              Download security overview (PDF)
            </Link>
            <Link href="/platform" className="text-primary hover:text-primary/80 transition-colors">
              See platform →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
