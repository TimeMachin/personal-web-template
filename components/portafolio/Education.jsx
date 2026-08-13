import Framer from 'components/Framer'
import FadeContent from 'components/animations/fade';
import { newsreader, inter, fraunces, ebGaramond } from "../fonts";
import SparkleButton from 'components/StarGit';

const Education = ({}) => {
    return (
        <FadeContent blur={false} duration={2000} easing="ease-out" initialOpacity={0}>
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
        </FadeContent>
    );
}

export default Education;