import Navbar from "./Navbar";
import downIcon from '../assets/icons/down.svg';

const MainHeader = () => {

    // const backgroundUrl = "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80";

    return (
        <header className="header">
            <Navbar />
            {/* <img className="header__image"src={backgroundUrl} alt="header-image" /> */}
            <div className="header__background"></div>
                <div className="absolute top-20">
                    <p className="text-white">WELCOME TO MY PORTFOLIO</p>
                    {/* <h1 className="main-heading text-neutral-950 select-none">Welcome to my<br></br>
                    <span>Portfolio</span></h1> */}
                    <h1 className="main-heading text-white select-none">My Programming<br></br>
                    <span className="text-orange-600">Journey</span></h1>
                </div>
            <button className="down-icon absolute bottom-5 w-10">
                <a href="#projects">
                <img src={downIcon} alt="direct-down-icon"/> 
                </a>
            </button>
        </header>
    )
}

export default MainHeader;