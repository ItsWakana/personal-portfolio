import exampleImage from '../assets/web-projectplaceholder.png';
import githubLogo from '../assets/icons/github.svg';
import externalLink from '../assets/icons/external-link.svg';
import IconLink from './IconLink';
import { techColor } from '../projectData';

const Project = ( {project }) => {

  return (
    <div className="project bg-gray-900 text-white rounded-lg border-2 border-gray-800 md:w-1/4 w-3/4 min-w-[250px]" key={project.id}>
        <img className="rounded-lg h-[160px] object-cover" src={exampleImage} alt="project-image" />
        <div className="flex flex-col items-start gap-3 py-4 h-full">
          <div className="flex gap-2 icons">
            <IconLink url={project.repoUrl} iconSrc={githubLogo} width={7}/>
            <IconLink url={project.liveUrl} iconSrc={externalLink} width={8}/>
          </div>
          <h3 className="font-semibold">{project.name}</h3>
          <p className="text-sm">{project.description}</p>
          <ul className="flex gap-2 mt-auto">
            {project.technologies.map((tech) => (
              <li className={`${techColor[tech]} rounded-xl px-2 text-sm`}key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Project;