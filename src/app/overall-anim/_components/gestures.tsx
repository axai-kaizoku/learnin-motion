"use client";
import { motion, MotionConfig } from "framer-motion";
import { Layout } from "./helpers/layout";

export default function Gestures() {
  return (
    <Layout title="Gestures" className="gap-8">
      <MotionConfig transition={{ duration: 0.1, ease: "easeInOut" }}>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "5deg" }}
        >
          Click Me
        </motion.button>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "-5deg" }}
        >
          Click Me 2
        </motion.button>
      </MotionConfig>
      <div className="h-20" />
    </Layout>
  );
}
