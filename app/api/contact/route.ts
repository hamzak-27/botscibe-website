import { NextResponse } from "next/server"

// URL to your Python email service
const EMAIL_SERVICE_URL = process.env.EMAIL_SERVICE_URL || "http://localhost:5000"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, subject, message } = data

    // Validate the request data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Forward the request to the Python email service
    const response = await fetch(`${EMAIL_SERVICE_URL}/send-contact-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error("Email service error:", result)
      return NextResponse.json(
        { success: false, message: "Failed to send message. Please try again or contact us directly." },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again or contact us directly." },
      { status: 500 },
    )
  }
}
