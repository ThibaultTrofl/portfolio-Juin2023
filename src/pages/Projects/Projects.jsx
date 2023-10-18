import { useEffect, useState } from "react";
import "./Projects.scss";
import FilterProjects from "../../components/FilterProjects/FilterProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import SortProjects from "../../components/SortProjects/SortProjects";
// import { useWindowSize } from "@uidotdev/usehooks";

const Projects = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const [proIsLoading, setProIsLoading] = useState(true);
  const [projectsData, setProjectsData] = useState(Array);
  const [technoFilter, setTechnofilter] = useState(Array);
  const [envirFilter, setEnvirFilter] = useState(Array);
  const [sortAsc, setSortAsc] = useState(true);

  const [selectTechno, setSelectTechno] = useState(Array);
  const [selectEnvir, setSelectEnvir] = useState(Array);
  const [selectStartDate, setSelectStartDate] = useState({
    startMonth: 3,
    startYear: 2023,
  });
  const [selectEndDate, setSelectEndDate] = useState({
    endMonth: 9,
    endYear: 2023,
  });

  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/projects");
        setProjectsData(data.response);
        setTechnofilter(data.selectTechno);
        setEnvirFilter(data.selectEnvir);
        setProIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fectchData();
  }, []);

  return (
    <>
      {!proIsLoading ? (
        <main>
          <section className="projects">
            <div className="projects-header">
              <div className="filter">
                <div
                  className="filter-container"
                  onClick={() => {
                    openSort && setOpenSort(false);
                    setOpenFilter(!openFilter);
                  }}
                >
                  <div className="filter-container-title">Filtres</div>
                  <FontAwesomeIcon
                    icon={
                      openFilter ? "circle-chevron-up" : "circle-chevron-down"
                    }
                    className="filter-container-title"
                  />
                </div>
              </div>
              {openFilter && (
                <FilterProjects
                  technoFilter={technoFilter}
                  projectsData={projectsData}
                  envirFilter={envirFilter}
                  setOpenFilter={setOpenFilter}
                  selectTechno={selectTechno}
                  setSelectTechno={setSelectTechno}
                  selectStartDate={selectStartDate}
                  setSelectStartDate={setSelectStartDate}
                  selectEndDate={selectEndDate}
                  setSelectEndDate={setSelectEndDate}
                  selectEnvir={selectEnvir}
                  setSelectEnvir={setSelectEnvir}
                />
              )}
              <div className="sort">
                <div
                  className="sort-container"
                  onClick={() => {
                    openFilter && setOpenFilter(false);
                    setOpenSort(!openSort);
                  }}
                >
                  <div className="sort-container-title">Tri</div>
                  <FontAwesomeIcon
                    icon={
                      openSort ? "circle-chevron-up" : "circle-chevron-down"
                    }
                    className="sort-container-title"
                  />
                </div>
                {openSort && (
                  <SortProjects
                    sortAsc={sortAsc}
                    setSortAsc={setSortAsc}
                    setOpenSort={setOpenSort}
                  />
                )}
              </div>
            </div>

            <div className="projects-card">
              <div className="background-card"></div>
              <ul className="projects-card-container">
                <li className="projects-card-container-element">test</li>
                <li className="projects-card-container-element">test</li>
                <li className="projects-card-container-element">test</li>
                <li className="projects-card-container-element">test</li>
                <li className="projects-card-container-element">test</li>
                <li className="projects-card-container-element">test</li>
              </ul>
            </div>
          </section>
        </main>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Projects;
