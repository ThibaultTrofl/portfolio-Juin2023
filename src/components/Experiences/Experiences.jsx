import axios from "axios";
import { useEffect, useState } from "react";
// import { useWindowSize } from "@uidotdev/usehooks";
import Map from "../Map/Map.jsx";

// Style
import "./Experiences.css";
import SetDate from "../../function/SetDate";

const Exp = () => {
  // const size = useWindowSize();

  const [expIsLoading, setExpIsLoading] = useState(true);
  const [expData, setExpData] = useState();
  const [seeMore, setSeeMore] = useState();

  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/aboutme/experiences"
        );
        setExpData(data.response);
        setExpIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fectchData();
  }, []);

  return (
    <>
      {!expIsLoading && (
        <div className="pres">
          <div className="background-card"></div>

          {expData.map((data, index) => {
            console.log(data.location.latitute);
            return (
              <article
                className="pres-card"
                onClick={() =>
                  seeMore === index ? setSeeMore(null) : setSeeMore(index)
                }
                key={index}
              >
                <div className="background-card"></div>

                <div className="card-contain">
                  <div className="card-pres">
                    <a href={data.link} className="exp-card-icon-link">
                      <img
                        src={data.logo}
                        alt={data.company}
                        className="card-icon"
                      />
                    </a>

                    <div className="card-header">
                      <h1>{data.jobTitle}</h1>
                      <h2>{data.company}</h2>
                    </div>
                  </div>
                  <div className="card-data">
                    <p>{data.location.city}</p>

                    <p>
                      <SetDate date={data.startDate} /> -{" "}
                      <SetDate date={data.endDate} />
                    </p>
                  </div>
                  {seeMore === index && (
                    <>
                      <div className="card-seemore">
                        {data.missions.map((data, index) => {
                          return <p key={index}>{data}</p>;
                        })}
                      </div>
                      <Map
                        longitude={data.location.longitude}
                        latitude={data.location.latitute}
                      />
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Exp;
