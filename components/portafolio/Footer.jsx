'use client';
import FadeContent from "components/animations/fade";
import BlurText from "components/animations/BlurTextFall";
import Contact from "components/Contact";
import { newsreader, inter, fraunces, ebGaramond, roboto, playfair } from "../fonts";

const Footer = ({}) => {
    return (
        <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="relative h-[100svh] w-full overflow-hidden">
                <div className="absolute inset-10">
                    <img 
                        src="/images/small_footer_2.png" 
                        className="rounded-xl inset-0 z-0 w-full h-full object-cover object-center select-none pointer-events-none" 
                    />
                </div>
                <div className="w-full relative z-10 text-center relative z-10 text min-h-screen flex flex-col items-center justify-center text-center px-6">
                    <div className={`${roboto.className} font-light text-white text-2xl mb-4`}>
                        That's the story so far!
                    </div>
                    <div className={`${ebGaramond.className} font-semibold glow text-white text-6xl mb-4`}>
                        Let's write a new part!
                    </div>
                    <button className={`${fraunces.className} btn py-2 mt-10 cursor-pointer px-3 text-black hover:text-gray-300 no-underline font-semibold`}
                            onClick={() => {window.location.href = "mailto:trevinop36@gmail.com";}}>
                        Get in touch
                    </button>
                </div>
                <div className="absolute bottom-10 left-5 right-5 z-10 px-18 py-2 text-white text-m z-12">
                <div className="h-px bg-gray-300 my-1" />
                    <div className="flex items-center">
                        <div className="flex-1">
                            <BlurText text="© 2026 Pedro" delay={200} animateBy="words" direction="bottom" className={`${fraunces.className}`}/>
                        </div>
                        <div className="flex-none">
                            <Contact></Contact>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <BlurText text="Open To Work" delay={200} animateBy="words" direction="bottom" className={`${fraunces.className} glow`}/>
                        </div>
                    </div>
                </div>
            </div>
        </FadeContent>
    );
}

export default Footer;