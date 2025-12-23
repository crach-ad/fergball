"use client"

import { motion } from "framer-motion"
import { Video, Upload, MessageSquare, Clock, CheckCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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

// Mock video data
const videos = [
  {
    id: 1,
    title: "Fastball mechanics - Session 3",
    description: "Working on hip rotation and arm slot",
    date: "Dec 20, 2024",
    status: "reviewed",
    feedback: "Great improvement on the hip rotation! Focus on keeping your elbow up through release.",
    thumbnail: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Curveball grip adjustments",
    description: "Trying the new grip you suggested",
    date: "Dec 15, 2024",
    status: "reviewed",
    feedback: "The grip looks much better. Work on staying on top of the ball longer.",
    thumbnail: "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Bullpen session - Full workout",
    description: "20 pitch bullpen, all pitches",
    date: "Dec 22, 2024",
    status: "pending",
    feedback: null,
    thumbnail: "/placeholder.jpg",
  },
]

export default function VideosPage() {
  return (
    <>
      <DashboardHeader title="My Videos" />
      <main className="flex-1 p-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Upload Section */}
          <motion.div variants={item}>
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Upload New Video</h3>
                <p className="text-muted-foreground text-center mb-4 max-w-sm">
                  Submit your training videos for coach review and feedback
                </p>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Video
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Video upload coming soon - for now, share via Google Drive or YouTube link
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Videos List */}
          <motion.div variants={item}>
            <h2 className="text-lg font-semibold mb-4">Your Videos</h2>
            <div className="space-y-4">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-32 md:h-auto bg-muted flex items-center justify-center">
                      <Video className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{video.title}</h3>
                          <p className="text-sm text-muted-foreground">{video.description}</p>
                        </div>
                        <Badge variant={video.status === "reviewed" ? "default" : "secondary"}>
                          {video.status === "reviewed" ? (
                            <>
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Reviewed
                            </>
                          ) : (
                            <>
                              <Clock className="mr-1 h-3 w-3" />
                              Pending Review
                            </>
                          )}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">Uploaded {video.date}</p>

                      {video.feedback && (
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <MessageSquare className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">Coach Feedback</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{video.feedback}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}
