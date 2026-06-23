"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TrustLogos from "@/components/trust-logos"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import IndustrySection from "@/components/industry-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <TrustLogos />
      <Features />
      <HowItWorks />
      <IndustrySection />
      <TestimonialsSection />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  )
}
