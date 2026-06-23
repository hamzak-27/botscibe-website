import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CTA from "@/components/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Solutions for E-commerce | BotScribe",
  description: "BotScribe builds AI agents for e-commerce — order tracking, returns processing, abandoned cart recovery, and product recommendations that convert.",
}

const solutions = [
  {
    title: "Order Tracking & Status Updates",
    description: "Customers get instant order status, shipping updates, and delivery ETAs via chat or voice — without waiting for a human agent or checking their inbox.",
  },
  {
    title: "Returns & Refund Processing",
    description: "The AI walks customers through the return process, captures reason codes, issues return labels, and triggers refunds based on your policy — end to end.",
  },
  {
    title: "Abandoned Cart Recovery",
    description: "Proactive AI outreach to customers who left items in their cart — personalized messaging, offer delivery, and direct checkout links that recover revenue.",
  },
  {
    title: "Product Recommendation Engine",
    description: "Conversational AI that understands what customers are looking for and recommends the right products — increasing average order value and purchase confidence.",
  },
]

export default function EcommercePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="container py-24 md:py-32 px-4 md:px-8 max-w-screen-xl border-b">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">E-commerce</p>
          <h1 className="font-bold text-5xl sm:text-6xl leading-[0.92] mb-6">
            Sell more. Support better. Scale effortlessly.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            BotScribe AI handles the entire post-purchase customer journey — and converts more browsers into buyers — so you can scale without scaling your support team.
          </p>
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="/contact">
              Get a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-b py-12 bg-foreground text-background">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3×", label: "Faster resolution time" },
              { value: "18%", label: "Cart recovery rate" },
              { value: "25%", label: "Higher average order value" },
              { value: "90%", label: "Customer satisfaction score" },
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
          <h2 className="text-3xl font-bold mb-12 max-w-xl">Every customer touchpoint. Automated.</h2>
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

      <CTA />
      <Footer />
    </div>
  )
}
