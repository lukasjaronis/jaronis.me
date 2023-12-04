import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'My work',
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='pt-10 pb-[128px]'>
      {children}
    </main>
  )
}
