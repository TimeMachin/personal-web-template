import FadeContent from "components/animations/fade";
import { newsreader, inter, fraunces, ebGaramond, roboto, playfair } from "../fonts";
import { useMemo } from 'react';
import { Quote, ExternalLink, Code2 } from 'lucide-react';
import SparkleButton from "components/StarGit";

const PROJECTS_DATA = [
    {
        title: "Windows Event Logs Analyzer", 
        company: "IMF - Thesis",
        description: "A Python-based forensic cybersecurity tool that ingests and analyzes Windows Event Logs to identify vulnerabilities, detect Indicators of Compromise, and flag abnormal system activity. It includes a PyQt6 desktop interface designed to clearly visualize security telemetry and highlight suspicious behavior.",
        techStack: ["Python3", "PyQt6", "Figma", "Git"], 
        status: "Personal", 
        link: "https://github.com/TimeMachin/Python-Log-Analyzer.git",
        linkPrev: "View Project",
        thought: "When we were given the option of what to do our thesis about, I picked the option that combined my different studies, software engineer and cyber security, I started by doing reasearch on the built-in programs windows has for this purpose of log analysis, I gather what I could for what my program should do, the MVP, requisites, mockups, tools, etc. At first, I thought of C++ for the development, but after problems with installation and documentation, the PyQT Python3 library was the choice I thought ideal",
        image: "/images/small_footer_2.png"
    }, 
    {
        title: "Red Hat Ansible Certified Content for IBM Z (OS IMS Collection)", 
        company: "IBM",
        description: "Open-source contributor to the Red Hat Ansible Certified Content for IBM Z (OS IMS Collection), delivering core code improvements, performance optimizations, and validated automation features. Expanded and strengthened test coverage across key system modules, with contributions formally credited in the project's upstream configuration.",
        techStack: ["Ansible", "JCL", "Python3", "Jenkins", "CI/CD"], 
        status: "Open Source", 
        link: "https://github.com/ansible-collections/ibm_zos_ims.git",
        linkPrev: "View On GitHub",
        thought: "I contributed",
        image: "/images/small_footer_2.png"
    }, 
    {
        title: "Portfolio Web Platform", 
        company: "Personal",
        description: "Built and deployed a modern, responsive Next.js portfolio platform serving as a centralized showcase for academic certifications, technical architectures, and curated code samples, optimized for production performance and long-term maintainability.",
        techStack: ["TypeScript", "HTML", "CSS", "TailWind", "Supabase", "SQL", "NODE"], 
        status: "Live", 
        link: "https://github.com/TimeMachin/personal-web-template.git",
        linkPrev: "View Code",
        thought: "This is where you are",
        image: "/images/small_footer_2.png"
    }
];

const Projects = ({}) => {
    const data = useMemo(
        () => PROJECTS_DATA.map((item, i) => ({ ...item, index: i })),
        []
    );

    return (
        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="relative h-[100svh] w-full overflow-y-scroll no-scrollbar">
                <div className="absolute inset-5 mt-21 md:mx-5 flex flex-col items-start justify-start">
                    {data.map((item) => { 
                        // newsreader, inter, fraunces, ebGaramond, roboto, playfair
                        return(
                            <div key={item.index} className={`rounded-xl bg-black/50 w-full flex flex-col ${item.index !== 0 ? "mt-15" : ""}`}>
                                <div className="relative h-28 overflow-hidden rounded-t-xl select-none">
                                    <img src="/images/small_footer_2.png" fill="true" className="object-cover" sizes="(max-width: 768px) 100vw, 400px"/>
                                    <div className="absolute inset-0" style={{background: `linear-gradient(180deg, #5ac8be00 40%, #0a0a0a99 100%)`,}}/>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Code2 size={34} style={{ color: "#5ac8be" }} strokeWidth={1.75} />
                                    </div>
                                </div>

                                <div className="flex items-center mt-3 select-none">
                                    <p className={`${playfair.className} glow flex-1 font-black ml-5 md:text-4xl text-xl`}>{item.title}</p>
                                    <p className={`${ebGaramond.className} flex flex justify-end mr-5 text-[#3be5d7] rounded-xl px-2 bg-[#1a514c] md:text-base text-sm`}>{item.status}</p>
                                </div>

                                <p className={`${newsreader.className} ml-7 text-white/50 md:text-base text-sm select-none`}>{item.company}</p>
                                <p className={`${fraunces.className} ml-9 mt-2 md:text-lg text-base select-none`}>{item.description}</p>

                                <div className="flex flex-wrap gap-2 mt-5 ml-5 select-none">
                                    {item.techStack.map((pair, statIdx) => (
                                        <div key={`${item.index}-${statIdx}`} className="bg-[#5ac8be] rounded-xl">
                                            <p className={`${ebGaramond.className} mx-3`}>{pair}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="h-px bg-gray-300 my-5" />
                                <span className="flex select-none">
                                    <Quote className="shrink-0 w-4 h-4 text-[#5ac8be]"/>
                                    <p className={`${fraunces.className} break-words whitespace-normal md:text-2xl text-xl pl-2`}>{item.thought}</p>
                                </span>

                                <span className="flex select-none mt-5 ml-5">
                                    <SparkleButton link={item.link} text={item.linkPrev} color={"#5ac8be"} />
                                </span>
                                
                            </div>
                        );
                    })}            
                </div>
            </div>
        </FadeContent>
    );
}

export default Projects;