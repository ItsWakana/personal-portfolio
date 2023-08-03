
const Navbar = () => {

    return (
        <nav className="navbar">
        <ul>
            <li 
            className="bg-neutral-950 text-white font-semibold px-2 py-1 rounded-sm">
                <button>
                    <a href="#projects">
                        PROJECTS
                    </a>
                </button>
            </li >
            <li 
            className="bg-neutral-950 text-white font-semibold px-2 py-1 rounded-sm">
                <button>ABOUT</button>
            </li>
            <li 
            className="bg-neutral-950 text-white font-semibold px-2 py-1 rounded-sm">
                <button>CONTACT</button>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar;
