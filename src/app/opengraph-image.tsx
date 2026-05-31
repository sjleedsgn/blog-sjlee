import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "이상정 — Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f7fc",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#aaadb9",
            marginBottom: 20,
            letterSpacing: "0.15em",
            fontFamily: "sans-serif",
          }}
        >
          PRODUCT DESIGNER
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#252835",
            lineHeight: 1.1,
            fontFamily: "sans-serif",
          }}
        >
          이상정
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#7f8198",
            marginTop: 24,
            fontFamily: "sans-serif",
          }}
        >
          포트폴리오 & 블로그
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            fontSize: 16,
            color: "#aaadb9",
            fontFamily: "sans-serif",
          }}
        >
          blog-sjlee.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
