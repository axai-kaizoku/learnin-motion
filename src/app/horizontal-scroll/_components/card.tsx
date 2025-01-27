type CardType = {
  url: string
  title: string
}

export const cards: CardType[] = [
  {
    url: "/assets/1.png",
    title: "Title 1",
  },
  {
    url: "/assets/2.png",
    title: "Title 2",
  },
  {
    url: "/assets/3.png",
    title: "Title 3",
  },
  {
    url: "/assets/4.png",
    title: "Title 4",
  },
  {
    url: "/assets/5.png",
    title: "Title 5",
  },
  {
    url: "/assets/6.png",
    title: "Title 6",
  },
  {
    url: "/assets/7.png",
    title: "Title 7",
  },
]

export const Card = ({ card }: { card: CardType }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
        }}
        className="absolute bg-cover bg-center inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  )
}
