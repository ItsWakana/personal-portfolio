import Navbar from "./Navbar";
import downIcon from '../assets/icons/down.svg';

const MainHeader = () => {

    return (
        <header className="header flex flex-col items-center gap-12">
            <Navbar />
                <div className="flex flex-col text-center md:text-left md:ml-10">
                    <p className="text-white">WELCOME TO MY PORTFOLIO</p>
                    <h1 className="main-heading text-white">
                        My Programming <span className="text-orange-600">Journey.</span>
                    </h1>
                </div>
            <button className="down-icon w-10">
                <a href="#projects">
                <img src={downIcon} alt="direct-down-icon"/> 
                </a>
            </button>
        </header>
    )
}

export default MainHeader;