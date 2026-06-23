import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | BotScribe — AI Automation Insights",
  description: "Practical guides, industry insights, and case studies on AI automation for business. Learn how AI voice agents, chatbots, and automation are transforming industries.",
}

export const posts = [
  {
    slug: "ai-voice-agents-real-estate",
    title: "How AI Voice Agents Are Closing More Real Estate Deals in 2025",
    excerpt: "Real estate agencies that implemented AI voice agents saw a 34% jump in qualified leads within 60 days. Here's exactly how it works and what to expect.",
    category: "Real Estate",
    readTime: "6 min read",
    date: "June 10, 2026",
  },
  {
    slug: "chatbots-customer-retention",
    title: "5 Ways Chatbots Improve Customer Retention (With Real Numbers)",
    excerpt: "Response time is the #1 driver of customer churn. We analyzed 50+ deployments to identify the chatbot strategies that actually move the retention needle.",
    category: "Customer Support",
    readTime: "8 min read",
    date: "June 3, 2026",
  },
  {
    slug: "roi-ai-automation-healthcare",
    title: "The ROI of AI Automation in Healthcare: A Data-Driven Analysis",
    excerpt: "Healthcare providers using AI for scheduling and patient follow-ups report 40% less admin overhead and 80% fewer no-shows. The numbers behind the transformation.",
    category: "Healthcare",
    readTime: "7 min read",
    date: "May 27, 2026",
  },
  {
    slug: "why-every-business-needs-ai-agent",
    title: "Why Every Business Needs a 24/7 AI Agent in 2025",
    excerpt: "71% of customers expect a response within 5 minutes. Most businesses can't deliver that. Here's why AI agents are no longer a competitive advantage — they're a baseline requirement.",
    category: "Strategy",
    readTime: "5 min read",
    date: "May 20, 2026",
  },
  {
    slug: "document-automation-legal",
    title: "How Document Automation Saves Legal Teams 30+ Hours Per Week",
    excerpt: "Contracts, NDAs, proposals, and compliance documents — all generated in seconds. Inside the document automation stack that's transforming legal operations.",
    category: "Document Automation",
    readTime: "6 min read",
    date: "May 13, 2026",
  },
  {
    slug: "rag-vs-fine-tuning",
    title: "RAG vs. Fine-Tuning: Which AI Approach Is Right for Your Business?",
    excerpt: "Two powerful ways to make AI work with your proprietary data. We break down the trade-offs in plain language so you can make the right call for your use case.",
    category: "Technical",
    readTime: "9 min read",
    date: "May 6, 2026",
  },
]

const categories = ["All", "Real Estate", "Healthcare", "Customer Support", "Strategy", "Document Automation", "Technical"]

export default function BlogPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <section className="container py-24 md:py-32 px-4 md:px-8 max-w-screen-xl border-b">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Blog</p>
          <h1 className="font-bold text-5xl sm:text-6xl leading-[0.92] mb-6">
            AI automation, explained plainly.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Practical guides and case studies for business leaders who want to understand — and act on — the AI automation opportunity.
          </p>
        </div>
      </section>

      {/* Category Filter — visual only for now */}
      <section className="border-b py-5">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-xs px-4 py-2 rounded-full border border-border transition-colors ${cat === "All" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground hover:border-foreground"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="border-b py-16">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <Link href={`/blog/${posts[0].slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-[16/9] rounded-xl bg-secondary border border-border flex items-center justify-center">
              <p className="text-xs text-muted-foreground tracking-widest uppercase">Featured Article</p>
            </div>
            <div>
              <span className="inline-block text-xs border border-border rounded-full px-3 py-1 text-muted-foreground mb-4">{posts[0].category}</span>
              <h2 className="text-3xl font-bold mb-4 group-hover:underline underline-offset-4 leading-tight">{posts[0].title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{posts[0].date}</span>
                <span>·</span>
                <span>{posts[0].readTime}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-border rounded-xl p-6 bg-card hover:border-foreground transition-colors flex flex-col"
              >
                <span className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground mb-4 w-fit">{post.category}</span>
                <h3 className="font-bold text-lg mb-3 leading-snug group-hover:underline underline-offset-4 flex-1">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
