"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Video, Link as LinkIcon, ExternalLink, Search, Play } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard/header"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

// Mock resources data
const resources = [
  {
    id: 1,
    title: "Pitching Mechanics Fundamentals",
    description: "Complete guide to proper pitching mechanics and arm care",
    type: "VIDEO",
    category: "Mechanics",
    duration: "45 min",
  },
  {
    id: 2,
    title: "Velocity Training Program",
    description: "12-week program designed to increase pitching velocity",
    type: "PDF",
    category: "Training",
    pages: 24,
  },
  {
    id: 3,
    title: "Mental Game Mastery",
    description: "Techniques for focus, confidence, and performance under pressure",
    type: "VIDEO",
    category: "Mental",
    duration: "30 min",
  },
  {
    id: 4,
    title: "Arm Care Routine",
    description: "Daily exercises to maintain arm health and prevent injury",
    type: "VIDEO",
    category: "Recovery",
    duration: "15 min",
  },
  {
    id: 5,
    title: "Pitch Grips Guide",
    description: "Detailed guide to grips for fastball, curveball, slider, and changeup",
    type: "PDF",
    category: "Mechanics",
    pages: 12,
  },
  {
    id: 6,
    title: "Driveline Baseball Resources",
    description: "External link to Driveline's free training resources",
    type: "LINK",
    category: "External",
  },
  {
    id: 7,
    title: "Pre-Game Warmup Routine",
    description: "Complete warmup routine to prepare for competition",
    type: "VIDEO",
    category: "Training",
    duration: "20 min",
  },
  {
    id: 8,
    title: "Nutrition Guide for Pitchers",
    description: "Eating strategies for performance and recovery",
    type: "PDF",
    category: "Recovery",
    pages: 18,
  },
]

const typeIcons = {
  VIDEO: Video,
  PDF: FileText,
  LINK: LinkIcon,
}

const typeColors = {
  VIDEO: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
  PDF: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400",
  LINK: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
}

export default function ResourcesPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = ["all", ...new Set(resources.map((r) => r.category))]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      activeCategory === "all" || resource.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <DashboardHeader title="Resources" />
      <main className="flex-1 p-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Search */}
          <motion.div variants={item}>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div variants={item}>
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="capitalize">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={activeCategory} className="mt-6">
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredResources.map((resource) => {
                    const Icon = typeIcons[resource.type as keyof typeof typeIcons]
                    return (
                      <motion.div key={resource.id} variants={item}>
                        <Card className="h-full hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between gap-2">
                              <div className={`p-2 rounded-md ${typeColors[resource.type as keyof typeof typeColors]}`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {resource.category}
                              </Badge>
                            </div>
                            <CardTitle className="text-lg mt-3">{resource.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {resource.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                {resource.type === "VIDEO" && `${resource.duration}`}
                                {resource.type === "PDF" && `${resource.pages} pages`}
                                {resource.type === "LINK" && "External"}
                              </span>
                              <Button size="sm" variant="outline">
                                {resource.type === "VIDEO" ? (
                                  <>
                                    <Play className="mr-1 h-3 w-3" />
                                    Watch
                                  </>
                                ) : resource.type === "PDF" ? (
                                  <>
                                    <FileText className="mr-1 h-3 w-3" />
                                    Download
                                  </>
                                ) : (
                                  <>
                                    <ExternalLink className="mr-1 h-3 w-3" />
                                    Visit
                                  </>
                                )}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </motion.div>

                {filteredResources.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No resources found</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}
