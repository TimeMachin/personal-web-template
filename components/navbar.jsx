"use client"
import { useState } from "react";
import Image from "next/image";
import {motion, useScroll, useTransform } from 'framer-motion';

import FadeContent from "./animations/fade";

export default function Navbar() {
  // State to manage the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Variable width size of navbar calculations
  const { scrollYProgress } = useScroll();
  const widthS = useTransform(scrollYProgress, (v) => {
  const cutoff = 0.20; // Porcentaje de scroll en el que la barra de navegacion alcanza su tamaño minimo
  const minW = 75;     // Limite de tamaño minimo de la barra de navegacion en porcentaje
  if (v <= cutoff) {
    const t = v / cutoff;              // 0..1
    return `${100 - (100 - minW) * t}%`; // 100% -> 75%
  }
  return `${minW}%`; // stay at 75% after 20%
});

  // Render the navbar
  return (
    <motion.div style={{ width: widthS }} className='backdrop-blur-md fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 bg-white/10 rounded-4xl shadow-lg px-6 py-3 border border-white/50'>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <nav>
          <div>
            <div className="flex items-center justify-between">
              
              {/* Logo */}
              <div className="text-2xl font-bold text-white">
                <Image
                    src="/images/ibm-logo.svg"
                    width={50}
                    height={50}
                    alt="Contact"
                />
              </div>

              {/* Links desktop */}
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="py-2 px-3 text-white hover:text-gray-300 no-underline font-semibold">About</a>
                <a href="#experience" className="py-2 px-3 text-white hover:text-gray-300 no-underline font-semibold">Experience</a>
                <a href="#education" className="py-2 px-3 text-white hover:text-gray-300 no-underline font-semibold">Education</a>
                <a href="#projects" className="py-2 px-3 text-white hover:text-gray-300 no-underline font-semibold">Projects</a>
                <a href="#contact" className="py-2 px-3 text-white hover:text-gray-300 no-underline font-semibold">Contact</a>
              </div>

              {/* Botón menú mobile */}
              <button 
                className="md:hidden text-white text-2xl cursor-pointer hover:scale-110" 
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>

            {/* Menú desplegable mobile animado */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/50 px-4 py-3 space-y-2">
                <a href="#about" onClick={() => setIsOpen(!isOpen)} className="block text-white hover:text-gray-300 no-underline font-semibold">About</a>
                <a href="#experience" onClick={() => setIsOpen(!isOpen)} className="block text-white hover:text-gray-300 no-underline font-semibold">Experience</a>
                <a href="#education" onClick={() => setIsOpen(!isOpen)} className="block text-white hover:text-gray-300 no-underline font-semibold">Education</a>
                <a href="#projects" onClick={() => setIsOpen(!isOpen)} className="block text-white hover:text-gray-300 no-underline font-semibold">Projects</a>
                <a href="#contact" onClick={() => setIsOpen(!isOpen)} className="block text-white hover:text-gray-300 no-underline font-semibold">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </FadeContent>
    </motion.div>
  );
}