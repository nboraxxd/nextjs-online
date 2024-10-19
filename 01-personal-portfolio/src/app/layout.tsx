import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import '@/app/globals.css'

const heebo = Heebo({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'Personal portfolio of a someone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`text-dark antialiased ${heebo.className}`}>{children}</body>
    </html>
  )
}
