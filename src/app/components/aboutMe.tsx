import FlipCardComponent from "./cards";
import { Props } from "../types";


export default function AboutMe({ handleCloseModal, isClosing, onAnimationEnd }: Props) {
    return (
        <>
            {/* Modal Background */}
            <div className="fixed inset-0 bg-gray-800/50 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-10/12 overflow-y-auto mx-auto flex justify-center items-center">
                <div
                    className={`relative bg-gray-800 border border-teal-300 w-full pb-12 pt-8 rounded-lg  ${isClosing ? "animate-slide-up" : "animate-slide-down"}`}
                    onAnimationEnd={onAnimationEnd} // Ensure component is removed after animation
                >
                    <div className="max-w-7xl mx-auto flex justify-between">
                        <button className="flex gap-1 text-teal-300" onClick={handleCloseModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                            Back
                        </button>
                    </div>

                    <h2 className="text-9xl text-center font-bold tracking-wide text-white sm:text-6xl font-porietOne pb-12">
                        Hi<span className="text-red-600">,</span> nice to meet you<span className="text-red-600">!</span>
                    </h2>

                    <FlipCardComponent />

                    <div className="flex flex-col relative">
                        {/* Line Animation */}
                        <div className="absolute top-[calc(100%-2px)] w-full h-[4px] bg-red-600 animate-line "></div>

                        <h2 className="text-6xl text-center font-bold tracking-wide text-white sm:text-6xl  font-porietOne animate-clip-path-reveal-1">
                            10 Fun Facts About Me
                        </h2>
                    </div>

                    <div className="flex justify-center items-center pt-16">
                        <div className="max-w-7xl flex justify-center gap-20">
                            {/* Left Column */}
                            <ul className="list-none text-white tracking-wide flex space-x-8">
                                <li className="flex gap-3 items-end">
                                    <span className="text-6xl text-red-600 font-black">1</span>
                                    <p className="leading-relaxed px-1">
                                        I love solving complex problems… but still struggle to decide what to watch on Netflix.
                                    </p>
                                </li>
                                <li className="flex gap-3 items-end">
                                    <span className="text-6xl text-red-600 font-black">10</span>
                                    <p className="leading-relaxed">
                                        I might not have all the answers, but I’m always ready to figure it out.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 max-w-7xl mx-auto">
                        <p className="text-center text-sm text-white font-normal italic">
                            Outside of coding, I&apos;m a proud mom who speaks five languages (Azerbaijani, Russian, English, Turkish, and Spanish). With 15+ years in customer service, I&apos;m all about teamwork, clear communication, and building connections. I&apos;m constantly learning and growing, both in my career and as a person.
                        </p>
                    </div>

                    <div className="mt-8">
                        <blockquote className="text-center text-xl text-teal-300 font-medium">
                            <span className="text-red-600">&quot;</span> The best way to appreciate your job is to imagine yourself without one.<span className="text-red-600">&quot;</span>
                        </blockquote>
                        <p className="text-center text-lg text-red-600 font-medium mt-2">
                            — Oscar Wilde
                        </p>
                    </div>


                </div>
            </div>
        </>
    );
}
