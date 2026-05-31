import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 4);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <main className="page-enter mx-auto w-full max-w-[920px] px-6 lg:px-0">
        {/* HERO */}
        <header className="relative pb-[80px] pt-[120px]">
          <h1 className="text-[36px] md:text-[60px] font-bold leading-[1.24] tracking-[-1.2px] md:tracking-[-2.1px] break-keep">
            <span className="block">제품을 명확하게 만드는</span>
            <span className="block">
              <span className="highlight-enter">
                프로덕트 디자이너
              </span>
            </span>
          </h1>
          <p className="mt-[28px] text-[18px] leading-[1.6] text-ink-soft max-w-[580px]">
            니즈에 의해 요구된 기능과, 보이지 않는 니즈의 기능,
            <br />
            사용자와 비즈니스가 만나는 지점을 설계합니다.
          </p>
          <div className="mt-[40px] flex flex-wrap gap-[10px]">
            {["Product Design", "B2B", "Design System"].map((tag) => (
              <span
                key={tag}
                className="font-ibm flex h-[30px] items-center rounded-full bg-ink px-[12px] text-[13px] font-medium tracking-[0.78px] text-bg"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <hr className="border-line" />

        <AboutSection />

        <hr className="border-line" />

        {/* WRITING */}
        <section id="writing" className="py-[90px]">
          <div className="grid gap-[64px] lg:grid-cols-[200px_1fr]">
            <div>
              <p className="font-ibm text-[11.5px] tracking-[1.15px] text-[#555870]">
                Writing
              </p>
              <h2 className="mt-2 text-[22px] font-bold tracking-[-0.44px]">
                글
              </h2>
            </div>

            <div>
              <ul className="divide-y divide-line-soft">
                {recentPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/writing/${post.slug}`}
                      className="group flex items-baseline gap-[36px] py-[20px]"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-[17px] font-bold tracking-[-0.255px] text-ink transition-colors group-hover:text-[#5b8eb8]">
                          {post.title}
                        </p>
                        <p className="mt-2 text-[15px] text-muted">
                          {post.excerpt}
                        </p>
                      </div>
                      <span className="font-ibm shrink-0 text-[12px] tracking-[0.24px] text-muted whitespace-nowrap">
                        {post.date}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-[30px] flex justify-center">
                <Link
                  href="/writing"
                  className="flex items-center gap-[2px] rounded-full border border-line bg-white px-[14px] py-[7px] text-[12px] font-semibold tracking-[0.72px] text-ink transition-shadow hover:shadow-[0px_0px_0px_2px_rgba(224,220,220,0.25),0px_2px_4px_0px_rgba(0,0,0,0.08)]"
                >
                  모든 글 보기
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
