import SkillIcon from "../../SkillIcon/SkillIcon";
import "./ProjectCard.scss";
import SetDate from "../../../function/SetDate";

const ProjectCard = ({ data }) => {
  return (
    <article key={data._id} className="projects-card-container-element">
      <div className="projects-card-container-element-photo">
        <img
          src={data.pictures[0]}
          alt=""
          className="projects-card-container-element-photo"
        />
      </div>
      <div className="projects-card-container-element-data">
        <div className="projects-card-container-element-data-firstLine">
          <h1>{data.projectTitle}</h1>
          <p>{data.environement}</p>
        </div>
        <p className="projects-card-container-element-data-resumeLine">
          {data.resume}
        </p>
        <p className="projects-card-container-element-data-dateLine">
          <span> Dernière modifiction : </span>
          <span>
            <SetDate date={data.date} />
          </span>
        </p>
        <div className="projects-card-container-element-data-lineTechno">
          {data.technologie.map((skill) => {
            return (
              <SkillIcon
                key={skill._id}
                icon={skill.icon}
                skill={skill.skill}
                utility={"project"}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
