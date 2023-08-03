import projectData from "../projectData";
import Project from "./Project";

const ProjectCollection = () => {
	return (
		<section id="projects" className="pt-5 bg-gray-950 flex flex-col items-center">
			<div className="flex flex-col text-center w-2/5 min-w-[300px]">
			<h2 className="text-4xl font-semibold text-white">My <span className="text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-red-800 bg-clip-text">Projects</span></h2>
			<p className="text-white mt-4"><i>I have curated a selection of my programming projects. These projects use a mixture of HTML, CSS, and JavaScript.</i></p>
			</div>
			<div className="grid gap-10 md:grid-cols-3 grid-cols-1 lg:mx-40 mx-8 my-6">
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
