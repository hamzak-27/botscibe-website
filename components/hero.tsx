"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/logo-generator"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!mounted) return null

  // Simplified animation config for mobile
  const animationConfig = {
    initial: isMobile ? { opacity: 0 } : { scale: 0.8, opacity: 0 },
    animate: isMobile ? { opacity: 1 } : { scale: 1, opacity: 1 },
    transition: { 
      duration: isMobile ? 0.3 : 0.5,
      // Reduce animation complexity on mobile
      ease: "easeOut"
    }
  }

  const fadeInConfig = {
    initial: { y: isMobile ? 0 : 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { 
      duration: isMobile ? 0.3 : 0.7,
      delay: isMobile ? 0.1 : 0.3,
      ease: "easeOut"
    }
  }

  const buttonConfig = {
    initial: { y: isMobile ? 0 : 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { 
      duration: isMobile ? 0.3 : 0.7,
      delay: isMobile ? 0.2 : 0.6,
      ease: "easeOut"
    }
  }

  return (
    <section className="container flex min-h-[calc(100vh-5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-6 md:space-y-8 py-16 md:py-24 lg:py-32 text-center px-4 md:px-8">
      <motion.div
        initial={animationConfig.initial}
        animate={animationConfig.animate}
        transition={animationConfig.transition}
        className="flex flex-col items-center mb-4 md:mb-6"
      >
        <Logo height={120} width={360} className="mb-4 md:mb-6 md:h-[150px] md:w-[450px] lg:h-[200px] lg:w-[600px]" />
      </motion.div>
      <motion.div
        initial={fadeInConfig.initial}
        animate={fadeInConfig.animate}
        transition={fadeInConfig.transition}
        className="space-y-3 md:space-y-4"
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          AI Solutions Tailored
          <br className="hidden sm:inline" />
          <span className="inline sm:hidden"> </span>
          For Your Business
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
          From our predefined solutions to your workflow according solutions we provide all
        </p>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl italic">
          "You explain to us your workflow, we will automate it - no limits"
        </p>
      </motion.div>
      <motion.div
        initial={buttonConfig.initial}
        animate={buttonConfig.animate}
        transition={buttonConfig.transition}
        className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
      >
        <Button size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/solutions">
            Explore Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/contact">Schedule a Demo</Link>
        </Button>
      </motion.div>
    </section>
  )
}
