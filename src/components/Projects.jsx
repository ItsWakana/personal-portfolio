import projectData from "../projectData";

const Projects = () => {

    return (
        <>
            <h2>My Work</h2>
            <ul className="projects">
                {projectData.map((project) => (
                    <li 
                    className="projects__project" key={project.id}>
                        <div className="project__image"></div>
                        <h3 className="font-semibold">{project.name}</h3>
                        <p className="text-sm">{project.description}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Projects;