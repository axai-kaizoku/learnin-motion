import Link from "next/link";
import { ToggleTheme } from "../toggle-theme";

const navLinks = ["/on-scroll-reveal", "/overall-anim", "/horizontal-scroll"];

export default function Sidebar() {
  return (
    <section className="flex h-full w-[20%] flex-col items-center justify-between border-r py-10 md:w-[25%]">
      <div className="flex flex-col gap-5">
        {navLinks.map((link) => (
          <Link key={link} href={link} className="hover:underline">
            {link}
          </Link>
        ))}
      </div>
      <ToggleTheme />
    </section>
  );
}
