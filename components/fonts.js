import { Newsreader, Inter, Fraunces, EB_Garamond, Roboto, Playfair_Display  } from 'next/font/google'

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
    weight: ["400", "500", "600"], // regular, medium, semibold
    style: ["normal", "italic"],
});

export const roboto = Roboto({
  weight: ['100', '300', '400', '700'], // 100/300 match the light/thin style you want
  subsets: ['latin'],
  variable: '--font-roboto', // Creates a CSS variable for global stylesheet use
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  // 'normal' handles "Let's yours", 'italic' handles "reimagine"
  style: ['normal', 'italic'], 
  weight: ['400', '600'], 
  variable: '--font-playfair',
});