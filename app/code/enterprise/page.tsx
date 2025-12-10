"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Shield,
  Users,
  Lock,
  CheckCircle,
  ArrowRight,
  Eye,
  Database,
  Settings,
  FileText,
  Globe,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"

export default function CodeEnterprisePage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState("Enterprise")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const outcomes = [
    "80% fewer design-system violations in PRs",
    "Faster cycle time from design → merged UI PRs",
    "Consistent tokens across brands/regions",
  ]

  const howItWorks = [
    {
      step: 1,
      title: "Connect & ingest",
      desc: "SSO, repo access; import tokens, component catalog, lint/security rules.",
    },
    {
      step: 2,
      title: "Map your DS",
      desc: "Bind components (e.g., Gin.Button) and token scales to generator outputs.",
    },
    {
      step: 3,
      title: "Generate & enforce",
      desc: "CX creates React/Next + Tailwind using approved components only; violations blocked.",
    },
    {
      step: 4,
      title: "PR with checks",
      desc: "Secrets/DLP, OSS licenses, a11y, and custom rules run automatically; fixes suggested.",
    },
    {
      step: 5,
      title: "Stories & tests",
      desc: "Storybook stories, unit/integration test stubs, and docs update included in the PR.",
    },
  ]

  const capabilities = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Design-system locking",
      desc: "Allow-lists, substitution rules, usage caps per component.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Token server sync",
      desc: "Colors, spacing, typography enforced at build & CI.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Code quality gates",
      desc: "ESLint/Prettier/custom rules + security baselines; fails closed.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-brand theming",
      desc: "Token packs per brand/region; rollout scheduling.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Storybook & test generation",
      desc: "Auto stories and test scaffolds for every component change.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Docs write-back",
      desc: "READMEs, migration notes, changelogs kept in sync.",
    },
  ]

  const integrations = [
    {
      category: "Design",
      items: ["Figma/Sketch (catalog + tokens sync)"],
    },
    {
      category: "Source & CI/CD",
      items: ["GitHub, GitLab, Bitbucket", "Actions, GitLab CI, Jenkins, CircleCI"],
    },
    {
      category: "Auth & Admin",
      items: ["Okta, Azure AD (SSO/SCIM/RBAC)"],
    },
    {
      category: "Docs & Knowledge",
      items: ["Storybook, Confluence, Notion"],
    },
    {
      category: "Issue tracking",
      items: ["Jira, Linear (auto-link plans/PRs)"],
    },
    {
      category: "Security & KMS",
      items: ["Customer-managed keys, DLP, egress controls"],
    },
  ]

  const useCases = [
    "Standardize product surfaces across squads and regions",
    "Migrate to a new design system (e.g., legacy → Gin/Grit) without churn",
    "Multi-brand rollouts with token packs and scheduled releases",
    "Regulated content—enforce disclaimers, a11y, and localization policies",
    "Rebrands—apply new tokens/components safely at scale",
  ]

  const faqs = [
    {
      q: "Can we block non-approved components?",
      a: "Yes—allow-lists and substitution rules enforced in CI; violations fail closed.",
    },
    {
      q: "Do you support multiple brands/regions?",
      a: "Yes—token packs and theming by tenant/brand with scheduled rollout.",
    },
    {
      q: "Where does generation run?",
      a: "SaaS by default; optional zero-retention and customer-managed keys. Self-hosted router available.",
    },
    {
      q: "Will this lock us in?",
      a: "No—output is standard React/Next + Tailwind. Policies live in Lab; you can adjust or export them.",
    },
    {
      q: "How are secrets and PII handled?",
      a: "DLP and egress controls; policy-based redaction; audit trail for every PR.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div
        className={`fixed top-20 right-4 z-40 transition-all duration-300 ${scrollY > 100 ? "opacity-100" : "opacity-0"}`}
      >
        <div className="bg-background/80 backdrop-blur-md border border-border rounded-lg shadow-lg">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
            <Sparkles className="h-4 w-4 text-primary" />
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              1 thought
            </Link>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm font-medium text-primary">Code</span>
          </div>
          <div className="p-1">
            <Link href="/code/pro">
              <button
                onClick={() => {
                  scrollToTop()
                }}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm ${
                  activeTab === "Pro"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Pro
              </button>
            </Link>
            <button
              onClick={() => {
                setActiveTab("Enterprise")
                scrollToTop()
              }}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm ${
                activeTab === "Enterprise"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Enterprise
            </button>
            <Link href="/code/plugin">
              <button
                onClick={() => {
                  scrollToTop()
                }}
                className="px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm text-muted-foreground hover:text-foreground"
              >
                VS Code Plugin
              </button>
            </Link>
          </div>
        </div>
      </div>

      <ChatInterface />

      <section className="py-8 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center">
            <div className="bg-muted p-1 rounded-lg">
              <Link href="/code/pro">
                <button
                  onClick={() => {
                    scrollToTop()
                  }}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                    activeTab === "Pro"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Pro
                </button>
              </Link>
              <button
                onClick={() => {
                  setActiveTab("Enterprise")
                  scrollToTop()
                }}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeTab === "Enterprise"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Enterprise
              </button>
              <Link href="/code/plugin">
                <button
                  onClick={() => {
                    scrollToTop()
                  }}
                  className="px-6 py-2 rounded-md font-medium transition-all duration-300 text-sm text-muted-foreground hover:text-foreground"
                >
                  VS Code Plugin
                </button>
              </Link>
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
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
              <span className="text-muted-foreground">Powered by</span>
              <Link href="/platform" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Lab
              </Link>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-work-sans)] leading-tight">
              Ship brand-safe UIs at scale—governed, consistent, auditable.
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              CX Enterprise maps your design system, enforces tokens & approved components, and opens policy-checked
              PRs. SSO, SCIM, audit, and CI gates run on the Lab platform (identity • policy • telemetry).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Book a 15-min demo
              </button>
              <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                Download security overview (PDF)
              </button>
            </div>

            <Link
              href="/platform"
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
            >
              See platform
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>SSO</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>SCIM</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>RBAC</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Audit API</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>DLP</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Data residency</span>
            </div>
            <div className="text-xs bg-muted px-2 py-1 rounded">SOC2 / ISO roadmap</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            What leaders get
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <p className="text-lg font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Core capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    {capability.icon}
                  </div>
                  <h3 className="font-semibold">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Integrations (enterprise-grade)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="font-semibold text-primary">{integration.category}</h3>
                  <ul className="space-y-2">
                    {integration.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Use cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            FAQ (security & operations)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="font-semibold">{faq.q}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.a}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-8">
            Standardize UI at scale—without slowing teams down.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Book a 15-min demo
            </button>
            <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
              Download security overview (PDF)
            </button>
          </div>
          <Link
            href="/platform"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
          >
            See platform
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
