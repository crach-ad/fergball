"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

export function AnimatedLogo({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion()

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate={reduce ? "initial" : "animate"}
      >
        <Image
          src="/fergball.jpeg"
          alt="Velp Camp Logo"
          width={72}
          height={72}
          className="rounded-full object-cover"
        />
      </motion.div>

      <motion.div
        className="flex flex-col leading-none"
        variants={textVariants}
        initial="initial"
        animate={reduce ? "initial" : "animate"}
      >
        <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-red-600 to-red-700 dark:from-red-500 dark:via-red-400 dark:to-red-500">
          VELP
        </span>
        <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-red-600 to-red-700 dark:from-red-500 dark:via-red-400 dark:to-red-500">
          CAMP
        </span>
      </motion.div>
    </div>
  )
}
