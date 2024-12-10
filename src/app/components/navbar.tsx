import Link from "next/link";

type NavbarProps = {
    setIsAboutMeOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setIsAboutMeOpen }: NavbarProps) {
    return (
        <>
            <nav className="flex flex-1 flex-col" aria-label="Sidebar">
                <ul role="list" className="space-y-2">
                    <li>
                        <Link
                            href="#aboutMe"
                            className="group font-nunito flex gap-x-3 rounded-md p-6 text-8xl font-semibold text-teal-300 relative"
                            onClick={() => setIsAboutMeOpen(true)}
                        >
                            {/* Wrapper for the text */}
                            <span
                                className="group-hover:drop-shadow-[1px_0_3px_#ffffff] transition-all duration-300 ease-out"
                                style={{
                                    transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "2px white";
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "";
                                }}
                            >
                                ABOUT ME
                            </span>
                            {/* Red line under text */}
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="group font-nunito flex gap-x-3 rounded-md p-6 text-8xl font-semibold text-teal-300 relative"
                        >
                            {/* Wrapper for the text */}
                            <span
                                className="group-hover:drop-shadow-[1px_0_3px_#ffffff] transition-all duration-300 ease-out"
                                style={{
                                    transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "2px white";
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "";
                                }}
                            >
                                MY PROJECTS
                            </span>
                            {/* Red line under text */}
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
                        </Link>
                    </li>
                    <li>

                        <Link
                            href="#"
                            className="group font-nunito flex gap-x-3 rounded-md p-6 text-8xl font-semibold text-teal-300 relative"
                        >
                            {/* Wrapper for the text */}
                            <span
                                className="group-hover:drop-shadow-[1px_0_3px_#ffffff] transition-all duration-300 ease-out"
                                style={{
                                    transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "2px white";
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "";
                                }}
                            >
                                MY TECH STACK
                            </span>
                            {/* Red line under text */}
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
                        </Link>

                        <Link
                            href="#"
                            className="group font-nunito flex gap-x-3 rounded-md p-6 text-8xl font-semibold text-teal-300 relative"
                        >
                            {/* Wrapper for the text */}
                            <span
                                className="group-hover:drop-shadow-[1px_0_3px_#ffffff] transition-all duration-300 ease-out"
                                style={{
                                    transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "2px white";
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "";
                                }}
                            >
                                CONTACT ME
                            </span>
                            {/* Red line under text */}
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
