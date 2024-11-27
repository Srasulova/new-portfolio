import Link from "next/link";

export default function Navbar() {
    return (<>
        <nav className="flex flex-1 flex-col" aria-label="Sidebar">
            <ul role="list" className="space-y-2">
                <li>
                    <Link href="#" className="group flex gap-x-3 rounded-md p-6 text-9xl font-semibold text-cyan-900"
                        style={{
                            filter:
                                "drop-shadow(2px 2px 10px #db2777) drop-shadow(2px 0 15px #ffffff)",
                            WebkitTextStroke: "1px white",
                        }}>About me</Link>
                </li>
                <li>
                    <Link href="#" className="group flex gap-x-3 rounded-md p-6 text-9xl font-semibold text-cyan-900" style={{
                        WebkitTextStroke: "1px white",
                    }}>My Projects</Link>
                </li>
                <li>
                    <Link href="#" className="group flex gap-x-3 rounded-md p-6 text-9xl font-semibold text-cyan-900 " style={{
                        WebkitTextStroke: "1px white",
                    }}>Contact me</Link>
                </li>

            </ul>
        </nav>

    </>)
}