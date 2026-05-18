import type { Metadata } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sans = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})
const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PT Kalwaneira Terra Prospera — Premium Indonesian Natural Products',
    template: '%s | Kalwaneira Terra Prospera',
  },
  description:
    "An Indonesian export house connecting the archipelago's finest natural resources with discerning global buyers. Parent company of Zanetuno and Nusateraso.",
  metadataBase: new URL('https://kalwaneira.com'),
  openGraph: {
    title: 'PT Kalwaneira Terra Prospera',
    description: 'Premium Indonesian Natural Products for Global Markets',
    url: 'https://kalwaneira.com',
    siteName: 'Kalwaneira Terra Prospera',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Kalwaneira Terra Prospera',
    description: 'Premium Indonesian Natural Products for Global Markets',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
