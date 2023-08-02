import projectData from "../projectData";
import Project from "./Project";

const ProjectCollection = () => {
	return (
		<section className="text-center">
			<h2 className="text-xl font-semibold">My Work</h2>
			<div className="project-container">
				{projectData.map((project) => (
                    <Project 
                    key={project.id} 
                    project={project}
                    />
				))}
			</div>
		</section>
	);
};

export default ProjectCollection;
