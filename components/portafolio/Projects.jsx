import FadeContent from "components/animations/fade";

const Projects = ({}) => {
    return (
        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center">
                <div>
                    <h1>
                        Here should go cool projects!
                    </h1>
                    <h3>
                        With impact + Tech Stack + Links
                    </h3>
                </div>
            </div>
        </FadeContent>
    );
}

export default Projects;