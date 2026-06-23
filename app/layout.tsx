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
  title: {
    default: "BotScribe — AI Automation for Modern Business",
    template: "%s | BotScribe",
  },
  description:
    "BotScribe builds AI voice agents, chatbots, and automation systems that handle customer conversations 24/7 — so your business never misses a lead, inquiry, or sale.",
  keywords: [
    "AI automation",
    "AI voice agents",
    "chatbot development",
    "business automation",
    "customer support AI",
    "lead qualification AI",
    "real estate AI",
    "healthcare AI automation",
    "BotScribe",
  ],
  authors: [{ name: "BotScribe" }],
  creator: "BotScribe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://botscribe.info",
    siteName: "BotScribe",
    title: "BotScribe — AI Automation for Modern Business",
    description:
      "AI voice agents, chatbots, and automation systems that handle customer conversations 24/7. Never miss a lead, inquiry, or sale.",
    images: [
      {
        url: "/botscribe-logo-final.png",
        width: 1200,
        height: 630,
        alt: "BotScribe — AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BotScribe — AI Automation for Modern Business",
    description: "AI voice agents and chatbots that handle customer conversations 24/7.",
    creator: "@botscribe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
