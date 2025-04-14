import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Chatbot from "@/components/chatbot"
import { Linkedin } from "lucide-react"

const founders = [
  {
    name: "Adeeb Sonde",
    role: "Co-Founder & CEO",
    imageSrc: "/adeeb-profile.jpeg",
    linkedin: "https://www.linkedin.com/in/adeebsonde2003",
  },
  {
    name: "Hamza Khan",
    role: "Co-Founder & CTO",
    imageSrc: "/hamza-profile.jpeg",
    linkedin: "https://www.linkedin.com/in/hamzakhan27",
  },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <section className="container py-24">
          <div className="mx-auto max-w-[58rem] text-center mb-16">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl mb-6">About BotScribe</h1>
            <p className="text-xl text-muted-foreground">Transforming businesses through innovative AI solutions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At BotScribe, we're on a mission to make advanced AI technology accessible to businesses of all sizes.
                We believe that AI should be a tool that enhances human capabilities, not replaces them.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our goal is to develop AI solutions that are intuitive, effective, and tailored to the specific needs of
                each client. We work closely with our clients to understand their challenges and create custom AI
                solutions that drive real business value.
              </p>
              <p className="text-lg text-muted-foreground">
                With a focus on innovation and excellence, we're committed to pushing the boundaries of what's possible
                with AI technology.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/collaborative-tech-space.png"
                alt="BotScribe team at work"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Founders</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {founders.map((founder) => (
                <div key={founder.name} className="flex flex-col items-center">
                  <div className="w-64 h-64 relative rounded-lg overflow-hidden border shadow-md mb-4">
                    <Image
                      src={founder.imageSrc || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="object-cover object-top scale-[1.15]"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary mb-3">{founder.role}</p>
                  <Link
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black dark:bg-white rounded-full p-1.5 hover:opacity-80 transition-opacity"
                  >
                    <Linkedin className="h-4 w-4 text-white dark:text-black" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who are passionate about AI and technology. If you're
              interested in joining our team or partnering with us, we'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>

        <Footer />
        <Chatbot />
      </div>
    </div>
  )
}
