import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'NOL Cultural Craft Center — Marsa Matrouh',
  description:
    'NOL (النول) is a cultural craft center in Marsa Matrouh, Egypt, dedicated to preserving and revitalizing traditional textile weaving heritage through learning, exhibition, and cultural experiences.',
  generator: 'v0.app',
  keywords: [
    'NOL',
    'Cultural Craft Center',
    'Marsa Matrouh',
    'weaving',
    'Egyptian heritage',
    'textile',
    'artisans',
  ],
  openGraph: {
    title: 'NOL Cultural Craft Center — Marsa Matrouh',
    description:
      'Preserving heritage through weaving, culture and creativity in Marsa Matrouh, Egypt.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#c0683f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${cormorant.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <SiteHeader />
        </Suspense>
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
