"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative container flex min-h-[calc(100vh-5rem)] max-w-screen-2xl flex-col items-center justify-center py-16 md:py-24 text-center px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-muted-foreground bg-secondary/60">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
          AI Automation for Modern Business
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="space-y-6 mb-10"
      >
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] max-w-5xl mx-auto">
          Your Business
          <br />
          <span className="text-muted-foreground">Runs 24/7.</span>
          <br />
          Shouldn&apos;t Your AI?
        </h1>
        <p className="mx-auto max-w-[40rem] text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
          BotScribe deploys intelligent AI voice agents, chatbots, and automation that handle customer conversations, qualify leads, and drive revenue — around the clock.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <Button size="lg" className="h-12 px-8 text-base" asChild>
          <Link href="/contact">
            Start Automating
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
          <Link href="/solutions">
            See All Solutions
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12 w-full max-w-4xl"
      >
        {[
          { value: "30+", label: "Businesses Automated" },
          { value: "50K+", label: "Conversations Handled" },
          { value: "95%", label: "Client Satisfaction" },
          { value: "24/7", label: "Always-On Uptime" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold tracking-tight">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
