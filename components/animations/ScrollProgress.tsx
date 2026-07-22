'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';


const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, (v) => {
    const cutoff = 0.20; // 10%
    const minScale = 0.85;

    if (v <= cutoff) {
        // Linear from 1 -> 0.85 across 0..0.10
        const t = v / cutoff;          // 0..1
        return 1 - (1 - minScale) * t;
    }
    return minScale; // clamp after cutoff
});
    return (
        <motion.div
        className="fixed top-0 left-0 h-1 z-1 bg-red-600 origin-left w-full"
        style={{ scaleX}}
        >
        </motion.div>
    );
};

export default ScrollProgress;


