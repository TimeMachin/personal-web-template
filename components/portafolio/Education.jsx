import TextType from "components/animations/textType";

const Education = ({}) => {
    return (
        <div className="flex gap-[2%] flex-wrap content-start">
            <div className="w-full h-[5%]">Header</div>
            <div className="w-3/4 h-3/4">Sidebar</div>
            <div className="grow h-3/4 w-[1%]">Content</div>
            <div className="w-full h-[5%]">Footer</div>
        </div>
    );
}

export default Education;