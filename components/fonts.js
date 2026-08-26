import { Newsreader, Inter, Fraunces, EB_Garamond, Roboto, Playfair_Display  } from 'next/font/google'

export const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const inter = Inter({ 
    subsets: ["latin"],
    weight: ["300", "400"], 
    variable: "--font-inter" 
})

export const fraunces = Fraunces({ 
    subsets: ["latin"],
    weight: ["300"], 
})

export const ebGaramond = EB_Garamond({ 
    subsets: ["latin"],
    weight: ["400", "500", "600"], 
    style: ["normal", "italic"],
});

export const roboto = Roboto({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'], 
  weight: ['400', '600'], 
  variable: '--font-playfair',
});