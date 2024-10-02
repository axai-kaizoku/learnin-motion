"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-[100vh] overflow-hidden relative flex flex-col justify-center gap-9 items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        PARALLAX
      </motion.h1>
      <div className="h-14" />
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/parallax/new/image-full.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/parallax/new/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
