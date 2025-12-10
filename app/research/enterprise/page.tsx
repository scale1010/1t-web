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
  Search,
  FileText,
  Globe,
  Download,
  BookOpen,
  Target,
  MessageSquare,
  ExternalLink,
  ArrowRight,
  Zap,
  Check,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"

export default function ResearchEnterprisePage() {
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
            1 thought
          </Link>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm font-medium text-primary">Research</span>
        </div>
        <Link href="/research/pro">
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
              <Link href="/research/pro">
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

      {/* Hero Section */}
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
                Cited, permission-aware answers—governed for the enterprise.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                [Deep Research Enterprise] grounds every claim in your content and the web with citations, honors permissions by default, and records a full provenance trail—all on the [Lab] platform (identity • policy • telemetry).
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Book a 15-min demo
                </button>
                <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                  Download security overview (PDF)
                </button>
              </div>

              <div className="flex items-center gap-4 bg-muted px-3 py-2 rounded-full text-sm animate-slide-up delay-400">
                <span className="text-muted-foreground">SSO · SCIM · RBAC · Audit API · DLP · Data residency</span>
              </div>
            </div>

            <div className="relative animate-fade-in delay-300">
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img
                  src="/placeholder-8ilyq.png"
                  alt="Deep Research Enterprise Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Belt */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-6">Enterprise logos (placeholder)</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>SAML/Okta</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Azure AD</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Google Workspace</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>SOC2/ISO</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Lock className="h-4 w-4 text-primary" />
                <span>Customer-managed keys</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Database className="h-4 w-4 text-primary" />
                <span>VPC options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              What leaders get
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Hours saved per brief/RFP/analysis across functions</h3>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-200">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Check className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Fewer escalations via cited, permission-clean answers</h3>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-400">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Reusable research with live notebooks and auto-refresh</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              How it works
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Connect & inherit permissions</h3>
              <p className="text-muted-foreground">Drive/SharePoint, Confluence/Notion, Slack/Teams, URLs; no over-permissioning.</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-200">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Ask with intent</h3>
              <p className="text-muted-foreground">Investigate (deep dive), Compare (side-by-side), Summarize (executive brief), Synthesize (recommendations).</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-400">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Review with provenance</h3>
              <p className="text-muted-foreground">Cited Answer + Evidence Graph (doc → snippet → author/date). Confidence chips and dissenting views included.</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-600">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Approve & publish</h3>
              <p className="text-muted-foreground">Human-in-the-loop checkpoints, policy checks (PII, export regions, retention), redaction.</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-800">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">5</span>
              </div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Export & audit</h3>
              <p className="text-muted-foreground">Docs/Slides/PDF/DOCX/Markdown for work; JSON/CSV for audit; webhooks to your archive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Core capabilities (enterprise)
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Citation-first by design</h3>
                <p className="text-muted-foreground">Every paragraph is footnoted; hover to see exact passages.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Evidence Graph & lineage</h3>
                <p className="text-muted-foreground">Who asked, which sources/snippets were used, how the final text was assembled.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Permission-aware retrieval</h3>
                <p className="text-muted-foreground">Users only see what they're allowed to see; admin-level overrides are logged.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compare & scenario testing</h3>
                <p className="text-muted-foreground">Side-by-side vendor/market comparisons; "what-would-change-this" toggles.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live notebooks & collections</h3>
                <p className="text-muted-foreground">Re-run briefs as sources update; pin trusted sources.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise exports</h3>
                <p className="text-muted-foreground">Docs/Slides with footnotes; CSV/JSON evidence packs; redacted variants by policy.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connectors & Integrations Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Connectors & integrations
            </h2>
            <p className="text-lg text-muted-foreground">All access honors source permissions and organization policies.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">Files & knowledge</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Google Drive/Docs</li>
                <li>OneDrive/SharePoint</li>
                <li>Confluence</li>
                <li>Notion</li>
                <li>Box</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Messaging</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Slack (channels/threads)</li>
                <li>Microsoft Teams (optional)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">CRM/Helpdesk (optional)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Salesforce</li>
                <li>Zendesk knowledge</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Data/BI (optional)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>BigQuery</li>
                <li>Snowflake (read-only views)</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="font-semibold mb-4 text-primary">Web capture</h3>
            <p className="text-muted-foreground">URL ingestor with snapshot & citation capture</p>
          </div>
        </div>
      </section>

      {/* Governance & Security Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Governance & security (your moat)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Lock className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Policy-as-code</h3>
                <p className="text-muted-foreground mb-4">
                  Source allow/deny, region & data-class rules, PII/PHI redaction, export restrictions, retention & legal holds.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Source allow/deny lists</li>
                  <li>• Region & data-class rules</li>
                  <li>• PII/PHI redaction</li>
                  <li>• Export restrictions</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Provenance & audit</h3>
                <p className="text-muted-foreground mb-4">
                  Immutable event stream—question, retrieval set, prompts, drafts, edits, approvers, exports—exportable via API/CSV.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Immutable event stream</li>
                  <li>• Full audit trail</li>
                  <li>• API/CSV exportable</li>
                  <li>• Deterministic replays</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Identity & access</h3>
                <p className="text-muted-foreground mb-4">
                  SSO/SAML, SCIM, RBAC, project/workspace scopes, approval flows.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• SSO/SAML integration</li>
                  <li>• SCIM provisioning</li>
                  <li>• RBAC controls</li>
                  <li>• Approval workflows</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Data controls</h3>
                <p className="text-muted-foreground mb-4">
                  Zero-retention modes, customer-managed keys (AWS KMS/GCP KMS/Azure KV), VPC/private routing options, data residency.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Zero-retention modes</li>
                  <li>• Customer-managed keys</li>
                  <li>• VPC/private routing</li>
                  <li>• Data residency controls</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/platform" className="text-primary hover:text-primary/80 font-medium transition-colors">
                See platform →
              </Link>
              <Link href="/security" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Security →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Control Framework Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Quality & control framework
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Evaluator sets (goldens)</h3>
              <p className="text-muted-foreground">Upload ground-truth Q&A; track precision/recall and hallucination rates over time.</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-200">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Settings className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Retrieval tuning</h3>
              <p className="text-muted-foreground">Per-workspace chunking, re-ranking, freshness windows, authority boosting.</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-400">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Hallucination budget</h3>
              <p className="text-muted-foreground">Below threshold, degrade to sources-only mode (summaries with citations, no synthesis).</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-600">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Human-in-the-loop</h3>
              <p className="text-muted-foreground">Mark sources trusted/disputed/outdated; require approver sign-off for regulated topics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Use cases
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">RFP & proposal acceleration</h3>
                <p className="text-muted-foreground">Cited responses, reusable snippets, redaction & approvals.</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-100">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">Competitive & market intelligence</h3>
                <p className="text-muted-foreground">Compare vendors/products with sourced claims.</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-200">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">Executive briefs & board packs</h3>
                <p className="text-muted-foreground">Export footnoted memos/slides ready for review.</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-300">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">Policy & compliance research</h3>
                <p className="text-muted-foreground">Permission-aware searches; full audit trail.</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-400">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">Support knowledge synthesis</h3>
                <p className="text-muted-foreground">Unify tickets, docs, and release notes into sourced guidance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Enterprise Prompts Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Example enterprise prompts
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardContent className="p-0 space-y-4">
                <p className="text-muted-foreground italic">"Draft a 2-page APAC launch risk memo with citations from Drive folder 'Go-To-Market' + the last 60 days of #support Slack."</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in delay-100">
              <CardContent className="p-0 space-y-4">
                <p className="text-muted-foreground italic">"Compare Vendor A vs Vendor B on TCO, security, roadmap, SLA—table with sources and confidence."</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in delay-200">
              <CardContent className="p-0 space-y-4">
                <p className="text-muted-foreground italic">"Create a board-ready summary of Q3 customer churn drivers with footnotes and an appendix of sources."</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in delay-300">
              <CardContent className="p-0 space-y-4">
                <p className="text-muted-foreground italic">"Synthesize policy updates affecting our EU data handling; include what would change the conclusion."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Telemetry & ROI Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Telemetry & ROI (for leaders)
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {[
              { metric: "≈100%", label: "answers with citations (target)" },
              { metric: "50%+", label: "faster time-to-first-draft vs. baseline" },
              { metric: "80%", label: "reuse rate of notes/collections across teams" },
              { metric: "95%", label: "coverage of connectors (% of corpus searchable)" },
              { metric: "60%", label: "escalation reduction (policy/compliance reviews avoided)" },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-primary">{item.metric}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging & Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Packaging & pricing
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
                <h3 className="text-2xl font-semibold mb-4">Deep Research Enterprise SKU</h3>
                <p className="text-muted-foreground mb-6">
                  Seats + usage model with optional add-on packs for enhanced capabilities.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">BI/CRM packs</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Salesforce integration</li>
                      <li>• BigQuery/Snowflake</li>
                      <li>• Zendesk knowledge</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Private/VPC routing</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• VPC deployment</li>
                      <li>• Private routing</li>
                      <li>• Data residency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">CMK</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Customer-managed keys</li>
                      <li>• AWS KMS/GCP KMS</li>
                      <li>• Azure Key Vault</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium SLA</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 99.9% uptime</li>
                      <li>• Dedicated support</li>
                      <li>• Response guarantees</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Book a 15-min demo
              </button>
              <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                Download security overview
              </button>
              <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            FAQ (security & operations)
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Will users see documents they can't access?",
                a: "No. Retrieval respects source permissions; cross-workspace access is blocked by default.",
              },
              {
                q: "Can we restrict or prioritize sources?",
                a: "Yes—policy supports allow/deny lists, trust weighting, and redaction rules.",
              },
              {
                q: "How do you handle data retention and legal holds?",
                a: "Per-policy retention with hold flags; audit events and exports preserved accordingly.",
              },
              {
                q: "Can we replay a past answer for audit?",
                a: "Yes—deterministic replays with the exact retrieval set, prompts, and parameters.",
              },
              {
                q: "Do you support on-prem/VPC?",
                a: "SaaS by default; VPC/private routing and customer-managed keys are available.",
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

      {/* Bottom CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-8">
            Turn scattered knowledge into defensible answers.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Book a 15-min demo
            </button>
            <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
              Download security overview (PDF)
            </button>
          </div>
          <Link href="/platform" className="text-primary hover:text-primary/80 font-medium transition-colors">
            See platform
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
} 