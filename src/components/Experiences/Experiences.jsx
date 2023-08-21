import axios from "axios";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

// Style
import "./Experiences.css";

const Exp = () => {
  const size = useWindowSize();

  const [expIsLoading, setExpIsLoading] = useState(true);
  const [expData, setExpData] = useState();
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/aboutme/experiences"
        );
        setExpData(data.response);
        console.log(data);
        setExpIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fectchData();
  }, []);

  var setNumberCard = 5;
  if (size.width < 601) {
    setNumberCard = 5;
  } else if (size.width > 600) {
    setNumberCard = 7;
  }

  return (
    <>
      {!expIsLoading && (
        <div className="exp-pres pres">
          <div className="background-card"></div>
          {expData.map((data, index) => {
            return (
              <>
                <article
                  className="exp-pres-card"
                  onClick={() => setSeeMore(!seeMore)}
                >
                  <div className="background-card"></div>
                  <div className="exp-card-contain">
                    <div className="exp-card-pres">
                      <a href={data.link} className="exp-card-icon-link">
                        <img
                          src={data.logo}
                          alt={data.company}
                          className="exp-card-icon"
                        />
                      </a>

                      <div className="exp-card-header">
                        <h1>{data.jobTitle}</h1>
                        <h2>{data.company}</h2>
                      </div>
                    </div>
                    <div className="exp-card-data">
                      <p>{data.location.city}</p>
                      <p>startDate - </p>
                      <p>endDate</p>
                    </div>
                    {seeMore &&
                      data.mission.map((data, index) => {
                        return <>{data}</>;
                      })}
                  </div>
                </article>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Exp;
