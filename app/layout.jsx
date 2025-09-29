import '../styles/globals.css';
import LetterGlitch from '../components/LetterGlitch';
import FadeContent from 'components/animations/fade';
import ContactStack from 'components/contactsStack';
import Navbar from 'components/navbar';
import GradualBlurMemo from 'components/animations/GradualBlur ';
import TextType from 'components/animations/textType';
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
            <body>
                {/* Seccion de configuracion de fondo de pagina */}
                <div className='bg-letterglitch fixed'>
                    <LetterGlitch
                        glitchSpeed={10}
                        centerVignette={true}
                        outerVignette={true}
                        smooth={true}
                    />
                </div>

                {/* Seccion de barra de navegacion */}
                <div className='backdrop-blur-md sticky top-4 z-50 max-w-6xl mx-auto px-4 bg-white/10 rounded-4xl shadow-lg px-6 py-3 border border-white/50'>
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <Navbar></Navbar>
                    </FadeContent>
                </div>

                {/* Seccion de contenido */}
                <section className="text-2xl font-bold text-white">
                    <TextType 
                        text={["\nWork under construction", "\nPlease wait", "\nPlease stand by", "\nCada vez mas basado", "\nNo black people, please", "\nHola slenderman"]}
                        typingSpeed={50}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                    />
                </section>


                {/* Seccion de rueda de contactos en parte inferior derecha */}
                <div className="fixed bottom-4 right-4 z-50">
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}><ContactStack></ContactStack></FadeContent>
                </div>

                {/* Seccion de blur inferior */}
                <div className='bg-letterglitch'>
                    <GradualBlurMemo
                        target="page"
                        position="bottom"
                        height="6rem"
                        strength={2}
                        divCount={5}
                        curve="bezier"
                        exponential={true}
                        opacity={1}
                    />
                </div>
            </body>
        </html>
    );
}
