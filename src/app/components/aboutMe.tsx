type AboutMeProps = {
    handleBackButtonClick: () => void;
    isClosing: boolean;
    onAnimationEnd: () => void;
};

export default function AboutMe({ handleBackButtonClick, isClosing, onAnimationEnd }: AboutMeProps) {
    return (
        <>
            {/* Modal Background */}
            <div className="fixed inset-0 bg-gray-800/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-full overflow-y-auto flex justify-center items-center px-10">
                <div
                    className={`relative bg-teal-300 w-full py-24 rounded-lg shadow-md shadow-teal-50 ${isClosing ? "animate-slide-up" : "animate-slide-down"}`}
                    onAnimationEnd={onAnimationEnd} // Ensure component is removed after animation
                >
                    <div className="max-w-7xl mx-auto">
                        <button className="flex gap-1 text-gray-800" onClick={handleBackButtonClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                            Back
                        </button>
                    </div>

                    <div className="flex flex-col relative">
                        {/* Line Animation */}
                        <div className="absolute top-[calc(100%-2px)] w-full h-[4px] bg-red-600 animate-line "></div>

                        <h2 className="text-9xl text-center mb-6 font-bold tracking-wide text-white sm:text-6xl pb-12 font-noto animate-clip-path-reveal-1">
                            10 Fun Facts About Me
                        </h2>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="max-w-7xl flex justify-center gap-20">
                            {/* Left Column */}
                            <ul className="list-none text-gray-900 tracking-wide flex space-x-8">
                                <li className="flex gap-3 items-end">
                                    <span className="text-6xl text-red-600 font-black">1</span>
                                    <p className="leading-relaxed px-1">
                                        Give me a bug or an error I’ve never seen before, and I’ll show you the power of stubborn optimism. If it takes 100 tries, so be it—<strong>I’ll get it working</strong>, and I’ll learn something new every time.
                                    </p>
                                </li>
                                <li className="flex gap-3 items-end">
                                    <span className="text-6xl text-red-600 font-black">10</span>
                                    <p className="leading-relaxed">
                                        I’ve always had an eye for <strong>making things work better</strong>—whether it’s simplifying a process, cleaning up code, or organizing my thoughts. If it can be optimized, I’ll find a way to make it flow a little smoother.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 max-w-7xl mx-auto">
                        <p className="text-center text-sm text-gray-800 font-normal italic">
                            Outside of coding, I’m a proud mom who speaks five languages (Azerbaijani, Russian, English, Turkish, and Spanish). With over 15 years of customer service experience, I’m used to collaborating with diverse teams, communicating effectively, and building strong relationships. I’m always looking for ways to grow, both professionally and personally.
                        </p>
                    </div>

                    <div className="mt-8">
                        <p className="text-center text-lg text-gray-800 font-semibold">
                            Always learning<span className="text-red-600">,</span> always growing<span className="text-red-600">.</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
