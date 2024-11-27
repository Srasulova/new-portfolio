import { useState, useEffect } from "react";

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
                <div className="w-screen h-screen bg-gradient-to-b from-cyan-950 to-cyan-900 animate-slide-down flex items-center">
                    <div className="flex flex-col items-start">
                        <h1
                            className="text-white text-6xl text-center font-mali opacity-0 transition ml-40 animate-slideIn delay-500 duration-700"
                            style={{
                                filter:
                                    "drop-shadow(2px 2px 10px #db2777) drop-shadow(2px 0 15px #ffffff)",
                            }}
                        >
                            Hi. I&apos;m Sabina.
                        </h1>
                        <p
                            className="text-white text-4xl text-center pt-4 font-mali opacity-0 transition ml-40 animate-slideIn delay-1000 duration-700"
                        >
                            I&apos;m a Software Engineer
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
