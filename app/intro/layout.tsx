import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intro',
  description: 'Introduction',
  openGraph: {
    type: "website",
    url: "https://yebuntu.vercel.app/intro",
    title: "Intro",
    description: "Quick introduction",
    siteName: "Yebuntu",
  }
}

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
    </main>
  )
}
