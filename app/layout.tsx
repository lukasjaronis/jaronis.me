import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { Navigation } from "./components/navigation";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Lukas Jaronis",
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
