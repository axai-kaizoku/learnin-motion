"use client";

import type { CardProps } from "../_types";
import { DropIndicator } from "./drop-indicator";
import { motion } from "framer-motion";

export const Card = ({ column, id, title, handleDragStart }: CardProps) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="rounded cursor-grab border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};
