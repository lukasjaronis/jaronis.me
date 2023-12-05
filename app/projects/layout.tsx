import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yebuntu.vercel.app"),
  title: "Projects",
  description: "My Projects",
  openGraph: {
    title: "Projects",
    description: "Lukas Jaronis Projects",
    url: "https://yebuntu.vercel.app/projects",
    siteName: "yebuntu.vercel.app",
  },
  twitter: {
    title: "Yebuntu (Lukas Jaronis) | Projects",
    card: "summary_large_image",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="pt-10 pb-[155px]">{children}</main>
  );
}
