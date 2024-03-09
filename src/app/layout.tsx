import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ADSENSE_ACCOUNT, GA_TAG } from "@/constants/env";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navigation from "@/components/Navigation";

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
        <main className="text-center max-w-96 m-auto pb-36">
          <h2>ECC 출구 찾기</h2>
          {children}
        </main>
        <Analytics />
        <GoogleAnalytics gaId={GA_TAG} />
        <footer className="flex flex-col gap-4 justify-center fixed bottom-0 right-0 left-0 h-36 bg-background">
          <Navigation />
        </footer>
      </body>
    </html>
  );
}
