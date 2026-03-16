import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import LiquidBackground from '@/components/LiquidBackground'

export const metadata: Metadata = {
  title: 'United Unbound',
  description: 'Make work that matters to you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        <LiquidBackground />
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <CustomCursor />
      </body>
    </html>
  )
}
