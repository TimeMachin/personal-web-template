import FadeContent from "components/animations/fade";
import { useMemo } from 'react';

const PROJECTS_DATA = [
    {
        title: "Python Log Analyzer", 
        description: "A Python-based forensic cybersecurity tool that ingests and analyzes Windows Event Logs to identify vulnerabilities, detect Indicators of Compromise, and flag abnormal system activity. It includes a PyQt6 desktop interface designed to clearly visualize security telemetry and highlight suspicious behavior.",
        techStack: ["Python3", "PyQt6", "Figma", "Git"], 
        status: "Personal", 
        link: "to git",
        thought: "I did it",
        image: "/images/small_footer_2.png"
    }, 
    {
        title: "Red Hat Ansible Certified Content for IBM Z (OS IMS Collection)", 
        description: "Open-source contributor to the Red Hat Ansible Certified Content for IBM Z (OS IMS Collection), delivering core code improvements, performance optimizations, and validated automation features. Expanded and strengthened test coverage across key system modules, with contributions formally credited in the project's upstream configuration.",
        techStack: ["Ansible", "JCL", "Python3", "Jenkins", "CI/CD"], 
        status: "Open Source", 
        link: "to git",
        thought: "I contributed",
        image: "/images/small_footer_2.png"
    }, 
    {
        title: "Portfolio Web Platform", 
        description: "Built and deployed a modern, responsive Next.js portfolio platform serving as a centralized showcase for academic certifications, technical architectures, and curated code samples, optimized for production performance and long-term maintainability.",
        techStack: ["Ansible", "JCL", "Python3", "Jenkins", "CI/CD"], 
        status: "Open Source", 
        link: "to git",
        thought: "I contributed",
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
            <div className="relative h-[100svh] w-full border-1 border-white">
                <div className="absolute inset-5 mt-21 flex flex-col items-start justify-start border-1 border-white overflow-y-scroll no-scrollbar">
                    {data.map((item) => { 
                        return(
                            <div key={item.index} className="bg-white/50 w-full mt-5 flex flex-col">
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        );
                    })}
{/*                         <h1>
                            Here should go cool projects!
                        </h1>
                        <h3>
                            With impact + Tech Stack + Links
                        </h3> */}
                    
                </div>
            </div>
        </FadeContent>
    );
}

export default Projects;