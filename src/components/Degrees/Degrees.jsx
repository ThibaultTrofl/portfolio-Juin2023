import axios from "axios";
import { useEffect, useState } from "react";
import Map from "../Map/Map.jsx";

// Style
import "./Degrees.css";
import SetDate from "../../function/SetDate";

const Deg = () => {
  const [degIsLoading, setDegIsLoading] = useState(true);
  const [degData, setDegData] = useState();
  const [seeMore, setSeeMore] = useState();

  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/aboutme/degrees"
        );
        setDegData(data.response);
        setDegIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fectchData();
  }, []);

  return (
    <>
      {!degIsLoading && (
        <div className="pres">
          <div className="background-card"></div>
          {degData.map((data, index) => {
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
                    <a href={data.link} className="deg-card-icon-link">
                      <img
                        src={data.logo}
                        alt={data.school}
                        className="card-icon"
                      />
                    </a>

                    <div className="card-header">
                      <h1>{data.degree}</h1>
                      <h2>{data.school}</h2>
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

export default Deg;
