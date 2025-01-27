"use client"

import { useRef } from "react"
import { Layout } from "./helpers/layout"
import { motion, useInView } from "framer-motion"

export default function ViewBased() {
  const ref = useRef(null)

  const isInView = useInView(ref, { once: true })

  return (
    <Layout title="ViewBased">
      <div className="h-[200vh] border w-full flex" />
      <motion.div
        className="h-screen border w-full bg-white"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        className={`h-screen border w-full ${isInView ? "bg-red-400" : "bg-blue-400"} duration-1000 transition`}
      />
    </Layout>
  )
}
