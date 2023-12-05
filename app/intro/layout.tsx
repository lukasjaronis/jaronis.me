import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://yebuntu.vercel.app"),
	title: "Intro",
	description: "Introduction",
	openGraph: {
		title: "Intro",
		description: "Lukas Jaronis Introduction",
		url: "https://yebuntu.vercel.app/intro",
		siteName: "yebuntu.vercel.app",
	},
	twitter: {
		title: "Yebuntu (Lukas Jaronis) | Intro",
		card: "summary_large_image",
	},
};

export default function IntroLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main>{children}</main>;
}
