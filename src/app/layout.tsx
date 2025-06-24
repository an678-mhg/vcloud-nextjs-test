import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VCLOUD - Nền tảng điện toán đám mây cho doanh nghiệp',
  description: 'Giải pháp điện toán đám mây toàn diện cho doanh nghiệp của bạn với độ tin cậy và bảo mật cao.',
  keywords: ['cloud computing', 'vcloud', 'kubernetes', 'cloud services', 'vietnam cloud'],
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
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col m-0 p-0 antialiased`}>
        <Navbar />
        <main className="flex-grow mt-[4rem]">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 