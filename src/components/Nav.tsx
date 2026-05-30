"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const handleTopClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-[2px]">
      <div className="mx-auto flex h-[60px] max-w-[920px] items-center justify-between px-6 lg:px-0">
        <Link
          href="/"
          onClick={handleTopClick}
          className="text-[15px] font-medium tracking-[-0.3px] text-ink"
        >
          이상정<span className="hidden md:inline"> / Sangjeong Lee</span>
        </Link>
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex gap-3 md:gap-6 font-ibm">
            <Link
              href="/"
              onClick={handleTopClick}
              className={`text-[13px] font-medium tracking-[0.78px] transition-colors hover:text-[#5b8eb8] ${pathname === "/" ? "text-ink" : "text-[#91939E]"}`}
            >
              About
            </Link>
            <Link
              href="/writing"
              className={`text-[13px] font-medium tracking-[0.78px] transition-colors hover:text-[#5b8eb8] ${pathname.startsWith("/writing") ? "text-ink" : "text-[#91939E]"}`}
            >
              Writing
            </Link>
          </div>
          <a
            href="#"
            className="flex items-center gap-[2px] rounded-full border border-line bg-white px-[14px] py-[7px] text-[12px] font-semibold tracking-[0.72px] text-ink transition-shadow hover:shadow-[0px_0px_0px_2px_rgba(224,220,220,0.25),0px_2px_4px_0px_rgba(0,0,0,0.08)]"
          >
            이력서 PDF
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M6 14L14 6M9 6H14V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
