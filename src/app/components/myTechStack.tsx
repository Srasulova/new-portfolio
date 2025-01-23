import { useState } from "react";
import { Props } from "../types";

/* eslint-disable @next/next/no-img-element */
export default function MyTechStack({ handleCloseModal, isClosing, onAnimationEnd }: Props) {

    const [showTechStack, setShowTechStack] = useState(false);

    const handleSlideDownEnd = () => {
        if (!isClosing) {
            setShowTechStack(true); // Trigger tech stack animations
        }
        onAnimationEnd();
    };


    return (<>
        {/* Modal Background */}
        <div className="fixed inset-0 bg-gray-800/50 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-10/12 overflow-y-auto mx-auto flex justify-center items-center">
            <div
                className={`relative bg-gray-800 w-full pb-12 pt-6 rounded-lg border border-teal-300  ${isClosing ? "animate-slide-up" : "animate-slide-down"}`}
                onAnimationEnd={handleSlideDownEnd}// Ensure component is removed after animation

            >
                <div className="max-w-7xl mx-auto flex justify-between">
                    <button className="flex gap-1 text-teal-300" onClick={handleCloseModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#5eead4" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5eead4" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                        Back
                    </button>
                </div>

                <div className="flex flex-col relative">
                    {/* Line Animation */}
                    <div className="absolute top-[calc(100%-2px)] w-full h-[4px] bg-red-600 animate-line "></div>

                    <h2 className="text-9xl  py-4 text-center font-bold tracking-wide text-white sm:text-6xl  font-porietOne animate-clip-path-reveal-1">
                        My tech stack
                    </h2>
                </div>

                {/* tech stack divs */}
                <div className="flex max-w-7xl items-center justify-center mx-auto pt-10">
                    <div
                        className={`bg-teal-300 basis-3/6 py-12 pl-12 pr-28 ml-20 rounded-lg border-8 border-white ${showTechStack ? "animate-slide-in-left" : "opacity-0"
                            }`} >

                        <p className="mb-3 tracking-wide text-lg text-gray-800">I love building sleek, user-friendly interfaces with <span className="font-semibold">Next.js, React, TypeScript, and Tailwind CSS</span>. On the backend, I work with Node.js, Express, and SQL databases like PostgreSQL and MySQL to create robust full-stack applications. I prioritize code quality with Jest for testing and am always exploring new tools and frameworks to expand my skills. This is just the beginning of my journey, and I’m excited to see where it takes me!</p>

                    </div>


                    <div
                        className={`mx-auto max-w-7xl p-3 bg-white basis-1/2 rounded-lg -ml-16 ${showTechStack ? "animate-slide-in-right" : "opacity-0"
                            }`}
                    >
                        <div className="grid grid-cols-2 gap-0.5  sm:mx-0 sm:rounded-2xl md:grid-cols-4">
                            <div className="bg-teal-100/75 p-8 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/html.png" alt="html" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/css.png" alt="css" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/javascript.png" alt="javascript" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/typescript.png" alt="typescript" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/react.png" alt="react" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/python.png" alt="python" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/sql.png" alt="sql" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/tailwind.png" alt="tailwind" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/bootstrap.png" alt="bootstrap" width="158" height="48" />
                            </div>

                            <div className="bg-teal-100/75 p-8 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/jquery.png" alt="jquery" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/node.png" alt="node" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/express.png" alt="express" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/flask.png" alt="flask" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/postgres.png" alt="postgres" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/jest.png" alt="jest" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/jasmine.png" alt="jasmine" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/git.png" alt="git" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/adobe.png" alt="photoshop" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/wordpress.png" alt="wordpress" width="158" height="48" />
                            </div>
                            <div className="bg-teal-100/75 p-6 hover:bg-teal-200/75">
                                <img className="max-h-12 w-full object-contain" src="/insomnia.png" alt="insomnia" width="158" height="48" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >


    </>)
}