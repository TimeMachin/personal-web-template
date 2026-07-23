import { Newsreader, Inter } from 'next/font/google'

// Serif display font — free stand-in for "Times Now SemiBold Italic"
// (the original logo font, which requires a paid MyFonts/Adobe license)
export const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

// Sans-serif utility font — used for nav links, button, and subtext
export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})