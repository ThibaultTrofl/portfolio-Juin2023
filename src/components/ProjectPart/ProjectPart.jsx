import "./ProjectPart.scss";
import ProjectCard from "../Card/ProjectCard/ProjectCard";
import { useNavigate } from "react-router-dom";

const ProjectPart = ({ data }) => {
  const navigate = useNavigate();

  return (
    <ul className="projects-card-container card-container">
      {data.map((data) => {
        return (
          <li
            className="projects-card-container-element"
            key={data._id}
            onClick={() => {
              navigate(`/projects/${data._id}`);
            }}
          >
            <ProjectCard data={data} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectPart;
