"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

import type { CardType, ColumnType, SetStateType } from "../_types";

export const AddCard = ({
  column,
  setCards,
}: {
  column: ColumnType;
  setCards: SetStateType<CardType[]>;
}) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((p) => [...p, newCard]);
    setAdding(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSubmit(e as never);
    }
  };

  return (
    <>
      {adding ? (
        <>
          <motion.form layout onSubmit={handleSubmit}>
            <textarea
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="Add new task..."
              className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
            />
            <div className="mt-1.5 flex items-center justify-end gap-1.5">
              <button
                className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                onClick={() => setAdding(false)}
              >
                Close
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
              >
                Add <Plus className="w-4 h-4" />
              </button>
            </div>
          </motion.form>
        </>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50 "
        >
          <span>Add card</span>
          <Plus />
        </motion.button>
      )}
    </>
  );
};
