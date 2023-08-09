import projectData from "../projectData";
import Project from "./Project";

const ProjectCollection = () => {
	return (
		<section id="projects" className="text-center pt-5">
			<h2 className="text-4xl font-semibold">My Projects</h2>
			<div className="grid gap-8 md:grid-cols-2 grid-cols-1 lg:mx-40 mx-8 my-6">
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
