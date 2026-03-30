"use client"

import type { ReactNode } from "react"
import { useBrowser } from "@/contexts/browser-context"

interface ThreeWrapperProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
}

export default function ThreeWrapper({
  children,
  fallback = (
    <div className="h-full w-full bg-gray-900/30 rounded-lg flex items-center justify-center">
      Loading 3D element...
    </div>
  ),
  className = "h-full w-full",
}: ThreeWrapperProps) {
  const { isHydrated } = useBrowser()

  if (!isHydrated) {
    return <div className={className}>{fallback}</div>
  }

  return <div className={className}>{children}</div>
}
