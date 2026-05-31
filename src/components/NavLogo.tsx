"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLogo() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className="text-[15px] font-medium tracking-[-0.3px] text-ink"
    >
      이상정<span className="hidden md:inline"> / Sangjeong Lee</span>
    </Link>
  );
}
