import axios from "axios";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

// Style
import "./Degrees.css";
import SetDate from "../../function/SetDate";

const Deg = () => {
  const size = useWindowSize();

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
        <div className="deg-pres pres">
          <div className="background-card"></div>
          {degData.map((data, index) => {
            return (
              <article
                className="deg-pres-card"
                onClick={() =>
                  seeMore === index ? setSeeMore(null) : setSeeMore(index)
                }
                key={index}
              >
                <div className="background-card"></div>
                <div className="deg-card-contain">
                  <div className="deg-card-pres">
                    <a href={data.link} className="deg-card-icon-link">
                      <img
                        src={data.logo}
                        alt={data.school}
                        className="deg-card-icon"
                      />
                    </a>

                    <div className="deg-card-header">
                      <h1>{data.degree}</h1>
                      <h2>{data.school}</h2>
                    </div>
                  </div>
                  <div className="deg-card-data">
                    <p>{data.location.city}</p>

                    <p>
                      {SetDate(data.startDate)} - {SetDate(data.endDate)}
                    </p>
                  </div>
                  {seeMore === index && (
                    <>
                      <div className="deg-card-seemore">
                        {data.missions.map((data, index) => {
                          return <p key={index}>{data}</p>;
                        })}
                      </div>
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
