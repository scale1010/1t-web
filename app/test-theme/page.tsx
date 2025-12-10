"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TestThemePage() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setCurrentTime(new Date())
    
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const getTimeBasedTheme = () => {
    if (!currentTime) return 'light'
    const hour = currentTime.getHours()
    return (hour >= 7 && hour < 19) ? 'light' : 'dark'
  }

  const forceTimeBasedTheme = () => {
    const timeBasedTheme = getTimeBasedTheme()
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(timeBasedTheme)
    localStorage.setItem('theme', timeBasedTheme)
    console.log(`[TestPage] Forced time-based theme: ${timeBasedTheme}`)
  }

  const clearThemePreference = () => {
    localStorage.removeItem('theme')
    console.log('[TestPage] Cleared theme preference')
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted || !currentTime) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">Theme Test Page</h1>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  const timeBasedTheme = getTimeBasedTheme()
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Theme Test Page</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Current Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>Current Time:</strong> {currentTime.toLocaleTimeString()}
              </div>
              <div>
                <strong>Current Hour:</strong> {currentTime.getHours()}
              </div>
              <div>
                <strong>Time-based Theme:</strong> {timeBasedTheme}
              </div>
              <div>
                <strong>Saved Theme:</strong> {savedTheme || 'none'}
              </div>
              <div>
                <strong>Should be Light:</strong> {currentTime.getHours() >= 7 && currentTime.getHours() < 19 ? 'Yes' : 'No'}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Theme Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Button onClick={forceTimeBasedTheme}>
                Force Time-based Theme
              </Button>
              <Button onClick={clearThemePreference}>
                Clear Theme Preference
              </Button>
              <Button onClick={() => window.location.reload()}>
                Reload Page
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Theme Logic</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><strong>Light Mode:</strong> 7:00 AM - 6:59 PM (hours 7-18)</p>
              <p><strong>Dark Mode:</strong> 7:00 PM - 6:59 AM (hours 19-6)</p>
              <p><strong>Current Logic:</strong> {currentTime.getHours() >= 7 && currentTime.getHours() < 19 ? 'Light Mode' : 'Dark Mode'}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 