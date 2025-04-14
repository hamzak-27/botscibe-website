"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Bot, FileText, Brain, Search, Database, Users, Globe, MessageSquare, Settings, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Chatbot from "@/components/chatbot"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const solutions = [
  {
    id: "voice-agents",
    name: "AI Voice Agents",
    description:
      "Our AI voice agents provide human-like interactions over the phone, handling customer inquiries, appointment scheduling, and support with natural conversation flow. They can understand context, respond to complex questions, and seamlessly integrate with your existing systems.",
    icon: Bot,
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-500/10",
  },
  {
    id: "chatbots",
    name: "Intelligent Chatbots",
    description:
      "Our intelligent chatbots deliver 24/7 customer support and engagement through AI-powered conversational interfaces. They can handle multiple queries simultaneously, learn from interactions, and provide personalized responses based on user history and preferences.",
    icon: Brain,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-500/10",
  },
  {
    id: "document-generation",
    name: "Document Generation",
    description:
      "Automate the creation of personalized documents, reports, and content at scale. Our document generation solutions can produce customized contracts, proposals, reports, and marketing materials based on your templates and data inputs.",
    icon: FileText,
    color: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: "intelligent-ocr",
    name: "Intelligent OCR",
    description:
      "Extract and process information from documents with advanced optical character recognition. Our intelligent OCR solutions can identify, extract, and categorize data from various document types, including invoices, receipts, forms, and handwritten notes.",
    icon: Search,
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-500/10",
  },
  {
    id: "rag",
    name: "Retrieval-Augmented Generation (RAG)",
    description:
      "Enhance your AI applications with our RAG solutions that combine the power of large language models with your proprietary data. This enables more accurate, contextual, and relevant AI responses based on your specific knowledge base and documents.",
    icon: Database,
    color: "from-rose-500 to-rose-700",
    bgColor: "bg-rose-500/10",
  },
  {
    id: "leads-generation",
    name: "AI-driven Leads Generation",
    description:
      "Leverage AI to identify and qualify potential customers with our leads generation solutions. Our systems analyze market data, customer behavior, and social signals to identify high-potential prospects and provide actionable insights for your sales team.",
    icon: Users,
    color: "from-teal-500 to-teal-700",
    bgColor: "bg-teal-500/10",
  },
  {
    id: "web-scraping",
    name: "Intelligent Web Scraping",
    description:
      "Gather and analyze data from across the web with our intelligent web scraping solutions. Our systems can extract structured data from websites, monitor for changes, and provide valuable market intelligence while respecting website terms and conditions.",
    icon: Globe,
    color: "from-cyan-500 to-cyan-700",
    bgColor: "bg-cyan-500/10",
  },
  {
    id: "social-media-agent",
    name: "Social Media Agent",
    description:
      "Automate your social media presence with our AI-powered social media agents. They can create engaging content, schedule posts, respond to comments, analyze engagement metrics, and help you build a stronger online presence across multiple platforms.",
    icon: MessageSquare,
    color: "from-pink-500 to-pink-700",
    bgColor: "bg-pink-500/10",
  },
  {
    id: "custom-agents",
    name: "Custom Agents",
    description:
      "We develop bespoke AI agents tailored to your specific business needs. Whether you need specialized industry knowledge, unique workflows, or integration with proprietary systems, our custom agents are designed to address your exact requirements.",
    icon: Settings,
    color: "from-indigo-500 to-indigo-700",
    bgColor: "bg-indigo-500/10",
  },
  {
    id: "web-app-development",
    name: "Web & App Development",
    description:
      "Our expert team designs and develops cutting-edge web applications and mobile apps that integrate seamlessly with AI technologies. We create responsive, user-friendly digital experiences that help businesses engage customers and streamline operations.",
    icon: Code,
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-500/10",
  },
]

export default function SolutionsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <section className="container py-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-[58rem] text-center mb-16"
          >
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl mb-6">Our Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI services tailored to transform your business operations
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                variants={item}
                className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md flex flex-col"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`rounded-full ${solution.bgColor} p-2.5`}>
                    <solution.icon
                      className={`h-5 w-5 text-${solution.color.split("-")[1]}-600 dark:text-${solution.color.split("-")[1]}-400`}
                    />
                  </div>
                  <h3 className="font-bold text-lg">{solution.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm flex-grow">{solution.description}</p>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={`hover:bg-${solution.color.split("-")[1]}-500/10 hover:text-${solution.color.split("-")[1]}-600 dark:hover:text-${solution.color.split("-")[1]}-400`}
                  >
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We understand that every business has unique challenges. Contact us to discuss how we can develop a
              tailored AI solution for your specific needs.
            </p>
            <Button size="lg" asChild className="transition-all duration-300 hover:scale-105">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </section>

        <Footer />
        <Chatbot />
      </div>
    </div>
  )
}
