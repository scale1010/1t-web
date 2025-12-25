"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChatInterface } from "@/components/chat-interface"

export default function VideoProPage() {
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
              1thought
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
                AI video: end to end.
              </h1>
              <h2 className="text-xl text-muted-foreground sm:text-xl lg:text-xl font-bold font-[family-name:var(--font-work-sans)] leading-tight animate-slide-up">
                Go from idea → visuals → final cut without juggling five tools.
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed animate-slide-up delay-200">
                Experience the power of an AI-first workspace with a free-flow storyboard canvas to prompt, visualize, and iterate. 
                Edit like a pro with a full timeline editor to trim, stitch, polish, and export.
                Combine with the power of intelligent tools to enhance your content.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
                <Link href="https://frame.1thoughtai.com" target="_blank" rel="noopener noreferrer">
                  <button
                    data-cta="start-free"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Get started for free
                  </button>
                </Link>
                <Link href="https://frame.1thoughtai.com" target="_blank" rel="noopener noreferrer">
                  <button
                    data-cta="buy-credits"
                    className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    Join beta users
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in delay-300">
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 animate-float">
                <img
                  src="/video-pro-hero.png"
                  alt="AI Video Editor Interface"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-1000" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-1500" />
            </div>
          </div>
        </div>
      </section>

      {/* Two Spaces Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Create in unified workspace without switching tools
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all duration-500 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Storyboard Canvas</h3>
                <p className="text-muted-foreground mb-6">
                  A free-flow creative board (Figma-like) to think visually:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Prompt and generate variations for scenes using AI models like Google Veo, OpenAI or 1thought AI's own Director pipeline.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Drop videos, images anywhere or edit any portion of the images.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Arrange beats into a storyboard and iterate fast.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Explore options before committing to a final edit.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 animate-fade-in delay-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Full Timeline Editor</h3>
                <p className="text-muted-foreground mb-6">
                  A complete editor for finishing the cut:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Trim, split, reorder, and stitch clips.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Layer voiceover, music, and SFX.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Add text overlays and polish timing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Preview quickly and export render confidently.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Actions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              AI Tools that speed up real editing
            </h2>
          </div>

          <div className="space-y-12">
            {/* Captions & accessibility */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4">Captions & accessibility</h3>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Auto Subtitles</h4>
                      <p className="text-muted-foreground">Generate captions fast, then fine-tune timing and style</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Repurpose for every platform */}
            <div className="animate-fade-in delay-200">
              <h3 className="text-2xl font-semibold mb-4">Repurpose for every platform</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-2">
                      <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Video Reframe</h4>
                        <p className="text-sm text-muted-foreground">Convert 16:9 to 9:16 / 1:1 with smart framing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-2">
                      <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Video Clips</h4>
                        <p className="text-sm text-muted-foreground">Turn one long video into multiple short cuts you can refine</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-2">
                      <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Stitch Video</h4>
                        <p className="text-sm text-muted-foreground">Merge scenes, intros/outros, b-roll, and clips cleanly</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Understand and compress content */}
            <div className="animate-fade-in delay-300">
              <h3 className="text-2xl font-semibold mb-4">Understand and compress content</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-2">
                      <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Summarise Video</h4>
                        <p className="text-sm text-muted-foreground">Create key takeaways and highlights</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-2">
                      <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Video Understanding</h4>
                        <p className="text-sm text-muted-foreground">Find moments faster (topics, sections, key segments)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-2">
                      <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Extract Video Frames</h4>
                        <p className="text-sm text-muted-foreground">Pull stills for posts, thumbnails, and storyboards</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quality upgrades */}
            <div className="animate-fade-in delay-400">
              <h3 className="text-2xl font-semibold mb-4">Quality upgrades</h3>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Upscale Video</h4>
                      <p className="text-muted-foreground">Enhance clarity on older or compressed footage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnails + Image Tools Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Thumbnails + image enhancements (built in)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Create Thumbnail", desc: "Generate multiple options and export fast" },
              { title: "Image Understanding", desc: "Organize and reuse visuals quickly" },
              { title: "Reframe Image", desc: "Fit any layout" },
              { title: "Upscale Image", desc: "Sharpen and enlarge" },
              { title: "Remove Background", desc: "One-click cutouts for overlays and thumbnails" },
              { title: "Model flexibility", desc: "Generate using Google Nano Banana or Flux or other leading models" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Mode Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Create Podcast with AI (without any recording need)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Video Podcasts (beta)", desc: "Only tool to support AI based video podcasts creation" },
              { title: "Generate Audio Podcast", desc: "Create an audio-only version with AI scripting and AI voiceover" },
              { title: "Audio Editor", desc: "Trim, mix, and polish tracks" },
              { title: "Audio Understanding", desc: "Generate summaries and show notes" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-2">
                    <Check size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4">
              Use cases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Founders: product launches & updates",
                desc: "Create launch videos, feature explainers, and demo reels—fast. Storyboard on the canvas, generate captions, cut clips for social, and export vertical + widescreen.",
              },
              {
                title: "Influencers: podcasts & multi-format content",
                desc: "Generate with AI, no studio renting or recording needed. Publish everywhere. Turn thoughts into episodes, add subtitles, generate thumbnails or clips, and export an audio podcast version.",
              },
              {
                title: "Educators: tutorials & courses",
                desc: "Build structured lessons with segments, summaries, and clear captions. Reframe content for mobile learners and create course promos from highlights.",
              },
              {
                title: "Students: projects & assignments",
                desc: "Transform research and presentations into polished videos. Storyboard ideas, stitch scenes, add subtitles, and create a clean thumbnail in minutes.",
              },
            ].map((useCase, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4 text-foreground">
              Pricing — pay as you go
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Get started for free</h3>
                <p className="text-muted-foreground mb-6">
                  Try 1thought AI and explore the canvas + timeline workflow.
                </p>
                <Link href="https://frame.1thoughtai.com" target="_blank" rel="noopener noreferrer">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Get started for free
                  </button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Credits for AI actions (start as low from $10)</h3>
                <p className="text-muted-foreground mb-6">
                  When you run AI actions like generations,captions, reframing, clipping, summarizing, upscaling, thumbnails, you use credits. Top up anytime. No subscription required.
                </p>
                <Link href="https://frame.1thoughtai.com" target="_blank" rel="noopener noreferrer">
                  <button className="border border-border hover:border-primary text-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md">
                    In-App purchase: Buy $10 credits
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] text-center mb-12 animate-fade-in">
            FAQ
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Does 1thought AI have a full video editor or just an AI tool?",
                a: "It's both: a full timeline editor for finishing, plus AI actions that accelerate the workflow.",
              },
              {
                q: "What makes this platform \"AI-first\"?",
                a: "AI powers the first pass—generations, captions, reframes, clips, summaries, thumbnails—so you start with a strong draft and finish quickly on the timeline.",
              },
              {
                q: "What is the storyboard canvas?",
                a: "A free-flow space to prompt, visualize, arrange story beats, and iterate before moving to the timeline.",
              },
              {
                q: "Can I turn long videos into YouTube Shorts/Instagram Reels/TikToks?",
                a: "Yes. Generate clips or reframe your drafts into flexible dimensions before export.",
              },
              {
                q: "Do I need a subscription?",
                a: "No. 1thought AI is pay-as-you-go with credit packs starting at $10, and you can start for free.",
              },
              {
                q: "Do you train or store my data?",
                a: "No. We don’t use your content to train our models. Your data remains yours. We only retain what’s needed to operate the service (for example, to process your edits, render exports, and keep your workspace available to you). If you choose to use third-party AI models through our platform, their processing is governed by their own privacy policies. We select providers carefully, but we recommend reviewing those policies for full transparency.",
              },
              ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-foreground">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-work-sans)] mb-4 text-foreground">
            Unleash your creativity with 1 thought.
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Storyboard on canvas → finish on timeline → publish everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="https://frame.1thoughtai.com" target="_blank" rel="noopener noreferrer">
              <button
                data-cta="start-free"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get started for free
              </button>
            </Link>
            <Link href="https://frame.1thoughtai.com" target="_blank" rel="noopener noreferrer">
              <button
                data-cta="buy-credits"
                className="border border-border hover:border-primary text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Join beta users
              </button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
