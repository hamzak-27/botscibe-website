"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Bot, FileText, Brain, Search, Database, Users, Globe, MessageSquare, Settings, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import CTA from "@/components/cta"

const solutions = [
  {
    id: "voice-agents",
    name: "AI Voice Agents",
    tagline: "Never miss a call again.",
    description: "Human-like voice assistants that handle inbound and outbound calls with natural conversation flow. They understand context, handle complex queries, qualify leads, and book appointments — 24/7 without fatigue.",
    usecases: ["Inbound customer support calls", "Lead qualification calls", "Appointment booking", "Order status updates", "After-hours coverage"],
    icon: Bot,
    stat: "80% of calls handled without human intervention",
  },
  {
    id: "chatbots",
    name: "Intelligent Chatbots",
    tagline: "24/7 support on every channel.",
    description: "Deploy AI chatbots on your website, WhatsApp, Messenger, and in-app. Trained on your exact knowledge base, they resolve queries, route tickets, capture leads, and provide consistent, on-brand responses at scale.",
    usecases: ["Customer support automation", "Lead capture & qualification", "FAQ resolution", "Live chat handoff", "Multi-language support"],
    icon: Brain,
    stat: "62% reduction in support ticket volume",
  },
  {
    id: "document-generation",
    name: "Document Generation",
    tagline: "From data to document in seconds.",
    description: "Automate the creation of contracts, proposals, NDAs, invoices, reports, and marketing materials. Feed in your templates and data — get perfectly formatted, personalized documents at scale.",
    usecases: ["Sales proposals & quotes", "Legal contracts & NDAs", "Client reports", "Onboarding documents", "Marketing collateral"],
    icon: FileText,
    stat: "30+ hours saved per team per week",
  },
  {
    id: "intelligent-ocr",
    name: "Intelligent OCR",
    tagline: "Extract data from any document.",
    description: "Advanced optical character recognition that identifies, extracts, and classifies data from invoices, receipts, forms, and handwritten notes. Feeds directly into your systems with 99.9% accuracy.",
    usecases: ["Invoice processing", "Form data extraction", "Receipt digitization", "ID verification", "Contract parsing"],
    icon: Search,
    stat: "99.9% extraction accuracy",
  },
  {
    id: "rag",
    name: "RAG Systems",
    tagline: "AI that knows your business.",
    description: "Retrieval-Augmented Generation systems that combine powerful LLMs with your proprietary knowledge base. Your AI gives accurate, contextual answers based on your actual documents — not the internet.",
    usecases: ["Internal knowledge bases", "Customer-facing AI assistants", "Product documentation bots", "Compliance Q&A", "Technical support"],
    icon: Database,
    stat: "3× more accurate than generic AI",
  },
  {
    id: "leads-generation",
    name: "AI Leads Generation",
    tagline: "Warm leads, not cold lists.",
    description: "AI that identifies high-intent prospects, analyzes behavioral signals, and delivers pre-qualified leads directly to your sales team. Stop guessing. Start closing.",
    usecases: ["Prospect identification", "Lead scoring & ranking", "Outreach automation", "CRM enrichment", "Market signal monitoring"],
    icon: Users,
    stat: "2× increase in qualified pipeline",
  },
  {
    id: "web-scraping",
    name: "Web Scraping & Intelligence",
    tagline: "Market data, automated.",
    description: "Gather competitor pricing, product listings, market data, and industry signals from across the web. Structured, reliable, and always current — fed directly into your dashboards or CRM.",
    usecases: ["Competitor price tracking", "Product catalog monitoring", "News & sentiment analysis", "Lead list building", "Market research"],
    icon: Globe,
    stat: "Real-time data, zero manual effort",
  },
  {
    id: "social-media-agent",
    name: "Social Media Agents",
    tagline: "Always on. Always on-brand.",
    description: "AI agents that create, schedule, and publish content across LinkedIn, Instagram, Twitter/X, and more. They monitor engagement, respond to comments, and analyze performance — while you focus on strategy.",
    usecases: ["Content creation & scheduling", "Comment management", "Engagement analytics", "Brand consistency", "Multi-platform publishing"],
    icon: MessageSquare,
    stat: "10× content output without extra headcount",
  },
  {
    id: "custom-agents",
    name: "Custom AI Agents",
    tagline: "If you can describe it, we can build it.",
    description: "Bespoke AI agents built around your exact workflow. Deep integrations with your systems, custom trained on your data, and designed to handle your unique edge cases. No workflow is too complex.",
    usecases: ["Industry-specific automation", "Multi-step workflow agents", "Internal operations bots", "API integration agents", "Proprietary system integration"],
    icon: Settings,
    stat: "Custom solutions in 2–4 weeks",
  },
  {
    id: "web-app-development",
    name: "Web & App Development",
    tagline: "AI-first digital products.",
    description: "End-to-end web and mobile application development with AI embedded at every layer. We build the product and the intelligence behind it — delivering digital experiences that actually convert.",
    usecases: ["AI-powered web apps", "Mobile applications", "Dashboard & analytics tools", "Customer portals", "Internal tools & ops platforms"],
    icon: Code,
    stat: "Ship in weeks, not months",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
}

export default function SolutionsPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="container py-24 md:py-32 px-4 md:px-8 max-w-screen-xl border-b">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Solutions</p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[0.92] mb-6">
            Every AI capability your business needs.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            From voice agents and chatbots to document automation and custom workflows — BotScribe builds AI that handles the work so your team doesn&apos;t have to.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container py-20 px-4 md:px-8 max-w-screen-xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              id={solution.id}
              variants={item}
              className="border border-border rounded-xl p-8 bg-card hover:border-foreground/30 transition-colors group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full border border-border p-2.5">
                      <solution.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">{solution.tagline}</p>
                      <h2 className="font-bold text-xl">{solution.name}</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-2xl">{solution.description}</p>
                  <p className="text-xs font-semibold border-l-2 border-foreground pl-3">{solution.stat}</p>
                </div>

                {/* Right: Use Cases */}
                <div className="lg:w-72 shrink-0">
                  <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Use Cases</p>
                  <ul className="space-y-2">
                    {solution.usecases.map((uc) => (
                      <li key={uc} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="mt-6 w-full" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
