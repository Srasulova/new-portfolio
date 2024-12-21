import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Props } from "../types";

/* eslint-disable @next/next/no-img-element */
export default function MyProjects({
    handleCloseModal,
    isClosing,
    onAnimationEnd,
}: Props) {
    const [showProjects, setShowProjects] = useState(false);

    const handleSlideDownEnd = () => {
        if (!isClosing) {
            setShowProjects(true); // Trigger tech stack animations
        }
        onAnimationEnd();
    };

    return (
        <>
            {/* Modal Background */}
            <div
                className="fixed inset-0 bg-gray-800/50 transition-opacity"
                aria-hidden="true"
            ></div>

            <div className="fixed inset-0 z-10 w-10/12 overflow-y-auto mx-auto flex justify-center items-center">
                <div
                    className={`relative bg-gray-800 w-full pb-12 pt-6 rounded-lg border border-teal-300 ${isClosing ? "animate-slide-up" : "animate-slide-down"
                        }`}
                    onAnimationEnd={handleSlideDownEnd} // Ensure component is removed after animation
                >
                    <div className="max-w-7xl mx-auto flex justify-between">
                        <button
                            className="flex gap-1 text-teal-300"
                            onClick={handleCloseModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#5eead4"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#5eead4"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                                />
                            </svg>
                            Back
                        </button>
                    </div>

                    <div className="flex flex-col relative">
                        {/* Line Animation */}
                        <div className="absolute top-[calc(100%-2px)] w-full h-[4px] bg-red-600 animate-line "></div>

                        <h2 className="text-9xl py-4 text-center font-bold tracking-wide text-white sm:text-6xl font-porietOne animate-clip-path-reveal-1">
                            My Projects
                        </h2>
                    </div>

                    {/* Carousel */}
                    <div className="flex max-w-7xl items-center justify-center mx-auto pt-10">
                        {showProjects && (
                            <Carousel
                                showArrows
                                showThumbs={false}
                                infiniteLoop
                                autoPlay
                                interval={5000}
                                className="w-2/3"
                            >
                                {/* Item 1 */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/moneyball.png"
                                        alt="moneyball"
                                        className="rounded-lg"
                                    />
                                    <p className="mt-4 text-white font-medium">
                                        Project 1 Description
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/messagin-app.png"
                                        alt="Project 2"
                                        className="rounded-lg"
                                    />
                                    <p className="mt-4 text-white font-medium">
                                        Project 2 Description
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/ratatouille.png"
                                        alt="Project 3"
                                        className="rounded-lg"
                                    />
                                    <p className="mt-4 text-white font-medium">
                                        Project 3 Description
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/ratatouille.png"
                                        alt="Project 3"
                                        className="rounded-lg"
                                    />
                                    <p className="mt-4 text-white font-medium">
                                        Project 3 Description
                                    </p>
                                </div>

                                {/* Item 5 */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/ratatouille.png"
                                        alt="Project 3"
                                        className="rounded-lg"
                                    />
                                    <p className="mt-4 text-white font-medium">
                                        Project 3 Description
                                    </p>
                                </div>

                                {/* Item 6 */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/ratatouille.png"
                                        alt="Project 3"
                                        className="rounded-lg"
                                    />
                                    <p className="mt-4 text-white font-medium">
                                        Project 3 Description
                                    </p>
                                </div>
                            </Carousel>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
