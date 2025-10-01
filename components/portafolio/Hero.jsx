import Image from "next/image";
import TextType from "components/animations/textType";

const Hero = ({}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x w-11/12">
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 divide-yw-23/24">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/images/hacker.jpg"
                                width={500}
                                height={500}
                                alt="Contact"
                            />
                        </div>
                        <div className="text-4xl quantico-bold text-white">
                            <TextType 
                                text={["Pedro R. Treviño", "Software Developer", "Cybersecurity Engineer"]}
                                typingSpeed={25}
                                pauseDuration={3000}
                                showCursor={true}
                                cursorCharacter="_"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center p-4">
                    <p className="text-start text-white quantico-regular">
                        idunt deserunt sunt. Ut utsunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiatdolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deseruntex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consecteturenim.Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut utsunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiatdolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deseruntex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consecteturenim.Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut utsunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiatdolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deseruntex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consecteturenim.Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut utsunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiatdolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deseruntex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consecteturenim.Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut utsunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiatdolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deseruntex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consecteturenim.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;