"use client"

import { motion } from "framer-motion"

const companies = [
  "Prestige Properties",
  "MedCare Clinics",
  "Executive Fleet",
  "CloudStack",
  "Gulf Ventures",
  "TechNova Corp",
  "AlphaCare Health",
  "Summit Realty",
  "FleetPro Global",
  "Apex Solutions",
]

export default function TrustLogos() {
  return (
    <section className="border-t border-b py-12 overflow-hidden bg-secondary/30">
      <div className="container px-4 mb-6">
        <p className="text-center text-xs font-medium tracking-widest uppercase text-muted-foreground">
          Trusted by businesses worldwide
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...companies, ...companies].map((company, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-8 text-sm font-semibold tracking-tight text-muted-foreground hover:text-foreground transition-colors cursor-default select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-border mr-3" />
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
