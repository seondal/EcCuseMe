import "@picocss/pico";
import "../style/theme.css";
import "../style/globals.css";

import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import ENV from "@/constants/env";
import Header from "@/components/Header";

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
      <body className="text-center max-w-96 m-auto pb-24">
        <Header />
        <main>{children}</main>
        <GoogleAnalytics gaId={ENV.gaTag} />
      </body>
    </html>
  );
}
