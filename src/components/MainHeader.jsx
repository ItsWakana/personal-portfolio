import Navbar from "./Navbar";
import downIcon from '../assets/icons/down.svg';

const MainHeader = () => {

    return (
        <header className="header flex flex-col items-center gap-12 relative">
            <Navbar />
            <div className="w-1/3 h-2/4 bg-gradient-to-r from-amber-600 to-red-600 absolute right-0 bottom-0 rounded-tl-[400px]"></div>
            <div className="w-[80px] h-[80px] bg-gradient-to-r from-amber-600 to-red-600 absolute left-0 top-0 rounded-br-[400px]"></div>
                <div className="flex flex-col text-center md:text-left md:ml-10">
                    <p className="text-white">WELCOME TO MY PORTFOLIO </p>
                    <h1 className="main-heading text-white">
                        My Programming <span className="text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-red-800 bg-clip-text">Journey.</span>
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