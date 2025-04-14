"use client"

import { Bot, FileText, Brain, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="container space-y-16 py-24 md:py-32">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-[58rem] text-center"
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Core Solutions</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how BotScribe can transform your business with our innovative AI technologies.
        </p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            variants={item}
            className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center"
      >
        <Button asChild>
          <Link href="/solutions">View All Solutions</Link>
        </Button>
      </motion.div>
    </section>
  )
}
