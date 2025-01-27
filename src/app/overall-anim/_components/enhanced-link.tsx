"use client"
import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"

interface EnhancedLinkProps extends LinkProps {
  children: React.ReactNode
  href: string
}

const sleep = (ms: number) => {
  return new Promise((resovle) => setTimeout(resovle, ms))
}

export const EnhancedLink = ({
  children,
  href,
  ...props
}: EnhancedLinkProps) => {
  const router = useRouter()
  return (
    <Link
      onClick={async (e) => {
        e.preventDefault()

        const body = document.querySelector("#body")

        body?.classList.add("page-transition")

        await sleep(500)
        router.push(href)
        await sleep(500)

        body?.classList.remove("page-transition")
      }}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
