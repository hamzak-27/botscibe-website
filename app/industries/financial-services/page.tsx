import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CTA from "@/components/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Solutions for Financial Services | BotScribe",
  description: "BotScribe builds AI agents for financial services — account inquiries, loan pre-qualification, fraud alerts, and document processing with precision and compliance.",
}

const solutions = [
  {
    title: "Account Inquiry Automation",
    description: "Customers get instant answers to balance inquiries, transaction history, account status, and fee questions — 24/7, without waiting on hold.",
  },
  {
    title: "Loan Pre-Qualification",
    description: "AI agents guide applicants through pre-qualification questions, collect required information, and deliver a preliminary assessment — filtering serious applicants before your team gets involved.",
  },
  {
    title: "Document OCR & Processing",
    description: "Extract data from financial documents — statements, tax forms, pay stubs, IDs — with 99.9% accuracy. Auto-populate applications and reduce manual data entry to zero.",
  },
  {
    title: "Fraud Alert & Verification",
    description: "Instant outbound calls or messages to verify suspicious transactions, confirm identity, and escalate genuine fraud cases — faster than any manual process.",
  },
]

export default function FinancialServicesPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="container py-24 md:py-32 px-4 md:px-8 max-w-screen-xl border-b">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Financial Services</p>
          <h1 className="font-bold text-5xl sm:text-6xl leading-[0.92] mb-6">
            Precision AI for financial operations.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            BotScribe builds AI systems for financial institutions that demand accuracy, compliance, and speed — from account inquiries to document processing and fraud detection.
          </p>
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="/contact">
              Talk to Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-b py-12 bg-foreground text-background">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.9%", label: "Data extraction accuracy" },
              { value: "60%", label: "Faster loan processing" },
              { value: "24/7", label: "Fraud alert coverage" },
              { value: "Zero", label: "Manual data entry" },
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
          <h2 className="text-3xl font-bold mb-12 max-w-xl">AI that financial institutions can trust.</h2>
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
            &ldquo;The document generation and OCR systems BotScribe built saves our team 30+ hours per week. Contracts, client onboarding documents, and financial summaries — all generated and extracted in seconds.&rdquo;
          </blockquote>
          <cite className="not-italic">
            <p className="font-semibold">Natalie Rousseau</p>
            <p className="text-sm text-muted-foreground">General Counsel, Meridian Capital Group</p>
          </cite>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
