import { useEffect, useState } from 'react'

export function useTimeBasedTheme() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const getTimeBasedTheme = () => {
    if (!isClient) return 'light' // Default for SSR
    
    const now = new Date()
    const hour = now.getHours()
    
    // 7 AM to 7 PM = light mode, 7 PM to 7 AM = dark mode
    const theme = (hour >= 7 && hour < 19) ? 'light' : 'dark'
    
    // Debug logging
    console.log(`[TimeBasedTheme] Current hour: ${hour}, Theme: ${theme}`)
    
    return theme
  }

  const clearThemePreference = () => {
    if (!isClient) return
    
    localStorage.removeItem('theme')
    console.log('[TimeBasedTheme] Cleared theme preference')
  }

  const forceTimeBasedTheme = () => {
    if (!isClient) return
    
    const timeBasedTheme = getTimeBasedTheme()
    localStorage.setItem('theme', timeBasedTheme)
    console.log(`[TimeBasedTheme] Forced time-based theme: ${timeBasedTheme}`)
    return timeBasedTheme
  }

  const getEffectiveTheme = () => {
    if (!isClient) return 'light'
    
    const savedTheme = localStorage.getItem('theme')
    const timeBasedTheme = getTimeBasedTheme()
    
    // If user has manually toggled the theme (not system), respect their choice
    if (savedTheme && savedTheme !== 'system') {
      console.log(`[TimeBasedTheme] User manually set theme: ${savedTheme}`)
      return savedTheme
    }
    
    // For system theme or no preference, always use time-based theme
    console.log(`[TimeBasedTheme] Using time-based theme: ${timeBasedTheme}`)
    return timeBasedTheme
  }

  const shouldUpdateTheme = () => {
    if (!isClient) return false
    
    const savedTheme = localStorage.getItem('theme')
    const timeBasedTheme = getTimeBasedTheme()
    
    // Always update if:
    // 1. No saved theme (first visit)
    // 2. Saved theme is 'system'
    // 3. Saved theme doesn't match current time-based theme
    const shouldUpdate = !savedTheme || 
                        savedTheme === 'system' || 
                        (savedTheme !== timeBasedTheme && (savedTheme === 'light' || savedTheme === 'dark'))
    
    console.log(`[TimeBasedTheme] Saved: ${savedTheme}, Time-based: ${timeBasedTheme}, Should update: ${shouldUpdate}`)
    
    return shouldUpdate
  }

  return {
    getTimeBasedTheme,
    getEffectiveTheme,
    shouldUpdateTheme,
    forceTimeBasedTheme,
    clearThemePreference,
    isClient
  }
} 