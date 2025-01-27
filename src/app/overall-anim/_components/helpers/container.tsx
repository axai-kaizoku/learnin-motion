type Props = { children: React.ReactNode }

export const Container = ({ children }: Props) => {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="flex h-full w-[70%] flex-col items-start">{children}</div>
    </section>
  )
}
