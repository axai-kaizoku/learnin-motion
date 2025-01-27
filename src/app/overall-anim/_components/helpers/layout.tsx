import { cn } from "@/lib/utils"

type Props = { children: React.ReactNode; title?: string; className?: string }

export const Layout = ({ children, title, className }: Props) => {
  return (
    <div id={title} className="flex h-full flex-col w-full">
      <h3 className="w-full text-left text-2xl underline">#{title}</h3>
      <div
        className={cn("flex flex-col items-center justify-center", className)}
      >
        {children}
      </div>
    </div>
  )
}
