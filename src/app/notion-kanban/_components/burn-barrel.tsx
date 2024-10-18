"use client";
import { type Dispatch, type SetStateAction, useState } from "react";

import type { Card } from "./card";
import { Flame, Trash } from "lucide-react";

export const BurnBarrel = ({
  setCards,
}: {
  setCards: Dispatch<SetStateAction<Card[]>>;
}) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`mt-10 flex justify-center items-center h-56 w-56 shrink-0 rounded border text-3xl ${active ? "border-red-800 bg-red-800/20 text-red-500" : "border-neutral-500 bg-neutral-500/20 text-neutral-500"}`}
    >
      {active ? <Flame className="animate-bounce" /> : <Trash />}
    </div>
  );
};
