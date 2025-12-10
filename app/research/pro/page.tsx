"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Check, ArrowRight, Sparkles, FileText, Users, Globe, Shield, Download, BookOpen, Zap, Target, BarChart3, MessageSquare, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"

export default function ResearchProPage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState("Pro")

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

      <div
        className={`fixed top-20 right-4 z-40 transition-all duration-300 ${scrollY > 100 ? "opacity-100" : "opacity-0"}`}
      >
        <div className="bg-background/80 backdrop-blur-md border border-border rounded-lg shadow-lg">
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
          <div className="p-1">
            <button
              onClick={() => {
                setActiveTab("Pro")
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
            <Link href="/research/enterprise">
              <button
                onClick={() => {
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
            </Link>
          </div>
        </div>
      </div>

      <ChatInterface />

      <section className="py-8 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center">
            <div className="bg-muted p-1 rounded-lg">
              <button
                onClick={() => {
                  setActiveTab("Pro")
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
              <Link href="/research/enterprise">
                <button
                  onClick={() => {
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
              </Link>
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-work-sans)] leading-tight animate-slide-up">
                Cited answers—without the rabbit holes.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up delay-200">
                [Deep Research Pro] finds, grounds, and synthesizes answers from your files and trusted sites. Every claim has a source card you can inspect. Save to a Notebook and export in one click.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
                <button
                  data-cta="start-free"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Start free
                </button>
                <button
                  data-cta="try-demo"
                  className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  Try interactive demo
                </button>
              </div>

              <div className="flex items-center gap-4 bg-muted px-3 py-2 rounded-full text-sm animate-slide-up delay-400">
                <span className="text-muted-foreground">Cited by default · Works with</span>
                <span className="text-primary font-medium">Drive/Notion/Confluence/Slack</span>
              </div>
            </div>

            <div className="relative animate-fade-in delay-300">
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 animate-float">
                <img
                  src="/placeholder-8ilyq.png"
                  alt="Deep Research Pro Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-1000" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-1500" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            Loved by analysts, PMs, founders, and creators.
          </p>
          <div className="flex justify-center items-center gap-8 animate-slide-up">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
              <span className="text-sm text-muted-foreground ml-2">4.9/5</span>
            </div>
            <div className="text-sm text-muted-foreground">•</div>
            <div className="text-sm text-muted-foreground">"Saves hours on research"</div>
            <div className="text-sm text-muted-foreground">•</div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-muted rounded"></div>
              <div className="w-6 h-6 bg-muted rounded"></div>
              <div className="w-6 h-6 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Why individuals & small teams use it
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Hours saved on briefs, memos, and proposals</h3>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-200">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Check className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Zero guesswork with inline citations for every paragraph</h3>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-400">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Reusable notes you can refresh as sources change</h3>
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
            <p className="text-lg text-muted-foreground">No citation → no claim.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Connect</h3>
              <p className="text-muted-foreground">Sign in and link Google Drive/Docs, OneDrive/SharePoint, Notion/Confluence, Slack (read-only).</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-200">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Ask</h3>
              <p className="text-muted-foreground">Choose a mode: Investigate (deep dive), Compare (side-by-side), Summarize (tight brief).</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-400">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Review</h3>
              <p className="text-muted-foreground">Read your Cited Answer with expandable source cards (doc, author, date, snippet). Mark useful/disputed.</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-600">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Export</h3>
              <p className="text-muted-foreground">Send to Google Docs/Word/Slides or copy Markdown—footnotes included. Save the thread to a Notebook.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Key capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Citation-first answers</h3>
                <p className="text-muted-foreground">Footnotes by default. Hover to see exact snippets and where they came from.</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-100">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Source cards</h3>
                <p className="text-muted-foreground">Document name, author, date, and the exact passage used—open in one click.</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-200">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Compare mode</h3>
                <p className="text-muted-foreground">Side-by-side tables for vendors, features, pricing, or claims.</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-300">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Assumptions & deltas</h3>
                <p className="text-muted-foreground">Toggle assumptions to see how the answer would change.</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-400">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">Notebooks</h3>
                <p className="text-muted-foreground">Pin best answers, add your notes, re-run with fresh sources later.</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-500">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Download className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">One-click exports</h3>
                <p className="text-muted-foreground">Google Docs, Word, Slides/PowerPoint, Markdown—footnotes preserved.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connectors Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Connectors (Pro level)
            </h2>
            <p className="text-lg text-muted-foreground">Everything respects the permissions of your accounts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Files & notes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Google Drive/Docs</li>
                <li>OneDrive/SharePoint</li>
                <li>Notion</li>
                <li>Confluence</li>
              </ul>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-200">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Messaging</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Slack (channels/threads you can access)</li>
              </ul>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-400">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Web</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Add URLs and capture pages with citation snapshots</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Controls Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Quality controls
            </h2>
            <p className="text-lg text-muted-foreground">Simple, user-friendly</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Confidence chip on each section</h3>
              <p className="text-muted-foreground">High / Medium / Low</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-200">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Search className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Show sources only option</h3>
              <p className="text-muted-foreground">If confidence is low</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-400">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Trusted sources pinning</h3>
              <p className="text-muted-foreground">Prioritize specific docs/folders/domains</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-600">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Blocklist for noisy sources</h3>
              <p className="text-muted-foreground">Or outdated sources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Use cases
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">Product & market briefs</h3>
                <p className="text-muted-foreground">Turn scattered links into a one-pager with footnotes</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-100">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">RFP answers</h3>
                <p className="text-muted-foreground">Reuse cited snippets across proposals</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-200">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">Competitive landscape</h3>
                <p className="text-muted-foreground">Compare vendors with side-by-side claims</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-300">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">Content drafts</h3>
                <p className="text-muted-foreground">Generate outlines and paragraphs you can justify with sources</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in delay-400">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold">Team updates</h3>
                <p className="text-muted-foreground">Weekly digest with citations your team can verify</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Prompts Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Example prompts
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">Brief</span>
                </div>
                <p className="text-muted-foreground italic">"Create a one-page brief on Feature X adoption. Use Drive folder 'Customer Research' and the last 30 days of Slack #feedback—include citations."</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in delay-100">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">Comparison</span>
                </div>
                <p className="text-muted-foreground italic">"Compare Vendor A vs Vendor B for price, roadmap, and security—table with sources."</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in delay-200">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">Summary</span>
                </div>
                <p className="text-muted-foreground italic">"Summarize Q2 release notes into a customer-facing update. Link every claim."</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in delay-300">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">Analysis</span>
                </div>
                <p className="text-muted-foreground italic">"List the top 5 risks to APAC launch with what evidence would change your conclusion."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exports & Sharing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Exports & sharing
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <FileText className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Docs/Slides with footnotes</h3>
              <p className="text-muted-foreground">And a source appendix</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-200">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Download className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Markdown for wikis</h3>
              <p className="text-muted-foreground">Notion/Confluence/Git</p>
            </div>
            <div className="text-center space-y-4 animate-fade-in delay-400">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <ExternalLink className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Share link to report</h3>
              <p className="text-muted-foreground">Read-only, cited report (optional)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4 text-foreground">
              Pricing & plans
            </h2>
          </div>

          <div className="overflow-x-auto pb-4 pt-6">
            <div className="flex gap-6 min-w-max px-4">
              <div className="bg-background border border-border rounded-2xl p-8 relative min-w-[280px] flex-shrink-0 flex flex-col">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/forever</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Limited questions/day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Basic connectors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Exports with small watermark</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg font-medium transition-colors border border-border hover:border-primary text-foreground">
                  Start free
                </button>
              </div>
              <div className="bg-background border border-border rounded-2xl p-8 relative min-w-[280px] flex-shrink-0 flex flex-col ring-2 ring-primary scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Higher limits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Full connectors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Notebooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Compare mode</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Watermark-free exports</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg font-medium transition-colors bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start free trial
                </button>
              </div>
              <div className="bg-background border border-border rounded-2xl p-8 relative min-w-[280px] flex-shrink-0 flex flex-col">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Ultra</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Shared Notebooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Shared connectors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Comment/review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Team analytics</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg font-medium transition-colors border border-border hover:border-primary text-foreground">
                  Start free trial
                </button>
              </div>
              <div className="bg-background border border-border rounded-2xl p-8 relative min-w-[280px] flex-shrink-0 flex flex-col">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">Custom</span>
                    <span className="text-muted-foreground block text-sm">contact us</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Everything in Ultra</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">SSO integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Custom workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">SLA guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-muted-foreground">White-label options</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg font-medium transition-colors border border-border hover:border-primary text-foreground">
                  Contact sales
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/research/enterprise"
              className="text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Need SSO, policies, and audits? → See Enterprise
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12 animate-fade-in">
            FAQ (Pro-focused)
          </h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-3 text-foreground">What if I don't have access to a document?</h3>
              <p className="text-muted-foreground">You won't see it. Answers only use sources your account can access.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-3 text-foreground">Can I force it to use specific sources?</h3>
              <p className="text-muted-foreground">Yes—pin trusted folders/files/domains before asking.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-3 text-foreground">How do citations work on the web?</h3>
              <p className="text-muted-foreground">We capture a snapshot and cite the exact passage/URL.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-3 text-foreground">Will my data be used to train models?</h3>
              <p className="text-muted-foreground">No by default. You can opt-in to share anonymous feedback signals.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-3 text-foreground">Does it replace my note-taking app?</h3>
              <p className="text-muted-foreground">Keep your app—export to Docs/Markdown or save to Notebooks and link out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-8 text-foreground">
            Turn scattered files into cited answers.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              data-cta="start-free"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start free
            </button>
            <button
              data-cta="try-demo"
              className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              Try interactive demo
            </button>
          </div>
          <Link
            href="/docs"
            className="text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-2 transition-colors"
          >
            View docs
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
} 