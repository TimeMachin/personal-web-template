import TextType from "components/animations/textType";
import SpotlightCard from "components/SpotlightCard";

const Experience = ({}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="container text-white">
                <div className="row">
                    <div className="row flex flex-row">
                        <div className="w-3/4"><SpotlightCard className="p-5">Company</SpotlightCard></div>
                        <div className="w-1/4"><SpotlightCard className="p-5">Dates</SpotlightCard></div>
                    </div>
                    <div><SpotlightCard className="p-2">Position</SpotlightCard></div>
                    </div>
                    <div className="row flex flex-row items-stretch">
                        <div className="w-1/4">
                            <SpotlightCard className="bg-red-500"><p className="text-start text-wrap">Hola, se supone esto deberia quebrar la linea</p></SpotlightCard>
                        </div>
                        <div className="row w-3/4 h-full">
                            <SpotlightCard className="p-5">Job description</SpotlightCard>
                            <SpotlightCard className="p-5">Something else</SpotlightCard>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Experience;




