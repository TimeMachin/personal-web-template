'use client'

// Import de fuentes
import { newsreader, inter, fraunces, ebGaramond } from "../fonts";

// Import de animaciones
import BlurText from "components/animations/BlurTextFall";
import FadeContent from "components/animations/fade";
import FlipFadeText from "components/animations/FlipText";
import ScrollText from "components/animations/ScrollText";

// Otras librerias
import { useState, useEffect } from "react";

// APIS
import GetQuote from "src/lib/api/QuotesHandler";
import GetWeather from "src/lib/api/WeatherHandler";


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
    const weather = GetWeather();
    return (
        <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="relative h-[100svh] w-full overflow-hidden">
                <div className="absolute inset-5">
                    <img 
                        src="/images/edited_small_hand.png" 
                        className="rounded-xl inset-0 z-0 w-full h-full object-cover object-center select-none pointer-events-none" 
                    />
                </div>
                <div className="w-full relative z-10 text-center z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
                    <FlipFadeText
                    words={["SOFTWARE ENGINEER", "FULLSTACK DEVELOPER", "PROBLEM SOLVER", "CYBERSECURITY ENTHUSIAST", "CLOUD ENTHUSIAST"]}
                    className={`${ebGaramond.className} glow font-light tracking-tight leading-tight text-white`}
                    />
                    <GetQuote />
                </div>
                <div className="absolute bottom-10 left-5 right-5 z-10 md:px-20 px-4 py-6 text-white/60 text-m">
                    <div className="flex items-center">
                        <div className="flex-1">
                            <BlurText text={`Madrid, Spain | ${weather.props.children}°C`} delay={100} animateBy="letters" direction="bottom" className={`${fraunces.className}`}/>
                        </div>
                        <div className="flex-none">
                            <BlurText text="Scroll to Explore" delay={300} animateBy="words" direction="bottom" className={`${fraunces.className} glow`}/>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <BlurText text={time} delay={100} animateBy="letters" direction="bottom" className={`${fraunces.className}`}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[100svh] overflow-hidden w-full flex flex-col">
                <div className="flex-1 flex items-center justify-center px-20 ">
                    <p className={`${newsreader.className} text-5xl text-[#f3e9e2] wrap-balance text-center overflow-hidden`}>
                        I am a computer science and cybersecurity master graduate with hands-on experience in software development at IBM of about 2 years on backend and frontend. My professional background combines a solid foundation in programming, automation, and systems integration with a growing specialization in secure development, ethical hacking, forensic analysis, and reverse engineering. I thrive in collaborative environments where communication, precision, and analytical thinking drive impactful solutions.
                    </p>
                </div>
                <div className="flex items-center" >
                    <div className="flex-[1] flex justify-center items-center">
                        <img src="/images/trust.png" width="75%" className="object-cover object-center select-none pointer-events-none" />
                    </div>
                    <div className="flex-[4] flex justify-end overflow-hidden relative">
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-black/100 via-black/50 to-transparent"/>
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-black/100 via-black/50 to-transparent"/>
                        <ScrollText className="min-w-full relative z-0" text="Welcome to my portfolio!" textFont={{ fontFamily: `${ebGaramond.className}`, fontSize: "30" }}/>
                    </div>
                </div>
            </div>
        </FadeContent>
    );
}

export default Hero;