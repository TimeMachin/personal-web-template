import TextType from "components/animations/textType";

const Contacts = ({}) => {
    return (
        <div class="flex gap-[2%] flex-wrap content-start">
            <div class="w-full h-[5%] order-1">Header</div>
            <div class="grow h-3/4 order-2 w-[40%]">form</div>
            <div class="w-[40%] h-3/4 order-3">logos buttons</div>
        </div>
    );
}

export default Contacts;