import Link from 'next/link';
import Prism from './Prism';
import Balatro from './Balatro';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm">
                <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                    <Prism
                        animationType="rotate"
                        timeScale={0.5}
                        height={3.5}
                        baseWidth={5.5}
                        scale={3.6}
                        hueShift={0}
                        colorFrequency={1}
                        noise={0.5}
                        glow={1}
                    />
                </div>
                <Link
                    href="https://kinsta.com/es/base-de-conocimiento/next-js/"
                    className="decoration-dashed text-primary underline-offset-8"
                >
                    Next.js on Netlify
                </Link>
                <Balatro
                isRotate={false}
                mouseInteraction={true}
                pixelFilter={700}
                />
            </p>
        </footer>
    );
}
