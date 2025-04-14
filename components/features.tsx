"use client"

import { Bot, FileText, Brain, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const features = [
  {
    name: "AI Voice Agents",
    description: "Human-like voice assistants that handle customer inquiries and support with natural conversation.",
    icon: Bot,
  },
  {
    name: "Intelligent Chatbots",
    description: "24/7 customer support and engagement through AI-powered conversational interfaces.",
    icon: Brain,
  },
  {
    name: "Document Generation",
    description: "Automated creation of personalized documents, reports, and content at scale.",
    icon: FileText,
  },
  {
    name: "Intelligent OCR",
    description: "Extract and process information from documents with advanced optical character recognition.",
    icon: Search,
  },
]

export default function Features() {
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

  // Simplified animation for mobile
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
      },
    },
  }

  const item = {
    hidden: { y: isMobile ? 10 : 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut" 
      } 
    },
  }

  return (
    <section className="container space-y-10 md:space-y-16 py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <motion.div
        initial={{ y: isMobile ? 10 : 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: isMobile ? 0.3 : 0.7, ease: "easeOut" }}
        className="mx-auto max-w-[58rem] text-center"
      >
        <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">Our Core Solutions</h2>
        <p className="mt-3 md:mt-4 text-muted-foreground text-sm sm:text-base md:text-lg">
          Discover how BotScribe can transform your business with our innovative AI technologies.
        </p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            variants={item}
            className="relative overflow-hidden rounded-lg border bg-background p-4 sm:p-6 md:p-8 transition-all hover:shadow-md"
            // Remove hover animations on mobile
            whileHover={isMobile ? {} : { scale: 1.03, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="font-bold text-sm sm:text-base md:text-lg">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground text-xs sm:text-sm md:text-base">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: isMobile ? 0.3 : 0.7, delay: isMobile ? 0.2 : 0.5, ease: "easeOut" }}
        className="text-center"
      >
        <Button asChild className="w-full sm:w-auto">
          <Link href="/solutions">View All Solutions</Link>
        </Button>
      </motion.div>
    </section>
  )
}
