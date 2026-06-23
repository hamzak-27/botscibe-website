import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CTA from "@/components/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Solutions for Healthcare | BotScribe",
  description: "BotScribe builds AI agents for healthcare providers — appointment scheduling, patient follow-ups, insurance verification, and intake automation.",
}

const solutions = [
  {
    title: "Automated Appointment Scheduling",
    description: "Patients book, reschedule, or cancel appointments via voice or chat — 24/7. Syncs with your scheduling system in real time and sends automatic reminders to cut no-shows.",
  },
  {
    title: "Insurance Pre-Verification",
    description: "AI verifies insurance eligibility before appointments, reducing claim rejections and administrative back-and-forth. Patients arrive ready. Billing is cleaner.",
  },
  {
    title: "Patient Follow-Up Automation",
    description: "Post-visit follow-ups, prescription reminders, test result notifications, and care plan check-ins — all automated, all timely, all personalized.",
  },
  {
    title: "Intake & Triage Automation",
    description: "Collect patient history, symptoms, and intake forms before the appointment via conversational AI. Clinicians arrive prepared. Appointments run faster.",
  },
]

export default function HealthcarePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="container py-24 md:py-32 px-4 md:px-8 max-w-screen-xl border-b">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Healthcare</p>
          <h1 className="font-bold text-5xl sm:text-6xl leading-[0.92] mb-6">
            More patients served. Less admin overhead.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            BotScribe automates the administrative layer of healthcare — scheduling, follow-ups, insurance, and intake — so your clinical team spends more time with patients, not paperwork.
          </p>
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="/contact">
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-b py-12 bg-foreground text-background">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "80%", label: "Reduction in no-shows" },
              { value: "4hrs", label: "Response time → 2 mins" },
              { value: "40%", label: "Less admin time per staff" },
              { value: "24/7", label: "Patient access to scheduling" },
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
          <h2 className="text-3xl font-bold mb-12 max-w-xl">Automate the admin. Amplify the care.</h2>
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
            &ldquo;We went from a 4-hour average patient response time to under 2 minutes. The chatbot handles appointment scheduling, insurance queries, and follow-ups autonomously. Our coordinators focus on complex cases now.&rdquo;
          </blockquote>
          <cite className="not-italic">
            <p className="font-semibold">Dr. Priya Mehta</p>
            <p className="text-sm text-muted-foreground">Operations Director, MedCare Clinics</p>
          </cite>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
