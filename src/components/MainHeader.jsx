import Navbar from "./Navbar";
import downIcon from '../assets/icons/down.svg';

const MainHeader = () => {

    const backgroundUrl = "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80";

    return (
        <header className="header">
            <Navbar />
            <img className="header__image"src={backgroundUrl} alt="header-image" />
                <h1 className="main-heading absolute top-20 text-neutral-950 select-none">Personal <br></br>
                <span>Portfolio</span></h1>
            <button className="down-icon absolute bottom-5 w-10">
                <a href="#projects">
                <img src={downIcon} alt="direct-down-icon"/> 
                </a>
            </button>
        </header>
    )
}

export default MainHeader;