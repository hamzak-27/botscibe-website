"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Logo from "@/components/logo-generator"
import { useState } from "react"
import { X, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const industryLinks = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Corporate Car Rental", href: "/industries/car-rental" },
  { label: "Customer Support", href: "/industries/customer-support" },
  { label: "E-commerce", href: "/industries/ecommerce" },
  { label: "Financial Services", href: "/industries/financial-services" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <Logo height={36} width={140} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm font-medium ml-8">
          <Link
            href="/"
            className={cn("transition-colors hover:text-foreground", pathname === "/" ? "text-foreground" : "text-muted-foreground")}
          >
            Home
          </Link>
          <Link
            href="/solutions"
            className={cn("transition-colors hover:text-foreground", pathname?.startsWith("/solutions") ? "text-foreground" : "text-muted-foreground")}
          >
            Solutions
          </Link>

          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 transition-colors hover:text-foreground",
                pathname?.startsWith("/industries") ? "text-foreground" : "text-muted-foreground"
              )}
            >
              Industries
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", industriesOpen && "rotate-180")} />
            </button>
            {industriesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-popover border border-border rounded-lg shadow-lg py-2 w-52">
                  {industryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-border mt-2 pt-2">
                    <Link
                      href="/industries"
                      className="block px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
                    >
                      All Industries →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className={cn("transition-colors hover:text-foreground", pathname?.startsWith("/blog") ? "text-foreground" : "text-muted-foreground")}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={cn("transition-colors hover:text-foreground", pathname?.startsWith("/about") ? "text-foreground" : "text-muted-foreground")}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={cn("transition-colors hover:text-foreground", pathname?.startsWith("/contact") ? "text-foreground" : "text-muted-foreground")}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button size="sm" className="h-9 px-4" asChild>
            <Link href="/contact">Get a Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container px-4 py-5 space-y-1">
            {[
              { href: "/", label: "Home" },
              { href: "/solutions", label: "Solutions" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm rounded-md hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="flex items-center justify-between w-full px-3 py-2.5 text-sm rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
            >
              Industries
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileIndustriesOpen && "rotate-180")} />
            </button>
            {mobileIndustriesOpen && (
              <div className="pl-4 space-y-1">
                {industryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            <div className="pt-3">
              <Button size="sm" className="w-full" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
