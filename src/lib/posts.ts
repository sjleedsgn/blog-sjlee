import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  status: "open" | "draft";
  content: string;
};

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  return `${Math.ceil(words / 200)} min`;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => getPostBySlug(file.replace(".md", "")))
    .filter((post) => post.status === "open")
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getAllPostsIncludingDraft(): Post[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => getPostBySlug(file.replace(".md", "")))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getAdjacentPosts(slug: string): { prev: Post | null; next: Post | null } {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    readTime: data.readTime ?? calcReadTime(content),
    status: data.status ?? "open",
    content,
  };
}
