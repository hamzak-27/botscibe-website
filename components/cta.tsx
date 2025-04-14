"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CTA() {
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-3 md:gap-4 py-16 md:py-24 lg:py-32 text-center px-4 md:px-8">
        <motion.h2
          initial={{ y: isMobile ? 10 : 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.7, ease: "easeOut" }}
          className="font-bold text-2xl leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Ready to transform your business with AI?
        </motion.h2>
        <motion.p
          initial={{ y: isMobile ? 10 : 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.7, delay: isMobile ? 0.1 : 0.2, ease: "easeOut" }}
          className="max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl"
        >
          Join leading companies who trust BotScribe to drive their AI transformation and stay ahead in the rapidly
          evolving technology landscape.
        </motion.p>
        <motion.div
          initial={{ y: isMobile ? 10 : 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.7, delay: isMobile ? 0.2 : 0.4, ease: "easeOut" }}
          // Disable hover animation on mobile
          whileHover={isMobile ? {} : { scale: 1.05 }}
          className="w-full sm:w-auto mt-2 md:mt-4"
        >
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/contact">Schedule a Call Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
