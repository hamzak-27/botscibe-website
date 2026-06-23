import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import CTA from "@/components/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Solutions for Real Estate | BotScribe",
  description: "BotScribe builds AI voice agents and chatbots for real estate agencies — 24/7 lead qualification, property tour scheduling, and automated follow-ups that close more deals.",
}

const painPoints = [
  "Leads calling after hours go to voicemail and never convert",
  "Agents waste 60% of their time on unqualified inquiries",
  "Slow follow-up means competitors get the deal first",
  "Manual appointment scheduling creates double-bookings and no-shows",
]

const solutions = [
  {
    title: "24/7 AI Voice Agent for Inbound Calls",
    description: "Every call gets answered instantly — day, night, or weekend. Our AI agent qualifies the lead, captures their requirements, and books a tour with the right agent automatically.",
  },
  {
    title: "Instant Lead Qualification",
    description: "The AI asks the right questions: budget, timeline, location, property type. Only serious, pre-qualified buyers reach your agents. Your team's time goes toward closing, not screening.",
  },
  {
    title: "Automated Tour Scheduling",
    description: "Syncs with your agents' calendars and books property viewings on the spot — with confirmation texts, reminders, and rescheduling handled automatically.",
  },
  {
    title: "Intelligent Follow-Up Sequences",
    description: "After every inquiry, the AI follows up at optimized intervals via call or message. No lead goes cold because someone forgot to follow up.",
  },
]

export default function RealEstatePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="container py-24 md:py-32 px-4 md:px-8 max-w-screen-xl border-b">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Real Estate</p>
          <h1 className="font-bold text-5xl sm:text-6xl leading-[0.92] mb-6">
            Stop losing deals to slow response times.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Real estate moves fast. BotScribe AI agents answer every call, qualify every lead, and book every tour — instantly, 24/7. Your agents only talk to buyers who are ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-12 px-8" asChild>
              <Link href="/contact">
                See It In Action
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8" asChild>
              <Link href="/solutions">All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-b py-12 bg-foreground text-background">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "34%", label: "More qualified leads" },
              { value: "28%", label: "Higher conversion rate" },
              { value: "100%", label: "After-hours coverage" },
              { value: "3×", label: "Faster lead response" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-sm opacity-70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="border-b py-20 bg-secondary/20">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">The Problem</p>
            <h2 className="text-3xl font-bold mb-8">Real estate agencies bleed revenue from the same bottlenecks.</h2>
            <ul className="space-y-4">
              {painPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-5 h-5 rounded-full border border-border flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-b py-20">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">How BotScribe Fixes It</p>
          <h2 className="text-3xl font-bold mb-12 max-w-xl">AI that works like your best agent — available always.</h2>
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

      {/* Testimonial */}
      <section className="border-b py-20 bg-secondary/20">
        <div className="container px-4 md:px-8 max-w-screen-xl max-w-3xl">
          <blockquote className="text-2xl font-medium leading-relaxed mb-6">
            &ldquo;BotScribe&apos;s AI voice agent now handles 80% of our property inquiry calls. Our agents focus on closing deals, not answering the same questions repeatedly. Conversion rate up 34% in 60 days.&rdquo;
          </blockquote>
          <cite className="not-italic">
            <p className="font-semibold">Marcus Al-Rashid</p>
            <p className="text-sm text-muted-foreground">Head of Sales, Prestige Properties Group</p>
          </cite>
        </div>
      </section>

      {/* Integration note */}
      <section className="border-b py-16">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Integrations</p>
              <h3 className="text-xl font-bold mb-2">Works with your existing stack</h3>
              <p className="text-sm text-muted-foreground max-w-lg">Integrates with Salesforce, HubSpot, Zoho CRM, Calendly, Google Calendar, and most real estate CRM platforms.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Salesforce", "HubSpot", "Zoho", "Calendly", "Google Calendar"].map((tool) => (
                <span key={tool} className="border border-border rounded-full px-4 py-1.5 text-sm text-muted-foreground">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
