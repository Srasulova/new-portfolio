import Link from "next/link";


type NavbarProps = {
    setActiveModal: React.Dispatch<React.SetStateAction<string | null>>;
};

const navItems = [
    { name: "ABOUT ME", href: "#aboutMe", modal: "aboutMe" },
    { name: "MY TECH STACK", href: "#myTechStack", modal: "myTechStack" },
    { name: "WORK EXPERIENCE", href: "#experience", modal: "experience" },
    { name: "MY PROJECTS", href: "#projects", modal: "projects" },
];

export default function Navbar({ setActiveModal }: NavbarProps) {
    return (
        <>
            <nav className="flex flex-1 flex-col" aria-label="">
                <ul role="list" className="space-y-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="group tracking-wider font-porietOne flex gap-x-3 rounded-md p-6 text-8xl  relative"
                                onClick={() => setActiveModal(item.modal)}
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
                                    {item.name}
                                </span>
                                {/* Red line under text */}
                                <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}


// TODO: make the page responsive