"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Play, Search, Check, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"

export default function VideoProPage() {
  const [activeCategory, setActiveCategory] = useState("Promos")
  const [searchQuery, setSearchQuery] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState("Pro")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const categories = ["Promos", "Tutorials", "Reels", "Ads", "Announcements", "YouTube Shorts"]

  const templates = [
    {
      id: 1,
      title: "Product Launch Promo",
      duration: "0:30",
      category: "Promos",
      thumbnail: "/product-launch-thumbnail.png",
    },
    {
      id: 2,
      title: "How-to Tutorial",
      duration: "2:15",
      category: "Tutorials",
      thumbnail: "/tutorial-video-thumbnail.png",
    },
    { id: 3, title: "Instagram Reel", duration: "0:15", category: "Reels", thumbnail: "/instagram-reel-thumbnail.png" },
    { id: 4, title: "Facebook Ad", duration: "0:45", category: "Ads", thumbnail: "/facebook-ad-video-thumbnail.png" },
    {
      id: 5,
      title: "Company Update",
      duration: "1:30",
      category: "Announcements",
      thumbnail: "/company-announcement-video.png",
    },
    {
      id: 6,
      title: "YouTube Short",
      duration: "0:60",
      category: "YouTube Shorts",
      thumbnail: "/youtube-shorts-video.png",
    },
    {
      id: 7,
      title: "Sale Announcement",
      duration: "0:20",
      category: "Promos",
      thumbnail: "/sale-announcement-video.png",
    },
    {
      id: 8,
      title: "Step-by-Step Guide",
      duration: "3:00",
      category: "Tutorials",
      thumbnail: "/step-by-step-guide-video.png",
    },
  ]

  const filteredTemplates = templates.filter(
    (template) =>
      (activeCategory === "All" || template.category === activeCategory) &&
      template.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const aiFeatures = [
    {
      icon: "🎬",
      title: "Text to Video",
      description: "Transform written content into engaging video narratives with AI-powered scene generation.",
    },
    {
      icon: "🗣️",
      title: "AI Voiceover",
      description: "Generate natural-sounding voiceovers in multiple languages and speaking styles.",
    },
    {
      icon: "📝",
      title: "Auto Captions",
      description: "Automatically generate accurate subtitles and captions for accessibility and engagement.",
    },
    {
      icon: "🎨",
      title: "Smart Editing",
      description: "AI-assisted editing with automatic cuts, transitions, and visual enhancements.",
    },
    {
      icon: "🎵",
      title: "Music Sync",
      description: "Automatically sync your video content to background music beats and rhythm.",
    },
  ]

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["3 videos/month", "720p exports", "Basic templates", "Community support"],
      cta: "Start free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      features: ["Unlimited videos", "4K exports", "Premium templates", "AI voiceover", "Priority support"],
      cta: "Start free trial",
      popular: true,
    },
    {
      name: "Ultra",
      price: "$59",
      period: "month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Brand kit",
        "Advanced analytics",
        "Custom templates",
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
        "White-label options",
      ],
      cta: "Contact sales",
      popular: false,
    },
  ]

  const faqs = [
    {
      q: "How does the AI video generation work?",
      a: "Our AI analyzes your text input and automatically generates relevant visuals, transitions, and effects to create professional videos. You can customize every aspect of the generated content.",
    },
    {
      q: "Can I use my own footage and assets?",
      a: "You can upload your own videos, images, audio files, and other assets to incorporate into your AI-generated videos.",
    },
    {
      q: "What video formats and resolutions are supported?",
      a: "We support all major video formats including MP4, MOV, and AVI. Export resolutions range from 720p to 4K depending on your plan.",
    },
    {
      q: "Is there a limit to video length?",
      a: "Free users can create videos up to 2 minutes long. Paid plans support videos up to 30 minutes in length.",
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes, you can cancel your subscription at any time. You'll continue to have access to paid features until the end of your billing period.",
    },
  ]

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
            <span className="text-sm font-medium text-primary">Video</span>
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
            <Link href="/video/enterprise">
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
              <Link href="/video/enterprise">
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
                Make stunning videos in minutes—powered by AI.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up delay-200">
                Start from a prompt or template. Edit on a simple timeline. Export anywhere.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
                <button
                  data-cta="start-free"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Start free
                </button>
                <button
                  data-cta="try-template"
                  className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  Try a template
                </button>
              </div>

              <div className="flex items-center gap-4 bg-muted px-3 py-2 rounded-full text-sm animate-slide-up delay-400">
                <span className="text-muted-foreground">Powered by</span>
                <Link href="/platform" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Lab
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in delay-300">
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 animate-float">
                <img
                  src="/video-pro-hero.png"
                  alt="VX Pro Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-1000" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-1500" />
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Start with a template
            </h2>
            <p className="text-xl text-muted-foreground">Choose from hundreds of professionally designed templates</p>
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
                    <img
                      src={template.thumbnail || "/placeholder.svg"}
                      alt={template.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Play
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
                      <span>{template.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📝",
                title: "Script → Storyboard → Cut in one flow",
                desc: "Transform ideas into polished videos with our streamlined workflow.",
              },
              {
                icon: "🗣️",
                title: "Auto-captions & Voiceover in 20+ languages",
                desc: "Reach global audiences with automatic subtitles and AI voiceover.",
              },
              {
                icon: "🎨",
                title: "Brand Kit (Lite) logo, colors, fonts in a click",
                desc: "Maintain consistent branding across all your video content.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in hover:scale-105 transition-transform duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 animate-bounce"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editor Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12 animate-fade-in">
            Professional editor, simplified
          </h2>
          <div className="aspect-video bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
            <img src="/placeholder-8ilyq.png" alt="VX Pro Editor Interface" className="w-full h-full object-cover" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Drag-and-drop timeline
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Snap to beats
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Scene library
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              Subtitle editor
            </div>
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-8">
              Publish everywhere
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎬</div>
                <h4 className="font-medium text-foreground">Cinema Quality</h4>
                <p className="text-sm text-muted-foreground">4K exports</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📱</div>
                <h4 className="font-medium text-foreground">Social Ready</h4>
                <p className="text-sm text-muted-foreground">All aspect ratios</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">☁️</div>
                <h4 className="font-medium text-foreground">Cloud Storage</h4>
                <p className="text-sm text-muted-foreground">Unlimited projects</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🔗</div>
                <h4 className="font-medium text-foreground">Easy Sharing</h4>
                <p className="text-sm text-muted-foreground">Direct links</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4 text-foreground">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground">Choose the plan that works best for you</p>
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
              href="/video/enterprise"
              className="text-primary hover:text-primary/80 font-medium flex items-center justify-center gap-2 transition-colors"
            >
              Need SSO, approvals, or LMS? → See Enterprise
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
            Create your first video today
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              data-cta="start-free"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start free
            </button>
            <button
              data-cta="try-template"
              className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              Try a template
            </button>
          </div>
          <Link
            href="/video/enterprise"
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
