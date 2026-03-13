import type { Metadata } from 'next'
import './globals.css'

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
      <body className="bg-[#080808]">{children}</body>
    </html>
  )
}
