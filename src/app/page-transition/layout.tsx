"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0,50% 0,50% 100%, 50% 100%)",
          },
        }}
        className="flex justify-center items-center bg-green-700/40 h-screen w-[100vw]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
