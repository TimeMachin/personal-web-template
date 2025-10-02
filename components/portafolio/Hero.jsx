import Image from "next/image";
import TextType from "components/animations/textType";

const Hero = ({}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x w-11/12">
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 divide-yw-23/24">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/images/hacker.jpg"
                                width={500}
                                height={500}
                                alt="Contact"
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
                        Me apasionan las expresiones artísticas, particularmente el dibujo y la fotografía, tanto en la captura de imágenes como en su edición 
                        mediante software profesional. También disfruto aprendiendo nuevos idiomas y actualmente estoy estudiando japonés. Además, me 
                        gusta practicar una variedad de deportes, aunque no sigo ninguno en concreto como forma de entretenimiento. Profesional en desarrollo 
                        de software y máster en Ciberseguridad, con foco en Análisis Forense Digital y Operaciones de Seguridad (SOC). Experiencia reciente en 
                        uso de herramientas y metodologías SOC para detección, análisis y respuesta a incidentes.     
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;