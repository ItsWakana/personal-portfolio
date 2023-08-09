import { useState } from "react";

const Navbar = () => {

    const [currentTab, setCurrentTab] = useState(null);

    return (
        <nav className="navbar">
        <ul>
            <li 
            className={`text-${currentTab === 'projects' ? 'orange-600' : 'white'} font-semibold px-2 py-1`}>
                <button onClick={() => setCurrentTab('projects')}>
                    <a href="#projects">
                        PROJECTS
                    </a>
                </button>
            </li >
            <li 
            className={`text-${currentTab === 'about' ? 'orange-600' : 'white'} font-semibold px-2 py-1`}>
                <button onClick={() => setCurrentTab('about')}>ABOUT</button>
            </li>
            <li 
            className={`text-${currentTab === 'contact' ? 'orange-600' : 'white'} font-semibold px-2 py-1`}>
                <button onClick={() => setCurrentTab('contact')}>CONTACT</button>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar;
