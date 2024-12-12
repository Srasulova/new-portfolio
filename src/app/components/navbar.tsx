import Link from "next/link";


type NavbarProps = {
    setActiveModal: React.Dispatch<React.SetStateAction<string | null>>;
};


export default function Navbar({ setActiveModal }: NavbarProps) {
    return (
        <>
            <nav className="flex flex-1 flex-col" aria-label="">
                <ul role="list" className="space-y-2">
                    <li>
                        <Link
                            href="#aboutMe"
                            className="group tracking-wider font-porietOne flex gap-x-3 rounded-md p-6 text-8xl  relative"
                            onClick={() => setActiveModal("aboutMe")}
                        >

                            {/* Wrapper for the text */}
                            <span
                                className="group-hover:drop-shadow-[1px_0_2px_#ffffff] transition-all duration-300 ease-out"
                                style={{
                                    WebkitTextStroke: "1px #5eead4",
                                    WebkitTextFillColor: "transparent",
                                    transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "1px white";
                                    (e.target as HTMLElement).style.webkitTextFillColor = "#2dd4bf"
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "1px #5eead4";
                                    (e.target as HTMLElement).style.webkitTextFillColor = "transparent"
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
                            href="#myTechStack"
                            className="group tracking-wider font-porietOne flex gap-x-3 rounded-md p-6 text-8xl  text-teal-300 relative"
                            onClick={() => setActiveModal("myTechStack")}
                        >
                            {/* Wrapper for the text */}
                            <span
                                className="group-hover:drop-shadow-[1px_0_2px_#ffffff] transition-all duration-300 ease-out"
                                style={{
                                    WebkitTextStroke: "1px #5eead4",
                                    WebkitTextFillColor: "transparent",
                                    transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "1px white";
                                    (e.target as HTMLElement).style.webkitTextFillColor = "#2dd4bf"
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "1px #5eead4";
                                    (e.target as HTMLElement).style.webkitTextFillColor = "transparent"
                                }}
                            >
                                MY TECH STACK
                            </span>
                            {/* Red line under text */}
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="group tracking-wider font-porietOne flex gap-x-3 rounded-md p-6 text-8xl  text-teal-300 relative"
                        >
                            {/* Wrapper for the text */}
                            <span
                                className="group-hover:drop-shadow-[1px_0_2px_#ffffff] transition-all duration-300 ease-out"
                                style={{
                                    WebkitTextStroke: "1px #5eead4",
                                    WebkitTextFillColor: "transparent",
                                    transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "1px white";
                                    (e.target as HTMLElement).style.webkitTextFillColor = "#2dd4bf"
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "1px #5eead4";
                                    (e.target as HTMLElement).style.webkitTextFillColor = "transparent"
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
                            className="group tracking-wider font-porietOne flex gap-x-3 rounded-md p-6 text-8xl  text-teal-300 relative"
                        >
                            {/* Wrapper for the text */}
                            <span
                                className="group-hover:drop-shadow-[1px_0_2px_#ffffff] transition-all duration-300 ease-out"
                                style={{
                                    WebkitTextStroke: "1px #5eead4",
                                    WebkitTextFillColor: "transparent",
                                    transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "1px white";
                                    (e.target as HTMLElement).style.webkitTextFillColor = "#2dd4bf"
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.webkitTextStroke = "1px #5eead4";
                                    (e.target as HTMLElement).style.webkitTextFillColor = "transparent"
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
