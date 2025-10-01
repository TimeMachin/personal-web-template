import '../styles/globals.css';

{/* Imports de animaciones */}
import LetterGlitch from '../components/LetterGlitch';
import FadeContent from 'components/animations/fade';
import TextType from 'components/animations/textType';


{/* Imports de componentes */}
import ContactStack from 'components/contactsStack';
import Navbar from 'components/navbar';
import GradualBlurMemo from 'components/animations/GradualBlur ';
import SpotlightCard from 'components/SpotlightCard';

{/* Imports de contenido */}
import Hero from 'components/portafolio/Hero';
import Experience from 'components/portafolio/experience';
import Education from 'components/portafolio/Education';
import Projects from 'components/portafolio/Projects';
import Contacts from 'components/portafolio/Contacts';
import CoverLetter from 'components/portafolio/CoverLetter';

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
                <div className='backdrop-blur-md fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-6xl w-full px-4 bg-white/10 rounded-4xl shadow-lg px-6 py-3 border border-white/50'>
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        <Navbar></Navbar>
                    </FadeContent>
                </div>

                {/* Seccion de contenido */}
                <section id='about' className='mt-25'>
                    <Hero></Hero>
                </section>

                <section id='experience' className='text-white'>
                    <Experience></Experience>
                </section>

                <section id='education' className='text-white'>
                    <Education></Education>
                </section>

                <section id='projects' className='text-white'>
                    <Projects></Projects>
                </section>

                <section id='contact' className='text-white mb-20'>
                    <Contacts></Contacts>
                </section>




                {/* Seccion de rueda de contactos en parte inferior derecha */}
                <div className="fixed bottom-4 right-4 z-2">
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}><ContactStack></ContactStack></FadeContent>
                </div>

                {/* Seccion de blur inferior */}
                <div className='bg-letterglitch z-1'>
                    <GradualBlurMemo
                        target="page"
                        position="bottom"
                        height="5rem"
                        strength={1}
                        divCount={5}
                        curve="ease-in"
                        exponential={true}
                        opacity={1}
                    />
                </div>
            </body>
        </html>
    );
}
