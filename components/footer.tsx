import Link from "next/link"
import Logo from "@/components/logo-generator"

const solutions = [
  { label: "AI Voice Agents", href: "/solutions#voice-agents" },
  { label: "Intelligent Chatbots", href: "/solutions#chatbots" },
  { label: "Document Generation", href: "/solutions#document-generation" },
  { label: "RAG Systems", href: "/solutions#rag" },
  { label: "Web Scraping", href: "/solutions#web-scraping" },
]

const industries = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Car Rental", href: "/industries/car-rental" },
  { label: "Customer Support", href: "/industries/customer-support" },
  { label: "E-commerce", href: "/industries/ecommerce" },
]

const company = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Logo height={32} width={130} />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI automation built for businesses that refuse to lose customers to slow response times.
            </p>
            <p className="text-xs text-muted-foreground italic">
              &ldquo;You explain your workflow. We automate it. No limits.&rdquo;
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://www.linkedin.com/company/botscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/botscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter / X
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase">Industries</h3>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BotScribe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
