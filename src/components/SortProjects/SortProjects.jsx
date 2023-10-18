import "./SortProjects.scss";
const SortProjects = ({ sortAsc, setSortAsc, setOpenSort }) => {
  //   const setOpenSort = () => {};
  return (
    <ul className="sort-list background-card">
      <li className="sort-list-element">
        <h3 className="sort-list-element-title">Date</h3>
        <div className="sort-list-element-containerSort">
          <div
            onClick={() => {
              setSortAsc(true), setOpenSort(false);
            }}
            className={
              sortAsc
                ? "sort-list-element-containerSort-data-select"
                : "sort-list-element-containerSort-data"
            }
          >
            Croissant
          </div>
          <div
            className={
              !sortAsc
                ? "sort-list-element-containerSort-data-select"
                : "sort-list-element-containerSort-data"
            }
            onClick={() => {
              setSortAsc(false), setOpenSort(false);
            }}
          >
            Décroissant
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SortProjects;
