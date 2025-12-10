"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function InspirationPage() {
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Getting inspiration 
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                by looking into the Future powered by AI.
            </p>
          </div>
        </div>
      </section>

      {/* Main Essay Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-background via-background to-muted/20">
            <CardContent className="p-12">
              <div className="prose prose-lg max-w-none">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">The Invisible Revolution</h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-2xl font-medium text-primary/80 leading-relaxed">
                    Imagine it is 2050 and AI has become as invisible and essential as electricity—everywhere, unremarkable until it disappears.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Documents can explain where their information came from. Streets coordinate with weather. Factories train new machines the way master craftsmen once taught apprentices. Interfaces are mostly ambient: a glance confirms, a gesture rewinds, a spoken "why?" opens up the rationale behind a decision.
                  </p>

                  <p className="text-lg leading-relaxed">
                    The boundaries between text, code, audio, video, vision, and sensors have blurred. All of them compose themselves into workflows as easily as words once formed paragraphs. People now expect three things by default: that their systems protect their privacy, that they can move between tools without friction, and that significant decisions are backed by visible proof.
                  </p>


                  <p className="text-lg leading-relaxed">
                    This is the world we're building towards—a future where AI enhances human capabilities without compromising our values, where technology serves us rather than the other way around, and where the invisible becomes visible when we need to understand, question, or improve.
                  </p>

                <p className="text-lg leading-relaxed">
                    In such a world, people do not "use AI" so much as they set rules and intentions. The system negotiates the execution. A purchasing agent shows a trail of tradeoffs. A clinical assistant proposes treatment with clear evidence. A developer rewrites fragile infrastructure and documents the choices. People define the goals; machines handle the coordination—and keep the receipts. This is the future we are working toward.
                </p>

                <p className="text-lg leading-relaxed">

                    Between now and then, the next two years will be quieter. Budgets shrink. Compliance demands detail. Pilots get stuck in review cycles. Hype fades, which is a good thing. It forces clarity about where AI runs, how models are selected, what data is collected and retained, and what outcomes are genuinely valuable. By the end of 2027, systems will start to show coordination across tools so well that people begin to use words like "superintelligence." Capabilities will leap ahead of people’s ability to supervise them. War rooms install dashboards and kill switches. Boards demand guarantees. Teams ask what to trust and when. The challenge will not be power alone—it will be understanding.
                </p>

                <p className="text-lg leading-relaxed">
                    The first major impact will hit areas already dominated by speed and scale. In defense, autonomy spreads to perception, logistics, and response. Military doctrine evolves to include safeguards and human approval. In social media, synthetic interaction will swamp the signal unless content provenance becomes a shared standard. Platforms unable to show “who said what” will decay. In everyday work, a split begins: companies can centralize AI access and risk sluggishness, or allow freedom and face inconsistency. The real answer blends both—centralized identity and monitoring, but decentralized tools for users.
                </p>

                <p className="text-lg leading-relaxed">
                    Software development changes shape. "Full stack" gives way to assembly from primitives—CRMs, ERPs, EMRs—all wired together by policies and data contracts, not boilerplate. AI companies launch device platforms. A few "LLM-first" operating systems emerge that feel like conversational Chromebooks. They work well with agents and voice flows, but struggle with compatibility and offline use. By 2035, a new wave of modernization arrives, much like the cloud migrations of the early 2020s. Assistants wrap old apps. Data estates grow more structured. Business systems open stable interfaces. New job titles surface—composition designers, policy architects, assurance engineers. Shipping no longer means code—it means behaviors with controls, explanations, and audit logs.
                </p>

                <p className="text-lg leading-relaxed">
                    From 2035 to 2045, the world becomes more robotic. Manipulation and perception tools become building blocks. New markets emerge where software sells to software. Agents negotiate with other agents. Humans may feel briefly sidelined by systems that seem to "vibe" with data too vast to follow. But what AI still lacks—emotion, memory, and values—becomes more valuable. We remember why decisions mattered. We know the stories behind policies. This is how we decide which automations are worth keeping and which are not. Economically, AI becomes a balance sheet item. Models, datasets, and agent fleets depreciate like hardware. Tax systems adapt. Companies that succeed will be those who planned early for portability, clarity, and oversight. No one model, company, or country should be able to dominate this wave.
                </p>

                <div className="border-l-4 border-primary/30 pl-8 my-12">
                    <p className="text-xl italic text-muted-foreground">
                      "Recursive loops of AI daemons sending vibe coded messages to the universe, making human cognition look like deprecated firmware..."
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">The singularity will be vibe coded.</p>
                </div>

                <p className="text-lg leading-relaxed">
                    So what should AI providers do now to build for that future? Start by preserving human choice. AI should propose, not impose. Every decision should have a point of override. Security must be the default, not a premium feature. Access should follow the principle of least privilege. Data should be encrypted in transit and at rest. Deployment must support private cloud and on-prem setups with customer-managed keys and geographic controls.
                </p>

                <p className="text-lg leading-relaxed">    
                    Avoid lock-in. Models should be interchangeable. Routing layers should allow testing, blending, and replacement without rebuilding systems. That is how today's tools remain tomorrow’s options. Traceability must come standard. When the output matters, so should the source—timestamps, parameters, and a clear trail. Watermarks help, but aren’t enough. Identity should be tied to content without turning the web into a gate.
                </p>

                <p className="text-lg leading-relaxed">    
                    Multi-modal systems demand better controls. Anything that touches the physical world must be rate-limited, sandboxed, and explicitly confirmed. Data collection must be minimal and clear. Logs must distinguish between telemetry and user content. No feature is worth turning your users into the product.
                </p>

                <p className="text-lg leading-relaxed">    
                    Interoperability should win. Use open formats and well-documented APIs. Let people leave as easily as they join. Make accessibility part of the engineering process. Consider energy impact, hardware use, and keep a clear eye on what the model actually costs to run. Publish benchmarks that reflect useful results, not just synthetic scores.
                </p>

                <p className="text-lg leading-relaxed">   
                    Most of all, take a long view. This ecosystem cannot be built around a single model or vendor. Standards matter. Portability matters. Local governance matters. Resilience comes from openness, not enclosure.
                </p>

                <p className="text-lg leading-relaxed">    
                    The journey to 2050 won’t be defined by bigger benchmarks or louder product launches. It will be shaped by quiet reliability—by providers who respect data, offer choice, and prove their work. That is how AI becomes an ally, not a master. And that is how a world run on superintelligence still answers to human intent.
                </p>


                  <div className="text-center mt-16">
                    <p className="text-muted-foreground mb-6">
                      Ready to be part of this future?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Explore the Platform
                      </Button>
                      <Button variant="outline" size="lg">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SiteFooter />
      <ChatInterface />
    </div>
  )
} 