"use client";

type Props = {
  links: string[];
  selectedComponent: string;
  onSelect: (link: string) => void;
};

export default function LinkButtons({
  links,
  selectedComponent,
  onSelect,
}: Props) {
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => {
            onSelect(link);
          }}
          className={`px-4 py-2 ${selectedComponent === link ? "font-bold" : "font-thin"}`}
        >
          {link}
        </button>
      ))}
    </div>
  );
}
