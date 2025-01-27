"use client"
import { motion, useAnimationControls } from "framer-motion"
import { Layout } from "./helpers/layout"

export default function Controls() {
  const controls = useAnimationControls()
  const handleClick = () => {
    void controls.start("flip")
  }
  const handleReflip = () => {
    void controls.start("initial")
  }
  return (
    <Layout title="Controls" className="gap-8">
      <div className="flex gap-4">
        <motion.button onClick={handleClick} className="btn">
          Flip it
        </motion.button>
        <motion.button onClick={handleReflip} className="btn">
          Re-Flip it
        </motion.button>
      </div>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "180deg",
          },
        }}
        transition={{ duration: 0.25, type: "spring" }}
        initial="initial"
        animate={controls}
        className="h-52 w-52 rounded-tr-full border bg-muted"
      />
    </Layout>
  )
}
