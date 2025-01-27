"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Explore() {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  )
}

const NavBar = () => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="absolute text-black top-0 left-0 right-0 p-6 z-10 flex items-center justify-between"
    >
      <TreePine size="50px" color="#1d3319" />
      <motion.div
        initial="hidden"
        animate="show"
        className="flex items-center gap-4"
      >
        <Link href="/page-transition">
          <span className="nav-link">Parks</span>
        </Link>
        <Link href="/page-transition">
          <span className="nav-link">About</span>
        </Link>
        <Link href="/page-transition">
          <span className="nav-link">Contact</span>
        </Link>
        <Link href="/page-transition">Book a tour</Link>
      </motion.div>
    </motion.div>
  )
}

const Hero = () => {
  return (
    <div className="w-full h-screen bg-green-50 text-black relative flex flex-col items-center justify-center pb-24">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
        className="p-4 text-center relative z-10 flex flex-col gap-5  "
      >
        <div className="w-full flex justify-center">
          <TreePine size="35px" color="#1d3319" />
        </div>
        <h1 className="text-7xl m-0 font-medium">Explore National Parks</h1>
        <p className="m-0 mb-4 text-center max-w-screen-md">
          Explore Nation Parks is the countries leader for nation park tours.
          Make your vacation great with one of our amazing tour guides!
        </p>
        <div className="flex w-full justify-center items-center">
          <Link href="/page-transition">
            <Button className="bg-green-700 hover:bg-green-700 text-white">
              View Our parks
            </Button>
          </Link>
        </div>
      </motion.div>
      <Mountains />
    </div>
  )
}

const Mountains = () => (
  <motion.div
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.4,
      duration: 0.75,
    }}
    className="absolute left-0 right-0 bottom-0 z-0"
  >
    <svg
      id="visual"
      viewBox="0 0 900 600"
      className="fixed bottom-0 w-full h-[750px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0 485L82 454L164 489L245 453L327 485L409 525L491 464L573 524L655 444L736 492L818 480L900 508L900 601L818 601L736 601L655 601L573 601L491 601L409 601L327 601L245 601L164 601L82 601L0 601Z"
        fill="#337E26"
      />
    </svg>
    <svg
      id="visual"
      viewBox="0 0 900 600"
      className="fixed bottom-0 w-full h-[750px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0 510L82 493L164 504L245 544L327 531L409 506L491 530L573 476L655 506L736 484L818 474L900 496L900 601L818 601L736 601L655 601L573 601L491 601L409 601L327 601L245 601L164 601L82 601L0 601Z"
        fill="#2F6E24"
      />
    </svg>
    <svg
      id="visual"
      viewBox="0 0 900 600"
      className="fixed bottom-0 w-full h-[750px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0 558L82 565L164 543L245 518L327 567L409 541L491 557L573 554L655 562L736 563L818 518L900 505L900 601L818 601L736 601L655 601L573 601L491 601L409 601L327 601L245 601L164 601L82 601L0 601Z"
        fill="#2A5F22"
      />
    </svg>
    <svg
      id="visual"
      viewBox="0 0 900 600"
      className="fixed bottom-0 w-full h-[750px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0 555L82 548L164 550L245 585L327 547L409 550L491 550L573 544L655 568L736 553L818 558L900 583L900 601L818 601L736 601L655 601L573 601L491 601L409 601L327 601L245 601L164 601L82 601L0 601Z"
        fill="#265020"
      />
    </svg>
  </motion.div>
)
