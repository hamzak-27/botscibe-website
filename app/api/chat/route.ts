import { NextResponse } from "next/server"
import OpenAI from "openai"

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// URL to your Python email service
const EMAIL_SERVICE_URL = process.env.EMAIL_SERVICE_URL || "http://localhost:5000"

// System prompt for the chatbot
const SYSTEM_PROMPT = `You are BotScribe's AI assistant. Be helpful, professional, and concise.
Your primary goal is to assist users with information about BotScribe's AI services and 
encourage them to schedule a call with the team for detailed discussions.

BotScribe offers: AI Voice Agents, Intelligent Chatbots, Document Generation, Intelligent OCR, 
Retrieval-Augmented Generation (RAG), AI-driven Leads Generation, Intelligent Web Scraping, 
Social Media Agent, Custom Agents, and Web & App Development.

Contact email: hello@botscribe.info
Phone: +91 9136719552 and +91 9867273743
Office: Mumbai, India
Business Hours: 24/7

If a user wants to schedule a meeting or book a call, ask for their name, email, preferred date, and time.
Then help them submit this information to schedule the meeting.`

// Fallback responses for when OpenAI is unavailable
const fallbackResponses: Record<string, string> = {
  default:
    "I'm here to help you learn about BotScribe's AI services. Would you like to know more about our solutions or schedule a call with our team?",
  greeting: "Hello! I'm BotScribe's AI assistant. How can I help you today?",
  schedule:
    "I'd be happy to help you schedule a demo. Please email us at hello@botscribe.info or call us at +91 9136719552 to set up a time that works for you.",
  services:
    "BotScribe offers AI Voice Agents, Intelligent Chatbots, Document Generation, Intelligent OCR, RAG, AI-driven Leads Generation, Web Scraping, Social Media Agents, Custom Agents, and Web & App Development.",
  contact: "You can reach our team at hello@botscribe.info, or call us at +91 9136719552 or +91 9867273743.",
  pricing:
    "Our pricing is customized based on your specific needs and requirements. Please schedule a call with our team to discuss a solution that fits your budget.",
  about:
    "BotScribe is an AI solutions company founded by Hamza Khan and Adeeb Sonde. We specialize in creating custom AI solutions for businesses of all sizes.",
}

// Function to detect if this is a scheduling request
function isSchedulingRequest(query: string): boolean {
  const schedulingKeywords = ["schedule", "book", "appointment", "meeting", "call", "demo", "talk", "discuss"]
  return schedulingKeywords.some((keyword) => query.toLowerCase().includes(keyword))
}

// Function to get a fallback response
function getFallbackResponse(query: string): { message: string; isSchedulingRequest: boolean } {
  const lowerQuery = query.toLowerCase()

  if (isSchedulingRequest(lowerQuery)) {
    return { message: fallbackResponses.schedule, isSchedulingRequest: true }
  }

  if (lowerQuery.includes("hi") || lowerQuery.includes("hello") || lowerQuery.includes("hey")) {
    return { message: fallbackResponses.greeting, isSchedulingRequest: false }
  }

  if (lowerQuery.includes("service") || lowerQuery.includes("offer") || lowerQuery.includes("solution")) {
    return { message: fallbackResponses.services, isSchedulingRequest: false }
  }

  if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("phone")) {
    return { message: fallbackResponses.contact, isSchedulingRequest: false }
  }

  if (lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("fee")) {
    return { message: fallbackResponses.pricing, isSchedulingRequest: false }
  }

  if (lowerQuery.includes("about") || lowerQuery.includes("company") || lowerQuery.includes("who")) {
    return { message: fallbackResponses.about, isSchedulingRequest: false }
  }

  return { message: fallbackResponses.default, isSchedulingRequest: false }
}

// Function to schedule a meeting via the chatbot
async function scheduleViaChat(name: string, email: string, date: string, time: string, phone = "") {
  try {
    // Forward the request to the Python email service
    const response = await fetch(`${EMAIL_SERVICE_URL}/send-schedule-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, date, time, phone }),
    })

    const result = await response.json()
    return result.success
  } catch (error) {
    console.error("Error scheduling via chat:", error)
    return false
  }
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { messages, userEmail, userName, scheduleInfo } = body

    // Handle direct scheduling request if all info is provided
    if (scheduleInfo && scheduleInfo.name && scheduleInfo.email && scheduleInfo.date && scheduleInfo.time) {
      const scheduled = await scheduleViaChat(
        scheduleInfo.name,
        scheduleInfo.email,
        scheduleInfo.date,
        scheduleInfo.time,
        scheduleInfo.phone || "",
      )

      return NextResponse.json({
        success: true,
        message: scheduled
          ? "Great! Your meeting has been scheduled. We've sent a confirmation email with all the details."
          : "I couldn't schedule your meeting due to a technical issue. Please try using our scheduling form on the contact page or email us directly at hello@botscribe.info.",
        isSchedulingRequest: false,
      })
    }

    // Validate messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ success: false, message: "No valid messages provided" }, { status: 400 })
    }

    // Get the last user message
    const lastUserMessage = messages.filter((msg: any) => msg.role === "user").pop()?.content || ""

    // Check if this is a scheduling request
    const schedulingRequest = isSchedulingRequest(lastUserMessage)

    try {
      // Format messages for OpenAI
      const formattedMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
        })),
      ]

      // Call OpenAI API
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 500,
      })

      const aiResponse = completion.choices[0].message.content || "I couldn't generate a response."

      return NextResponse.json({
        success: true,
        message: aiResponse,
        isSchedulingRequest: schedulingRequest,
      })
    } catch (aiError) {
      console.error("OpenAI API error:", aiError)

      // Use fallback responses if OpenAI fails
      const { message, isSchedulingRequest } = getFallbackResponse(lastUserMessage)

      return NextResponse.json({
        success: true,
        message,
        isSchedulingRequest,
      })
    }
  } catch (error) {
    console.error("Unhandled error in chat API:", error)
    return NextResponse.json(
      {
        success: false,
        message:
          "I'm having trouble connecting right now. Please try again or contact our team directly at hello@botscribe.info.",
      },
      { status: 200 }, // Return 200 even for errors to avoid client-side parsing issues
    )
  }
}
