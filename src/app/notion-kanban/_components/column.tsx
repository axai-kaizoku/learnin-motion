/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
"use client"

import { useState } from "react"
import { DropIndicator } from "./drop-indicator"
import type { CardType, ColumnProps, DragEventType } from "../_types"
import { Card } from "./card"
import { AddCard } from "./add-card"

export const Column = ({
  title,
  className,
  column,
  cards,
  setCards,
}: ColumnProps) => {
  const [active, setActive] = useState(false)

  const handleDragStart = (e: DragEventType, card: CardType) => {
    e.dataTransfer.setData("cardId", card.id)
  }

  const handleDragOver = (e: DragEventType) => {
    e.preventDefault()
    highlightIndicator(e)
    setActive(true)
  }

  const highlightIndicator = (e: DragEventType) => {
    const indicators = getIndicators()
    clearHighlights(indicators)
    const el = getNearestIndicator(e, indicators)
    el.element.style.opacity = "1"
  }

  const clearHighlights = (els?: Element[]) => {
    const indicators = els ?? getIndicators()
    indicators.forEach((i) => {
      i.style.opacity = "0"
    })
  }

  const getNearestIndicator = (e: DragEventType, indicators: Element[]) => {
    const DISTANCE_OFFSET = 50

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = e.clientY - (box.top + DISTANCE_OFFSET)

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    )

    return el
  }

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`))
  }

  const handleDragLeave = () => {
    setActive(false)
    clearHighlights()
  }

  const handleDragEnd = (e: DragEventType) => {
    setActive(false)
    clearHighlights()

    const cardId = e.dataTransfer.getData("cardId")

    const indicators = getIndicators()
    const { element } = getNearestIndicator(e, indicators)

    const before = element.dataset.before || "-1"

    if (before !== cardId) {
      let copy = [...cards]
      let cardToTransfer = copy.find((c) => c.id === cardId)

      if (!cardToTransfer) return

      cardToTransfer = { ...cardToTransfer, column }

      copy = copy.filter((c) => c.id !== cardId)

      const moveToBack = before === "-1"

      if (moveToBack) {
        copy.push(cardToTransfer)
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before)

        if (insertAtIndex === undefined) return

        copy.splice(insertAtIndex, 0, cardToTransfer)
      }

      setCards(copy)
    }
  }

  const filteredCards = cards.filter((c) => c.column === column)

  return (
    <div className="w-56 shrink-0">
      <div className="flex mb-3 items-center justify-between">
        <h3 className={`font-medium ${className}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
      >
        {filteredCards.map((c) => (
          <Card key={c.id} {...c} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  )
}
