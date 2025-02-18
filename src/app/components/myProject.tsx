// import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Props } from "../types";
import projects from "../projects";

/* eslint-disable @next/next/no-img-elementt */
export default function MyProjects({
    handleCloseModal,
    isClosing,
    onAnimationEnd,
}: Props) {
    // const [showProjects, setShowProjects] = useState(false);

    const handleSlideDownEnd = () => {
        onAnimationEnd();
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-gray-800/50 transition-opacity"
                aria-hidden="true"
            ></div>

            <div className="fixed inset-0 z-10 w-10/12 overflow-y-auto mx-auto flex justify-center items-center">
                <div
                    className={`relative bg-gray-800 w-full pb-12 pt-6 rounded-lg border border-teal-300 ${isClosing ? "animate-slide-up" : "animate-slide-down"
                        }`}
                    onAnimationEnd={handleSlideDownEnd}
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
                        <div className="absolute top-[calc(100%-2px)] w-full h-[4px] bg-red-600 animate-line"></div>
                        <h2 className="text-9xl py-3 text-center font-bold tracking-wide text-white sm:text-6xl font-porietOne animate-clip-path-reveal-1">
                            My Projects
                        </h2>
                    </div>

                    <div className="">
                        <Carousel
                            showArrows
                            showThumbs={false}
                            infiniteLoop
                            autoPlay
                            stopOnHover
                            centerMode
                            centerSlidePercentage={50}
                            transitionTime={5000}
                            interval={5000}
                            className="w-full animate-slide-down"
                            renderItem={(item, options) => {
                                const isSelected = options?.isSelected ?? false;
                                return (
                                    <div
                                        className={`flex flex-col items-center transition-transform duration-1000 ${isSelected ? "scale-100" : "scale-75"
                                            }`}
                                    >
                                        {item}
                                    </div>
                                );
                            }}
                            renderIndicator={(clickHandler, isSelected, index, label) => (
                                <li
                                    key={index}
                                    onClick={clickHandler}
                                    className={`inline-block w-2 h-2 mx-8 rounded-full cursor-pointer ${isSelected ? "bg-red-600" : "bg-gray-300"
                                        }`}
                                    aria-label={label}
                                />
                            )}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className="text-center mb-20 border-b-2 rounded-lg border-teal-300 py-4">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="rounded-lg h-96 w-full object-cover"
                                    />
                                    <h3 className="mt-3 text-white text-2xl tracking-wide font-semibold">{project.title}</h3>
                                    <p className="mt-1 text-gray-100">{project.description}</p>
                                    <div className="mt-2">
                                        <p className="text-teal-300 font-medium">
                                            Tech Stack: <span className="text-gray-300">{project.techStack.join(", ")}</span>
                                        </p>
                                    </div>
                                    <div className="mt-3 flex gap-4 justify-center">
                                        <a
                                            href={project.projectLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-red-600"
                                        >
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 640 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path></svg>     </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-red-600"
                                        >
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 496 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}
