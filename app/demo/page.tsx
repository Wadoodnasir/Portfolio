"use client"

import dynamic from 'next/dynamic'
import Link from 'next/link'

// Import Three.js components with no SSR to avoid hydration issues
const ThreeScene = dynamic(() => import('@/components/three-scene'), { ssr: false })

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-gray-900">
        <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
          ← Back to Home
        </Link>
      </header>
      
      <main className="flex-1 p-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8 text-center">Three.js Demo</h1>
        
        <div className="w-full max-w-2xl aspect-video bg-gray-800 rounded-lg overflow-hidden">
          <ThreeScene />
        </div>
        
        <p className="mt-8 text-gray-400 max-w-xl text-center">
          This is a clean implementation of Three.js with React Three Fiber that avoids common rendering issues.
        </p>
      </main>
    </div>
  )
} 