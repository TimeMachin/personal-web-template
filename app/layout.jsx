import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import LetterGlitch from '../components/LetterGlitch';

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
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <LetterGlitch
                        glitchSpeed={50}
                        centerVignette={true}
                        outerVignette={false}
                        smooth={true}
                    />
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                        <a href="https://wa.me/34687093223/" target="_blank">
                            <img src="https://ebweb.es/wp-content/uploads/2020/09/logo-wasap.png" width="50" height="50" alt="Whatsapp logo"/>
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}
