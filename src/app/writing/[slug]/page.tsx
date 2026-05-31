import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getAllPostsIncludingDraft, getPostBySlug, getAdjacentPosts } from "@/lib/posts";
import { marked } from "marked";

export function generateStaticParams() {
  return getAllPostsIncludingDraft().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `https://blog-sjlee.vercel.app/writing/${slug}`,
        type: "article",
        publishedTime: post.date,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
      },
    };
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
  const { prev, next } = getAdjacentPosts(slug);

  return (
    <div className="min-h-screen bg-bg text-ink">
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

            <div className="mt-16 flex flex-col gap-6">
              <hr className="border-line" />
              <div className="flex items-center justify-between">
                <Link
                  href="/writing"
                  className="inline-flex items-center gap-[2px] rounded-full border border-line bg-white px-[14px] py-[7px] text-[12px] font-semibold tracking-[0.72px] text-ink transition-shadow hover:shadow-[0px_0px_0px_2px_rgba(224,220,220,0.25),0px_2px_4px_0px_rgba(0,0,0,0.08)]"
                >
                  모든 글 보기
                </Link>
                <div className="flex items-center gap-3">
                  {prev ? (
                    <Link
                      href={`/writing/${prev.slug}`}
                      className="inline-flex items-center rounded-full border border-line bg-white px-[14px] py-[7px] text-[12px] font-semibold tracking-[0.72px] text-ink transition-shadow hover:shadow-[0px_0px_0px_2px_rgba(224,220,220,0.25),0px_2px_4px_0px_rgba(0,0,0,0.08)]"
                    >
                      이전 글
                    </Link>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-line bg-white px-[14px] py-[7px] text-[12px] font-semibold tracking-[0.72px] text-ink opacity-40 cursor-not-allowed">
                      이전 글
                    </span>
                  )}
                  {next ? (
                    <Link
                      href={`/writing/${next.slug}`}
                      className="inline-flex items-center rounded-full border border-line bg-white px-[14px] py-[7px] text-[12px] font-semibold tracking-[0.72px] text-ink transition-shadow hover:shadow-[0px_0px_0px_2px_rgba(224,220,220,0.25),0px_2px_4px_0px_rgba(0,0,0,0.08)]"
                    >
                      다음 글
                    </Link>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-line bg-white px-[14px] py-[7px] text-[12px] font-semibold tracking-[0.72px] text-ink opacity-40 cursor-not-allowed">
                      다음 글
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

    </div>
  );
}
