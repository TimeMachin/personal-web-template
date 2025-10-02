import TextType from "components/animations/textType";
import SpotlightCard from "components/SpotlightCard";

const Experience = ({}) => {
    return (
        <div className="flex flex-col gap-6 bg-gray-800 p-8 rounded-2xl shadow-md m-2 w-fit ">
            <h2 className="h2 font-extrabold text-gray-100 mb-0">Work experience</h2>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                <div className="flex gap-2 justify-between w-full">
                    <div className="flex gap-4">
                    <img className="hidden rounded-md sm:block h-[4.5rem] w-[4.5rem]" src="/images/ibm-logo.svg" alt="" />
                    <div className="flex flex-col">
                        <h3 className="h3 text-gray-100 font-extrabold mb-0">Software Developer</h3>
                        <p className="text-gray-100 font-semibold leading-snug mb-0.5">IBM</p>
                        <p className="font-medium text-sm text-gray-100 mb-0">January 2023 - Now</p>
                    </div>
                    </div>
                    <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                    <a href="#" className="flex items-center rounded active:translate-y-px bg-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center w-7" target="_blank" aria-label="Facebook">
                        <i className="text-base text-white -globe fab fa-facebook-f fa-3x"></i>
                    </a>
                    <a href="#" className="flex items-center rounded active:translate-y-px bg-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-7 justify-center w-7" target="_blank" aria-label="LinkedIn">
                        <i className="text-base text-white fab fa-linkedin-in fa-3x"></i>
                    </a>
                    </div>
                </div>
                <div className="mb-5 lg:ml-6 lg:col-start-2 lg:max-w-2xl">
                    <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                        -----------------------------------
                    </p>
                    <h4 className="w-full p-1 bg-white/10 rounded-md mt-4 text-2xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-9">
                        Watson Automatization
                    </h4>

                    <div className="mt-5 ml-8">
                        <ul className="space-y-3 font-medium list-disc leading-5 break-words">
                            <li className="text-white">
                                Entregué actualizaciones periódicas sobre los hitos, desafíos y objetivos del equipo de Conversión a equipos multifuncionales, mejorando la comunicación y la alineación entre departamentos. 
                            </li>
                            <li className="text-white">
                                Capacité a nuevos miembros del equipo sobre los objetivos, herramientas y flujos de trabajo del equipo, facilitó una experiencia de incorporación fluida. 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <span className="font-medium text-white">Technologies:</span>
                    <div className="flex gap-3 flex-wrap">
                    <a href="https://reactjs.org/" className="flex items-center rounded bg-gray-700 text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-sm tracking-wide w-fit hover:bg-gray-600 hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                        <img className="w-4	h-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/9961f604-43bf-4f21-8bf2-15a9926bfedd.svg" alt="" /> React.js </a>
                    <a href="https://nextjs.org/" className="flex items-center rounded bg-gray-700 text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-sm tracking-wide w-fit hover:bg-gray-600 hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                        <img className="w-4	h-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/64b467d0-d47c-4a85-a25d-d5fe09008f39.svg" alt="" /> Next.js </a>
                    <a href="https://www.typescriptlang.org/" className="flex items-center rounded bg-gray-700 text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-sm tracking-wide w-fit hover:bg-gray-600 hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                        <img className="w-4	h-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/90077be7-9835-46af-aa20-363ec79f688b.svg" alt="" /> TypeScript </a>
                    <a href="https://nx.dev/" className="flex items-center rounded bg-gray-700 text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-sm tracking-wide w-fit hover:bg-gray-600 hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                        <img className="w-4	h-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/398d43cd-5f37-477f-b1de-83b8325a40f7.svg" alt="" /> Nx </a>
                    <a href="https://firebase.google.com/" className="flex items-center rounded bg-gray-700 text-gray-100 font-medium gap-x-1.5 h-6 px-2.5 text-sm tracking-wide w-fit hover:bg-gray-600 hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                        <img className="w-4	h-4" src="https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/8dd1532e-9259-48ee-9bd7-29d1df77b91c.svg" alt="" /> Firebase</a>
                    </div>
                </div>
            </div>
                
            </div>
        </div>
    );
}

export default Experience;