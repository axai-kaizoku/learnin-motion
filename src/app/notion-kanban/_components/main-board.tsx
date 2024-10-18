"use client";

import { useState } from "react";
import { DEFAULT_CARDS } from "@/constants";
import { type Card } from "./card";
import { Column } from "./column";
import { BurnBarrel } from "./burn-barrel";

export const Board = () => {
  const [cards, setCards] = useState<Card[]>(DEFAULT_CARDS);
  return (
    <div className="flex h-full w-full gap-6 overflow-scroll p-12">
      <Column
        title="Backlog"
        column="backlog"
        className="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Todo"
        column="todo"
        className="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        className="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        className="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};
