"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container py-24 lg:py-32 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-border bg-foreground text-background overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
        >
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.2),transparent_60%)]" />
          </div>

          <div className="relative z-10">
            <p className="text-xs font-medium tracking-widest uppercase opacity-60 mb-6">
              Start Today
            </p>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6 max-w-3xl mx-auto">
              Stop losing customers to slow response times.
            </h2>
            <p className="max-w-xl mx-auto text-base md:text-lg opacity-70 mb-10 leading-relaxed">
              BotScribe clients see results within 30 days — reduced ticket volume, more qualified leads, and 24/7 coverage without hiring. Let&apos;s build yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-8 text-base bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link href="/contact">
                  Schedule a Free Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-background/30 text-background hover:bg-background/10"
                asChild
              >
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs opacity-50">No commitment required. Results guaranteed.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
