'use client'
import TextType from "components/animations/textType";
import SpotlightCard from "components/SpotlightCard";
import { FadeIn } from "components/animations/FadeIn";
import FadeContent from "components/animations/fade";
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { newsreader, inter, fraunces, ebGaramond, roboto, playfair } from "../fonts";

const TIMELINE_DATA = [
  {
    company: 'IBM',
    dateStart: '2022',
    dateEnd: '2024',
    position: 'Software Developer',
    manager: 'Miriam Menchaca Rodriguez',
    activities: [
      'Walked along the shore',
      'Took photos',
      'Watched the light fade'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    reflexion: 'I learned a lot in my time at IBM, it was my first "serious" experience, I dive into projects that made me learn how to thrive even in the unknown',
  },
  {
    company: 'IBM',
    dateStart: '2021',
    dateEnd: '',
    position: 'Software Developer',
    manager: 'Miriam Menchaca Rodriguez',
    activities: [
      'Walked along the shore',
      'Took photos',
      'Watched the light fade'
    ],
    imageSrc: 'https://ix-marketing.imgix.net/autocompress.png?auto=format,compress&w=1946',
    reflexion: 'A slow, relaxing moment—everything felt quiet and reset my head.',
  },
  {
    company: 'ITESM',
    dateStart: '2021',
    dateEnd: '',
    position: 'Web Development Intern',
    manager: 'Rocio de la Garza',
    activities: [
      'Walked along the shore',
      'Took photos',
      'Watched the light fade'
    ],
    imageSrc: 'https://ix-marketing.imgix.net/bg-remove_after.png?auto=format,compress&w=1946',
    reflexion: 'A slow, relaxing moment—everything felt quiet and reset my head.',
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
        <div className="absolute inset-5 mt-21">
          <div className="h-full flex md:flex-row flex-col">
            <div className="text-white md:w-[85%] md:h-full w-full h-[90%] border-1 border-indigo-500 overflow-y-scroll no-scrollbar">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50}}
                  animate={{ opacity: 1, x: 0}}
                  exit={{ opacity: 0, x: 50}}
                  transition={{ duration: 0.15 }}
                  style={{ height: '100%' }}
                >
                  <div className={`${newsreader.className}`} style={{ marginTop: 8, fontSize: 22, fontWeight: 950, lineHeight: 1.15 }}>
                    {selected.position}
                  </div>

                  <div className={`${inter.className}`} style={{ marginTop: 6, opacity: 0.95, fontWeight: 800 }}>
                    {selected.manager}
                  </div>

                  <div className={`${fraunces.className}`} style={{ marginTop: 12, opacity: 1, lineHeight: 1.6, wordBreak: "break-word" }}>
                    {selected.reflexion}
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
                    {selected.activities.map((b, i) => (
                      <li className={`${playfair.className}`} key={i}>{b}</li>
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

            <div className="text-white md:w-[15%] md:h-full w-full h-[10%] md:shrink-0 border-1 border-red-500 flex md:flex-col z-12 md:z-1 items-center justify-center">
              <div className="w-full grid grid-cols-3 gap-2 px-2 py-2 md:grid-cols-1">
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
                      className="md:text-start text-center w-full"
                      style={{
                        padding: '12px 6px',
                        borderRadius: 16,
                        border: isActive
                          ? '1px solid rgba(255,255,255,0.32)'
                          : '1px solid rgba(255,255,255,0.10)',
                        background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                        cursor: 'pointer',
                        color: '#fff',
                      }}
                      whileHover={{ scale: 1.05 }}
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
        </div>
      </div>
    </FadeContent>
  );
}

export default Experience;
