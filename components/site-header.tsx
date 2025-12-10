"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, ChevronDown, Video, Code, Search, BookOpen, Lightbulb } from "lucide-react"

export function SiteHeader() {
  const [showToolsDropdown, setShowToolsDropdown] = useState(false)
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".dropdown-container")) {
        setShowToolsDropdown(false)
        setShowResourcesDropdown(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  // Close dropdowns when pathname changes
  useEffect(() => {
    setShowToolsDropdown(false)
    setShowResourcesDropdown(false)
  }, [pathname])

  const closeDropdowns = () => {
    setShowToolsDropdown(false)
    setShowResourcesDropdown(false)
  }

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-[family-name:var(--font-work-sans)]">AI Platform</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative dropdown-container">
            <button
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => {
                setShowToolsDropdown(!showToolsDropdown)
                setShowResourcesDropdown(false)
              }}
            >
              <span>Tools</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showToolsDropdown ? "rotate-180" : ""}`} />
            </button>
            {showToolsDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <Link
                    href="/video/pro"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeDropdowns}
                  >
                    <Video className="h-4 w-4 text-blue-500" />
                    <span>Video Generation</span>
                  </Link>
                  <Link
                    href="/code/pro"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeDropdowns}
                  >
                    <Code className="h-4 w-4 text-blue-500" />
                    <span>Code Generation</span>
                  </Link>
                  <Link
                    href="/research/pro"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeDropdowns}
                  >
                    <Search className="h-4 w-4 text-blue-500" />
                    <span>Research Engine</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="relative dropdown-container">
            <button
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => {
                setShowResourcesDropdown(!showResourcesDropdown)
                setShowToolsDropdown(false)
              }}
            >
              <span>Resources</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showResourcesDropdown ? "rotate-180" : ""}`} />
            </button>
            {showResourcesDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <Link
                    href="/about"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeDropdowns}
                  >
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span>About</span>
                  </Link>
                  <Link
                    href="/inspiration"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeDropdowns}
                  >
                    <Lightbulb className="h-4 w-4 text-blue-500" />
                    <span>Inspiration</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
        </div>
      </div>
    </nav>
  )
}
