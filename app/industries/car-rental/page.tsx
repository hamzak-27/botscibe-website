import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CTA from "@/components/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Solutions for Corporate Car Rental | BotScribe",
  description: "BotScribe builds AI voice agents for car rental companies — 24/7 booking, modification, cancellation, and fleet inquiry handling with zero human involvement.",
}

const solutions = [
  {
    title: "24/7 Booking via Voice & Chat",
    description: "Customers reserve vehicles at any hour via phone or web chat. The AI handles availability checks, pricing, pickup location, and confirmation — instantly.",
  },
  {
    title: "Modification & Cancellation Handling",
    description: "Customers change dates, upgrade vehicles, or cancel reservations without waiting for a human agent. Full modifications handled in real time with instant confirmation.",
  },
  {
    title: "Fleet Availability & Pricing Inquiries",
    description: "The AI answers vehicle category questions, pricing structures, insurance options, and add-on services with accurate, up-to-date information from your inventory.",
  },
  {
    title: "Corporate Account Management",
    description: "Dedicated AI workflows for corporate clients — preferred rates, multi-booking management, billing queries, and account-specific policies handled autonomously.",
  },
]

export default function CarRentalPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="container py-24 md:py-32 px-4 md:px-8 max-w-screen-xl border-b">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Corporate Car Rental</p>
          <h1 className="font-bold text-5xl sm:text-6xl leading-[0.92] mb-6">
            Full-cycle rental management. Zero hold times.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            BotScribe AI agents handle every step of the rental process — bookings, changes, cancellations, and fleet inquiries — across voice and digital channels, around the clock.
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
              { value: "100%", label: "After-hours coverage" },
              { value: "0", label: "Average hold time" },
              { value: "85%", label: "Bookings without human" },
              { value: "24/7", label: "Voice & chat availability" },
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
          <h2 className="text-3xl font-bold mb-12 max-w-xl">Every rental interaction. Automated.</h2>
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
            &ldquo;Our fleet rental inquiries used to overwhelm the team on weekends and holidays. BotScribe built a voice agent that books, modifies, and cancels reservations without any human involvement. Weekend revenue increased 22%.&rdquo;
          </blockquote>
          <cite className="not-italic">
            <p className="font-semibold">James Okafor</p>
            <p className="text-sm text-muted-foreground">CEO, Executive Fleet Solutions</p>
          </cite>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
