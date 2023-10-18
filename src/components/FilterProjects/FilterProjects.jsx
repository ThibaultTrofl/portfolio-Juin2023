import "./FilterProjects.scss";
import SkillIcon from "../SkillIcon/SkillIcon";
import DropDownMonth from "../../function/DropDown/DropDownMonth/DropDownMonth.jsx";
import DropDownYear from "../../function/DropDown/DropDownYear/DropDownYear.jsx";
import Environnement from "./Environnement/Environnement";

const FilterProjects = ({
  technoFilter,
  envirFilter,
  setOpenFilter,
  selectTechno,
  setSelectTechno,
  selectStartDate,
  setSelectStartDate,
  selectEndDate,
  setSelectEndDate,
  selectEnvir,
  setSelectEnvir,
}) => {
  return (
    <ul className="filter-list background-card">
      <li className="filter-list-element">
        <h3 className="filter-list-element-title">Technologie</h3>
        <div className="filter-list-element-containerSkill">
          {technoFilter.map((data, index) => {
            return (
              <SkillIcon
                key={index}
                icon={data.icon}
                skill={data.skill}
                selectTechno={selectTechno}
                setSelectTechno={setSelectTechno}
              />
            );
          })}
        </div>
      </li>
      <li className="filter-list-element">
        <Environnement
          envirFilter={envirFilter}
          selectEnvir={selectEnvir}
          setSelectEnvir={setSelectEnvir}
        />
      </li>
      <li className="filter-list-element">
        <h3 className="filter-list-element-title">Date to Date</h3>
        <div className="filter-list-element-containerDateToDate">
          <div className="filter-list-element-containerDateToDate-subContainer">
            <h4 className="filter-list-element-containerDateToDate-subContainer-subtitle">
              Début
            </h4>
            <div className="filter-list-element-containerDateToDate-subContainer-data">
              <DropDownMonth
                func={setSelectStartDate}
                dataFunc={selectStartDate}
                year={selectStartDate.startYear}
                utility="start"
              />
              <DropDownYear
                func={setSelectStartDate}
                dataFunc={selectStartDate}
                utility="start"
              />
            </div>
          </div>
          <div className="filter-list-element-containerDateToDate-subContainer">
            <h4 className="filter-list-element-containerDateToDate-subContainer-subtitle">
              Fin
            </h4>
            <div className="filter-list-element-containerDateToDate-subContainer-data">
              <DropDownMonth
                func={setSelectEndDate}
                dataFunc={selectEndDate}
                year={selectEndDate.endYear}
                utility="end"
              />
              <DropDownYear
                func={setSelectEndDate}
                dataFunc={selectEndDate}
                utility="end"
              />
            </div>
          </div>
        </div>
      </li>

      <li
        className="filter-list-button"
        onClick={() => {
          setOpenFilter(false);
        }}
      >
        Rechercher
      </li>
    </ul>
  );
};
export default FilterProjects;
