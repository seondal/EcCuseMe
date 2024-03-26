import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navigation from "@/components/Navigation";
import ENV from "@/constants/env";

export const metadata: Metadata = {
  title: "ECC 길찾기",
  description: "이화여대 ECC 시설 및 강의실 위치 찾기 지도 서비스",
  openGraph: {
    title: "ECC 길찾기",
    description: "이대역보다 출구가 많은 ECC 미로",
  },
  other: {
    "google-adsense-account": ENV.adsense_account,
    "naver-site-verification": ENV.naver_search_adviser,
    "google-site-verification": ENV.google_search_console,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header></header>
        <main className="text-center max-w-96 m-auto pb-24">
          <h2>ECC 출구 찾기</h2>
          {children}
        </main>
        <Analytics />
        <GoogleAnalytics gaId={ENV.gaTag} />
        <footer className="flex flex-col gap-4 justify-center fixed bottom-0 right-0 left-0 h-24 bg-background">
          <Navigation />
        </footer>
      </body>
    </html>
  );
}
