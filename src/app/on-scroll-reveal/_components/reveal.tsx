"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  children: React.JSX.Element;
  width?: "w-fit" | "w-full";
};

export default function Reveal({ children, width = "w-fit" }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      void mainControls.start("visible");
      void slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", width)}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-1 left-0 right-0 top-1 z-10 bg-muted"
      />
    </div>
  );
}
