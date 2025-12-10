"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const applyTimeBasedTheme = () => {
      const now = new Date()
      const hour = now.getHours()
      
      // 7 AM to 7 PM = light mode, 7 PM to 7 AM = dark mode
      const timeBasedTheme = (hour >= 7 && hour < 19) ? 'light' : 'dark'
      
      const html = document.documentElement
      html.classList.remove('light', 'dark')
      html.classList.add(timeBasedTheme)
      
      // Update localStorage to reflect the current time-based theme
      localStorage.setItem('theme', timeBasedTheme)
      
      console.log(`[ThemeProvider] Applied time-based theme: ${timeBasedTheme} (hour: ${hour})`)
    }

    // Always apply time-based theme on page load
    applyTimeBasedTheme()

    // Set up interval to check for theme changes every minute
    const interval = setInterval(applyTimeBasedTheme, 60000)

    // Set up listener for when the page becomes visible (user returns to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        applyTimeBasedTheme()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [mounted])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
