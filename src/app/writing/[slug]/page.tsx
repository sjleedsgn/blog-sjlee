import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { marked } from "marked";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: `${post.title} — 이상정`, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const contentHtml = marked(post.content);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Nav />

      <main className="page-enter mx-auto w-full max-w-[920px] px-6 lg:px-0">
        <article className="py-16 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-[28px] font-bold leading-[1.2] tracking-[-0.025em] lg:text-[32px]">
              {post.title}
            </h1>

            <p className="mt-3 text-[16px] leading-[1.7] text-ink-soft">
              {post.excerpt}
            </p>

            <hr className="my-6 border-line" />

            <div className="font-ibm flex items-center gap-4 text-[12px] tracking-[0.24px] text-muted">
              <span>{post.date}</span>
            </div>

            <div
              className="prose mt-10"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            <div className="mt-16">
              <Link
                href="/writing"
                className="inline-flex items-center gap-[2px] rounded-full border border-line bg-white px-[14px] py-[7px] text-[12px] font-semibold tracking-[0.72px] text-ink transition-shadow hover:shadow-[0px_0px_0px_2px_rgba(224,220,220,0.25),0px_2px_4px_0px_rgba(0,0,0,0.08)]"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="shrink-0">
                  <path d="M16 10H4M10 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                모든 글 보기
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
