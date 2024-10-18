"use client";
import { type Dispatch, type SetStateAction, useState } from "react";
import { Card } from "./card";
import { DropIndicator } from "./drop-indicator";

export type ColumnProps = {
  title: string;
  className: string;
  column: string;
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
};

export const Column = ({
  title,
  className,
  column,
  cards,
  setCards,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="flex mb-3 items-center justify-between">
        <h3 className={`font-medium ${className}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
      >
        {filteredCards.map((c) => (
          <Card key={c.id} {...c} />
        ))}
        <DropIndicator beforeId="-1" column={column} />
      </div>
    </div>
  );
};
