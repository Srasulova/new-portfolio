import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Props } from "../types";
import projects from "../projects";

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
                        {showProjects && (
                            <Carousel
                                showArrows
                                showThumbs={false}
                                infiniteLoop
                                autoPlay
                                centerMode
                                centerSlidePercentage={50}
                                transitionTime={5000}
                                interval={8000}
                                className="w-full"
                                renderIndicator={(clickHandler, isSelected, index, label) => (
                                    <li
                                        key={index}
                                        onClick={clickHandler}
                                        className={`inline-block w-2 h-2 mx-6 rounded-full cursor-pointer ${isSelected ? "bg-red-600" : "bg-gray-400"}`}
                                        aria-label={label}
                                    />
                                )}
                            >
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className={`text-center mb-20 py-4 rounded-lg ${index === 0 ? "border-b-4 border-teal-300" : ""}`}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="rounded-lg h-96 w-full object-cover"
                                        />
                                        <h3 className="mt-3 text-white font-bold">{project.title}</h3>
                                        <p className="mt-1 text-white">{project.description}</p>
                                        <div className="mt-2">
                                            <p className="text-teal-300 font-medium">
                                                Tech Stack: {project.techStack.join(", ")}
                                            </p>
                                        </div>
                                        <div className="mt-3 flex gap-4 justify-center">
                                            <a
                                                href={project.projectLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-teal-300 underline"
                                            >
                                                View Project
                                            </a>
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-teal-300 underline"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>

                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
