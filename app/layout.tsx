import "./globals.css";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Navigation } from "./components/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
