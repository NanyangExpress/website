import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })
import AboutUs from "@/app/about-us/page";


export const metadata: Metadata = {
  title: 'Nanyang Express',
  description: 'Online Shop for Customers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
