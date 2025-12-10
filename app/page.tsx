"use client"

import type React from "react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, Code, Search, Zap, Brain, Users, Star, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"

export default function HomePage() {
  const videoSectionRef = useRef<HTMLElement>(null)
  const appSectionRef = useRef<HTMLElement>(null)
  const researchSectionRef = useRef<HTMLElement>(null)

  const [videoParallax, setVideoParallax] = useState({ content: 0, mockup: 0, background: 0 })
  const [appParallax, setAppParallax] = useState({ content: 0, mockup: 0, background: 0 })
  const [researchParallax, setResearchParallax] = useState({ content: 0, mockup: 0, background: 0 })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const calculateParallax = (ref: React.RefObject<HTMLElement>) => {
        if (!ref.current) return { content: 0, mockup: 0, background: 0 }

        const rect = ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementHeight = rect.height

        const isInView = rect.top < windowHeight + 200 && rect.bottom > -200

        if (isInView) {
          const elementCenter = rect.top + elementHeight / 2
          const viewportCenter = windowHeight / 2
          const distanceFromCenter = elementCenter - viewportCenter
          const normalizedDistance = distanceFromCenter / (windowHeight / 2)

          return {
            content: normalizedDistance * -30,
            mockup: normalizedDistance * 50,
            background: normalizedDistance * -15,
          }
        }
        return { content: 0, mockup: 0, background: 0 }
      }

      setVideoParallax(calculateParallax(videoSectionRef))
      setAppParallax(calculateParallax(appSectionRef))
      setResearchParallax(calculateParallax(researchSectionRef))
    }

    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <ChatInterface />

      {/* Hero Section with Rotating Cube */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                <Zap className="h-4 w-4 mr-2" />
                Powered by Advanced AI
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold font-[family-name:var(--font-work-sans)] leading-tight">
                Create, Generate,
                <span className="text-primary"> Research</span> with AI
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The ultimate AI platform that transforms your ideas into reality. Generate videos, build applications,
                and conduct in-depth research—all powered by cutting-edge artificial intelligence.
              </p>
            </div>

            <div className="relative py-16">
              <div className="mx-auto w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl animate-spin-slow shadow-2xl dark:shadow-blue-500/20">
                  <div className="absolute inset-4 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center">
                    <Brain className="h-16 w-16 text-white animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={scrollToTop}>
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" onClick={scrollToTop}>
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>10,000+ users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Generation Section */}
      <section
        ref={videoSectionRef}
        id="video"
        className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-500/5 to-transparent"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent transition-transform duration-100 ease-out"
          style={{
            transform: `translateY(${videoParallax.background}px) scale(${1 + Math.abs(videoParallax.background) * 0.0005})`,
          }}
        />
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div
              className="lg:w-1/2 space-y-8 transition-transform duration-100 ease-out"
              style={{
                transform: `translateY(${videoParallax.content}px) translateX(${videoParallax.content * 0.3}px)`,
              }}
            >
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Video className="h-4 w-4 mr-2" />
                  AI Video Generation
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold font-[family-name:var(--font-work-sans)] leading-tight">
                  Create Stunning
                  <span className="text-blue-500 block">Videos Instantly</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your ideas into professional videos with AI-powered generation. From concept to completion
                  in minutes, not hours.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">Text-to-Video</h4>
                  <p className="text-sm text-muted-foreground">Generate videos from simple text descriptions</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">4K Quality</h4>
                  <p className="text-sm text-muted-foreground">Professional-grade output resolution</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">Custom Branding</h4>
                  <p className="text-sm text-muted-foreground">Add your logos and brand elements</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">Multiple Formats</h4>
                  <p className="text-sm text-muted-foreground">Export for any platform or device</p>
                </div>
              </div>

              <Link href="/video/pro">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-500/90 text-white" onClick={scrollToTop}>
                  Generate Your First Video
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div
              className="lg:w-1/2 relative transition-transform duration-100 ease-out"
              style={{
                transform: `translateY(${videoParallax.mockup}px) translateX(${videoParallax.mockup * 0.5}px) scale(${1 + Math.abs(videoParallax.mockup) * 0.0008}) rotateY(${videoParallax.mockup * 0.1}deg)`,
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-3xl border-2 border-blue-500/30 shadow-2xl overflow-hidden">
                <div className="h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                  <div className="text-center space-y-6 z-10">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Video className="h-12 w-12 text-blue-500 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">AI Video Preview</h4>
                      <p className="text-muted-foreground">Watch your ideas come to life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Creation Section */}
      <section
        ref={appSectionRef}
        id="app"
        className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-500/5 to-transparent"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent transition-transform duration-100 ease-out"
          style={{
            transform: `translateY(${appParallax.background}px) scale(${1 + Math.abs(appParallax.background) * 0.0005})`,
          }}
        />
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div
              className="lg:w-1/2 space-y-8 transition-transform duration-100 ease-out"
              style={{ transform: `translateY(${appParallax.content}px) translateX(${appParallax.content * -0.3}px)` }}
            >
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Code className="h-4 w-4 mr-2" />
                  AI App Creation
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold font-[family-name:var(--font-work-sans)] leading-tight">
                  Build Apps with
                  <span className="text-blue-500 block">Natural Language</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Describe your app idea and watch as AI generates full-stack applications with modern frameworks and
                  best practices.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">Full-Stack Code</h4>
                  <p className="text-sm text-muted-foreground">Complete frontend and backend generation</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">Modern Frameworks</h4>
                  <p className="text-sm text-muted-foreground">React, Next.js, Node.js, and more</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">Database Integration</h4>
                  <p className="text-sm text-muted-foreground">Automatic schema and API generation</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">One-Click Deploy</h4>
                  <p className="text-sm text-muted-foreground">Instant deployment to cloud platforms</p>
                </div>
              </div>

              <Link href="/code/pro">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-500/90 text-white" onClick={scrollToTop}>
                  Start Building Your App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div
              className="lg:w-1/2 relative transition-transform duration-100 ease-out"
              style={{
                transform: `translateY(${appParallax.mockup}px) translateX(${appParallax.mockup * -0.5}px) scale(${1 + Math.abs(appParallax.mockup) * 0.0008}) rotateY(${appParallax.mockup * -0.1}deg)`,
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-3xl border-2 border-blue-500/30 shadow-2xl overflow-hidden">
                <div className="h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                  <div className="text-center space-y-6 z-10">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Code className="h-12 w-12 text-blue-500 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">AI App Builder</h4>
                      <p className="text-muted-foreground">From idea to deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Engine Section */}
      <section
        ref={researchSectionRef}
        id="research"
        className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-500/5 to-transparent"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent transition-transform duration-100 ease-out"
          style={{
            transform: `translateY(${researchParallax.background}px) scale(${1 + Math.abs(researchParallax.background) * 0.0005})`,
          }}
        />
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div
              className="lg:w-1/2 space-y-8 transition-transform duration-100 ease-out"
              style={{
                transform: `translateY(${researchParallax.content}px) translateX(${researchParallax.content * 0.3}px)`,
              }}
            >
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  <Search className="h-4 w-4 mr-2" />
                  AI Research Engine
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold font-[family-name:var(--font-work-sans)] leading-tight">
                  Deep Research
                  <span className="text-blue-500 block">Made Simple</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Conduct comprehensive research across thousands of sources. Get verified insights, detailed reports,
                  and actionable intelligence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">Multi-Source Analysis</h4>
                  <p className="text-sm text-muted-foreground">Analyze thousands of sources simultaneously</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">Fact Verification</h4>
                  <p className="text-sm text-muted-foreground">Cross-reference and validate information</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">Custom Reports</h4>
                  <p className="text-sm text-muted-foreground">Generate detailed, formatted reports</p>
                </div>
                <div className="space-y-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <h4 className="font-semibold">Real-Time Data</h4>
                  <p className="text-sm text-muted-foreground">Access to live, up-to-date information</p>
                </div>
              </div>

              <Button size="lg" className="bg-blue-500 hover:bg-blue-500/90 text-white" onClick={scrollToTop}>
                Start Your Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div
              className="lg:w-1/2 relative transition-transform duration-100 ease-out"
              style={{
                transform: `translateY(${researchParallax.mockup}px) translateX(${researchParallax.mockup * 0.5}px) scale(${1 + Math.abs(researchParallax.mockup) * 0.0008}) rotateY(${researchParallax.mockup * 0.1}deg)`,
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-3xl border-2 border-blue-500/30 shadow-2xl overflow-hidden">
                <div className="h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                  <div className="text-center space-y-6 z-10">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Search className="h-12 w-12 text-blue-500 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">AI Research Hub</h4>
                      <p className="text-muted-foreground">Comprehensive insights at your fingertips</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-500 text-white dark:bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-2">50K+</div>
              <div className="text-white/80">Videos Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-2">25K+</div>
              <div className="text-white/80">Apps Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-2">100K+</div>
              <div className="text-white/80">Research Reports</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-2">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-work-sans)]">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators, developers, and researchers who are already using our AI platform to bring
              their visions to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={scrollToTop}>
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" onClick={scrollToTop}>
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
