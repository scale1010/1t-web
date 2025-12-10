"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Shield, 
  Cloud, 
  Eye, 
  Scale, 
  Users, 
  Zap, 
  CheckCircle,
  Mail,
  MapPin,
  ExternalLink,
  Heart,
  Lock,
  RefreshCw,
  Globe,
  Target,
  Building,
  Code,
  Search,
  Sparkles
} from "lucide-react"

export default function AboutPage() {
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
              One platform for secure, self-hosted AI.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Lab from SW Company helps teams run modern AI apps on their own terms—self-hosted or private cloud, model-agnostic, and built for enterprise scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                See the platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Read our values
              </Button>
              <Button variant="outline" size="lg">
                View changelog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why we're building this */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Speed matters. So does control. Most AI feels powerful until you need to run it in your environment, switch models, meet security reviews, and ship something that lasts. We're building a platform where AI is portable, private, and ready for the long run—without locking you into any one model or vendor.
                </p>
                <div className="flex items-center justify-between pt-6 border-t">
                  <div>
                    <p className="font-semibold">— Vandy, on behalf of the team at SW Company</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>hello@domain.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our vision</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Future-proof by design</h3>
                </div>
                <p className="text-muted-foreground">Apps outlive models. You should be able to swap models and keep working.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Your stack, your rules</h3>
                </div>
                <p className="text-muted-foreground">Self-hosted and private-cloud options with strong security baselines.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">One platform, many AI needs</h3>
                </div>
                <p className="text-muted-foreground">Create, code, research, and automate—on a single control plane.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ExternalLink className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Open outputs</h3>
                </div>
                <p className="text-muted-foreground">Standard formats and clean exports, so nothing is trapped.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Trust through clarity</h3>
                </div>
                <p className="text-muted-foreground">Clear data paths, clear settings, clear ownership.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What makes us enterprise-ready */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What makes us enterprise-ready</h2>
            <p className="text-xl text-muted-foreground">No fluff, just the essentials</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Self-hosted / Private cloud</h3>
                </div>
                <p className="text-muted-foreground">Run in your VPC or data center; keep data and telemetry in your control.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Model-agnostic gateway</h3>
                </div>
                <p className="text-muted-foreground">No AI model lock-in—bring your own endpoints and switch anytime.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Security first</h3>
                </div>
                <p className="text-muted-foreground">SSO/SAML, SCIM, role-based access, encryption in transit/at rest, customer-managed keys, regional pinning.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Audit & observability</h3>
                </div>
                <p className="text-muted-foreground">Transparent logs and exportable event trails for your SIEM.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Scales with you</h3>
                </div>
                <p className="text-muted-foreground">Multi-tenant isolation, quotas, queueing, and cost controls built in.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Explore the Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Security & Trust
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How we help</h2>
            <p className="text-xl text-muted-foreground">Plain language</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Professionals</h3>
                </div>
                <p className="text-lg text-muted-foreground">Create assets, ship code, and answer hard questions—privately and portably.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Enterprises</h3>
                </div>
                <p className="text-lg text-muted-foreground">Standardize AI across teams on one platform, keep data in-house, and stay free to choose the best model for each job.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ethics & values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Ethics & values</h2>
            <p className="text-xl text-muted-foreground">What we stand on</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">User agency first</h4>
                <p className="text-sm text-muted-foreground">Clear controls for data use, retention, and export; defaults favor privacy.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">No training on your private data</h4>
                <p className="text-sm text-muted-foreground">Without explicit opt-in.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Model neutrality</h4>
                <p className="text-sm text-muted-foreground">We design for competition among models; you can compare, switch, or mix.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Data minimization</h4>
                <p className="text-sm text-muted-foreground">Collect less, keep less, delete on schedule.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Reproducibility</h4>
                <p className="text-sm text-muted-foreground">The same input should yield the same output under the same settings; settings are visible.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Accessibility & inclusion</h4>
                <p className="text-sm text-muted-foreground">Interfaces and outputs that work for more people, not fewer.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">No dark patterns</h4>
                <p className="text-sm text-muted-foreground">Transparent pricing, clear rate limits, easy off-ramps.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Stewardship over hype</h4>
                <p className="text-sm text-muted-foreground">We'd rather ship small, solid improvements than promise the moon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we're building */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What we're building</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A single platform that powers multiple AI applications—creation, coding, research, and agentic workflows—without forcing you to change tools or vendors. Connect your identity provider, choose your models, run on your infrastructure, and keep a clean track of what happened.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              See the platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View changelog
            </Button>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How we work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Small pods, weekly releases</h3>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Public changelog and lightweight roadmap</h3>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design-partner loop</h3>
              <p className="text-muted-foreground">We co-develop with a handful of teams each quarter.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              View changelog
            </Button>
            <Button variant="outline" size="lg">
              Join office hours
            </Button>
            <Button variant="outline" size="lg">
              Apply as a design partner
            </Button>
          </div>
        </div>
      </section>

      {/* Press & boilerplate */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Press & boilerplate</h2>
          </div>
          <Card className="border-0 shadow-lg mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Boilerplate (95 words)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lab is a platform for secure, self-hosted AI applications created by SW Company. It is model-agnostic—no AI model lock-in—and offers private-cloud and on-prem options so organizations can run AI on their own terms. With enterprise-grade identity, access, and observability, Lab lets teams build and operate AI that is portable, reliable, and ready for the long run. We favor open outputs, clear data practices, and user agency over hype.
              </p>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Press kit</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• logos (SVG/PNG)</li>
                <li>• platform diagram (PNG)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Press contact</h3>
              <p className="text-muted-foreground">press@domain.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & footprint */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Contact & footprint</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>General: hello@domain.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Partnerships: partners@domain.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Careers: careers@domain.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Development Centre</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>DLF, Gurgaon, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer callouts */}
      <section className="py-12 px-4 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/platform" className="text-muted-foreground hover:text-foreground transition-colors">
              Platform
            </Link>
            <Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors">
              Security
            </Link>
            <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </Link>
            <Link href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">
              Changelog
            </Link>
            <Link href="/status" className="text-muted-foreground hover:text-foreground transition-colors">
              Status
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <ChatInterface />
    </div>
  )
} 