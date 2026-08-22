import Framer from 'components/Framer'
import FadeContent from 'components/animations/fade';
import { newsreader, inter, fraunces, ebGaramond } from "../fonts";
import SparkleButton from 'components/StarGit';
import { useMemo } from 'react';

const EDUCATION_DATA = [
    {
        school: "IMF Smart Education X Deloitte", 
        location: "Madrid, Spain",
        study: "CyberSecurity Master's Degree", 
        graduation: "Janury, 2026",
        TFM: {
            title: "Windows Security Events Analyzer", 
            description: "Built with Python3 to detect anomalous system behavior from Windows security logs."
        },
        relevantCourses: ["Ethical Hacking", "Forensyc Analysis", "Reverse Engineering", "Smartphone Security"],
        reflexion: "To be written"
    }, 
    {
        school: "ITESM", 
        location: "Monterrey, Mexico",
        study: "Computer Science Bachelor's Degree", 
        graduation: "December, 2023",
        achievments: {
            GPA: 3.9, 
            studenSociaties: ["SOCTE", "Japanese Culture Club"]
        },
        relevantCourses: ["Ethical Hacking", "Forensyc Analysis", "Reverse Engineering", "Smartphone Security"],
        reflexion: "To be written"
    }
]

const Education = ({}) => {
    const data = useMemo(
        () => EDUCATION_DATA.map((item, i) => ({ ...item, index: i })),
        []
    );
    return (
/*         <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center">
                <div>
                    <SparkleButton></SparkleButton>
                </div>
                <div>
                    <Framer imageMode='custom' customImage={{src: "/images/small_footer_2.png"}} title='YouTube' link='https://youtube.com' textColor='#ffffff' font={{fontFamily: `${fraunces.className}`, fontSize: "44px"}}/>
                </div>
                <h1>
                    Education goes here!
                </h1>
                <h2>
                    Research, thesis, relevant program
                </h2>
            </div>
        </FadeContent> */
        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="relative h-[100svh] w-full border-1 border-white">
                <div className="absolute inset-5 mt-21 flex flex-col items-start justify-start border-1 border-white overflow-y-scroll no-scrollbar">
                    {data.map((item) => (
                    <div key={item.index} className="relative pl-5">
                        {/* Circle */}
                        <span className="absolute left-[1px] top-2 h-3 w-3 rounded-full bg-[#d4a15c]" />

                        {/* Vertical line, except for the last item */}
                        {item.index !== data.length - 1 && (
                        <div className="absolute bottom-0 left-[6px] top-7 border-l-2 border-white/30" />
                        )}

                        {/* Content */}
                        <div className="flex w-full flex-col">
                            <p className="text-gray-400">{item.graduation}</p>
                            <div>
                                <p className="font-serif text-xl italic font-bold">{item.study}</p>
                                <p className="font-semibold">{item.school}</p>
                                <p className="font-serif text-xl italic font-bold">{item.study}</p>
                                <p className="font-semibold">{item.school}</p>
                            </div>

                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </FadeContent>
    );
}

export default Education;