import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ADSENSE_ACCOUNT, GA_TAG } from "@/constants/env";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ECC 출구 찾기",
  description: "이대역보다 출구가 많은 ECC 미로",
  other: {
    "google-adsense-account": ADSENSE_ACCOUNT,
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
        <main className="text-center max-w-96 m-auto pb-20">
          <h2>ECC 출구 찾기</h2>
          <div>이대역보다 출구가 많은 ECC 미로</div>
          {children}
        </main>
        <Analytics />
        <GoogleAnalytics gaId={GA_TAG} />
        <footer className="fixed bottom-0 right-0 left-0 flex items-center justify-center gap-2 h-20 bg-secondary">
          <Link href={"/"}>
            <button>강의실 찾기</button>
          </Link>
          <Link href={"/facility"}>
            <button>시설 찾기</button>
          </Link>
          <div className="text-xs">
            <div>문의, 기능제안, 오류신고 편하게 해주세요 !</div>
            <a href="https://toss.me/seondal">이 사이트 만든 사람</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
