import projectData from "../projectData";
import placeholder from '../assets/project-placeholder.png';
const Projects = () => {

    return (
        <>
            <h2>My Work</h2>
            <ul className="projects">
                {projectData.map((project) => (
                    <li 
                    className="projects__project" key={project.id}>
                        <img src={placeholder} alt="project-image"/>
                        <div className="shadow-black shadow-sm">
                            <h3 className="font-semibold">{project.name}</h3>
                            <p className="text-sm">{project.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Projects;