import { useState, useEffect } from "react";
import Navbar from "./navbar";
import ResumeButton from "./resumeButton";

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
                        <div className="mt-10">
                            <ResumeButton />
                        </div>
                    </div>
                    <div className="mr-24">
                        <Navbar setActiveModal={setActiveModal} />
                    </div>
                </div>
            )}
        </>
    );
}
