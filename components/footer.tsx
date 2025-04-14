import Link from "next/link"
import Logo from "@/components/logo-generator"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Logo height={40} width={180} />
          </div>
          <p className="text-sm text-muted-foreground">AI solutions tailored for your business needs.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/solutions#voice-agents"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link href="/solutions#chatbots" className="text-muted-foreground transition-colors hover:text-primary">
                  Intelligent Chatbots
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#document-generation"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Document Generation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BotScribe. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
