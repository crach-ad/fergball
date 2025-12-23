"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedLogo } from "@/components/animated-logo"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])
  return scrolled
}

export default function HomePage() {
  const scrolled = useScrolled()
  const reduce = useReducedMotion()

  return (
    <div className="min-h-screen bg-background">
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-background/60 border-b" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <AnimatedLogo />
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#programs" className="hover:opacity-70 transition-opacity">
                Programs
              </Link>
              <Link href="#results" className="hover:opacity-70 transition-opacity">
                Results
              </Link>
              <Link href="#about" className="hover:opacity-70 transition-opacity">
                About
              </Link>
              <ThemeToggle />
              <Link href="/dashboard">
                <Button size="sm" variant="outline">Member Area</Button>
              </Link>
              <Button size="sm">Book A Call</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 lg:pb-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/30 to-amber-900/20 dark:from-orange-500/10 dark:via-red-500/20 dark:to-amber-800/10" />
          <div
            className="absolute inset-0 opacity-[0.15] dark:opacity-[0.10]"
            style={{
              backgroundImage: "url(/fergsite.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute -inset-40 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/15 via-red-500/10 to-transparent blur-3xl" />
          <div className="absolute -inset-40 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-600/15 via-orange-500/10 to-transparent blur-3xl" />
          <div className="absolute inset-0 [background:linear-gradient(to_right,transparent_0%,hsl(var(--muted)/0.03)_50%,transparent_100%),linear-gradient(to_bottom,transparent_0%,hsl(var(--muted)/0.03)_50%,transparent_100%)] [background-size:48px_2px,2px_48px]" />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur text-xs mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-muted-foreground">Trusted by Athletes in multiple countries</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance max-w-4xl mb-6"
          >
            Velo Camp -{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-red-600">
              Move Like The Elites
            </span>
          </motion.h1>


          <motion.div variants={item} className="max-w-2xl mb-10 space-y-4 text-center">
            <p>
              <span className="italic text-muted-foreground">Is Pitching Velocity God Given?</span>
              <br />
              <span className="font-bold">Possibly.</span>
            </p>
            <p>
              <span className="italic text-muted-foreground">Is Pitching Velocity a Product of Hard Work?</span>
              <br />
              <span className="font-bold">There is strong evidence to support this.</span>
            </p>
            <p className="pt-2">
              <span className="text-muted-foreground">Both can be True.</span>
              <br />
              <span className="font-bold text-xl">
                THE QUESTION IS.. WHICH ONE ARE YOU?
              </span>
            </p>
          </motion.div>

          <motion.p variants={item} className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Stop being overlooked. Our proven system helps pitchers add 5-10 mph, develop nasty stuff, and build the
            tools that get coaches, recruiters, and scouts to notice.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              Book Your Evaluation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "200+", label: "Athletes Trained" },
              { value: "50+", label: "College Commits" },
              { value: "8+ MPH", label: "Avg. Velocity Gain" },
              { value: "15+", label: "Draft Picks" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={!reduce ? { y: -4, transition: { duration: 0.2 } } : {}}
                className="rounded-2xl border bg-card/50 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-semibold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="results" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-4">
              Real Athletes.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-red-600">
                Real Results.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive training approach helps athletes reach their full potential and get to the next level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Jake M.", from: "85", to: "94", result: "D1 Commit" },
              { name: "Ryan T.", from: "88", to: "96", result: "MLB Draft" },
              { name: "Chris P.", from: "82", to: "91", result: "D1 Transfer" },
              { name: "Alex S.", from: "90", to: "98", result: "Pro Contract" },
              { name: "Tyler K.", from: "84", to: "92", result: "D1 Scholarship" },
              { name: "Brandon L.", from: "87", to: "95", result: "Regional Invite" },
            ].map((athlete, index) => (
              <motion.div key={index} whileHover={!reduce ? { y: -4, transition: { duration: 0.2 } } : {}}>
                <Card className="p-6 rounded-2xl h-full shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{athlete.name}</h3>
                      <p className="text-sm text-muted-foreground">{athlete.result}</p>
                    </div>
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-semibold text-muted-foreground">{athlete.from}</div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    <div className="text-2xl font-semibold text-red-500">{athlete.to} mph</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-6">
            We Know What It's Like To Be Overlooked
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            You work hard. You get hitters out. But coaches and scouts don't care because you don't light up the radar
            gun. You're stuck watching less talented players get opportunities while you're ignored.
          </p>
          <p className="text-lg font-medium">
            It doesn't have to be this way. With the right training, your body will adapt and transform.
          </p>
        </div>
      </section>

      <section id="programs" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-4">
              Choose Your Path To The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-red-600">
                Next Level
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personalized training programs designed to fit your schedule and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={!reduce ? { y: -6, transition: { duration: 0.2 } } : {}}>
              <Card className="p-8 rounded-2xl h-full shadow-sm hover:shadow-xl transition-shadow">
                <div className="text-red-600 dark:text-red-400 font-medium text-sm mb-2">Weekend Training</div>
                <h3 className="text-2xl font-semibold mb-4">Elite Camps</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                  Intensive 2-day camps that set you on course to build the tools you need. Full evaluation, skill
                  development, and personalized plan.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Comprehensive evaluation",
                    "Velocity development",
                    "Pitch design & mechanics",
                    "Personalized training plan",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Learn More</Button>
              </Card>
            </motion.div>

            <motion.div whileHover={!reduce ? { y: -6, transition: { duration: 0.2 } } : {}}>
              <Card className="p-8 rounded-2xl h-full border-red-500/50 border-2 relative shadow-md hover:shadow-xl transition-shadow">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                  Most Popular
                </div>
                <div className="text-red-600 dark:text-red-400 font-medium text-sm mb-2">Individual Training</div>
                <h3 className="text-2xl font-semibold mb-4">One-on-One</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                  Ultimate personalized training experience. 4-hour sessions with complete evaluation and individualized
                  instruction.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Full biomechanical analysis",
                    "Customized training program",
                    "Data-driven approach",
                    "Ongoing support & tracking",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Book Session</Button>
              </Card>
            </motion.div>

            <motion.div whileHover={!reduce ? { y: -6, transition: { duration: 0.2 } } : {}}>
              <Card className="p-8 rounded-2xl h-full shadow-sm hover:shadow-xl transition-shadow">
                <div className="text-red-600 dark:text-red-400 font-medium text-sm mb-2">Train Anywhere</div>
                <h3 className="text-2xl font-semibold mb-4">Remote Program</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                  Get elite training from anywhere. Remote evaluation, customized plan, daily tracking, and weekly
                  check-ins with coaches.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Video analysis & feedback",
                    "Personalized programming",
                    "Weekly coach check-ins",
                    "Progress tracking",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-4">
              The Ferg Ball Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just teach mechanics. We build complete pitchers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Velocity Development",
                description:
                  "Science-backed training to add 5-10+ mph through improved mechanics, strength, and power.",
              },
              {
                title: "Pitch Design",
                description:
                  "Develop nasty stuff that gets hitters out. Learn to shape and command every pitch in your arsenal.",
              },
              {
                title: "Arm Health",
                description: "Stay healthy and throw harder. Our approach prioritizes longevity and injury prevention.",
              },
              {
                title: "Mental Game",
                description: "Command the zone under pressure. Develop the mental skills to execute when it counts.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-6">
            Ready To Stop Being Overlooked?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Book a call with our team to discuss your goals and find the right training program for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-accent/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <AnimatedLogo className="mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Elite baseball training that gets you recruited and signed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Programs</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Weekend Camps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    One-on-One Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Remote Coaching
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>(555) 123-4567</li>
                <li>info@fergball.com</li>
                <li>Location TBD</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ferg Ball. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
