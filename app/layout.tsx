import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { Navigation } from "./components/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://yebuntu.vercel.app"),
  title: "Portfolio",
  description: "Portfolio of Lukas Jaronis",
  openGraph: {
    title: "Portfolio",
    description: "Portfolio of Lukas Jaronis",
    url: "https://yebuntu.vercel.app",
    siteName: "yebuntu.vercel.app",
  },
  twitter: {
    title: "Yebuntu (Lukas Jaronis)",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body className="font-geist_sans">
        {children}
        <Navigation />
      </body>
    </html>
  );
}
