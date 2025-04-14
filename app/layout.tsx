import "./globals.css"
import { Poppins } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import MouseMoveEffect from "@/components/mouse-move-effect"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "BotScribe - AI Solutions for Your Business",
  description:
    "BotScribe delivers cutting-edge AI services including voice agents, chatbots, document generation, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MouseMoveEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'