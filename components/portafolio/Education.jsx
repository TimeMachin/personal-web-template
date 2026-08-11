import Framer from 'components/Framer'
import { newsreader, inter, fraunces, ebGaramond } from "../fonts";

const Education = ({}) => {
    return (
        <div className='flex items-center justify-center'>
            <Framer imageMode='custom' customImage={{src: "/images/small_footer_2.png"}} title='YouTube' link='https://youtube.com' textColor='#ffffff' font={{fontFamily: `${fraunces.className}`, fontSize: "44px"}}/>
        </div>
    );
}

export default Education;