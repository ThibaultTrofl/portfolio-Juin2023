import { useEffect, useState } from "react";

const SkillIcon = ({ icon, skill, selectTechno, setSelectTechno, utility }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectTechno?.includes(skill)) {
      setSelected(true);
    }
  }, [skill, selectTechno]);

  const handleChangeTechno = (skill) => {
    let newArrayOfSelectTechno = selectTechno;

    if (selectTechno.length > 0 && selectTechno.includes(skill)) {
      let positionOfTechno = selectTechno.indexOf(skill);
      selectTechno.splice(positionOfTechno, 1);
    } else {
      newArrayOfSelectTechno = selectTechno;
      newArrayOfSelectTechno.push(skill);
    }

    setSelectTechno(newArrayOfSelectTechno);
    setSelected(!selected);
  };

  return (
    <>
      {utility === "filter" && (
        <div
          className={
            selected
              ? "filter-list-element-containerSkill-data-select"
              : "filter-list-element-containerSkill-data"
          }
          onClick={() => handleChangeTechno(skill)}
        >
          <img src={icon} alt={skill} className="skill-icon" />
        </div>
      )}
      {utility === "aboutme" && (
        <div className="skill-card">
          <img src={icon} alt={skill} className="skill-icon" />
        </div>
      )}
      {utility === "project" && (
        <div className="iconLineTechno">
          <img src={icon} alt={skill} className="iconLineTechno-icon" />
        </div>
      )}
    </>
  );
};

export default SkillIcon;
