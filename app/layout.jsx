import '../styles/globals.css';
import LetterGlitch from '../components/LetterGlitch';
import FadeContent from 'components/animations/fade';
import ContactStack from 'components/contactsStack';
import { fixedSize } from './blobs/generator';
import Navbar from 'components/navbar';
import SpotlightCard from 'components/SpotlightCard';

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
                {/* Seccion de configuracion de fondo de pagina */}
                <div className='bg-letterglitch'>
                    <LetterGlitch
                        glitchSpeed={10}
                        centerVignette={true}
                        outerVignette={true}
                        smooth={true}
                    />
                </div>

                {/* Seccion de barra de navegacion */}
                <div>
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <Navbar></Navbar>
                    </FadeContent>
                </div>

                {/* Seccion de rueda de contactos en parte inferior derecha */}
                <div className="fixed bottom-4 right-4 z-50">
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}><ContactStack></ContactStack></FadeContent>
                </div>
            </body>
        </html>
    );
}
