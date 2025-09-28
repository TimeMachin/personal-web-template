import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import LetterGlitch from '../components/LetterGlitch';
import { fixedSize } from './blobs/generator';

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
                <div 
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -1,         // Se queda atrás
                        overflow: "hidden", // Evita scroll raro
                        opacity: 1
                    }}
                >
                    <LetterGlitch
                        glitchSpeed={10}
                        centerVignette={true}
                        outerVignette={true}
                        smooth={true}
                    />
                </div>







{/*                 <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />
                </div> */}





                    <nav className="sticky top-4 z-50">
                        <div className="max-w-6xl mx-auto px-4" style={{paddingTop: "25px"}}>
                            <div className="flex items-center justify-between 
                                            bg-white/10 backdrop-blur-md 
                                            rounded-4xl shadow-lg 
                                            px-6 py-3
                                            border border-white/50">
                                <div className="text-2xl font-bold text-white">Pedro Rodriguez Treviño</div>
                                <div className="hidden md:flex space-x-8">
                                    <a href="#about" className="nav-link py-2 px-3 text-white hover:text-gray-300">About</a>
                                    <a href="#experience" className="nav-link py-2 px-3 text-white hover:text-gray-300">Experience</a>
                                    <a href="#education" className="nav-link py-2 px-3 text-white hover:text-gray-300">Education</a>
                                    <a href="#skills" className="nav-link py-2 px-3 text-white hover:text-gray-300">Skills</a>
                                    <a href="#projects" className="nav-link py-2 px-3 text-white hover:text-gray-300">Projects</a>
                                    <a href="#contact" className="nav-link py-2 px-3 text-white hover:text-gray-300">Contact</a>
                                </div>
                                <button className="md:hidden">
                                    <i className="fas fa-bars text-gray-800 text-2xl"></i>
                                </button>
                            </div>
                        </div>
                    </nav>







                    <a href="https://wa.me/34687093223/" target="_blank" className="fixed bottom-4 right-4 z-50">
                        <img src="https://ebweb.es/wp-content/uploads/2020/09/logo-wasap.png" width="50" height="50" alt="Whatsapp logo"/>
                    </a>

            </body>
        </html>
    );
}
