import { Link } from "react-router-dom";
import { Project } from "../entities/Project";
import placeholder from "../assets/placeholder.png";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

interface Props {
  project: Project;
}

const DevCard = ({ project }: Props) => {
  return (
    <>
      <Link
        to={project.link}
        target="_blank"
        className="hover:scale-95 transition-transform"
      >
        <div className="card bg-base-100 shadow-xl h-full">
          <figure>
            <img src={project.image || placeholder} alt={project.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <div className="flex gap-1">
                <p> {project.name}</p>
                {project.link && (
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size="25px" />
                  </Link>
                )}

                {project.git && (
                  <Link
                    to={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size="25px" />
                  </Link>
                )}
              </div>
            </h2>
            <p className="italic">{project.description}</p>
            {/* 
            <div className="flex gap-1">
              {project.tools.map((tool) => (
                <span
                  className="badge badge-soft badge-info font-semibold"
                  key={tool}
                >
                  {tool}
                </span>
              ))}
            </div> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default DevCard;
