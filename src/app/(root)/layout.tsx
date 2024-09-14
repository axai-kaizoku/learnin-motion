import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="flex h-screen w-full">
      <Sidebar />
      <div className="p-20">{children}</div>
    </section>
  );
}
