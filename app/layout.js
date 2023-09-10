import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Logo from '@/public/icons/logo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ACM @ SJSU',
  description: 'ACM Chapter at San Jose State University',
  icon: {Logo},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="@/public/icons/logo.png" />
      </head>
      <body className={`${inter.className} `}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
