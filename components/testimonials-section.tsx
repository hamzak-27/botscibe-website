"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "BotScribe's AI voice agent now handles the bulk of our property inquiry calls. Our agents can focus on closing deals instead of answering the same questions all day. We've seen a noticeable improvement in conversion.",
    author: "Rahul Sharma",
    role: "Head of Sales",
    company: "Prime Realty Mumbai",
    industry: "Real Estate",
    stars: 5,
  },
  {
    quote: "Our response time dropped significantly after deploying BotScribe's chatbot. It handles appointment scheduling and patient follow-ups on its own, and our staff finally has time to focus on actual care.",
    author: "Dr. Anita Desai",
    role: "Operations Director",
    company: "CityMed Clinics",
    industry: "Healthcare",
    stars: 5,
  },
  {
    quote: "Weekend inquiries used to go unanswered until Monday. BotScribe built a voice agent that handles bookings and modifications after hours. It's made a real difference for our team.",
    author: "Arjun Mehta",
    role: "CEO",
    company: "SwiftDrive Rentals",
    industry: "Car Rental",
    stars: 5,
  },
]

export default function TestimonialsSection() {
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
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Client Results</p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Real businesses.
            <br />
            Real outcomes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-border rounded-lg p-6 bg-card flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t.role} &middot; {t.company}
                </p>
                <span className="inline-block mt-3 text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
