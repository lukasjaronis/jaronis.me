import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intro',
  description: 'Introduction',
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
