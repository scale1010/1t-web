"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Video, Code, Search, Send, Sparkles, Settings, Mail, Moon, Sun, X, GripVertical } from "lucide-react"
import { useTheme } from "next-themes"

export function ChatInterface() {
  const [chatMessage, setChatMessage] = useState("")
  const [selectedTool, setSelectedTool] = useState("video")
  const [selectedMode, setSelectedMode] = useState("quick")
  const [isScrolled, setIsScrolled] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const { theme, setTheme } = useTheme()

  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [chatPosition, setChatPosition] = useState({ x: 0, y: 0 })
  const chatRef = useRef<HTMLDivElement>(null)

  const getCurrentTheme = () => {
    const now = new Date()
    const hour = now.getHours()
    return (hour >= 7 && hour < 19) ? 'light' : 'dark'
  }

  const handleThemeToggle = () => {
    const currentTheme = getCurrentTheme()
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!chatRef.current) return

    const rect = chatRef.current.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setIsDragging(true)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!chatRef.current) return

    const rect = chatRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    })
    setIsDragging(true)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y

      const padding = 20
      const maxX = window.innerWidth - (chatRef.current?.offsetWidth || 0) - padding
      const maxY = window.innerHeight - (chatRef.current?.offsetHeight || 0) - padding

      setChatPosition({
        x: Math.max(padding, Math.min(newX, maxX)),
        y: Math.max(padding, Math.min(newY, maxY)),
      })
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return

      e.preventDefault()

      const touch = e.touches[0]
      const newX = touch.clientX - dragOffset.x
      const newY = touch.clientY - dragOffset.y

      const padding = 20
      const maxX = window.innerWidth - (chatRef.current?.offsetWidth || 0) - padding
      const maxY = window.innerHeight - (chatRef.current?.offsetHeight || 0) - padding

      setChatPosition({
        x: Math.max(padding, Math.min(newX, maxX)),
        y: Math.max(padding, Math.min(newY, maxY)),
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove, { passive: false })
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
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

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return

    const toolResponses = {
      video:
        "I'll create a stunning video for you! Let me start by generating a script and visual concepts based on your request.",
      app: "Perfect! I'll build a custom application for you. Let me set up the architecture and start coding the components you need.",
      research:
        "I'll conduct comprehensive research on that topic. Let me analyze multiple sources and compile detailed insights for you.",
    }

    const modePrefix = selectedMode === "deep" ? "Starting deep analysis mode... " : "Quick processing... "

    setTimeout(() => {
      console.log(`[v0] AI responding with ${selectedTool} tool in ${selectedMode} mode`)
    }, 500)

    setChatMessage("")
  }

  return (
    <>
      <div
        ref={chatRef}
        className={`fixed z-50 transition-all duration-300 ${
          isScrolled ? "translate-y-0 opacity-100" : "translate-y-2 opacity-90"
        } ${isDragging ? "cursor-grabbing select-none transition-none" : "cursor-grab"}`}
        style={{
          left: isDragging || chatPosition.x !== 0 ? `${chatPosition.x}px` : "50%",
          bottom: isDragging || chatPosition.y !== 0 ? "auto" : "24px",
          top: isDragging || chatPosition.y !== 0 ? `${chatPosition.y}px` : "auto",
          transform: isDragging || chatPosition.x !== 0 || chatPosition.y !== 0 ? "none" : "translateX(-50%)",
        }}
      >
        <Card className="w-[90vw] max-w-4xl shadow-2xl border-2 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-blue-400/20 backdrop-blur-xl border-blue-500/30 dark:from-blue-500/30 dark:via-blue-400/20 dark:to-blue-300/30 dark:border-blue-400/40">
          <CardContent className="p-4">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className="flex items-center space-x-2 cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                  >
                    <GripVertical className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-sm">AI Platform</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Tool:</span>
                    <Select value={selectedTool} onValueChange={setSelectedTool}>
                      <SelectTrigger className="w-32 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">
                          <div className="flex items-center space-x-2">
                            <Video className="h-4 w-4" />
                            <span>Video</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="app">
                          <div className="flex items-center space-x-2">
                            <Code className="h-4 w-4" />
                            <span>App</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="research">
                          <div className="flex items-center space-x-2">
                            <Search className="h-4 w-4" />
                            <span>Research</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-muted-foreground">Mode:</span>
                    <Select value={selectedMode} onValueChange={setSelectedMode}>
                      <SelectTrigger className="w-24 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quick">Quick</SelectItem>
                        <SelectItem value="deep">Deep</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="relative group">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleThemeToggle}
                      className="h-8 w-8 p-0 hover:bg-blue-500/20"
                    >
                      {getCurrentTheme() === "dark" ? (
                        <Sun className="h-4 w-4" />
                      ) : (
                        <Moon className="h-4 w-4" />
                      )}
                    </Button>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-background border border-border rounded text-xs whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      Toggle theme
                    </div>
                  </div>

                  <div className="relative group">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowContactModal(true)}
                      className="h-8 w-8 p-0 hover:bg-blue-500/20"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-background border border-border rounded text-xs whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      Contact us
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Input
                  placeholder={`Ask me to ${selectedTool === "video" ? "generate a video" : selectedTool === "app" ? "create an application" : "research a topic"}...`}
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 h-12 text-base border-blue-500/30 focus:border-blue-500 bg-background/80 dark:bg-background/90"
                />
                <Button onClick={handleSendMessage} size="lg" className="h-12 px-6 bg-blue-500 hover:bg-blue-600">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowContactModal(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <textarea
                    className="w-full min-h-[100px] px-3 py-2 border border-input bg-background rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-blue-500 hover:bg-blue-600">Send Message</Button>
                  <Button variant="outline" onClick={() => setShowContactModal(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
