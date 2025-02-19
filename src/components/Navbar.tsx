import Link from "next/link"

type NavbarProps = {
    pageType: string;
}

const Navbar = ({ pageType }: NavbarProps) => {
    return (
        <nav className="mb-4 w-full bg-white shadow-md h-16 flex items-center justify-center text-xl fixed top-0 left-0 border-b border-gray-200 z-10">
            <ul className="flex space-x-8">
                <li>
                    <Link href={"/"} className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={pageType === "Blogs" ? "/projects" : "/blogs"} className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                        {pageType === "Blogs" ? "Projects" : "Blogs"}
                    </Link>
                </li>
                <li>
                    <Link href={"/about"} className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar  