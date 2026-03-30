"use client"

import { ReactNode } from 'react'
import { useBrowser } from '@/contexts/browser-context'

interface SimpleFallbackProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function SimpleFallback({ 
  children, 
  fallback = <div className="w-full h-full flex items-center justify-center bg-blue-900/20 rounded-lg">
    <div className="text-center p-4">
      <div className="text-3xl mb-2">✨</div>
      <p>Interactive content</p>
    </div>
  </div>
}: SimpleFallbackProps) {
  const { isHydrated } = useBrowser()
  
  if (!isHydrated) {
    return fallback
  }
  
  return <>{children}</>
} 