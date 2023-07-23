import './variables.scss';
import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ProfilePic from './components/profile-pic/ProfilePic';
import type { NavbarItem } from './components/navbar/Navbar';

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
  description: 'Portfolio built with Next.js and Typescript, by Katie Hughes.',
};

const items: NavbarItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog-page' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${lato.variable}`}>
        <Navbar items={items} />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
