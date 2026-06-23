"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to deploy an AI agent?",
    answer: "Most standard deployments go live within 5–10 business days. Custom enterprise solutions with deep integrations typically take 2–4 weeks. We prioritize speed without compromising on quality or accuracy.",
  },
  {
    question: "Can BotScribe integrate with our existing CRM and tools?",
    answer: "Yes. We integrate natively with Salesforce, HubSpot, Zoho, Calendly, and most major CRMs and scheduling platforms. We also offer fully custom API integrations for proprietary or legacy systems.",
  },
  {
    question: "What happens when the AI can't answer a question?",
    answer: "Our agents have intelligent escalation built in. When confidence drops below threshold, the conversation is seamlessly handed off to a human agent — along with a full transcript so your team has complete context and never has to start over.",
  },
  {
    question: "Do you offer voice agents or only chatbots?",
    answer: "Both. BotScribe builds AI voice agents for phone-based interactions as well as chatbots for web, WhatsApp, and other messaging platforms. Many clients deploy both simultaneously — voice for inbound calls, chat for digital channels.",
  },
  {
    question: "Is the AI trained on our specific business data?",
    answer: "Absolutely. Every agent is trained on your product documentation, FAQs, policies, and historical conversations. The result is an AI that sounds like your brand, understands your context, and gives accurate, on-brand responses.",
  },
  {
    question: "What industries does BotScribe specialize in?",
    answer: "We have deep expertise in real estate, healthcare, corporate car rental, e-commerce, and B2B SaaS. However, our custom agent framework means we can build for virtually any industry — if you have a workflow, we can automate it.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-24 lg:py-32 border-t bg-secondary/30">
      <div className="container px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">FAQ</p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Common questions,
            <br />
            straight answers.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
