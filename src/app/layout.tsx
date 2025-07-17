import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Navbar } from '../components/layout/navbar'
import { Footer } from '../components/layout/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VCLOUD - Cloud, Edge, và AI Solutions',
  description: 'VCLOUD tăng tốc training AI, cung cấp dịch vụ cloud toàn diện, cải thiện phân phối nội dung và bảo vệ servers & applications',
  keywords: ['cloud computing', 'vcloud', 'edge computing', 'ai training', 'cdn', 'vietnam cloud'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="h-full scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col m-0 p-0 antialiased`}>
        <Navbar />
        <main className="flex-grow pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 