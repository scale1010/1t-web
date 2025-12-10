"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Check, ArrowRight, Code, Terminal, Zap, GitBranch, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"

export default function CodeProPage() {
  const [activeCategory, setActiveCategory] = useState("Web Apps")
  const [searchQuery, setSearchQuery] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState("Pro")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const categories = ["Web Apps", "Mobile Apps", "APIs", "Components", "Scripts", "Databases"]

  const templates = [
    {
      id: 1,
      title: "E-commerce Store",
      tech: "React + Node.js",
      category: "Web Apps",
      thumbnail: "/ecommerce-template.png",
    },
    {
      id: 2,
      title: "Task Manager App",
      tech: "React Native",
      category: "Mobile Apps",
      thumbnail: "/task-manager-template.png",
    },
    {
      id: 3,
      title: "UI Component Library",
      tech: "React + TypeScript",
      category: "Components",
      thumbnail: "/component-library-template.png",
    },
    {
      id: 4,
      title: "REST API Server",
      tech: "Node.js + Express",
      category: "APIs",
      thumbnail: "/api-server-template.png",
    },
    {
      id: 5,
      title: "Data Analytics Dashboard",
      tech: "Next.js + D3.js",
      category: "Web Apps",
      thumbnail: "/analytics-dashboard-template.png",
    },
    {
      id: 6,
      title: "Authentication System",
      tech: "Node.js + JWT",
      category: "APIs",
      thumbnail: "/auth-system-template.png",
    },
    {
      id: 7,
      title: "Social Media App",
      tech: "Flutter",
      category: "Mobile Apps",
      thumbnail: "/social-app-template.png",
    },
    {
      id: 8,
      title: "Database Schema",
      tech: "PostgreSQL",
      category: "Databases",
      thumbnail: "/database-schema-template.png",
    },
  ]

  const filteredTemplates = templates.filter(
    (template) =>
      (activeCategory === "All" || template.category === activeCategory) &&
      template.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["5 projects/month", "Basic templates", "Community support", "Public repositories"],
      cta: "Start free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$39",
      period: "month",
      features: [
        "Unlimited projects",
        "Premium templates",
        "AI code review",
        "Private repositories",
        "Priority support",
      ],
      cta: "Start free trial",
      popular: true,
    },
    {
      name: "Ultra",
      price: "$79",
      period: "month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom templates",
        "Advanced debugging",
        "Performance analytics",
        "API access",
      ],
      cta: "Start free trial",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: [
        "Everything in Ultra",
        "SSO integration",
        "Custom workflows",
        "Dedicated support",
        "SLA guarantee",
        "On-premise deployment",
      ],
      cta: "Contact sales",
      popular: false,
    },
  ]

  const faqs = [
    {
      q: "How does the AI code generation work?",
      a: "Our AI analyzes your requirements and generates clean, production-ready code following best practices. You can customize the output and integrate it into your existing projects.",
    },
    {
      q: "What programming languages are supported?",
      a: "We support all major programming languages including JavaScript, Python, Java, C#, Go, Rust, and many more. New languages are added regularly.",
    },
    {
      q: "Can I use the generated code commercially?",
      a: "Yes, all code generated through our platform is yours to use commercially without any restrictions or licensing fees.",
    },
    {
      q: "Is there version control integration?",
      a: "Yes, we integrate with Git, GitHub, GitLab, and other version control systems to streamline your development workflow.",
    },
    {
      q: "Can I collaborate with my team?",
      a: "Pro and higher plans include team collaboration features, shared workspaces, and real-time code editing capabilities.",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleAIPlatformClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
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
              AI Platform
            </Link>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm font-medium text-primary">Code</span>
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
            <Link href="/code/enterprise">
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
              <Link href="/code/enterprise">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-work-sans)] leading-tight animate-slide-up">
                Build applications faster with AI-powered code generation.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up delay-200">
                From idea to deployment in minutes. Generate full-stack applications, APIs, and components with
                intelligent AI assistance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
                <button
                  data-cta="start-free"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Start coding
                </button>
                <button
                  data-cta="try-template"
                  className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  Browse templates
                </button>
              </div>

              <div className="flex items-center gap-4 bg-muted px-3 py-2 rounded-full text-sm animate-slide-up delay-400">
                <span className="text-muted-foreground">Powered by</span>
                <Link href="/platform" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  AI Platform
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in delay-300">
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 animate-float">
                <div className="w-full h-full bg-gray-900 p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-4">AI Code Generator</span>
                  </div>
                  <div className="text-green-400">
                    <div className="mb-2">$ ai generate --type="react-app" --name="todo-app"</div>
                    <div className="text-gray-400 mb-2">✓ Generating React components...</div>
                    <div className="text-gray-400 mb-2">✓ Setting up routing...</div>
                    <div className="text-gray-400 mb-2">✓ Adding state management...</div>
                    <div className="text-blue-400">✓ Application ready!</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-1000" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-1500" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Start with a template
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose from hundreds of professionally crafted code templates
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === "All"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="max-w-md mx-auto mb-8 animate-slide-up delay-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 transition-all duration-300 focus:scale-105"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTemplates.map((template, index) => (
              <Card
                key={template.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                    <div className="w-full h-full bg-gray-900 p-4 font-mono text-xs">
                      <div className="text-green-400 mb-2">{`// ${template.title}`}</div>
                      <div className="text-blue-400 mb-1">import React from 'react'</div>
                      <div className="text-yellow-400 mb-1">{"const App = () => {"}</div>
                      <div className="text-gray-400 ml-4 mb-1">return (</div>
                      <div className="text-red-400 ml-8">{"<div>Hello World</div>"}</div>
                      <div className="text-gray-400 ml-4">)</div>
                      <div className="text-yellow-400">{"}"}</div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Code
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        size={32}
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                      {template.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{template.category}</span>
                      <span>{template.tech}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Terminal className="w-8 h-8" />,
                title: "Natural Language → Production Code",
                desc: "Describe what you want to build and get clean, documented code instantly.",
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "Version Control & Collaboration",
                desc: "Built-in Git integration with team collaboration and code review features.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Deployment & Testing",
                desc: "Deploy your applications with one click and run automated tests.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in hover:scale-105 transition-transform duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 animate-bounce"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12 animate-fade-in">
            Professional IDE, AI-enhanced
          </h2>
          <div className="aspect-video bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gray-900 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-4">AI Code Studio</span>
              </div>
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="bg-gray-800 rounded p-4">
                  <div className="text-gray-400 text-sm mb-2">File Explorer</div>
                  <div className="space-y-1 text-sm">
                    <div className="text-blue-400">📁 src/</div>
                    <div className="text-green-400 ml-4">📄 App.tsx</div>
                    <div className="text-green-400 ml-4">📄 index.tsx</div>
                    <div className="text-blue-400">📁 components/</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded p-4 col-span-2">
                  <div className="text-gray-400 text-sm mb-2">Code Editor</div>
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-400">import React from 'react'</div>
                    <div className="text-yellow-400">{"const App = () => {"}</div>
                    <div className="text-gray-400 ml-4">// AI-generated component</div>
                    <div className="text-green-400 ml-4">{"return <div>Hello World</div>"}</div>
                    <div className="text-yellow-400">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              AI code completion
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Real-time collaboration
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Integrated debugging
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Version control
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-8">
              Support for every technology
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚛️</div>
                <h4 className="font-medium text-foreground">Frontend</h4>
                <p className="text-sm text-muted-foreground">React, Vue, Angular</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-medium text-foreground">Backend</h4>
                <p className="text-sm text-muted-foreground">Node.js, Python, Java</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📱</div>
                <h4 className="font-medium text-foreground">Mobile</h4>
                <p className="text-sm text-muted-foreground">React Native, Flutter</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🗄️</div>
                <h4 className="font-medium text-foreground">Database</h4>
                <p className="text-sm text-muted-foreground">SQL, NoSQL, GraphQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4 text-foreground">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground">Choose the plan that works best for your development needs</p>
          </div>

          <div className="overflow-x-auto pb-4 pt-6">
            <div className="flex gap-6 min-w-max px-4">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-background border border-border rounded-2xl p-8 relative min-w-[280px] flex-shrink-0 flex flex-col ${
                    plan.popular ? "ring-2 ring-primary scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/{plan.period}</span>}
                      {plan.price === "Custom" && (
                        <span className="text-muted-foreground block text-sm">{plan.period}</span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check size={16} className="text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "border border-border hover:border-primary text-foreground"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-2">Prices shown monthly; save with annual billing.</p>
            <Link
              href="/code/enterprise"
              className="text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Need enterprise features? → See Enterprise
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12 animate-fade-in">
            Frequently asked questions
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-8 text-foreground">
            Start building your next application today
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              data-cta="start-free"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start coding
            </button>
            <button
              data-cta="try-template"
              className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              Browse templates
            </button>
          </div>
          <Link
            href="/code/enterprise"
            className="text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-2 transition-colors"
          >
            Explore Enterprise features
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
