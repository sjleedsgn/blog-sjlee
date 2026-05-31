import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "글 — 이상정",
  description: "디자인, 제품, 그리고 일하는 방식에 대한 기록",
};

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <main className="page-enter mx-auto w-full max-w-[920px] px-6 lg:px-0">
        <section className="py-[90px]">
          <div className="grid gap-[64px] lg:grid-cols-[200px_1fr]">
            <div className="lg:sticky lg:top-[84px] lg:self-start">
              <p className="font-ibm text-[11.5px] tracking-[1.15px] text-faint">
                Writing
              </p>
              <h1 className="mt-2 text-[22px] font-bold tracking-[-0.44px]">
                글
              </h1>
            </div>

            <ul className="divide-y divide-line-soft">
              {getAllPosts().map((post) => (
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
          </div>
        </section>
      </main>

    </div>
  );
}
