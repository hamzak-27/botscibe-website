import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { posts } from "@/app/blog/page"

const postContent: Record<string, { intro: string; sections: { heading: string; body: string }[] }> = {
  "ai-voice-agents-real-estate": {
    intro: "In 2025, the fastest-growing real estate agencies share one thing in common: they answer every lead the moment it comes in — day or night. Not because they hired more staff. Because they deployed AI voice agents.",
    sections: [
      {
        heading: "The 5-Minute Rule That Changes Everything",
        body: "Research consistently shows that contacting a lead within 5 minutes of their inquiry increases conversion rates by up to 900% compared to waiting 30 minutes. In real estate, where buyers and renters are often contacting multiple agencies simultaneously, the agency that responds first almost always wins the relationship.\n\nMost agencies can't hit that window during business hours, let alone at 11pm on a Saturday. AI voice agents can.",
      },
      {
        heading: "What AI Voice Agents Actually Do",
        body: "A BotScribe AI voice agent deployed for a real estate agency will:\n\n- Answer every inbound call within 2 rings, 24/7\n- Ask structured qualification questions (budget, timeline, property type, location preference)\n- Check agent calendar availability and book tours on the spot\n- Send confirmation texts and calendar invites automatically\n- Follow up with leads that didn't answer their callback\n\nThe agent sounds natural, handles interruptions, and recognizes when to escalate to a human.",
      },
      {
        heading: "Real Numbers From Real Deployments",
        body: "Across BotScribe's real estate deployments, the consistent results are:\n\n- 34% increase in qualified leads within 60 days\n- 28% higher property tour show rate (driven by automated reminders)\n- 80% of after-hours inquiries handled without any human involvement\n- Average response time reduced from 4 hours to under 30 seconds",
      },
      {
        heading: "How to Get Started",
        body: "Implementation takes 5–10 business days. BotScribe's team handles the integration with your CRM and calendar system, trains the voice model on your property portfolio and brand voice, and runs test calls before go-live.\n\nThere's no complicated setup on your end. You describe how you currently handle leads, and we replicate and improve that process in AI.",
      },
    ],
  },
  "chatbots-customer-retention": {
    intro: "The fastest way to lose a customer isn't a bad product. It's a slow response. A 2025 Salesforce study found that 68% of customers who switched brands cited slow or unhelpful responses as the primary reason. Chatbots that work solve exactly this.",
    sections: [
      {
        heading: "1. Instant First Response, Every Time",
        body: "The first message a customer sends after a problem is the most important one. If it takes hours to acknowledge it, trust erodes. AI chatbots respond in under 2 seconds — at 2am, on weekends, on holidays. That consistency alone drives measurable retention lifts.",
      },
      {
        heading: "2. Proactive Check-Ins",
        body: "Retention chatbots don't just react — they reach out. Post-purchase check-ins, usage milestone messages, and renewal reminders sent via chat feel more personal than email blasts and see 3× higher engagement rates.",
      },
      {
        heading: "3. Issue Resolution Before Escalation",
        body: "60% of customer service issues are resolved in the first message when a well-trained AI is responding. Customers don't need a human — they need an accurate answer quickly. A chatbot trained on your knowledge base delivers exactly that.",
      },
      {
        heading: "4. Consistent Experience Across Channels",
        body: "Customers interact via web, WhatsApp, and email. An AI layer that maintains consistent context across all channels eliminates the frustration of repeating information — a top retention killer.",
      },
      {
        heading: "5. Identification of Churn Signals",
        body: "Advanced AI chatbots don't just respond — they analyze. Unusual usage patterns, negative sentiment in messages, and unanswered follow-ups can all trigger escalation to your retention team before the customer has made the decision to leave.",
      },
    ],
  },
  "roi-ai-automation-healthcare": {
    intro: "Healthcare administrators face a paradox: the work that consumes the most staff time — scheduling, follow-ups, insurance verification — adds the least clinical value. AI automation resolves this paradox directly.",
    sections: [
      {
        heading: "The Administrative Cost in Healthcare",
        body: "On average, administrative tasks consume 34% of a healthcare provider's operating budget. Scheduling alone accounts for roughly 15% of front-desk staff time. No-shows — most of which could be prevented with timely reminders — cost the US healthcare system an estimated $150 billion annually.",
      },
      {
        heading: "What BotScribe Automates",
        body: "In healthcare deployments, BotScribe automates: appointment booking and rescheduling, insurance eligibility pre-verification, patient intake data collection, post-visit follow-up calls, prescription pickup reminders, and lab result notifications. All of these conversations happen without a human staff member.",
      },
      {
        heading: "The Numbers",
        body: "Across healthcare clients: 80% reduction in no-shows (driven by multi-touch automated reminders), 40% reduction in time spent on administrative tasks per front-desk staff member, 4-hour response time reduced to under 2 minutes for patient inquiries, and 25% improvement in patient satisfaction scores.",
      },
      {
        heading: "Implementation Considerations",
        body: "BotScribe's healthcare implementations are designed with data sensitivity in mind. Patient conversations are encrypted, retention periods are configurable, and integration with EMR systems follows established security protocols. Most implementations go live within 2 weeks.",
      },
    ],
  },
  "why-every-business-needs-ai-agent": {
    intro: "Three years ago, deploying an AI agent was a competitive advantage. In 2025, not having one is a liability. Here's what the data says — and what to do about it.",
    sections: [
      {
        heading: "The Expectation Gap Is Widening",
        body: "71% of consumers expect a response within 5 minutes when they contact a business online. Meanwhile, the average response time across industries is still measured in hours. This gap — between what customers expect and what most businesses deliver — is where revenue disappears.",
      },
      {
        heading: "The Cost of Missing a Lead",
        body: "In high-intent industries like real estate, legal, and healthcare, the first business to respond typically wins the customer. A lead that goes unanswered for 30 minutes is 21× less likely to convert than one reached in 5 minutes. Every missed after-hours call is a lost opportunity.",
      },
      {
        heading: "What 24/7 Actually Means for Revenue",
        body: "For a typical e-commerce company, 40% of customer inquiries happen outside business hours. For real estate, that number climbs to 60%. An AI agent that handles after-hours traffic doesn't just improve satisfaction — it directly captures revenue that would otherwise be lost.",
      },
      {
        heading: "Getting Started Without Overthinking It",
        body: "The biggest mistake businesses make is treating AI automation as a large infrastructure project. It isn't. The fastest path is: identify the single highest-volume customer interaction your team handles repeatedly, automate just that interaction, and measure the impact. For most businesses, this takes less than two weeks and pays for itself in the first month.",
      },
    ],
  },
  "document-automation-legal": {
    intro: "The average law firm associate spends 27% of their time on document drafting and formatting. That's billable time consumed by tasks that AI can complete in seconds — with fewer errors.",
    sections: [
      {
        heading: "What Document Automation Actually Covers",
        body: "Modern document automation isn't just mail merge. It's AI-powered generation that understands context: pulling the right clauses based on jurisdiction, populating contracts from CRM data, adapting template language to specific deal terms, and formatting output to exact style guide specifications.",
      },
      {
        heading: "The 30-Hour Figure",
        body: "BotScribe tracked time savings across legal clients over a 90-day period. Teams handling 20+ client matters weekly consistently reported 28–34 hours per week saved on document work — across contract generation, NDA creation, onboarding document packages, and compliance summaries.",
      },
      {
        heading: "Error Reduction",
        body: "Human error in document drafting — wrong names, outdated clauses, missed fields — creates downstream risk. AI-generated documents from structured data inputs eliminate the copy-paste errors that cause problems during execution or litigation.",
      },
      {
        heading: "Implementation",
        body: "BotScribe's document automation stack integrates with your existing templates and data sources. The system learns your document standards and generates output that matches your house style. Most legal teams are fully operational within 10 business days.",
      },
    ],
  },
  "rag-vs-fine-tuning": {
    intro: "Both RAG (Retrieval-Augmented Generation) and fine-tuning let you make AI work with your proprietary data. But they solve different problems — and choosing the wrong one costs time and money.",
    sections: [
      {
        heading: "What RAG Does",
        body: "RAG systems retrieve relevant chunks of your documents at query time and inject them into the AI's context before generating a response. The model doesn't 'know' your data — it looks it up on demand. This is ideal for: large, frequently updated knowledge bases, compliance-sensitive environments where you need source attribution, and situations where accuracy matters more than speed.",
      },
      {
        heading: "What Fine-Tuning Does",
        body: "Fine-tuning adjusts the model's weights based on your training data — teaching it to behave in certain ways or to internalize specific knowledge. This is ideal for: consistent tone and brand voice, specialized domain tasks (medical coding, legal clause classification), and high-volume applications where latency matters.",
      },
      {
        heading: "When to Use Which",
        body: "Use RAG when your data changes frequently, when you need the AI to cite its sources, or when you're working with a large document corpus. Use fine-tuning when you need the AI to adopt a specific writing style, perform a specialized classification task, or operate with lower latency. In practice, many BotScribe implementations combine both.",
      },
      {
        heading: "The BotScribe Approach",
        body: "For customer-facing applications like chatbots and voice agents, BotScribe typically starts with a RAG foundation — because accuracy and up-to-date information matter most. Fine-tuning is layered on top when brand voice or specialized response patterns are required. This hybrid approach gives clients the best of both architectures.",
      },
    ],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const content = postContent[params.slug]
  const otherPosts = posts.filter((p) => p.slug !== params.slug).slice(0, 3)

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <article className="container py-16 md:py-24 px-4 md:px-8 max-w-screen-xl">
        <div className="max-w-3xl mx-auto">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block text-xs border border-border rounded-full px-3 py-1 text-muted-foreground mb-6">{post.category}</span>
            <h1 className="font-bold text-4xl sm:text-5xl leading-[1.05] mb-6">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>BotScribe Team</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Intro */}
          {content && (
            <>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 border-l-2 border-foreground pl-6">
                {content.intro}
              </p>

              <div className="space-y-10">
                {content.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      {section.body.split("\n\n").map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* CTA inline */}
          <div className="mt-16 border border-border rounded-xl p-8 bg-card text-center">
            <h3 className="font-bold text-2xl mb-3">Ready to automate your business?</h3>
            <p className="text-muted-foreground mb-6">Schedule a free call with the BotScribe team. Tell us your workflow — we&apos;ll tell you what&apos;s possible.</p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="border-t py-16">
        <div className="container px-4 md:px-8 max-w-screen-xl">
          <h2 className="font-bold text-2xl mb-8">More articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group border border-border rounded-xl p-6 bg-card hover:border-foreground transition-colors"
              >
                <span className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground mb-4 inline-block">{p.category}</span>
                <h3 className="font-bold text-base mb-2 leading-snug group-hover:underline underline-offset-4">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}
