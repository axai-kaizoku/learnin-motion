"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, cards } from "./card";

export const HorizontalScrollCarousel = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-neutral-900">
      <div className="top-0 sticky h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.title} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
