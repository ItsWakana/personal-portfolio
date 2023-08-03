// import placeholder from '../assets/project-placeholder.png';
import exampleImage from '../assets/web-projectplaceholder.png';
import githubLogo from '../assets/icons/github.svg';
import externalLink from '../assets/icons/external-link.svg';
import IconLink from './IconLink';

const Project = ( {project }) => {

  return (
    <div className="project bg-gray-900 text-white rounded-lg border-2 border-gray-800" key={project.id}>
        <img className="rounded-lg" src={exampleImage} alt="project-image" />
        <div className="flex flex-col items-start gap-3 py-4">
          <div className="flex gap-2">
            <IconLink url={project.repoUrl} iconSrc={githubLogo} width={7}/>
            <IconLink url={project.liveUrl} iconSrc={externalLink} width={8}/>
          </div>
          <h3 className="font-semibold">{project.name}</h3>
          <p className="text-sm">{project.description}</p>
        </div>
    </div>
  )
}

export default Project;