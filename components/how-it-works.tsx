"use client"

import { motion } from "framer-motion"

const steps = [
  {
    step: "01",
    title: "Explain Your Workflow",
    description: "Tell us exactly how your business operates — your customer touchpoints, common queries, escalation paths, and processes. We listen carefully and document everything.",
  },
  {
    step: "02",
    title: "We Build Your AI Agent",
    description: "Our team designs, trains, and rigorously tests a custom AI solution tailored to your exact workflow. Trained on your data, speaking in your brand voice.",
  },
  {
    step: "03",
    title: "Deploy & Scale",
    description: "Go live in days, not months. Your AI agent handles thousands of simultaneous conversations while you focus on growth. We monitor, refine, and improve continuously.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">The Process</p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            From conversation
            <br />
            to deployment in days.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[calc(50%/3+4rem)] right-[calc(50%/3+4rem)] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background text-lg font-bold tracking-tight mb-6 shrink-0">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
