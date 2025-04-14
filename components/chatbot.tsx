"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, X, Send, Minimize2, Maximize2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

// Predefined responses for offline mode
const offlineResponses: Record<string, string> = {
  default:
    "I'm here to help you learn about BotScribe's AI services. Would you like to know more about our solutions or schedule a call with our team?",
  greeting: "Hello! I'm BotScribe's AI assistant. How can I help you today?",
  schedule:
    "I'd be happy to help you schedule a demo. Please email us at ihamzakhan89@gmail.com or call us at +91 9136719552 to set up a time that works for you.",
  services:
    "BotScribe offers AI Voice Agents, Intelligent Chatbots, Document Generation, Intelligent OCR, RAG, AI-driven Leads Generation, Web Scraping, Social Media Agents, Custom Agents, and Web & App Development.",
  contact:
    "You can reach our team at ihamzakhan89@gmail.com or sondeadeeb@gmail.com, or call us at +91 9136719552 or +91 9867273743.",
  pricing:
    "Our pricing is customized based on your specific needs and requirements. Please schedule a call with our team to discuss a solution that fits your budget.",
  about:
    "BotScribe is an AI solutions company founded by Hamza Khan and Adeeb Sonde. We specialize in creating custom AI solutions for businesses of all sizes.",
}

// Scheduling states
type SchedulingState = "initial" | "name" | "email" | "date" | "time" | "phone" | "confirm" | "complete"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hi there! I'm the BotScribe assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [schedulingState, setSchedulingState] = useState<SchedulingState>("initial")
  const [scheduleInfo, setScheduleInfo] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    phone: "",
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Persist chat history in localStorage
  useEffect(() => {
    // Only save messages if there's more than the initial greeting
    if (messages.length > 1) {
      localStorage.setItem("botscribe-chat-history", JSON.stringify(messages))
    }
  }, [messages])

  // Load chat history from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("botscribe-chat-history")
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages)
        if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
          setMessages(parsedMessages)
        }
      } catch (error) {
        console.error("Error parsing saved chat history:", error)
      }
    }

    // Try to load user info from localStorage
    const savedEmail = localStorage.getItem("botscribe-user-email")
    if (savedEmail) {
      setUserEmail(savedEmail)
    }

    const savedName = localStorage.getItem("botscribe-user-name")
    if (savedName) {
      setUserName(savedName)
    }
  }, [])

  // Get a fallback response based on user input
  const getFallbackResponse = (userInput: string) => {
    const input = userInput.toLowerCase()

    if (
      input.includes("schedule") ||
      input.includes("book") ||
      input.includes("demo") ||
      input.includes("appointment") ||
      input.includes("call") ||
      input.includes("meeting")
    ) {
      return offlineResponses.schedule
    } else if (input.includes("service") || input.includes("offer") || input.includes("solution")) {
      return offlineResponses.services
    } else if (input.includes("contact") || input.includes("email") || input.includes("phone")) {
      return offlineResponses.contact
    } else if (input.includes("price") || input.includes("cost") || input.includes("fee")) {
      return offlineResponses.pricing
    } else if (input.includes("about") || input.includes("company") || input.includes("who")) {
      return offlineResponses.about
    } else if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
      return offlineResponses.greeting
    } else {
      return offlineResponses.default
    }
  }

  // Handle scheduling process
  const handleSchedulingProcess = () => {
    if (schedulingState === "name") {
      if (!input.trim()) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "I need your name to schedule a meeting. What's your name?" },
        ])
        return true
      }

      setUserName(input)
      localStorage.setItem("botscribe-user-name", input)
      setScheduleInfo((prev) => ({ ...prev, name: input }))

      setMessages((prev) => [
        ...prev,
        { role: "user", content: input },
        {
          role: "assistant",
          content: `Thanks, ${input}! Now, I need your email address to send you a confirmation.`,
        },
      ])

      setSchedulingState("email")
      setInput("")
      return true
    }

    if (schedulingState === "email") {
      if (!input.trim() || !input.includes("@")) {
        setMessages((prev) => [...prev, { role: "assistant", content: "Please provide a valid email address." }])
        return true
      }

      setUserEmail(input)
      localStorage.setItem("botscribe-user-email", input)
      setScheduleInfo((prev) => ({ ...prev, email: input }))

      setMessages((prev) => [
        ...prev,
        { role: "user", content: input },
        {
          role: "assistant",
          content: "Great! What date would you prefer for the meeting? (Please use YYYY-MM-DD format)",
        },
      ])

      setSchedulingState("date")
      setInput("")
      return true
    }

    if (schedulingState === "date") {
      // Simple date validation
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/
      if (!dateRegex.test(input)) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Please provide a valid date in YYYY-MM-DD format (e.g., 2023-12-25)." },
        ])
        return true
      }

      setScheduleInfo((prev) => ({ ...prev, date: input }))

      setMessages((prev) => [
        ...prev,
        { role: "user", content: input },
        {
          role: "assistant",
          content: "What time would you prefer? (Please use HH:MM format, e.g., 14:30 for 2:30 PM)",
        },
      ])

      setSchedulingState("time")
      setInput("")
      return true
    }

    if (schedulingState === "time") {
      // Simple time validation
      const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
      if (!timeRegex.test(input)) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Please provide a valid time in HH:MM format (e.g., 14:30 for 2:30 PM)." },
        ])
        return true
      }

      setScheduleInfo((prev) => ({ ...prev, time: input }))

      setMessages((prev) => [
        ...prev,
        { role: "user", content: input },
        {
          role: "assistant",
          content: "Could you provide a phone number? (Optional, you can type 'skip' to continue)",
        },
      ])

      setSchedulingState("phone")
      setInput("")
      return true
    }

    if (schedulingState === "phone") {
      const phone = input.toLowerCase() === "skip" ? "" : input
      setScheduleInfo((prev) => ({ ...prev, phone }))

      const confirmationMessage = `
        Please confirm these details:
        - Name: ${scheduleInfo.name}
        - Email: ${scheduleInfo.email}
        - Date: ${scheduleInfo.date}
        - Time: ${scheduleInfo.time}
        - Phone: ${phone || "Not provided"}
        
        Type 'confirm' to schedule the meeting or 'cancel' to start over.
      `

      setMessages((prev) => [
        ...prev,
        { role: "user", content: input },
        { role: "assistant", content: confirmationMessage },
      ])

      setSchedulingState("confirm")
      setInput("")
      return true
    }

    if (schedulingState === "confirm") {
      if (input.toLowerCase() === "confirm") {
        setIsLoading(true)

        // Submit the scheduling info
        fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [],
            userEmail: scheduleInfo.email,
            userName: scheduleInfo.name,
            scheduleInfo: {
              name: scheduleInfo.name,
              email: scheduleInfo.email,
              date: scheduleInfo.date,
              time: scheduleInfo.time,
              phone: scheduleInfo.phone,
            },
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              setMessages((prev) => [
                ...prev,
                { role: "user", content: "confirm" },
                {
                  role: "assistant",
                  content:
                    "Great! Your meeting has been scheduled. We've sent a confirmation email with all the details.",
                },
              ])
            } else {
              setMessages((prev) => [
                ...prev,
                { role: "user", content: "confirm" },
                {
                  role: "assistant",
                  content:
                    "I couldn't schedule your meeting due to a technical issue. Please try using our scheduling form on the contact page or email us directly at ihamzakhan89@gmail.com.",
                },
              ])
            }
          })
          .catch((error) => {
            console.error("Error scheduling meeting:", error)
            setMessages((prev) => [
              ...prev,
              { role: "user", content: "confirm" },
              {
                role: "assistant",
                content:
                  "I couldn't schedule your meeting due to a technical issue. Please try using our scheduling form on the contact page or email us directly at ihamzakhan89@gmail.com.",
              },
            ])
          })
          .finally(() => {
            setIsLoading(false)
            setSchedulingState("initial")
          })
      } else if (input.toLowerCase() === "cancel") {
        setMessages((prev) => [
          ...prev,
          { role: "user", content: "cancel" },
          { role: "assistant", content: "No problem! I've cancelled the scheduling process. How else can I help you?" },
        ])
        setSchedulingState("initial")
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "user", content: input },
          {
            role: "assistant",
            content: "Please type 'confirm' to schedule the meeting or 'cancel' to start over.",
          },
        ])
      }

      setInput("")
      return true
    }

    return false
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Check if we're in the middle of scheduling
    if (schedulingState !== "initial") {
      if (handleSchedulingProcess()) {
        return
      }
    }

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    const userInput = input
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          userEmail,
          userName,
        }),
      })

      // Check if response is ok
      if (!response.ok) {
        console.error(`Server responded with status: ${response.status}`)
        throw new Error(`Server responded with status: ${response.status}`)
      }

      // Try to parse the response as JSON
      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError)
        throw new Error("Invalid response format from server")
      }

      if (data.success) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }])

        // If this is a scheduling request and we don't have the user's info yet
        if (data.isSchedulingRequest && (!userEmail || !userName)) {
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                role: "assistant",
                content: "I can help you schedule a meeting. What's your name?",
              },
            ])
            setSchedulingState("name")
          }, 1000)
        }
      } else {
        throw new Error(data.message || "Unknown error")
      }
    } catch (error) {
      console.error("Error in chat request:", error)

      // Add a fallback response
      const fallbackResponse = getFallbackResponse(userInput)
      setMessages((prev) => [...prev, { role: "assistant", content: fallbackResponse }])

      // Check if this is a scheduling request
      if (
        userInput.toLowerCase().includes("schedule") ||
        userInput.toLowerCase().includes("book") ||
        userInput.toLowerCase().includes("demo") ||
        userInput.toLowerCase().includes("call")
      ) {
        if (!userEmail || !userName) {
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                role: "assistant",
                content: "I can help you schedule a meeting. What's your name?",
              },
            ])
            setSchedulingState("name")
          }, 1000)
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  const resetChat = () => {
    setMessages([{ role: "assistant", content: "Hi there! I'm the BotScribe assistant. How can I help you today?" }])
    setSchedulingState("initial")
    localStorage.removeItem("botscribe-chat-history")
    // Don't reset the user info as we might need it for future conversations
  }

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg">
        <Bot className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 bg-background border rounded-lg shadow-lg transition-all duration-300 w-80 md:w-96 overflow-hidden",
        isMinimized ? "h-14" : "h-[500px]",
      )}
    >
      <div className="flex items-center justify-between p-3 border-b bg-primary/5">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <span className="font-medium">BotScribe Assistant</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={resetChat} title="Reset conversation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
            </svg>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsMinimized(!isMinimized)}>
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="p-4 h-[calc(500px-120px)] overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "mb-4 max-w-[80%] p-3 rounded-lg",
                  message.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted",
                )}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center justify-center p-2">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}
