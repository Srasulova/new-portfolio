import { useState } from "react";
import { Props } from "../types";

export default function Experience({ handleCloseModal, isClosing, onAnimationEnd }: Props) {

    const [experienceReady, setExperienceReady] = useState(false);

    const handleSlideDownEnd = () => {
        if (!isClosing) {
            setExperienceReady(true); // Trigger experience slide-in animation
        }
        onAnimationEnd();
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
                >
                    {/* Timeline vertical line */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 rounded bg-red-600 transform -translate-x-1/2"></div>

                    {/* Experience items */}
                    <div className="relative flex flex-col">

                        {/* Experience Item 1 */}
                        <div className="flex items-center -mt-1">
                            <div className="w-1/2 text-right pr-8">
                                <h3 className="text-xl font-semibold text-teal-300">Software Engineer</h3>
                                <p className="text-xs text-gray-200">Sync Tech Solutions, Inc </p>
                                <p className="text-xs text-gray-400">Aug 2024 - present</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>Engineered Python scripts to automate data processing and generate analytical insights from enterprise datasets.
                                    </li>
                                    <li>Developed SQL queries integrated into automated reporting pipelines with Python.
                                    </li>
                                    <li>Delivered software support and enhancements, reducing issue resolution time by 25%.
                                    </li>
                                    <li>Collaborated with clients to gather requirements, delivering customized solutions meeting 90% of objectives.
                                    </li>
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
                        <div className="flex items-center justify-end -mt-3">
                            {/* Dot */}
                            <div className="relative flex items-center justify-center -mr-3">
                                {/* Outer pulsing animation */}
                                <span className="absolute inline-flex h-5 w-5 rounded-full bg-red-600 opacity-75 animate-ping"></span>
                                {/* Main dot */}
                                <span className="relative inline-flex h-6 w-6 bg-red-600 rounded-full border-4 border-gray-800"></span>
                            </div>
                            <div className="w-1/2 text-left pl-8">
                                <h3 className="text-xl font-semibold text-teal-300">Software Engineering Trainee</h3>
                                <p className="text-xs text-gray-200">Springboard</p>
                                <p className="text-xs text-gray-400">Jan 2024 - Oct 2024</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>Designed, developed, and deployed two full-stack applications with React and Node.js.
                                    </li>
                                    <li>Built RESTful APIs and backend services with Node.js, Express, and Python and optimized SQL databases to ensure robust communication between services.
                                    </li>
                                    <li>Developed RESTful APIs and backend services with Node.js, Express, and Python.
                                    </li>
                                    <li> Practiced test-driven development, writing over 50 unit tests for application reliability.

                                    </li>
                                    <li> Contributed to Agile teams, delivering features ahead of schedule in 90% of sprints.

                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Experience Item 3 */}
                        <div className="flex items-center -mt-3">
                            <div className="w-1/2 text-right pr-8">
                                <h3 className="text-xl font-semibold text-teal-300">Front-End Developer</h3>
                                <p className="text-xs text-gray-200">La Leche League USA </p>
                                <p className="text-xs text-gray-400">Oct 2023 - Mar 2024</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>Led the creation of a responsive admin dashboard with React and Tailwind CSS.
                                    </li>
                                    <li>Migrated legacy jQuery components to modern React architecture.
                                    </li>
                                    <li>Streamlined development with reusable components, reducing feature delivery time by 30%.
                                    </li>
                                    <li>Designed and integrated RESTful APIs to support seamless front-end and back-end communication.
                                    </li>
                                    <li>Crafted and implemented a MySQL database schema with over 15 tables, supporting the organization’s operational requirements.
                                    </li>
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
                        <div className="flex items-center justify-end -mt-3">
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
                                <ul className="text-sm text-gray-300">
                                    <li>Career Break
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Experience Item 4 */}
                        <div className="flex items-center justify-start -mt-3">
                            <div className="w-1/2 text-right pr-8">
                                <h3 className="text-xl font-semibold text-teal-300">Quality Assurance Supervisor </h3>
                                <p className="text-xs text-gray-200">Sentry Management Solutions </p>
                                <p className="text-xs text-gray-400">Jan 2018 - Jul 2022</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>Implemented digital transformation projects, introducing and customizing CRM systems.
                                    </li>
                                    <li>Designed quality assurance workflows, identifying trends and driving process improvements.
                                    </li>
                                    <li>Supervised and trained a team of 100+ agents, boosting productivity by 30%.
                                    </li>
                                    <li>Authored detailed operational documentation to ensure consistency across teams.
                                    </li>

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


                    </div>
                </div>




            </div>
        </div >
    </>)
}