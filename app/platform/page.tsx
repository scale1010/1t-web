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
  Code,
  Video,
  Cpu,
  Network,
  Key,
  Server,
  Cloud,
  Monitor,
  GitBranch,
  Workflow,
  RefreshCw,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"

export default function PlatformPage() {
  const [scrollY, setScrollY] = useState(0)

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

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <ChatInterface />

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
                One platform. Many AI tools. Zero governance gaps.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                [Lab] unifies identity, policy, and telemetry across Video, Code-gen, and Deep Research—so you can move fast without losing control.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Book a 15-min demo
                </button>
                <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                  Download platform overview (PDF)
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
                  alt="Lab Platform Architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lab Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { metric: "Control", label: "one policy engine for sources, models, outputs, and exports" },
              { metric: "Clarity", label: "end-to-end lineage from prompt → edits → export/PR" },
              { metric: "Cost", label: "route to the right model; cache & distill to keep spend in check" },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-primary">{item.metric}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Architecture (overview)
            </h2>
          </div>
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl mb-6">
            <img
              src="/placeholder-8ilyq.png"
              alt="Lab Platform Architecture Diagram"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-muted-foreground">
            Sources & IDP → Governance & Data Plane (Identity, Policy, Telemetry) → Model & Cost Router → Products (Video, CX/VCX, Deep Research) → Admin & APIs.
          </p>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Core pillars
            </h2>
          </div>
          
          {/* Identity & Access */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Identity & Access</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">SSO/SAML</h4>
                  <p className="text-muted-foreground">Okta, Azure AD, Google Workspace</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">SCIM</h4>
                  <p className="text-muted-foreground">Automated user provisioning</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">RBAC</h4>
                  <p className="text-muted-foreground">Role-based access control</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">Workspaces & projects, least-privilege scopes, service accounts & PATs</p>
              <p className="text-muted-foreground">Approvals for legal/brand/security sign-off</p>
            </div>
          </div>

          {/* Policy-as-Code */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Policy-as-Code</h3>
              <p className="text-muted-foreground">Write once, enforce everywhere (generate, edit, export, PR).</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Content & export</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Watermarking</li>
                    <li>• Disclaimers</li>
                    <li>• Region blocks</li>
                    <li>• Retention</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Data & privacy</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• PII/PHI redaction</li>
                    <li>• DLP/secret scans</li>
                    <li>• Source allow/deny</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Engineering</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Component allow-lists</li>
                    <li>• Token bounds</li>
                    <li>• CI gates</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Models</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Allow-listed providers</li>
                    <li>• Budget caps</li>
                    <li>• Deterministic replays</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Example (human-readable):</h4>
              <code className="text-sm text-muted-foreground">
                exports: watermark=required • regions=[US,EU] | data: pii_redaction=strict | models: allowed=[A.latest,B.saver] • max_cost=$0.20
              </code>
            </div>
          </div>

          {/* Telemetry & Audit */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Telemetry & Audit</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Immutable event stream</h4>
                  <p className="text-muted-foreground">prompt → retrieval set → draft → edits → checks → export/PR</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Evidence Graph</h4>
                  <p className="text-muted-foreground">paragraph ↔ source/doc/snippet/author/date</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">Exports: JSON/CSV evidence packs; webhooks for SIEM</p>
            </div>
          </div>

          {/* Data Security & Residency */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Data Security & Residency</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Key className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Zero-retention modes</h4>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Customer-managed keys</h4>
                  <p className="text-sm text-muted-foreground">AWS KMS/GCP KMS/Azure KV</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Region pinning</h4>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Encryption & controls</h4>
                  <p className="text-sm text-muted-foreground">At rest/in transit, key rotation, egress controls</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Model & Cost Router */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Model & Cost Router</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Route by task & risk</h4>
                  <p className="text-muted-foreground">Fall back to higher-quality only when needed</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Caching & distillation</h4>
                  <p className="text-muted-foreground">Reduce unit cost; quotas & alerts</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <RefreshCw className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Replays</h4>
                  <p className="text-muted-foreground">For reproducibility and audits</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Integration Graph */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Integration Graph</h3>
              <p className="text-muted-foreground">Certified connectors with ACL-aware sync & write-backs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-primary">Video</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>LMS/DAM/CMS</li>
                  <li>Cornerstone, Workday, Blackboard</li>
                  <li>Adobe, Bynder</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-primary">Code-gen</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Git, CI, IDP</li>
                  <li>GitHub/GitLab/Bitbucket</li>
                  <li>Actions/GitLab CI/Jenkins</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-primary">Research</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Drive/M365, Confluence/Notion/Box</li>
                  <li>Slack/Teams</li>
                  <li>Salesforce/Zendesk, Snowflake/BigQuery</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">Connector SDK for partners; versioned schemas</p>
            </div>
          </div>

          {/* Admin Console & APIs */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Admin Console & APIs</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Monitor className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Dashboards</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Usage</li>
                    <li>• Policy coverage</li>
                    <li>• Model spend</li>
                    <li>• Connector health</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">APIs & CLI</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Audit Export, Policy, Models, Connectors, Identity</li>
                    <li>• Webhooks for events</li>
                    <li>• CLI: configure envs, test policies, trigger audits</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What runs on Lab Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              What runs on [Lab]
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video</h3>
                <p className="text-muted-foreground mb-4">On-brand, watermarked exports to LMS/DAM</p>
                <Link href="/video/enterprise" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">CX / VCX</h3>
                <p className="text-muted-foreground mb-4">Repo-aware plans, tests, policy-checked PRs (browser + VS Code)</p>
                <Link href="/code/enterprise" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep Research</h3>
                <p className="text-muted-foreground mb-4">Cited, permission-aware answers with provenance</p>
                <Link href="/research/enterprise" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* On-prem / Private Cloud Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              On-prem / Private Cloud hosting
            </h2>
            <p className="text-xl text-muted-foreground">Choose where [Lab] runs—SaaS, your VPC, or your data center.</p>
          </div>

          {/* Deployment Options */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Deployment options</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">SaaS (multi-tenant)</h4>
                  <p className="text-muted-foreground mb-4">Fastest path to value; full feature set</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Server className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Private Cloud (single-tenant VPC)</h4>
                  <p className="text-muted-foreground mb-4">Dedicated VPC in your AWS/GCP/Azure; peered networking, private egress</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">On-prem (Kubernetes)</h4>
                  <p className="text-muted-foreground mb-4">Helm-based install; you manage infra, we provide updates & support</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Security & Networking */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Security & networking</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Key className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold">BYOK/CMK</h4>
                <p className="text-muted-foreground">AWS KMS/GCP KMS/Azure KV, HSM optional</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Network className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold">Private networking</h4>
                <p className="text-muted-foreground">VPC peering / PrivateLink / Private Service Connect</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Globe className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold">Data residency</h4>
                <p className="text-muted-foreground">Pin workloads & storage to chosen regions</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold">Egress controls</h4>
                <p className="text-muted-foreground">Allow-listed endpoints; offline mode for selected tasks</p>
              </div>
            </div>
          </div>

          {/* Ops & Lifecycle */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Ops & lifecycle</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Settings className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold">Updates</h4>
                <p className="text-muted-foreground">Rolling upgrades; canary channels; maintenance windows</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Monitor className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold">Observability</h4>
                <p className="text-muted-foreground">Prometheus/Grafana, OpenTelemetry, logs to your SIEM</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Database className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold">Backups & DR</h4>
                <p className="text-muted-foreground">Encrypted snapshots; RPO/RTO targets by tier</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Headphones className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold">Support</h4>
                <p className="text-muted-foreground">Standard or premium SLAs, named TAM (enterprise)</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Model gateway can run in-VPC; bring your own model endpoints if required
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Some third-party features (e.g., specific watermark services) may require outbound access—documented in the runbook
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Talk to Sales
              </button>
              <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                Download self-hosting guide (PDF)
              </button>
              <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                View docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Observability & ROI Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Observability & ROI (leader view)
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {[
              { metric: "95%+", label: "governance attach rate (% of logos using SSO + policy + audit)" },
              { metric: "80%", label: "policy coverage (violations prevented by rule type)" },
              { metric: "60%", label: "model spend per unit (cost per video/PR/brief vs baseline)" },
              { metric: "3x", label: "outcome KPIs (time-to-first-video, PR merge delta, % answers with citations)" },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-primary">{item.metric}</div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Plan Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Implementation plan (30-60-90)
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-primary-foreground">0-30</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Day 0–30</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• SSO/SCIM</li>
                  <li>• Connect 2–3 sources</li>
                  <li>• Set base policies</li>
                  <li>• Pilot one product</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-primary-foreground">31-60</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Day 31–60</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Turn on audit exports</li>
                  <li>• Router budgets</li>
                  <li>• Certify 3 write-backs</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-primary-foreground">61-90</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Day 61–90</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Roll to 2nd/3rd product</li>
                  <li>• Publish dashboards</li>
                  <li>• Tune DLP & residency</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packaging & Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Packaging & pricing
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">[Lab] Platform (enterprise-required)</h3>
                <p className="text-muted-foreground mb-4">
                  Identity, policy, telemetry, audit APIs, router, connectors
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Product SKUs</h3>
                <p className="text-muted-foreground mb-6">
                  Video / CX / VCX / Deep Research / Agents
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Add-ons</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">BYOK/CMK</h4>
                    <p className="text-sm text-muted-foreground">Customer-managed keys</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">VPC/private routing</h4>
                    <p className="text-sm text-muted-foreground">Private network options</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data residency pack</h4>
                    <p className="text-sm text-muted-foreground">Regional compliance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium SLA</h4>
                    <p className="text-sm text-muted-foreground">Enhanced support</p>
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
                Download platform overview
              </button>
              <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
                View docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is my data used to train models?",
                a: "No by default; optional anonymized feedback only under policy.",
              },
              {
                q: "Can we bring our own models/endpoints?",
                a: "Yes—allow-list providers/versions; route by task; set budgets & replays.",
              },
              {
                q: "Do we need all products to use [Lab]?",
                a: "No—start with one and expand; policies & identity carry over.",
              },
              {
                q: "How do permissions work?",
                a: "We inherit source permissions and enforce workspace RBAC; cross-workspace access is blocked unless approved.",
              },
              {
                q: "Can we export everything for audit?",
                a: "Yes—download evidence packs (JSON/CSV) or stream via webhooks to your SIEM.",
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-8">
            One governance layer. All your AI work.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Book a 15-min demo
            </button>
            <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
              Download platform overview (PDF)
            </button>
          </div>
          <Link href="/security" className="text-primary hover:text-primary/80 font-medium transition-colors">
            Security
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
} 