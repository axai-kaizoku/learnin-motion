"use client"

import { EnhancedLink } from "../enhanced-link"

type Props = {
  links: string[]
  selectedComponent: string
  onSelect: (link: string) => void
}

export const LinkButtons = ({ links, selectedComponent, onSelect }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => {
            onSelect(link)
          }}
          className={`px-4 py-2 ${selectedComponent === link ? "font-bold" : "font-thin"}`}
        >
          {link}
        </button>
      ))}
      <EnhancedLink href="/overall-anim/transition">EnhancedLink</EnhancedLink>
    </div>
  )
}
