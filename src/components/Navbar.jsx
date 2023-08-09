import { useState } from "react";

const Navbar = () => {

    const [currentTab, setCurrentTab] = useState(null);

    const gradientTextStyle = 'text-transparent bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text';

    return (
        <nav className="navbar mt-4">
        <ul>
            <li 
            className={`${currentTab === 'projects' ? gradientTextStyle : 'text-white'} font-semibold px-2 py-1`}>
                <button onClick={() => setCurrentTab('projects')}>
                    <a href="#projects">
                        PROJECTS
                    </a>
                </button>
            </li >
            <li 
            className={`${currentTab === 'about' ? gradientTextStyle : 'text-white'} font-semibold px-2 py-1`}>
                <button onClick={() => setCurrentTab('about')}>ABOUT</button>
            </li>
            <li 
            className={`${currentTab === 'contact' ? gradientTextStyle : 'text-white'} font-semibold px-2 py-1`}>
                <button onClick={() => setCurrentTab('contact')}>CONTACT</button>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar;
