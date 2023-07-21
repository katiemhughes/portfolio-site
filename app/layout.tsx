import './variables.scss'
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ProfilePic from './components/profile-pic/ProfilePic'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'],
  style: ['normal'],
  variable: '--font-playfair-display',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'Katie Hughes portfolio',
  description: 'Portfolio built with Next.js and Typescript, by Katie Hughes.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${lato.variable}`}>
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  )
}
