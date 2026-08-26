// Import Fonts and icons
import { newsreader, inter, fraunces, ebGaramond, playfair } from "../fonts";
import { MapPin, Quote } from 'lucide-react';

// Import of animations
import FadeContent from 'components/animations/fade';
import { useMemo } from 'react';

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
        reflexion: "Starting new studies is always difficult, coupled with that, the opportunity to study a master's degree came to be in another country, so it was a double challenge that I decided to face with this master's degree. During university, I saw a little bit of cybersecurity and being working at IBM I was able to get a small glimpse of the importance of this area, when I started the master's classes I felt pressured, although I recognized some things, I did not feel very prepared to face them, but little by little everything made sense; Forensics, ethical hacking, reverse engineering, everything entailed a challenge that I am proud to have overcome, but without a doubt the biggest challenge was the final project of the master's degree (TFM), among the various topics that I could have chosen, I chose the one that combined my role as a software developer with this master's degree in cybersecurity, a program that analyzed Windows security events, despite what it might seem, the development was not the most difficult, but the research, metrics and tools, in any case, I was up to the challenge, this also with advice from a professional from Deloitte"
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
        reflexion: "After a long preparation to obtain financial support to be able to study at this institution, I got a significant enough percentage of scholarship to be able to carry out my university studies here, it is one of the greatest achievements I have achieved in my life. In my time in this institute I was able to learn and develop critical thinking necessary for the professional life of an engineer, I had the opportunity to do various extracurricular activities, from sports to cultural, I met incredible people, both personally and professionally, without a doubt the institution offers the highest academic level in Mexico along with a few other universities, they encouraged me to give the best of me."
    }
]

const Education = ({}) => {
    const data = useMemo(
        () => EDUCATION_DATA.map((item, i) => ({ ...item, index: i })),
        []
    );
    return (
        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="relative min-h-svh w-full overflow-hidden">
                <div className="relative mx-5 mt-25 flex flex-col items-start justify-start select-none md:mx-10 md:mt-25">
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