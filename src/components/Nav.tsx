import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-[2px]">
      <div className="mx-auto flex h-[60px] max-w-[920px] items-center justify-between px-6 lg:px-0">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-[-0.3px] text-ink"
        >
          이상정<span className="hidden md:inline"> / Sangjeong Lee</span>
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}
