import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My projects",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="pt-20 pb-[128px]">{children}</main>
  );
}
