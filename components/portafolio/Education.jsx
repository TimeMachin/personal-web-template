import Framer from 'components/Framer'
import FadeContent from 'components/animations/fade';
import { newsreader, inter, fraunces, ebGaramond, playfair } from "../fonts";
import SparkleButton from 'components/StarGit';
import { useMemo } from 'react';
import { MapPin, Quote } from 'lucide-react';

const EDUCATION_DATA = [
    {
        school: "IMF Smart Education X Deloitte", 
        description: "A cybersecurity-focused school built and taught by active Deloitte Cyber Risk Services professionals, based at Deloitte's EMEA Cybersphere Center — one of Europe's cybersecurity operations hubs. Programs lean heavily on hands-on simulation rather than lecture-only formats.",
        location: "Madrid, Spain",
        study: "CyberSecurity Master's Degree", 
        graduation: "Janury, 2026",
        TFM: {
            title: "Windows Security Events Analyzer", 
            description: "Built with Python3 to detect anomalous system behavior from Windows security logs."
        },
        relevantCourses: ["Ethical Hacking", "Forensyc Analysis", "Reverse Engineering", "Smartphone Security"],
        reflexion: "I finished the TFM YAAAAAAAAAY!!!!!!!"
    }, 
    {
        school: "ITESM", 
        description: "One of Latin America's top-ranked universities for engineering and technology, known for a strong industry-partnership culture and a rigorous computer science program based in Monterrey, Mexico.",
        location: "Monterrey, Mexico",
        study: "Computer Science Bachelor's Degree", 
        graduation: "December, 2023",
        achievments: {
            GPA: 3.9, 
            studenSociaties: ["SOCTE", "Japanese Culture Club"]
        },
        relevantCourses: ["Device Interconnection", "Network & Software Systems Security Integration", "Wide Area Networks (WAN) & Distributed Services Implementation"],
        reflexion: "SOMOS TEC, nah ya en serio, fue un gran hito para mi el haber entrado a esta universidad tan prestigiosa, y el prestigio no se queda solamente en el nombre, las clases y profesores estuvieron a la altura, alentandome a dar lo mejor de mi academicamente"
    }
]

const Education = ({}) => {
    const data = useMemo(
        () => EDUCATION_DATA.map((item, i) => ({ ...item, index: i })),
        []
    );
    return (
        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="relative h-[100svh] w-full overflow-y-scroll no-scrollbar">
                <div className="select-none absolute md:inset-10 inset-5 md:mt-18 mt-21 flex flex-col items-start justify-start ">
                    {data.map((item) => (
                    <div key={item.index} className="relative pl-5 w-full">
                        <span className="absolute left-[1px] top-2 h-3 w-3 rounded-full bg-[#d4a15c]" />
                        {item.index !== data.length - 1 && (
                        <div className="absolute bottom-0 left-[6px] top-7 border-l-2 border-white/30" />
                        )}

                        {/* Content */}
                        <div className="flex w-full flex-col md:mt-1">
                            <div className="flex w-full">
                                <div className={`${fraunces.className} flex items-center justify-start w-full text-white/[.75] text-sm`}>
                                    <p className="text-gray-400">{item.graduation}</p>
                                </div>
                                <div className={`${fraunces.className} flex items-center justify-end w-full text-white/[.75] text-sm`}>
                                    <MapPin className="w-4 h-4"/> {item.location}
                                </div>
                            </div>                
                            <div>
                                <p className={`${playfair.className} glow flex-1 font-black ml-5 md:text-4xl text-xl`}>{item.study}</p>
                                <p className={`${newsreader.className} mt-2 ml-7 text-white/50 md:text-base text-sm select-none`}>{item.school}</p>
                                <p className={`${fraunces.className} ml-9 mt-2 md:text-lg text-base select-none`}>{item.description}</p>
                            </div>
                            {item.TFM !== undefined && (
                                <div className='flex flex-col border-l-2 border-[#d4a15c] pl-4 ml-15 mt-5'>
                                    <p className={`${newsreader.className} md:text-lg text-lg text-[#d4a15c]`}>Master's thesis</p>
                                    <p className={`${inter.className} md:text-2xl text-xl`}>{item.TFM.title}</p>
                                    <p className={`${playfair.className} text-sm text-white/40`}>{item.TFM.description}</p>
                                </div>
                            )}
                            {item.achievments !== undefined && (
                                <div className='flex flex-col border-l-2 border-[#d4a15c] pl-4 ml-15 mt-5'>
                                    <p>
                                        <span className={`${fraunces.className} font-black md:text-6xl text-4xl`}>{item.achievments.GPA}</span>
                                        <span className='text-white/40'>/4</span>
                                    </p>
                                    <div className="flex flex-wrap gap-2 select-none">
                                        {item.achievments.studenSociaties.map((pair, statIdx) => (
                                            <div key={`${item.index}-${statIdx}`} className="bg-white rounded-xl">
                                                <p className={`${ebGaramond.className} mx-2 text-[#d4a15c]`}>{pair}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex flex-wrap gap-2 mt-5 ml-5 select-none">
                                {item.relevantCourses.map((pair, statIdx) => (
                                    <div key={`${item.index}-${statIdx}`} className="bg-[#d4a15c] rounded-xl">
                                        <p className={`${ebGaramond.className} mx-3`}>{pair}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="h-px bg-gray-300 my-5 mx-20" />
                            <p className="flex select-none pb-15">
                                <Quote className="shrink-0 w-4 h-4 text-[#d4a15c]"/>
                                <span className={`${fraunces.className} break-words whitespace-normal md:text-2xl text-xl pl-2`}>{item.reflexion}</span>
                            </p>
                        </div>
                    </div>
                    ))}


                </div>
            </div>
        </FadeContent>
    );
}

export default Education;