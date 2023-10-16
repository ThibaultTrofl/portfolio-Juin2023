import "./FilterProjects.scss";

const FilterProjects = ({ technoFilter }) => {
  return (
    <ul className="filter-list">
      <li className="filter-list-element">
        <h3 className="filter-list-element-title">Technologie</h3>
        <div className="filter-list-element-data">
          {technoFilter.map((data) => {
            return (
              <div key={data._id}>
                <img src={data.icon} alt={data.skill} className="skill-icon" />
              </div>
            );
          })}
        </div>
      </li>
      <li className="filter-list-element">
        <h3 className="filter-list-element-title">Environnement</h3>
        <div className="filter-list-element-data">test</div>
      </li>
      <li className="filter-list-element">
        <h3 className="filter-list-element-title">Date to Date</h3>
        <div className="filter-list-element-data">test</div>
      </li>
      <li className="filter-list-button">Rechercher</li>
    </ul>
  );
};
export default FilterProjects;
