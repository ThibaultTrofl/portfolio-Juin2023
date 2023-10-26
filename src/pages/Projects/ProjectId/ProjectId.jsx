import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProjectId.scss";

const ProjectId = () => {
  const { id } = useParams();
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [dataProjectId, setDataprojectId] = useState(Object);
  const [dataSimilarProject, setDsataSimilarProject] = useState(Object);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:3000/projects/${id}`);
      // setDataSimilarProject(data.similarEnvir)
      console.log(data.similarEnvir);
      setDataprojectId(data.response);
      setDsataSimilarProject(data.similarEnvir);
      setDataIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {!dataIsLoading ? (
        <main>
          <section className="projects">
            <div className="projects-header">Projects {">"} idddd</div>
            <div className="projects-card">
              <div className="background-card"></div>
              <div className="project-selectId">blablabla</div>
            </div>
          </section>
        </main>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default ProjectId;
