"use client"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Layout } from "./helpers/layout"

export default function Basics() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <Layout title="Basics">
      <div className="h-10" />
      <Button className="w-fit" onClick={() => setIsVisible(!isVisible)}>
        Click Me
      </Button>
      <div className="h-10" />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
              x: 200,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 160, -160, -140, 0],
              x: 0,
            }}
            exit={{
              rotate: "0deg",
              opacity: 0.1,
              scale: 0,
              y: 0,
              x: -200,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.1, 0.2, 0.3, 0.9, 1],
            }}
            className="h-52 w-52 rounded-md bg-muted"
          />
        )}
      </AnimatePresence>
    </Layout>
  )
}
