"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Logo from "@/components/logo-generator"
import { useState } from "react"
import { X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo height={40} width={150} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium ml-6">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/solutions" className="transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button size="sm" asChild>
            <Link href="/contact">Schedule a Call</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
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
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="transition-colors hover:text-primary px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/solutions"
                className="transition-colors hover:text-primary px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-primary px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-primary px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <Button size="sm" className="w-full" asChild>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Schedule a Call
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
