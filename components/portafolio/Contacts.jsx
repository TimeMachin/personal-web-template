import TextType from "components/animations/textType";

const Contacts = ({}) => {
    return (
        <div className="flex gap-[2%] flex-wrap content-start">
            <div className="w-full h-[5%] order-1">Header</div>
            <div className="grow h-3/4 order-2 w-[40%]">form</div>
            <div className="w-[40%] h-3/4 order-3">logos buttons</div>
        </div>
    );
}

export default Contacts;