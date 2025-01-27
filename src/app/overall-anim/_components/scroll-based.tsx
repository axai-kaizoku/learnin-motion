"use client"
import { useScroll, motion, useSpring, useTransform } from "framer-motion"
import { Layout } from "./helpers/layout"

export default function ScrollBased() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress)

  const background = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#000"])

  return (
    <Layout title="Scroll Based">
      {/* Top to bottom Left */}
      {/* <motion.div
        style={{ scaleY: scrollYProgress }}
        className="fixed origin-top bg-blue-500 top-0 left-0 w-2 h-full"
      /> */}
      {/* Left to right Top */}
      <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX,
          // backgroundColor: '#fefefe',
          backgroundColor: background,
        }}
        className="fixed origin-left  top-0 w-full h-2"
      />
      {/* Right to left Bottom */}
      {/* <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed origin-bottom-right bg-blue-500 left-0 bottom-0 w-full h-2"
      /> */}
      {/* Bottom to top Right */}
      {/* <motion.div
        style={{ scaleY: scrollYProgress }}
        className="fixed origin-bottom-left bg-blue-500 right-0 bottom-0 w-2 h-full"
      /> */}
      {/* Top to bottom Right */}
      {/* <motion.div
        style={{ scaleY: scrollYProgress }}
        className="fixed origin-top-right bg-blue-500 right-0 top-0 w-2 h-full"
      /> */}
      {/* Bottom to top left */}
      {/* <motion.div
        style={{ scaleY: scrollYProgress }}
        className="fixed origin-bottom-left bg-blue-500 left-0 bottom-0 w-2 h-full"
      /> */}

      <div className="p-4 flex flex-col gap-3">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id
          dolore consequatur fugit exercitationem nihil, expedita, ipsam minima
          qui accusantium sint. Quam nostrum eum voluptatum quaerat amet
          consequatur recusandae illum.
        </div>
      </div>
    </Layout>
  )
}
