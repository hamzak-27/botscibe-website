import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CTA from "@/components/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for Customer Support | BotScribe",
  description: "BotScribe builds AI agents that resolve 70% of support tickets automatically, escalate intelligently, and slash response times — without growing your headcount.",
}

const solutions = [
  {
    title: "Tier-1 Ticket Resolution",
    description: "The AI resolves password resets, order status, billing questions, account changes, and product FAQs automatically — handling the high-volume, low-complexity work that drains your team.",
  },
  {
    title: "Intelligent Escalation",
    description: "When the AI can't resolve something, it escalates to the right human agent — with full context, transcript, and classification. Your agents never start from zero.",
  },
  {
    title: "Multi-Channel Coverage",
    description: "Deploy across web chat, email triage, WhatsApp, and voice — unified under one AI layer. Consistent resolution quality across every channel, every time.",
  },
  {
    title: "Knowledge Base Automation",
    description: "Connect your existing documentation and help center to the AI. It searches, synthesizes, and delivers accurate answers in seconds — and flags knowledge gaps for your team.",
  },
]

export default function CustomerSupportPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="container py-24 md:py-32 px-4 md:px-8 max-w-screen-xl border-b">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Customer Support</p>
          <h1 className="font-bold text-5xl sm:text-6xl leading-[0.92] mb-6">
            Resolve 70% of tickets. Without hiring.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            BotScribe AI agents handle the repetitive, high-volume support work automatically — so your human team focuses on complex issues that actually need them.
          </p>
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="/contact">
              See the ROI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-b py-12 bg-foreground text-background">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "62%", label: "Ticket reduction" },
              { value: "< 2min", label: "Average response time" },
              { value: "70%", label: "Auto-resolved tickets" },
              { value: "30%", label: "Support cost reduction" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-sm opacity-70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b py-20">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Solutions</p>
          <h2 className="text-3xl font-bold mb-12 max-w-xl">Your AI support team, fully deployed.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <div key={s.title} className="border border-border rounded-xl p-8 bg-card">
                <p className="text-xs font-mono text-muted-foreground mb-4">0{i + 1}</p>
                <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b py-20 bg-secondary/20">
        <div className="container px-4 md:px-8 max-w-screen-xl max-w-3xl">
          <blockquote className="text-2xl font-medium leading-relaxed mb-6">
            &ldquo;Support ticket volume dropped 62% in the first month. The chatbot resolves common issues instantly, escalates intelligently, and our team is finally doing meaningful work — not copy-pasting the same responses 40 times a day.&rdquo;
          </blockquote>
          <cite className="not-italic">
            <p className="font-semibold">Sophie Chen</p>
            <p className="text-sm text-muted-foreground">VP Customer Experience, CloudStack Technologies</p>
          </cite>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
