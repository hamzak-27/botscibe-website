import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CTA from "@/components/cta"

const industries = [
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "AI voice agents that qualify leads 24/7, schedule property tours automatically, and follow up with prospects so no deal slips through the cracks.",
    stat: "34% more qualified leads",
    usecases: ["Lead qualification calls", "Property tour scheduling", "After-hours inquiry handling", "CRM integration"],
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "Appointment scheduling, patient follow-ups, insurance verification, and intake automation — all handled by AI, all HIPAA-aware.",
    stat: "80% reduction in no-shows",
    usecases: ["Appointment booking & reminders", "Insurance pre-verification", "Patient intake automation", "Follow-up scheduling"],
  },
  {
    name: "Corporate Car Rental",
    slug: "car-rental",
    description: "Full-cycle booking management via voice and chat. Reservations, modifications, cancellations, and fleet inquiries handled without a single human touchpoint.",
    stat: "100% after-hours coverage",
    usecases: ["Booking & reservation management", "Modification & cancellation handling", "Fleet availability inquiries", "Corporate account support"],
  },
  {
    name: "Customer Support",
    slug: "customer-support",
    description: "Resolve 70% of incoming tickets automatically. Route the rest intelligently. Your team handles what actually needs humans — everything else is automated.",
    stat: "62% ticket reduction",
    usecases: ["Tier-1 ticket resolution", "Intelligent escalation routing", "FAQ & knowledge base automation", "Multi-channel support"],
  },
  {
    name: "E-commerce",
    slug: "ecommerce",
    description: "Order tracking, returns processing, product recommendations, and cart recovery — all automated at scale across web and messaging channels.",
    stat: "3× faster resolution time",
    usecases: ["Order status & tracking", "Returns & refund processing", "Product recommendation bots", "Abandoned cart recovery"],
  },
  {
    name: "Financial Services",
    slug: "financial-services",
    description: "Account inquiries, loan pre-qualification, fraud alerts, and document processing with the precision and compliance that financial services demands.",
    stat: "99.9% data extraction accuracy",
    usecases: ["Account inquiry automation", "Loan pre-qualification", "Document OCR & processing", "Fraud alert notifications"],
  },
]

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="container py-24 md:py-32 px-4 md:px-8 max-w-screen-xl border-b">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Industries</p>
          <h1 className="font-bold text-5xl sm:text-6xl leading-[0.92] mb-6">
            AI built for your specific industry.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Generic AI solves generic problems. BotScribe builds agents trained on your industry&apos;s language, workflows, and edge cases — so they work from day one.
          </p>
        </div>
      </section>

      <section className="container py-20 px-4 md:px-8 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group border border-border rounded-xl p-8 bg-card hover:border-foreground transition-colors"
            >
              <p className="text-xs font-mono text-muted-foreground mb-4">{ind.stat}</p>
              <h2 className="text-2xl font-bold mb-3 group-hover:underline underline-offset-4">{ind.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{ind.description}</p>
              <ul className="space-y-2 mb-6">
                {ind.usecases.map((uc) => (
                  <li key={uc} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                    {uc}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                Explore {ind.name} solutions <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t py-20">
        <div className="container px-4 md:px-8 max-w-screen-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Don&apos;t see your industry?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            BotScribe has built custom agents for logistics, legal, hospitality, manufacturing, and more. If you have a workflow, we can automate it.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Tell Us Your Workflow
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
