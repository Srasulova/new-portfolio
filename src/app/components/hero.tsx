import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Link from "next/link";

type HeroProps = {
    setActiveModal: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Hero({ setActiveModal }: HeroProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => setIsLoaded(true);
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <>
            {isLoaded && (
                <div className="w-screen h-screen bg-gradient-to-b from-black to-gray-700 flex items-center justify-around animate-slide-down delay-1000">
                    {/* Text and Animation */}

                    <div className="flex flex-col items-start ml-32 animate-slide-down">
                        <div className="flex flex-col relative">
                            {/* Line Animation */}
                            <div className="absolute top-[calc(100%-2px)] w-full h-[4px] bg-red-600 animate-line"></div>

                            <h1
                                className="text-teal-300 text-5xl font-porietOne animate-clip-path-reveal-1"
                            >
                                Hi. I&apos;m Sabina.
                            </h1>
                            <p
                                className="text-teal-300 text-4xl pt-4 font-porietOne animate-clip-path-reveal-1"
                            >
                                I&apos;m a Software Engineer
                            </p>
                        </div>

                        {/* social media icons */}
                        <div className="my-8 flex gap-4">
                            {/* linkedin */}
                            <Link href="https://www.linkedin.com/in/rasulova-sabina/">
                                <svg className="" stroke="currentColor" fill="#dc2626" strokeWidth="0" viewBox="0 0 448 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></Link>


                            {/* github */}
                            <Link href="https://github.com/srasulova">
                                <svg stroke="currentColor" fill="#dc2626" strokeWidth="0" viewBox="0 0 496 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></Link>

                            {/* email icon */}
                            <div className="relative group">
                                <Link href="mailto:rasulova_sabina@yahoo.com">
                                    <svg
                                        stroke="currentColor"
                                        fill="#dc2626"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        height="30px"
                                        width="30px"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                                    </svg>
                                </Link>

                                {/* Tooltip */}
                                <div
                                    className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded-md px-3 py-2 shadow-md z-10"
                                >
                                    rasulova_sabina@yahoo.com
                                </div>
                            </div>

                            {/* phone number */}
                            <div className="relative group">

                                <svg stroke="currentColor" fill="#dc2626" strokeWidth="0" viewBox="0 0 512 512" height="25px"
                                    width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>

                                {/* Tooltip */}
                                <div
                                    className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded-md px-3 py-2 shadow-md z-10"
                                >
                                    +1-646-388-1276
                                </div>
                            </div>
                        </div>
                        {/* download resume button */}
                        <button className="relative px-5 py-3 overflow-hidden font-medium text-white bg-gray-900 border border-red-600 hover:border-gray-100 rounded-lg shadow-inner group">
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full rounded-lg ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease rounded-lg " ></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease rounded-lg "></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease rounded-lg "></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-red-600 rounded-lg  opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease rounded-lg ">
                                <a href="/resume.pdf" download>Donwload my resume</a>
                            </span>
                        </ button>
                    </div>
                    <div className="mr-24">
                        <Navbar setActiveModal={setActiveModal} />
                    </div>
                </div>
            )}
        </>
    );
}
