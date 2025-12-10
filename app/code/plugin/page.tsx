"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Download,
  Play,
  FileText,
  Check,
  ArrowRight,
  Code,
  Terminal,
  Zap,
  GitBranch,
  Command,
  Eye,
  Sparkles,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"

export default function CodePluginPage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState("VS Code Plugin")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const workflowSteps = [
    {
      title: "Plan",
      description:
        "Ask: 'Add password reset to auth service.' VCX drafts a Change Plan (files, steps, blast-radius, OWNERS).",
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      title: "Generate",
      description: "Apply diffs across files; VCX writes code and tests.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Explain & refine",
      description: "Chat about any line or file; request edits by intent.",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: "Check",
      description: "Secrets, licenses, lint, and basic security/a11y checks run inline.",
      icon: <Check className="w-6 h-6" />,
    },
    {
      title: "Open PR",
      description: "One click to open a PR with context, checklist, and links to issues.",
      icon: <GitBranch className="w-6 h-6" />,
    },
  ]

  const features = [
    {
      title: "Repo-aware planning",
      description: "Understands your structure, dependencies, and codeowners before it writes a line.",
      icon: <Terminal className="w-8 h-8" />,
    },
    {
      title: "Multi-file codegen",
      description: "Safely edits many files with rationale attached; granular undo.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Tests & fixtures",
      description: "Generates unit/integration tests, mocks, and fixtures tuned to your stack.",
      icon: <Check className="w-8 h-8" />,
    },
    {
      title: "Inline commands",
      description: "Add tests, Refactor, Explain, Document, Fix typing, Add logging.",
      icon: <Command className="w-8 h-8" />,
    },
    {
      title: "Refactor macros",
      description: "Guided flows for API renames, library upgrades, and scaffolding.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Docs & changelogs",
      description: "Updates README, migration notes, and CHANGELOG entries automatically.",
      icon: <FileText className="w-8 h-8" />,
    },
  ]

  const prompts = [
    "Create a REST endpoint POST /auth/reset-password with rate limiting and tests.",
    "Refactor UserService to async/await; update callers and add integration test.",
    "Migrate from axios v0.x to v1.x and update error handling patterns.",
    "Explain why this query is slow and propose an index + code change.",
  ]

  const shortcuts = [
    { key: "⌘I / Ctrl+I", action: "Ask VCX / Open chat" },
    { key: "⌘Shift+P → 'VCX: Plan change'", action: "Generate Change Plan" },
    { key: "⌘.", action: "Apply suggested fix" },
    { key: "⌘Enter in PR composer", action: "Open PR with VCX context" },
  ]

  const languages = [
    "JavaScript",
    "TypeScript",
    "Node",
    "React/Next",
    "Python (FastAPI/Django)",
    "Go",
    "Java/Spring",
    "and more",
  ]

  const integrations = [
    { category: "Source/CI", tools: "GitHub, GitLab, Bitbucket · Actions, GitLab CI, Jenkins, CircleCI" },
    { category: "Issues/Docs", tools: "Jira, Linear, Notion, Markdown/Docs folders" },
    { category: "Observability", tools: "Sentry, Datadog (link PRs to incidents/releases)" },
  ]

  const faqs = [
    {
      q: "How is this different from autocomplete?",
      a: "Autocomplete suggests lines; VCX plans, writes multi-file changes & tests, runs checks, and opens PRs.",
    },
    {
      q: "Does it work with monorepos?",
      a: "Yes—scope by folder or service; plans include blast-radius.",
    },
    {
      q: "Can I see what it changed and why?",
      a: "Every edit carries a rationale; diffs show intent and alternatives.",
    },
    {
      q: "What if a check fails?",
      a: "VCX suggests fixes inline. You can apply or edit manually.",
    },
    {
      q: "Can I use it without connecting CI?",
      a: "Yes—CI integration is optional. You'll still get local checks and PR creation.",
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
              AI Platform
            </Link>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm font-medium text-primary">Code</span>
          </div>
          <div className="p-1">
            <Link href="/code/pro">
              <button
                onClick={() => scrollToTop()}
                className="px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm text-muted-foreground hover:text-foreground"
              >
                Pro
              </button>
            </Link>
            <Link href="/code/enterprise">
              <button
                onClick={() => scrollToTop()}
                className="px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm text-muted-foreground hover:text-foreground"
              >
                Enterprise
              </button>
            </Link>
            <button className="px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm bg-primary text-primary-foreground shadow-sm">
              VS Code Plugin
            </button>
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
                  onClick={() => scrollToTop()}
                  className="px-6 py-2 rounded-md font-medium transition-all duration-300 text-muted-foreground hover:text-foreground"
                >
                  Pro
                </button>
              </Link>
              <Link href="/code/enterprise">
                <button
                  onClick={() => scrollToTop()}
                  className="px-6 py-2 rounded-md font-medium transition-all duration-300 text-muted-foreground hover:text-foreground"
                >
                  Enterprise
                </button>
              </Link>
              <button className="px-6 py-2 rounded-md font-medium transition-all duration-300 bg-background text-foreground shadow-sm">
                VS Code Plugin
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
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-work-sans)] leading-tight animate-slide-up">
              Code at the speed of thought—without leaving VS Code.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto animate-slide-up delay-200">
              VCX is an AI pair programmer that plans changes, writes code & tests, and opens review-ready PRs—all
              inside your editor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                <Download className="w-5 h-5" />
                Install for VS Code
              </button>
              <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch 90-sec demo
              </button>
              <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-2">
                <FileText className="w-5 h-5" />
                View Docs
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground animate-slide-up delay-400">
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                <Check className="w-4 h-4 text-primary" />
                Works with GitHub
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                <Check className="w-4 h-4 text-primary" />
                GitLab
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                <Check className="w-4 h-4 text-primary" />
                Bitbucket
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why developers use VCX */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Why developers use VCX
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Fewer review rounds on common tasks",
              "Faster time-to-merge for features and refactors",
              "Higher coverage with auto-generated tests",
              "Less glue work—docs and changelogs stay in sync",
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-background border border-border rounded-2xl">
                <Check className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core workflow */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Core workflow
            </h2>
            <p className="text-xl text-muted-foreground mb-8">What actually happens</p>
            <div className="text-lg font-medium text-primary">Plan → Diff → Tests → PR. All in VS Code.</div>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground mx-auto hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            What's inside
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editor experience */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Editor experience
          </h2>
          <div className="aspect-video bg-card border border-border rounded-2xl overflow-hidden shadow-2xl mb-8">
            <div className="w-full h-full bg-gray-900 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-4">VS Code with VCX</span>
              </div>
              <div className="grid grid-cols-4 gap-4 h-full">
                <div className="bg-gray-800 rounded p-4">
                  <div className="text-gray-400 text-sm mb-2">Side Panel</div>
                  <div className="space-y-2 text-xs">
                    <div className="text-blue-400">Change Plan</div>
                    <div className="text-green-400">✓ Steps defined</div>
                    <div className="text-yellow-400">⚠ Review blast-radius</div>
                    <div className="text-gray-400">OWNERS: @team-auth</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded p-4 col-span-2">
                  <div className="text-gray-400 text-sm mb-2">Diff View</div>
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-green-400">+ const resetPassword = async (email) =&gt; {"{"}</div>
                    <div className="text-green-400">+ // Rate limiting logic</div>
                    <div className="text-green-400">+ return await authService.reset(email)</div>
                    <div className="text-green-400">+ {"}"}</div>
                    <div className="flex gap-2 mt-2">
                      <button className="bg-green-600 text-white px-2 py-1 rounded text-xs">Accept</button>
                      <button className="bg-gray-600 text-white px-2 py-1 rounded text-xs">Split</button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded p-4">
                  <div className="text-gray-400 text-sm mb-2">Checks</div>
                  <div className="space-y-1 text-xs">
                    <div className="text-green-400">✓ Secrets</div>
                    <div className="text-green-400">✓ Licenses</div>
                    <div className="text-green-400">✓ Lint</div>
                    <div className="text-blue-400">PR ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-muted p-4 rounded-lg">
              <div className="font-medium mb-2">Toast Notifications</div>
              <div className="space-y-1 text-muted-foreground">
                <div>"Change Plan ready — review blast-radius & owners"</div>
                <div>"Checks passed • Secrets ✓ • Licenses ✓ • Lint ✓"</div>
                <div>"PR opened with tests and docs attached"</div>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="font-medium mb-2">PR Composer</div>
              <div className="text-muted-foreground">
                Pre-filled description, checklist, linked issues, suggested reviewers.
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="font-medium mb-2">Inline Actions</div>
              <div className="text-muted-foreground">Accept, split, or ask for a different approach on any diff.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prompts that work */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Prompts that work
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {prompts.map((prompt, index) => (
              <div key={index} className="bg-background border border-border rounded-2xl p-6">
                <div className="font-mono text-sm text-primary mb-2">$ vcx ask</div>
                <p className="text-foreground">{prompt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyboard shortcuts */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Keyboard shortcuts
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {shortcuts.map((shortcut, index) => (
              <div key={index} className="flex items-center justify-between bg-muted p-4 rounded-lg">
                <span className="text-foreground">{shortcut.action}</span>
                <kbd className="bg-background border border-border px-3 py-1 rounded font-mono text-sm">
                  {shortcut.key}
                </kbd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language & framework support */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Language & framework support
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {languages.map((lang, index) => (
              <div key={index} className="bg-background border border-border px-4 py-2 rounded-full">
                {lang}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground">
            Don't see your stack?{" "}
            <Link href="#" className="text-primary hover:text-primary/80">
              Request it in Discord
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Integrations
          </h2>
          <div className="space-y-6">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold mb-2">{integration.category}</h3>
                <p className="text-muted-foreground">{integration.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & controls */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Privacy & controls
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "You decide what's shared. Repo-scoped permissions and project-level toggles.",
              "No training on your private code by default.",
              "Configurable model routing with cost caps and logs.",
              "Audit trail of prompts, actions, and outputs (export from settings).",
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-background border border-border rounded-2xl">
                <Check className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick start */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Quick start
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              "Install VCX from the VS Code Marketplace.",
              "Connect a repo and pick a branch or folder scope.",
              "Ask for a Change Plan and start shipping.",
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {index + 1}
                </div>
                <p className="text-foreground">{step}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <Download className="w-5 h-5" />
              Install for VS Code
            </button>
            <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-2">
              <FileText className="w-5 h-5" />
              View Docs
            </button>
            <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch 90-sec demo
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-background border border-border rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Free trial</h3>
              <p className="text-muted-foreground mb-6">Full features, limited usage</p>
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium">
                Start free
              </button>
            </div>
            <div className="bg-background border border-border rounded-2xl p-8 text-center ring-2 ring-primary">
              <h3 className="text-2xl font-bold mb-4">VCX</h3>
              <p className="text-muted-foreground mb-6">Monthly per seat</p>
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium">
                Get started
              </button>
            </div>
            <div className="bg-background border border-border rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Teams</h3>
              <p className="text-muted-foreground mb-6">Seat bundles, shared settings</p>
              <button className="w-full border border-border hover:border-primary py-3 rounded-lg font-medium">
                Contact sales
              </button>
            </div>
          </div>
          <p className="text-center text-muted-foreground">
            Need SSO and policy controls?{" "}
            <Link href="/code/enterprise" className="text-primary hover:text-primary/80">
              See Code-gen page
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12">
            FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-3 text-foreground">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-8">
            Ship better PRs, faster—right in your editor.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <Download className="w-5 h-5" />
              Install for VS Code
            </button>
            <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center gap-2">
              <FileText className="w-5 h-5" />
              View Docs
            </button>
            <button className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md">
              Join Discord
            </button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
