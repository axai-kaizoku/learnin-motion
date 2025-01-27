import type { Dispatch, SetStateAction } from "react"

export type SetStateType<T> = Dispatch<SetStateAction<T>>

export type DragEventType = React.DragEvent<HTMLDivElement>

export type ColumnProps = {
  title: string
  className: string
  column: ColumnType
  cards: CardType[]
  setCards: SetStateType<CardType[]>
}

export type ColumnType = "backlog" | "todo" | "doing" | "done"

export type CardType = {
  title: string
  id: string
  column: ColumnType
}

export type CardProps = CardType & {
  handleDragStart: (e: DragEventType, card: CardType) => void
}
