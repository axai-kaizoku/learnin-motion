import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PageTransition() {
  return (
    <div className="flex justify-center items-center bg-green-700/40 h-screen w-full">
      <Link href="/page-transition/explore">
        <Button className="bg-green-700 hover:bg-green-700 text-white ">
          Explore Page
        </Button>
      </Link>
    </div>
  )
}
