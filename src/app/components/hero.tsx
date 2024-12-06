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
                <div className="w-screen h-screen bg-gradient-to-b from-black to-gray-800 animate-slide-down flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <h1
                            className="text-lime-400 text-7xl text-center font-noto opacity-0 transition ml-40 animate-slideIn delay-500 duration-700"
                        >
                            Hi. I&apos;m Sabina.
                        </h1>
                        <p
                            className="text-lime-400 text-5xl text-center pt-4 font-noto opacity-0 transition ml-40 animate-slideIn delay-1000 duration-700"
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
