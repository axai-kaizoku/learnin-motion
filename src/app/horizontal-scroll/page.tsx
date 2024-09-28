"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HorizontalScroll() {
  return (
    <div className="flex flex-col w-full h-fit bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
}

const HorizontalScrollCarousel = () => {
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

type CardType = {
  url: string;
  title: string;
};

const cards: CardType[] = [
  {
    url: "/assets/1.png",
    title: "Title 1",
  },
  {
    url: "/assets/2.png",
    title: "Title 2",
  },
  {
    url: "/assets/3.png",
    title: "Title 3",
  },
  {
    url: "/assets/4.png",
    title: "Title 4",
  },
  {
    url: "/assets/5.png",
    title: "Title 5",
  },
  {
    url: "/assets/6.png",
    title: "Title 6",
  },
  {
    url: "/assets/7.png",
    title: "Title 7",
  },
];

const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
        }}
        className="absolute bg-cover bg-center inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};
