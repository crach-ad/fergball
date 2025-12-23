"use client"

import { motion } from "framer-motion"
import { Video, Calendar, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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

const quickActions = [
  {
    title: "Upload Video",
    description: "Submit a new video for coach review",
    icon: Video,
    href: "/dashboard/videos",
    color: "bg-blue-500",
  },
  {
    title: "Schedule Call",
    description: "Book a coaching session",
    icon: Calendar,
    href: "/dashboard/schedule",
    color: "bg-green-500",
  },
  {
    title: "Resources",
    description: "Access training materials",
    icon: BookOpen,
    href: "/dashboard/resources",
    color: "bg-purple-500",
  },
]

// Mock data for the dashboard
const recentActivity = [
  { type: "video", title: "Fastball mechanics - Session 3", date: "2 days ago", status: "Reviewed" },
  { type: "call", title: "Weekly check-in with Coach", date: "5 days ago", status: "Completed" },
  { type: "video", title: "Curveball grip adjustments", date: "1 week ago", status: "Reviewed" },
]

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader title="Dashboard" />
      <main className="flex-1 p-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Welcome Section */}
          <motion.div variants={item}>
            <Card className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-red-600/10 border-none">
              <CardHeader>
                <CardTitle className="text-2xl">Welcome to Velp Camp</CardTitle>
                <CardDescription className="text-base">
                  Track your progress, upload videos, and access exclusive training resources.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {quickActions.map((action) => (
                <Card key={action.href} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mb-2`}>
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={action.href}>Go to {action.title}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Videos Submitted</CardDescription>
                  <CardTitle className="text-3xl">12</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Coach Sessions</CardDescription>
                  <CardTitle className="text-3xl">8</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Resources Viewed</CardDescription>
                  <CardTitle className="text-3xl">24</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Feedback Received</CardDescription>
                  <CardTitle className="text-3xl">10</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.type === "video" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                        }`}>
                          {activity.type === "video" ? <Video className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.status}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}
