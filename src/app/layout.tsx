import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Title",
  description: "description",
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
        <main className="flex flex-col justify-center items-center">
          {children}
        </main>
        <Analytics />
        <footer></footer>
      </body>
    </html>
  );
}
