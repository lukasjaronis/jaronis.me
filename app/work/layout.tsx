import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL("https://yebuntu.vercel.app"),
  title: "Work Experience",
  description: "My work experiences",
  openGraph: {
    title: "Work Experience",
    description: "Lukas Jaronis Work Experience",
    url: "https://yebuntu.vercel.app/work",
    siteName: "yebuntu.vercel.app",
  },
  twitter: {
    title: "Yebuntu (Lukas Jaronis) | Work Experience",
    card: "summary_large_image",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='pt-10 pb-[155px]'>
      {children}
    </main>
  )
}
