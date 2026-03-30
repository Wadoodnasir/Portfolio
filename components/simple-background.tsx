"use client"

import { useBrowser } from "@/contexts/browser-context"

export default function SimpleBackground() {
  const { isHydrated } = useBrowser()

  if (!isHydrated) return null

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950/20 via-transparent to-indigo-950/15" />
    </div>
  )
}
