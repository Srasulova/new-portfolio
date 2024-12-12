import { useState } from "react";
import { Props } from "../types";

export default function Experience({ handleCloseModal, isClosing, onAnimationEnd }: Props) {

    const [showExperience, setShowExperience] = useState(false);
    const [experienceReady, setExperienceReady] = useState(false);

    const handleSlideDownEnd = () => {
        if (!isClosing) {
            setExperienceReady(true); // Trigger experience slide-in animation
        }
        onAnimationEnd();
    };

    const handleExperienceAnimationEnd = () => {
        setShowExperience(true);
    };


    return (<>
        {/* Modal Background */}
        <div className="fixed inset-0 bg-gray-800/50 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-10/12 overflow-y-auto mx-auto flex justify-center items-center">
            <div
                className={`relative bg-gray-800 w-full py-6 rounded-lg border border-teal-300  ${isClosing ? "animate-slide-up" : "animate-slide-down"}`}
                onAnimationEnd={handleSlideDownEnd} // Ensure component is removed after animation

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

                <div className="flex flex-col relative">
                    {/* Line Animation */}
                    <div className="absolute top-[calc(100%-2px)] w-full h-[4px] bg-red-600 animate-line "></div>

                    <h2 className="text-9xl  pb-8 text-center font-bold tracking-wide text-white sm:text-6xl  font-porietOne animate-clip-path-reveal-1">
                        Work Experience
                    </h2>
                </div>

                {/* experience */}
                <div className={`relative px-6 ${experienceReady ? "animate-slide-in-bottom" : "opacity-0"
                    }`}
                    onAnimationEnd={handleExperienceAnimationEnd}>
                    {/* Timeline vertical line */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 rounded bg-red-600 transform -translate-x-1/2"></div>

                    {/* Experience items */}
                    <div className="relative flex flex-col">

                        {/* Experience Item 1 */}
                        <div className="flex items-center">
                            <div className="w-1/2 text-right pr-8">
                                <h3 className="text-xl font-semibold text-teal-300">Front-End Developer</h3>
                                <p className="text-xs text-gray-400">Mar 2024 - Sep 2024</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>Led the creation of a responsive admin dashboard with React and Tailwind CSS.</li>
                                    <li>Migrated legacy jQuery components to modern React architecture.</li>
                                    <li>Led the creation of a responsive admin dashboard with React and Tailwind CSS.</li>
                                    <li>Facilitated smooth data flow across front-end and back-end services through API development.</li>
                                    <li>Crafted MySQL database schema encompassing over 15 tables.</li>
                                    <li>Developed data-responsive UI features with AppSmith, achieving a 50% decrease in manual input efforts.</li>
                                </ul>

                            </div>
                            {/* Dot */}
                            <div className="relative flex items-center justify-center -ml-3">
                                {/* Outer pulsing animation */}
                                <span className="absolute inline-flex h-5 w-5 rounded-full bg-red-600 opacity-75 animate-ping"></span>
                                {/* Main dot */}
                                <span className="relative inline-flex h-6 w-6 bg-red-600 rounded-full border-4 border-gray-800"></span>
                            </div>

                        </div>

                        {/* Experience Item 2 */}
                        <div className="flex items-center justify-end">
                            {/* Dot */}
                            <div className="relative flex items-center justify-center -mr-3">
                                {/* Outer pulsing animation */}
                                <span className="absolute inline-flex h-5 w-5 rounded-full bg-red-600 opacity-75 animate-ping"></span>
                                {/* Main dot */}
                                <span className="relative inline-flex h-6 w-6 bg-red-600 rounded-full border-4 border-gray-800"></span>
                            </div>
                            <div className="w-1/2 text-left pl-8">
                                <h3 className="text-xl font-semibold text-teal-300">Software Engineering Trainee</h3>
                                <p className="text-xs text-gray-400">Oct 2023 - March 2024</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>Designed and deployed two full-stack applications from scratch: one using React, Node.js, Express, and PostgreSQL; the other with Python, Flask, and SQLite.
                                    </li>
                                    <li>Gained hands-on experience in Advanced JavaScript, Frontend, Backend, REST APIs, Database Design, Data Structures, Algorithms, TDD, and Agile methodologies, building a strong foundation in software development practices.
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Experience Item 3 */}
                        <div className="flex items-center justify-end">
                            {/* Dot */}
                            <div className="relative flex items-center justify-center -mr-3">
                                {/* Outer pulsing animation */}
                                <span className="absolute inline-flex h-5 w-5 rounded-full bg-red-600 opacity-75 animate-ping"></span>
                                {/* Main dot */}
                                <span className="relative inline-flex h-6 w-6 bg-red-600 rounded-full border-4 border-gray-800"></span>
                            </div>
                            <div className="w-1/2 text-left pl-8 mt-4">
                                <h3 className="text-xl font-semibold text-teal-300">Full time parenting</h3>
                                <p className="text-xs text-gray-400">Jul 2022 - Oct 2023</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>Designed and deployed two full-stack applications from scratch: one using React, Node.js, Express, and PostgreSQL; the other with Python, Flask, and SQLite.
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Experience Item 3 */}
                        <div className="flex items-center justify-start">
                            <div className="w-1/2 text-right pr-8">
                                <h3 className="text-xl font-semibold text-teal-300">Customer Service Supervisor </h3>
                                <p className="text-xs text-gray-400">Jan 2018 - Jul 2022</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>Led digital transformation projects, introducing and customizing CRM systems.</li>
                                    <li>Trained and supervised over 100 agents, improving team productivity and performance.</li>
                                    <li>Reduced resolution time by 25% through a new agent training program, resulting in faster customer response times, improved satisfaction, and enhanced team productivity.</li>
                                    <li>Implemented data-driven quality assurance workflows to identify trends and improve processes.</li>
                                    <li>Created comprehensive documentation using content management tools.</li>
                                    <li>Collaborated with IT to deploy new software solutions, enhancing operational efficiency.</li>
                                </ul>
                            </div>
                            {/* Dot */}
                            <div className="relative flex items-center justify-center -ml-3">
                                {/* Outer pulsing animation */}
                                <span className="absolute inline-flex h-5 w-5 rounded-full bg-red-600 opacity-75 animate-ping"></span>
                                {/* Main dot */}
                                <span className="relative inline-flex h-6 w-6 bg-red-600 rounded-full border-4 border-gray-800"></span>
                            </div>
                        </div>

                        {/* Experience Item 4 */}
                        <div className="flex items-center justify-end">
                            {/* Dot */}
                            <div className="relative flex items-center justify-center -mr-3">
                                {/* Outer pulsing animation */}
                                <span className="absolute inline-flex h-5 w-5 rounded-full bg-red-600 opacity-75 animate-ping"></span>
                                {/* Main dot */}
                                <span className="relative inline-flex h-6 w-6 bg-red-600 rounded-full border-4 border-gray-800"></span>
                            </div>
                            <div className="w-1/2 text-left pl-8">
                                <h3 className="text-xl font-semibold text-teal-300">Sales and Service Centers Manager</h3>
                                <p className="text-xs text-gray-400">Mar 2024 - Sep 2024</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>Managed a team of 50+ sales and service representatives across the country.</li>
                                    <li>Developed and implemented employee training, customer satisfaction, monitoring and evaluation programs, resulting in an improvement in employee performance.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div >
    </>)
}