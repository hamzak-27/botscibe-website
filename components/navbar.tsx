import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Logo from "@/components/logo-generator"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <Logo height={40} width={200} />
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
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
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button size="sm" asChild>
            <Link href="/contact">Schedule a Call</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
