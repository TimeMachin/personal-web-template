'use client'
import TextType from "components/animations/textType";
import SpotlightCard from "components/SpotlightCard";
import { FadeIn } from "components/animations/FadeIn";
import FadeContent from "components/animations/fade";
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { newsreader, inter, fraunces, ebGaramond, roboto, playfair } from "../fonts";
import { MapPin, CircleDot } from 'lucide-react';

const TIMELINE_DATA = [
  {
    company: 'IBM\'23',
    team: 'Ansible',
    dateStart: '2023',
    dateEnd: '2025',
    location: "Guadalajara · Remote",
    position: 'Software Developer',
    peer: {
      name: "Miriam Menchaca Rodriguez", 
      position: "Z System SW Development Manager", 
      quote: "He saved the company", 
      contact: "https://www.linkedin.com/in/miriam-rodriguez-menchaca/"
    },
    activities: [
      'Collaborated with the Watson Automation and Ansible Solutions Automation teams to architect, develop, and maintain enterprise backend automation workflows tailored for IBM Z mainframe environments.',
      'Engineered and executed comprehensive testing protocols for 15+ Red Hat Ansible modules within the IBM Z IMS Collection (v1.3.0), identifying and troubleshooting critical functional and dependency bugs to improve release velocity and reduce production bug occurrences by ~60%.',
      'Supported cross-functional engineering teammates by analyzing and debugging code, documenting system dependencies, and delivering technical context during onboarding to ensure team alignment'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    reflexion: 'After an incredible internship in the Blue Program, I was offered a full time position which I felt honored to accept, this further continue some of the work I did as an Intern and got involved in new activities accoriding my new responsabilities',
  },
  {
    company: 'IBM\'22',
    team: 'Ansible',
    dateStart: '2022',
    dateEnd: '2023',
    location: "Guadalajara · Remote",
    position: 'Software Developer',
    peer: {
      name: "Miriam Menchaca Rodriguez", 
      position: "Z System SW Development Manager", 
      quote: "He saved the company", 
      contact: "https://www.linkedin.com/in/miriam-rodriguez-menchaca/"
    },
    activities: [
      'Spearheaded the modern migration of legacy configuration and provisioning workflows from JCL to Ansible for ECmachines, successfully automating manual operations and reducing end-to-end provisioning time by approximately 40%.',
      'Modernized a core provisioning repository by integrating a next-generation Ansible Solutions Automation library and systematically validating infrastructure behavior across dedicated staging environments.',
      'Diagnosed and documented critical usability roadblocks and functional gaps in the new automation library, pro-viding actionable feedback to optimize reliability and documentation clarity for broader team adoption.'
    ],
    imageSrc: 'https://ix-marketing.imgix.net/autocompress.png?auto=format,compress&w=1946',
    reflexion: 'Well, as my first internship, I was priviliged to got into one of the biggest tech companies, I felt so lucky and I\'m grateful for the oportunity I had to grow professionaly with the guidance of such amazing people',
  },
  {
    company: 'ITESM',
    team: 'Site Factory Web',
    dateStart: '2021',
    dateEnd: '2022',
    location: "Monterrey · Mexico",
    position: 'Web Development Intern',
    peer: {
      name: "Karla Ibarra Ramirez", 
      position: "Monterrey Region TecFood Leader", 
      quote: "He saved the Tec",
      contact: "https://www.linkedin.com/in/karla-ibarra-ramirez-8bba7766/"
    },
    activities: [
      'Led the UI/UX design and frontend development of an official university campus web application engineered to map, index, and organize commercial data for ~200 campus restaurant vendors across 28 Mexican states',
      'Structured and deployed highly responsive, localized content block pages for individual vendors, curating multi-media assets from stakeholder representatives to increase organic web page visits by an estimated 85%',
    ],
    imageSrc: 'https://ix-marketing.imgix.net/bg-remove_after.png?auto=format,compress&w=1946',
    reflexion: 'While I was studying I had the opportunity to work on the development of the catering site of ITESM.',
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
            <div className="text-white md:w-[85%] md:h-full w-full h-[90%] relative overflow-y-scroll rounded-xl">
              <div className="absolute rounded-xl left-0 top-0 bottom-0 w-full z-0 overflow-hidden">
                <img 
                    src={selected.imageSrc}
                    className="absolute left-0 top-0 h-full w-full object-cover select-none pointer-events-none blur-sm" 
                  />
                  <div className="absolute inset-0 bg-black/50 z-5" />
              </div>
                
              <div className="relative z-10 h-full py-5 mx-5">
                <div className="h-full overflow-y-scroll no-scrollbar ">
                <AnimatePresence mode="wait">
                  <motion.div key={activeIndex} initial={{ opacity: 0, x: 50}} animate={{ opacity: 1, x: 0}} exit={{ opacity: 0, x: 50}} transition={{ duration: 0.15 }} style={{ height: '100%' }}>
                    <div className="flex w-full">
                      <div className={`${fraunces.className} flex items-center justify-start w-full text-white/[.75] text-sm`}>
                        {selected.dateStart} — {selected.dateEnd}
                      </div>
                      <div className={`${fraunces.className} flex items-center justify-end w-full text-white/[.75] text-sm`}>
                        <MapPin className="w-4 h-4"/> {selected.location}
                      </div>
                    </div>
                    <div className={`${newsreader.className} md:mt-6 mt-4 md:text-4xl text-xl font-bold`}>
                      {selected.position}
                    </div>
                    <div className={`${playfair.className} text-sm font-thin text-white/[.75]`}>
                      {selected.team} team
                    </div>
                    <div className={`${fraunces.className} md:mt-5 mt-4 font-medium md:text-xl text-lg`} style={{ wordBreak: "break-word" }}>
                      {selected.reflexion}
                    </div>

                    <ul className="pl-5 md:mt-5 mt-4 font-normal text-base md:text-xl"
                      style={{wordBreak: "break-word"}}
                    >
                      {selected.activities.map((b, i) => (
                        <li key={i} className={`${playfair.className} flex items-start gap-2`}>
                          <CircleDot className="text-blue-400 w-3 h-3 shrink-0 mt-2" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="md:mt-10 mt-5 w-full grid grid-cols-2 gap-2 border-1 border-white">
                      <div className="flex items-center justify-center">
                        asd
                      </div>
                      <div className="flex items-center justify-center">
                        hjkhjk
                      </div>
                    </div>
                    
                    <div id="testimony" className="mt-5 border-l-2 border-blue-400 pl-4">
                      <div className={`${fraunces.className} break-words whitespace-normal md:text-2xl text-lg`}>
                        "{selected.peer.quote}"
                      </div>
                      <div className={`${inter.className} text-xs text-white/[.6]`}>
                        {selected.peer.name} · {selected.peer.position}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="text-white md:w-[15%] md:h-full w-full h-[10%] md:shrink-0 flex md:flex-col z-12 md:z-1 items-center justify-center">
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
