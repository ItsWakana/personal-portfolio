import projectData from "../projectData";
import placeholder from '../assets/project-placeholder.png';
import githubLogo from '../assets/icons/github.svg';
import externalLink from '../assets/icons/external-link.svg';

const Projects = () => {

    return (
        <section className="text-center">
            <h2 className="text-xl font-semibold">My Work</h2>
            <div className="project-container">
                {projectData.map((project) => (
                    <div 
                    className="project" key={project.id}>
                        <img src={placeholder} alt="project-image"/>
                            <div className="flex flex-col gap-3 p-2 shadow-slate-500 shadow-md h-full bg-white">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold">{project.name}</h3>
                                    <div className="flex gap-2">
                                        <img className="w-7" src={githubLogo}/>
                                        <img className="w-8" src={externalLink}/>
                                    </div>
                                </div>
                                <p className="text-sm">{project.description}</p>
                            </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;