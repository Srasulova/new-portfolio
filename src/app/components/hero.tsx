import { useState, useEffect } from "react";
import Navbar from "./navbar";

export default function Hero() {
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
                <div className="w-screen h-screen bg-gradient-to-b from-black to-gray-700 flex items-center justify-between animate-slide-down">
                    {/* Text and Animation */}
                    <div className="flex flex-col items-start relative">
                        {/* Line Animation */}
                        <div className="absolute top-[calc(100%-2px)] w-full h-[4px] bg-red-600 animate-line"></div>

                        <h1
                            className="text-lime-400 text-7xl  font-noto  ml-40 animate-clip-path-reveal-1"
                        >
                            Hi. I&apos;m Sabina.
                        </h1>
                        <p
                            className="text-lime-400 text-5xl pt-4 font-noto  ml-40 animate-clip-path-reveal-1"
                        >
                            I&apos;m a Software Engineer
                        </p>
                    </div>

                    <div className="mr-40">
                        <Navbar />
                    </div>
                </div>
            )}
        </>
    );
}
