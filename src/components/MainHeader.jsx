import Navbar from "./Navbar";
import downIcon from '../assets/icons/down.svg';

const MainHeader = () => {

    const backgroundUrl = "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80";

    return (
        <header className="header">
            <Navbar />
            <h1 className="main-heading absolute left-10 top-20 text-neutral-950">Personal <br></br>
            <span>Portfolio</span></h1>
            <img className="header__image"src={backgroundUrl} alt="header-image" />
            <img className=" down-icon absolute bottom-5 left-1/2 w-10" src={downIcon} alt="direct-down-icon"/>
        </header>
    )
}

export default MainHeader;