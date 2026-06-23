import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Linkedin, ArrowRight } from "lucide-react"

const founders = [
  {
    name: "Adeeb Sonde",
    role: "Co-Founder & CEO",
    bio: "Adeeb brings a business-first lens to everything BotScribe builds. With a background in business development, he has spent years helping companies scale operations, improve sales processes, and streamline the workflows that slow growth down. He started BotScribe after watching too many businesses lose revenue not from bad products, but from operational gaps that AI could close.",
    imageSrc: "/adeeb-profile.jpeg",
    linkedin: "https://www.linkedin.com/in/adeebsonde2003",
  },
  {
    name: "Hamza Khan",
    role: "Co-Founder & CTO",
    bio: "Hamza is the technical architect behind BotScribe's AI stack. With deep expertise in LLMs, voice synthesis, and real-time conversation systems, he turns business problems into precise AI solutions. His philosophy: the best AI is the one the customer never notices is there.",
    imageSrc: "/hamza-profile.jpeg",
    linkedin: "https://www.linkedin.com/in/hamzakhan27",
  },
]

const values = [
  {
    title: "No Limits",
    description: "If you can describe your workflow, we can automate it. We don't fit businesses into templates — we build around your reality.",
  },
  {
    title: "Speed Over Perfection",
    description: "We ship in days, refine in weeks. Getting your AI agent live and improving is more valuable than waiting for theoretical perfection.",
  },
  {
    title: "Outcomes, Not Outputs",
    description: "We don't deliver chatbots. We deliver reduced ticket volume, more qualified leads, and reclaimed hours. Metrics that matter.",
  },
  {
    title: "Built to Last",
    description: "Every AI agent we build is designed to scale, maintain, and improve over time. We're partners, not vendors.",
  },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="container py-24 md:py-32 px-4 md:px-8 max-w-screen-xl">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Our Story</p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] mb-8">
            We built BotScribe because we were tired of watching businesses lose.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Every missed call at midnight. Every lead that went cold because nobody followed up fast enough. Every support ticket that sat for hours while a customer waited. We saw it everywhere — and we knew AI could fix it.
          </p>
        </div>
      </section>

      {/* Backstory */}
      <section className="border-t py-24 bg-secondary/20">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Origin Story</p>
              <h2 className="text-3xl font-bold mb-6">The problem was everywhere. The solution wasn&apos;t.</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  BotScribe was born from a simple observation: businesses of every size were struggling with the same problem. Their customers expected instant responses. Their teams couldn&apos;t deliver them. And the gap — in revenue, in satisfaction, in trust — was widening every year.
                </p>
                <p>
                  Adeeb and Hamza met while consulting for a mid-sized real estate firm that was losing 40% of its inbound leads because agents simply couldn&apos;t respond fast enough after hours. They built a voice agent as a side experiment. Within 30 days, lead conversion jumped 28%.
                </p>
                <p>
                  That experiment became BotScribe. Not a chatbot company, not a software vendor — a team obsessed with one outcome: your business never misses another customer interaction again.
                </p>
                <p>
                  Today, BotScribe has deployed AI agents across real estate, healthcare, logistics, e-commerce, and B2B sales. Every agent is custom-built, trained on client data, and designed to sound exactly like your best team member — available at 3am when your best team member is asleep.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
              <Image
                src="/collaborative-tech-space.png"
                alt="BotScribe team at work"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t py-24">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">What We Stand For</p>
          <h2 className="text-3xl font-bold mb-16 max-w-xl">
            The principles behind every agent we build.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="border border-border rounded-lg p-6 bg-card">
                <p className="text-xs font-mono text-muted-foreground mb-4">0{i + 1}</p>
                <h3 className="font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="border-t py-24 bg-secondary/20">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">The Team</p>
          <h2 className="text-3xl font-bold mb-16">Meet the founders.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {founders.map((founder) => (
              <div key={founder.name} className="border border-border rounded-xl p-8 bg-background">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 relative rounded-lg overflow-hidden border border-border shrink-0">
                    <Image
                      src={founder.imageSrc || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{founder.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{founder.role}</p>
                    <Link
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-24">
        <div className="container px-4 md:px-8 max-w-screen-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to build something?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us your workflow. We&apos;ll tell you how we&apos;d automate it — and what results you can expect. No pitch decks, no fluff.
          </p>
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="/contact">
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
