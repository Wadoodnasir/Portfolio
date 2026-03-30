"use client"

import { useEffect, useCallback } from "react"
import { useBrowser } from "@/contexts/browser-context"

// Custom hook to safely add browser event listeners
export function useBrowserEvent<K extends keyof WindowEventMap>(
  eventType: K,
  callback: (event: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
  dependencies: any[] = [],
) {
  // Get browser context
  const { isBrowser, isHydrated } = useBrowser()

  // Memoize the callback to prevent unnecessary re-renders
  const memoizedCallback = useCallback(callback, dependencies)

  // Only add event listener if we're in a browser and component is hydrated
  useEffect(() => {
    if (!isBrowser || !isHydrated) return

    // Add the event listener
    window.addEventListener(eventType, memoizedCallback, options)

    // Clean up
    return () => {
      window.removeEventListener(eventType, memoizedCallback, options)
    }
  }, [isBrowser, isHydrated, eventType, memoizedCallback, options])
}
