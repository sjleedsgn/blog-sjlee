import type { Metadata } from "next";
import { IBM_Plex_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const BASE_URL = "https://blog-sjlee.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "이상정 — Product Designer",
    template: "%s — 이상정",
  },
  description: "5년 차 프로덕트 디자이너 이상정의 포트폴리오 & 블로그",
  openGraph: {
    title: "이상정 — Product Designer",
    description: "5년 차 프로덕트 디자이너 이상정의 포트폴리오 & 블로그",
    url: BASE_URL,
    siteName: "이상정",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이상정 — Product Designer",
    description: "5년 차 프로덕트 디자이너 이상정의 포트폴리오 & 블로그",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${ibmPlexSans.variable} ${splineSansMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
          <Nav />
          {children}
          <Footer />
        </body>
    </html>
  );
}
