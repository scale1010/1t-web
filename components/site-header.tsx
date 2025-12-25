"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, ChevronDown, Video, Code, Search, BookOpen, Lightbulb, Mail } from "lucide-react"

export function SiteHeader() {
  const [showToolsDropdown, setShowToolsDropdown] = useState(false)
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false)
  const pathname = usePathname()
  const toolsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when pathname changes
  useEffect(() => {
    setShowToolsDropdown(false)
    setShowResourcesDropdown(false)
  }, [pathname])

  // Handle clicks outside dropdowns
  useEffect(() => {
    if (!showToolsDropdown && !showResourcesDropdown) {
      return
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node

      // Check if click is outside tools dropdown
      if (showToolsDropdown && toolsRef.current && !toolsRef.current.contains(target)) {
        setShowToolsDropdown(false)
      }

      // Check if click is outside resources dropdown
      if (showResourcesDropdown && resourcesRef.current && !resourcesRef.current.contains(target)) {
        setShowResourcesDropdown(false)
      }
    }

    // Use setTimeout to ensure this runs after React's onClick handlers
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClick, true)
    }, 0)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener("click", handleClick, true)
    }
  }, [showToolsDropdown, showResourcesDropdown])

  const toggleToolsDropdown = () => {
    setShowToolsDropdown((prev) => !prev)
    setShowResourcesDropdown(false)
  }

  const toggleResourcesDropdown = () => {
    setShowResourcesDropdown((prev) => !prev)
    setShowToolsDropdown(false)
  }

  const closeAllDropdowns = () => {
    setShowToolsDropdown(false)
    setShowResourcesDropdown(false)
  }

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative z-[100]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-[family-name:var(--font-work-sans)]">1thought AI</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {/* Build with AI Dropdown */}
          <div className="relative" ref={toolsRef}>
            <button
              type="button"
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                toggleToolsDropdown()
              }}
              aria-expanded={showToolsDropdown}
              aria-haspopup="true"
            >
              <span>Build with AI</span>
              <ChevronDown 
                className={`h-4 w-4 transition-transform duration-200 ${
                  showToolsDropdown ? "rotate-180" : ""
                }`} 
              />
            </button>
            
            {showToolsDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-[101]">
                <div className="py-2">
                  <Link
                    href="/video/pro"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeAllDropdowns}
                  >
                    <Video className="h-4 w-4 text-blue-500" />
                    <span>Video Generation</span>
                  </Link>
                  <Link
                    href="/code/pro"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeAllDropdowns}
                  >
                    <Code className="h-4 w-4 text-blue-500" />
                    <span>Code Generation</span>
                  </Link>
                  <Link
                    href="/research/pro"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeAllDropdowns}
                  >
                    <Search className="h-4 w-4 text-blue-500" />
                    <span>Deep Research</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              type="button"
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                toggleResourcesDropdown()
              }}
              aria-expanded={showResourcesDropdown}
              aria-haspopup="true"
            >
              <span>Resources</span>
              <ChevronDown 
                className={`h-4 w-4 transition-transform duration-200 ${
                  showResourcesDropdown ? "rotate-180" : ""
                }`} 
              />
            </button>
            
            {showResourcesDropdown && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-[101]">
                <div className="py-2">
                  <Link
                    href="/about"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeAllDropdowns}
                  >
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span>About</span>
                  </Link>
                  <Link
                    href="/inspiration"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeAllDropdowns}
                  >
                    <Lightbulb className="h-4 w-4 text-blue-500" />
                    <span>Inspiration</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors"
                    onClick={closeAllDropdowns}
                  >
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Get Started Button */}
          <Link href="https://frame.1thoughtai.com" className="flex items-center space-x-2">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
