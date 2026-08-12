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
                {/* Seccion de configuracion de fondo de pagina (To Do: que cambie el fondo de pantalla dependiendo de la seccion que se vea, esto hazlo dinamico para el scroll*/}
                <div className='bg-letterglitch fixed'>
                    {/* <DotMatrix/> */}
                    <DotGrid />
                </div>

                {/* Seccion de barra de navegacion */}
                <section id='navbar'>
                    <Navbar></Navbar>
                </section>
                
                {/* Seccion de contenido de presentacion */}
                <section id='about'>
                    <Hero></Hero>
                </section>

                {/* Seccion de contenido de experiencia laboral */}
                <section id='experience'>
                    <Experience></Experience>
                </section>

                {/* Seccion de contenido de educacion */}
                <section id='education' className='text-white'>
                    <Education></Education>
                </section>

                {/* Seccion de contenido de proyectos */}
                <section id='projects' className='text-white'>
                    <Projects></Projects>
                </section>

                {/* Seccion de contenido del footer */}
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
