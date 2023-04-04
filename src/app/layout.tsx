import './globals.css'
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'MovieChart',
  description: 'MovieChart created by Next JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-montserrat mx-28 my-12 bg-black">{children}</body>
    </html>
  )
}
