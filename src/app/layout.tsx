import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { GA_TAG } from "@/constants/env";
import { GoogleAnalytics } from "@next/third-parties/google";
import KakaoAdfit from "@/components/kakaoAdfit";

export const metadata: Metadata = {
  title: "ECC 출구 찾기",
  description: "이대역보다 출구가 많은 ECC 미로",
  other: {
    "google-adsense-account": "ca-pub-7559978289195926",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kor">
      <body>
        <header></header>
        <main className="text-center max-w-96 m-auto ">{children}</main>
        <Analytics />
        <GoogleAnalytics gaId={GA_TAG} />
        <footer className="text-center p-4">
          <div>문의, 기능제안, 오류신고 편하게 해주세요 !</div>
          <a href="https://toss.me/seondal">이 사이트 만든 사람</a>
        </footer>
      </body>
    </html>
  );
}
