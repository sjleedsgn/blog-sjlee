export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://blog-sjlee.vercel.app/sitemap.xml",
  };
}
