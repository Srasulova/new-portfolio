type MyTechStackProps = {
    handleCloseModal: () => void;
    isClosing: boolean;
    onAnimationEnd: () => void;
};

/* eslint-disable @next/next/no-img-element */
export default function MyTechStack({ handleCloseModal, isClosing, onAnimationEnd }: MyTechStackProps) {
    return (<>
        {/* Modal Background */}
        <div className="fixed inset-0 bg-gray-800/50 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-11/12 overflow-y-auto mx-auto flex justify-center items-center px-20">
            <div
                className={`relative bg-gray-800 w-full pb-12 pt-6 rounded-lg border border-teal-300  ${isClosing ? "animate-slide-up" : "animate-slide-down"}`}
                onAnimationEnd={onAnimationEnd} // Ensure component is removed after animation

            >
                <div className="max-w-7xl mx-auto flex justify-between">
                    <button className="flex gap-1 text-teal-300" onClick={handleCloseModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#5eead4" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5eead4" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                        Back
                    </button>

                    <button className="flex gap-1 text-teal-300" onClick={handleCloseModal}>

                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#5eead4" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5eead4" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>

                    </button>
                </div>

                <h2 className="text-9xl text-center font-bold tracking-wide text-white sm:text-6xl font-porietOne mb-2 ">
                    My tech stack
                </h2>

                <div className="w-96 h-0.5 rounded mx-auto bg-red-600 mb-8"></div>



                <div className="flex max-w-7xl items-center justify-center mx-auto">
                    <div className="bg-teal-300 basis-2/5 py-12 pl-12 pr-28 ml-20 rounded-lg ">

                        <p className="mb-3 tracking-wide text-gray-800">I love working with <strong> Next.js, React, TypeScript, and Tailwind</strong>—they’re my go-to tools for building sleek, user-friendly interfaces. On the backend, I’m at home with Node.js, Express, and SQL databases like PostgreSQL and MySQL, which let me tackle full-stack projects with confidence. I rely on Jest for testing to make sure my code is solid and reliable.

                            I’m always building new apps with these technologies, not just to create something functional but to deepen my understanding and sharpen my skills. I’m also constantly exploring new tools and frameworks because, for me, this is just the beginning—there’s so much more I want to learn and grow into.</p>

                        <p className="tracking-wide text-gray-800">I’m always building new apps with these technologies, not just to create something functional but to deepen my understanding and sharpen my skills. I’m also constantly exploring new tools and frameworks because, for me, this is just the beginning—there’s so much more I want to learn and grow into.</p>


                    </div>


                    <div className="mx-auto max-w-7xl p-6 bg-white basis-1/2 rounded-lg -ml-16 ">
                        <div className="grid grid-cols-2 gap-0.5  sm:mx-0 sm:rounded-2xl md:grid-cols-4">
                            <div className="bg-gray-400/5 p-8">
                                <img className="max-h-12 w-full object-contain" src="/html.png" alt="Transistor" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/css.png" alt="Reform" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/javascript.png" alt="Tuple" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/typescript.png" alt="Laravel" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/react.png" alt="Statamic" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/python.png" alt="SavvyCal" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/sql.png" alt="Statamic" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/tailwind.png" alt="Statamic" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/bootstrap.png" alt="Tuple" width="158" height="48" />
                            </div>

                            <div className="bg-gray-400/5 p-8">
                                <img className="max-h-12 w-full object-contain" src="/jquery.png" alt="Transistor" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/node.png" alt="Reform" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/express.png" alt="Tuple" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/flask.png" alt="Laravel" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/postgres.png" alt="Laravel" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/jest.png" alt="SavvyCal" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/jasmine.png" alt="SavvyCal" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/git.png" alt="SavvyCal" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/adobe.png" alt="SavvyCal" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/wordpress.png" alt="SavvyCal" width="158" height="48" />
                            </div>
                            <div className="bg-gray-400/5 p-6">
                                <img className="max-h-12 w-full object-contain" src="/insomnia.png" alt="SavvyCal" width="158" height="48" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>


    </>)
}