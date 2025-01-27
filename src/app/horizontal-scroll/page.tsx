import { HorizontalScrollCarousel } from "./_components/horizontal-carousel"

export default function HorizontalScroll() {
  return (
    <div className="flex flex-col w-full h-fit bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  )
}
