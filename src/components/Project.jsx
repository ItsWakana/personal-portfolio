import placeholder from '../assets/project-placeholder.png';
import githubLogo from '../assets/icons/github.svg';
import externalLink from '../assets/icons/external-link.svg';
import IconLink from './IconLink';

const Project = ( {project }) => {

  return (
    <div className="project" key={project.id}>
        <img src={placeholder} alt="project-image" />
        <div className="flex flex-col items-start gap-3 p-2 shadow-slate-400 shadow-md h-full bg-white">
            <div className="flex items-center w-full justify-between">
                <h3 className="font-semibold">{project.name}</h3>
                <div className="flex gap-2">
                <IconLink url={project.repoUrl} iconSrc={githubLogo} width={7}/>
                <IconLink url={project.liveUrl} iconSrc={externalLink} width={8}/>
                </div>
            </div>
            <p className="text-sm">{project.description}</p>
        </div>
    </div>
  )
}

export default Project;