import projectData from "../projectData";
import placeholder from '../assets/project-placeholder.png';
const Projects = () => {

    return (
        <>
            <h2>My Work</h2>
            <div className="project-container">
                {projectData.map((project) => (
                    <div 
                    className="project" key={project.id}>
                        <img src={placeholder} alt="project-image"/>
                            <div className="p-2 shadow-slate-500 shadow-md">
                                <h3 className="font-semibold">{project.name}</h3>
                                <p className="text-sm">{project.description}</p>
                            </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects;