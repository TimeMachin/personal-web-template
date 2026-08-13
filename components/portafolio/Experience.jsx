'use client'
import TextType from "components/animations/textType";
import SpotlightCard from "components/SpotlightCard";
import { FadeIn } from "components/animations/FadeIn";
import FadeContent from "components/animations/fade";
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TIMELINE_DATA = [
  {
    company: 'IBM',
    dateStart: '', 
    dateEnd: '',
    position: 'Software Developer',
    subtitle: 'ITESM',
    bullets: ['Walked along the shore', 'Took photos', 'Watched the light fade'],
    imageSrc:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    text: 'A slow, relaxing moment—everything felt quiet and reset my head.',
  },
    {
    company: 'IBM',
    dateStart: '', 
    dateEnd: '',
    position: 'Blue Program Intern',
    subtitle: 'Fog + pine + fresh air',
    bullets: ['Hiked a new route', 'Felt grounded', 'Found a small overlook'],
    imageSrc:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    text: 'The mist made everything feel cinematic, and the climb was worth it.',
  },
    {
    company: 'ITESM',
    dateStart: '', 
    dateEnd: '',
    position: 'Web Developer Intern',
    subtitle: 'Fog + pine + fresh air',
    bullets: ['Hiked a new route', 'Felt grounded', 'Found a small overlook'],
    imageSrc:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    text: 'The mist made everything feel cinematic, and the climb was worth it.',
  },
];

const Experience = ({}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const selected = TIMELINE_DATA[activeIndex];

  const timelineItems = useMemo(
        () => TIMELINE_DATA.map((item, i) => ({ ...item, index: i })),
        []
    );

    return (
        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="flex flex-col relative h-[100svh] w-full overflow-hidden items-center justify-center">
                <div className="absolute inset-5 border-1 border-white/25 mt-21">
                    <div className="h-full flex">
                        <div className="text-white w-[85%] h-full border-1 border-indigo-500">
{/*                             <h1 className="text-white">
                                Describe the work experience (or internships)
                            </h1> */}

<AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.15 }}
                style={{ height: '100%' }}
              >
                <div style={{ marginTop: 8, fontSize: 22, fontWeight: 950, lineHeight: 1.15 }}>
                  {selected.position}
                </div>

                <div style={{ marginTop: 6, opacity: 0.95, fontWeight: 800 }}>{selected.subtitle}</div>

                <div
                  style={{
                    marginTop: 12,
                    opacity: 1,
                    lineHeight: 1.6,
                    maxHeight: 40,
                    overflow: 'hidden',
                  }}
                >
                  {selected.text}
                </div>

                <ul
                  style={{
                    margin: '12px 0 0',
                    paddingLeft: 18,
                    opacity: 1,
                    lineHeight: 1.65,
                    maxHeight: 74,
                    overflow: 'hidden',
                  }}
                >
                  {selected.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div style={{ marginTop: 12, height: 420 }}>
                  <img
                    src={selected.imageSrc}
                    alt={selected.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 14,
                      display: 'block',
                      border: '1px solid rgba(255,255,255,0.10)',
                      background: 'rgba(255,255,255,0.03)',
                    }}
                  />
                </div>


              </motion.div>
            </AnimatePresence>


                        </div>
                        <div className="text-white w-[15%] h-full border-1 border-red-500">
{/*                             <h2 className="text-white">
                                Validates how you've applied it in real settings
                            </h2> */}

{timelineItems.map((item) => {
                const isActive = item.index === activeIndex;

                return (
                  <motion.button
                    key={item.index}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(item.index);
                    }}
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      padding: '12px 6px',
                      borderRadius: 16,
                      border: isActive ? '1px solid rgba(255,255,255,0.32)' : '1px solid rgba(255,255,255,0.10)',
                      background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                      cursor: 'pointer',
                      color: '#fff',
                      flex: '0 0 auto',
                    }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: 999,
                          background: isActive ? '#fff' : 'rgba(255,255,255,0.35)',
                          boxShadow: isActive ? '0 0 0 6px rgba(255,255,255,0.07)' : 'none',
                          flex: '0 0 auto',
                        }}
                      />
                      <div style={{ fontSize: 12, fontWeight: 950, opacity: isActive ? 1 : 0.85 }}>
                        {item.company}
                      </div>
                    </div>
                  </motion.button>
                );
              })}

                        </div>
                    </div>
                </div>
                
                {/* <Timeline></Timeline> */}
            </div>
        </FadeContent>
    );
}

export default Experience;