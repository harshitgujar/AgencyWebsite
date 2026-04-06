import type { Metadata } from 'next'
import { Instrument_Serif } from "next/font/google";
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import AppWrapper from "@/components/AppWrapper";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
  variable: "--font-display",
});

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
      <body className={`${instrumentSerif.variable} bg-black overflow-x-hidden`}>
        <AppWrapper>
          <Navbar />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <CustomCursor />
        </AppWrapper>
      </body>
    </html>
  )
}
