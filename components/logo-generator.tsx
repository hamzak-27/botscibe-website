"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export default function Logo({ width = 180, height = 50, className = "" }: LogoProps) {
  const { theme } = useTheme()

  // The logo is black on transparent, so we need to invert it for dark mode
  const isDark = theme === "dark"

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src="/BotScribe_Transparent_Final.png"
        alt="BotScribe Logo"
        width={width}
        height={height}
        className={`w-auto h-full ${isDark ? "invert" : ""}`}
        priority
      />
    </div>
  )
}
