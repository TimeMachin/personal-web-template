{/* Imports de Estilos */}
import '../styles/globals.css';
import '../styles/lightfall.css';

{/* Imports de Fondos */}
import Lightfall from 'components/backgrounds/Lightfall';
import DotMatrix from 'components/backgrounds/DotMatrix';
import DotGrid from 'components/backgrounds/DotGrid';
import LetterGlitch from '../components/backgrounds/LetterGlitch';
import Waves from 'components/backgrounds/Waves';

{/* Imports de animaciones */}
import FadeContent from 'components/animations/fade';

{/* Imports de componentes */}
import Navbar from 'components/navbar';
import GradualBlurMemo from 'components/animations/GradualBlur ';
import SpotlightCard from 'components/SpotlightCard';

{/* Imports de contenido */}
import Hero from 'components/portafolio/Hero';
import Experience from 'components/portafolio/Experience';
import Education from 'components/portafolio/Education';
import Projects from 'components/portafolio/Projects';
import Footer from 'components/portafolio/Footer';

{/* Scroll de triggers (BETA) */}
import { FadeIn } from 'components/animations/FadeIn'; // Este componente crea un div que se anima al hacer scroll, usando framer-motion con un efecto de aparecer
import ScrollProgress from 'components/animations/ScrollProgress'; // Este componente crea una barra de progreso que indica el porcentaje de scroll de la pagina, usando framer-motion


export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Pedro Personal Site'
    }
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body>
                {/* Seccion de configuracion de fondo de pagina */}
                <div className='bg-letterglitch fixed'>
                    {/* <DotMatrix/> */}
                    <DotGrid />
                </div>

                {/* Seccion de barra de navegacion */}
                <section id='navbar'>
                    <Navbar></Navbar>
                </section>
                
                {/* Seccion de contenido principal */}
                <section id='about'>
                    <Hero></Hero>
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
                    <Education></Education>
                </section>

                <section id='projects' className='text-white'>
                    <Projects></Projects>
                </section>

                <section id='footer' className='text-white min-h-screen'>
                    <Footer></Footer>
                </section>

                {/* Seccion de blur inferior */}
                <section id='blur-bottom' className='bg-letterglitch z-11'>
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
                </section>
            </body>
        </html>
    );
}
