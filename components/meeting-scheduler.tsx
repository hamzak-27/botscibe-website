"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Clock, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function MeetingScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h")
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const times = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

  const formatTime = (time: string) => {
    if (timeFormat === "12h") {
      const [hours, minutes] = time.split(":")
      const hour = Number.parseInt(hours)
      const ampm = hour >= 12 ? "PM" : "AM"
      const hour12 = hour % 12 || 12
      return `${hour12}:${minutes} ${ampm}`
    }
    return time
  }

  const currentMonth = date ? new Date(date).toLocaleString("default", { month: "long" }) : ""
  const currentYear = date ? new Date(date).getFullYear() : ""

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const handlePrevMonth = () => {
    if (date) {
      const newDate = new Date(date)
      newDate.setMonth(newDate.getMonth() - 1)
      setDate(newDate)
    }
  }

  const handleNextMonth = () => {
    if (date) {
      const newDate = new Date(date)
      newDate.setMonth(newDate.getMonth() + 1)
      setDate(newDate)
    }
  }

  const handleScheduleMeeting = async () => {
    if (!date || !selectedTime || !name || !email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          date: date.toISOString(),
          time: selectedTime,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Meeting scheduled!",
          description: data.message || "We'll send you a confirmation shortly.",
        })
        // Reset form
        setName("")
        setEmail("")
        setPhone("")
        setSelectedTime(null)
      } else {
        toast({
          title: "Something went wrong",
          description: data.message || "Failed to schedule meeting. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to schedule meeting. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calendar rendering
  const renderCalendar = () => {
    if (!date) return null

    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-9 w-9"></div>)
    }

    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(year, month, i)
      const isSelected =
        date &&
        dayDate.getDate() === date.getDate() &&
        dayDate.getMonth() === date.getMonth() &&
        dayDate.getFullYear() === date.getFullYear()

      days.push(
        <Button
          key={`day-${i}`}
          variant="ghost"
          className={cn("h-9 w-9 p-0 font-normal", isSelected && "bg-primary text-primary-foreground")}
          onClick={() => {
            const newDate = new Date(date)
            newDate.setDate(i)
            setDate(newDate)
          }}
        >
          {i}
        </Button>,
      )
    }

    return days
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Schedule a Meeting</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Book a call with our team to discuss how we can help transform your ideas into reality. We're here to listen,
        understand, and provide solutions.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border rounded-lg overflow-hidden shadow-md">
        <div className="bg-primary/5 p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Discovery Call</h3>
              <p className="text-sm text-muted-foreground">30 Min Meeting</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Help us understand your need and come up with a plan on how we can approach it keeping both quality and cost
            of the solution at forefront.
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name *
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone (optional)
              </label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number"
              />
            </div>
          </div>
        </div>

        <div className="p-6 border-r">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">
              {currentMonth} {currentYear}
            </h3>
            <div className="flex gap-1">
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={handlePrevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleNextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <div key={day} className="py-1">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">{renderCalendar()}</div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">
              {date ? date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" }) : "Select a date"}
            </h3>
            <div className="flex gap-1">
              <Button
                variant={timeFormat === "12h" ? "secondary" : "outline"}
                size="sm"
                className="text-xs"
                onClick={() => setTimeFormat("12h")}
              >
                12h
              </Button>
              <Button
                variant={timeFormat === "24h" ? "secondary" : "outline"}
                size="sm"
                className="text-xs"
                onClick={() => setTimeFormat("24h")}
              >
                24h
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {times.map((time) => (
              <Button
                key={time}
                variant="outline"
                className={cn("justify-center", selectedTime === time && "border-primary bg-primary/10")}
                onClick={() => setSelectedTime(time)}
              >
                {formatTime(time)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button
          size="lg"
          disabled={!date || !selectedTime || !name || !email || isSubmitting}
          onClick={handleScheduleMeeting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Scheduling...
            </>
          ) : (
            "Confirm Meeting"
          )}
        </Button>
      </div>
    </div>
  )
}
