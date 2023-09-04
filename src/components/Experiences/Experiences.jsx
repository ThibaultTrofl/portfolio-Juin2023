import axios from "axios";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

// Style
import "./Experiences.css";
import SetDate from "../../function/SetDate";

const Exp = () => {
  const size = useWindowSize();

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
        <div className="exp-pres pres">
          <div className="background-card"></div>

          {expData.map((data, index) => {
            return (
              <article
                className="exp-pres-card"
                onClick={() =>
                  seeMore === index ? setSeeMore(null) : setSeeMore(index)
                }
                key={index}
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

                    <p>
                      {SetDate(data.startDate)} - {SetDate(data.endDate)}
                    </p>
                  </div>
                  {seeMore === index && (
                    <>
                      <div className="exp-card-seemore">
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

export default Exp;
