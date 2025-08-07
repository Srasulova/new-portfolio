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
                className={`relative overflow-y-auto h-5/6 bg-gray-800 w-full py-6 rounded-lg border border-teal-300  ${isClosing ? "animate-slide-up" : "animate-slide-down"}`}
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
                        <div className="flex items-center justify-end -mt-3">
                            {/* Dot */}
                            <div className="relative flex items-center justify-center -mr-3">
                                {/* Outer pulsing animation */}
                                <span className="absolute inline-flex h-5 w-5 rounded-full bg-red-600 opacity-75 animate-ping"></span>
                                {/* Main dot */}
                                <span className="relative inline-flex h-6 w-6 bg-red-600 rounded-full border-4 border-gray-800"></span>
                            </div>
                            <div className="w-1/2 text-left pl-8">
                                <h3 className="text-xl font-semibold text-teal-300">Web Solutions Developer</h3>
                                <p className="text-xs text-gray-200">Item Inc.</p>
                                <p className="text-xs text-gray-400">Feb 2025 - <span className="italic">present</span></p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>
                                        iPaaS Integration and API: Manage Celigo integration to keep BigCommerce,
                                        ERP, and other systems in sync.
                                    </li>
                                    <li>
                                        JavaScript: Build, troubleshoot, and optimize custom code for dynamic UIs.
                                    </li>
                                    <li>
                                        Custom Apps: Develop and maintain front-end components for various apps.
                                    </li>
                                    <li>
                                        Backend: Assist with Laravel Blade views and other back-end needs.
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Experience Item 2 */}
                        <div className="flex items-center -mt-1">
                            <div className="w-1/2 text-right pr-8">
                                <h3 className="text-xl font-semibold text-teal-300">Software Engineer</h3>
                                <p className="text-xs text-gray-200">Sync Tech Solutions, Inc </p>
                                <p className="text-xs text-gray-400">Aug 2024 - present</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>
                                        Automated data processing and generated insights using Python scripts.
                                    </li>
                                    <li>
                                        Wrote SQL queries for analytics and reporting, integrated into Python pipelines.
                                    </li>
                                    <li>
                                        Provided support, maintenance, and enhancements for new/existing systems.
                                    </li>
                                    <li>
                                        Troubleshot and debugged issues, demonstrating strong problem-solving skills.
                                    </li>
                                    <li>
                                        Worked with clients to gather requirements and refine software solutions.
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

                        {/* Experience Item 3 */}
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
                                    <li>
                                        Created full-stack applications from concept to production.
                                    </li>
                                    <li>
                                        Built responsive UIs with JavaScript, TypeScript, and React.
                                    </li>
                                    <li>
                                        Developed RESTful APIs with Node.js, Express, and Python.
                                    </li>
                                    <li>
                                        Designed and optimized SQL-based databases.
                                    </li>
                                    <li>
                                        Followed TDD and collaborated in Agile teams.
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Experience Item 4 */}
                        <div className="flex items-center -mt-3">
                            <div className="w-1/2 text-right pr-8">
                                <h3 className="text-xl font-semibold text-teal-300">Front-End Developer</h3>
                                <p className="text-xs text-gray-200">La Leche League USA </p>
                                <p className="text-xs text-gray-400">Oct 2023 - Mar 2024</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>
                                        Led the creation of a responsive admin dashboard with React and Tailwind CSS.
                                    </li>
                                    <li>
                                        Migrated legacy jQuery components to modern React architecture.
                                    </li>
                                    <li>
                                        Cut development time by creating reusable components.
                                    </li>
                                    <li>
                                        Ensured smooth data flow via front-end/back-end API integration.
                                    </li>
                                    <li>
                                        Crafted MySQL schema spanning 15+ tables.
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



                        {/* Experience Item 5 */}
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

                        {/* Experience Item 5 */}
                        <div className="flex items-center justify-start -mt-3">
                            <div className="w-1/2 text-right pr-8">
                                <h3 className="text-xl font-semibold text-teal-300">Quality Assurance Supervisor </h3>
                                <p className="text-xs text-gray-200">Sentry Management Solutions </p>
                                <p className="text-xs text-gray-400">Jan 2018 - Jul 2022</p>
                                <ul className="mt-2 text-sm text-gray-300">
                                    <li>
                                        Led digital transformation projects, customizing new CRM systems.
                                    </li>
                                    <li>
                                        Launched training initiatives that reduced resolution time by 25%.
                                    </li>
                                    <li>
                                        Designed QA workflows using data analytics to identify trends.
                                    </li>
                                    <li>
                                        Developed thorough documentation using content management systems.
                                    </li>
                                    <li>
                                        Collaborated with IT to deploy new software for customer service operations.
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

// TODO: make the page responsive
// TODO: fix the margin on the line animation
// TODO: change the color of the scrollbar
// TODO: update the text on the experience