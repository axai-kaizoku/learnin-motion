import Link from "next/link";
import { ToggleTheme } from "../toggle-theme";

export default function Sidebar() {
  return (
    <section className="flex h-full w-[20%] items-center justify-center border-r md:w-[25%]">
      <div className="flex flex-col gap-40">
        <Link href="/">Home</Link>
        <Link href="/on-scroll-reveal">On Scroll Reveal</Link>
        <div>Contact</div>
        <ToggleTheme />
      </div>
    </section>
  );
}
