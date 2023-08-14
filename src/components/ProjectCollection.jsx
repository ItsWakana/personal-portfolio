import projectData from "../projectData";
import Project from "./Project";

const ProjectCollection = () => {
	return (
		<section id="projects" className="pt-5 pb-7 bg-gray-950 flex flex-col items-center">
			<div className="flex flex-col text-center w-2/5 min-w-[300px]">
			<h2 className="text-4xl font-semibold text-white">My <span className="text-orange-600">Projects</span></h2>
			<p className="text-white mt-4"><i>I have curated a selection of my programming projects. These projects use a mixture of HTML, CSS, and JavaScript.</i></p>
			</div>
			<div className="flex justify-center flex-wrap gap-5 mx-8 my-6">
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
