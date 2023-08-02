import profileIcon from '../assets/profile-placeholder.png';
import githubIcon from '../assets/icons/github.svg';
import twitterIcon from '../assets/icons/twitter.svg';
const Introduction = () => {

    return (
        <div className="flex flex-col items-center justify-center w-full p-8 md:flex-row gap-5 bg-blue-500">
            <img className="w-6/12 max-w-[400px] rounded-md" 
            src={profileIcon} 
            alt="portfolio profile photo"/>

            <div className="bg-white p-5 rounded-r-md max-w-[500px] min-w-[300px]">
                <h1 className="text-2xl font-bold pb-3">About me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae maximus nulla. Suspendisse erat ex, aliquet cursus finibus sed, scelerisque sit amet dolor. Ut quis lacus vulputate, posuere ex a, porta nisl. Proin semper felis eros, ut porta lacus eleifend molestie.</p>
                <div className="flex items-center gap-2 pt-3">
                    <button>
                        <img className="w-7"
                        src={githubIcon} 
                        alt="github-icon"/>
                    </button>
                    <button>
                        <img className="w-8"
                        src={twitterIcon} 
                        alt="twitter-icon"/>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Introduction;