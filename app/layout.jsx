import '../styles/globals.css';
import '../styles/lightfall.css';
import '../styles/faultyTerminal.css';

{/* Imports de Fondos */}
import Lightfall from 'components/backgrounds/Lightfall';
import DotMatrix from 'components/backgrounds/DotMatrix';
import LetterGlitch from '../components/backgrounds/LetterGlitch';
import Waves from 'components/backgrounds/Waves';

{/* Imports de animaciones */}
import FadeContent from 'components/animations/fade';
import TextType from 'components/animations/textType';

{/* Imports de componentes */}
import ContactStack from 'components/contactsStack';
import Navbar from 'components/navbar';
import GradualBlurMemo from 'components/animations/GradualBlur ';
import SpotlightCard from 'components/SpotlightCard';
import Framer from 'components/Framer';

{/* Imports de contenido */}
import Hero from 'components/portafolio/Hero';
import Experience from 'components/portafolio/Experience';
import Education from 'components/portafolio/Education';
import Projects from 'components/portafolio/Projects';
import Contacts from 'components/portafolio/Contacts';
import CoverLetter from 'components/portafolio/CoverLetter';

{/* Scroll de triggers (BETA) */}
import { FadeIn } from 'components/animations/FadeIn'; // Este componente crea un div que se anima al hacer scroll, usando framer-motion con un efecto de aparecer
import ScrollProgress from 'components/animations/ScrollProgress'; // Este componente crea una barra de progreso que indica el porcentaje de scroll de la pagina, usando framer-motion

{/* API Calls */}
import { getUsers } from 'src/lib/api/users';
import { getQuotes } from 'src/lib/api/quotes';
import FaultyTerminal from 'components/backgrounds/FaultyTerminal';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Pedro Personal Site'
    }
};

export default async function RootLayout({ children }) {
    const quotes = await getQuotes();
    console.log('Quotes:', quotes);
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body>
                {/* Seccion de configuracion de fondo de pagina */}
                <div className='bg-letterglitch fixed'>
{/*                     <LetterGlitch
                        glitchSpeed={10}
                        centerVignette={true}
                        outerVignette={true}
                        smooth={true}
                    /> */}
                    {/* <Lightfall/> */}
                    <DotMatrix/>
                    {/* <FaultyTerminal/> */}
                    {/* <Waves /> */}

                </div>

                {/* Seccion de barra de navegacion */}
                <Navbar></Navbar>

                {/* Seccion de contenido       bg-white/10 */}
                <section id='about' className='mt-20 py-12 md:py-16 lg:py-24'>
                    <Hero></Hero>
                </section>

                <section id='inspiration' className='py-2 md:py-8 flex items-center justify-right'>
                    <p className="text-white text-lg mt-4">{quotes[0].q} — {quotes[0].a}</p>
                </section>

                <section id='experience' className='py-6 md:py-8 flex items-center justify-center'>
                    <Experience></Experience>
                </section>

                <section id='scroll' className='text-white'>
                    <FadeIn
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ amount: 'all', once: false }}
                        className="bg-blue-500"
                    >
                        <p className="text-white text-xl">Fade In animations testing</p>
                    </FadeIn>
                </section>

                <section id='education' className='text-white'>
                    <Framer/>
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
