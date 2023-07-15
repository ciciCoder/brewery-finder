import './globals.css'
import type { Metadata } from 'next'
import { Itim } from 'next/font/google'

const itim = Itim({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brewery Finder',
  description: 'nextjs brewery finder app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={itim.className}>{children}</body>
    </html>
  )
}
