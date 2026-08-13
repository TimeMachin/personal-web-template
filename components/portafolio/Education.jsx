import Framer from 'components/Framer'
import FadeContent from 'components/animations/fade';
import { newsreader, inter, fraunces, ebGaramond } from "../fonts";
import SparkleButton from 'components/StarGit';

const Education = ({}) => {
    return (
        <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center">
                <div>
                    <SparkleButton></SparkleButton>
                </div>
                <div>
                    <Framer imageMode='custom' customImage={{src: "/images/small_footer_2.png"}} title='YouTube' link='https://youtube.com' textColor='#ffffff' font={{fontFamily: `${fraunces.className}`, fontSize: "44px"}}/>
                </div>
            </div>
        </FadeContent>
    );
}

export default Education;