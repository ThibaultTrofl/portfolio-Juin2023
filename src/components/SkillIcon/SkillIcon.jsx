import { useState } from "react";

const SkillIcon = ({ icon, skill, selectTechno, setSelectTechno }) => {
  const [selected, setSelected] = useState(false);

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
      {selectTechno && (
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
      {!selectTechno && (
        <div className="skill-card">
          <img src={icon} alt={skill} className="skill-icon" />
        </div>
      )}
    </>
  );
};

export default SkillIcon;
