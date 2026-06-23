"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const industries = [
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "AI agents that qualify leads, schedule property tours, and handle 24/7 inquiries so your agents only speak to serious buyers.",
    stat: "34% more qualified leads",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "Appointment scheduling, patient follow-ups, and insurance verification — fully automated, HIPAA-aware.",
    stat: "80% reduction in no-shows",
  },
  {
    name: "Corporate Car Rental",
    slug: "car-rental",
    description: "Booking, modification, and cancellation handling without human involvement. 24/7 across voice and chat.",
    stat: "100% after-hours coverage",
  },
  {
    name: "Customer Support",
    slug: "customer-support",
    description: "Resolve 70% of tickets automatically. Escalate only what truly needs a human. Cut costs, not quality.",
    stat: "62% ticket reduction",
  },
  {
    name: "E-commerce",
    slug: "ecommerce",
    description: "Order tracking, returns processing, and product recommendation bots that convert browsers into buyers.",
    stat: "3× faster resolution",
  },
  {
    name: "Financial Services",
    slug: "financial-services",
    description: "Account inquiries, loan qualification, and fraud alert automation with precision and compliance.",
    stat: "99.9% data extraction accuracy",
  },
]

export default function IndustrySection() {
  return (
    <section className="py-24 lg:py-32 border-t bg-secondary/30">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4"
        >
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Industries We Serve</p>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Built for your
              <br />
              specific industry.
            </h2>
          </div>
          <Link
            href="/industries"
            className="flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4 shrink-0"
          >
            View all industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/industries/${ind.slug}`}
                className="group block border border-border rounded-lg p-6 bg-background hover:border-foreground transition-colors duration-200 h-full"
              >
                <p className="text-xs font-mono tracking-wider text-muted-foreground mb-3">{ind.stat}</p>
                <h3 className="text-xl font-bold mb-2 group-hover:underline underline-offset-4">{ind.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                <div className="mt-5 flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  Explore use cases <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
