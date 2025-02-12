/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Props } from "../types";

const skills = [
    { name: "HTML", src: "/html.png", alt: "html" },
    { name: "CSS", src: "/css.png", alt: "css" },
    { name: "JavaScript", src: "/javascript.png", alt: "javascript" },
    { name: "TypeScript", src: "/typescript.png", alt: "typescript" },
    { name: "React", src: "/react.png", alt: "react" },
    { name: "Python", src: "/python.png", alt: "python" },
    { name: "SQL", src: "/sql.png", alt: "sql" },
    { name: "SASS", src: "/sass.png", alt: "sass" },
    { name: "Tailwind", src: "/tailwind.png", alt: "tailwind" },
    { name: "Bootstrap", src: "/bootstrap.png", alt: "bootstrap" },
    { name: "jQuery", src: "/jquery.png", alt: "jquery" },
    { name: "Node.js", src: "/node.png", alt: "node" },
    { name: "Express", src: "/express.png", alt: "express" },
    { name: "Flask", src: "/flask.png", alt: "flask" },
    { name: "Postgres", src: "/postgres.png", alt: "postgres" },
    { name: "MySql", src: "/mysql.png", alt: "mysql" },
    { name: "SQLite", src: "/sqlite.png", alt: "sqlite" },
    { name: "Jest", src: "/jest.png", alt: "jest" },
    { name: "Jasmine", src: "/jasmine.png", alt: "jasmine" },
    { name: "Insomnia", src: "/insomnia.png", alt: "insomnia" },
    { name: "Git&GitHub", src: "/git.png", alt: "git" },
    { name: "Adobe Photoshop", src: "/adobe.png", alt: "photoshop" },
    { name: "WordPress", src: "/wordpress.png", alt: "wordpress" },

];

export default function MyTechStack({
    handleCloseModal,
    isClosing,
    onAnimationEnd,
}: Props) {
    const [showTechStack, setShowTechStack] = useState(false);

    const handleSlideDownEnd = () => {
        if (!isClosing) {
            setShowTechStack(true); // Trigger tech stack animations
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
                        <button className="flex gap-1 text-teal-300" onClick={handleCloseModal}>
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
                        <div className="absolute top-[calc(100%-2px)] w-full h-[4px] bg-red-600 animate-line"></div>

                        <h2 className="text-9xl py-4 text-center font-bold tracking-wide text-white sm:text-6xl font-porietOne animate-clip-path-reveal-1">
                            My tech stack
                        </h2>
                    </div>

                    {/* tech stack divs */}
                    <div className="flex max-w-7xl items-center justify-center mx-auto pt-10">
                        <div
                            className={`bg-teal-300 basis-3/6 py-12 pl-12 pr-28 ml-20 rounded-lg border-8 border-white ${showTechStack ? "animate-slide-in-left" : "opacity-0"
                                }`}
                        >
                            <p className="mb-3 tracking-wide text-lg text-gray-800">
                                I like building front-end apps with{" "}
                                <span className="font-semibold">
                                    Next.js, React, TypeScript, and Tailwind CSS.{" "}
                                </span>
                                I&apos;m also skilled at designing back-end systems and working with databases, plus I&apos;m familiar with testing technologies. I constantly learn new tools and adapt quickly to meet the needs of any company or product.
                            </p>
                        </div>

                        <div
                            className={`mx-auto max-w-7xl p-3 bg-white basis-1/2 rounded-lg -ml-16 ${showTechStack ? "animate-slide-in-right" : "opacity-0"
                                }`}
                        >
                            <div className="grid grid-cols-2 gap-0.5 sm:mx-0 sm:rounded-2xl md:grid-cols-4">
                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="relative group bg-teal-100/75 p-6 hover:bg-teal-200/75 flex items-center justify-center"
                                    >
                                        <img
                                            className="max-h-12 w-full object-contain"
                                            src={skill.src}
                                            alt={skill.alt}
                                            width="158"
                                            height="48"
                                        />
                                        {/* Tooltip */}
                                        <span className="absolute bottom-1 mb-1 px-2 py-1 text-white font-medium bg-gray-700 text-sm rounded hidden group-hover:block whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
