"use client"
import { useState } from "react";
import Image from "next/image";
import {motion, useScroll, useTransform } from 'framer-motion';
import FadeContent from "./animations/fade";
import { newsreader, inter, fraunces, ebGaramond } from "./fonts";

export default function Navbar() {
  // State to manage the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Variable width size of navbar calculations
  const { scrollYProgress } = useScroll();
  const widthS = useTransform(scrollYProgress, (v) => {
  const cutoff = 0.20; // Porcentaje de scroll en el que la barra de navegacion alcanza su tamaño minimo
  const minW = 65;     // Limite de tamaño minimo de la barra de navegacion en porcentaje
  if (v <= cutoff) {
    const t = v / cutoff;              // 0..1
    return `${85 - (85 - minW) * t}%`; // 100% -> 75%
  }
  return `${minW}%`; // stay at 75% after 20%
});

  // Render the navbar
  return (
    <div className="fixed z-50 w-full">
      <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
        <motion.div style={{ width: widthS }} className='top-11 backdrop-blur-xs fixed left-1/2 transform -translate-x-1/2 px-4 bg-white/10 rounded-2xl shadow-lg px-6 py-2 border border-white/20'>
            <nav>
              <div>
                <div className="flex items-center justify-between">
                  
                  {/* Logo */}
                  <div>
                    <a href="#" className={`${newsreader.className} text-2xl italic text-[#f3e9e2]`} style={{ textDecoration: 'none' }}>Pedro.</a>
                  </div>

                  {/* Links desktop */}
                  <div className="hidden md:flex space-x-8">
                    <a href="#experience" className={`${fraunces.className} glow py-2 px-3 text-white hover:text-gray-300 no-underline font-semibold`}>Experience</a>
                    <a href="#education" className={`${fraunces.className} glow py-2 px-3 text-white hover:text-gray-300 no-underline font-semibold`}>Education</a>
                    <a href="#projects" className={`${fraunces.className} glow py-2 px-3 text-white hover:text-gray-300 no-underline font-semibold`}>Projects</a>
                    
                  </div>
                  <div className="hidden md:flex space-x-8"> 
                    <button className={`${fraunces.className} btn py-2 cursor-pointer px-3 text-black hover:text-gray-300 no-underline font-semibold`}
                    onClick={() => {window.location.href = "mailto:trevinop36@gmail.com";}}>
                      Get in touch
                    </button>
                  </div>

                  {/* Botón menú mobile */}
                  <button 
                    className="md:hidden text-white text-2xl cursor-pointer hover:scale-110" 
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? "X" : "☰"}
                  </button>
                </div>

                {/* Menú desplegable mobile animado */}
                <div
                  className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                > 
                  <div className="px-4 py-3 space-y-2 flex flex-col justify-between items-left gap-2">
                    <a href="#experience" onClick={() => setIsOpen(!isOpen)} className={`${fraunces.className} block text-white hover:text-gray-300 no-underline font-semibold`}>Experience</a>
                    <div className="h-px bg-gray-100 my-1" />
                    <a href="#education" onClick={() => setIsOpen(!isOpen)} className={`${fraunces.className} block text-white hover:text-gray-300 no-underline font-semibold`}>Education</a>
                    <div className="h-px bg-gray-100 my-1" />
                    <a href="#projects" onClick={() => setIsOpen(!isOpen)} className={`${fraunces.className} block text-white hover:text-gray-300 no-underline font-semibold`}>Projects</a>
                    <button className={`${fraunces.className} items-left mt-15 btn w-full py-2 cursor-pointer px-3 text-black hover:text-gray-300 no-underline font-semibold`}
                    onClick={() => {window.location.href = "mailto:trevinop36@gmail.com";}}>
                      Get in touch
                    </button>
                  </div>
                </div>
              </div>
            </nav>
        </motion.div>
      </FadeContent>
    </div>
  );
}