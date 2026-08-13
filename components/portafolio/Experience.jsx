import TextType from "components/animations/textType";
import SpotlightCard from "components/SpotlightCard";
import { FadeIn } from "components/animations/FadeIn";
import FadeContent from "components/animations/fade";

const Experience = ({}) => {
    return (
        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
            <div className="flex flex-col relative h-[100svh] w-full overflow-hidden items-center justify-center">
                <div>
                    <h1 className="text-white">
                        Describe the work experience (or internships)
                    </h1>
                    <h2 className="text-white">
                        Validates how you've applied it in real settings
                    </h2>
                </div>
            </div>
        </FadeContent>
    );
}

export default Experience;