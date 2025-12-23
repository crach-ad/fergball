"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar as CalendarIcon, Clock, Video, CheckCircle } from "lucide-react"
import { format, addDays } from "date-fns"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "@/components/dashboard/header"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM"
]

// Mock upcoming calls
const upcomingCalls = [
  {
    id: 1,
    title: "Weekly Progress Review",
    date: addDays(new Date(), 3),
    time: "2:00 PM",
    status: "confirmed",
  },
  {
    id: 2,
    title: "Pitching Mechanics Analysis",
    date: addDays(new Date(), 7),
    time: "10:00 AM",
    status: "confirmed",
  },
]

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <>
      <DashboardHeader title="Schedule Call" />
      <main className="flex-1 p-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Upcoming Calls */}
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold mb-4">Upcoming Calls</h2>
            {upcomingCalls.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {upcomingCalls.map((call) => (
                  <Card key={call.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{call.title}</CardTitle>
                        <Badge variant="secondary">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Confirmed
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          {format(call.date, "MMM d, yyyy")}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {call.time}
                        </div>
                      </div>
                      <Button variant="outline" className="mt-4 w-full" size="sm">
                        <Video className="mr-2 h-4 w-4" />
                        Join Call (link will be sent via email)
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-8 text-center">
                  <p className="text-muted-foreground">No upcoming calls scheduled</p>
                </CardContent>
              </Card>
            )}
          </motion.div>

          {/* Schedule New Call */}
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold mb-4">Schedule a New Call</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Select Date</CardTitle>
                  <CardDescription>Choose an available date for your call</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Select Time</CardTitle>
                  <CardDescription>
                    {selectedDate
                      ? `Available times for ${format(selectedDate, "MMMM d, yyyy")}`
                      : "Select a date first"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="text-xs"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="h-48 flex items-center justify-center text-muted-foreground">
                      Select a date to see available times
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {selectedDate && selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4"
              >
                <Card className="bg-primary/5">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Selected: {format(selectedDate, "MMMM d, yyyy")} at {selectedTime}</p>
                        <p className="text-sm text-muted-foreground">30-minute coaching call</p>
                      </div>
                      <Button>Confirm Booking</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}
