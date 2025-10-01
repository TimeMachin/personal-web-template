import TextType from "components/animations/textType";

const Projects = ({}) => {
    return (
        <div className="flex gap-[2%] flex-wrap content-start">
            <div className="w-full h-[5%]">Header</div>
            <div className="w-3/4 h-3/4">Sidebar</div>
            <div className="grow h-3/4 w-auto">Content</div>
        </div>
    );
}

export default Projects;