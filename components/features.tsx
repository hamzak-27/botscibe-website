"use client"

import { Bot, FileText, Brain, Search, Database, Users, Globe, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const features = [
  {
    name: "AI Voice Agents",
    description: "Human-like voice assistants that handle inbound and outbound calls — appointments, inquiries, lead qualification — with natural conversation flow and zero wait times.",
    icon: Bot,
    tag: "Most Popular",
  },
  {
    name: "Intelligent Chatbots",
    description: "24/7 web, WhatsApp, and in-app support bots that resolve queries, route tickets, and engage customers — trained on your exact product and policies.",
    icon: Brain,
    tag: null,
  },
  {
    name: "Document Generation",
    description: "Automate contracts, proposals, NDAs, and reports at scale. Feed in your data — get perfectly formatted, personalized documents in seconds.",
    icon: FileText,
    tag: null,
  },
  {
    name: "Intelligent OCR",
    description: "Extract, classify, and process data from invoices, receipts, forms, and handwritten notes with 99.9% accuracy. Feed directly into your systems.",
    icon: Search,
    tag: null,
  },
  {
    name: "RAG Systems",
    description: "Give your AI access to your proprietary knowledge base. Get accurate, contextual answers drawn from your own documents, not general internet data.",
    icon: Database,
    tag: null,
  },
  {
    name: "AI Leads Generation",
    description: "Identify, reach, and qualify high-intent prospects automatically. AI that analyzes signals and hands warm leads directly to your sales team.",
    icon: Users,
    tag: null,
  },
  {
    name: "Web Scraping & Intelligence",
    description: "Gather structured competitor data, pricing intelligence, and market signals from across the web. Automated, reliable, and always up to date.",
    icon: Globe,
    tag: null,
  },
  {
    name: "Social Media Agents",
    description: "AI that creates, schedules, and responds across all your social platforms. Consistent presence without the manual overhead.",
    icon: MessageSquare,
    tag: null,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function Features() {
  return (
    <section className="container space-y-12 py-24 lg:py-32 px-4 md:px-8 border-t">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      >
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Core Solutions</p>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl">
            Every AI tool your business needs.
          </h2>
        </div>
        <Button variant="outline" asChild className="shrink-0 w-full sm:w-auto md:w-auto">
          <Link href="/solutions">View All Solutions</Link>
        </Button>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.name}
            variants={item}
            className="relative group rounded-lg border border-border bg-card p-6 hover:border-foreground transition-colors duration-200"
          >
            {feature.tag && (
              <span className="absolute top-4 right-4 text-xs font-medium border border-border rounded-full px-2 py-0.5 text-muted-foreground">
                {feature.tag}
              </span>
            )}
            <div className="rounded-full border border-border p-2.5 w-fit mb-4">
              <feature.icon className="h-4 w-4" />
            </div>
            <h3 className="font-semibold text-sm mb-2">{feature.name}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
