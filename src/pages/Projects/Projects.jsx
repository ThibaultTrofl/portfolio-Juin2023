import { useEffect, useState } from "react";
import "./Projects.scss";
import FilterProjects from "../../components/FilterProjects/FilterProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Projects = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [proIsLoading, setProIsLoading] = useState(true);
  const [projectsData, setProjectsData] = useState();
  const [technoFilter, setTechnofilter] = useState(Array);

  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/projects");
        console.log(data);
        setProjectsData(data.response);
        setTechnofilter(data.arrayOfTechno);
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
            {/* <div className="background-card"></div> */}
            <div
              className="filter"
              onClick={() => {
                setOpenFilter(!openFilter);
              }}
            >
              <div className="filter-container">
                <div className="filter-title">Filtres</div>
                <FontAwesomeIcon
                  icon={
                    openFilter ? "circle-chevron-up" : "circle-chevron-down"
                  }
                  className="filter-title"
                />
              </div>

              {openFilter && <FilterProjects technoFilter={technoFilter} />}
            </div>
            <div className="projects">
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
