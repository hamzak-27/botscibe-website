"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/logo-generator"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="container flex min-h-[calc(100vh-5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-6 py-16 md:py-24 lg:py-32 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-4 md:mb-6"
      >
        <Logo height={120} width={240} className="mb-4 md:mb-6 md:h-[200px] md:w-[400px]" />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          AI Solutions Tailored
          <br className="hidden sm:inline" />
          For Your Business
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          BotScribe delivers cutting-edge AI services that transform how businesses operate. From intelligent chatbots
          to document generation, we're your partner in AI innovation.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/solutions">
            Explore Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/contact">Schedule a Demo</Link>
        </Button>
      </motion.div>
    </section>
  )
}
