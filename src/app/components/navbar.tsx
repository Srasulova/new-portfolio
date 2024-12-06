import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="flex flex-1 flex-col" aria-label="Sidebar">
                <ul role="list" className="space-y-2">
                    <li>
                        <Link
                            href="#"
                            className="group font-nunito flex gap-x-3 rounded-md p-6 text-9xl font-semibold text-lime-400"
                            style={{
                                transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.filter =
                                    "drop-shadow(1px 0 8px #ffffff)";
                                (e.target as HTMLElement).style.webkitTextStroke = "2px white";
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.filter = "";
                                (e.target as HTMLElement).style.webkitTextStroke = "";
                            }}
                        >
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="group font-nunito flex gap-x-3 rounded-md p-6 text-9xl font-semibold text-lime-400"
                            style={{
                                transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.filter =
                                    "drop-shadow(1px 0 8px #ffffff)";
                                (e.target as HTMLElement).style.webkitTextStroke = "2px white";
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.filter = "";
                                (e.target as HTMLElement).style.webkitTextStroke = "";
                            }}
                        >
                            My Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="group font-nunito flex gap-x-3 rounded-md p-6 text-9xl font-semibold text-lime-400"
                            style={{
                                transition: "filter 0.3s ease, -webkit-text-stroke 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.filter =
                                    "drop-shadow(1px 0 8px #ffffff)";
                                (e.target as HTMLElement).style.webkitTextStroke = "2px white";
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.filter = "";
                                (e.target as HTMLElement).style.webkitTextStroke = "";
                            }}
                        >
                            Contact me
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
