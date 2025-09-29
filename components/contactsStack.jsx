import Image from "next/image";

const ContactStack = ({}) => {
    return (
        <a href="https://wa.me/34687093223/" target="_blank">
            <Image
                src="/images/whatsapp-logo.png"
                width={50}
                height={50}
                alt="Contact"
            />
        </a>
    );
}

export default ContactStack