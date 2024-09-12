import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/footer'
import Header from '@/components/header'

import './globals.css'
import siteConfig from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'Tailwind CSS',
    'Husky',
    'Lint-Staged',
    'cz-customizable',
  ],
  authors: [
    {
      name: 'drondiodev',
      url: 'https://github.com/drondiodev',
    },
  ],
  creator: 'drondiodev',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/og`],
  //   creator: 'compte twitter',
  // },
  // --- A ajouter dès que vous avez un logo ---
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: 'apple-touch-icon.png',
  // },
  // metadataBase: new URL(siteConfig.url),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="font-sans tracking-tight text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
