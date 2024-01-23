import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {LocalizationProvider} from "@/context/LocalizeProvider";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <title>Aqlea Tech</title>
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-[#020d1c]",
          inter.variable
        )}
      >
      <LocalizationProvider>
          <Header />
          <div>{children}</div>
          <Footer />
      </LocalizationProvider>

      </body>
    </html>
  )
}