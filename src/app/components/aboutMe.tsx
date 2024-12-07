export default function AboutMe() {
    return (
        <>
            <div className="bg-teal-300 w-full h-full animate-slide-down py-28">
                <h2 className="text-9xl text-center mb-6 font-bold tracking-wide text-white sm:text-6xl pb-14 ">
                    10 Fun Facts About Me
                </h2>

                <div className="flex justify-center items-center">
                    <div className="max-w-7xl flex justify-center gap-20">
                        {/* Left Column */}
                        <ul className="list-none text-gray-900 tracking-wide space-y-7">
                            <li className="flex gap-3 items-end">
                                <span className="text-6xl text-red-600 font-black">
                                    01
                                </span>
                                <p className="leading-relaxed px-1 ">
                                    <strong className="text-xl">I Speak 5 Languages:</strong> Azerbaijani is my native tongue, but I also speak Russian, English, Turkish, and Spanish. It’s like having a cheat code for connecting with people.
                                </p>
                            </li>
                            <li className="flex gap-3 items-end">
                                <span className="text-6xl text-red-600 font-black px-1 pt-12 pb-1">
                                    02
                                </span>
                                <p className="leading-relaxed">
                                    <strong>Food Lover Turned Developer:</strong> My love for food inspired my first full-stack app, a restaurant critique platform. It was the perfect mix of my passions for food and coding.
                                </p>
                            </li>
                            <li className="flex gap-3 items-end">
                                <span className="text-6xl text-red-600 font-black  ">
                                    03
                                </span>
                                <p className="leading-relaxed">
                                    <strong>Baseball and Me:</strong> I built <em>Moneyball</em>, a customized baseball stats app, during peak baseball season. Funny enough, I knew nothing about baseball, but I loved working with fresh daily data.
                                </p>
                            </li>
                            <li className="flex gap-3 items-end">
                                <span className="text-6xl text-red-600 font-black  ">
                                    04
                                </span>
                                <p className="leading-relaxed">
                                    <strong>I Don’t Quit:</strong> I’m all about finding solutions and getting the job done, even if it means learning on the fly. No challenge is too big for my determination.
                                </p>
                            </li>
                            <li className="flex gap-3 items-end">
                                <span className="text-6xl text-red-600 font-black  ">
                                    05
                                </span>
                                <p className="leading-relaxed">
                                    <strong>From Listening to Building:</strong> My 15+ years in customer service taught me how to listen and understand people’s needs. Now, I channel that into creating user-friendly apps.
                                </p>
                            </li>
                        </ul>

                        {/* Right Column */}
                        <ul className="list-none text-gray-900 tracking-wide space-y-7">
                            <li className="flex gap-3 items-end">
                                <span className="text-6xl text-red-600 font-black  ">
                                    06
                                </span>
                                <p className="leading-relaxed">
                                    <strong>Front-End Is My Happy Place:</strong> I enjoy full-stack work, but front-end development is where I thrive. Bringing designs to life, pixel by pixel, is where I find my groove.
                                </p>
                            </li>
                            <li className="flex gap-3 items-end">
                                <span className="text-6xl text-red-600 font-black  ">
                                    07
                                </span>
                                <p className="leading-relaxed">
                                    <strong>Azerbaijan in My Heart 🇦🇿:</strong> I’m originally from Azerbaijan, and my roots shape my approach to challenges and opportunities.
                                </p>
                            </li>
                            <li className="flex gap-3 items-end">
                                <span className="text-6xl text-red-600 font-black  ">
                                    08
                                </span>
                                <p className="leading-relaxed">
                                    <strong>Practical Over Perfect:</strong> I might forget some fancy terminology now and then, but I know how to make things work. Hands-on problem-solving is where I excel.
                                </p>
                            </li>
                            <li className="flex gap-3 items-end">
                                <span className="text-6xl text-red-600 font-black  ">
                                    09
                                </span>
                                <p className="leading-relaxed">
                                    <strong>Juggling Life and Code:</strong> Balancing motherhood and building a career in tech has taught me to focus, prioritize, and stay adaptable.
                                </p>
                            </li>
                            <li className="flex gap-3 items-end">
                                <span className="text-6xl text-red-600 font-black  ">
                                    10
                                </span>
                                <p className="leading-relaxed">
                                    <strong>I Keep Things Spicy:</strong> I dive into new projects and challenges with curiosity, enthusiasm, and a good sense of humor. After all, coding should be fun!
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
