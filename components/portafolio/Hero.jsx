'use client'

// Import de fuentes
import { newsreader, inter, fraunces, ebGaramond } from "../fonts";

// Import de animaciones
import TextType from "components/animations/textType";
import PixelHover from "components/animations/PixelHover";
import BlurText from "components/animations/BlurTextFall";
import FadeContent from "components/animations/fade";

// Otras librerias
import Image from "next/image";
import { useState, useEffect } from "react";


const Hero = ({}) => {
    // Reloj
    const [time, setTime] = useState("");
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString([], { 
                    hour: "2-digit", 
                    minute: "2-digit",
                    hour12: true 
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="relative h-[100svh] w-full overflow-hidden">
                <div className="absolute inset-5">
                    <img 
                        src="/images/edited_small_hand.png" 
                        className="rounded-xl inset-0 z-0 w-full h-full object-cover object-center select-none pointer-events-none" 
                    />
                </div>
                <div className="relative z-10 text-centerrelative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
                    <BlurText
                        text="Imagine a space"
                        delay={50}
                        animateBy="letters"
                        direction="top"
                        className={`${ebGaramond.className} glow text-5xl font-light tracking-tight leading-tight text-white`}
                    />
                </div>
                <div className="absolute bottom-10 left-5 right-5 z-10 flex items-center justify-between px-8 py-6 text-white/60 text-m">
                    <BlurText text={time} delay={100} animateBy="letters" direction="bottom" className={`${fraunces.className}`}/>
                    <BlurText text="Scroll to Explore" delay={300} animateBy="words" direction="bottom" className={`${fraunces.className} glow`}/>
                    <BlurText text="Madrid, Spain" delay={100} animateBy="letters" direction="bottom" className={`${fraunces.className}`}/>
                </div>
            </div>
            </FadeContent>
            <div className="mt-10 flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x w-11/12">
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-1 divide-y w-23/24">
                            <div className="flex items-center justify-center">
                                <PixelHover
                                    image="/images/profile.png"
                                />
                            </div>
                            <div className="text-4xl quantico-bold text-white">
                                <TextType 
                                    text={["Pedro R. Treviño", "Software Developer", "Cybersecurity Engineer"]}
                                    typingSpeed={25}
                                    pauseDuration={3000}
                                    showCursor={true}
                                    cursorCharacter="_"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-2">
                        <p className={`${newsreader.className} text-2xl text-[#f3e9e2]`}>
                            I am a computer science and cybersecurity master graduate with hands-on experience in software development at IBM of about 2 years on 
                            backend and frontend. My professional background combines a solid foundation in programming, automation, and systems integration with 
                            a growing specialization in secure development, ethical hacking, forensic analysis, and reverse engineering. I thrive in collaborative 
                            environments where communication, precision, and analytical thinking drive impactful solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hero;