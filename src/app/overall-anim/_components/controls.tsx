"use client";
import { motion, useAnimationControls } from "framer-motion";
import { Layout } from "./helpers/layout";

export default function Controls() {
  const controls = useAnimationControls();
  const handleClick = () => {
    void controls.start("flip");
  };
  return (
    <Layout title="Controls" className="gap-8">
      <motion.button onClick={handleClick} className="btn">
        Flip it
      </motion.button>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        transition={{ duration: 0.25, type: "spring" }}
        initial="initial"
        animate={controls}
        className="h-52 w-52 rounded-md border bg-muted"
      />
    </Layout>
  );
}
