"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-500/10 rounded-full blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-blue-500/10 rounded-full blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <CTA />
        <Footer />
        <Chatbot />
      </div>
    </div>
  )
}
