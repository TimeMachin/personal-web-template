import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import LetterGlitch from '../components/LetterGlitch';
import { fixedSize } from './blobs/generator';
import Navbar from 'components/navbar';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Pedro Personal Site'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body >
                <Navbar></Navbar>
                <div className='bg-letterglitch'>
                    <LetterGlitch
                        glitchSpeed={10}
                        centerVignette={true}
                        outerVignette={true}
                        smooth={true}
                    />
                </div>







                <a href="https://wa.me/34687093223/" target="_blank" className="fixed bottom-4 right-4 z-50">
                    <img src="https://ebweb.es/wp-content/uploads/2020/09/logo-wasap.png" width="50" height="50" alt="Whatsapp logo"/>
                </a>
            </body>
        </html>
    );
}
