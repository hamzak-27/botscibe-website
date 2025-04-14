"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
        >
          Ready to transform your business with AI?
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        >
          Join leading companies who trust BotScribe to drive their AI transformation and stay ahead in the rapidly
          evolving technology landscape.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button size="lg" className="mt-4" asChild>
            <Link href="/contact">Schedule a Call Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
