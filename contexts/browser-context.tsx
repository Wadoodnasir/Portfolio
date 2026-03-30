"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// Create a context to track browser environment
type BrowserContextType = {
  isBrowser: boolean
  isHydrated: boolean
}

const BrowserContext = createContext<BrowserContextType>({
  isBrowser: false,
  isHydrated: false,
})

export function BrowserProvider({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false)
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    // Runs only in the browser after hydration
    setIsHydrated(true)
    setIsBrowser(true)
  }, [])

  const value = {
    isBrowser,
    isHydrated,
  }

  return <BrowserContext.Provider value={value}>{children}</BrowserContext.Provider>
}

export function useBrowser() {
  return useContext(BrowserContext)
}
