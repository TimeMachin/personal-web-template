import Image from "next/image";
import TextType from "components/animations/textType";
import PixelHover from "components/animations/PixelHover";

const Hero = ({}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x w-11/12">
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 divide-yw-23/24">
                        <div className="flex items-center justify-center">
                            <PixelHover
                                image="/images/profile.png"

                            />
                        </div>
                        <div className="text-4xl quantico-bold text-white">
                            <TextType 
                                text={["Pedro R. Treviño", "Software Developer", "Cybersecurity Engineer"]}
                                typingSpeed={25}
                                pauseDuration={3000}
                                showCursor={true}
                                cursorCharacter="_"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center p-2">
                    <p className="text-start text-white quantico-regular text-xl">
                        I am a computer science and cybersecurity master graduate with hands-on experience in software development at IBM of about 2 years on 
                        backend and frontend. My professional background combines a solid foundation in programming, automation, and systems integration with 
                        a growing specialization in secure development, ethical hacking, forensic analysis, and reverse engineering. I thrive in collaborative 
                        environments where communication, precision, and analytical thinking drive impactful solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;