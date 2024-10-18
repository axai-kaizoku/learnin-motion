import { DropIndicator } from "./drop-indicator";

export type Card = {
  title: string;
  id: string;
  column: "backlog" | "todo" | "doing" | "done";
};

export const Card = ({ column, id, title }: Card) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <div
        draggable="true"
        className="rounded cursor-grab border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </div>
    </>
  );
};
