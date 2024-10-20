export default function ParallaxLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="bg-[#06141D] text-neutral-50 min-h-screen w-[100vw]">
      {children}
    </section>
  );
}
