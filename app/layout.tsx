import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { BrowserProvider } from "@/contexts/browser-context"
import SimpleBackground from "@/components/simple-background"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wadood Nasir | Full Stack Developer",
  description:
    "Portfolio of Wadood Nasir, a Full Stack Developer with expertise in developing highly scalable web applications.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <BrowserProvider>
          <SimpleBackground />
          {children}
        </BrowserProvider>
      </body>
    </html>
  )
}
